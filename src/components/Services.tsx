import React from 'react';
import styles from './services.module.css';
import { Briefcase, TrendingUp, BarChart3, Target, Users, Handshake, FileText, Map } from 'lucide-react';

const SERVICES = [
    {
        icon: <Briefcase size={36} className={styles.icon} />,
        title: 'Strategic Property Development Advisory',
        description: 'Comprehensive guidance through the entire development lifecycle, maximizing asset value and minimizing structural risks.'
    },
    {
        icon: <TrendingUp size={36} className={styles.icon} />,
        title: 'Pricing, Phasing & Absorption Modelling',
        description: 'Data-driven pricing matrices and phased rollout strategies to perfectly balance absorption velocity with optimal market yields.'
    },
    {
        icon: <BarChart3 size={36} className={styles.icon} />,
        title: 'Feasibility & Comparative Market Analysis',
        description: 'Exhaustive, mathematically rigorous feasibility studies and market comparisons designed to eliminate developmental blind spots and analyze strict viability.'
    },
    {
        icon: <Target size={36} className={styles.icon} />,
        title: 'Off-Plan Sales Strategy & Campaign Planning',
        description: 'Targeted go-to-market strategies and structured campaign sequencing to fast-track pre-sales and secure development funding.'
    },
    {
        icon: <Users size={36} className={styles.icon} />,
        title: 'CRM & Sales Funnel Optimisation',
        description: 'Specialized lead conversion infrastructure and pipeline management to nurture buyers from initial engagement to transfer.'
    },
    {
        icon: <Handshake size={36} className={styles.icon} />,
        title: 'JV Structuring & Deal Origination',
        description: 'Facilitating strategic Joint Ventures and sourcing institutional or private equity for high-potential tier-one projects.'
    },
    {
        icon: <FileText size={36} className={styles.icon} />,
        title: 'Executive-Grade Proposal & Investor Pitch Decks',
        description: 'Visually compelling, deeply researched boardroom presentations designed strictly for capital raising and stakeholder buy-in.'
    },
    {
        icon: <Map size={36} className={styles.icon} />,
        title: 'End-to-End Development Rollout Strategy',
        description: 'A holistic architectural, financial, and marketing roadmap ensuring seamless execution from conceptualization to final handover.'
    }
];

export default function Services({ paddingTop = '6rem', paddingBottom = '3rem', showContainer = true }: { paddingTop?: string, paddingBottom?: string, showContainer?: boolean } = {}) {
    const content = (
        <div className={styles.grid}>
            <div className={styles.cardsColumn}>
                {SERVICES.map((service, i) => (
                    <div key={i} className={styles.serviceCard}>
                        <div className={styles.iconWrapper}>{service.icon}</div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDesc}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className={showContainer ? styles.servicesSection : ''} style={{ paddingTop: showContainer ? paddingTop : '0', paddingBottom: showContainer ? paddingBottom : '0' }}>
            {showContainer ? <div className="container">{content}</div> : content}
        </section>
    );
}
