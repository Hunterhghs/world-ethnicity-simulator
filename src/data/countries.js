/**
 * Base demographic data by country (2025 estimates).
 * Sources: UN DESA World Population Prospects 2024, World Bank, national censuses.
 * Ethnicity shares are region-of-origin proxies where direct data is unavailable.
 * Categories: european, african, eastAsian, southAsian, latinMestizo, mena, mixed
 */

export const ETHNIC_GROUPS = [
    { id: 'european', label: 'European', color: '#4A90D9' },
    { id: 'african', label: 'Sub-Saharan African', color: '#E67E22' },
    { id: 'eastAsian', label: 'East & Southeast Asian', color: '#F1C40F' },
    { id: 'southAsian', label: 'South Asian', color: '#27AE60' },
    { id: 'latinMestizo', label: 'Latin American / Mestizo', color: '#E74C3C' },
    { id: 'mena', label: 'Middle Eastern / N. African', color: '#8E44AD' },
    { id: 'mixed', label: 'Mixed / Multi-ancestry', color: '#95A5A6' },
];

export const ETHNIC_COLORS = Object.fromEntries(ETHNIC_GROUPS.map(g => [g.id, g.color]));

// Country data: population in millions, ethnicity shares (sum to 1.0),
// TFR (total fertility rate) by group, crude death rate per 1000, GDP per capita USD
export const COUNTRIES = {
    // ── North America ──────────────────────────────────
    USA: {
        name: 'United States', region: 'northAmerica', iso: 'USA', isoN: 840,
        pop2025: 340,
        ethnicity: { european: 0.575, african: 0.134, eastAsian: 0.062, southAsian: 0.022, latinMestizo: 0.193, mena: 0.008, mixed: 0.006 },
        tfr: { european: 1.55, african: 1.73, eastAsian: 1.40, southAsian: 1.65, latinMestizo: 1.85, mena: 1.90, mixed: 1.70 },
        cdr: 8.8, gdppc: 76000,
    },
    CAN: {
        name: 'Canada', region: 'northAmerica', iso: 'CAN', isoN: 124,
        pop2025: 40,
        ethnicity: { european: 0.68, african: 0.04, eastAsian: 0.10, southAsian: 0.09, latinMestizo: 0.02, mena: 0.03, mixed: 0.04 },
        tfr: { european: 1.40, african: 1.70, eastAsian: 1.20, southAsian: 1.60, latinMestizo: 1.70, mena: 1.80, mixed: 1.50 },
        cdr: 7.8, gdppc: 52000,
    },
    MEX: {
        name: 'Mexico', region: 'latinAmerica', iso: 'MEX', isoN: 484,
        pop2025: 130,
        ethnicity: { european: 0.10, african: 0.01, eastAsian: 0.005, southAsian: 0.0, latinMestizo: 0.87, mena: 0.005, mixed: 0.01 },
        tfr: { european: 1.60, african: 1.70, eastAsian: 1.40, southAsian: 1.50, latinMestizo: 1.90, mena: 1.70, mixed: 1.75 },
        cdr: 5.7, gdppc: 11000,
    },
    // ── Europe ─────────────────────────────────────────
    GBR: {
        name: 'United Kingdom', region: 'europe', iso: 'GBR', isoN: 826,
        pop2025: 68,
        ethnicity: { european: 0.79, african: 0.04, eastAsian: 0.03, southAsian: 0.08, latinMestizo: 0.01, mena: 0.02, mixed: 0.03 },
        tfr: { european: 1.49, african: 2.10, eastAsian: 1.30, southAsian: 1.90, latinMestizo: 1.60, mena: 2.00, mixed: 1.60 },
        cdr: 9.4, gdppc: 46000,
    },
    DEU: {
        name: 'Germany', region: 'europe', iso: 'DEU', isoN: 276,
        pop2025: 84,
        ethnicity: { european: 0.78, african: 0.01, eastAsian: 0.02, southAsian: 0.01, latinMestizo: 0.005, mena: 0.06, mixed: 0.115 },
        tfr: { european: 1.35, african: 2.20, eastAsian: 1.25, southAsian: 1.70, latinMestizo: 1.60, mena: 2.10, mixed: 1.55 },
        cdr: 11.5, gdppc: 52000,
    },
    FRA: {
        name: 'France', region: 'europe', iso: 'FRA', isoN: 250,
        pop2025: 68,
        ethnicity: { european: 0.76, african: 0.06, eastAsian: 0.02, southAsian: 0.01, latinMestizo: 0.005, mena: 0.08, mixed: 0.065 },
        tfr: { european: 1.68, african: 2.50, eastAsian: 1.30, southAsian: 1.80, latinMestizo: 1.60, mena: 2.30, mixed: 1.80 },
        cdr: 9.7, gdppc: 44000,
    },
    ITA: {
        name: 'Italy', region: 'europe', iso: 'ITA', isoN: 380,
        pop2025: 59,
        ethnicity: { european: 0.87, african: 0.02, eastAsian: 0.02, southAsian: 0.02, latinMestizo: 0.02, mena: 0.03, mixed: 0.02 },
        tfr: { european: 1.24, african: 2.30, eastAsian: 1.20, southAsian: 1.70, latinMestizo: 1.60, mena: 2.10, mixed: 1.50 },
        cdr: 11.0, gdppc: 36000,
    },
    ESP: {
        name: 'Spain', region: 'europe', iso: 'ESP', isoN: 724,
        pop2025: 48,
        ethnicity: { european: 0.82, african: 0.02, eastAsian: 0.02, southAsian: 0.01, latinMestizo: 0.07, mena: 0.04, mixed: 0.02 },
        tfr: { european: 1.19, african: 2.40, eastAsian: 1.20, southAsian: 1.70, latinMestizo: 1.60, mena: 2.20, mixed: 1.50 },
        cdr: 9.3, gdppc: 32000,
    },
    SWE: {
        name: 'Sweden', region: 'europe', iso: 'SWE', isoN: 752,
        pop2025: 10.5,
        ethnicity: { european: 0.78, african: 0.03, eastAsian: 0.03, southAsian: 0.02, latinMestizo: 0.01, mena: 0.08, mixed: 0.05 },
        tfr: { european: 1.52, african: 2.40, eastAsian: 1.30, southAsian: 1.90, latinMestizo: 1.60, mena: 2.30, mixed: 1.70 },
        cdr: 9.1, gdppc: 56000,
    },
    POL: {
        name: 'Poland', region: 'europe', iso: 'POL', isoN: 616,
        pop2025: 37,
        ethnicity: { european: 0.97, african: 0.002, eastAsian: 0.003, southAsian: 0.002, latinMestizo: 0.001, mena: 0.002, mixed: 0.02 },
        tfr: { european: 1.29, african: 2.00, eastAsian: 1.20, southAsian: 1.60, latinMestizo: 1.50, mena: 1.90, mixed: 1.45 },
        cdr: 11.0, gdppc: 18000,
    },
    RUS: {
        name: 'Russia', region: 'europe', iso: 'RUS', isoN: 643,
        pop2025: 144,
        ethnicity: { european: 0.80, african: 0.005, eastAsian: 0.04, southAsian: 0.005, latinMestizo: 0.0, mena: 0.12, mixed: 0.03 },
        tfr: { european: 1.50, african: 2.00, eastAsian: 1.40, southAsian: 1.60, latinMestizo: 1.50, mena: 2.10, mixed: 1.55 },
        cdr: 13.0, gdppc: 12000,
    },
    // ── Sub-Saharan Africa ────────────────────────────
    NGA: {
        name: 'Nigeria', region: 'subSaharanAfrica', iso: 'NGA', isoN: 566,
        pop2025: 230,
        ethnicity: { european: 0.0, african: 0.99, eastAsian: 0.002, southAsian: 0.003, latinMestizo: 0.0, mena: 0.003, mixed: 0.002 },
        tfr: { european: 1.60, african: 5.10, eastAsian: 1.40, southAsian: 1.70, latinMestizo: 1.50, mena: 2.00, mixed: 2.50 },
        cdr: 11.5, gdppc: 2200,
    },
    ETH: {
        name: 'Ethiopia', region: 'subSaharanAfrica', iso: 'ETH', isoN: 231,
        pop2025: 130,
        ethnicity: { european: 0.0, african: 0.99, eastAsian: 0.001, southAsian: 0.001, latinMestizo: 0.0, mena: 0.005, mixed: 0.003 },
        tfr: { european: 1.50, african: 4.10, eastAsian: 1.40, southAsian: 1.60, latinMestizo: 1.50, mena: 1.90, mixed: 2.20 },
        cdr: 6.3, gdppc: 1100,
    },
    COD: {
        name: 'DR Congo', region: 'subSaharanAfrica', iso: 'COD', isoN: 180,
        pop2025: 109,
        ethnicity: { european: 0.0, african: 0.995, eastAsian: 0.001, southAsian: 0.0, latinMestizo: 0.0, mena: 0.001, mixed: 0.003 },
        tfr: { european: 1.50, african: 5.60, eastAsian: 1.40, southAsian: 1.60, latinMestizo: 1.50, mena: 2.00, mixed: 2.50 },
        cdr: 8.7, gdppc: 580,
    },
    ZAF: {
        name: 'South Africa', region: 'subSaharanAfrica', iso: 'ZAF', isoN: 710,
        pop2025: 62,
        ethnicity: { european: 0.075, african: 0.81, eastAsian: 0.025, southAsian: 0.025, latinMestizo: 0.0, mena: 0.005, mixed: 0.06 },
        tfr: { european: 1.50, african: 2.30, eastAsian: 1.35, southAsian: 1.60, latinMestizo: 1.50, mena: 1.80, mixed: 1.70 },
        cdr: 9.4, gdppc: 6500,
    },
    KEN: {
        name: 'Kenya', region: 'subSaharanAfrica', iso: 'KEN', isoN: 404,
        pop2025: 56,
        ethnicity: { european: 0.005, african: 0.98, eastAsian: 0.003, southAsian: 0.005, latinMestizo: 0.0, mena: 0.003, mixed: 0.004 },
        tfr: { european: 1.50, african: 3.30, eastAsian: 1.40, southAsian: 1.60, latinMestizo: 1.50, mena: 1.90, mixed: 2.00 },
        cdr: 5.2, gdppc: 2100,
    },
    TZA: {
        name: 'Tanzania', region: 'subSaharanAfrica', iso: 'TZA', isoN: 834,
        pop2025: 67,
        ethnicity: { european: 0.002, african: 0.99, eastAsian: 0.002, southAsian: 0.002, latinMestizo: 0.0, mena: 0.002, mixed: 0.002 },
        tfr: { european: 1.50, african: 4.60, eastAsian: 1.40, southAsian: 1.60, latinMestizo: 1.50, mena: 2.00, mixed: 2.30 },
        cdr: 5.8, gdppc: 1200,
    },
    // ── South Asia ─────────────────────────────────────
    IND: {
        name: 'India', region: 'southAsia', iso: 'IND', isoN: 356,
        pop2025: 1440,
        ethnicity: { european: 0.0, african: 0.002, eastAsian: 0.02, southAsian: 0.97, latinMestizo: 0.0, mena: 0.005, mixed: 0.003 },
        tfr: { european: 1.50, african: 1.80, eastAsian: 1.40, southAsian: 2.00, latinMestizo: 1.50, mena: 1.80, mixed: 1.70 },
        cdr: 7.3, gdppc: 2700,
    },
    PAK: {
        name: 'Pakistan', region: 'southAsia', iso: 'PAK', isoN: 586,
        pop2025: 240,
        ethnicity: { european: 0.0, african: 0.005, eastAsian: 0.005, southAsian: 0.97, latinMestizo: 0.0, mena: 0.01, mixed: 0.01 },
        tfr: { european: 1.50, african: 1.80, eastAsian: 1.40, southAsian: 3.30, latinMestizo: 1.50, mena: 2.00, mixed: 2.20 },
        cdr: 6.5, gdppc: 1600,
    },
    BGD: {
        name: 'Bangladesh', region: 'southAsia', iso: 'BGD', isoN: 50,
        pop2025: 175,
        ethnicity: { european: 0.0, african: 0.0, eastAsian: 0.01, southAsian: 0.985, latinMestizo: 0.0, mena: 0.003, mixed: 0.002 },
        tfr: { european: 1.50, african: 1.80, eastAsian: 1.40, southAsian: 1.95, latinMestizo: 1.50, mena: 1.80, mixed: 1.70 },
        cdr: 5.5, gdppc: 2700,
    },
    // ── East & Southeast Asia ─────────────────────────
    CHN: {
        name: 'China', region: 'eastAsia', iso: 'CHN', isoN: 156,
        pop2025: 1410,
        ethnicity: { european: 0.0, african: 0.001, eastAsian: 0.985, southAsian: 0.002, latinMestizo: 0.0, mena: 0.002, mixed: 0.01 },
        tfr: { european: 1.50, african: 1.80, eastAsian: 1.05, southAsian: 1.50, latinMestizo: 1.50, mena: 1.70, mixed: 1.30 },
        cdr: 7.4, gdppc: 13000,
    },
    JPN: {
        name: 'Japan', region: 'eastAsia', iso: 'JPN', isoN: 392,
        pop2025: 123,
        ethnicity: { european: 0.003, african: 0.001, eastAsian: 0.975, southAsian: 0.005, latinMestizo: 0.005, mena: 0.001, mixed: 0.01 },
        tfr: { european: 1.50, african: 1.80, eastAsian: 1.20, southAsian: 1.50, latinMestizo: 1.50, mena: 1.70, mixed: 1.40 },
        cdr: 11.0, gdppc: 34000,
    },
    KOR: {
        name: 'South Korea', region: 'eastAsia', iso: 'KOR', isoN: 410,
        pop2025: 52,
        ethnicity: { european: 0.005, african: 0.002, eastAsian: 0.96, southAsian: 0.01, latinMestizo: 0.003, mena: 0.003, mixed: 0.017 },
        tfr: { european: 1.40, african: 1.70, eastAsian: 0.72, southAsian: 1.40, latinMestizo: 1.40, mena: 1.60, mixed: 1.20 },
        cdr: 6.5, gdppc: 33000,
    },
    IDN: {
        name: 'Indonesia', region: 'eastAsia', iso: 'IDN', isoN: 360,
        pop2025: 280,
        ethnicity: { european: 0.003, african: 0.001, eastAsian: 0.04, southAsian: 0.01, latinMestizo: 0.0, mena: 0.01, mixed: 0.936 },
        tfr: { european: 1.50, african: 1.80, eastAsian: 1.90, southAsian: 1.90, latinMestizo: 1.50, mena: 2.10, mixed: 2.10 },
        cdr: 6.5, gdppc: 4900,
    },
    PHL: {
        name: 'Philippines', region: 'eastAsia', iso: 'PHL', isoN: 608,
        pop2025: 117,
        ethnicity: { european: 0.005, african: 0.001, eastAsian: 0.90, southAsian: 0.005, latinMestizo: 0.01, mena: 0.002, mixed: 0.077 },
        tfr: { european: 1.50, african: 1.80, eastAsian: 2.40, southAsian: 1.70, latinMestizo: 1.60, mena: 1.80, mixed: 2.10 },
        cdr: 6.0, gdppc: 3700,
    },
    // ── Middle East / North Africa ────────────────────
    EGY: {
        name: 'Egypt', region: 'mena', iso: 'EGY', isoN: 818,
        pop2025: 110,
        ethnicity: { european: 0.005, african: 0.01, eastAsian: 0.002, southAsian: 0.003, latinMestizo: 0.0, mena: 0.975, mixed: 0.005 },
        tfr: { european: 1.50, african: 2.00, eastAsian: 1.40, southAsian: 1.70, latinMestizo: 1.50, mena: 2.80, mixed: 2.00 },
        cdr: 5.5, gdppc: 4300,
    },
    SAU: {
        name: 'Saudi Arabia', region: 'mena', iso: 'SAU', isoN: 682,
        pop2025: 37,
        ethnicity: { european: 0.02, african: 0.02, eastAsian: 0.08, southAsian: 0.20, latinMestizo: 0.0, mena: 0.65, mixed: 0.03 },
        tfr: { european: 1.50, african: 2.00, eastAsian: 1.40, southAsian: 1.80, latinMestizo: 1.50, mena: 2.20, mixed: 1.80 },
        cdr: 3.5, gdppc: 27000,
    },
    TUR: {
        name: 'Turkey', region: 'mena', iso: 'TUR', isoN: 792,
        pop2025: 86,
        ethnicity: { european: 0.03, african: 0.005, eastAsian: 0.005, southAsian: 0.005, latinMestizo: 0.0, mena: 0.93, mixed: 0.025 },
        tfr: { european: 1.40, african: 2.00, eastAsian: 1.30, southAsian: 1.60, latinMestizo: 1.50, mena: 1.85, mixed: 1.65 },
        cdr: 5.5, gdppc: 10000,
    },
    IRN: {
        name: 'Iran', region: 'mena', iso: 'IRN', isoN: 364,
        pop2025: 90,
        ethnicity: { european: 0.01, african: 0.005, eastAsian: 0.005, southAsian: 0.005, latinMestizo: 0.0, mena: 0.96, mixed: 0.015 },
        tfr: { european: 1.40, african: 1.80, eastAsian: 1.30, southAsian: 1.60, latinMestizo: 1.50, mena: 1.70, mixed: 1.55 },
        cdr: 5.0, gdppc: 4200,
    },
    // ── Latin America ─────────────────────────────────
    BRA: {
        name: 'Brazil', region: 'latinAmerica', iso: 'BRA', isoN: 76,
        pop2025: 216,
        ethnicity: { european: 0.43, african: 0.09, eastAsian: 0.02, southAsian: 0.002, latinMestizo: 0.33, mena: 0.008, mixed: 0.14 },
        tfr: { european: 1.50, african: 1.80, eastAsian: 1.30, southAsian: 1.60, latinMestizo: 1.65, mena: 1.70, mixed: 1.60 },
        cdr: 6.8, gdppc: 9600,
    },
    COL: {
        name: 'Colombia', region: 'latinAmerica', iso: 'COL', isoN: 170,
        pop2025: 52,
        ethnicity: { european: 0.20, african: 0.07, eastAsian: 0.005, southAsian: 0.002, latinMestizo: 0.60, mena: 0.008, mixed: 0.115 },
        tfr: { european: 1.50, african: 1.85, eastAsian: 1.30, southAsian: 1.60, latinMestizo: 1.75, mena: 1.70, mixed: 1.65 },
        cdr: 5.6, gdppc: 6700,
    },
    ARG: {
        name: 'Argentina', region: 'latinAmerica', iso: 'ARG', isoN: 32,
        pop2025: 46,
        ethnicity: { european: 0.60, african: 0.01, eastAsian: 0.01, southAsian: 0.002, latinMestizo: 0.30, mena: 0.03, mixed: 0.048 },
        tfr: { european: 1.55, african: 1.80, eastAsian: 1.30, southAsian: 1.60, latinMestizo: 1.85, mena: 1.70, mixed: 1.70 },
        cdr: 7.5, gdppc: 10500,
    },
    // ── Oceania ───────────────────────────────────────
    AUS: {
        name: 'Australia', region: 'oceania', iso: 'AUS', isoN: 36,
        pop2025: 27,
        ethnicity: { european: 0.64, african: 0.02, eastAsian: 0.14, southAsian: 0.06, latinMestizo: 0.01, mena: 0.03, mixed: 0.10 },
        tfr: { european: 1.50, african: 2.10, eastAsian: 1.30, southAsian: 1.65, latinMestizo: 1.60, mena: 1.90, mixed: 1.60 },
        cdr: 6.8, gdppc: 55000,
    },
};

// Country centroids for map (lon, lat)
export const COUNTRY_CENTROIDS = {
    USA: [-98.5, 39.8], CAN: [-106.3, 56.1], MEX: [-102.5, 23.6],
    GBR: [-1.2, 52.9], DEU: [10.4, 51.2], FRA: [2.2, 46.6],
    ITA: [12.6, 42.5], ESP: [-3.7, 40.4], SWE: [15.5, 62.2],
    POL: [19.1, 51.9], RUS: [105.3, 61.5],
    NGA: [8.7, 9.1], ETH: [40.5, 9.1], COD: [21.8, -4.0],
    ZAF: [22.9, -30.6], KEN: [38.0, -0.02], TZA: [34.9, -6.4],
    IND: [78.9, 20.6], PAK: [69.3, 30.4], BGD: [90.4, 23.7],
    CHN: [104.2, 35.9], JPN: [138.3, 36.2], KOR: [128.0, 35.9],
    IDN: [113.9, -0.8], PHL: [121.8, 12.9],
    EGY: [30.8, 26.8], SAU: [45.1, 23.9], TUR: [35.2, 38.9], IRN: [53.7, 32.4],
    BRA: [-51.9, -14.2], COL: [-74.3, 4.6], ARG: [-63.6, -38.4],
    AUS: [133.8, -25.3],
};
