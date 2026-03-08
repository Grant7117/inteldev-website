'use client';

import React from 'react';
import styles from './recent-projects.module.css';
import { ExternalLink, House } from 'lucide-react';

interface Project {
    id: string;
    name: string;
    status: string;
    units: string;
    location: string;
    description: string;
    fullDescription?: string;
    image: string;
    websiteUrl?: string;
    year?: string;
}

const PROJECTS: Project[] = [
    {
        id: 'cornerstone-on-arum',
        name: 'Cornerstone on Arum',
        status: 'SOLD OUT',
        units: '22 Premium Units',
        location: 'Table View, Cape Town',
        description: 'Cornerstone on Arum sets a benchmark for residential living in Table View. The development offers premium apartments within a secure and well-managed community, designed to deliver long-term value through superior standards of design, sustainability, and comfort.',
        fullDescription: 'Featuring 22 thoughtfully designed one- and two-bedroom units, the project presents an exceptional investment opportunity with modern aesthetics and reinforced structure for long-term durability.',
        image: '/images/cornerstone-on-arum-hero-image.jpeg', // Placeholder path
        websiteUrl: 'https://cornerstone-on-arum.co.za', // Placeholder
        year: '2024-2025'
    },
    {
        id: 'residence-on-north',
        name: 'Residence on North',
        status: 'SOLD',
        units: '72 Total Units (3 x 24)',
        location: '38, 40 & 42 North Road',
        description: 'Residence on North consists of three separate architectural developments. Designed incorporating modern world-renowned influences, including a New York-style top-floor viewing deck and an outdoor entertainment area.',
        fullDescription: 'Each 24-unit building has been architecturally designed to make the best use of space and lighting, incorporating top-quality finishes normally seen on the Camps Bay beachfront. Features include GROHE sanitary ware, AEG gas appliances, and integrated gas geysers for resilience.',
        image: '/images/17-north-hero-image.jpeg', // Placeholder path
        websiteUrl: 'https://residence-on-north.co.za', // Placeholder
        year: '2023-2024'
    },
    {
        id: 'north-view-terrace',
        name: 'North View Terrace',
        status: 'SOLD',
        units: '15 Units',
        location: 'Table View',
        description: 'A boutique residential development optimized for the burgeoning Table View market. North View Terrace focused on providing clean architectural lines and high-yield potential for early investors.',
        image: '/images/north-view-terrace-hero.jpeg', // Placeholder path
        year: '2022'
    }
];

export default function RecentProjects() {
    return (
        <section className={styles.container}>
            <div className={styles.intro}>
                <span className={styles.badge}>Execution Portfolio</span>
                <h2 className={styles.title}>Benchmark Residential Developments</h2>
                <p className={styles.subtitle}>
                    A track record of high-yield urban revitalization projects, successfully underwritten,
                    marketed and executed through precise feasibility modeling and design excellence.
                </p>
            </div>

            <div className={styles.projectList}>
                {PROJECTS.map((project, index) => (
                    <article key={project.id} className={`${styles.projectCard} ${index % 2 !== 0 ? styles.reversed : ''}`}>
                        <div className={styles.imageWrapper}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f0f0f0',
                                color: '#999',
                                fontSize: '0.875rem'
                            }}>
                                <House size={48} />
                                <span style={{ marginLeft: '1rem' }}>Rendering Pending Upload</span>
                            </div>
                            {/* 
                                Once images arrive, we'll replace the block above with:
                                <img src={project.image} alt={project.name} className={styles.projectImage} />
                            */}
                        </div>

                        <div className={styles.projectInfo}>
                            <span className={styles.status}>{project.status}</span>
                            <h3 className={styles.projectName}>{project.name}</h3>
                            <p className={styles.description}>
                                {project.description}
                            </p>

                            <div className={styles.details}>
                                <div className={styles.detailItem}>
                                    <strong>{project.units}</strong>
                                    <span>Scope</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <strong>{project.location}</strong>
                                    <span>Location</span>
                                </div>
                            </div>

                            {project.fullDescription && (
                                <p className={styles.description} style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    {project.fullDescription}
                                </p>
                            )}

                            {project.websiteUrl && (
                                <div className={styles.actions}>
                                    <a
                                        href={project.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.visitBtn}
                                    >
                                        Visit Project Website <ExternalLink size={16} />
                                    </a>
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
