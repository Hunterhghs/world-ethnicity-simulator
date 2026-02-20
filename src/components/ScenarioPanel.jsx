import React from 'react';
import { SCENARIO_LIST } from '../simulation/scenarios.js';

export default function ScenarioPanel({ scenario, setScenario }) {
    return (
        <div className="panel">
            <div className="panel-header">
                <span className="panel-icon">📊</span>
                <span className="panel-title">Scenarios</span>
            </div>
            <div className="scenario-grid">
                {SCENARIO_LIST.map(s => (
                    <button
                        key={s.id}
                        className={`scenario-btn ${scenario === s.id ? 'active' : ''}`}
                        onClick={() => setScenario(s.id)}
                        title={s.description}
                    >
                        <span className="scenario-btn-icon">{s.icon}</span>
                        {s.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
