/**
 * Cohort stock-and-flow model for demographic projection.
 * 
 * Core equation per ethnic group g, country c, year t:
 * P(g,c,t+1) = P(g,c,t) + B(g,c,t) - D(g,c,t) + M_net(g,c,t) - R_out(g,c,t) + R_in(mixed,c,t)
 * 
 * Where:
 *   B(g,c,t) = P(g,c,t) × (TFR(g) / 2) × (1/generationLength) — births
 *   D(g,c,t) = P(g,c,t) × CDR / 1000 — deaths
 *   M_net    = in-migration minus out-migration from gravity model
 *   R_out    = outflow via intermarriage → mixed reclassification
 *   R_in     = inflow to mixed category from intermarriage
 */

import { ETHNIC_GROUPS } from '../data/countries.js';

const GROUP_IDS = ETHNIC_GROUPS.map(g => g.id);
const GENERATION_LENGTH = 28; // average years between generations

/**
 * Run one simulation step: advance from year t to t+1.
 * @param {Object} state - Current population state { countryCode: { groupId: populationInMillions } }
 * @param {Object} countryData - Static country metadata from COUNTRIES
 * @param {Object} migrationFlows - Computed net migration by country and group { countryCode: { groupId: netMigrants } }
 * @param {Object} intermarriageRates - { countryCode: rate }
 * @param {Object} params - User-adjustable parameters
 * @returns {Object} New state for t+1
 */
export function stepYear(state, countryData, migrationFlows, intermarriageRates, params) {
    const newState = {};

    for (const [code, country] of Object.entries(countryData)) {
        const pop = state[code];
        if (!pop) continue;

        const newPop = {};
        let totalIntermarriageOut = 0;

        for (const gid of GROUP_IDS) {
            const p = pop[gid] || 0;
            if (p <= 0) {
                newPop[gid] = 0;
                continue;
            }

            // Births: Convert TFR to crude birth rate
            // CBR ≈ TFR / (2 × e0) × 1000, where e0 ≈ 72 years globally
            // Simplified: annualBirthRate = TFR / (2 × avgLifeExpectancy)
            const tfr = (country.tfr && country.tfr[gid]) || 1.7;
            const lifeExpectancy = 72; // approximate global average
            const annualBirthRate = tfr / (2 * lifeExpectancy);
            const births = p * annualBirthRate;

            // Deaths: crude death rate
            const cdr = country.cdr || 8.0;
            const deaths = p * (cdr / 1000);

            // Net migration (in thousands, converted to millions)
            const mig = (migrationFlows[code] && migrationFlows[code][gid]) || 0;

            // Intermarriage outflow (non-mixed groups lose people to mixed)
            let imOut = 0;
            if (gid !== 'mixed') {
                const rate = intermarriageRates[code] || 0.002;
                imOut = p * rate;
                totalIntermarriageOut += imOut;
            }

            newPop[gid] = Math.max(0, p + births - deaths + mig / 1000 - imOut);
        }

        // Add intermarriage inflow to mixed
        newPop['mixed'] = (newPop['mixed'] || 0) + totalIntermarriageOut;

        // Ensure no negatives
        for (const gid of GROUP_IDS) {
            if ((newPop[gid] || 0) < 0) newPop[gid] = 0;
        }

        newState[code] = newPop;
    }

    return newState;
}

/**
 * Initialize population state from country data.
 */
export function initializeState(countryData) {
    const state = {};
    for (const [code, country] of Object.entries(countryData)) {
        state[code] = {};
        for (const gid of GROUP_IDS) {
            state[code][gid] = country.pop2025 * (country.ethnicity[gid] || 0);
        }
    }
    return state;
}

/**
 * Get total population for a country from state.
 */
export function getTotalPop(countryPop) {
    return GROUP_IDS.reduce((sum, gid) => sum + (countryPop[gid] || 0), 0);
}

/**
 * Get ethnicity shares for a country from state.
 */
export function getShares(countryPop) {
    const total = getTotalPop(countryPop);
    if (total <= 0) return Object.fromEntries(GROUP_IDS.map(g => [g, 0]));
    return Object.fromEntries(GROUP_IDS.map(g => [g, (countryPop[g] || 0) / total]));
}
