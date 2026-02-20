import React from 'react';
import { START_YEAR, END_YEAR } from '../simulation/precompute.js';

const SPEEDS = [1, 2, 5];

export default function TimeSlider({ year, setYear, playing, setPlaying, speed, setSpeed }) {
    return (
        <div className="time-controls">
            <button
                className="play-btn"
                onClick={() => {
                    if (year >= END_YEAR) {
                        setYear(START_YEAR);
                    }
                    setPlaying(!playing);
                }}
                title={playing ? 'Pause' : 'Play'}
            >
                {playing ? '⏸' : '▶'}
            </button>

            {SPEEDS.map(s => (
                <button
                    key={s}
                    className={`speed-btn ${speed === s ? 'active' : ''}`}
                    onClick={() => setSpeed(s)}
                >
                    {s}×
                </button>
            ))}

            <div className="time-slider-container">
                <span className="time-label">{START_YEAR}</span>
                <input
                    type="range"
                    className="time-slider"
                    min={START_YEAR}
                    max={END_YEAR}
                    value={year}
                    onChange={e => setYear(Number(e.target.value))}
                />
                <span className="time-label">{END_YEAR}</span>
            </div>
        </div>
    );
}
