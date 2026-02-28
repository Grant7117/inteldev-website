import React from 'react';
import styles from '@/components/about.module.css';
import Ticker from '@/components/Ticker';
import { Database, LineChart, Building2, MapPin } from 'lucide-react';
import Services from '@/components/Services';

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Ticker />

            <section className={`section-padding ${styles.aboutSection}`} style={{ paddingTop: '8rem', paddingBottom: '0rem', flexGrow: 1 }}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <div className={styles.header}>
                            <span className={styles.label} style={{ fontWeight: 600 }}>The IntelDev Solution</span>
                            <h1 className={styles.title}>The <span style={{ color: 'var(--primary)' }}>Intelligence</span> Engine</h1>
                            <p className={styles.introText}>
                                Traditional property development underwriting relies on static data, such as historical sales figures, outdated census reports, and subjective "market feel," which are often outdated by the time developers break ground. This makes them reactive.
                                <br /><br />
                                IntelDev is not a consultancy. We are a proprietary, cloud-native architecture—a predictive intelligence engine. We provide large-scale data points and real-time, accurate data synthesized from the South African macroeconomic landscape, exactly what institutional capital demands.
                            </p>
                        </div>
                    </div>

                    <div className={styles.engineSection}>
                        <h2 className={styles.engineTitle}>Our Analytical <span style={{ color: 'var(--primary)' }}>Framework</span></h2>
                        <p className={styles.engineDesc}>
                            At the core of our advisory is the Intelligence Engine—a proprietary, cloud-native architecture that actively monitors and synthesizes large-scale data points across the South African macroeconomic landscape in real-time.
                        </p>

                        <div className={styles.grid}>
                            <div className={styles.gridItem}>
                                <div className={styles.iconWrapper}><LineChart size={36} /></div>
                                <h3 className={styles.itemTitle}>Macro-Forensics</h3>
                                <p className={styles.itemDesc}>
                                    Live tracking of global markets, building inflation, and proprietary domestic analytics. We know when capital costs shift before the market reacts.
                                </p>
                            </div>
                            <div className={styles.gridItem}>
                                <div className={styles.iconWrapper}><Database size={36} /></div>
                                <h3 className={styles.itemTitle}>Micro-Demographics</h3>
                                <p className={styles.itemDesc}>
                                    Granular tracking of population migration vectors and localized purchasing power shifts down to the suburb level.
                                </p>
                            </div>
                            <div className={styles.gridItem}>
                                <div className={styles.iconWrapper}><Building2 size={36} /></div>
                                <h3 className={styles.itemTitle}>Grid Intelligence</h3>
                                <p className={styles.itemDesc}>
                                    Factoring municipal service delivery, water, services, and energy autonomy directly into structural valuations.
                                </p>
                            </div>
                            <div className={styles.gridItem}>
                                <div className={styles.iconWrapper}><MapPin size={36} /></div>
                                <h3 className={styles.itemTitle}>Supply-Side Telemetry</h3>
                                <p className={styles.itemDesc}>
                                    Real-time tracking of current developers' inventory, launch pricing, analyzing duration and price-point resistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Services paddingTop="3rem" />

            <section style={{ backgroundColor: 'var(--background)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', paddingBottom: '4rem' }}>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                            <strong>IntelDev:</strong> Precision Advisory. Algorithmic Execution.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
