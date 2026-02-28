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
              <span style={{ display: 'block', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '1rem', fontWeight: 600 }}>Intelligence Ecosystem</span>
              <h2 style={{ fontSize: '3rem', color: 'var(--heading)' }}>Core <span style={{ color: 'var(--primary)' }}>Offerings</span></h2>
            </div>
            <Services paddingTop="0" paddingBottom="0" showContainer={false} />
          </div>

          <aside className="right-column">
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--heading)' }}>Monthly Property Reports</h2>
            </div>
            <NewsFeed showContainer={false} />
          </aside>

        </div>
      </section>
    </main>
  );
}
