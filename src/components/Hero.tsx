import React from 'react';
import styles from './hero.module.css';

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            {/* Background layer with subtle grid or pattern */}
            <div className={styles.heroBackground}></div>
            <div className={styles.overlay}></div>

            <div className={`container ${styles.heroContent} animate-fade-up`}>
                <div className={styles.badge}>
                    <span className={styles.pulseDot}></span>
                    SYSTEM OPERATIONAL
                </div>
                <h1 className={styles.title}>
                    INTELLIGENCE <span style={{ color: 'var(--primary)' }}>ENGINE</span>
                </h1>
                <p className={styles.subtitle}>
                    Advanced algorithmic feasibility, macro-economic forensics, and automated
                    executive reporting for the modern property developer.
                </p>
            </div>
        </section>
    );
}
