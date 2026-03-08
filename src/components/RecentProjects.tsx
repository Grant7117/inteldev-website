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
        location: 'Table View, Cape Town',
        description: 'Cornerstone on Arum sets a benchmark for residential living in Table View. The development offers premium apartments within a secure and well-managed community, designed to deliver long-term value through superior standards of design, sustainability, and comfort.',
        fullDescription: 'Featuring 22 thoughtfully designed one- and two-bedroom units, the project presents an exceptional investment opportunity with modern aesthetics and reinforced structure for long-term durability.',
        image: '/images/Cornerstone-on-arum/hero-image.jpg',
        websiteUrl: 'www.cornerstoneonarum.co.za',
        youtubeVideos: [
            { label: 'Project Channel', url: 'https://www.youtube.com/@CornerstoneonArum' }
        ],
        year: '2024-2025'
    },
    {
        id: 'residence-on-north',
        name: 'Residence on North',
        status: 'SOLD',
        units: '72 Total Units (3 x 24)',
        location: '38, 40 & 42 North Road',
        description: 'A landmark development comprising three separate residential buildings of 24 units each. Designed with a New York-inspired aesthetic, featuring top-floor viewing decks and sophisticated outdoor entertainment spaces.',
        fullDescription: 'Each building incorporates premium finishes including GROHE sanitary ware and AEG appliances. The project was engineered for resilience with integrated gas infrastructure and high-specification architectural detailing.',
        image: '/images/Residence-on-north/42-North-Road.png',
        websiteUrl: 'www.theresidenceonnorth.co.za',
        youtubeVideos: [
            { label: 'Production Video 1', url: 'https://youtu.be/3_BpAXcjstQ?si=yrEKKuWHJuGOcdQz' },
            { label: 'Production Video 2', url: 'https://youtu.be/RoRyZSSQB-I?si=vFZistEdDJNU2tUx' }
        ],
        year: '2023-2024'
    },
    {
        id: 'north-view-terrace',
        name: 'North View Terrace',
        status: 'SOLD',
        units: '15 Units',
        location: 'Table View',
        description: 'A boutique residential development optimized for the burgeoning Table View market. North View Terrace focused on providing clean architectural lines and high-yield potential for investors.',
        image: '/images/North-View-Terrace/North-view-terrace.jpg',
        year: '2022'
    }
];

export default function RecentProjects() {
    return (
        <section className={styles.container}>
            <div className={styles.introHeader}>
                <span className={styles.goldLabel}>THE INTELDEV PORTFOLIO</span>
                <h1 className={styles.mainTitle}>
                    Strategic Project <span className={styles.limeText}>Portfolio</span>
                </h1>
                <p className={styles.introDesc}>
                    A data-driven showcase of our developmental intelligence, architectural resilience,
                    and high-yield residential delivery across the Western Cape.
                </p>
            </div>

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
                            <div className={styles.headerRow}>
                                <span className={styles.projectNumber}>0{index + 1}</span>
                                <span className={styles.status}>{project.status}</span>
                            </div>

                            <h3 className={styles.projectName}>{project.name}</h3>

                            <p className={styles.description}>
                                {project.description}
                            </p>

                            <div className={styles.details}>
                                <div className={styles.detailItem}>
                                    <span>Scope</span>
                                    <strong>{project.units}</strong>
                                </div>
                                <div className={styles.detailItem}>
                                    <span>Location</span>
                                    <strong>{project.location}</strong>
                                </div>
                                <div className={styles.detailItem}>
                                    <span>Year</span>
                                    <strong>{project.year}</strong>
                                </div>
                            </div>

                            <div className={styles.actions}>
                                {project.websiteUrl && (
                                    <a
                                        href={`https://${project.websiteUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.primeBtn}
                                    >
                                        <Globe size={16} /> {project.websiteUrl}
                                    </a>
                                )}
                                {project.youtubeVideos?.map((video, vIndex) => (
                                    <a
                                        key={vIndex}
                                        href={video.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.secBtn}
                                    >
                                        <Youtube size={16} /> {video.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
