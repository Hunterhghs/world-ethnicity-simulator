/**
 * Major migration corridors with base annual flows (in thousands).
 * Sources: UN International Migrant Stock 2020, OECD International Migration Outlook,
 * World Bank Bilateral Migration Matrix.
 * ethnicProfile = ethnic composition of the migration flow (sums to ~1.0)
 */

export const MIGRATION_CORRIDORS = [
    // ── Latin America → USA ──────────────────────────
    {
        id: 'MEX_USA', from: 'MEX', to: 'USA',
        baseFlow: 350, distance: 3000,
        ethnicProfile: { latinMestizo: 0.92, european: 0.05, mixed: 0.03 },
    },
    {
        id: 'COL_USA', from: 'COL', to: 'USA',
        baseFlow: 60, distance: 4200,
        ethnicProfile: { latinMestizo: 0.80, european: 0.10, african: 0.05, mixed: 0.05 },
    },
    {
        id: 'BRA_USA', from: 'BRA', to: 'USA',
        baseFlow: 30, distance: 7700,
        ethnicProfile: { latinMestizo: 0.40, european: 0.35, african: 0.10, mixed: 0.15 },
    },
    // ── Africa → Europe ──────────────────────────────
    {
        id: 'NGA_GBR', from: 'NGA', to: 'GBR',
        baseFlow: 40, distance: 5100,
        ethnicProfile: { african: 0.95, mixed: 0.05 },
    },
    {
        id: 'NGA_FRA', from: 'NGA', to: 'FRA',
        baseFlow: 15, distance: 4800,
        ethnicProfile: { african: 0.95, mixed: 0.05 },
    },
    {
        id: 'ETH_DEU', from: 'ETH', to: 'DEU',
        baseFlow: 15, distance: 5600,
        ethnicProfile: { african: 0.95, mixed: 0.05 },
    },
    {
        id: 'ETH_GBR', from: 'ETH', to: 'GBR',
        baseFlow: 10, distance: 5800,
        ethnicProfile: { african: 0.95, mixed: 0.05 },
    },
    {
        id: 'KEN_GBR', from: 'KEN', to: 'GBR',
        baseFlow: 12, distance: 6900,
        ethnicProfile: { african: 0.90, southAsian: 0.05, mixed: 0.05 },
    },
    {
        id: 'COD_FRA', from: 'COD', to: 'FRA',
        baseFlow: 12, distance: 6300,
        ethnicProfile: { african: 0.97, mixed: 0.03 },
    },
    {
        id: 'ZAF_GBR', from: 'ZAF', to: 'GBR',
        baseFlow: 15, distance: 9600,
        ethnicProfile: { european: 0.40, african: 0.35, mixed: 0.15, southAsian: 0.10 },
    },
    // ── Africa → USA ─────────────────────────────────
    {
        id: 'NGA_USA', from: 'NGA', to: 'USA',
        baseFlow: 25, distance: 8800,
        ethnicProfile: { african: 0.95, mixed: 0.05 },
    },
    {
        id: 'ETH_USA', from: 'ETH', to: 'USA',
        baseFlow: 15, distance: 11900,
        ethnicProfile: { african: 0.95, mixed: 0.05 },
    },
    // ── MENA → Europe ────────────────────────────────
    {
        id: 'TUR_DEU', from: 'TUR', to: 'DEU',
        baseFlow: 55, distance: 2600,
        ethnicProfile: { mena: 0.92, mixed: 0.08 },
    },
    {
        id: 'EGY_SAU', from: 'EGY', to: 'SAU',
        baseFlow: 40, distance: 1600,
        ethnicProfile: { mena: 0.97, mixed: 0.03 },
    },
    {
        id: 'IRN_DEU', from: 'IRN', to: 'DEU',
        baseFlow: 15, distance: 4100,
        ethnicProfile: { mena: 0.95, mixed: 0.05 },
    },
    {
        id: 'TUR_FRA', from: 'TUR', to: 'FRA',
        baseFlow: 18, distance: 2800,
        ethnicProfile: { mena: 0.93, mixed: 0.07 },
    },
    {
        id: 'EGY_ITA', from: 'EGY', to: 'ITA',
        baseFlow: 12, distance: 2200,
        ethnicProfile: { mena: 0.90, african: 0.05, mixed: 0.05 },
    },
    // ── South Asia → Gulf / West ─────────────────────
    {
        id: 'IND_SAU', from: 'IND', to: 'SAU',
        baseFlow: 120, distance: 4100,
        ethnicProfile: { southAsian: 0.97, mixed: 0.03 },
    },
    {
        id: 'PAK_SAU', from: 'PAK', to: 'SAU',
        baseFlow: 80, distance: 3300,
        ethnicProfile: { southAsian: 0.95, mena: 0.03, mixed: 0.02 },
    },
    {
        id: 'IND_GBR', from: 'IND', to: 'GBR',
        baseFlow: 55, distance: 6700,
        ethnicProfile: { southAsian: 0.95, mixed: 0.05 },
    },
    {
        id: 'IND_USA', from: 'IND', to: 'USA',
        baseFlow: 100, distance: 13600,
        ethnicProfile: { southAsian: 0.95, mixed: 0.05 },
    },
    {
        id: 'PAK_GBR', from: 'PAK', to: 'GBR',
        baseFlow: 20, distance: 6200,
        ethnicProfile: { southAsian: 0.95, mixed: 0.05 },
    },
    {
        id: 'BGD_GBR', from: 'BGD', to: 'GBR',
        baseFlow: 15, distance: 7800,
        ethnicProfile: { southAsian: 0.95, mixed: 0.05 },
    },
    {
        id: 'IND_CAN', from: 'IND', to: 'CAN',
        baseFlow: 100, distance: 11500,
        ethnicProfile: { southAsian: 0.95, mixed: 0.05 },
    },
    {
        id: 'IND_AUS', from: 'IND', to: 'AUS',
        baseFlow: 60, distance: 10400,
        ethnicProfile: { southAsian: 0.95, mixed: 0.05 },
    },
    // ── East Asia → West ─────────────────────────────
    {
        id: 'CHN_USA', from: 'CHN', to: 'USA',
        baseFlow: 65, distance: 11000,
        ethnicProfile: { eastAsian: 0.95, mixed: 0.05 },
    },
    {
        id: 'CHN_CAN', from: 'CHN', to: 'CAN',
        baseFlow: 30, distance: 9800,
        ethnicProfile: { eastAsian: 0.95, mixed: 0.05 },
    },
    {
        id: 'CHN_AUS', from: 'CHN', to: 'AUS',
        baseFlow: 35, distance: 8500,
        ethnicProfile: { eastAsian: 0.95, mixed: 0.05 },
    },
    {
        id: 'PHL_USA', from: 'PHL', to: 'USA',
        baseFlow: 45, distance: 13600,
        ethnicProfile: { eastAsian: 0.90, mixed: 0.10 },
    },
    {
        id: 'KOR_USA', from: 'KOR', to: 'USA',
        baseFlow: 20, distance: 10900,
        ethnicProfile: { eastAsian: 0.93, mixed: 0.07 },
    },
    // ── Intra-Europe ─────────────────────────────────
    {
        id: 'POL_DEU', from: 'POL', to: 'DEU',
        baseFlow: 40, distance: 570,
        ethnicProfile: { european: 0.95, mixed: 0.05 },
    },
    {
        id: 'POL_GBR', from: 'POL', to: 'GBR',
        baseFlow: 25, distance: 1450,
        ethnicProfile: { european: 0.95, mixed: 0.05 },
    },
    // ── Latin America → Europe ───────────────────────
    {
        id: 'COL_ESP', from: 'COL', to: 'ESP',
        baseFlow: 25, distance: 8500,
        ethnicProfile: { latinMestizo: 0.75, european: 0.15, mixed: 0.10 },
    },
    {
        id: 'ARG_ESP', from: 'ARG', to: 'ESP',
        baseFlow: 18, distance: 10100,
        ethnicProfile: { european: 0.50, latinMestizo: 0.35, mixed: 0.15 },
    },
    {
        id: 'BRA_ITA', from: 'BRA', to: 'ITA',
        baseFlow: 12, distance: 9200,
        ethnicProfile: { european: 0.40, latinMestizo: 0.35, mixed: 0.15, african: 0.10 },
    },
];
