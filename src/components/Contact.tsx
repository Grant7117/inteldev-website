'use client';

import React from 'react';
import styles from './contact.module.css';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section className={`section-padding ${styles.contactSection}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.infoCol}>
                        <span className={styles.badge}>Advisory Request</span>
                        <h2 className={styles.title}>Engage Our Intelligence Division</h2>
                        <p className={styles.subtitle}>
                            Whether you are planning a massive greenfield development, requiring granular feasibility data,
                            or seeking high-net-worth strategic advisory, IntelDev provides the empirical backbone to your
                            billion-dollar decisions.
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <div className={styles.iconBg}><Mail size={18} /></div>
                                <div>
                                    <h4>Secure Channel</h4>
                                    <p>advisory@inteldev.com</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <div className={styles.iconBg}><MapPin size={18} /></div>
                                <div>
                                    <h4>Intelligence HQ</h4>
                                    <p>Cape Town, South Africa</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formCol}>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <h3 className={styles.formTitle}>Initiate Feasibility Consultation</h3>
                            <div className={styles.inputGroup}>
                                <input type="text" placeholder="Executive Name" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <input type="text" placeholder="Company / Development Firm" required />
                            </div>
                            <div className={styles.inputRow}>
                                <input type="email" placeholder="Corporate Email" required />
                                <input type="tel" placeholder="Direct Line" />
                            </div>
                            <div className={styles.inputGroup}>
                                <select required defaultValue="">
                                    <option value="" disabled>Nature of Inquiry</option>
                                    <option value="strategic_advisory">Strategic Property Development Advisory</option>
                                    <option value="feasibility">Feasibility & Market Analysis</option>
                                    <option value="pricing_modelling">Pricing & Absorption Modelling</option>
                                    <option value="sales_strategy">Go-To-Market & Sales Strategy</option>
                                    <option value="jv_structuring">JV Structuring & Deal Origination</option>
                                    <option value="pitch_decks">Investor Pitch Decks</option>
                                    <option value="newsletter">Subscribe to Analyst Briefs</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <textarea placeholder="Brief summary of the intended project or asset..." rows={4} required></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>Submit Request for Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
