"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Form.module.css';

export default function ContactForm() {
    const [status, setStatus] = useState('idle');

    return (
        <section id="enquire" className={styles.wrapper}>
            <div className={styles.glassContainer}>
                {/* Left Side: Immersive Visual */}
                <div className={styles.imageSide}>
                    <div className={styles.overlay}>
                        <span className={styles.badge}>Private Viewing</span>
                        <h3 className={styles.imageTitle}>Experience <br /> The Zenith</h3>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1470&auto=format&fit=crop"
                        alt="Zenith Interior View"
                    />
                </div>

                {/* Right Side: Sophisticated Form */}
                <div className={styles.formSide}>
                    <div className={styles.formHeader}>
                        <h2>Register Interest</h2>
                        <p>Complete the form for a curated digital brochure and private tour invitation.</p>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <input type="text" placeholder="Full Name" required />
                            <div className={styles.underline}></div>
                        </div>

                        <div className={styles.inputWrapper}>
                            <input type="email" placeholder="Email Address" required />
                            <div className={styles.underline}></div>
                        </div>

                        <div className={styles.inputWrapper}>
                            <input type="tel" placeholder="Phone Number" required />
                            <div className={styles.underline}></div>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            <span className={styles.btnText}>Request Access</span>
                            <div className={styles.btnBg}></div>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}