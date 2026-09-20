import React from 'react';

export const JsonLdSchema: React.FC = () => {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Organization Schema
      {
        '@type': 'Organization',
        '@id': 'https://www.inteldev.co.za/#organization',
        name: 'INTELDEV Property Intelligence Engine',
        alternateName: 'IntelDev',
        url: 'https://www.inteldev.co.za',
        logo: 'https://www.inteldev.co.za/inteldev-logo.jpg',
        description:
          'Institutional property feasibility, statutory spatial intelligence, and deterministic underwriting engine for Cape Town and the Western Cape.',
        areaServed: [
          {
            '@type': 'AdministrativeArea',
            name: 'Western Cape',
          },
          {
            '@type': 'City',
            name: 'Cape Town',
          },
          {
            '@type': 'Place',
            name: 'Blouberg',
          },
          {
            '@type': 'Place',
            name: 'Table View',
          },
          {
            '@type': 'Place',
            name: 'Sandown',
          },
          {
            '@type': 'Place',
            name: 'Rivergate',
          },
          {
            '@type': 'Place',
            name: 'N7 Corridor',
          },
        ],
        knowsAbout: [
          'Cape Town Municipal Spatial Development Framework (MSDF)',
          'Blaauwberg Road Corridor Local Spatial Development Framework (LSDF)',
          'Potsdam Wastewater Treatment Works (WWTW) Upgrades',
          'N7 Freeway Upgrade and Van Schoorsdrift Interchange',
          'Diep River Bridge Structural Engineering',
          'SACPVP Property Valuation and Feasibility Underwriting',
          'Koeberg Nuclear Traffic Evacuation Model (TEM)',
          'General Residential (GR3, GR4) and General Business (GB1) Zoning Schemes',
        ],
      },

      // 2. WebSite Schema
      {
        '@type': 'WebSite',
        '@id': 'https://www.inteldev.co.za/#website',
        url: 'https://www.inteldev.co.za',
        name: 'INTELDEV - Cape Town Property & Infrastructure Intelligence',
        publisher: {
          '@id': 'https://www.inteldev.co.za/#organization',
        },
        inLanguage: 'en-ZA',
      },

      // 3. Datasets for LLM Grounding & Citations
      {
        '@type': 'Dataset',
        '@id': 'https://www.inteldev.co.za/#dataset-blaauwberg',
        name: 'City of Cape Town Blaauwberg Road Corridor Statutory Dataset',
        description:
          'Authoritative spatial development framework, zoning envelopes, and Potsdam WWTW infrastructure capacities for the Blaauwberg Road Corridor (Approved April 2025, Council C 26/04/25).',
        creator: {
          '@id': 'https://www.inteldev.co.za/#organization',
        },
        spatialCoverage: {
          '@type': 'Place',
          name: 'Blaauwberg Road Corridor, Table View, Cape Town, South Africa',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -33.8242,
            longitude: 18.4914,
          },
        },
        temporalCoverage: '2024/2030',
        license: 'https://www.capetown.gov.za',
      },
      {
        '@type': 'Dataset',
        '@id': 'https://www.inteldev.co.za/#dataset-n7',
        name: 'N7 Freeway Upgrade & Van Schoorsdrift Infrastructure Dataset',
        description:
          'R780M Western Cape Department of Infrastructure capital project specifications, 156m Diep River Bridge structural metrics, and Koeberg UPZ land release trigger phases.',
        creator: {
          '@id': 'https://www.inteldev.co.za/#organization',
        },
        spatialCoverage: {
          '@type': 'Place',
          name: 'N7 Highway, Van Schoorsdrift, Frankendale, Rivergate, Cape Town',
        },
      },

      // 4. FAQPage for AI Overviews, SearchGPT, Perplexity & Gemini Grounding
      {
        '@type': 'FAQPage',
        '@id': 'https://www.inteldev.co.za/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the status of the Blaauwberg Road Corridor LSDF in Cape Town?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Blaauwberg Road Corridor Local Spatial Development Framework (LSDF) was formally approved by the City of Cape Town Council in April 2025 (Council Resolution C 26/04/25). It designates the corridor for mixed-use intensification, active ground-floor commercial edges, and GR3–GR5 residential densification supported by MyCiTi transit.',
            },
          },
          {
            '@type': 'Question',
            name: 'When will the Potsdam WWTW upgrade in Cape Town be completed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The City of Cape Town is executing an R5.4 billion upgrade of the Potsdam Wastewater Treatment Works (WWTW) to expand capacity to 100 megalitres per day (Mℓ/d), with target commissioning scheduled for 2027.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are the specifications of the Diep River Bridge on the N7 MR244 link?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Diep River Bridge is a continuous post-tensioned single concrete span bridge with a total length of 156m and a central span of 64m. With a span efficiency ratio of 41.03%, it is the second longest single concrete span in the Western Cape, designed with zero instream piers to protect wetland hydrology.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does the Koeberg Nuclear Emergency Plan affect property development in Sandown and Rivergate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under the Koeberg Traffic Evacuation Model (TEM) within the 16km Urgent Protection Planning Zone (UPZ), the release and rezoning of 442 ha of residential and 725 ha of industrial land (including 333 ha at Frankendale) is synchronized with the completion of the N7 freeway upgrade, Van Schoorsdrift Interchange, and Berkshire Boulevard (MR244).',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
};
