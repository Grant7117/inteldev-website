import React from 'react';
import styles from '@/components/page.module.css';
import Ticker from '@/components/Ticker';

export default function PartnersPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Ticker />

            <section className={`section-padding ${styles.pageSection}`} style={{ paddingTop: '8rem', flexGrow: 1 }}>
                <div className="container">
                    <div className={styles.wrapper} style={{ maxWidth: '1200px' }}>
                        <div className={styles.header} style={{ marginBottom: '2rem' }}>
                            <span className={styles.label}>Strategic Alignment</span>
                            <h1 className={styles.title} style={{ marginBottom: 0 }}>Our <span style={{ color: 'var(--primary)' }}>Partners</span></h1>
                        </div>

                        <div className={styles.grid} style={{ gridTemplateColumns: 'minmax(300px, 600px)', justifyContent: 'center' }}>
                            <div className={styles.card} style={{ alignItems: 'center', textAlign: 'center' }}>
                                <div className={styles.cardTitle} style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Igneous Property Development</div>
                                <div className={styles.cardSubtitle} style={{ color: 'var(--primary-alt)' }}>Lead Execution Partner</div>

                                <p className={styles.cardDesc} style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
                                    Igneous Property Development is an innovative, disruptive, consumer-driven company with over 30 years of experience in property investment and development.
                                    <br /><br />
                                    Fully self-funded and operating outside the pressures of bank deadlines or prescribed pre-sales targets, they deliver premium products focusing on community living, affordability, and state-of-the-art security systems. Partnering with IntelDev's proprietary algorithmic intelligence, Igneous executes flawless, high-yield developments perfectly matched to current macroeconomic metrics.
                                </p>

                                <a href="https://www.igneousproperty.co.za" target="_blank" rel="noopener noreferrer" className={styles.cardLink} style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '1rem 2rem', borderRadius: '4px', border: '1px solid var(--card-border)' }}>
                                    Visit Igneous Property <span style={{ fontSize: '1.25rem' }}>↗</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
