export interface CorridorMetric {
  label: string;
  value: string;
  description: string;
  badge?: string;
  source: string;
}

export interface ZoningEnvelope {
  zoneCode: string;
  zoneName: string;
  primaryUses: string[];
  floorFactor: string;
  maxHeight: string;
  coverage: string;
  parkingRatio: string;
  streetSetback: string;
  sideSetback: string;
  underwritingAdvice: string;
}

export interface StatutoryFramework {
  title: string;
  approvalDate: string;
  councilResolution: string;
  authority: string;
  strategicObjective: string;
  keyDirectives: string[];
  documentUrl?: string;
}

export const BLAAUWBERG_CORRIDOR_CONFIG = {
  gemUrl: 'https://gemini.google.com/gem/1Uww4ACunKkKf2fBbuywwUSfWhKvVo8EI?usp=sharing',
  gemTitle: 'Blaauwberg Road Corridor GEM (City of Cape Town Grounded)',
  gemDescription:
    'Dedicated, zero-hallucination spatial intelligence model strictly anchored in statutory City of Cape Town datasets, LSDF resolutions, zoning schemes, and municipal engineering guidelines.',
  boundarySummary:
    'Encompasses the primary arterial spine of Blaauwberg Road (M14) spanning from Marine Drive (R27/Coastline) through Table View, Sunridge, and West Riding to Koeberg Road / Potsdam interchange.',
};

export const CORRIDOR_KEY_METRICS: CorridorMetric[] = [
  {
    label: 'Statutory LSDF Status',
    value: 'Approved (April 2025)',
    description: 'Formally adopted by City of Cape Town Council (Item C 26/04/25) under the Municipal Systems Act & MSDF.',
    badge: 'COUNCIL ADOPTED',
    source: 'City of Cape Town Council Minutes',
  },
  {
    label: 'Potsdam WWTW Upgrade',
    value: 'R5.4 Billion (100 Mℓ/d)',
    description: 'Major capacity expansion underway. Scheduled commissioning by 2027 to unlock unconstrained regional development rights.',
    badge: 'BULK UTILITY',
    source: 'Water & Sanitation Directorate',
  },
  {
    label: 'TOD Transit Spine',
    value: 'MyCiTi Trunk (T01 / T02)',
    description: 'Dedicated median bus lanes with high-frequency feeder routes connecting Table View Station, Bayside, and Atlantis to CBD.',
    badge: 'TRANSIT CORRIDOR',
    source: 'Urban Mobility Directorate',
  },
  {
    label: 'PT1 / PT2 Parking Zones',
    value: 'Reduced Parking Ratio',
    description: 'Statutory parking reduction applicable within 500m of MyCiTi stations to encourage high-density, pedestrian-centric development.',
    badge: 'OVERLAY ZONE',
    source: 'City of Cape Town DMS',
  },
];

export const STATUTORY_FRAMEWORKS: StatutoryFramework[] = [
  {
    title: 'Blaauwberg Road Corridor Local Spatial Development Framework (LSDF)',
    approvalDate: 'April 2025',
    councilResolution: 'Council Resolution C 26/04/25',
    authority: 'Spatial Planning and Environment Directorate, City of Cape Town',
    strategicObjective:
      'Transform Blaauwberg Road from an automobile-dominated suburban arterial into a resilient, high-density, mixed-use transit corridor with active ground-floor edges and diversified housing typologies.',
    keyDirectives: [
      'Encourage mixed-use development with mandatory active retail/commercial ground floors along Blaauwberg Road.',
      'Promote medium-to-high density residential intensification (GR3 to GR5) within walking distance of MyCiTi stations.',
      'Implement strict urban design guidelines: continuous building facades, zero-parking frontages, and dedicated non-motorized transport (NMT) lanes.',
      'Enforce infrastructure phasing linked to the Potsdam WWTW capacity milestone.',
    ],
  },
  {
    title: 'City of Cape Town Municipal Spatial Development Framework (MSDF)',
    approvalDate: '2023 Review / Active Framework',
    councilResolution: 'Council Resolution C 21/04/23',
    authority: 'City of Cape Town Spatial Planning',
    strategicObjective:
      'Direct public capital expenditure and private development into the Urban Inner Core (UIC), prioritizing intensification along major transit routes.',
    keyDirectives: [
      'Designate Blaauwberg Road as a Primary Spatial Intensification Corridor.',
      'Support inclusionary housing contributions and diverse tenure models.',
      'Prioritize municipal bulk utility upgrades along transit-oriented development (TOD) corridors.',
    ],
  },
  {
    title: 'Blaauwberg District Spatial Development Framework (DSDF)',
    approvalDate: '2023 (Sub-district Plan)',
    councilResolution: 'Council Resolution C 18/02/23',
    authority: 'District Planning Office (Blaauwberg)',
    strategicObjective:
      'Manage urbanization across Table View, Bloubergstrand, Sunningdale, and Parklands, balancing environmental sensitivity with economic growth.',
    keyDirectives: [
      'Protect Rietvlei Nature Reserve buffer zones while maximizing corridor yield.',
      'Facilitate commercial node expansion at Bayside Mall and Table View Junction.',
      'Coordinate stormwater retention requirements for high-density site redevelopments.',
    ],
  },
];

export const POTSDAM_INFRASTRUCTURE_DATA = {
  currentStatus: 'Active Construction & Modernization',
  targetCompletion: '2027',
  budget: 'R5.4 Billion Capital Investment',
  targetCapacity: '100 Megalitres / Day (Mℓ/d)',
  interimProtocol: 'Standard Operating Procedure (SOP) for Blaauwberg Development Approvals',
  sopGuidelines: [
    'Development applications resulting in immediate occupation prior to 2027 must comply with the City Environmental & Water Sanitation SOP.',
    'Where municipal bulk capacity is constrained, developers may be required to install approved Temporary On-Site Package Treatment Plants.',
    'Pre-approval phasing agreements allow civil works and superstructures to proceed in parallel with municipal upgrade milestones.',
    'Section 137 clearances and occupancy certificates are tied to demonstrated effluent compliance and treatment capacity allocation.',
  ],
};

export const ZONING_ENVELOPES: ZoningEnvelope[] = [
  {
    zoneCode: 'GR3',
    zoneName: 'General Residential Subzoning 3',
    primaryUses: ['Flats / Apartments', 'Townhouses', 'Home Occupation'],
    floorFactor: '1.0',
    maxHeight: '12.0m (to top of roof)',
    coverage: '40%',
    parkingRatio: '1.25 bays / unit (Standard) or 0.75 bays / unit (PT1 Zone)',
    streetSetback: '4.5m (Can be relaxed to 0m–1.5m along active corridor frontages via consent)',
    sideSetback: '4.5m or 0.6H (where H is building height)',
    underwritingAdvice: 'Ideal for 3–4 storey sectional title walk-ups with perimeter parking and high site efficiency.',
  },
  {
    zoneCode: 'GR4',
    zoneName: 'General Residential Subzoning 4',
    primaryUses: ['Higher Density Flats', 'Residential Hotel', 'Boarding House'],
    floorFactor: '1.5',
    maxHeight: '18.0m (approx. 5–6 storeys)',
    coverage: '40%',
    parkingRatio: '1.0 bay / unit (PT1) or 0.5 bay / unit (PT2 Zone)',
    streetSetback: '4.5m',
    sideSetback: '4.5m',
    underwritingAdvice: 'Unlocks maximum residential yield on consolidated corridor erven adjacent to MyCiTi feeder nodes.',
  },
  {
    zoneCode: 'GB1',
    zoneName: 'General Business Subzoning 1',
    primaryUses: ['Business Premises', 'Retail', 'Offices', 'Residential Flats above Ground Floor'],
    floorFactor: '1.5',
    maxHeight: '15.0m',
    coverage: '100%',
    parkingRatio: '2.0 bays / 100m² GLA (Reduced in PT1/PT2)',
    streetSetback: '0.0m (Zero building line encouraged for active retail edges)',
    sideSetback: '0.0m (subject to building regulations and boundary wall fire ratings)',
    underwritingAdvice: 'Primary commercial zoning along Blaauwberg Road; supports ground floor commercial with residential apartments above.',
  },
  {
    zoneCode: 'MU2',
    zoneName: 'Mixed Use Subzoning 2',
    primaryUses: ['Mixed Commercial & High-Density Residential', 'Medical Suites', 'Offices'],
    floorFactor: '2.0',
    maxHeight: '25.0m (up to 8 storeys where supported by LSDF)',
    coverage: '75%',
    parkingRatio: '1.5 bays / 100m² Commercial | 0.75 bay / Resi Unit (PT1)',
    streetSetback: '0.0m to 1.5m',
    sideSetback: '0.0m for first 3 storeys, step-back for upper levels',
    underwritingAdvice: 'High-density mixed-use development node suited for core intersections (e.g. Blaauwberg / Koeberg, Blaauwberg / West Coast Rd).',
  },
];
