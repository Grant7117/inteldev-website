'use client';

import React from 'react';
import styles from './ticker.module.css';
import { ArrowUp, ArrowDown } from 'lucide-react';

const mockData = [
    { label: 'Prime Lending Rate', value: '10.25%', change: 0, isPositive: true },
    { label: 'JSE All Share', value: '128,455.68', change: 1.2, isPositive: true },
    { label: 'SA CPI Inflation', value: '3.50%', change: -0.1, isPositive: false },
    { label: '10Yr Gov Bond', value: '10.50%', change: 0.1, isPositive: true },
    { label: 'USD/ZAR', value: '15.92', change: -0.5, isPositive: false },
    { label: 'US CPI', value: '2.40%', change: -0.3, isPositive: false },
];

export default function Ticker() {
    // Duplicate data to create a seamless infinite scrolling effect
    const displayData = [...mockData, ...mockData, ...mockData];

    return (
        <div className={styles.tickerWrapper}>
            <div className={styles.tickerTrack}>
                {displayData.map((item, index) => (
                    <div key={index} className={styles.tickerItem}>
                        <span className={styles.tickerLabel}>{item.label}</span>
                        <span className={`${styles.tickerValue} ${item.isPositive ? styles.positive : styles.negative}`}>
                            {item.value}
                        </span>
                        {item.change !== 0 && (
                            <span className={item.isPositive ? styles.positive : styles.negative} style={{ display: 'flex', alignItems: 'center' }}>
                                {item.isPositive ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                                <span style={{ fontSize: '0.75rem', marginLeft: '2px' }}>{Math.abs(item.change)}%</span>
                            </span>
                        )}
                        {item.change === 0 && (
                            <span style={{ color: 'var(--text-muted)' }}> --</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
