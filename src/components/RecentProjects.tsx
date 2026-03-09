import React from 'react';
import Image from 'next/image';
import styles from './recent-projects.module.css';

interface Project {
    id: string;
    name: string;
    description: string;
    image: string;
    websiteUrl?: string;
}

const PROJECTS: Project[] = [
    {
        id: 'cornerstone-on-arum',
        name: 'Cornerstone on Arum',
        description: 'Cornerstone on Arum sets a benchmark for residential living in Table View. The development offers premium apartments within a secure and well-managed community, designed to deliver long-term value through superior standards of design, sustainability, and comfort. Featuring 22 thoughtfully designed one- and two-bedroom units, the project presents an exceptional investment opportunity.',
        image: '/images/Cornerstone-on-arum/hero-image.jpg',
        websiteUrl: 'www.cornerstoneonarum.co.za'
    },
    {
        id: 'residence-on-north',
        name: 'Residence on North',
        description: 'Residence on North is a premium complex with 24 spacious apartments, including studios, one-bedroom units, lofts, and two-bedroom options. Designed for comfort and modern living, all apartments offer style and functionality. Three developments of 24 apartments each are located side by side on North Road, Table View.',
        image: '/images/Residence-on-north/42-North-Road.png',
        websiteUrl: 'www.theresidenceonnorth.co.za'
    },
    {
        id: 'north-view-terrace',
        name: 'North View Terrace',
        description: 'North View Terrace comprises 15 units, offering a selection of one- and two-bedroom apartments designed to maximize comfort and natural light. Each unit features spacious interiors and private balconies. This development is well-suited for first-time buyers and investors who are interested in affordable and distinctive properties',
        image: '/images/North-View-Terrace/North-view-terrace.jpg',
        websiteUrl: ''
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
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        <div className={styles.projectInfo}>
                            <h2 className={styles.projectName}>
                                {project.name.split(' ').slice(0, -1).join(' ')}{' '}
                                <span className={styles.limeHighlight}>
                                    {project.name.split(' ').slice(-1)}
                                </span>
                            </h2>

                            <p className={styles.description}>
                                {project.description}
                            </p>

                            <div className={styles.links}>
                                {project.websiteUrl && (
                                    <a
                                        href={`https://${project.websiteUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.textLink}
                                    >
                                        {project.websiteUrl.toLowerCase()}
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
