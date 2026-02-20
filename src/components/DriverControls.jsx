import React, { useState } from 'react';

const DRIVERS = [
    { id: 'policyOpenness', label: 'Policy Openness', icon: '🌐', min: 0, max: 200, default: 100, unit: '%' },
    { id: 'migrationIntensity', label: 'Migration Intensity', icon: '✈️', min: 0, max: 200, default: 100, unit: '%' },
    { id: 'intermarriageSensitivity', label: 'Intermarriage Rate', icon: '💑', min: 0, max: 200, default: 100, unit: '%' },
    { id: 'fertilityAdjust', label: 'Fertility Adjustment', icon: '👶', min: 50, max: 150, default: 100, unit: '%' },
];

export default function DriverControls() {
    const [values, setValues] = useState(
        Object.fromEntries(DRIVERS.map(d => [d.id, d.default]))
    );

    const handleChange = (id, val) => {
        setValues(prev => ({ ...prev, [id]: Number(val) }));
    };

    return (
        <div className="panel">
            <div className="panel-header">
                <span className="panel-icon">⚙️</span>
                <span className="panel-title">Driver Controls</span>
            </div>
            {DRIVERS.map(driver => (
                <div key={driver.id} className="driver-control">
                    <div className="driver-label">
                        <span className="driver-name">
                            <span>{driver.icon}</span> {driver.label}
                        </span>
                        <span className="driver-value">{values[driver.id]}{driver.unit}</span>
                    </div>
                    <input
                        type="range"
                        className="driver-slider"
                        min={driver.min}
                        max={driver.max}
                        value={values[driver.id]}
                        onChange={e => handleChange(driver.id, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
}
