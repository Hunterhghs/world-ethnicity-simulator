import React from 'react';
import Papa from 'papaparse';
import { COUNTRIES, ETHNIC_GROUPS } from '../data/countries.js';
import { START_YEAR, END_YEAR, getSnapshot } from '../simulation/precompute.js';
import Icon from './Icons.jsx';

export default function ExportButton({ projections, scenario }) {
    const handleExport = () => {
        if (!projections) return;

        const rows = [];
        const groupIds = ETHNIC_GROUPS.map(g => g.id);
        const groupLabels = ETHNIC_GROUPS.map(g => g.label);

        // Header
        const header = ['Year', 'Country_Code', 'Country_Name', 'Population_M', 'Net_Migration_K', 'Diversity_Index', ...groupLabels.map(l => `Share_${l}`), 'Scenario'];
        rows.push(header);

        for (let year = START_YEAR; year <= END_YEAR; year++) {
            const snap = getSnapshot(projections, scenario, year);
            if (!snap) continue;

            for (const [code, data] of Object.entries(snap.countries)) {
                const country = COUNTRIES[code];
                if (!country) continue;

                const row = [
                    year,
                    code,
                    country.name,
                    data.pop.toFixed(2),
                    data.netMig.toFixed(1),
                    data.diversity.toFixed(4),
                    ...groupIds.map(g => ((data.shares[g] || 0) * 100).toFixed(2)),
                    scenario,
                ];
                rows.push(row);
            }
        }

        const csv = Papa.unparse(rows);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `ethnicity_projection_${scenario}_${START_YEAR}-${END_YEAR}.csv`;
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <button className="export-btn" onClick={handleExport}>
            <Icon name="download" size={14} />
            <span>Export CSV ({scenario})</span>
        </button>
    );
}
