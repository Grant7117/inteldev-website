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
                            <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'var(--card-bg)', border: '1px dashed var(--primary)', borderRadius: '4px', color: 'var(--card-text)', marginTop: '2rem', fontSize: '0.9rem' }}>
                                ⚠️ <strong>Note:</strong> This section of the website is currently under construction. Check back soon for updates.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
