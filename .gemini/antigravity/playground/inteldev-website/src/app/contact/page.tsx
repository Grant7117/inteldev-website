"use client";

import React from 'react';
import styles from '@/components/page.module.css';
import Ticker from '@/components/Ticker';

export default function ContactPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Ticker />

            <section className={`section-padding ${styles.pageSection}`} style={{ paddingTop: '8rem', flexGrow: 1 }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>

                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '0px', // Exact match to the image (sharp edges usually or very slight) -> Let's use slight rounded corners for modern web.
                        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                        padding: '4rem 2rem',
                        maxWidth: '400px',
                        width: '100%',
                        textAlign: 'center',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            color: '#1E293B',
                            fontFamily: 'var(--font-serif)',
                            marginBottom: '1.25rem',
                            fontWeight: 500
                        }}>Contact Us</h1>

                        <div style={{
                            height: '3px',
                            backgroundColor: '#C5E1A5', // Exact lime green horizontal bar
                            width: '100%',
                            margin: '0 auto 3rem auto'
                        }} />

                        <div style={{
                            width: '170px',
                            height: '170px',
                            borderRadius: '50%',
                            margin: '0 auto 2rem auto',
                            overflow: 'hidden',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            border: '4px solid #fff',
                            backgroundColor: '#f0f0f0'
                        }}>
                            {/* Make sure to upload this grant.jpg to public/images/ */}
                            <img
                                src="/images/grant.jpg"
                                alt="Grant Whitburn"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => {
                                    e.currentTarget.src = 'https://ui-avatars.com/api/?name=Grant+Whitburn&background=152A4A&color=fff&size=200';
                                }}
                            />
                        </div>

                        <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                            Principal Property Practitioner
                        </div>

                        <h2 style={{ fontSize: '1.4rem', color: '#1E293B', fontWeight: 600, marginBottom: '0.75rem' }}>
                            Grant Whitburn (PPRE, DipBM)
                        </h2>

                        <div style={{ fontSize: '1.05rem', color: '#475569', marginBottom: '0.25rem' }}>
                            Diploma in Business Management
                        </div>
                        <div style={{ fontSize: '1.05rem', color: '#475569', marginBottom: '2.5rem' }}>
                            Google AI Essentials Certificate
                        </div>

                        <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                            Email
                        </div>
                        <a href="mailto:sales@igneousproperty.co.za" style={{
                            display: 'block',
                            fontSize: '1.25rem',
                            color: '#334155',
                            fontWeight: 600,
                            marginBottom: '2.5rem',
                            textDecoration: 'none'
                        }}>
                            sales@igneousproperty.co.za
                        </a>

                        <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                            WhatsApp / Phone
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', paddingLeft: '35px' }}>
                            <a href="tel:+27724503626" style={{
                                fontSize: '1.4rem',
                                color: '#334155',
                                fontWeight: 600,
                                textDecoration: 'none'
                            }}>
                                072 450 3626
                            </a>
                            <a href="https://wa.me/27724503626" target="_blank" rel="noopener noreferrer" style={{
                                backgroundColor: '#1A2925',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                textDecoration: 'none'
                            }}>
                                {/* The '...' chat bubble from screenshot */}
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    <circle cx="8" cy="11" r="1.5" fill="none" stroke="#1A2925" strokeWidth="2"></circle>
                                    <circle cx="12" cy="11" r="1.5" fill="none" stroke="#1A2925" strokeWidth="2"></circle>
                                    <circle cx="16" cy="11" r="1.5" fill="none" stroke="#1A2925" strokeWidth="2"></circle>
                                </svg>
                            </a>
                        </div>

                        <a href="https://wa.me/27724503626" target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#C8E966', // Lime green full width button
                            padding: '0.5rem 0.5rem 0.5rem 2rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            color: '#000',
                            fontWeight: 600,
                            letterSpacing: '0.02em',
                        }}>
                            <span style={{ flexGrow: 1, textAlign: 'center', fontSize: '1.05rem' }}>CHAT ON WHATSAPP</span>
                            <div style={{
                                backgroundColor: '#25D366', // WhatsApp Green
                                width: '54px',
                                height: '54px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                border: '4px solid #fff',
                                flexShrink: 0
                            }}>
                                {/* SVG WhatsApp Telephone Path */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(10deg)' }}>
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
