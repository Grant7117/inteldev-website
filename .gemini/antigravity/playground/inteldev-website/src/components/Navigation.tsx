import React from 'react';
import Link from 'next/link';

export default function Navigation() {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            padding: '1.5rem 5%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(244, 245, 247, 0.8)', // Light Grey Opacity
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--surface-border)'
        }}>
            <div style={{ flexShrink: 0 }}>
                <Link href="/" style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
                }}>
                    <span style={{ color: 'var(--heading)' }}>Intel</span>
                    <span style={{ color: 'var(--text-muted)' }}>Dev</span>
                </Link>
            </div>

            <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                <Link href="/" style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--foreground)',
                    transition: 'color 0.2s ease'
                }}>
                    Home
                </Link>
                <Link href="/about" style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--foreground)',
                    transition: 'color 0.2s ease'
                }}>
                    About
                </Link>
                <Link href="/scope-of-work" style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--foreground)',
                    transition: 'color 0.2s ease'
                }}>
                    Scope of Work
                </Link>
                <Link href="/recent-projects" style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--foreground)',
                    transition: 'color 0.2s ease'
                }}>
                    Recent Projects
                </Link>
                <Link href="/partners" style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--foreground)',
                    transition: 'color 0.2s ease'
                }}>
                    Partners
                </Link>
                <Link href="/contact" style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--foreground)',
                    transition: 'color 0.2s ease'
                }}>
                    Contact
                </Link>
            </nav>
        </header>
    );
}
