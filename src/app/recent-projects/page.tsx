import React from 'react';
import styles from '@/components/page.module.css';
import Ticker from '@/components/Ticker';


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
                            <p className={styles.introText} style={{ maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
                                A curated portfolio of top-tier residential developments successfully underwritten, marketed, and executed using the IntelDev methodology.
                            </p>
                            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'var(--card-bg)', border: '1px dashed var(--primary)', borderRadius: '4px', color: 'var(--text)', marginBottom: '4rem', fontSize: '0.9rem' }}>
                                ⚠️ <strong>Note:</strong> This section of the website is currently under construction. Check back soon for updates.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
