import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { COUNTRIES, ETHNIC_GROUPS, ETHNIC_COLORS, COUNTRY_CENTROIDS } from '../data/countries.js';
import { MIGRATION_CORRIDORS } from '../data/migrationCorridors.js';

// Get dominant ethnic color for a corridor
function getCorridorColors(ethnicProfile) {
    if (!ethnicProfile) return [{ color: '#4fc3f7', share: 1 }];
    return ETHNIC_GROUPS
        .filter(g => (ethnicProfile[g.id] || 0) >= 0.1)
        .map(g => ({ color: g.color, share: ethnicProfile[g.id] || 0, id: g.id }))
        .sort((a, b) => b.share - a.share);
}

const WORLD_ATLAS_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Map numeric ISO to our country codes
const ISO_TO_CODE = {};
for (const [code, c] of Object.entries(COUNTRIES)) {
    if (c.isoN) ISO_TO_CODE[c.isoN] = code;
}

// Threshold: if one group exceeds this, use solid color; otherwise use striped pattern
const DOMINANCE_THRESHOLD = 0.65;

function getDominantFill(shares) {
    if (!shares) return { type: 'solid', color: '#1a2332' };

    // Sort groups by share descending
    const sorted = ETHNIC_GROUPS
        .map(g => ({ id: g.id, color: g.color, share: shares[g.id] || 0 }))
        .filter(g => g.share >= 0.01)
        .sort((a, b) => b.share - a.share);

    if (sorted.length === 0) return { type: 'solid', color: '#1a2332' };

    // If dominant group above threshold, use solid with opacity
    if (sorted[0].share >= DOMINANCE_THRESHOLD) {
        const base = d3.color(sorted[0].color);
        if (!base) return { type: 'solid', color: sorted[0].color };
        const opacity = 0.4 + sorted[0].share * 0.6;
        base.opacity = opacity;
        return { type: 'solid', color: base.formatRgb() };
    }

    // Otherwise, create a stripe pattern from top 3 groups
    const top = sorted.slice(0, 3);
    const patternId = top.map(g => g.id).join('-');
    return { type: 'pattern', patternId, groups: top };
}

export default function WorldMap({ snapshot, year, onCountryClick, selectedCountry }) {
    const svgRef = useRef(null);
    const zoomGroupRef = useRef(null);
    const [worldData, setWorldData] = useState(null);
    const [tooltip, setTooltip] = useState(null);
    const [dimensions, setDimensions] = useState({ width: 960, height: 500 });

    // Load world topology
    useEffect(() => {
        d3.json(WORLD_ATLAS_URL).then(world => {
            setWorldData(world);
        });
    }, []);

    // Track container size
    useEffect(() => {
        const container = svgRef.current?.parentElement;
        if (!container) return;
        const ro = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect;
            setDimensions({ width, height });
        });
        ro.observe(container);
        return () => ro.disconnect();
    }, []);

    // Projection & path — centered properly with padding
    const { projection, path } = useMemo(() => {
        const pad = 10;
        const w = dimensions.width - pad * 2;
        const h = dimensions.height - pad * 2;
        const proj = d3.geoNaturalEarth1()
            .fitExtent([[pad, pad], [pad + w, pad + h]], { type: 'Sphere' });
        return { projection: proj, path: d3.geoPath(proj) };
    }, [dimensions]);

    // Zoom behavior for mobile pan/pinch
    useEffect(() => {
        const svg = d3.select(svgRef.current);
        if (!svg.node()) return;

        const zoom = d3.zoom()
            .scaleExtent([1, 8])
            .translateExtent([[0, 0], [dimensions.width, dimensions.height]])
            .on('zoom', (event) => {
                d3.select(zoomGroupRef.current).attr('transform', event.transform);
            });

        svg.call(zoom);
        // Reset zoom when dimensions change
        svg.call(zoom.transform, d3.zoomIdentity);

        return () => svg.on('.zoom', null);
    }, [dimensions]);

    // Country features
    const countries = useMemo(() => {
        if (!worldData) return [];
        return topojson.feature(worldData, worldData.objects.countries).features;
    }, [worldData]);

    // Build unique pattern definitions for diverse countries
    const { fills, patternDefs } = useMemo(() => {
        if (!snapshot) return { fills: {}, patternDefs: [] };

        const fillMap = {};
        const patternMap = {};

        for (const feature of countries) {
            const code = ISO_TO_CODE[feature.id];
            const shares = code && snapshot?.countries[code]?.shares;
            const fill = getDominantFill(shares);
            fillMap[feature.id] = fill;

            if (fill.type === 'pattern' && !patternMap[fill.patternId]) {
                patternMap[fill.patternId] = fill.groups;
            }
        }

        const defs = Object.entries(patternMap).map(([id, groups]) => {
            const stripeWidth = 6;
            const totalWidth = stripeWidth * groups.length;
            return { id, groups, stripeWidth, totalWidth };
        });

        return { fills: fillMap, patternDefs: defs };
    }, [snapshot, countries]);

    // Migration arcs: only top corridors by flow
    const migrationArcs = useMemo(() => {
        if (!snapshot) return [];
        return MIGRATION_CORRIDORS
            .filter(c => COUNTRY_CENTROIDS[c.from] && COUNTRY_CENTROIDS[c.to])
            .slice(0, 20)
            .map(c => {
                const from = projection(COUNTRY_CENTROIDS[c.from]);
                const to = projection(COUNTRY_CENTROIDS[c.to]);
                if (!from || !to) return null;
                return { ...c, fromXY: from, toXY: to };
            })
            .filter(Boolean);
    }, [snapshot, projection]);

    const handleMouseMove = (e, feature) => {
        const code = ISO_TO_CODE[feature.id];
        if (!code || !snapshot?.countries[code]) {
            setTooltip(null);
            return;
        }
        const data = snapshot.countries[code];
        const country = COUNTRIES[code];
        setTooltip({
            x: e.clientX,
            y: e.clientY,
            name: country.name,
            shares: data.shares,
            pop: data.pop,
            code,
        });
    };

    const handleMouseLeave = () => setTooltip(null);

    if (!worldData) {
        return (
            <div className="map-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="loading-spinner" style={{ width: 30, height: 30 }} />
            </div>
        );
    }

    return (
        <div className="map-container">
            <svg ref={svgRef} width={dimensions.width} height={dimensions.height} style={{ touchAction: 'none' }}>
                <g ref={zoomGroupRef}>
                    <defs>
                        {/* Stripe patterns for diverse countries */}
                        {patternDefs.map(p => (
                            <pattern
                                key={p.id}
                                id={`eth-${p.id}`}
                                patternUnits="userSpaceOnUse"
                                width={p.totalWidth}
                                height={p.totalWidth}
                                patternTransform="rotate(45)"
                            >
                                {p.groups.map((g, i) => (
                                    <rect
                                        key={g.id}
                                        x={i * p.stripeWidth}
                                        y="0"
                                        width={p.stripeWidth}
                                        height={p.totalWidth}
                                        fill={g.color}
                                        opacity={0.6 + g.share * 0.4}
                                    />
                                ))}
                            </pattern>
                        ))}
                    </defs>

                    {/* Graticule */}
                    <path
                        d={path(d3.geoGraticule10())}
                        fill="none"
                        stroke="rgba(100,140,200,0.06)"
                        strokeWidth="0.5"
                    />

                    {/* Countries */}
                    {countries.map(feature => {
                        const fill = fills[feature.id] || { type: 'solid', color: '#1a2332' };
                        const fillValue = fill.type === 'pattern'
                            ? `url(#eth-${fill.patternId})`
                            : fill.color;
                        const code = ISO_TO_CODE[feature.id];

                        return (
                            <path
                                key={feature.id}
                                d={path(feature)}
                                fill={fillValue}
                                className={`country ${selectedCountry === code ? 'selected' : ''}`}
                                onMouseMove={(e) => handleMouseMove(e, feature)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => code && onCountryClick(code)}
                            />
                        );
                    })}

                    {/* Migration arcs */}
                    {migrationArcs.map((arc, i) => {
                        const midX = (arc.fromXY[0] + arc.toXY[0]) / 2;
                        const midY = Math.min(arc.fromXY[1], arc.toXY[1]) - 30;
                        const d = `M${arc.fromXY[0]},${arc.fromXY[1]} Q${midX},${midY} ${arc.toXY[0]},${arc.toXY[1]}`;
                        const thickness = Math.max(0.5, Math.min(3, arc.baseFlow / 100));
                        const colors = getCorridorColors(arc.ethnicProfile);

                        return (
                            <g key={arc.id}>
                                <path
                                    d={d}
                                    className="migration-arc"
                                    stroke="rgba(255,255,255,0.08)"
                                    strokeWidth={thickness}
                                />
                                {/* Multi-colored animated particles */}
                                {colors.map((c, ci) => (
                                    <circle key={`${arc.id}-${c.id}`} r={Math.max(1.5, 3 * c.share)} fill={c.color} opacity="0.9">
                                        <animateMotion
                                            dur={`${3 + i * 0.15 + ci * 0.8}s`}
                                            repeatCount="indefinite"
                                            path={d}
                                        />
                                    </circle>
                                ))}
                            </g>
                        );
                    })}

                    {/* Sphere outline */}
                    <path
                        d={path({ type: 'Sphere' })}
                        fill="none"
                        stroke="rgba(100,140,200,0.15)"
                        strokeWidth="1"
                    />
                </g>
            </svg>

            {/* Tooltip */}
            {tooltip && (
                <div
                    className="tooltip"
                    style={{
                        left: Math.min(tooltip.x + 15, window.innerWidth - 250),
                        top: Math.min(tooltip.y - 10, window.innerHeight - 300),
                    }}
                >
                    <div className="tooltip-title">{tooltip.name}</div>
                    {ETHNIC_GROUPS.map(g => {
                        const val = tooltip.shares[g.id] || 0;
                        if (val < 0.005) return null;
                        return (
                            <div key={g.id} className="tooltip-row">
                                <div className="tooltip-dot" style={{ background: g.color }} />
                                <span className="tooltip-label">{g.label}</span>
                                <span className="tooltip-value">{(val * 100).toFixed(1)}%</span>
                            </div>
                        );
                    })}
                    <div className="tooltip-pop">
                        Pop: {tooltip.pop.toFixed(1)}M
                    </div>
                </div>
            )}
        </div>
    );
}
