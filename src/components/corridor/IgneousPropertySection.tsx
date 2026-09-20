'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  IGNEOUS_DEVELOPER_CONFIG,
  IGNEOUS_PROJECTS,
  LAND_ACQUISITION_CRITERIA,
} from '@/lib/igneousData';

export const IgneousPropertySection: React.FC = () => {
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);
  const [erfNumber, setErfNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [erfSize, setErfSize] = useState('1004');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!streetAddress || !contactNumber) {
      setSubmissionFeedback('Please provide both the property address and contact number.');
      return;
    }
    setSubmissionFeedback(
      `✓ Acquisition inquiry for "${streetAddress} (~${erfSize}m²)" received! Our acquisitions team at Igneous Property Development will contact you within 24 hours.`
    );
    setStreetAddress('');
    setErfNumber('');
    setContactNumber('');
  };

  return (
    <section
      id="igneous-property"
      style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '1rem auto 4rem',
        padding: '0 1.5rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Section Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: '2rem',
          borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
          paddingBottom: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              color: '#f59e0b',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Developer Showcase & Acquisitions
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              padding: '0.3rem 0.65rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Table View & Blouberg Track Record
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {/* Logo Image Showcase */}
            <div
              style={{
                position: 'relative',
                width: '100px',
                height: '100px',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#0c1220',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                boxShadow: '0 10px 25px rgba(245, 158, 11, 0.2)',
                flexShrink: 0,
              }}
            >
              <Image
                src="/igneous-logo-3d.jpg"
                alt="Igneous Property Development Logo"
                fill
                sizes="100px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  marginBottom: '0.4rem',
                }}
              >
                {IGNEOUS_DEVELOPER_CONFIG.name}
              </h2>
              <p
                style={{
                  fontSize: '0.96rem',
                  color: '#94a3b8',
                  maxWidth: '720px',
                  lineHeight: 1.55,
                }}
              >
                Property developers operating in {IGNEOUS_DEVELOPER_CONFIG.operatingHub}.
              </p>
            </div>
          </div>

          <a
            href={IGNEOUS_DEVELOPER_CONFIG.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.8rem 1.6rem',
              borderRadius: '12px',
              backgroundColor: '#f59e0b',
              color: '#040711',
              fontWeight: 700,
              fontSize: '0.92rem',
              textDecoration: 'none',
              boxShadow: '0 0 25px rgba(245, 158, 11, 0.35)',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-sans)',
            }}
          >
            <span>Visit www.igneousproperty.co.za</span>
            <span style={{ fontSize: '1.1rem' }}>↗</span>
          </a>
        </div>
      </div>

      {/* ACTIVE ACQUISITIONS CALLOUT BANNER */}
      <div
        className="glass-panel"
        style={{
          padding: '2rem 2.25rem',
          backgroundColor: 'rgba(20, 16, 10, 0.92)',
          border: '1px solid rgba(245, 158, 11, 0.45)',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(245, 158, 11, 0.15)',
          marginBottom: '2.5rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(244, 63, 94, 0.18)',
                  color: '#fb7185',
                  border: '1px solid rgba(244, 63, 94, 0.35)',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#fb7185', display: 'inline-block' }} />
                LAND ACQUISITION
              </span>
              <span style={{ fontSize: '0.72rem', color: '#f59e0b', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                Blaauwberg Road Corridor & Table View Precincts
              </span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
              Seeking 1,004 m² & 1,007 m² Properties for Purchase
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', marginTop: '0.4rem', maxWidth: '880px', lineHeight: '1.6' }}>
              Igneous Property Development is actively looking to acquire standard suburban erven (specifically ~<strong>1,004 m² and 1,007 m²</strong>) situated along the <strong>Blaauwberg Road Corridor</strong>, North Road, Arum Road, and surrounding Table View / Blouberg areas.
            </p>
          </div>
        </div>

        {/* Acquisition Highlights Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '1.75rem',
            padding: '1.25rem',
            borderRadius: '14px',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>TARGET ERF SIZES</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
              1,004 m² & 1,007 m²
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>PRIMARY FOCUS AREA</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
              Blaauwberg Road Corridor
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>PRECINCTS</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
              Table View & Blouberg
            </div>
          </div>
        </div>

        {/* Property Submission / Inquiry Form */}
        <form onSubmit={handleSubmitInquiry} style={{ marginTop: '1rem' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
            Property Submission / Acquisition Inquiry:
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <input
              type="text"
              placeholder="Street Address (e.g. 25 North Road)"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-sans)',
              }}
            />

            <input
              type="text"
              placeholder="Erf Number (Optional)"
              value={erfNumber}
              onChange={(e) => setErfNumber(e.target.value)}
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-sans)',
              }}
            />

            <select
              value={erfSize}
              onChange={(e) => setErfSize(e.target.value)}
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                backgroundColor: '#0c1220',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              <option value="1004">~1,004 m²</option>
              <option value="1007">~1,007 m²</option>
              <option value="other">Other Size</option>
            </select>

            <input
              type="tel"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              style={{
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-sans)',
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <button
              type="submit"
              style={{
                padding: '0.75rem 1.6rem',
                borderRadius: '10px',
                backgroundColor: '#f59e0b',
                color: '#040711',
                fontWeight: 700,
                fontSize: '0.88rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(245, 158, 11, 0.35)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Submit Property Details
            </button>

            <a
              href={IGNEOUS_DEVELOPER_CONFIG.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.78rem', color: '#94a3b8', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}
            >
              Official Portal: <strong style={{ color: '#f8fafc' }}>www.igneousproperty.co.za ↗</strong>
            </a>
          </div>

          {submissionFeedback && (
            <div
              style={{
                marginTop: '1rem',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                color: '#34d399',
                fontSize: '0.84rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {submissionFeedback}
            </div>
          )}
        </form>
      </div>

      {/* PORTFOLIO & UPCOMING LAUNCH GRID */}
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
            Development Track Record & Upcoming Launch
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '0.2rem' }}>
            Delivered residential communities across North Road and Arum Road in Table View.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {IGNEOUS_PROJECTS.map((project) => {
            const isLaunchingSoon = project.status === 'LAUNCHING_SOON';

            return (
              <div
                key={project.id}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  backgroundColor: isLaunchingSoon ? 'rgba(15, 23, 42, 0.95)' : 'rgba(12, 18, 32, 0.85)',
                  border: isLaunchingSoon ? '1px solid rgba(245, 158, 11, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  boxShadow: isLaunchingSoon ? '0 10px 30px rgba(245, 158, 11, 0.15)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        backgroundColor: isLaunchingSoon ? 'rgba(245, 158, 11, 0.2)' : 'rgba(56, 189, 248, 0.12)',
                        color: isLaunchingSoon ? '#f59e0b' : '#38bdf8',
                        border: isLaunchingSoon ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(56, 189, 248, 0.25)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {project.statusBadge}
                    </span>

                    {project.timeline && (
                      <span style={{ fontSize: '0.72rem', color: '#f59e0b', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                        {project.timeline}
                      </span>
                    )}
                  </div>

                  {project.image && (
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '210px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '1rem',
                        backgroundColor: '#0a0f1d',
                        border: isLaunchingSoon ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.name} - ${project.address}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '50px',
                          background: 'linear-gradient(to top, rgba(12, 18, 32, 0.95), transparent)',
                        }}
                      />
                    </div>
                  )}

                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                    {project.name}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                    {project.address} • {project.suburb}
                  </div>

                  <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: '1.55', marginBottom: '1rem' }}>
                    {project.description}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
                      Key Architectural & Investment Highlights:
                    </div>
                    <ul style={{ paddingLeft: '1.1rem', fontSize: '0.8rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    {project.typology}
                  </span>

                  <a
                    href={project.projectUrl || IGNEOUS_DEVELOPER_CONFIG.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: isLaunchingSoon ? '#f59e0b' : '#38bdf8',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '6px',
                      backgroundColor: isLaunchingSoon ? 'rgba(245, 158, 11, 0.12)' : 'rgba(56, 189, 248, 0.08)',
                      border: isLaunchingSoon ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid rgba(56, 189, 248, 0.2)',
                    }}
                  >
                    <span>
                      {project.projectUrl?.includes('cornerstoneonarum')
                        ? 'cornerstoneonarum.co.za'
                        : 'igneousproperty.co.za'}
                    </span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
