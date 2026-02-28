import React from 'react';
import styles from './scope.module.css';

const SCOPE_ITEMS = [
    {
        step: '01',
        title: 'Executive Summary',
        details: ['High-level overview of the project.', 'Key findings (market demand, viability, risk).', "Clear 'Go / No-Go' recommendation."]
    },
    {
        step: '02',
        title: 'Project Definition',
        details: ['Location, site details, zoning, and land-use rights.', 'Project description (type, targeted buyer market).', 'Alignment with municipal/spatial development frameworks.']
    },
    {
        step: '03',
        title: 'Market Feasibility',
        details: ['Demographic context & income bands.', 'Supply and absorption rate forecasting.', 'Comparable pricing & rental benchmarking.', 'Market positioning & Price-per-m² strategy.']
    },
    {
        step: '04',
        title: 'Technical Feasibility',
        details: ['Site access and infrastructure services.', 'Preliminary architectural considerations.', 'Construction methodology & material constraints.', 'Green building & energy efficiency factors.']
    },
    {
        step: '05',
        title: 'Financial / QS Feasibility',
        details: ['Preliminary cost estimate (QS standards).', 'Construction costs per m², professional fees.', 'Financing (equity/debt) & capital stack structuring.', 'VAT and tax risk considerations.']
    },
    {
        step: '06',
        title: 'Revenue & Yield Projections',
        details: ['Targeted sales revenue & unit pricing matrix.', 'Market rental income & escalation models.', 'Gross and net yield scenarios.', 'Exit strategies (Sale vs. Hold).']
    },
    {
        step: '07',
        title: 'Risk & Sensitivity Analysis',
        details: ['Key constraints (planning, costs, funding).', 'Sensitivity models (Cost +10%, Sales -10%).', 'Interest rate delta modeling.', 'Break-even matrix analysis.']
    },
    {
        step: '08',
        title: 'Legal & Compliance',
        details: ['Land ownership security verification.', 'Zoning, environmental, and heritage approvals.', 'Building regulations and local compliance.']
    },
    {
        step: '09',
        title: 'Implementation Plan',
        details: ['Development programme and life-cycle mapping.', 'Sales, marketing, & distribution rollout.', 'Procurement and contractor strategy.', 'Key milestones and cashflow projection.']
    },
    {
        step: '10',
        title: 'Conclusion & Recommendation',
        details: ['Final definitive feasibility verdict.', 'Strategic positioning of the asset.', 'Next steps: Investor pitching and design development.']
    },
    {
        step: '11',
        title: 'Marketing',
        details: ['Strategic Online Presence.', 'Agile Next.js Platform.', 'Multi-Channel Engagement.', 'Performance Analytics & Insights.']
    }
];

export default function ScopeOfWork() {
    return (
        <section className={`section-padding ${styles.scopeSection}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label} style={{ fontSize: '1rem', fontWeight: 600 }}>The Gold Standard</span>
                    <h2 className={styles.title}>Feasibility Scope of <span style={{ color: 'var(--primary)' }}>Work</span></h2>
                    <p className={styles.description}>
                        Our feasibility studies are exhaustive, mathematically rigorous, and designed exclusively
                        to secure institutional capital and eliminate developmental blind spots.
                    </p>
                </div>

                <div className={styles.timeline}>
                    {SCOPE_ITEMS.map((item, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.stepNumber}>{item.step}</div>
                            <div className={styles.content}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <ul className={styles.itemList}>
                                    {item.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.deliverables}>
                    <h3 className={styles.deliverablesTitle}>Final Executive Deliverables</h3>
                    <div className={styles.deliverableBadges}>
                        <span className={styles.badge}><strong>Full Report:</strong> PDF with Branding & Visuals</span>
                        <span className={styles.badge}><strong>Financial Model:</strong> Editable Stochastic Excel Model</span>
                        <span className={styles.badge}><strong>Summary Deck:</strong> Pitch-Ready Investor Presentation</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
