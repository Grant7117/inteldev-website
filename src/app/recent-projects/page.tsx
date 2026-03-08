import React from 'react';
import styles from '@/components/page.module.css';
import Ticker from '@/components/Ticker';
import RecentProjects from '@/components/RecentProjects';

export default function RecentProjectsPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Ticker />

            <section className={`section-padding ${styles.pageSection}`} style={{ paddingTop: '8rem', flexGrow: 1 }}>
                <div className="container">
                    <RecentProjects />
                </div>
            </section>
        </main>
    );
}
