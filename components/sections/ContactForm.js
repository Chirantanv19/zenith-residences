"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Form.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
    const formData = new FormData(e.target);

    try {
      // Note: In a real static export, you'd use fetch()
      // For this demo, we simulate the success
      setTimeout(() => setStatus('success'), 1500);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="enquire" className={styles.section}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={styles.card}
      >
        <h2 className={styles.title}>Secure Your View</h2>
        <p className={styles.subtitle}>Private viewings available by appointment only.</p>

        {status === 'success' ? (
          <div className={styles.success}>
            <h3>Registration Complete</h3>
            <p>Our concierge will contact you shortly.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            {/* Honeypot for spam */}
            <input type="text" name="_bot" style={{display:'none'}} />
            
            <button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Verifying...' : 'Request Private Tour'}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}