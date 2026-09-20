import { NextResponse } from 'next/server';
import { INSTITUTIONAL_MARKET_METRICS } from '@/lib/marketData';
import { MarketMetric, MarketSummaryResponse } from '@/types/ticker';

export const revalidate = 60; // 60 seconds stale-while-revalidate

export async function GET() {
  const metrics: MarketMetric[] = JSON.parse(JSON.stringify(INSTITUTIONAL_MARKET_METRICS));
  let status: 'live' | 'cached' | 'fallback' = 'cached';

  try {
    // Attempt to fetch live forex rates with a strict timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const fxRes = await fetch('https://open.er-api.com/v6/latest/USD', {
      signal: controller.signal,
      next: { revalidate: 60 },
    });
    clearTimeout(timeoutId);

    if (fxRes.ok) {
      const fxData = await fxRes.json();
      const zarRate = fxData?.rates?.ZAR;
      if (typeof zarRate === 'number' && zarRate > 0) {
        status = 'live';
        const usdZarMetric = metrics.find((m) => m.id === 'usd-zar');
        if (usdZarMetric) {
          usdZarMetric.value = Number(zarRate.toFixed(2));
          usdZarMetric.displayValue = `R ${zarRate.toFixed(2)}`;
          usdZarMetric.lastUpdated = 'Live Interbank Spot';
        }

        const zarUsdMetric = metrics.find((m) => m.id === 'zar-usd');
        if (zarUsdMetric) {
          const inv = 1 / zarRate;
          zarUsdMetric.value = Number(inv.toFixed(4));
          zarUsdMetric.displayValue = `$ ${inv.toFixed(4)}`;
          zarUsdMetric.lastUpdated = 'Live Interbank Spot';
        }

        // Update Domestic Gold ZAR/oz based on spot gold and live USD/ZAR
        const goldUsdMetric = metrics.find((m) => m.id === 'gold-spot');
        const goldZarOzMetric = metrics.find((m) => m.id === 'gold-zar-oz');
        if (goldUsdMetric && goldZarOzMetric && typeof goldUsdMetric.value === 'number') {
          const zarPerOz = goldUsdMetric.value * zarRate;
          goldZarOzMetric.value = Math.round(zarPerOz);
          goldZarOzMetric.displayValue = `R ${Math.round(zarPerOz).toLocaleString()}`;
          goldZarOzMetric.lastUpdated = 'Live Converted Spot';
        }
      }
    }
  } catch (err) {
    // Graceful fallback to verified institutional baseline
    status = 'fallback';
  }

  const responsePayload: MarketSummaryResponse = {
    timestamp: new Date().toISOString(),
    status,
    metrics,
  };

  return NextResponse.json(responsePayload, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
    },
  });
}
