import React from 'react';
import Ticker from '@/components/Ticker';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import NewsFeed from '@/components/NewsFeed';
import styles from '@/components/page.module.css';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Ticker />
      <Hero />
      <section className="section-padding" style={{ backgroundColor: 'var(--background)' }}>
        <div className={`container ${styles.homeGrid}`}>

          <div className="left-column">
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '3rem', color: 'var(--heading)', fontWeight: 700, lineHeight: 1 }}>INTELLIGENCE <span style={{ color: 'var(--primary)' }}>ECOSYSTEM</span></h2>
            </div>
            <Services paddingTop="0" paddingBottom="0" showContainer={false} columns={3} />
          </div>

          <aside className="right-column">
            <div style={{ marginTop: '1.2rem', marginBottom: '1.8rem', borderBottom: '1px solid var(--primary)', paddingBottom: '0.75rem' }}>
              <h2 style={{ fontSize: '1rem', color: 'var(--heading)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Property Market Pulse</h2>
            </div>
            <NewsFeed showContainer={false} />
          </aside>

        </div>
      </section>
    </main>
  );
}
