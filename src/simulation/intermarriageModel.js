/**
 * Intermarriage reclassification model.
 * 
 * rate(c,t) = baseRate × (1 + diversityIndex(c,t))^sensitivity × generationalFactor(t)
 * 
 * diversityIndex = 1 - HHI(ethnic shares)
 *   HHI = sum of squared shares; lower HHI = higher diversity
 * 
 * generationalFactor grows over time reflecting social integration trends.
 * Children of interethnic couples are reclassified to the "Mixed" category.
 */

import { ETHNIC_GROUPS } from '../data/countries.js';

const GROUP_IDS = ETHNIC_GROUPS.map(g => g.id);

/**
 * Compute the Herfindahl-Hirschman Index (concentration) of ethnic shares.
 */
function computeHHI(countryPop) {
    const total = GROUP_IDS.reduce((sum, gid) => sum + (countryPop[gid] || 0), 0);
    if (total <= 0) return 1;
    return GROUP_IDS.reduce((hhi, gid) => {
        const share = (countryPop[gid] || 0) / total;
        return hhi + share * share;
    }, 0);
}

/**
 * Compute the diversity index (1 - HHI).
 * Ranges from ~0 (homogeneous) to ~0.86 (perfectly even across 7 groups).
 */
export function computeDiversityIndex(countryPop) {
    return 1 - computeHHI(countryPop);
}

/**
 * Compute intermarriage rates for all countries at year t.
 * @param {Object} state - Current population state
 * @param {Object} params - { intermarriageSensitivity, baseIntermarriageRate }
 * @param {number} year - Current year
 * @returns {Object} { countryCode: annualIntermarriageRate }
 */
export function computeIntermarriageRates(state, params, year) {
    const {
        intermarriageSensitivity = 1.0,
        baseIntermarriageRate = 0.003,
    } = params;

    const rates = {};

    // Generational factor: intermarriage gradually increases over decades
    const yearsElapsed = year - 2025;
    const generationalFactor = 1.0 + yearsElapsed * 0.005;

    for (const [code, pop] of Object.entries(state)) {
        const diversityIndex = computeDiversityIndex(pop);

        // Higher diversity → more intermarriage opportunities
        const rate = baseIntermarriageRate
            * Math.pow(1 + diversityIndex, intermarriageSensitivity)
            * generationalFactor;

        // Cap at reasonable maximum (5% per year)
        rates[code] = Math.min(rate, 0.05);
    }

    return rates;
}
