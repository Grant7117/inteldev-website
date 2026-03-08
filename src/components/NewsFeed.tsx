"use client";

import React, { useState } from 'react';
import styles from './news.module.css';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const MOCK_NEWS = [
    {
        id: 1,
        title: 'BetterBond February 2026 Brief: Repo Rate Cut Anticipation',
        author: 'BetterBond Property Index',
        date: 'Released February 2026',
        category: 'Macroeconomics',
        excerpt: 'South Africa enters 2026 with increased momentum. A stronger rand is easing inflation pressure, raising expectations for a repo rate cut as early as March 2026. Home loan applications are up 10.4% from 2024 levels.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        link: 'https://www.betterbond.co.za/property-brief/'
    },
    {
        id: 2,
        title: 'FNB Property Barometer: Western Cape Sales Velocity Hits 6-Week Peak',
        author: 'John Loos | FNB Property Economist',
        date: 'March 2026 Portfolio',
        category: 'Regional Analysis',
        excerpt: 'The Western Cape continues to outpace the national average, with selling times dropping significantly to 6.2 weeks. Activity levels have surged to 7.1/10 as semigration and student demand stabilize.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        link: 'https://www.fnb.co.za/about-fnb/newsroom/index.html'
    },
    {
        id: 3,
        title: 'SAPOA Research: Office Vacancies Hit 5-Year Low in Q4 2025',
        author: 'South African Property Owners Association',
        date: 'January 2026 Report',
        category: 'Commercial Intelligence',
        excerpt: 'National office vacancy rates have declined to 12.8%, the lowest level since 2020. Retail trading density also recorded a 3.9% year-on-year growth, signaling a robust recovery in high-density nodes.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
        link: 'https://sapoa.org.za/research/'
    },
    {
        id: 4,
        title: 'The Africanvestor: Stellenbosch & Cape Prime Growth Targets 7%',
        author: 'The Africanvestor News',
        date: 'Q1 2026 Outlook',
        category: 'Investment Forecast',
        excerpt: 'Prime and lifestyle-driven segments in the Western Cape are projected to record 4-7% capital growth in 2026. Infrastructure improvements and falling interest rates are primary drivers for this resilient performance.',
        image: '',
        link: 'https://theafricanvestor.com/blogs/news'
    },
    {
        id: 5,
        title: 'Property24: Shifting Demographic Demand for 2026',
        author: 'Property24 Industry Focus',
        date: '2026 Market Outlook',
        category: 'Trend Tracking',
        excerpt: 'Generation Z and Millennials are becoming the dominant buyer segment, prioritizing off-grid energy solutions and high-density security estates. Historical patterns suggest we are entering a major growth cycle.',
        image: '',
        link: 'https://www.property24.com/articles'
    },
    {
        id: 6,
        title: 'Wesgro Strategic Outlook: International Inflow Driving Tourism Property',
        author: 'Wesgro Data Hub',
        date: '2026-2030 Strategy',
        category: 'Regional Growth',
        excerpt: 'Cape Town hosts major international summits in 2026, including Mining Indaba and One Young World. This inflow is directly impacting short-term rental yields and hospitality-related property investments.',
        image: '',
        link: 'https://www.wesgro.co.za/'
    }
];

export default function NewsFeed({ showContainer = true }: { showContainer?: boolean } = {}) {
    const listContent = (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {MOCK_NEWS.map((item) => {
                return (
                    <article key={item.id} style={{
                        borderBottom: '1px solid var(--surface-border)',
                        padding: '1rem 0', /* Better breathing room */
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                    }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {item.author}
                        </div>
                        <h3 style={{ fontSize: '1.1rem', color: 'var(--heading)', lineHeight: 1.4, fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                {item.title}
                            </a>
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontWeight: 700,
                                fontSize: '0.875rem', /* Increased from 0.65rem */
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                color: 'var(--primary)',
                                transition: 'opacity 0.2s ease',
                                padding: '8px 0' /* Vertical hit area */
                            }}>
                                Access Report <ExternalLink size={14} />
                            </a>
                        </div>
                    </article>
                );
            })}
        </div>
    );

    if (!showContainer) {
        return listContent;
    }

    return (
        <section className={styles.newsSection} style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
            <div className="container">
                {listContent}
            </div>
        </section>
    );
}
