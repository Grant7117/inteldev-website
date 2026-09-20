export type TickerCategory = 
  | 'all'
  | 'forex'
  | 'macro'
  | 'construction'
  | 'property'
  | 'municipal'
  | 'energy';

export type ChangeDirection = 'up' | 'down' | 'neutral';

export interface MarketMetric {
  id: string;
  category: TickerCategory;
  symbol: string;
  name: string;
  value: string | number;
  displayValue: string;
  unit?: string;
  change?: string;
  changeDirection: ChangeDirection;
  changePeriod?: string;
  badge?: string;
  source: string;
  sourceUrl?: string;
  lastUpdated: string;
  underwritingNotes?: string;
  historicalContext?: string;
  isLive?: boolean;
}

export interface MarketSummaryResponse {
  timestamp: string;
  status: 'live' | 'cached' | 'fallback';
  metrics: MarketMetric[];
}
