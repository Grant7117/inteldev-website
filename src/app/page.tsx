import React from 'react';
import Ticker from '@/components/Ticker';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import NewsFeed from '@/components/NewsFeed';
import styles from '@/components/page.module.css';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--background)' }}>
      <Ticker />
      <Hero />
      
      <section className="section-padding">
        <div className="container">
          <div className={styles.homeGrid}>

            {/* MAIN CONTENT COLUMN */}
            <div className={styles.leftColumn}>
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                  color: 'var(--heading)', 
                  fontWeight: 600, 
                  lineHeight: 1.1, 
                  letterSpacing: '-0.03em',
                  margin: 0,
                  textTransform: 'uppercase'
                }}>
                  Intelligence <br />
                  <span style={{ color: 'var(--accent-color)' }}>Ecosystem</span>
                </h2>
                <p style={{ 
                  color: 'var(--text-muted)', 
                  marginTop: '1.5rem', 
                  fontSize: '1.1rem', 
                  maxWidth: '550px',
                  lineHeight: '1.6' 
                }}>
                  Deploying sophisticated development frameworks and real-time market intelligence to scale your digital and physical infrastructure.
                </p>
              </div>
              
              <Services paddingTop="0" paddingBottom="0" showContainer={false} columns={2} />
            </div>

            {/* SIDEBAR COLUMN */}
            <aside className={styles.rightColumn}>
              <div style={{ 
                marginBottom: '2rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--background-off)', 
                paddingBottom: '0.75rem' 
              }}>
                <h2 style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--heading)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.15em', 
                  fontWeight: 700, 
                  margin: 0 
                }}>
                  Market Pulse
                </h2>
                <span className={styles.liveIndicator}></span>
              </div>
              
              <div style={{ opacity: 0.9 }}>
                <NewsFeed showContainer={false} />
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}