export interface PropertyProject {
  id: string;
  name: string;
  address: string;
  suburb: string;
  status: 'LAUNCHING_SOON' | 'COMPLETED' | 'ESTABLISHED';
  statusBadge: string;
  timeline?: string;
  image?: string;
  projectUrl?: string;
  description: string;
  typology: string;
  units?: string;
  highlights: string[];
}

export interface LandAcquisitionCriteria {
  targetErfSizes: string[];
  targetLocations: string[];
  contactWebsite: string;
}

export const IGNEOUS_DEVELOPER_CONFIG = {
  name: 'Igneous Property Development',
  websiteUrl: 'https://www.igneousproperty.co.za',
  operatingHub: 'Table View & Blouberg, Cape Town',
};

export const IGNEOUS_PROJECTS: PropertyProject[] = [
  {
    id: 'cornerstone-on-north',
    name: 'Cornerstone-on-North',
    address: '17 North Road',
    suburb: 'Table View, Cape Town',
    status: 'LAUNCHING_SOON',
    statusBadge: 'READY FOR LAUNCH IN 1 MONTH',
    image: '/cornerstone-on-north.jpg',
    projectUrl: 'https://www.igneousproperty.co.za',
    description:
      'Upcoming sectional title development located at 17 North Road, Table View. Scheduled for official launch in 1 month.',
    typology: 'Sectional Title Residential Development',
    highlights: [
      'Prime Table View location on North Road',
      'Contemporary architecture and high-spec finishes',
      'Launching in 1 month',
    ],
  },
  {
    id: 'cornerstone-on-arum',
    name: 'Cornerstone-on-Arum',
    address: '154 Arum Road',
    suburb: 'Table View, Cape Town',
    status: 'COMPLETED',
    statusBadge: 'COMPLETED',
    image: '/cornerstone-on-arum.jpg',
    projectUrl: 'https://www.cornerstoneonarum.co.za',
    description:
      'Completed residential development located at 154 Arum Road, Table View.',
    typology: 'Sectional Title Residential Development',
    highlights: [
      'Established sectional title development',
      'Prime Table View location on Arum Road',
    ],
  },
  {
    id: 'north-road-portfolio',
    name: '38, 40 & 42 North Road',
    address: '38, 40 & 42 North Road',
    suburb: 'Table View, Cape Town',
    status: 'COMPLETED',
    statusBadge: 'COMPLETED',
    projectUrl: 'https://www.igneousproperty.co.za',
    description:
      'Completed property development footprint across 38, 40, and 42 North Road in Table View.',
    typology: 'Residential Property Development',
    highlights: [
      'Developed across 38, 40, and 42 North Road',
      'Table View residential precinct',
    ],
  },
];

export const LAND_ACQUISITION_CRITERIA: LandAcquisitionCriteria = {
  targetErfSizes: ['1,004 m²', '1,007 m²'],
  targetLocations: [
    'Blaauwberg Road Corridor',
    'North Road & Arum Road Precincts',
    'Table View & Blouberg',
  ],
  contactWebsite: 'https://www.igneousproperty.co.za',
};
