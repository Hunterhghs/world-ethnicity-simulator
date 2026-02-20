/**
 * Scenario presets for the simulation.
 * Each scenario overrides default parameters to model different futures.
 */

export const SCENARIOS = {
    baseline: {
        id: 'baseline',
        label: 'Baseline',
        description: 'Current trends extrapolated with moderate assumptions.',
        icon: '📊',
        params: {
            wageElasticity: 0.5,
            demoPressure: 0.3,
            distanceFriction: 0.8,
            policyOpenness: 1.0,
            migrationMultiplier: 1.0,
            intermarriageSensitivity: 1.0,
            baseIntermarriageRate: 0.003,
        },
    },
    highMigration: {
        id: 'highMigration',
        label: 'High Migration',
        description: 'Open borders, economic integration — 1.5× migration flows.',
        icon: '🌍',
        params: {
            wageElasticity: 0.7,
            demoPressure: 0.4,
            distanceFriction: 0.6,
            policyOpenness: 1.5,
            migrationMultiplier: 1.5,
            intermarriageSensitivity: 1.2,
            baseIntermarriageRate: 0.004,
        },
    },
    lowMigration: {
        id: 'lowMigration',
        label: 'Low Migration',
        description: 'Restrictive policies, reduced flows — 0.5× migration.',
        icon: '🔒',
        params: {
            wageElasticity: 0.3,
            demoPressure: 0.2,
            distanceFriction: 1.0,
            policyOpenness: 0.5,
            migrationMultiplier: 0.5,
            intermarriageSensitivity: 0.7,
            baseIntermarriageRate: 0.002,
        },
    },
    highIntermixing: {
        id: 'highIntermixing',
        label: 'High Intermixing',
        description: 'Accelerated social integration — 2× intermarriage sensitivity.',
        icon: '🤝',
        params: {
            wageElasticity: 0.5,
            demoPressure: 0.3,
            distanceFriction: 0.8,
            policyOpenness: 1.0,
            migrationMultiplier: 1.0,
            intermarriageSensitivity: 2.0,
            baseIntermarriageRate: 0.006,
        },
    },
};

export const SCENARIO_LIST = Object.values(SCENARIOS);
export const DEFAULT_SCENARIO = 'baseline';
