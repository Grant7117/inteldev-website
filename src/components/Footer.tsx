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
            <div className="footer-content" style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <strong style={{ color: 'var(--heading)', letterSpacing: '0.1em', fontFamily: 'var(--font-sans)', fontSize: '1.2rem' }}>IntelDev</strong>
                    <span style={{ fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', color: 'var(--foreground)', padding: '12px' }} aria-label="LinkedIn">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', color: 'var(--foreground)', padding: '12px' }} aria-label="Facebook">
                        <Facebook size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', color: 'var(--foreground)', padding: '12px' }} aria-label="Instagram">
                        <Instagram size={24} />
                    </a>
                </div>

                <div style={{ display: 'flex', gap: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="#" style={{ transition: 'color 0.2s', color: 'var(--foreground)', padding: '10px 0', fontSize: '0.75rem', fontWeight: 600 }}>Privacy Policy</a>
                    <a href="#" style={{ transition: 'color 0.2s', color: 'var(--foreground)', padding: '10px 0', fontSize: '0.75rem', fontWeight: 600 }}>Terms of Engagement</a>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .footer-content {
                        flex-direction: column !important;
                        text-align: center !important;
                    }
                }
            ` }} />
        </footer>
    );
}
