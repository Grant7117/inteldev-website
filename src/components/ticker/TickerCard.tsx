'use client';

import React from 'react';
import { MarketMetric } from '@/types/ticker';

interface TickerCardProps {
  metric: MarketMetric;
  onClick: (metric: MarketMetric) => void;
}

export const TickerCard: React.FC<TickerCardProps> = ({ metric, onClick }) => {
  const getChangeColor = () => {
    if (metric.changeDirection === 'up') return '#10b981'; // Green
    if (metric.changeDirection === 'down') return '#f43f5e'; // Red
    return '#94a3b8'; // Neutral Slate
  };

  const getChangeIcon = () => {
    if (metric.changeDirection === 'up') return '▲';
    if (metric.changeDirection === 'down') return '▼';
    return '●';
  };

  return (
    <button
      type="button"
      onClick={() => onClick(metric)}
      className="ticker-card-btn group"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.85rem',
        padding: '0.45rem 1.15rem',
        marginRight: '1rem',
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.09)',
        borderRadius: '12px',
        backdropFilter: 'blur(12px)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        textAlign: 'left',
      }}
    >
      {/* Category Indicator Tag */}
      <span
        style={{
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '0.2rem 0.45rem',
          borderRadius: '4px',
          backgroundColor: 'rgba(56, 189, 248, 0.12)',
          color: '#38bdf8',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {metric.badge || metric.category}
      </span>

      {/* Symbol & Name */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.05rem' }}>
        <span
          style={{
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#f8fafc',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.02em',
          }}
        >
          {metric.symbol}
        </span>
        <span
          style={{
            fontSize: '0.68rem',
            color: '#64748b',
            maxWidth: '140px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {metric.name}
        </span>
      </div>

      {/* Value */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.05rem' }}>
        <span
          style={{
            fontSize: '0.9rem',
            fontWeight: 800,
            color: '#ffffff',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {metric.displayValue}
        </span>
        {metric.change && (
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              color: getChangeColor(),
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span>{getChangeIcon()}</span>
            <span>{metric.change}</span>
          </span>
        )}
      </div>
    </button>
  );
};
