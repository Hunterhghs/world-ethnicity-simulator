import React, { useMemo } from 'react';
import { ETHNIC_GROUPS } from '../data/countries.js';

function formatPop(m) {
    if (m >= 1000) return (m / 1000).toFixed(2) + 'B';
    return m.toFixed(0) + 'M';
}

function formatPct(v) {
    return (v * 100).toFixed(1) + '%';
}

export default function KPIStrip({ snapshot, year }) {
    const kpis = useMemo(() => {
        if (!snapshot) return [];

        const g = snapshot.global;
        const shares = g.shares || {};

        // Find largest group
        let largestGroup = '';
        let largestShare = 0;
        for (const grp of ETHNIC_GROUPS) {
            if ((shares[grp.id] || 0) > largestShare) {
                largestShare = shares[grp.id];
                largestGroup = grp.label;
            }
        }

        // Total net migration across tracked countries
        let totalNetMig = 0;
        for (const c of Object.values(snapshot.countries)) {
            totalNetMig += Math.abs(c.netMig || 0);
        }

        return [
            {
                label: 'Global Population',
                value: formatPop(g.pop),
                sub: `${Object.keys(snapshot.countries).length} countries tracked`,
            },
            {
                label: 'Largest Group',
                value: largestGroup,
                sub: formatPct(largestShare) + ' share',
            },
            {
                label: 'Mixed Population',
                value: formatPct(shares.mixed || 0),
                sub: 'Multi-ancestry share',
            },
            {
                label: 'Diversity Index',
                value: (g.diversity || 0).toFixed(3),
                sub: '1 - HHI',
            },
            {
                label: 'Migration Volume',
                value: (totalNetMig / 1000).toFixed(1) + 'M',
                sub: 'Annual gross flows',
            },
        ];
    }, [snapshot]);

    // Global stacked bar
    const stackedBar = useMemo(() => {
        if (!snapshot) return [];
        const shares = snapshot.global.shares || {};
        return ETHNIC_GROUPS
            .filter(g => (shares[g.id] || 0) >= 0.005)
            .map(g => ({
                id: g.id,
                color: g.color,
                width: (shares[g.id] || 0) * 100,
            }));
    }, [snapshot]);

    return (
        <div className="kpi-strip">
            {kpis.map((kpi, i) => (
                <div key={i} className="kpi-card">
                    <div className="kpi-label">{kpi.label}</div>
                    <div className="kpi-value">{kpi.value}</div>
                    <div className="kpi-change">{kpi.sub}</div>
                </div>
            ))}
            <div className="kpi-card" style={{ minWidth: 200, flex: 1 }}>
                <div className="kpi-label">Global Composition</div>
                <div className="stacked-bar">
                    {stackedBar.map(seg => (
                        <div
                            key={seg.id}
                            className="stacked-bar-segment"
                            style={{ width: seg.width + '%', background: seg.color }}
                            title={`${seg.id}: ${seg.width.toFixed(1)}%`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
