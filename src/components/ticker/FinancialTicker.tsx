'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { MarketMetric, TickerCategory, MarketSummaryResponse } from '@/types/ticker';
import { INSTITUTIONAL_MARKET_METRICS } from '@/lib/marketData';
import { TickerCard } from './TickerCard';
import { MetricDetailModal } from './MetricDetailModal';

export const FinancialTicker: React.FC = () => {
  const [metrics, setMetrics] = useState<MarketMetric[]>(INSTITUTIONAL_MARKET_METRICS);
  const [activeCategory, setActiveCategory] = useState<TickerCategory>('all');
  const [selectedMetric, setSelectedMetric] = useState<MarketMetric | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<string>('Live');
  const [isLiveFeed, setIsLiveFeed] = useState(true);

  // Fetch live market data
  const fetchMarketData = useCallback(async () => {
    try {
      const res = await fetch('/api/market-data');
      if (res.ok) {
        const data: MarketSummaryResponse = await res.json();
        if (data.metrics && data.metrics.length > 0) {
          setMetrics(data.metrics);
          setIsLiveFeed(data.status === 'live');
          setLastRefreshed(new Date().toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }
      }
    } catch (e) {
      console.warn('Using institutional baseline fallback', e);
    }
  }, []);

  useEffect(() => {
    fetchMarketData();
    // Heartbeat revalidation every 60s
    const interval = setInterval(fetchMarketData, 60000);
    return () => clearInterval(interval);
  }, [fetchMarketData]);

  // Filter metrics according to active category
  const filteredMetrics = useMemo(() => {
    if (activeCategory === 'all') return metrics;
    return metrics.filter((m) => m.category === activeCategory);
  }, [metrics, activeCategory]);

  const categories: { key: TickerCategory; label: string }[] = [
    { key: 'all', label: 'All Indicators' },
    { key: 'forex', label: 'Forex & Commodities' },
    { key: 'macro', label: 'SARB & Macro' },
    { key: 'construction', label: 'Construction & Cost' },
    { key: 'property', label: 'WC Property' },
    { key: 'municipal', label: 'Top Municipalities' },
    { key: 'energy', label: 'Eskom & Grid' },
  ];

  return (
    <div
      className="ticker-wrapper"
      style={{
        width: '100%',
        position: 'relative',
        zIndex: 50,
        backgroundColor: 'rgba(5, 9, 18, 0.95)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.18)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Top Controls & Category Navigation */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0.45rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.6rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
        }}
      >
        {/* Live Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.2rem 0.6rem',
              borderRadius: '9999px',
              backgroundColor: isLiveFeed ? 'rgba(16, 185, 129, 0.12)' : 'rgba(56, 189, 248, 0.12)',
              border: isLiveFeed ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(56, 189, 248, 0.3)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: isLiveFeed ? '#10b981' : '#38bdf8',
                boxShadow: isLiveFeed ? '0 0 8px #10b981' : '0 0 8px #38bdf8',
                display: 'inline-block',
                animation: 'pulseGlow 2s infinite ease-in-out',
              }}
            />
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isLiveFeed ? '#34d399' : '#38bdf8',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {isLiveFeed ? 'LIVE MARKET FEED' : 'AUDITED BENCHMARKS'}
            </span>
          </div>

          <span
            style={{
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              display: 'none',
            }}
            className="md-show"
          >
            Updated: {lastRefreshed}
          </span>
        </div>

        {/* Category Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            overflowX: 'auto',
            paddingBottom: '0.1rem',
            scrollbarWidth: 'none',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  fontSize: '0.72rem',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.03em',
                  padding: '0.22rem 0.65rem',
                  borderRadius: '6px',
                  backgroundColor: isActive ? 'rgba(56, 189, 248, 0.18)' : 'transparent',
                  color: isActive ? '#38bdf8' : '#94a3b8',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Action button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
            style={{
              fontSize: '0.68rem',
              color: isPaused ? '#f43f5e' : '#94a3b8',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '6px',
              padding: '0.2rem 0.5rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {isPaused ? '▶ RESUME' : '⏸ PAUSE'}
          </button>
        </div>
      </div>

      {/* Marquee Scrolling Track */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          padding: '0.55rem 0',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right gradient edge fades */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '60px',
            background: 'linear-gradient(to right, rgba(5, 9, 18, 1), transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '60px',
            background: 'linear-gradient(to left, rgba(5, 9, 18, 1), transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        {/* Endless Marquee Loop: duplicated for continuous seamless scroll */}
        <div
          className={`ticker-track ${isPaused ? 'ticker-paused' : ''}`}
          style={{
            display: 'flex',
            flexShrink: 0,
            alignItems: 'center',
          }}
        >
          {filteredMetrics.map((metric) => (
            <TickerCard
              key={`ticker-1-${metric.id}`}
              metric={metric}
              onClick={(m) => setSelectedMetric(m)}
            />
          ))}
        </div>

        <div
          className={`ticker-track ${isPaused ? 'ticker-paused' : ''}`}
          style={{
            display: 'flex',
            flexShrink: 0,
            alignItems: 'center',
          }}
          aria-hidden="true"
        >
          {filteredMetrics.map((metric) => (
            <TickerCard
              key={`ticker-2-${metric.id}`}
              metric={metric}
              onClick={(m) => setSelectedMetric(m)}
            />
          ))}
        </div>
      </div>

      {/* Metric Detail Modal */}
      <MetricDetailModal
        metric={selectedMetric}
        onClose={() => setSelectedMetric(null)}
      />
    </div>
  );
};
