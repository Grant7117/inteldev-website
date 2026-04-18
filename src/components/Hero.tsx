import React from 'react';
import styles from './hero.module.css';

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            {/* Background layer for the Coastal Sanctuary vibe */}
            <div className={styles.heroBackground}></div>
            <div className={styles.overlay}></div>

            <div className={`container ${styles.heroContent} animate-fade-up`}>
                <div className={styles.badge}>
                    <span className={styles.pulseDot}></span>
                    NETWORK STATUS: OPERATIONAL
                </div>
                
                <h1 className={styles.title}>
                    INTELLIGENCE <br />
                    <span className={styles.accentText}>ENGINE</span>
                </h1>
                
                <p className={styles.subtitle}>
                    Advanced algorithmic feasibility, macro-economic forensics, and 
                    automated executive reporting tailored for modern property ecosystems.
                </p>

                <div className={styles.ctaGroup}>
                    <button className={styles.primaryBtn}>Initialize Inquiry</button>
                    <button className={styles.secondaryBtn}>View Ecosystem</button>
                </div>
            </div>
        </section>
    );
}