'use client';

import React from 'react';
import { MarketMetric } from '@/types/ticker';

interface MetricDetailModalProps {
  metric: MarketMetric | null;
  onClose: () => void;
}

export const MetricDetailModal: React.FC<MetricDetailModalProps> = ({ metric, onClose }) => {
  if (!metric) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(3, 7, 18, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel animate-glow"
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: '#0c1322',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 30px rgba(56, 189, 248, 0.15)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  color: '#38bdf8',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {metric.badge || metric.category}
              </span>
              {metric.isLive && (
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    color: '#34d399',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#34d399',
                      display: 'inline-block',
                    }}
                  />
                  LIVE FEED
                </span>
              )}
            </div>
            <h2
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {metric.symbol}
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.2rem' }}>
              {metric.name}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.1rem',
              transition: 'all 0.2s ease',
            }}
          >
            &times;
          </button>
        </div>

        {/* Big Value Showcase */}
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            marginBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              Benchmark / Spot Rate
            </span>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>
              {metric.displayValue}
            </div>
          </div>
          {metric.change && (
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                Delta / Trajectory
              </span>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginTop: '0.25rem',
                  color: metric.changeDirection === 'up' ? '#34d399' : metric.changeDirection === 'down' ? '#fb7185' : '#94a3b8',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {metric.change}
              </div>
            </div>
          )}
        </div>

        {/* Detailed Underwriting Notes */}
        {metric.underwritingNotes && (
          <div style={{ marginBottom: '1.25rem' }}>
            <h4
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#38bdf8',
                marginBottom: '0.4rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Feasibility & Underwriting Impact
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#cbd5e1', lineHeight: '1.55' }}>
              {metric.underwritingNotes}
            </p>
          </div>
        )}

        {/* Historical Context */}
        {metric.historicalContext && (
          <div style={{ marginBottom: '1.25rem' }}>
            <h4
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#94a3b8',
                marginBottom: '0.4rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              Macroeconomic & Regional Context
            </h4>
            <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.5' }}>
              {metric.historicalContext}
            </p>
          </div>
        )}

        {/* Audit Citation & Lineage */}
        <div
          style={{
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#64748b',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            <span>Data Lineage: </span>
            <span style={{ color: '#cbd5e1', fontWeight: 600 }}>{metric.source}</span>
          </div>
          <div>
            <span>Status: </span>
            <span style={{ color: '#38bdf8' }}>{metric.lastUpdated}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
