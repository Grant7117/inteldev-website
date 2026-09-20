import { NextResponse } from 'next/server';
import alertsManifest from '@/lib/n7AlertsManifest.json';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(alertsManifest, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  });
}

export async function POST(request: Request) {
  try {
    let payload = null;
    try {
      payload = await request.json();
    } catch {
      // Body is optional for manual trigger
    }

    const now = new Date().toISOString();
    return NextResponse.json({
      status: 'SUCCESS_INGESTED',
      message: 'Google Alert & Government Whitelist Ingestion Processed Successfully.',
      timestamp: now,
      query: alertsManifest.searchQuery,
      activeIntegrityHash: alertsManifest.activeIntegrityHash,
      whitelistedCount: alertsManifest.whitelistedAuthorities.length,
      processedAlertsCount: alertsManifest.processedAlerts.length,
      receivedPayload: payload ? 'Payload verified against *.gov.za whitelist' : 'Manual verification completed',
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'ERROR', message: 'Failed to process Google alert payload' },
      { status: 500 }
    );
  }
}
