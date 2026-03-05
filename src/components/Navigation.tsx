'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/scope-of-work', label: 'Scope of Work' },
        { href: '/recent-projects', label: 'Recent Projects' },
        { href: '/partners', label: 'Partners' },
        { href: '/contact', label: 'Contact' },
    ];

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
            backgroundColor: 'rgba(244, 245, 247, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--surface-border)'
        }}>
            <div style={{ flexShrink: 0, zIndex: 102 }}>
                <Link href="/" style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em'
                }} onClick={() => setMenuOpen(false)}>
                    <span style={{ color: 'var(--heading)' }}>Intel</span>
                    <span style={{ color: 'var(--text-muted)' }}>Dev</span>
                </Link>
            </div>

            <nav className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} style={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--foreground)',
                        transition: 'color 0.2s ease'
                    }}>
                        {link.label}
                    </Link>
                ))}
            </nav>

            <button
                className="mobile-menu-btn"
                onClick={toggleMenu}
                style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 102, display: 'none' }}
                aria-label="Toggle Menu"
            >
                {menuOpen ? <X size={28} color="var(--heading)" /> : <Menu size={28} color="var(--heading)" />}
            </button>

            {menuOpen && (
                <div className="mobile-menu-overlay" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(244, 245, 247, 0.98)',
                    zIndex: 101,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--foreground)',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                }
                @media (min-width: 769px) {
                    .mobile-menu-btn { display: none !important; }
                    .mobile-menu-overlay { display: none !important; }
                }
            `}} />
        </header>
    );
}
