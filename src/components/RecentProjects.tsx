import React from 'react';
import Image from 'next/image';
import styles from './recent-projects.module.css';
import { Youtube, Globe } from 'lucide-react';

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
    youtubeVideos?: { label: string; url: string }[];
    year?: string;
}

const PROJECTS: Project[] = [
    {
        id: 'cornerstone-on-arum',
        name: 'Cornerstone on Arum',
        status: 'SOLD OUT',
        units: '22 Premium Units',
        location: 'Arum Road, Table View',
        description: 'Cornerstone on Arum sets a benchmark for residential living in Table View. The development offers premium apartments within a secure and well-managed community, designed to deliver long-term value through superior standards of design, sustainability, and comfort.',
        fullDescription: 'Featuring 22 thoughtfully designed one- and two-bedroom units, the project presents an exceptional investment opportunity with modern aesthetics and reinforced structure for long-term durability.',
        image: '/images/Cornerstone-on-arum/hero-image.jpg',
        websiteUrl: 'www.cornerstoneonarum.co.za',
        youtubeVideos: [
            { label: 'YouTube', url: 'https://www.youtube.com/@CornerstoneonArum' }
        ],
        year: '2024-2025'
    },
    {
        id: 'residence-on-north',
        name: 'Residence on North',
        status: 'SOLD',
        units: '72 units',
        location: 'North Road, Table View',
        description: 'A landmark development comprising three separate residential buildings of 24 units each. Designed with a New York-inspired aesthetic, featuring top-floor viewing decks and sophisticated outdoor entertainment spaces.',
        fullDescription: 'Each building incorporates premium finishes including GROHE sanitary ware and AEG appliances. The project was engineered for resilience with integrated gas infrastructure and high-specification architectural detailing.',
        image: '/images/Residence-on-north/42-North-Road.png',
        websiteUrl: 'www.theresidenceonnorth.co.za',
        youtubeVideos: [
            { label: 'YouTube', url: 'https://youtu.be/3_BpAXcjstQ?si=yrEKKuWHJuGOcdQz' }
        ],
        year: '2023-2024'
    },
    {
        id: 'north-view-terrace',
        name: 'North View Terrace',
        status: 'SOLD',
        units: '14 units',
        location: 'North View Terrace, Table View',
        description: 'A boutique residential development optimized for the burgeoning Table View market. North View Terrace focused on providing clean architectural lines and high-yield potential for investors.',
        image: '/images/North-View-Terrace/North-view-terrace.jpg',
        websiteUrl: '',
        year: '2022'
    }
];

export default function RecentProjects() {
    return (
        <section className={styles.container}>
            <div className={styles.projectList}>
                {PROJECTS.map((project, index) => (
                    <article key={project.id} className={`${styles.projectCard} ${index % 2 !== 0 ? styles.reversed : ''}`}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.image}
                                alt={project.name}
                                className={styles.projectImage}
                                width={1200}
                                height={900}
                                style={{ objectFit: 'cover' }}
                                unoptimized
                                priority={index === 0}
                            />
                        </div>

                        <div className={styles.projectInfo}>
                            <h2 className={styles.projectName}>{project.name}</h2>

                            <p className={styles.description}>
                                {project.description}
                            </p>

                            <div className={styles.highlightDetails}>
                                <div className={styles.highlightRow}>
                                    <span className={styles.highlightValue}>{project.units}</span>
                                    <span className={styles.highlightValue}>{project.location}</span>
                                </div>
                            </div>

                            <div className={styles.actions}>
                                {project.websiteUrl && (
                                    <a
                                        href={`https://${project.websiteUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.pillBtnGlobe}
                                    >
                                        <Globe size={18} />
                                        <span>{project.websiteUrl.toUpperCase()}</span>
                                    </a>
                                )}
                                {project.youtubeVideos && project.youtubeVideos.length > 0 && (
                                    <a
                                        href={project.youtubeVideos[0].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.pillBtnYoutube}
                                    >
                                        <Youtube size={22} color="#ff0000" fill="#ff0000" />
                                        <span>YouTube</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
