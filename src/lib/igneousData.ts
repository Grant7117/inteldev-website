export interface PropertyProject {
  id: string;
  name: string;
  address: string;
  suburb: string;
  status: 'LAUNCHING_SOON' | 'COMPLETED' | 'ESTABLISHED';
  statusBadge: string;
  timeline?: string;
  description: string;
  typology: string;
  units?: string;
  highlights: string[];
}

export interface LandAcquisitionCriteria {
  targetErfSizes: string[];
  targetLocations: string[];
  preferredZonings: string[];
  mandateType: string;
  closingSpeed: string;
  contactEmail: string;
  contactWebsite: string;
}

export const IGNEOUS_DEVELOPER_CONFIG = {
  name: 'Igneous Property Development',
  websiteUrl: 'https://www.igneousproperty.co.za',
  operatingHub: 'Table View & Blouberg, Cape Town',
  ethos:
    'Pioneering premium, high-yield sectional title developments with architectural distinction, sustainable finishes, and transit-aligned spatial efficiency in the Western Cape.',
};

export const IGNEOUS_PROJECTS: PropertyProject[] = [
  {
    id: 'cornerstone-on-north',
    name: 'Cornerstone-on-North',
    address: '17 North Road',
    suburb: 'Table View, Cape Town',
    status: 'LAUNCHING_SOON',
    statusBadge: 'READY FOR LAUNCH IN 1 MONTH',
    timeline: 'Launch Target: October 2026',
    description:
      'Premier upcoming sectional title residential development located at 17 North Road, meticulously engineered for high capital growth, modern lifestyle aesthetics, and superior rental yields.',
    typology: 'High-End Sectional Title Residential Apartments',
    units: 'Bespoke Luxury Units',
    highlights: [
      'Prime Table View location within walking distance of MyCiTi transport corridors',
      'Contemporary architecture with premium high-spec finishes and secure perimeter access',
      'High-yield investment profile optimized for both owner-occupiers and institutional buy-to-let portfolios',
      'Launching in 1 month — pre-launch registrations opening shortly',
    ],
  },
  {
    id: 'cornerstone-on-arum',
    name: 'Cornerstone-on-Arum',
    address: '154 Arum Road',
    suburb: 'Table View, Cape Town',
    status: 'ESTABLISHED',
    statusBadge: 'COMPLETED & ESTABLISHED',
    description:
      'The flagship Cornerstone-on-Arum development at 154 Arum Road stands as a benchmark for contemporary sectional title living in Table View, boasting exceptional build quality and strong asset appreciation.',
    typology: 'Sectional Title Residential Complex',
    highlights: [
      'Established high-demand residential complex with 100% occupancy history',
      'Architectural benchmark in the Table View residential precinct',
      'Proven capital growth and steady rental escalation track record',
    ],
  },
  {
    id: 'north-road-portfolio',
    name: 'North Road Residential Enclave',
    address: '38, 40 & 42 North Road',
    suburb: 'Table View, Cape Town',
    status: 'COMPLETED',
    statusBadge: 'DELIVERED PORTFOLIO',
    description:
      'Contiguous multi-erf residential development cluster at 38, 40, and 42 North Road, demonstrating Igneous Property Development’s capability in site consolidation and precinct revitalization.',
    typology: 'Multi-Erf Residential Development',
    highlights: [
      'Delivered across multiple adjacent sites along the North Road growth axis',
      'Exemplifies high-density urban infill and premium craftsmanship',
      'Direct connectivity to Blaauwberg Road and Table View retail hubs',
    ],
  },
];

export const LAND_ACQUISITION_CRITERIA: LandAcquisitionCriteria = {
  targetErfSizes: ['1,004 m²', '1,007 m²', '1,000 m² – 1,050 m² Standard Erven'],
  targetLocations: [
    'Blaauwberg Road Corridor (Table View)',
    'North Road & Arum Road Precincts',
    'Bloubergstrand & West Beach Buffer Nodes',
    'Sandown & Sunningdale Growth Corridors',
  ],
  preferredZonings: ['General Residential (GR3 / GR4 / GR5)', 'Single Residential (SR1 with Densification / Rezoning Potential)', 'General Business (GB1 / GB4)', 'Mixed Use (MU2)'],
  mandateType: 'Direct Cash Acquisition / Joint Venture Partnership',
  closingSpeed: 'Rapid Institutional Due Diligence & Guaranteed Settlement',
  contactEmail: 'acquisitions@igneousproperty.co.za',
  contactWebsite: 'https://www.igneousproperty.co.za',
};
