import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            padding: '3rem 5%',
            backgroundColor: 'var(--background)',
            borderTop: '1px solid var(--surface-border)',
            textAlign: 'center',
            color: 'var(--foreground)',
            fontSize: '0.85rem',
            marginTop: 'auto'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ color: 'var(--heading)', letterSpacing: '0.1em', fontFamily: 'var(--font-sans)', fontSize: '1.2rem' }}>IntelDev</strong>
                    <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', color: 'var(--foreground)' }} aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', color: 'var(--foreground)' }} aria-label="Facebook">
                        <Facebook size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', color: 'var(--foreground)' }} aria-label="Instagram">
                        <Instagram size={20} />
                    </a>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <a href="#" style={{ transition: 'color 0.2s', color: 'var(--foreground)' }}>Privacy Policy</a>
                    <a href="#" style={{ transition: 'color 0.2s', color: 'var(--foreground)' }}>Terms of Engagement</a>
                </div>
            </div>
        </footer>
    );
}
