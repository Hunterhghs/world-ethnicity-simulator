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

export const COUNTRIES = {
  "USA": {
    "name": "United States",
    "region": "northAmerica",
    "iso": "USA",
    "isoN": 840,
    "pop2025": 340,
    "ethnicity": {
      "european": 0.575,
      "african": 0.134,
      "eastAsian": 0.062,
      "southAsian": 0.022,
      "latinMestizo": 0.193,
      "mena": 0.008,
      "mixed": 0.006
    },
    "tfr": {
      "european": 1.55,
      "african": 1.73,
      "eastAsian": 1.4,
      "southAsian": 1.65,
      "latinMestizo": 1.85,
      "mena": 1.9,
      "mixed": 1.7
    },
    "cdr": 8.8,
    "gdppc": 76000
  },
  "CAN": {
    "name": "Canada",
    "region": "northAmerica",
    "iso": "CAN",
    "isoN": 124,
    "pop2025": 40,
    "ethnicity": {
      "european": 0.68,
      "african": 0.04,
      "eastAsian": 0.1,
      "southAsian": 0.09,
      "latinMestizo": 0.02,
      "mena": 0.03,
      "mixed": 0.04
    },
    "tfr": {
      "european": 1.4,
      "african": 1.7,
      "eastAsian": 1.2,
      "southAsian": 1.6,
      "latinMestizo": 1.7,
      "mena": 1.8,
      "mixed": 1.5
    },
    "cdr": 7.8,
    "gdppc": 52000
  },
  "GBR": {
    "name": "United Kingdom",
    "region": "europe",
    "iso": "GBR",
    "isoN": 826,
    "pop2025": 68,
    "ethnicity": {
      "european": 0.79,
      "african": 0.04,
      "eastAsian": 0.03,
      "southAsian": 0.08,
      "latinMestizo": 0.01,
      "mena": 0.02,
      "mixed": 0.03
    },
    "tfr": {
      "european": 1.49,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9.4,
    "gdppc": 46000
  },
  "DEU": {
    "name": "Germany",
    "region": "europe",
    "iso": "DEU",
    "isoN": 276,
    "pop2025": 84,
    "ethnicity": {
      "european": 0.78,
      "african": 0.01,
      "eastAsian": 0.02,
      "southAsian": 0.01,
      "latinMestizo": 0.005,
      "mena": 0.06,
      "mixed": 0.115
    },
    "tfr": {
      "european": 1.35,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 11.5,
    "gdppc": 52000
  },
  "FRA": {
    "name": "France",
    "region": "europe",
    "iso": "FRA",
    "isoN": 250,
    "pop2025": 68,
    "ethnicity": {
      "european": 0.76,
      "african": 0.06,
      "eastAsian": 0.02,
      "southAsian": 0.01,
      "latinMestizo": 0.005,
      "mena": 0.08,
      "mixed": 0.065
    },
    "tfr": {
      "european": 1.68,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9.7,
    "gdppc": 44000
  },
  "GUF": {
    "name": "French Guiana",
    "region": "latinAmerica",
    "iso": "GUF",
    "isoN": 254,
    "pop2025": 0.31,
    "ethnicity": {
      "european": 0.12,
      "african": 0.35,
      "eastAsian": 0.05,
      "southAsian": 0.02,
      "latinMestizo": 0.35,
      "mena": 0.01,
      "mixed": 0.10
    },
    "tfr": {
      "european": 1.6,
      "african": 2.5,
      "eastAsian": 1.4,
      "southAsian": 1.8,
      "latinMestizo": 2.2,
      "mena": 1.8,
      "mixed": 2.0
    },
    "cdr": 3.5,
    "gdppc": 18000
  },
  "ITA": {
    "name": "Italy",
    "region": "europe",
    "iso": "ITA",
    "isoN": 380,
    "pop2025": 59,
    "ethnicity": {
      "european": 0.87,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.11
    },
    "tfr": {
      "european": 1.24,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 11,
    "gdppc": 36000
  },
  "ESP": {
    "name": "Spain",
    "region": "europe",
    "iso": "ESP",
    "isoN": 724,
    "pop2025": 48,
    "ethnicity": {
      "european": 0.82,
      "african": 0.02,
      "eastAsian": 0.02,
      "southAsian": 0.01,
      "latinMestizo": 0.07,
      "mena": 0.04,
      "mixed": 0.02
    },
    "tfr": {
      "european": 1.19,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9.3,
    "gdppc": 32000
  },
  "SWE": {
    "name": "Sweden",
    "region": "europe",
    "iso": "SWE",
    "isoN": 752,
    "pop2025": 10.5,
    "ethnicity": {
      "european": 0.78,
      "african": 0.03,
      "eastAsian": 0.03,
      "southAsian": 0.02,
      "latinMestizo": 0.01,
      "mena": 0.08,
      "mixed": 0.05
    },
    "tfr": {
      "european": 1.52,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9.1,
    "gdppc": 56000
  },
  "POL": {
    "name": "Poland",
    "region": "europe",
    "iso": "POL",
    "isoN": 616,
    "pop2025": 37,
    "ethnicity": {
      "european": 0.97,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.010000000000000026
    },
    "tfr": {
      "european": 1.29,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 11,
    "gdppc": 18000
  },
  "RUS": {
    "name": "Russia",
    "region": "europe",
    "iso": "RUS",
    "isoN": 643,
    "pop2025": 144,
    "ethnicity": {
      "european": 0.8,
      "african": 0.005,
      "eastAsian": 0.04,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.12,
      "mixed": 0.03
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 13,
    "gdppc": 12000
  },
  "NOR": {
    "name": "Norway",
    "region": "europe",
    "iso": "NOR",
    "isoN": 578,
    "pop2025": 5.5,
    "ethnicity": {
      "european": 0.83,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.15000000000000005
    },
    "tfr": {
      "european": 1.48,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.9,
    "gdppc": 82000
  },
  "FIN": {
    "name": "Finland",
    "region": "europe",
    "iso": "FIN",
    "isoN": 246,
    "pop2025": 5.5,
    "ethnicity": {
      "european": 0.93,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.04999999999999995
    },
    "tfr": {
      "european": 1.37,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 10,
    "gdppc": 53000
  },
  "DNK": {
    "name": "Denmark",
    "region": "europe",
    "iso": "DNK",
    "isoN": 208,
    "pop2025": 5.9,
    "ethnicity": {
      "european": 0.86,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.12000000000000001
    },
    "tfr": {
      "european": 1.55,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9.5,
    "gdppc": 62000
  },
  "NLD": {
    "name": "Netherlands",
    "region": "europe",
    "iso": "NLD",
    "isoN": 528,
    "pop2025": 17.5,
    "ethnicity": {
      "european": 0.77,
      "african": 0.03,
      "eastAsian": 0.03,
      "southAsian": 0.03,
      "latinMestizo": 0.02,
      "mena": 0.05,
      "mixed": 0.07
    },
    "tfr": {
      "european": 1.49,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9.7,
    "gdppc": 57000
  },
  "BEL": {
    "name": "Belgium",
    "region": "europe",
    "iso": "BEL",
    "isoN": 56,
    "pop2025": 11.6,
    "ethnicity": {
      "european": 0.78,
      "african": 0.04,
      "eastAsian": 0.02,
      "southAsian": 0.01,
      "latinMestizo": 0.01,
      "mena": 0.06,
      "mixed": 0.08
    },
    "tfr": {
      "european": 1.55,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 10.2,
    "gdppc": 50000
  },
  "CHE": {
    "name": "Switzerland",
    "region": "europe",
    "iso": "CHE",
    "isoN": 756,
    "pop2025": 8.8,
    "ethnicity": {
      "european": 0.82,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.16000000000000006
    },
    "tfr": {
      "european": 1.46,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8,
    "gdppc": 93000
  },
  "AUT": {
    "name": "Austria",
    "region": "europe",
    "iso": "AUT",
    "isoN": 40,
    "pop2025": 9.1,
    "ethnicity": {
      "european": 0.84,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.14000000000000004
    },
    "tfr": {
      "european": 1.44,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9.8,
    "gdppc": 55000
  },
  "IRL": {
    "name": "Ireland",
    "region": "europe",
    "iso": "IRL",
    "isoN": 372,
    "pop2025": 5.1,
    "ethnicity": {
      "european": 0.85,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.13000000000000003
    },
    "tfr": {
      "european": 1.63,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.4,
    "gdppc": 85000
  },
  "PRT": {
    "name": "Portugal",
    "region": "europe",
    "iso": "PRT",
    "isoN": 620,
    "pop2025": 10.3,
    "ethnicity": {
      "european": 0.9,
      "african": 0.02,
      "eastAsian": 0.01,
      "southAsian": 0.005,
      "latinMestizo": 0.03,
      "mena": 0.01,
      "mixed": 0.025
    },
    "tfr": {
      "european": 1.38,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 11.3,
    "gdppc": 25000
  },
  "GRC": {
    "name": "Greece",
    "region": "europe",
    "iso": "GRC",
    "isoN": 300,
    "pop2025": 10.4,
    "ethnicity": {
      "european": 0.9,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.07999999999999997
    },
    "tfr": {
      "european": 1.3,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 12,
    "gdppc": 22000
  },
  "CZE": {
    "name": "Czechia",
    "region": "europe",
    "iso": "CZE",
    "isoN": 203,
    "pop2025": 10.8,
    "ethnicity": {
      "european": 0.95,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.030000000000000044
    },
    "tfr": {
      "european": 1.65,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 11.5,
    "gdppc": 27000
  },
  "ROU": {
    "name": "Romania",
    "region": "europe",
    "iso": "ROU",
    "isoN": 642,
    "pop2025": 19,
    "ethnicity": {
      "european": 0.96,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.020000000000000035
    },
    "tfr": {
      "european": 1.6,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 13.5,
    "gdppc": 15000
  },
  "HUN": {
    "name": "Hungary",
    "region": "europe",
    "iso": "HUN",
    "isoN": 348,
    "pop2025": 9.7,
    "ethnicity": {
      "european": 0.94,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.04000000000000005
    },
    "tfr": {
      "european": 1.55,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 13,
    "gdppc": 18000
  },
  "BGR": {
    "name": "Bulgaria",
    "region": "europe",
    "iso": "BGR",
    "isoN": 100,
    "pop2025": 6.5,
    "ethnicity": {
      "european": 0.92,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.059999999999999956
    },
    "tfr": {
      "european": 1.56,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 16,
    "gdppc": 13000
  },
  "HRV": {
    "name": "Croatia",
    "region": "europe",
    "iso": "HRV",
    "isoN": 191,
    "pop2025": 3.9,
    "ethnicity": {
      "european": 0.96,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.020000000000000035
    },
    "tfr": {
      "european": 1.47,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 13,
    "gdppc": 17000
  },
  "SVK": {
    "name": "Slovakia",
    "region": "europe",
    "iso": "SVK",
    "isoN": 703,
    "pop2025": 5.4,
    "ethnicity": {
      "european": 0.95,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.030000000000000044
    },
    "tfr": {
      "european": 1.52,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 10.5,
    "gdppc": 21000
  },
  "SRB": {
    "name": "Serbia",
    "region": "europe",
    "iso": "SRB",
    "isoN": 688,
    "pop2025": 6.7,
    "ethnicity": {
      "european": 0.94,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.04000000000000005
    },
    "tfr": {
      "european": 1.46,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 14.5,
    "gdppc": 9000
  },
  "UKR": {
    "name": "Ukraine",
    "region": "europe",
    "iso": "UKR",
    "isoN": 804,
    "pop2025": 37,
    "ethnicity": {
      "european": 0.95,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.030000000000000044
    },
    "tfr": {
      "european": 1.23,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 14,
    "gdppc": 4500
  },
  "BLR": {
    "name": "Belarus",
    "region": "europe",
    "iso": "BLR",
    "isoN": 112,
    "pop2025": 9.2,
    "ethnicity": {
      "european": 0.96,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.020000000000000035
    },
    "tfr": {
      "european": 1.38,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 13,
    "gdppc": 7000
  },
  "LTU": {
    "name": "Lithuania",
    "region": "europe",
    "iso": "LTU",
    "isoN": 440,
    "pop2025": 2.8,
    "ethnicity": {
      "european": 0.95,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.030000000000000044
    },
    "tfr": {
      "european": 1.55,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 14.5,
    "gdppc": 23000
  },
  "LVA": {
    "name": "Latvia",
    "region": "europe",
    "iso": "LVA",
    "isoN": 428,
    "pop2025": 1.8,
    "ethnicity": {
      "european": 0.93,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.04999999999999995
    },
    "tfr": {
      "european": 1.55,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 15,
    "gdppc": 20000
  },
  "EST": {
    "name": "Estonia",
    "region": "europe",
    "iso": "EST",
    "isoN": 233,
    "pop2025": 1.3,
    "ethnicity": {
      "european": 0.9,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.07999999999999997
    },
    "tfr": {
      "european": 1.58,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 12,
    "gdppc": 28000
  },
  "SVN": {
    "name": "Slovenia",
    "region": "europe",
    "iso": "SVN",
    "isoN": 705,
    "pop2025": 2.1,
    "ethnicity": {
      "european": 0.95,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.030000000000000044
    },
    "tfr": {
      "european": 1.57,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 10,
    "gdppc": 29000
  },
  "BIH": {
    "name": "Bosnia",
    "region": "europe",
    "iso": "BIH",
    "isoN": 70,
    "pop2025": 3.2,
    "ethnicity": {
      "european": 0.95,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.030000000000000044
    },
    "tfr": {
      "european": 1.25,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 11,
    "gdppc": 7000
  },
  "ALB": {
    "name": "Albania",
    "region": "europe",
    "iso": "ALB",
    "isoN": 8,
    "pop2025": 2.8,
    "ethnicity": {
      "european": 0.93,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.04999999999999995
    },
    "tfr": {
      "european": 1.36,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8,
    "gdppc": 6500
  },
  "MKD": {
    "name": "North Macedonia",
    "region": "europe",
    "iso": "MKD",
    "isoN": 807,
    "pop2025": 2.1,
    "ethnicity": {
      "european": 0.9,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.07999999999999997
    },
    "tfr": {
      "european": 1.42,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 10.5,
    "gdppc": 6800
  },
  "MDA": {
    "name": "Moldova",
    "region": "europe",
    "iso": "MDA",
    "isoN": 498,
    "pop2025": 2.6,
    "ethnicity": {
      "european": 0.95,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.030000000000000044
    },
    "tfr": {
      "european": 1.26,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 12.5,
    "gdppc": 5000
  },
  "ISL": {
    "name": "Iceland",
    "region": "europe",
    "iso": "ISL",
    "isoN": 352,
    "pop2025": 0.38,
    "ethnicity": {
      "european": 0.89,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.08999999999999998
    },
    "tfr": {
      "european": 1.72,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.5,
    "gdppc": 73000
  },
  "NGA": {
    "name": "Nigeria",
    "region": "subSaharanAfrica",
    "iso": "NGA",
    "isoN": 566,
    "pop2025": 230,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 5.1,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 11.5,
    "gdppc": 2200
  },
  "ETH": {
    "name": "Ethiopia",
    "region": "subSaharanAfrica",
    "iso": "ETH",
    "isoN": 231,
    "pop2025": 130,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 4.1,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.3,
    "gdppc": 1100
  },
  "COD": {
    "name": "DR Congo",
    "region": "subSaharanAfrica",
    "iso": "COD",
    "isoN": 180,
    "pop2025": 109,
    "ethnicity": {
      "european": 0.002,
      "african": 0.995,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": -0.004999999999999996
    },
    "tfr": {
      "european": 1.5,
      "african": 5.6,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8.7,
    "gdppc": 580
  },
  "ZAF": {
    "name": "South Africa",
    "region": "subSaharanAfrica",
    "iso": "ZAF",
    "isoN": 710,
    "pop2025": 62,
    "ethnicity": {
      "european": 0.075,
      "african": 0.81,
      "eastAsian": 0.025,
      "southAsian": 0.025,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.06
    },
    "tfr": {
      "european": 1.5,
      "african": 2.3,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9.4,
    "gdppc": 6500
  },
  "KEN": {
    "name": "Kenya",
    "region": "subSaharanAfrica",
    "iso": "KEN",
    "isoN": 404,
    "pop2025": 56,
    "ethnicity": {
      "european": 0.002,
      "african": 0.98,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.010000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 3.3,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.2,
    "gdppc": 2100
  },
  "TZA": {
    "name": "Tanzania",
    "region": "subSaharanAfrica",
    "iso": "TZA",
    "isoN": 834,
    "pop2025": 67,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 4.6,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.8,
    "gdppc": 1200
  },
  "UGA": {
    "name": "Uganda",
    "region": "subSaharanAfrica",
    "iso": "UGA",
    "isoN": 800,
    "pop2025": 50,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 4.7,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.3,
    "gdppc": 960
  },
  "GHA": {
    "name": "Ghana",
    "region": "subSaharanAfrica",
    "iso": "GHA",
    "isoN": 288,
    "pop2025": 34,
    "ethnicity": {
      "european": 0.002,
      "african": 0.98,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.010000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 3.6,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.2,
    "gdppc": 2400
  },
  "MOZ": {
    "name": "Mozambique",
    "region": "subSaharanAfrica",
    "iso": "MOZ",
    "isoN": 508,
    "pop2025": 34,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 4.5,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8,
    "gdppc": 500
  },
  "MDG": {
    "name": "Madagascar",
    "region": "subSaharanAfrica",
    "iso": "MDG",
    "isoN": 450,
    "pop2025": 30,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 3.9,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6,
    "gdppc": 530
  },
  "CMR": {
    "name": "Cameroon",
    "region": "subSaharanAfrica",
    "iso": "CMR",
    "isoN": 120,
    "pop2025": 28,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 4.4,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9,
    "gdppc": 1600
  },
  "CIV": {
    "name": "Ivory Coast",
    "region": "subSaharanAfrica",
    "iso": "CIV",
    "isoN": 384,
    "pop2025": 28,
    "ethnicity": {
      "european": 0.002,
      "african": 0.98,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.010000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 4.3,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 10,
    "gdppc": 2600
  },
  "NER": {
    "name": "Niger",
    "region": "subSaharanAfrica",
    "iso": "NER",
    "isoN": 562,
    "pop2025": 27,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 6.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8.5,
    "gdppc": 600
  },
  "MLI": {
    "name": "Mali",
    "region": "subSaharanAfrica",
    "iso": "MLI",
    "isoN": 466,
    "pop2025": 23,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 5.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9,
    "gdppc": 900
  },
  "BFA": {
    "name": "Burkina Faso",
    "region": "subSaharanAfrica",
    "iso": "BFA",
    "isoN": 854,
    "pop2025": 23,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 4.9,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.5,
    "gdppc": 830
  },
  "MWI": {
    "name": "Malawi",
    "region": "subSaharanAfrica",
    "iso": "MWI",
    "isoN": 454,
    "pop2025": 21,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 3.9,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.8,
    "gdppc": 640
  },
  "ZMB": {
    "name": "Zambia",
    "region": "subSaharanAfrica",
    "iso": "ZMB",
    "isoN": 894,
    "pop2025": 20,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 4.3,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7,
    "gdppc": 1300
  },
  "SOM": {
    "name": "Somalia",
    "region": "subSaharanAfrica",
    "iso": "SOM",
    "isoN": 706,
    "pop2025": 18,
    "ethnicity": {
      "european": 0.002,
      "african": 0.98,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.010000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 6,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 11,
    "gdppc": 450
  },
  "TCD": {
    "name": "Chad",
    "region": "subSaharanAfrica",
    "iso": "TCD",
    "isoN": 148,
    "pop2025": 18,
    "ethnicity": {
      "european": 0.002,
      "african": 0.97,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.020000000000000025
    },
    "tfr": {
      "european": 1.5,
      "african": 5.6,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 12,
    "gdppc": 700
  },
  "SEN": {
    "name": "Senegal",
    "region": "subSaharanAfrica",
    "iso": "SEN",
    "isoN": 686,
    "pop2025": 18,
    "ethnicity": {
      "european": 0.002,
      "african": 0.98,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.010000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 4.4,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.5,
    "gdppc": 1600
  },
  "ZWE": {
    "name": "Zimbabwe",
    "region": "subSaharanAfrica",
    "iso": "ZWE",
    "isoN": 716,
    "pop2025": 16,
    "ethnicity": {
      "european": 0.002,
      "african": 0.98,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.010000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 3.4,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.5,
    "gdppc": 1800
  },
  "GIN": {
    "name": "Guinea",
    "region": "subSaharanAfrica",
    "iso": "GIN",
    "isoN": 324,
    "pop2025": 14,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 4.6,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8.5,
    "gdppc": 1300
  },
  "RWA": {
    "name": "Rwanda",
    "region": "subSaharanAfrica",
    "iso": "RWA",
    "isoN": 646,
    "pop2025": 14,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 3.9,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5,
    "gdppc": 900
  },
  "SSD": {
    "name": "South Sudan",
    "region": "subSaharanAfrica",
    "iso": "SSD",
    "isoN": 728,
    "pop2025": 11,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 4.5,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 10,
    "gdppc": 300
  },
  "AGO": {
    "name": "Angola",
    "region": "subSaharanAfrica",
    "iso": "AGO",
    "isoN": 24,
    "pop2025": 36,
    "ethnicity": {
      "european": 0.002,
      "african": 0.98,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.010000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 5.3,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.5,
    "gdppc": 3200
  },
  "SDN": {
    "name": "Sudan",
    "region": "subSaharanAfrica",
    "iso": "SDN",
    "isoN": 729,
    "pop2025": 48,
    "ethnicity": {
      "european": 0,
      "african": 0.6,
      "eastAsian": 0.002,
      "southAsian": 0.003,
      "latinMestizo": 0,
      "mena": 0.38,
      "mixed": 0.015
    },
    "tfr": {
      "european": 1.5,
      "african": 4.4,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7,
    "gdppc": 800
  },
  "COG": {
    "name": "Congo",
    "region": "subSaharanAfrica",
    "iso": "COG",
    "isoN": 178,
    "pop2025": 6,
    "ethnicity": {
      "european": 0.002,
      "african": 0.98,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.010000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 4.2,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.5,
    "gdppc": 2400
  },
  "NAM": {
    "name": "Namibia",
    "region": "subSaharanAfrica",
    "iso": "NAM",
    "isoN": 516,
    "pop2025": 2.6,
    "ethnicity": {
      "european": 0.002,
      "african": 0.87,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.12000000000000001
    },
    "tfr": {
      "european": 1.5,
      "african": 3.3,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7,
    "gdppc": 5000
  },
  "BWA": {
    "name": "Botswana",
    "region": "subSaharanAfrica",
    "iso": "BWA",
    "isoN": 72,
    "pop2025": 2.6,
    "ethnicity": {
      "european": 0.002,
      "african": 0.92,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.06999999999999997
    },
    "tfr": {
      "european": 1.5,
      "african": 2.4,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.5,
    "gdppc": 7800
  },
  "GAB": {
    "name": "Gabon",
    "region": "subSaharanAfrica",
    "iso": "GAB",
    "isoN": 266,
    "pop2025": 2.4,
    "ethnicity": {
      "european": 0.002,
      "african": 0.97,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.020000000000000025
    },
    "tfr": {
      "european": 1.5,
      "african": 3.5,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.5,
    "gdppc": 8000
  },
  "LSO": {
    "name": "Lesotho",
    "region": "subSaharanAfrica",
    "iso": "LSO",
    "isoN": 426,
    "pop2025": 2.3,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 2.9,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 12,
    "gdppc": 1300
  },
  "SWZ": {
    "name": "Eswatini",
    "region": "subSaharanAfrica",
    "iso": "SWZ",
    "isoN": 748,
    "pop2025": 1.2,
    "ethnicity": {
      "european": 0.002,
      "african": 0.96,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.030000000000000034
    },
    "tfr": {
      "european": 1.5,
      "african": 2.9,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 10.5,
    "gdppc": 4000
  },
  "ERI": {
    "name": "Eritrea",
    "region": "subSaharanAfrica",
    "iso": "ERI",
    "isoN": 232,
    "pop2025": 3.7,
    "ethnicity": {
      "european": 0.002,
      "african": 0.98,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.010000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 3.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.5,
    "gdppc": 600
  },
  "MRT": {
    "name": "Mauritania",
    "region": "subSaharanAfrica",
    "iso": "MRT",
    "isoN": 478,
    "pop2025": 4.9,
    "ethnicity": {
      "european": 0,
      "african": 0.4,
      "eastAsian": 0,
      "southAsian": 0,
      "latinMestizo": 0,
      "mena": 0.58,
      "mixed": 0.02
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 4.4,
      "mixed": 1.6
    },
    "cdr": 7,
    "gdppc": 1900
  },
  "BEN": {
    "name": "Benin",
    "region": "subSaharanAfrica",
    "iso": "BEN",
    "isoN": 204,
    "pop2025": 13.5,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 4.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8.5,
    "gdppc": 1400
  },
  "TGO": {
    "name": "Togo",
    "region": "subSaharanAfrica",
    "iso": "TGO",
    "isoN": 768,
    "pop2025": 9,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 4.2,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8.5,
    "gdppc": 1000
  },
  "SLE": {
    "name": "Sierra Leone",
    "region": "subSaharanAfrica",
    "iso": "SLE",
    "isoN": 694,
    "pop2025": 8.6,
    "ethnicity": {
      "european": 0.002,
      "african": 0.98,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.010000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 4.1,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 11,
    "gdppc": 500
  },
  "LBR": {
    "name": "Liberia",
    "region": "subSaharanAfrica",
    "iso": "LBR",
    "isoN": 430,
    "pop2025": 5.4,
    "ethnicity": {
      "european": 0.002,
      "african": 0.98,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 0.010000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 4.1,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.5,
    "gdppc": 700
  },
  "CAF": {
    "name": "Central African Rep.",
    "region": "subSaharanAfrica",
    "iso": "CAF",
    "isoN": 140,
    "pop2025": 5.5,
    "ethnicity": {
      "european": 0.002,
      "african": 0.99,
      "eastAsian": 0.002,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.004,
      "mixed": 8.673617379884035e-18
    },
    "tfr": {
      "european": 1.5,
      "african": 5.9,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 12.5,
    "gdppc": 500
  },
  "IND": {
    "name": "India",
    "region": "southAsia",
    "iso": "IND",
    "isoN": 356,
    "pop2025": 1440,
    "ethnicity": {
      "european": 0,
      "african": 0.002,
      "eastAsian": 0.02,
      "southAsian": 0.97,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.003
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 2,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.3,
    "gdppc": 2700
  },
  "PAK": {
    "name": "Pakistan",
    "region": "southAsia",
    "iso": "PAK",
    "isoN": 586,
    "pop2025": 240,
    "ethnicity": {
      "european": 0.002,
      "african": 0.002,
      "eastAsian": 0.005,
      "southAsian": 0.97,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.016000000000000028
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 3.3,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.5,
    "gdppc": 1600
  },
  "BGD": {
    "name": "Bangladesh",
    "region": "southAsia",
    "iso": "BGD",
    "isoN": 50,
    "pop2025": 175,
    "ethnicity": {
      "european": 0.002,
      "african": 0.002,
      "eastAsian": 0.005,
      "southAsian": 0.985,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.001000000000000013
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.95,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.5,
    "gdppc": 2700
  },
  "LKA": {
    "name": "Sri Lanka",
    "region": "southAsia",
    "iso": "LKA",
    "isoN": 144,
    "pop2025": 22,
    "ethnicity": {
      "european": 0.002,
      "african": 0.002,
      "eastAsian": 0.005,
      "southAsian": 0.93,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.05599999999999995
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.9,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.8,
    "gdppc": 4000
  },
  "NPL": {
    "name": "Nepal",
    "region": "southAsia",
    "iso": "NPL",
    "isoN": 524,
    "pop2025": 31,
    "ethnicity": {
      "european": 0.002,
      "african": 0.002,
      "eastAsian": 0.005,
      "southAsian": 0.95,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.036000000000000046
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.85,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.5,
    "gdppc": 1300
  },
  "MMR": {
    "name": "Myanmar",
    "region": "southAsia",
    "iso": "MMR",
    "isoN": 104,
    "pop2025": 55,
    "ethnicity": {
      "european": 0.001,
      "african": 0.001,
      "eastAsian": 0.7,
      "southAsian": 0.1,
      "latinMestizo": 0,
      "mena": 0.01,
      "mixed": 0.189
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 2.1,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8,
    "gdppc": 1200
  },
  "AFG": {
    "name": "Afghanistan",
    "region": "southAsia",
    "iso": "AFG",
    "isoN": 4,
    "pop2025": 42,
    "ethnicity": {
      "european": 0.002,
      "african": 0.002,
      "eastAsian": 0.005,
      "southAsian": 0.9,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.08599999999999998
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 4.5,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6,
    "gdppc": 500
  },
  "CHN": {
    "name": "China",
    "region": "eastAsia",
    "iso": "CHN",
    "isoN": 156,
    "pop2025": 1410,
    "ethnicity": {
      "european": 0,
      "african": 0.001,
      "eastAsian": 0.985,
      "southAsian": 0.002,
      "latinMestizo": 0,
      "mena": 0.002,
      "mixed": 0.01
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.05,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.4,
    "gdppc": 13000
  },
  "JPN": {
    "name": "Japan",
    "region": "eastAsia",
    "iso": "JPN",
    "isoN": 392,
    "pop2025": 123,
    "ethnicity": {
      "european": 0.003,
      "african": 0.001,
      "eastAsian": 0.975,
      "southAsian": 0.005,
      "latinMestizo": 0.001,
      "mena": 0.002,
      "mixed": 0.013000000000000022
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.2,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 11,
    "gdppc": 34000
  },
  "KOR": {
    "name": "South Korea",
    "region": "eastAsia",
    "iso": "KOR",
    "isoN": 410,
    "pop2025": 52,
    "ethnicity": {
      "european": 0.003,
      "african": 0.001,
      "eastAsian": 0.96,
      "southAsian": 0.005,
      "latinMestizo": 0.001,
      "mena": 0.002,
      "mixed": 0.028000000000000035
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 0.72,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.5,
    "gdppc": 33000
  },
  "IDN": {
    "name": "Indonesia",
    "region": "eastAsia",
    "iso": "IDN",
    "isoN": 360,
    "pop2025": 280,
    "ethnicity": {
      "european": 0.003,
      "african": 0.001,
      "eastAsian": 0.04,
      "southAsian": 0.01,
      "latinMestizo": 0,
      "mena": 0.01,
      "mixed": 0.936
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 2.1
    },
    "cdr": 6.5,
    "gdppc": 4900
  },
  "PHL": {
    "name": "Philippines",
    "region": "eastAsia",
    "iso": "PHL",
    "isoN": 608,
    "pop2025": 117,
    "ethnicity": {
      "european": 0.005,
      "african": 0.001,
      "eastAsian": 0.9,
      "southAsian": 0.005,
      "latinMestizo": 0.01,
      "mena": 0.002,
      "mixed": 0.077
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 2.4,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6,
    "gdppc": 3700
  },
  "VNM": {
    "name": "Vietnam",
    "region": "eastAsia",
    "iso": "VNM",
    "isoN": 704,
    "pop2025": 100,
    "ethnicity": {
      "european": 0.003,
      "african": 0.001,
      "eastAsian": 0.96,
      "southAsian": 0.005,
      "latinMestizo": 0.001,
      "mena": 0.002,
      "mixed": 0.028000000000000035
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.94,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.8,
    "gdppc": 4100
  },
  "THA": {
    "name": "Thailand",
    "region": "eastAsia",
    "iso": "THA",
    "isoN": 764,
    "pop2025": 72,
    "ethnicity": {
      "european": 0.003,
      "african": 0.001,
      "eastAsian": 0.95,
      "southAsian": 0.005,
      "latinMestizo": 0.001,
      "mena": 0.002,
      "mixed": 0.03800000000000005
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.33,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8,
    "gdppc": 7400
  },
  "TWN": {
    "name": "Taiwan",
    "region": "eastAsia",
    "iso": "TWN",
    "isoN": 158,
    "pop2025": 23.5,
    "ethnicity": {
      "european": 0.003,
      "african": 0.001,
      "eastAsian": 0.96,
      "southAsian": 0.005,
      "latinMestizo": 0.001,
      "mena": 0.002,
      "mixed": 0.028000000000000035
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 0.87,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.5,
    "gdppc": 33000
  },
  "MYS": {
    "name": "Malaysia",
    "region": "eastAsia",
    "iso": "MYS",
    "isoN": 458,
    "pop2025": 34,
    "ethnicity": {
      "european": 0.005,
      "african": 0.002,
      "eastAsian": 0.25,
      "southAsian": 0.08,
      "latinMestizo": 0,
      "mena": 0.02,
      "mixed": 0.643
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.8
    },
    "cdr": 5.2,
    "gdppc": 12000
  },
  "PRK": {
    "name": "North Korea",
    "region": "eastAsia",
    "iso": "PRK",
    "isoN": 408,
    "pop2025": 26,
    "ethnicity": {
      "european": 0.003,
      "african": 0.001,
      "eastAsian": 0.99,
      "southAsian": 0.005,
      "latinMestizo": 0.001,
      "mena": 0.002,
      "mixed": -0.0019999999999999914
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.8,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9,
    "gdppc": 1800
  },
  "KHM": {
    "name": "Cambodia",
    "region": "eastAsia",
    "iso": "KHM",
    "isoN": 116,
    "pop2025": 17,
    "ethnicity": {
      "european": 0.003,
      "african": 0.001,
      "eastAsian": 0.97,
      "southAsian": 0.005,
      "latinMestizo": 0.001,
      "mena": 0.002,
      "mixed": 0.018000000000000026
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 2.4,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.7,
    "gdppc": 1800
  },
  "LAO": {
    "name": "Laos",
    "region": "eastAsia",
    "iso": "LAO",
    "isoN": 418,
    "pop2025": 7.6,
    "ethnicity": {
      "european": 0.003,
      "african": 0.001,
      "eastAsian": 0.95,
      "southAsian": 0.005,
      "latinMestizo": 0.001,
      "mena": 0.002,
      "mixed": 0.03800000000000005
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 2.4,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.5,
    "gdppc": 2700
  },
  "MNG": {
    "name": "Mongolia",
    "region": "eastAsia",
    "iso": "MNG",
    "isoN": 496,
    "pop2025": 3.4,
    "ethnicity": {
      "european": 0.003,
      "african": 0.001,
      "eastAsian": 0.96,
      "southAsian": 0.005,
      "latinMestizo": 0.001,
      "mena": 0.002,
      "mixed": 0.028000000000000035
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 2.5,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.3,
    "gdppc": 4500
  },
  "SGP": {
    "name": "Singapore",
    "region": "eastAsia",
    "iso": "SGP",
    "isoN": 702,
    "pop2025": 5.9,
    "ethnicity": {
      "european": 0.03,
      "african": 0.005,
      "eastAsian": 0.74,
      "southAsian": 0.1,
      "latinMestizo": 0,
      "mena": 0.02,
      "mixed": 0.105
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.04,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5,
    "gdppc": 65000
  },
  "PNG": {
    "name": "Papua New Guinea",
    "region": "eastAsia",
    "iso": "PNG",
    "isoN": 598,
    "pop2025": 10,
    "ethnicity": {
      "european": 0.003,
      "african": 0.001,
      "eastAsian": 0.95,
      "southAsian": 0.005,
      "latinMestizo": 0.001,
      "mena": 0.002,
      "mixed": 0.03800000000000005
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 3.1,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7,
    "gdppc": 2900
  },
  "EGY": {
    "name": "Egypt",
    "region": "mena",
    "iso": "EGY",
    "isoN": 818,
    "pop2025": 110,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.975,
      "mixed": 0.0020000000000000226
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.8,
      "mixed": 1.6
    },
    "cdr": 5.5,
    "gdppc": 4300
  },
  "SAU": {
    "name": "Saudi Arabia",
    "region": "mena",
    "iso": "SAU",
    "isoN": 682,
    "pop2025": 37,
    "ethnicity": {
      "european": 0.02,
      "african": 0.02,
      "eastAsian": 0.08,
      "southAsian": 0.2,
      "latinMestizo": 0,
      "mena": 0.65,
      "mixed": 0.03
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.2,
      "mixed": 1.6
    },
    "cdr": 3.5,
    "gdppc": 27000
  },
  "TUR": {
    "name": "Turkey",
    "region": "mena",
    "iso": "TUR",
    "isoN": 792,
    "pop2025": 86,
    "ethnicity": {
      "european": 0.03,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.93,
      "mixed": 0.025
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.85,
      "mixed": 1.6
    },
    "cdr": 5.5,
    "gdppc": 10000
  },
  "IRN": {
    "name": "Iran",
    "region": "mena",
    "iso": "IRN",
    "isoN": 364,
    "pop2025": 90,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.96,
      "mixed": 0.017000000000000036
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.7,
      "mixed": 1.6
    },
    "cdr": 5,
    "gdppc": 4200
  },
  "IRQ": {
    "name": "Iraq",
    "region": "mena",
    "iso": "IRQ",
    "isoN": 368,
    "pop2025": 44,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.96,
      "mixed": 0.017000000000000036
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 3.3,
      "mixed": 1.6
    },
    "cdr": 4.5,
    "gdppc": 5200
  },
  "MAR": {
    "name": "Morocco",
    "region": "mena",
    "iso": "MAR",
    "isoN": 504,
    "pop2025": 38,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.96,
      "mixed": 0.017000000000000036
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.2,
      "mixed": 1.6
    },
    "cdr": 5,
    "gdppc": 3500
  },
  "DZA": {
    "name": "Algeria",
    "region": "mena",
    "iso": "DZA",
    "isoN": 12,
    "pop2025": 45,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.97,
      "mixed": 0.007000000000000027
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.5,
      "mixed": 1.6
    },
    "cdr": 4.5,
    "gdppc": 4000
  },
  "TUN": {
    "name": "Tunisia",
    "region": "mena",
    "iso": "TUN",
    "isoN": 788,
    "pop2025": 12,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.97,
      "mixed": 0.007000000000000027
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.9,
      "mixed": 1.6
    },
    "cdr": 6.5,
    "gdppc": 3800
  },
  "LBY": {
    "name": "Libya",
    "region": "mena",
    "iso": "LBY",
    "isoN": 434,
    "pop2025": 7,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.96,
      "mixed": 0.017000000000000036
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.2,
      "mixed": 1.6
    },
    "cdr": 5.5,
    "gdppc": 6000
  },
  "JOR": {
    "name": "Jordan",
    "region": "mena",
    "iso": "JOR",
    "isoN": 400,
    "pop2025": 11.5,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.95,
      "mixed": 0.027000000000000045
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.6,
      "mixed": 1.6
    },
    "cdr": 3.7,
    "gdppc": 4500
  },
  "LBN": {
    "name": "Lebanon",
    "region": "mena",
    "iso": "LBN",
    "isoN": 422,
    "pop2025": 5.5,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.93,
      "mixed": 0.04699999999999995
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.7,
      "mixed": 1.6
    },
    "cdr": 5,
    "gdppc": 4900
  },
  "ISR": {
    "name": "Israel",
    "region": "mena",
    "iso": "ISR",
    "isoN": 376,
    "pop2025": 9.5,
    "ethnicity": {
      "european": 0.35,
      "african": 0.02,
      "eastAsian": 0.01,
      "southAsian": 0.01,
      "latinMestizo": 0,
      "mena": 0.55,
      "mixed": 0.06
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.9,
      "mixed": 1.6
    },
    "cdr": 5,
    "gdppc": 52000
  },
  "ARE": {
    "name": "UAE",
    "region": "mena",
    "iso": "ARE",
    "isoN": 784,
    "pop2025": 10,
    "ethnicity": {
      "european": 0.05,
      "african": 0.02,
      "eastAsian": 0.15,
      "southAsian": 0.35,
      "latinMestizo": 0,
      "mena": 0.4,
      "mixed": 0.03
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.4,
      "mixed": 1.6
    },
    "cdr": 1.5,
    "gdppc": 44000
  },
  "OMN": {
    "name": "Oman",
    "region": "mena",
    "iso": "OMN",
    "isoN": 512,
    "pop2025": 5.3,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.8,
      "mixed": 0.17699999999999996
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.6,
      "mixed": 1.6
    },
    "cdr": 2.5,
    "gdppc": 19000
  },
  "KWT": {
    "name": "Kuwait",
    "region": "mena",
    "iso": "KWT",
    "isoN": 414,
    "pop2025": 4.4,
    "ethnicity": {
      "european": 0.02,
      "african": 0.02,
      "eastAsian": 0.1,
      "southAsian": 0.3,
      "latinMestizo": 0,
      "mena": 0.53,
      "mixed": 0.03
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2,
      "mixed": 1.6
    },
    "cdr": 2.5,
    "gdppc": 33000
  },
  "QAT": {
    "name": "Qatar",
    "region": "mena",
    "iso": "QAT",
    "isoN": 634,
    "pop2025": 2.7,
    "ethnicity": {
      "european": 0.05,
      "african": 0.02,
      "eastAsian": 0.15,
      "southAsian": 0.35,
      "latinMestizo": 0,
      "mena": 0.38,
      "mixed": 0.05
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 1.5,
    "gdppc": 62000
  },
  "YEM": {
    "name": "Yemen",
    "region": "mena",
    "iso": "YEM",
    "isoN": 887,
    "pop2025": 34,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.98,
      "mixed": -0.002999999999999982
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 3.6,
      "mixed": 1.6
    },
    "cdr": 6,
    "gdppc": 600
  },
  "SYR": {
    "name": "Syria",
    "region": "mena",
    "iso": "SYR",
    "isoN": 760,
    "pop2025": 22,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.93,
      "mixed": 0.04699999999999995
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.7,
      "mixed": 1.6
    },
    "cdr": 4,
    "gdppc": 900
  },
  "PSE": {
    "name": "Palestine",
    "region": "mena",
    "iso": "PSE",
    "isoN": 275,
    "pop2025": 5.5,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.97,
      "mixed": 0.007000000000000027
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 3.4,
      "mixed": 1.6
    },
    "cdr": 3.5,
    "gdppc": 3500
  },
  "MEX": {
    "name": "Mexico",
    "region": "latinAmerica",
    "iso": "MEX",
    "isoN": 484,
    "pop2025": 130,
    "ethnicity": {
      "european": 0.1,
      "african": 0.01,
      "eastAsian": 0.005,
      "southAsian": 0,
      "latinMestizo": 0.87,
      "mena": 0.005,
      "mixed": 0.01
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.9,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.7,
    "gdppc": 11000
  },
  "BRA": {
    "name": "Brazil",
    "region": "latinAmerica",
    "iso": "BRA",
    "isoN": 76,
    "pop2025": 216,
    "ethnicity": {
      "european": 0.43,
      "african": 0.09,
      "eastAsian": 0.02,
      "southAsian": 0.002,
      "latinMestizo": 0.33,
      "mena": 0.008,
      "mixed": 0.14
    },
    "tfr": {
      "european": 1.65,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.8,
    "gdppc": 9600
  },
  "COL": {
    "name": "Colombia",
    "region": "latinAmerica",
    "iso": "COL",
    "isoN": 170,
    "pop2025": 52,
    "ethnicity": {
      "european": 0.2,
      "african": 0.07,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.6,
      "mena": 0.008,
      "mixed": 0.115
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.75,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.6,
    "gdppc": 6700
  },
  "ARG": {
    "name": "Argentina",
    "region": "latinAmerica",
    "iso": "ARG",
    "isoN": 32,
    "pop2025": 46,
    "ethnicity": {
      "european": 0.6,
      "african": 0.01,
      "eastAsian": 0.01,
      "southAsian": 0.002,
      "latinMestizo": 0.3,
      "mena": 0.03,
      "mixed": 0.048
    },
    "tfr": {
      "european": 1.85,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.5,
    "gdppc": 10500
  },
  "PER": {
    "name": "Peru",
    "region": "latinAmerica",
    "iso": "PER",
    "isoN": 604,
    "pop2025": 34,
    "ethnicity": {
      "european": 0.08,
      "african": 0.03,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.76,
      "mena": 0.003,
      "mixed": 0.12
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 2,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.5,
    "gdppc": 7200
  },
  "VEN": {
    "name": "Venezuela",
    "region": "latinAmerica",
    "iso": "VEN",
    "isoN": 862,
    "pop2025": 29,
    "ethnicity": {
      "european": 0.08,
      "african": 0.03,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.7,
      "mena": 0.003,
      "mixed": 0.18000000000000005
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 2.1,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.8,
    "gdppc": 3700
  },
  "CHL": {
    "name": "Chile",
    "region": "latinAmerica",
    "iso": "CHL",
    "isoN": 152,
    "pop2025": 19.5,
    "ethnicity": {
      "european": 0.45,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.45,
      "mena": 0.008,
      "mixed": 0.08
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.5,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6,
    "gdppc": 16000
  },
  "ECU": {
    "name": "Ecuador",
    "region": "latinAmerica",
    "iso": "ECU",
    "isoN": 218,
    "pop2025": 18,
    "ethnicity": {
      "european": 0.08,
      "african": 0.03,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.78,
      "mena": 0.003,
      "mixed": 0.09999999999999998
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 2,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.2,
    "gdppc": 6400
  },
  "GTM": {
    "name": "Guatemala",
    "region": "latinAmerica",
    "iso": "GTM",
    "isoN": 320,
    "pop2025": 18,
    "ethnicity": {
      "european": 0.08,
      "african": 0.03,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.8,
      "mena": 0.003,
      "mixed": 0.07999999999999996
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 2.5,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 4.7,
    "gdppc": 5000
  },
  "CUB": {
    "name": "Cuba",
    "region": "latinAmerica",
    "iso": "CUB",
    "isoN": 192,
    "pop2025": 11,
    "ethnicity": {
      "european": 0.35,
      "african": 0.1,
      "eastAsian": 0.01,
      "southAsian": 0,
      "latinMestizo": 0.3,
      "mena": 0.005,
      "mixed": 0.235
    },
    "tfr": {
      "european": 1.45,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9,
    "gdppc": 9500
  },
  "BOL": {
    "name": "Bolivia",
    "region": "latinAmerica",
    "iso": "BOL",
    "isoN": 68,
    "pop2025": 12.3,
    "ethnicity": {
      "european": 0.08,
      "african": 0.03,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.8,
      "mena": 0.003,
      "mixed": 0.07999999999999996
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 2.5,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.5,
    "gdppc": 3800
  },
  "DOM": {
    "name": "Dominican Rep.",
    "region": "latinAmerica",
    "iso": "DOM",
    "isoN": 214,
    "pop2025": 11,
    "ethnicity": {
      "european": 0.15,
      "african": 0.1,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.5,
      "mena": 0.005,
      "mixed": 0.238
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 2.2,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6,
    "gdppc": 9500
  },
  "HND": {
    "name": "Honduras",
    "region": "latinAmerica",
    "iso": "HND",
    "isoN": 340,
    "pop2025": 10.4,
    "ethnicity": {
      "european": 0.08,
      "african": 0.03,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.85,
      "mena": 0.003,
      "mixed": 0.030000000000000027
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 2.3,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 4.5,
    "gdppc": 2800
  },
  "PRY": {
    "name": "Paraguay",
    "region": "latinAmerica",
    "iso": "PRY",
    "isoN": 600,
    "pop2025": 7.3,
    "ethnicity": {
      "european": 0.08,
      "african": 0.03,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.8,
      "mena": 0.003,
      "mixed": 0.07999999999999996
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 2.3,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.5,
    "gdppc": 5800
  },
  "SLV": {
    "name": "El Salvador",
    "region": "latinAmerica",
    "iso": "SLV",
    "isoN": 222,
    "pop2025": 6.3,
    "ethnicity": {
      "european": 0.08,
      "african": 0.03,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.86,
      "mena": 0.003,
      "mixed": 0.020000000000000018
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.7,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7,
    "gdppc": 4400
  },
  "NIC": {
    "name": "Nicaragua",
    "region": "latinAmerica",
    "iso": "NIC",
    "isoN": 558,
    "pop2025": 7,
    "ethnicity": {
      "european": 0.08,
      "african": 0.03,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.82,
      "mena": 0.003,
      "mixed": 0.06000000000000005
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 2.2,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5,
    "gdppc": 2100
  },
  "CRI": {
    "name": "Costa Rica",
    "region": "latinAmerica",
    "iso": "CRI",
    "isoN": 188,
    "pop2025": 5.2,
    "ethnicity": {
      "european": 0.4,
      "african": 0.02,
      "eastAsian": 0.01,
      "southAsian": 0.002,
      "latinMestizo": 0.45,
      "mena": 0.005,
      "mixed": 0.113
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.46,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 4.8,
    "gdppc": 13000
  },
  "PAN": {
    "name": "Panama",
    "region": "latinAmerica",
    "iso": "PAN",
    "isoN": 591,
    "pop2025": 4.4,
    "ethnicity": {
      "european": 0.08,
      "african": 0.03,
      "eastAsian": 0.005,
      "southAsian": 0.002,
      "latinMestizo": 0.65,
      "mena": 0.003,
      "mixed": 0.22999999999999998
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 2.3,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 5.5,
    "gdppc": 15000
  },
  "URY": {
    "name": "Uruguay",
    "region": "latinAmerica",
    "iso": "URY",
    "isoN": 858,
    "pop2025": 3.4,
    "ethnicity": {
      "european": 0.68,
      "african": 0.04,
      "eastAsian": 0.01,
      "southAsian": 0.002,
      "latinMestizo": 0.18,
      "mena": 0.008,
      "mixed": 0.08
    },
    "tfr": {
      "european": 1.48,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9.5,
    "gdppc": 18000
  },
  "JAM": {
    "name": "Jamaica",
    "region": "latinAmerica",
    "iso": "JAM",
    "isoN": 388,
    "pop2025": 2.8,
    "ethnicity": {
      "european": 0.05,
      "african": 0.76,
      "eastAsian": 0.015,
      "southAsian": 0.02,
      "latinMestizo": 0.02,
      "mena": 0.005,
      "mixed": 0.13
    },
    "tfr": {
      "european": 1.5,
      "african": 1.9,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7.5,
    "gdppc": 5500
  },
  "HTI": {
    "name": "Haiti",
    "region": "latinAmerica",
    "iso": "HTI",
    "isoN": 332,
    "pop2025": 12,
    "ethnicity": {
      "european": 0.01,
      "african": 0.93,
      "eastAsian": 0.002,
      "southAsian": 0.001,
      "latinMestizo": 0.02,
      "mena": 0.002,
      "mixed": 0.035
    },
    "tfr": {
      "european": 1.5,
      "african": 2.7,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8.2,
    "gdppc": 1400
  },
  "GUY": {
    "name": "Guyana",
    "region": "latinAmerica",
    "iso": "GUY",
    "isoN": 328,
    "pop2025": 0.8,
    "ethnicity": {
      "european": 0.02,
      "african": 0.28,
      "eastAsian": 0.01,
      "southAsian": 0.39,
      "latinMestizo": 0.05,
      "mena": 0.005,
      "mixed": 0.245
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 2.3,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7,
    "gdppc": 18000
  },
  "TTO": {
    "name": "Trinidad",
    "region": "latinAmerica",
    "iso": "TTO",
    "isoN": 780,
    "pop2025": 1.4,
    "ethnicity": {
      "european": 0.05,
      "african": 0.34,
      "eastAsian": 0.02,
      "southAsian": 0.35,
      "latinMestizo": 0.02,
      "mena": 0.01,
      "mixed": 0.21
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 8.5,
    "gdppc": 17000
  },
  "AUS": {
    "name": "Australia",
    "region": "oceania",
    "iso": "AUS",
    "isoN": 36,
    "pop2025": 27,
    "ethnicity": {
      "european": 0.64,
      "african": 0.02,
      "eastAsian": 0.14,
      "southAsian": 0.06,
      "latinMestizo": 0.01,
      "mena": 0.03,
      "mixed": 0.1
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.8,
    "gdppc": 55000
  },
  "NZL": {
    "name": "New Zealand",
    "region": "oceania",
    "iso": "NZL",
    "isoN": 554,
    "pop2025": 5.2,
    "ethnicity": {
      "european": 0.64,
      "african": 0.015,
      "eastAsian": 0.15,
      "southAsian": 0.04,
      "latinMestizo": 0.005,
      "mena": 0.01,
      "mixed": 0.14
    },
    "tfr": {
      "european": 1.56,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7,
    "gdppc": 45000
  },
  "FJI": {
    "name": "Fiji",
    "region": "oceania",
    "iso": "FJI",
    "isoN": 242,
    "pop2025": 0.9,
    "ethnicity": {
      "european": 0.01,
      "african": 0.005,
      "eastAsian": 0.01,
      "southAsian": 0.37,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.6
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 2.3
    },
    "cdr": 7.5,
    "gdppc": 6000
  },
  "KAZ": {
    "name": "Kazakhstan",
    "region": "europe",
    "iso": "KAZ",
    "isoN": 398,
    "pop2025": 19.5,
    "ethnicity": {
      "european": 0.25,
      "african": 0.002,
      "eastAsian": 0.4,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.2,
      "mixed": 0.143
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 2.6,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7,
    "gdppc": 10000
  },
  "UZB": {
    "name": "Uzbekistan",
    "region": "europe",
    "iso": "UZB",
    "isoN": 860,
    "pop2025": 35,
    "ethnicity": {
      "european": 0.05,
      "african": 0.002,
      "eastAsian": 0.1,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.8,
      "mixed": 0.043
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.8,
      "mixed": 1.6
    },
    "cdr": 5,
    "gdppc": 2200
  },
  "TKM": {
    "name": "Turkmenistan",
    "region": "europe",
    "iso": "TKM",
    "isoN": 795,
    "pop2025": 6.4,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.9,
      "mixed": 0.07699999999999999
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.6,
      "mixed": 1.6
    },
    "cdr": 6,
    "gdppc": 7600
  },
  "TJK": {
    "name": "Tajikistan",
    "region": "europe",
    "iso": "TJK",
    "isoN": 762,
    "pop2025": 10,
    "ethnicity": {
      "european": 0.02,
      "african": 0.002,
      "eastAsian": 0.02,
      "southAsian": 0.1,
      "latinMestizo": 0,
      "mena": 0.83,
      "mixed": 0.028
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 3.1,
      "mixed": 1.6
    },
    "cdr": 5.5,
    "gdppc": 1100
  },
  "KGZ": {
    "name": "Kyrgyzstan",
    "region": "europe",
    "iso": "KGZ",
    "isoN": 417,
    "pop2025": 7,
    "ethnicity": {
      "european": 0.08,
      "african": 0.002,
      "eastAsian": 0.3,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.58,
      "mixed": 0.033
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.9,
      "mixed": 1.6
    },
    "cdr": 5.5,
    "gdppc": 1400
  },
  "GEO": {
    "name": "Georgia",
    "region": "europe",
    "iso": "GEO",
    "isoN": 268,
    "pop2025": 3.7,
    "ethnicity": {
      "european": 0.9,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.07999999999999997
    },
    "tfr": {
      "european": 1.7,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 12.5,
    "gdppc": 5000
  },
  "ARM": {
    "name": "Armenia",
    "region": "europe",
    "iso": "ARM",
    "isoN": 51,
    "pop2025": 3,
    "ethnicity": {
      "european": 0.92,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.003,
      "latinMestizo": 0.002,
      "mena": 0.005,
      "mixed": 0.059999999999999956
    },
    "tfr": {
      "european": 1.6,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 9.5,
    "gdppc": 5000
  },
  "AZE": {
    "name": "Azerbaijan",
    "region": "europe",
    "iso": "AZE",
    "isoN": 31,
    "pop2025": 10.3,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.003,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.9,
      "mixed": 0.07699999999999999
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.7,
      "mixed": 1.6
    },
    "cdr": 6,
    "gdppc": 4800
  },
  "BRA": {
    "name": "Brazil",
    "region": "southAmerica",
    "iso": "BRA",
    "isoN": 76,
    "pop2025": 216,
    "ethnicity": {
      "european": 0.43,
      "african": 0.09,
      "eastAsian": 0.015,
      "southAsian": 0.005,
      "latinMestizo": 0.38,
      "mena": 0.01,
      "mixed": 0.07
    },
    "tfr": {
      "european": 1.55,
      "african": 1.75,
      "eastAsian": 1.3,
      "southAsian": 1.5,
      "latinMestizo": 1.65,
      "mena": 1.6,
      "mixed": 1.6
    },
    "cdr": 6.6,
    "gdppc": 9000
  },
  "ARG": {
    "name": "Argentina",
    "region": "southAmerica",
    "iso": "ARG",
    "isoN": 32,
    "pop2025": 46,
    "ethnicity": {
      "european": 0.62,
      "african": 0.01,
      "eastAsian": 0.01,
      "southAsian": 0.005,
      "latinMestizo": 0.30,
      "mena": 0.02,
      "mixed": 0.035
    },
    "tfr": {
      "european": 1.55,
      "african": 1.7,
      "eastAsian": 1.3,
      "southAsian": 1.5,
      "latinMestizo": 1.7,
      "mena": 1.6,
      "mixed": 1.6
    },
    "cdr": 7.6,
    "gdppc": 13500
  },
  "AUS": {
    "name": "Australia",
    "region": "oceania",
    "iso": "AUS",
    "isoN": 36,
    "pop2025": 26.5,
    "ethnicity": {
      "european": 0.67,
      "african": 0.015,
      "eastAsian": 0.14,
      "southAsian": 0.07,
      "latinMestizo": 0.005,
      "mena": 0.02,
      "mixed": 0.08
    },
    "tfr": {
      "european": 1.58,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 6.5,
    "gdppc": 55000
  },
  "NZL": {
    "name": "New Zealand",
    "region": "oceania",
    "iso": "NZL",
    "isoN": 554,
    "pop2025": 5.2,
    "ethnicity": {
      "european": 0.64,
      "african": 0.01,
      "eastAsian": 0.16,
      "southAsian": 0.04,
      "latinMestizo": 0.005,
      "mena": 0.01,
      "mixed": 0.135
    },
    "tfr": {
      "european": 1.6,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7,
    "gdppc": 42000
  },
  "COL": {
    "name": "Colombia",
    "region": "southAmerica",
    "iso": "COL",
    "isoN": 170,
    "pop2025": 52,
    "ethnicity": {
      "european": 0.20,
      "african": 0.07,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0.58,
      "mena": 0.01,
      "mixed": 0.13
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.5,
      "latinMestizo": 1.7,
      "mena": 1.6,
      "mixed": 1.6
    },
    "cdr": 5.6,
    "gdppc": 6600
  },
  "PER": {
    "name": "Peru",
    "region": "southAmerica",
    "iso": "PER",
    "isoN": 604,
    "pop2025": 34,
    "ethnicity": {
      "european": 0.12,
      "african": 0.02,
      "eastAsian": 0.02,
      "southAsian": 0.005,
      "latinMestizo": 0.72,
      "mena": 0.005,
      "mixed": 0.05
    },
    "tfr": {
      "european": 1.5,
      "african": 1.7,
      "eastAsian": 1.3,
      "southAsian": 1.5,
      "latinMestizo": 1.9,
      "mena": 1.6,
      "mixed": 1.6
    },
    "cdr": 5.8,
    "gdppc": 7000
  },
  "VEN": {
    "name": "Venezuela",
    "region": "southAmerica",
    "iso": "VEN",
    "isoN": 862,
    "pop2025": 28.5,
    "ethnicity": {
      "european": 0.25,
      "african": 0.04,
      "eastAsian": 0.01,
      "southAsian": 0.005,
      "latinMestizo": 0.55,
      "mena": 0.02,
      "mixed": 0.125
    },
    "tfr": {
      "european": 1.5,
      "african": 1.7,
      "eastAsian": 1.3,
      "southAsian": 1.5,
      "latinMestizo": 1.8,
      "mena": 1.6,
      "mixed": 1.6
    },
    "cdr": 5.4,
    "gdppc": 3200
  },
  "CHL": {
    "name": "Chile",
    "region": "southAmerica",
    "iso": "CHL",
    "isoN": 152,
    "pop2025": 19.5,
    "ethnicity": {
      "european": 0.44,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0.47,
      "mena": 0.01,
      "mixed": 0.06
    },
    "tfr": {
      "european": 1.45,
      "african": 1.7,
      "eastAsian": 1.3,
      "southAsian": 1.5,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.5
    },
    "cdr": 6.5,
    "gdppc": 16000
  },
  "ECU": {
    "name": "Ecuador",
    "region": "southAmerica",
    "iso": "ECU",
    "isoN": 218,
    "pop2025": 18,
    "ethnicity": {
      "european": 0.10,
      "african": 0.05,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0.72,
      "mena": 0.005,
      "mixed": 0.115
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.5,
      "latinMestizo": 1.9,
      "mena": 1.6,
      "mixed": 1.6
    },
    "cdr": 5.2,
    "gdppc": 6200
  },
  "BOL": {
    "name": "Bolivia",
    "region": "southAmerica",
    "iso": "BOL",
    "isoN": 68,
    "pop2025": 12.2,
    "ethnicity": {
      "european": 0.05,
      "african": 0.01,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0.84,
      "mena": 0.005,
      "mixed": 0.085
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.5,
      "latinMestizo": 2.2,
      "mena": 1.6,
      "mixed": 1.7
    },
    "cdr": 6.5,
    "gdppc": 3600
  },
  "PRY": {
    "name": "Paraguay",
    "region": "southAmerica",
    "iso": "PRY",
    "isoN": 600,
    "pop2025": 7.4,
    "ethnicity": {
      "european": 0.15,
      "african": 0.01,
      "eastAsian": 0.01,
      "southAsian": 0.005,
      "latinMestizo": 0.70,
      "mena": 0.01,
      "mixed": 0.115
    },
    "tfr": {
      "european": 1.5,
      "african": 1.7,
      "eastAsian": 1.3,
      "southAsian": 1.5,
      "latinMestizo": 1.9,
      "mena": 1.6,
      "mixed": 1.6
    },
    "cdr": 5.2,
    "gdppc": 5800
  },
  "URY": {
    "name": "Uruguay",
    "region": "southAmerica",
    "iso": "URY",
    "isoN": 858,
    "pop2025": 3.5,
    "ethnicity": {
      "european": 0.83,
      "african": 0.04,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0.08,
      "mena": 0.005,
      "mixed": 0.035
    },
    "tfr": {
      "european": 1.45,
      "african": 1.7,
      "eastAsian": 1.3,
      "southAsian": 1.5,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.5
    },
    "cdr": 9.4,
    "gdppc": 18000
  },
  "GUY": {
    "name": "Guyana",
    "region": "southAmerica",
    "iso": "GUY",
    "isoN": 328,
    "pop2025": 0.8,
    "ethnicity": {
      "european": 0.005,
      "african": 0.29,
      "eastAsian": 0.01,
      "southAsian": 0.40,
      "latinMestizo": 0.005,
      "mena": 0.005,
      "mixed": 0.285
    },
    "tfr": {
      "european": 1.5,
      "african": 1.9,
      "eastAsian": 1.3,
      "southAsian": 1.8,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.7
    },
    "cdr": 7.5,
    "gdppc": 14000
  },
  "PNG": {
    "name": "Papua New Guinea",
    "region": "oceania",
    "iso": "PNG",
    "isoN": 598,
    "pop2025": 10,
    "ethnicity": {
      "european": 0.005,
      "african": 0.005,
      "eastAsian": 0.96,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.02
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 2.8,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 7,
    "gdppc": 2800
  },
  "MNG": {
    "name": "Mongolia",
    "region": "eastAsia",
    "iso": "MNG",
    "isoN": 496,
    "pop2025": 3.4,
    "ethnicity": {
      "european": 0.005,
      "african": 0.005,
      "eastAsian": 0.96,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.02
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 2.5,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 6.2,
    "gdppc": 4500
  },
  "MMR": {
    "name": "Myanmar",
    "region": "southeastAsia",
    "iso": "MMR",
    "isoN": 104,
    "pop2025": 54,
    "ethnicity": {
      "european": 0.005,
      "african": 0.005,
      "eastAsian": 0.90,
      "southAsian": 0.05,
      "latinMestizo": 0,
      "mena": 0.01,
      "mixed": 0.03
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 2.0,
      "southAsian": 1.8,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.7
    },
    "cdr": 8.2,
    "gdppc": 1200
  },
  "LAO": {
    "name": "Laos",
    "region": "southeastAsia",
    "iso": "LAO",
    "isoN": 418,
    "pop2025": 7.5,
    "ethnicity": {
      "european": 0.005,
      "african": 0.005,
      "eastAsian": 0.96,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.02
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 2.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 6.5,
    "gdppc": 2700
  },
  "KHM": {
    "name": "Cambodia",
    "region": "southeastAsia",
    "iso": "KHM",
    "isoN": 116,
    "pop2025": 17,
    "ethnicity": {
      "european": 0.005,
      "african": 0.005,
      "eastAsian": 0.95,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.03
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 2.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 6,
    "gdppc": 1700
  },
  "NPL": {
    "name": "Nepal",
    "region": "southAsia",
    "iso": "NPL",
    "isoN": 524,
    "pop2025": 30.5,
    "ethnicity": {
      "european": 0.005,
      "african": 0.005,
      "eastAsian": 0.15,
      "southAsian": 0.79,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.045
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.8,
      "southAsian": 1.9,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.7
    },
    "cdr": 6,
    "gdppc": 1300
  },
  "LKA": {
    "name": "Sri Lanka",
    "region": "southAsia",
    "iso": "LKA",
    "isoN": 144,
    "pop2025": 22,
    "ethnicity": {
      "european": 0.005,
      "african": 0.005,
      "eastAsian": 0.005,
      "southAsian": 0.95,
      "latinMestizo": 0,
      "mena": 0.01,
      "mixed": 0.025
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.8,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.6
    },
    "cdr": 7,
    "gdppc": 3800
  },
  "OMN": {
    "name": "Oman",
    "region": "middleEast",
    "iso": "OMN",
    "isoN": 512,
    "pop2025": 5.2,
    "ethnicity": {
      "european": 0.005,
      "african": 0.01,
      "eastAsian": 0.03,
      "southAsian": 0.35,
      "latinMestizo": 0,
      "mena": 0.56,
      "mixed": 0.045
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.6,
      "mixed": 1.8
    },
    "cdr": 2.5,
    "gdppc": 21000
  },
  "LBY": {
    "name": "Libya",
    "region": "northAfrica",
    "iso": "LBY",
    "isoN": 434,
    "pop2025": 7,
    "ethnicity": {
      "european": 0.005,
      "african": 0.05,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.90,
      "mixed": 0.035
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.2,
      "mixed": 1.7
    },
    "cdr": 5,
    "gdppc": 7000
  },
  "TUN": {
    "name": "Tunisia",
    "region": "northAfrica",
    "iso": "TUN",
    "isoN": 788,
    "pop2025": 12,
    "ethnicity": {
      "european": 0.02,
      "african": 0.01,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.93,
      "mixed": 0.03
    },
    "tfr": {
      "european": 1.5,
      "african": 1.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.0,
      "mixed": 1.7
    },
    "cdr": 6.5,
    "gdppc": 3800
  },
  "AGO": {
    "name": "Angola",
    "region": "subSaharanAfrica",
    "iso": "AGO",
    "isoN": 24,
    "pop2025": 36,
    "ethnicity": {
      "european": 0.01,
      "african": 0.93,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0.005,
      "mena": 0.005,
      "mixed": 0.04
    },
    "tfr": {
      "european": 1.5,
      "african": 4.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 2.0
    },
    "cdr": 7.5,
    "gdppc": 3200
  },
  "ZMB": {
    "name": "Zambia",
    "region": "subSaharanAfrica",
    "iso": "ZMB",
    "isoN": 894,
    "pop2025": 20,
    "ethnicity": {
      "european": 0.01,
      "african": 0.95,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.025
    },
    "tfr": {
      "european": 1.5,
      "african": 4.2,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 2.0
    },
    "cdr": 6.5,
    "gdppc": 1300
  },
  "ZWE": {
    "name": "Zimbabwe",
    "region": "subSaharanAfrica",
    "iso": "ZWE",
    "isoN": 716,
    "pop2025": 16,
    "ethnicity": {
      "european": 0.005,
      "african": 0.97,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.01
    },
    "tfr": {
      "european": 1.5,
      "african": 3.4,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 7.5,
    "gdppc": 1700
  },
  "MLI": {
    "name": "Mali",
    "region": "subSaharanAfrica",
    "iso": "MLI",
    "isoN": 466,
    "pop2025": 22.5,
    "ethnicity": {
      "european": 0.005,
      "african": 0.97,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.01
    },
    "tfr": {
      "european": 1.5,
      "african": 5.7,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 2.0
    },
    "cdr": 8.5,
    "gdppc": 900
  },
  "NER": {
    "name": "Niger",
    "region": "subSaharanAfrica",
    "iso": "NER",
    "isoN": 562,
    "pop2025": 26,
    "ethnicity": {
      "european": 0.005,
      "african": 0.97,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.01
    },
    "tfr": {
      "european": 1.5,
      "african": 6.7,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 2.0
    },
    "cdr": 8,
    "gdppc": 600
  },
  "TCD": {
    "name": "Chad",
    "region": "subSaharanAfrica",
    "iso": "TCD",
    "isoN": 148,
    "pop2025": 18,
    "ethnicity": {
      "european": 0.005,
      "african": 0.90,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.06,
      "mixed": 0.025
    },
    "tfr": {
      "european": 1.5,
      "african": 5.5,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.0,
      "mixed": 2.0
    },
    "cdr": 12,
    "gdppc": 700
  },
  "SEN": {
    "name": "Senegal",
    "region": "subSaharanAfrica",
    "iso": "SEN",
    "isoN": 686,
    "pop2025": 17.5,
    "ethnicity": {
      "european": 0.005,
      "african": 0.96,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.01,
      "mixed": 0.015
    },
    "tfr": {
      "european": 1.5,
      "african": 4.2,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 5.5,
    "gdppc": 1600
  },
  "GIN": {
    "name": "Guinea",
    "region": "subSaharanAfrica",
    "iso": "GIN",
    "isoN": 324,
    "pop2025": 14,
    "ethnicity": {
      "european": 0.005,
      "african": 0.97,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.01
    },
    "tfr": {
      "european": 1.5,
      "african": 4.4,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 8,
    "gdppc": 1200
  },
  "BFA": {
    "name": "Burkina Faso",
    "region": "subSaharanAfrica",
    "iso": "BFA",
    "isoN": 854,
    "pop2025": 22.5,
    "ethnicity": {
      "european": 0.005,
      "african": 0.97,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.01
    },
    "tfr": {
      "european": 1.5,
      "african": 4.7,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 7.5,
    "gdppc": 900
  },
  "NAM": {
    "name": "Namibia",
    "region": "subSaharanAfrica",
    "iso": "NAM",
    "isoN": 516,
    "pop2025": 2.6,
    "ethnicity": {
      "european": 0.06,
      "african": 0.87,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.055
    },
    "tfr": {
      "european": 1.5,
      "african": 3.2,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 7.5,
    "gdppc": 5000
  },
  "BWA": {
    "name": "Botswana",
    "region": "subSaharanAfrica",
    "iso": "BWA",
    "isoN": 72,
    "pop2025": 2.4,
    "ethnicity": {
      "european": 0.03,
      "african": 0.93,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.025
    },
    "tfr": {
      "european": 1.5,
      "african": 2.6,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.7
    },
    "cdr": 8,
    "gdppc": 7500
  },
  "SWZ": {
    "name": "Eswatini",
    "region": "subSaharanAfrica",
    "iso": "SWZ",
    "isoN": 748,
    "pop2025": 1.2,
    "ethnicity": {
      "european": 0.01,
      "african": 0.97,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.005
    },
    "tfr": {
      "european": 1.5,
      "african": 2.8,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.7
    },
    "cdr": 10,
    "gdppc": 4000
  },
  "LSO": {
    "name": "Lesotho",
    "region": "subSaharanAfrica",
    "iso": "LSO",
    "isoN": 426,
    "pop2025": 2.2,
    "ethnicity": {
      "european": 0.005,
      "african": 0.98,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0
    },
    "tfr": {
      "european": 1.5,
      "african": 2.9,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.7
    },
    "cdr": 12,
    "gdppc": 1100
  },
  "MRT": {
    "name": "Mauritania",
    "region": "subSaharanAfrica",
    "iso": "MRT",
    "isoN": 478,
    "pop2025": 4.8,
    "ethnicity": {
      "european": 0.005,
      "african": 0.40,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.52,
      "mixed": 0.065
    },
    "tfr": {
      "european": 1.5,
      "african": 4.0,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 3.8,
      "mixed": 2.0
    },
    "cdr": 7.5,
    "gdppc": 2000
  },
  "SOM": {
    "name": "Somalia",
    "region": "subSaharanAfrica",
    "iso": "SOM",
    "isoN": 706,
    "pop2025": 18,
    "ethnicity": {
      "european": 0.005,
      "african": 0.90,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.06,
      "mixed": 0.025
    },
    "tfr": {
      "european": 1.5,
      "african": 5.9,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 2.0,
      "mixed": 2.0
    },
    "cdr": 11,
    "gdppc": 500
  },
  "ERI": {
    "name": "Eritrea",
    "region": "subSaharanAfrica",
    "iso": "ERI",
    "isoN": 232,
    "pop2025": 3.7,
    "ethnicity": {
      "european": 0.005,
      "african": 0.95,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.02,
      "mixed": 0.015
    },
    "tfr": {
      "european": 1.5,
      "african": 3.6,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.8,
      "mixed": 1.8
    },
    "cdr": 6.5,
    "gdppc": 600
  },
  "CAF": {
    "name": "Central African Republic",
    "region": "subSaharanAfrica",
    "iso": "CAF",
    "isoN": 140,
    "pop2025": 5.5,
    "ethnicity": {
      "european": 0.005,
      "african": 0.97,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.01
    },
    "tfr": {
      "european": 1.5,
      "african": 4.5,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 12,
    "gdppc": 500
  },
  "COG": {
    "name": "Republic of Congo",
    "region": "subSaharanAfrica",
    "iso": "COG",
    "isoN": 178,
    "pop2025": 6,
    "ethnicity": {
      "european": 0.005,
      "african": 0.97,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.01
    },
    "tfr": {
      "european": 1.5,
      "african": 4.2,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 7,
    "gdppc": 2200
  },
  "GAB": {
    "name": "Gabon",
    "region": "subSaharanAfrica",
    "iso": "GAB",
    "isoN": 266,
    "pop2025": 2.4,
    "ethnicity": {
      "european": 0.02,
      "african": 0.94,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.025
    },
    "tfr": {
      "european": 1.5,
      "african": 3.4,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.7
    },
    "cdr": 6.5,
    "gdppc": 8000
  },
  "GNQ": {
    "name": "Equatorial Guinea",
    "region": "subSaharanAfrica",
    "iso": "GNQ",
    "isoN": 226,
    "pop2025": 1.7,
    "ethnicity": {
      "european": 0.005,
      "african": 0.97,
      "eastAsian": 0.005,
      "southAsian": 0.005,
      "latinMestizo": 0,
      "mena": 0.005,
      "mixed": 0.01
    },
    "tfr": {
      "european": 1.5,
      "african": 4.0,
      "eastAsian": 1.3,
      "southAsian": 1.6,
      "latinMestizo": 1.6,
      "mena": 1.6,
      "mixed": 1.8
    },
    "cdr": 9,
    "gdppc": 8500
  }
};

// Post-process: For Latin American countries, fold most of the "European" share
// (which represents Spanish/Portuguese colonial ancestry) into "Latin American / Mestizo".
// Keep a small 5% residual for genuinely non-Iberian European immigrants.
const LATIN_REGIONS = new Set(['latinAmerica', 'southAmerica']);
for (const [code, country] of Object.entries(COUNTRIES)) {
  if (LATIN_REGIONS.has(country.region) && country.ethnicity) {
    const euroShare = country.ethnicity.european || 0;
    const residual = Math.min(euroShare, 0.05); // keep up to 5% as European
    const transfer = euroShare - residual;
    if (transfer > 0) {
      country.ethnicity.european = residual;
      country.ethnicity.latinMestizo = (country.ethnicity.latinMestizo || 0) + transfer;
    }
  }
}

export const COUNTRY_CENTROIDS = {
  "USA": [
    -98.5,
    39.8
  ],
  "CAN": [
    -106.3,
    56.1
  ],
  "MEX": [
    -102.5,
    23.6
  ],
  "GBR": [
    -1.2,
    52.9
  ],
  "DEU": [
    10.4,
    51.2
  ],
  "FRA": [
    2.2,
    46.6
  ],
  "ITA": [
    12.6,
    42.5
  ],
  "ESP": [
    -3.7,
    40.4
  ],
  "SWE": [
    15.5,
    62.2
  ],
  "POL": [
    19.1,
    51.9
  ],
  "RUS": [
    105.3,
    61.5
  ],
  "NOR": [
    8.5,
    65
  ],
  "FIN": [
    26,
    64
  ],
  "DNK": [
    9.5,
    56
  ],
  "NLD": [
    5.3,
    52.1
  ],
  "BEL": [
    4.5,
    50.8
  ],
  "CHE": [
    8.2,
    46.8
  ],
  "AUT": [
    14.6,
    47.7
  ],
  "IRL": [
    -8,
    53.4
  ],
  "PRT": [
    -8.2,
    39.4
  ],
  "GRC": [
    21.8,
    39.1
  ],
  "CZE": [
    15.5,
    49.8
  ],
  "ROU": [
    25,
    46
  ],
  "HUN": [
    19.5,
    47.2
  ],
  "BGR": [
    25.5,
    42.7
  ],
  "HRV": [
    15.2,
    45.1
  ],
  "SVK": [
    19.7,
    48.7
  ],
  "SRB": [
    21,
    44
  ],
  "UKR": [
    31.2,
    48.4
  ],
  "BLR": [
    27.9,
    53.7
  ],
  "LTU": [
    23.9,
    55.2
  ],
  "LVA": [
    24.6,
    56.9
  ],
  "EST": [
    25,
    58.6
  ],
  "SVN": [
    14.8,
    46.1
  ],
  "BIH": [
    17.7,
    43.9
  ],
  "ALB": [
    20,
    41.2
  ],
  "MKD": [
    21.7,
    41.5
  ],
  "MDA": [
    28.4,
    47
  ],
  "ISL": [
    -19,
    64.9
  ],
  "NGA": [
    8.7,
    9.1
  ],
  "ETH": [
    40.5,
    9.1
  ],
  "COD": [
    21.8,
    -4
  ],
  "ZAF": [
    22.9,
    -30.6
  ],
  "KEN": [
    38,
    -0.02
  ],
  "TZA": [
    34.9,
    -6.4
  ],
  "UGA": [
    32.3,
    1.4
  ],
  "GHA": [
    -1.2,
    7.9
  ],
  "MOZ": [
    35.5,
    -18.7
  ],
  "MDG": [
    47,
    -20
  ],
  "CMR": [
    12.4,
    5.9
  ],
  "CIV": [
    -5.5,
    7.5
  ],
  "NER": [
    8.1,
    17.6
  ],
  "MLI": [
    -2,
    17.6
  ],
  "BFA": [
    -1.6,
    12.2
  ],
  "MWI": [
    34.3,
    -13.3
  ],
  "ZMB": [
    28,
    -13.1
  ],
  "SOM": [
    46.2,
    5.2
  ],
  "TCD": [
    18.7,
    15.5
  ],
  "SEN": [
    -14.5,
    14.5
  ],
  "ZWE": [
    29.2,
    -19
  ],
  "GIN": [
    -11.8,
    9.9
  ],
  "RWA": [
    29.9,
    -1.9
  ],
  "SSD": [
    31.3,
    6.9
  ],
  "AGO": [
    17.9,
    -11.2
  ],
  "SDN": [
    30,
    12.9
  ],
  "COG": [
    15.8,
    -0.2
  ],
  "NAM": [
    18.5,
    -22
  ],
  "BWA": [
    24.7,
    -22.3
  ],
  "GAB": [
    11.6,
    -0.8
  ],
  "LSO": [
    28.2,
    -29.6
  ],
  "SWZ": [
    31.5,
    -26.5
  ],
  "ERI": [
    39.8,
    15.2
  ],
  "MRT": [
    -10.9,
    21.1
  ],
  "BEN": [
    2.3,
    9.3
  ],
  "TGO": [
    1.2,
    8.6
  ],
  "SLE": [
    -11.8,
    8.5
  ],
  "LBR": [
    -9.4,
    6.4
  ],
  "CAF": [
    20.9,
    6.6
  ],
  "IND": [
    78.9,
    20.6
  ],
  "PAK": [
    69.3,
    30.4
  ],
  "BGD": [
    90.4,
    23.7
  ],
  "LKA": [
    80.8,
    7.9
  ],
  "NPL": [
    84.1,
    28.4
  ],
  "MMR": [
    96.7,
    19.8
  ],
  "AFG": [
    67.7,
    33.9
  ],
  "CHN": [
    104.2,
    35.9
  ],
  "JPN": [
    138.3,
    36.2
  ],
  "KOR": [
    128,
    35.9
  ],
  "IDN": [
    113.9,
    -0.8
  ],
  "PHL": [
    121.8,
    12.9
  ],
  "VNM": [
    108.3,
    14
  ],
  "THA": [
    101,
    15.9
  ],
  "TWN": [
    121,
    23.7
  ],
  "MYS": [
    101.7,
    4.2
  ],
  "PRK": [
    127,
    40
  ],
  "KHM": [
    105,
    12.6
  ],
  "LAO": [
    102.5,
    19.9
  ],
  "MNG": [
    103.8,
    46.9
  ],
  "SGP": [
    103.8,
    1.4
  ],
  "PNG": [
    143.9,
    -6.3
  ],
  "EGY": [
    30.8,
    26.8
  ],
  "SAU": [
    45.1,
    23.9
  ],
  "TUR": [
    35.2,
    38.9
  ],
  "IRN": [
    53.7,
    32.4
  ],
  "IRQ": [
    43.7,
    33.2
  ],
  "MAR": [
    -7.1,
    31.8
  ],
  "DZA": [
    1.7,
    28
  ],
  "TUN": [
    9.5,
    34
  ],
  "LBY": [
    17.2,
    26.3
  ],
  "JOR": [
    36.2,
    31.2
  ],
  "LBN": [
    35.9,
    33.9
  ],
  "ISR": [
    34.9,
    31
  ],
  "ARE": [
    54,
    23.4
  ],
  "OMN": [
    55.9,
    21
  ],
  "KWT": [
    47.5,
    29.3
  ],
  "QAT": [
    51.2,
    25.3
  ],
  "YEM": [
    48,
    15.6
  ],
  "SYR": [
    38.5,
    35
  ],
  "PSE": [
    35.2,
    31.9
  ],
  "BRA": [
    -51.9,
    -14.2
  ],
  "COL": [
    -74.3,
    4.6
  ],
  "ARG": [
    -63.6,
    -38.4
  ],
  "PER": [
    -75,
    -9.2
  ],
  "VEN": [
    -66.6,
    6.4
  ],
  "CHL": [
    -71.5,
    -35.7
  ],
  "ECU": [
    -78.2,
    -1.8
  ],
  "GTM": [
    -90.2,
    15.8
  ],
  "CUB": [
    -78,
    21.5
  ],
  "BOL": [
    -65,
    -17
  ],
  "DOM": [
    -70.2,
    18.7
  ],
  "HND": [
    -87.2,
    15
  ],
  "PRY": [
    -58.4,
    -23.4
  ],
  "SLV": [
    -88.9,
    13.8
  ],
  "NIC": [
    -85.2,
    12.8
  ],
  "CRI": [
    -84,
    10
  ],
  "PAN": [
    -80.8,
    8.5
  ],
  "URY": [
    -55.8,
    -32.5
  ],
  "JAM": [
    -77.3,
    18.1
  ],
  "HTI": [
    -72.3,
    19
  ],
  "GUY": [
    -58.9,
    4.9
  ],
  "TTO": [
    -61.2,
    10.4
  ],
  "AUS": [
    133.8,
    -25.3
  ],
  "NZL": [
    174.9,
    -40.9
  ],
  "FJI": [
    178,
    -18
  ],
  "KAZ": [
    67,
    48.5
  ],
  "UZB": [
    64.6,
    41.4
  ],
  "TKM": [
    59.6,
    38.9
  ],
  "TJK": [
    71,
    38.9
  ],
  "KGZ": [
    74.8,
    41.2
  ],
  "GEO": [
    43.4,
    42.3
  ],
  "ARM": [
    45,
    40.1
  ],
  "AZE": [
    47.6,
    40.1
  ],
  "MNG": [
    103.8,
    46.9
  ],
  "MMR": [
    96.7,
    21.9
  ],
  "LAO": [
    102.5,
    19.9
  ],
  "KHM": [
    104.9,
    12.6
  ],
  "NPL": [
    84.1,
    28.4
  ],
  "LKA": [
    80.8,
    7.9
  ],
  "OMN": [
    55.9,
    21
  ],
  "LBY": [
    17.2,
    26.3
  ],
  "TUN": [
    9.5,
    33.9
  ],
  "AGO": [
    17.9,
    -11.2
  ],
  "ZMB": [
    27.8,
    -13.1
  ],
  "ZWE": [
    29.2,
    -19.0
  ],
  "MLI": [
    -4,
    17.6
  ],
  "NER": [
    8.1,
    17.6
  ],
  "TCD": [
    18.7,
    15.5
  ],
  "SEN": [
    -14.5,
    14.5
  ],
  "GIN": [
    -9.9,
    9.9
  ],
  "BFA": [
    -1.6,
    12.4
  ],
  "BWA": [
    25.9,
    -22.3
  ],
  "SWZ": [
    31.5,
    -26.5
  ],
  "LSO": [
    28.2,
    -29.6
  ],
  "MRT": [
    -10.9,
    21
  ],
  "SOM": [
    46.2,
    5.2
  ],
  "ERI": [
    39.8,
    15.2
  ],
  "CAF": [
    20.9,
    6.6
  ],
  "COG": [
    15.8,
    -0.2
  ],
  "GAB": [
    11.6,
    -0.8
  ],
  "GNQ": [
    10.3,
    1.7
  ],
  "PNG": [
    143.9,
    -6.3
  ]
};
