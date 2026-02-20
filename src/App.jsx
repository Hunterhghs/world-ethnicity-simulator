import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { precomputeAll, getSnapshot, START_YEAR, END_YEAR } from './simulation/precompute.js';
import { SCENARIOS, SCENARIO_LIST, DEFAULT_SCENARIO } from './simulation/scenarios.js';
import { COUNTRIES, ETHNIC_GROUPS, ETHNIC_COLORS } from './data/countries.js';
import { REGIONS } from './data/regions.js';
import WorldMap from './components/WorldMap.jsx';
import TimeSlider from './components/TimeSlider.jsx';
import ScenarioPanel from './components/ScenarioPanel.jsx';
import DriverControls from './components/DriverControls.jsx';
import KPIStrip from './components/KPIStrip.jsx';
import CountryDetail from './components/CountryDetail.jsx';
import MethodologyPanel from './components/MethodologyPanel.jsx';
import ExportButton from './components/ExportButton.jsx';

export default function App() {
    const [projections, setProjections] = useState(null);
    const [loading, setLoading] = useState(true);
    const [year, setYear] = useState(START_YEAR);
    const [scenario, setScenario] = useState(DEFAULT_SCENARIO);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [speed, setSpeed] = useState(1);

    // Precompute on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            const results = precomputeAll();
            setProjections(results);
            setLoading(false);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    // Playback loop
    useEffect(() => {
        if (!playing) return;
        const interval = setInterval(() => {
            setYear(y => {
                if (y >= END_YEAR) {
                    setPlaying(false);
                    return END_YEAR;
                }
                return y + 1;
            });
        }, 1000 / speed);
        return () => clearInterval(interval);
    }, [playing, speed]);

    const snapshot = useMemo(() => {
        if (!projections) return null;
        return getSnapshot(projections, scenario, year);
    }, [projections, scenario, year]);

    const handleCountryClick = useCallback((code) => {
        setSelectedCountry(code);
    }, []);

    const handleCloseDetail = useCallback(() => {
        setSelectedCountry(null);
    }, []);

    if (loading) {
        return (
            <div className="app loading">
                <div className="loading-container">
                    <div className="loading-spinner" />
                    <div className="loading-text">Computing Projections…</div>
                    <div className="loading-sub">Simulating 4 scenarios × 76 years for 30+ countries</div>
                </div>
            </div>
        );
    }

    return (
        <div className="app">
            {/* Header */}
            <header className="header">
                <div className="header-left">
                    <svg className="header-logo" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="28" stroke="#4fc3f7" strokeWidth="2" />
                        <ellipse cx="32" cy="32" rx="26" ry="10" stroke="#4fc3f7" strokeWidth="1.5" opacity="0.5" />
                        <ellipse cx="32" cy="32" rx="10" ry="26" stroke="#4fc3f7" strokeWidth="1.5" opacity="0.5" />
                        <circle cx="32" cy="32" r="3" fill="#4fc3f7" />
                    </svg>
                    <div>
                        <div className="header-title">Global Ethnicity & Migration Simulator</div>
                        <div className="header-subtitle">Scenario-Based Demographic Projections 2025–2100</div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-sources">
                        Calibrated from UN DESA, World Bank, OECD Migration Data
                    </div>
                    <div className="header-year">{year}</div>
                </div>
            </header>

            {/* Map */}
            <WorldMap
                snapshot={snapshot}
                year={year}
                onCountryClick={handleCountryClick}
                selectedCountry={selectedCountry}
            />

            {/* KPI Strip */}
            <KPIStrip snapshot={snapshot} year={year} />

            {/* Time Controls */}
            <TimeSlider
                year={year}
                setYear={setYear}
                playing={playing}
                setPlaying={setPlaying}
                speed={speed}
                setSpeed={setSpeed}
            />

            {/* Sidebar */}
            <aside className="sidebar">
                <ScenarioPanel scenario={scenario} setScenario={setScenario} />
                <DriverControls />

                {/* Legend */}
                <div className="panel">
                    <div className="panel-header">
                        <span className="panel-icon">🎨</span>
                        <span className="panel-title">Ethnic Groups</span>
                    </div>
                    <div className="legend">
                        {ETHNIC_GROUPS.map(g => (
                            <div key={g.id} className="legend-item">
                                <div className="legend-dot" style={{ background: g.color }} />
                                <span>{g.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <ExportButton projections={projections} scenario={scenario} />
                <MethodologyPanel />

                <div className="disclaimer">
                    ⚠️ These are <strong>scenario projections</strong> under explicit assumptions, not predictions.
                    Ethnicity categories are approximate social groupings using broad continental/ancestral proxies.
                    Where direct data is unavailable, region-of-origin proxies are used and flagged as estimates.
                    Small subgroup shares (&lt;0.5%) are suppressed. All data is aggregated from public sources.
                </div>
            </aside>

            {/* Country Detail Modal */}
            {selectedCountry && (
                <CountryDetail
                    code={selectedCountry}
                    snapshot={snapshot}
                    projections={projections}
                    scenario={scenario}
                    year={year}
                    onClose={handleCloseDetail}
                />
            )}
        </div>
    );
}
