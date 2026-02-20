import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { COUNTRIES, ETHNIC_GROUPS, ETHNIC_COLORS, COUNTRY_CENTROIDS } from '../data/countries.js';
import { MIGRATION_CORRIDORS } from '../data/migrationCorridors.js';

const WORLD_ATLAS_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Map numeric ISO to our country codes
const ISO_TO_CODE = {};
for (const [code, c] of Object.entries(COUNTRIES)) {
    if (c.isoN) ISO_TO_CODE[c.isoN] = code;
}

function getDominantColor(shares) {
    if (!shares) return '#1a2332';
    let maxId = 'european';
    let maxVal = 0;
    for (const [id, val] of Object.entries(shares)) {
        if (val > maxVal) {
            maxVal = val;
            maxId = id;
        }
    }
    // Blend dominant color intensity based on share dominance
    const base = ETHNIC_COLORS[maxId] || '#1a2332';
    const color = d3.color(base);
    if (!color) return base;
    // More dominant = more saturated, less dominant = more muted
    const opacity = 0.3 + maxVal * 0.7;
    color.opacity = opacity;
    return color.formatRgb();
}

function getBlendedColor(shares) {
    if (!shares) return '#1a2332';
    let r = 0, g = 0, b = 0;
    for (const group of ETHNIC_GROUPS) {
        const share = shares[group.id] || 0;
        if (share < 0.005) continue;
        const c = d3.color(group.color);
        if (!c) continue;
        r += c.r * share;
        g += c.g * share;
        b += c.b * share;
    }
    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

export default function WorldMap({ snapshot, year, onCountryClick, selectedCountry }) {
    const svgRef = useRef(null);
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

    // Projection & path
    const { projection, path } = useMemo(() => {
        const proj = d3.geoNaturalEarth1()
            .fitSize([dimensions.width, dimensions.height], { type: 'Sphere' });
        return { projection: proj, path: d3.geoPath(proj) };
    }, [dimensions]);

    // Country features
    const countries = useMemo(() => {
        if (!worldData) return [];
        return topojson.feature(worldData, worldData.objects.countries).features;
    }, [worldData]);

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
            <svg ref={svgRef} width={dimensions.width} height={dimensions.height}>
                {/* Graticule */}
                <path
                    d={path(d3.geoGraticule10())}
                    fill="none"
                    stroke="rgba(100,140,200,0.06)"
                    strokeWidth="0.5"
                />

                {/* Countries */}
                {countries.map(feature => {
                    const code = ISO_TO_CODE[feature.id];
                    const shares = code && snapshot?.countries[code]?.shares;
                    const fill = shares ? getBlendedColor(shares) : '#1a2332';

                    return (
                        <path
                            key={feature.id}
                            d={path(feature)}
                            fill={fill}
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

                    return (
                        <g key={arc.id}>
                            <path
                                d={d}
                                className="migration-arc"
                                stroke="rgba(79, 195, 247, 0.3)"
                                strokeWidth={thickness}
                            />
                            {/* Animated particle */}
                            <circle r={2} fill="#4fc3f7" opacity="0.8">
                                <animateMotion
                                    dur={`${3 + i * 0.2}s`}
                                    repeatCount="indefinite"
                                    path={d}
                                />
                            </circle>
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
