import React, { useMemo } from 'react';
import { COUNTRIES, ETHNIC_GROUPS } from '../data/countries.js';
import { START_YEAR, END_YEAR, getSnapshot } from '../simulation/precompute.js';

export default function CountryDetail({ code, snapshot, projections, scenario, year, onClose }) {
    const country = COUNTRIES[code];
    const data = snapshot?.countries[code];

    // Get time-series data for the composition chart
    const timeSeries = useMemo(() => {
        if (!projections || !projections[scenario]) return [];
        const years = [];
        for (let y = START_YEAR; y <= END_YEAR; y += 5) {
            const snap = getSnapshot(projections, scenario, y);
            if (snap?.countries[code]) {
                years.push({ year: y, shares: snap.countries[code].shares, pop: snap.countries[code].pop });
            }
        }
        return years;
    }, [projections, scenario, code]);

    if (!country || !data) return null;

    const sortedGroups = ETHNIC_GROUPS
        .map(g => ({ ...g, share: data.shares[g.id] || 0 }))
        .sort((a, b) => b.share - a.share)
        .filter(g => g.share >= 0.005);

    // SVG chart dimensions
    const chartW = 600;
    const chartH = 180;
    const padL = 40;
    const padR = 10;
    const padT = 10;
    const padB = 25;
    const plotW = chartW - padL - padR;
    const plotH = chartH - padT - padB;

    // Build stacked area paths
    const areaData = useMemo(() => {
        if (timeSeries.length === 0) return [];
        const groupIds = ETHNIC_GROUPS.map(g => g.id);

        // For each time point, stack the shares
        const stacked = timeSeries.map(t => {
            let cumulative = 0;
            const stack = {};
            for (const gid of groupIds) {
                const val = t.shares[gid] || 0;
                stack[gid] = { y0: cumulative, y1: cumulative + val };
                cumulative += val;
            }
            return { year: t.year, stack };
        });

        return groupIds.map(gid => {
            const group = ETHNIC_GROUPS.find(g => g.id === gid);
            const x = (yr) => padL + ((yr - START_YEAR) / (END_YEAR - START_YEAR)) * plotW;
            const y = (v) => padT + (1 - v) * plotH;

            // Build path
            const topPoints = stacked.map(s => `${x(s.year)},${y(s.stack[gid].y1)}`);
            const bottomPoints = stacked.map(s => `${x(s.year)},${y(s.stack[gid].y0)}`).reverse();

            return {
                id: gid,
                color: group?.color || '#666',
                d: `M${topPoints.join(' L')} L${bottomPoints.join(' L')}Z`,
            };
        }).reverse();
    }, [timeSeries]);

    return (
        <div className="country-detail-overlay" onClick={onClose}>
            <div className="country-detail" onClick={e => e.stopPropagation()}>
                <div className="country-detail-header">
                    <div>
                        <div className="country-detail-name">{country.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
                            {country.region} · Year {year} · {scenario} scenario
                        </div>
                    </div>
                    <button className="close-btn" onClick={onClose}>✕</button>
                </div>

                {/* Key stats */}
                <div className="detail-stats">
                    <div className="detail-stat">
                        <div className="detail-stat-value">{data.pop.toFixed(1)}M</div>
                        <div className="detail-stat-label">Population</div>
                    </div>
                    <div className="detail-stat">
                        <div className="detail-stat-value">{(data.diversity * 100).toFixed(1)}%</div>
                        <div className="detail-stat-label">Diversity Index</div>
                    </div>
                    <div className="detail-stat">
                        <div className="detail-stat-value" style={{ color: data.netMig >= 0 ? 'var(--accent-success)' : 'var(--accent-danger)' }}>
                            {data.netMig >= 0 ? '+' : ''}{data.netMig.toFixed(0)}K
                        </div>
                        <div className="detail-stat-label">Net Migration</div>
                    </div>
                </div>

                {/* Composition bars */}
                <div className="composition-bars">
                    {sortedGroups.map(g => (
                        <div key={g.id} className="comp-bar-row">
                            <div className="comp-bar-label">
                                <div className="legend-dot" style={{ background: g.color }} />
                                {g.label}
                            </div>
                            <div className="comp-bar-track">
                                <div
                                    className="comp-bar-fill"
                                    style={{
                                        width: `${Math.max(g.share * 100, 1)}%`,
                                        background: g.color,
                                    }}
                                >
                                    {g.share >= 0.03 && `${(g.share * 100).toFixed(1)}%`}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stacked area chart */}
                <div className="chart-container">
                    <div className="chart-title">Ethnic Composition Over Time ({START_YEAR}–{END_YEAR})</div>
                    <svg viewBox={`0 0 ${chartW} ${chartH}`} style={{ width: '100%', height: 'auto' }}>
                        {areaData.map(area => (
                            <path key={area.id} d={area.d} fill={area.color} opacity="0.75" />
                        ))}

                        {/* Year marker */}
                        <line
                            x1={padL + ((year - START_YEAR) / (END_YEAR - START_YEAR)) * plotW}
                            y1={padT}
                            x2={padL + ((year - START_YEAR) / (END_YEAR - START_YEAR)) * plotW}
                            y2={padT + plotH}
                            stroke="white"
                            strokeWidth="1.5"
                            strokeDasharray="4,2"
                            opacity="0.7"
                        />

                        {/* Axis labels */}
                        <text x={padL} y={chartH - 5} fill="var(--text-muted)" fontSize="9">{START_YEAR}</text>
                        <text x={padL + plotW} y={chartH - 5} fill="var(--text-muted)" fontSize="9" textAnchor="end">{END_YEAR}</text>
                        <text x={padL - 5} y={padT + 10} fill="var(--text-muted)" fontSize="9" textAnchor="end">100%</text>
                        <text x={padL - 5} y={padT + plotH} fill="var(--text-muted)" fontSize="9" textAnchor="end">0%</text>
                    </svg>
                </div>

                <div style={{ fontSize: 10, color: 'var(--text-muted)', textAlign: 'center' }}>
                    ⚠️ Scenario projection under explicit assumptions — not a prediction.
                    Ethnic categories are broad continental/ancestral proxies.
                </div>
            </div>
        </div>
    );
}
