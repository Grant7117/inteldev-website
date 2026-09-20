export interface N7ProjectKPI {
  label: string;
  value: string;
  subtext: string;
  badge?: string;
  source: string;
}

export interface IntersectionClosure {
  name: string;
  routeCode: string;
  status: string;
  trafficRedirectionNotes: string;
}

export interface BridgeStructuralSpec {
  name: string;
  totalLength: string;
  centralSpan: string;
  spanEfficiency: string;
  structuralType: string;
  environmentalRationale: string;
}

export interface WeighbridgeAlternative {
  name: string;
  location: string;
  shiftFromBaseline: string;
  spatialOrientation: string;
  environmentalStatus: string;
  weighingTech: string;
}

export interface LandReleaseTrigger {
  phase: string;
  timeHorizon: string;
  requiredTransportInfrastructure: string[];
  unlockedLandArea: string;
  targetPrecincts: string[];
  underwritingImplications: string;
}

export const N7_PROJECT_KPIS: N7ProjectKPI[] = [
  {
    label: 'Capital Budget',
    value: 'R780 Million',
    subtext: '36-Month execution (Commenced March 2024, completion Q1 2027)',
    badge: 'DOI CAPITAL WORKS',
    source: 'Western Cape Department of Infrastructure',
  },
  {
    label: 'Freeway Upgrade Length',
    value: '10 Kilometres',
    subtext: 'Final non-compliant N7 section between Goodwood and Malmesbury',
    badge: 'FREEWAY STANDARD',
    source: 'SANRAL / Western Cape DOI',
  },
  {
    label: 'Diep River Central Span',
    value: '64 Metres (156m Total)',
    subtext: '2nd longest single concrete span in the Western Cape (zero instream piers)',
    badge: 'STRUCTURAL FEAT',
    source: 'Hatch / DOI Bridge Package',
  },
  {
    label: 'Strategic Land Unlocked',
    value: '1,167 Hectares',
    subtext: '725 ha Industrial (incl. 333 ha Frankendale) + 442 ha Residential',
    badge: 'ECONOMIC TRIGGER',
    source: 'City of Cape Town DSDF / TEM',
  },
];

export const INTERSECTION_CLOSURES: IntersectionClosure[] = [
  {
    name: 'Vissershok Road',
    routeCode: 'OP111',
    status: 'Closed & De-proclaimed',
    trafficRedirectionNotes: 'Redirected via Contermanskloof Road to access N7 at the Malibongwe Interchange until MR244 completion.',
  },
  {
    name: 'Van Schoorsdrift Road',
    routeCode: 'DR1111 / Old Malmesbury Rd',
    status: 'Closed (Active Temporary Bypass in place)',
    trafficRedirectionNotes: 'Will connect directly into the new grade-separated Van Schoorsdrift diamond interchange upon commissioning.',
  },
  {
    name: 'Klein Vissershok Road',
    routeCode: 'OP89',
    status: 'Scheduled Closure (Post-October 2026)',
    trafficRedirectionNotes: 'Direct access de-linked from N7 mainline; routed via local agricultural accommodation overpass.',
  },
  {
    name: 'Frankdale Road',
    routeCode: 'OP47',
    status: 'Scheduled Closure (Post-October 2026)',
    trafficRedirectionNotes: 'Direct heavy truck access de-linked; future industrial access routed via the full diamond Van Schoorsdrift interchange.',
  },
  {
    name: 'Morningstar Road',
    routeCode: 'MR215',
    status: 'Scheduled Closure (Post-October 2026)',
    trafficRedirectionNotes: 'Traffic routed to relocated weighbridge and grade-separated interchange loops.',
  },
];

export const DIEP_RIVER_BRIDGE_SPECS: BridgeStructuralSpec = {
  name: 'Diep River Basin Flagship Bridge (MR244 Alignment)',
  totalLength: '156 m (L_total)',
  centralSpan: '64 m (S_central)',
  spanEfficiency: '41.03% (Span-to-Length Ratio = 64m / 156m)',
  structuralType: 'Continuous Post-Tensioned Single Concrete Span',
  environmentalRationale:
    'Eliminates all instream piers within the active Diep River channel, completely protecting sensitive wetlands, fish migration corridors, and 1:100-year flood hydrology.',
};

export const WEIGHBRIDGE_COMPARISON: WeighbridgeAlternative[] = [
  {
    name: 'Alternative 5 (Fatally Flawed)',
    location: 'Farm 153 Vissershok Outspan & Morning Star 25/141',
    shiftFromBaseline: '+600m North of existing site',
    spatialOrientation: 'Intersects N7 alignment directly',
    environmentalStatus: 'Rejected (Formal CoCT Objection — bisected east-west biodiversity corridor)',
    weighingTech: 'Static weighbridge & impoundment yard',
  },
  {
    name: 'Alternatives 6 & 7 (Preferred Engineering Redesign)',
    location: 'Morningstar RE/141 (Private Parcel Exclusively)',
    shiftFromBaseline: '+2,000m (2 km) North of existing facility',
    spatialOrientation: 'Alt 6: West of N7 | Alt 7: East of N7',
    environmentalStatus: 'Approved & Authorized (DEADP 16/3/3/1/A1/41/3042/25 — clears eco-corridor)',
    weighingTech: 'Dual-Direction High-Speed Weigh-in-Motion (WIM) + Static Compliance Scale',
  },
];

export const KOEBERG_LAND_TRIGGERS: LandReleaseTrigger[] = [
  {
    phase: 'Short-Term Phase (0–5 Years)',
    timeHorizon: '2024 – 2029',
    requiredTransportInfrastructure: [
      'Initial Tryall Road extension',
      'R27 dualling between Tryall Road and Berkshire Boulevard',
      'Koeberg Road extension toward Berkshire Boulevard',
      'Construction of Berkshire Boulevard toward the N7',
    ],
    unlockedLandArea: '91 Hectares Residential',
    targetPrecincts: ['Sandown Residential Infill', 'Southern Portions of Erf 1117 (Big Bay / Sunningdale)'],
    underwritingImplications:
      'Required by the Koeberg Traffic Evacuation Model (TEM) within the 16km Urgent Protection Planning Zone (UPZ) to maintain statutory evacuation clearance times.',
  },
  {
    phase: 'Medium-Term Phase (5–10 Years)',
    timeHorizon: '2027 – 2034',
    requiredTransportInfrastructure: [
      'Complete extension of Berkshire Boulevard (MR244) to N7 Van Schoorsdrift Interchange',
      'Extension of M12 (Malibongwe Drive) to Berkshire Boulevard',
      'Completion of M12 from Sandown Road to Enterprise Way',
      'Construction of East-West Arterial (future R300 corridor extension)',
    ],
    unlockedLandArea: '725 Hectares Industrial (incl. 333 ha Frankendale) + 351 Hectares Residential',
    targetPrecincts: ['Frankendale Risk-Industrial Node', 'Rivergate North Industrial Park', 'Sandown North Expansion'],
    underwritingImplications:
      'Full commercial and heavy industrial commissioning tied directly to the final opening of the Van Schoorsdrift diamond interchange and MR244 bridge package in early 2027.',
  },
];

export const TRANSIT_OPTIMIZATIONS = [
  {
    route: 'MyCiTi 214a & 214e',
    change: 'Bi-directional realignment along Dartford Drive & Walworth Road in Rivergate / Parklands.',
    impact: 'Reduces transit times, adds 5 partner stops (Walworth, Southwark, Lewisham, Station Rd).',
  },
  {
    route: 'MyCiTi 216',
    change: 'Direct Parklands North link via Cormorant Avenue to Big Bay and Table Bay Mall.',
    impact: 'Reactivates Seaside Village & Cormorant stops; decommissions Humewood & Devonshire.',
  },
  {
    route: 'MyCiTi T01x (Express)',
    change: 'Potsdam and Circle East stations integrated into the express trunk.',
    impact: 'Accelerates morning/evening peak commuter flows between Rivergate/Dunoon and Cape Town CBD.',
  },
  {
    route: 'Rivergate Passenger Rail Station DFA',
    change: 'Multi-modal commuter rail station and regional civic center straddling the Atlantis rail corridor.',
    impact: 'Enforces high-density TOD within 400m radius, shared park-and-ride, and airspace development.',
  },
];
