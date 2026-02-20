/**
 * Gravity-based migration flow model.
 * 
 * Flow(o,d,t) = baseFlow × (GDP_d / GDP_o)^wageElasticity
 *               × (Pop_o / Pop_d)^demoPressure
 *               × (1000 / distance)^distanceFriction
 *               × policyOpenness
 * 
 * Sources: Derived from UN migrant stock trends, calibrated to OECD migration data.
 */

import { MIGRATION_CORRIDORS } from '../data/migrationCorridors.js';
import { ETHNIC_GROUPS } from '../data/countries.js';

const GROUP_IDS = ETHNIC_GROUPS.map(g => g.id);

/**
 * Compute net migration flows for all countries at year t.
 * @param {Object} state - Current population state
 * @param {Object} countryData - Static country metadata
 * @param {Object} params - { wageElasticity, demoPressure, distanceFriction, policyOpenness }
 * @param {number} year - Current year
 * @returns {Object} { countryCode: { groupId: netMigrantsInThousands } }
 */
export function computeMigrationFlows(state, countryData, params, year) {
    const flows = {};

    // Initialize flow accumulators
    for (const code of Object.keys(countryData)) {
        flows[code] = {};
        for (const gid of GROUP_IDS) {
            flows[code][gid] = 0;
        }
    }

    const {
        wageElasticity = 0.5,
        demoPressure = 0.3,
        distanceFriction = 0.8,
        policyOpenness = 1.0,
        migrationMultiplier = 1.0,
    } = params;

    for (const corridor of MIGRATION_CORRIDORS) {
        const from = countryData[corridor.from];
        const to = countryData[corridor.to];
        if (!from || !to) continue;

        // Wage differential factor
        const wageRatio = (to.gdppc || 10000) / (from.gdppc || 1000);
        const wageFactor = Math.pow(Math.max(wageRatio, 0.1), wageElasticity);

        // Demographic pressure (young, growing populations push emigration)
        const fromPop = Object.values(state[corridor.from] || {}).reduce((s, v) => s + v, 0);
        const toPop = Object.values(state[corridor.to] || {}).reduce((s, v) => s + v, 0);
        const demoFactor = Math.pow(Math.max((fromPop || 1) / (toPop || 1), 0.01), demoPressure);

        // Distance friction
        const distFactor = Math.pow(1000 / Math.max(corridor.distance, 100), distanceFriction);

        // Time trend: slight increase over time reflecting globalization
        const timeFactor = 1.0 + (year - 2025) * 0.002;

        // Total flow
        const totalFlow = corridor.baseFlow * wageFactor * demoFactor * distFactor
            * policyOpenness * migrationMultiplier * timeFactor;

        // Distribute by ethnic profile of the corridor
        for (const gid of GROUP_IDS) {
            const share = (corridor.ethnicProfile && corridor.ethnicProfile[gid]) || 0;
            const groupFlow = totalFlow * share;

            // Add to destination (in-migration)
            if (flows[corridor.to]) {
                flows[corridor.to][gid] = (flows[corridor.to][gid] || 0) + groupFlow;
            }

            // Subtract from origin (out-migration)
            if (flows[corridor.from]) {
                flows[corridor.from][gid] = (flows[corridor.from][gid] || 0) - groupFlow;
            }
        }
    }

    return flows;
}

/**
 * Get total net migration for a country.
 */
export function getNetMigration(flows, code) {
    if (!flows[code]) return 0;
    return Object.values(flows[code]).reduce((sum, v) => sum + v, 0);
}
