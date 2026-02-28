"use client";

import React, { useState } from 'react';
import styles from './news.module.css';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const MOCK_NEWS = [
    {
        id: 1,
        title: 'FNB Property Barometer: Shifting Tides in High-Density Demand',
        author: 'John Loos | FNB Property Economist',
        date: 'Most Recent Publication',
        category: 'Market Pricing',
        excerpt: 'John Loos analyzes current buying patterns, tracking exactly how inflation numbers are shifting critical absorption rates away from traditional freestanding assets toward high-density security estates.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        link: 'https://www.fnb.co.za/about-fnb/newsroom/index.html'
    },
    {
        id: 2,
        title: 'BetterBond Property Brief: Unlocking Value Under Current Rates',
        author: 'Dr Roelof Botha | BetterBond',
        date: 'Monthly Index',
        category: 'Macroeconomics',
        excerpt: 'Dr Roelof Botha unpacks macroeconomic metrics, demonstrating the underlying resilience of the South African property market despite prime rate pressures, signaling an imminent upswing in approval ratios.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        link: 'https://www.betterbond.co.za/news'
    },
    {
        id: 3,
        title: 'SAPOA Research: Yield Tracking Across Major DA Metros',
        author: 'South African Property Owners Association',
        date: 'Quarterly Report',
        category: 'Yield Intelligence',
        excerpt: 'A comprehensive breakdown of commercial and high-density residential yields, highlighting actionable data patterns exclusively monitored across Cape Town, Johannesburg, and Tshwane.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
        link: 'https://sapoa.org.za/research/'
    },
    {
        id: 4,
        title: 'South Africa Price Forecasts: Rate Cuts on the Horizon',
        author: 'The Africanvestor',
        date: 'Recent Outlook',
        category: 'Macro Forecasts',
        excerpt: 'In South Africa, forward-looking indicators and FNB economic forecasts are projecting significant basis point interest rate cuts unfolding by mid-2026, easing pressure on bondholders and spurring new demand.',
        image: '',
        link: 'https://theafricanvestor.com/blogs/news/south-africa-price-forecasts#:~:text=In%20South%20Africa%2C%20the%20FNB,point%20cuts%20by%20mid%2D2026'
    },
    {
        id: 5,
        title: 'Western Cape Economic Outlook & Property Investment',
        author: 'WESGRO',
        date: 'Regional Tracking',
        category: 'Investment Corridor',
        excerpt: 'Cape Town and the Western Cape remain the premier destinations for property development, driven by strong municipal fundamentals, tourism growth, and continuous foreign direct investment.',
        image: '',
        link: 'https://www.wesgro.co.za/'
    },
    {
        id: 6,
        title: 'Afrimat Construction Index (ACI): Building Sector Activity',
        author: 'Afrimat Construction Index',
        date: 'Quarterly Index',
        category: 'Construction Velocity',
        excerpt: 'Tracking the underlying health of the construction sector through building materials volume and value indicators, providing an early warning system for development pipeline bottlenecks.',
        image: '',
        link: 'https://www.afrimat.co.za/afrimat-construction-index-aci/'
    },
    {
        id: 7,
        title: 'What to Expect from the South African Property Market in 2026',
        author: 'Property24',
        date: 'Market Forecast',
        category: 'Property Pulse',
        excerpt: 'Industry experts predict shifting trends across the South African real estate landscape as we move into 2026, driven by changing buyer demographics and the search for security and lifestyle amenities.',
        image: '',
        link: 'https://www.property24.com/articles/what-to-expect-from-the-south-african-property-market-in-2026/32927'
    },
    {
        id: 8,
        title: 'The Official Property Brief',
        author: 'BetterBond',
        date: 'Monthly Index',
        category: 'Macroeconomics',
        excerpt: 'Read the comprehensive, regular monthly Property Briefs produced by BetterBond, tracking critical industry metrics, approval rates, and consumer lending health across the national market.',
        image: '',
        link: 'https://www.betterbond.co.za/property-brief/'
    }
];

export default function NewsFeed({ showContainer = true }: { showContainer?: boolean } = {}) {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number, e: React.MouseEvent) => {
        e.preventDefault();
        setExpandedId(expandedId === id ? null : id);
    };

    const listContent = (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {MOCK_NEWS.map((item) => {
                const isExpanded = expandedId === item.id;
                const isLongExcerpt = item.excerpt.length > 85;
                const displayExcerpt = isExpanded || !isLongExcerpt ? item.excerpt : `${item.excerpt.substring(0, 85).trim()}...`;

                return (
                    <article key={item.id} style={{
                        borderBottom: '1px solid var(--surface-border)',
                        paddingBottom: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                    }}>
                        <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {item.author}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', color: 'var(--heading)', lineHeight: 1.4, fontFamily: 'var(--font-sans)', cursor: 'pointer' }} onClick={(e) => toggleExpand(item.id, e)}>
                            {item.title}
                        </h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, cursor: 'pointer' }} onClick={(e) => toggleExpand(item.id, e)}>
                            {displayExcerpt}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                color: 'var(--primary)',
                                transition: 'opacity 0.2s ease'
                            }}>
                                Access Report <ExternalLink size={14} />
                            </a>

                            {isLongExcerpt && (
                                <button onClick={(e) => toggleExpand(item.id, e)} style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.25rem',
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                    color: 'var(--text-muted)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}>
                                    {isExpanded ? (
                                        <>Close <ChevronUp size={14} /></>
                                    ) : (
                                        <>Read More <ChevronDown size={14} /></>
                                    )}
                                </button>
                            )}
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
