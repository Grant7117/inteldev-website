import React from 'react';
import styles from '@/components/page.module.css';
import Ticker from '@/components/Ticker';
import { Building, CheckCircle } from 'lucide-react';

export default function RecentProjectsPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Ticker />

            <section className={`section-padding ${styles.pageSection}`} style={{ paddingTop: '8rem', flexGrow: 1 }}>
                <div className="container">
                    <div className={styles.wrapper} style={{ maxWidth: '1200px' }}>
                        <div className={styles.header}>
                            <span className={styles.label}>Execution</span>
                            <h1 className={styles.title}>Recent <span style={{ color: 'var(--primary)' }}>Projects</span></h1>
                            <p className={styles.introText} style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                                A curated portfolio of top-tier residential developments successfully underwritten, marketed, and executed using the IntelDev methodology.
                            </p>
                        </div>

                        <div className={styles.grid}>
                            <div className={styles.card}>
                                <div className={styles.cardIcon}><Building size={36} /></div>
                                <h3 className={styles.cardTitle}>Cornerstone on Arum</h3>
                                <div className={styles.cardSubtitle}>Table View, Cape Town &nbsp; | &nbsp; Under Development</div>
                                <p className={styles.cardDesc}>
                                    Setting a benchmark for residential living with 22 premium, thoughtfully designed one- and two-bedroom apartments within a secure, well-managed community. Built to deliver long-term value through superior standards of design and sustainability.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardIcon}><CheckCircle size={36} color="var(--primary-alt)" /></div>
                                <h3 className={styles.cardTitle}>Residence on North</h3>
                                <div className={styles.cardSubtitle} style={{ color: 'var(--primary-alt)' }}>Table View, Cape Town &nbsp; | &nbsp; 100% Sold Out</div>
                                <p className={styles.cardDesc}>
                                    Three separate developments, consisting of 24 units each. Featuring a New York-style top-floor viewing deck. High-end finishes including GROHE sanitary ware, AEG gas stoves, and integrated gas geysers for complete energy autonomy.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardIcon}><CheckCircle size={36} color="var(--primary-alt)" /></div>
                                <h3 className={styles.cardTitle}>North View Terraces</h3>
                                <div className={styles.cardSubtitle} style={{ color: 'var(--primary-alt)' }}>Table View, Cape Town &nbsp; | &nbsp; 100% Sold Out</div>
                                <p className={styles.cardDesc}>
                                    A highly successful sell-out showcasing IntelDev’s absorption modeling matrix, matching premium unit design with critical micro-demographic purchasing power for rapid market clearing velocity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
