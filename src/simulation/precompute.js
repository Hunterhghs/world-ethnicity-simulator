/**
 * Precompute all scenario projections for years 2025–2100.
 * Runs on app initialization for instant time-slider scrubbing.
 */

import { COUNTRIES, ETHNIC_GROUPS } from '../data/countries.js';
import { initializeState, stepYear, getTotalPop, getShares } from './cohortModel.js';
import { computeMigrationFlows, getNetMigration } from './migrationModel.js';
import { computeIntermarriageRates, computeDiversityIndex } from './intermarriageModel.js';
import { SCENARIOS } from './scenarios.js';
import { REGIONS } from '../data/regions.js';

const GROUP_IDS = ETHNIC_GROUPS.map(g => g.id);
const START_YEAR = 2025;
const END_YEAR = 2100;

/**
 * Precompute a single scenario.
 * @returns {Array} Array of yearly snapshots, each containing:
 *   { year, countries: { code: { pop, shares, netMig } }, regions: { ... }, global: { ... } }
 */
function precomputeScenario(params) {
    let state = initializeState(COUNTRIES);
    const snapshots = [];

    for (let year = START_YEAR; year <= END_YEAR; year++) {
        // Compute flows for this year
        const migrationFlows = computeMigrationFlows(state, COUNTRIES, params, year);
        const intermarriageRates = computeIntermarriageRates(state, params, year);

        // Build snapshot
        const countrySnapshots = {};
        for (const code of Object.keys(COUNTRIES)) {
            const pop = getTotalPop(state[code]);
            const shares = getShares(state[code]);
            const netMig = getNetMigration(migrationFlows, code);
            const diversity = computeDiversityIndex(state[code]);
            countrySnapshots[code] = { pop, shares, netMig, diversity, absolute: { ...state[code] } };
        }

        // Compute regional aggregates
        const regionSnapshots = {};
        for (const [regionId, region] of Object.entries(REGIONS)) {
            const regionPop = {};
            for (const gid of GROUP_IDS) regionPop[gid] = 0;

            for (const code of region.countries) {
                if (state[code]) {
                    for (const gid of GROUP_IDS) {
                        regionPop[gid] += state[code][gid] || 0;
                    }
                }
            }

            const total = GROUP_IDS.reduce((s, g) => s + regionPop[g], 0);
            const shares = total > 0
                ? Object.fromEntries(GROUP_IDS.map(g => [g, regionPop[g] / total]))
                : Object.fromEntries(GROUP_IDS.map(g => [g, 0]));

            const netMig = region.countries.reduce((s, c) => s + (countrySnapshots[c]?.netMig || 0), 0);

            regionSnapshots[regionId] = { pop: total, shares, netMig, diversity: computeDiversityIndex(regionPop) };
        }

        // Global aggregate
        const globalPop = {};
        for (const gid of GROUP_IDS) globalPop[gid] = 0;
        for (const st of Object.values(state)) {
            for (const gid of GROUP_IDS) globalPop[gid] += st[gid] || 0;
        }
        const globalTotal = GROUP_IDS.reduce((s, g) => s + globalPop[g], 0);
        const globalShares = globalTotal > 0
            ? Object.fromEntries(GROUP_IDS.map(g => [g, globalPop[g] / globalTotal]))
            : Object.fromEntries(GROUP_IDS.map(g => [g, 0]));

        snapshots.push({
            year,
            countries: countrySnapshots,
            regions: regionSnapshots,
            global: {
                pop: globalTotal,
                shares: globalShares,
                diversity: computeDiversityIndex(globalPop),
            },
        });

        // Advance state to next year (if not last year)
        if (year < END_YEAR) {
            state = stepYear(state, COUNTRIES, migrationFlows, intermarriageRates, params);
        }
    }

    return snapshots;
}

/**
 * Precompute all scenarios.
 * @returns {Object} { scenarioId: [ yearlySnapshots ] }
 */
export function precomputeAll() {
    const results = {};
    for (const [id, scenario] of Object.entries(SCENARIOS)) {
        results[id] = precomputeScenario(scenario.params);
    }
    return results;
}

/**
 * Get snapshot for a specific year and scenario.
 */
export function getSnapshot(projections, scenarioId, year) {
    const yearIndex = year - START_YEAR;
    return projections[scenarioId]?.[yearIndex] || null;
}

export { START_YEAR, END_YEAR };
