import React, { useState } from 'react';

export default function MethodologyPanel() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className="methodology-toggle" onClick={() => setOpen(!open)}>
                <span>📐</span>
                <span>Methodology & Sources</span>
                <span style={{ marginLeft: 'auto' }}>{open ? '▲' : '▼'}</span>
            </button>

            {open && (
                <div className="methodology-content">
                    <h3>Stock-and-Flow Cohort Model</h3>
                    <p>Each country's population by ethnic group is projected annually using:</p>
                    <div className="equation">
                        P(g,c,t+1) = P(g,c,t) + B(g,c,t) − D(g,c,t) + M_net(g,c,t) − R_out(g,c,t) + R_in(mixed,c,t)
                    </div>
                    <ul>
                        <li><strong>B</strong> (Births) = P × (TFR / 2) / 28 — TFR divided by 2 (female only) and by average generation length (28 years)</li>
                        <li><strong>D</strong> (Deaths) = P × CDR / 1000 — using country-specific crude death rates</li>
                        <li><strong>M</strong> (Migration) = gravity model output for each corridor</li>
                        <li><strong>R</strong> (Reclassification) = intermarriage-driven flows to "Mixed" category</li>
                    </ul>

                    <h3>Migration Gravity Model</h3>
                    <div className="equation">
                        Flow(o,d) = Base × (GDP_d/GDP_o)^ε_w × (Pop_o/Pop_d)^ε_d × (1000/dist)^ε_f × Policy
                    </div>
                    <ul>
                        <li><strong>ε_w</strong> (wage elasticity) = 0.5 — sensitivity to wage differentials</li>
                        <li><strong>ε_d</strong> (demo pressure) = 0.3 — population pressure effect</li>
                        <li><strong>ε_f</strong> (distance friction) = 0.8 — distance decay factor</li>
                        <li><strong>Policy</strong> = 0.5–1.5 — policy openness slider</li>
                    </ul>

                    <h3>Intermarriage Model</h3>
                    <div className="equation">
                        Rate(c,t) = base × (1 + DiversityIndex)^sensitivity × (1 + 0.005 × Δt)
                    </div>
                    <ul>
                        <li><strong>DiversityIndex</strong> = 1 − HHI (Herfindahl-Hirschman Index of ethnic shares)</li>
                        <li><strong>Sensitivity</strong> = 1.0–2.0 — user-adjustable intermarriage response</li>
                        <li><strong>Generational factor</strong> grows 0.5% annually reflecting social integration</li>
                    </ul>

                    <h3>Data Sources</h3>
                    <ul>
                        <li><strong>Population</strong>: UN DESA World Population Prospects 2024</li>
                        <li><strong>Migration</strong>: UN International Migrant Stock 2020, OECD International Migration Outlook</li>
                        <li><strong>Ethnicity</strong>: National census data where available, region-of-origin proxies elsewhere</li>
                        <li><strong>Economics</strong>: World Bank Development Indicators (GDP per capita)</li>
                        <li><strong>Fertility/Mortality</strong>: UN DESA WPP by region, adjusted by group differentials from census data</li>
                    </ul>

                    <h3>Scenarios</h3>
                    <ul>
                        <li><strong>Baseline</strong>: Current trends with moderate parameters</li>
                        <li><strong>High Migration</strong>: 1.5× flows, higher policy openness, lower distance friction</li>
                        <li><strong>Low Migration</strong>: 0.5× flows, restrictive policy, higher distance friction</li>
                        <li><strong>High Intermixing</strong>: 2× intermarriage sensitivity, higher base rate</li>
                    </ul>

                    <div className="caveat-box">
                        <p><strong>⚠️ Important Caveats:</strong></p>
                        <p>• These are scenario projections, not predictions. Actual outcomes depend on policy, social norms, economic shocks, and other unmodeled factors.</p>
                        <p>• Ethnicity categories are broad, approximate social groupings — not biological or fixed categories.</p>
                        <p>• Where direct ethnicity data is unavailable, region-of-origin proxies are used.</p>
                        <p>• Small subgroup shares (&lt;0.5%) are suppressed to avoid spurious precision.</p>
                        <p>• The model does not account for wars, pandemics, climate migration, or technological disruption.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
