import React from 'react';
import Image from 'next/image';
import { FinancialTicker } from '@/components/ticker/FinancialTicker';
import { BlaauwbergCorridorSection } from '@/components/corridor/BlaauwbergCorridorSection';
import { N7ExpansionSection } from '@/components/corridor/N7ExpansionSection';
import { IgneousPropertySection } from '@/components/corridor/IgneousPropertySection';
import { JsonLdSchema } from '@/components/seo/JsonLdSchema';

export default function Home() {
  return (
    <main
      style={{
        position: 'relative',
        zIndex: 2,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Structured Data Graph for AI & Search Engine Optimization */}
      <JsonLdSchema />

      {/* Top Financial & Regional Intelligence Ticker */}
      <FinancialTicker />

      {/* Main Content Area */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem 1.5rem 2rem',
          flex: 1,
        }}
      >
        {/* Top Status Badge */}
        <header style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.1rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            boxShadow: '0 0 20px rgba(56, 189, 248, 0.15)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 10px #38bdf8, 0 0 18px #38bdf8',
              display: 'inline-block',
              animation: 'pulseGlow 2s infinite ease-in-out',
            }}
          />
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#38bdf8',
              fontFamily: 'var(--font-mono)',
            }}
          >
            System Overhaul in Progress
          </span>
        </div>
      </header>

      {/* Center Hero Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '920px',
          width: '100%',
          margin: 'auto',
          padding: '2rem 0 3rem',
        }}
      >
        {/* Main Logo Showcase */}
        <div
          className="animate-float"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '680px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow:
              '0 25px 60px -15px rgba(0, 0, 0, 0.85), 0 0 50px rgba(56, 189, 248, 0.18)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backgroundColor: '#040711',
            marginBottom: '2.75rem',
            aspectRatio: '16 / 9',
          }}
        >
          <Image
            src="/inteldev-logo.jpg"
            alt="INTELDEV Intelligence Engine"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 680px"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              borderRadius: '24px',
              boxShadow: 'inset 0 0 30px rgba(7, 11, 20, 0.6)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
            }}
          />
        </div>

        {/* Heading Statement */}
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.4rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '1.25rem',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)',
          }}
        >
          Soon to be the new home of{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #38bdf8 50%, #93c5fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 25px rgba(56, 189, 248, 0.35))',
            }}
          >
            &ldquo;INTELDEV&rdquo;
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '640px',
            lineHeight: 1.6,
            fontWeight: 400,
            marginBottom: '2.5rem',
          }}
        >
          We are upgrading our digital intelligence platform and engineering ecosystem. 
          A state-of-the-art experience is launching shortly.
        </p>

        {/* Intelligence Status Grid */}
        <div
          className="glass-panel"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            width: '100%',
            maxWidth: '720px',
            padding: '1.5rem 2rem',
            textAlign: 'left',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Platform Status
            </span>
            <span
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              Major Overhaul Underway
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Core Architecture
            </span>
            <span
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#f8fafc',
              }}
            >
              Intelligence Engine
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Security Protocol
            </span>
            <span
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#a7f3d0',
              }}
            >
              Active & Encrypted
            </span>
          </div>
        </div>
      </section>

      {/* The Blaauwberg Road Corridor Statutory Section */}
      <BlaauwbergCorridorSection />

      {/* N7 Expansion & Regional Infrastructure Section */}
      <N7ExpansionSection />

      {/* Igneous Property Development & Active Acquisition Section */}
      <IgneousPropertySection />

      {/* Footer */}
      <footer
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <span>&copy; {new Date().getFullYear()} INTELDEV Intelligence Engine. All Rights Reserved.</span>
      </footer>
      </div>
    </main>
  );
}
