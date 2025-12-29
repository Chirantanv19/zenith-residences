"use client";
import { motion } from "framer-motion";
import styles from "@/styles/Amenities.module.css";

const AMENITIES = [
  { id: "01", title: "Sky Infinity Pool", desc: "Panoramic city views while you swim." },
  { id: "02", title: "Private Cinema", desc: "12-seat boutique screening room." },
  { id: "03", title: "Wellness Spa", desc: "Steam, sauna, and massage therapy." },
  { id: "04", title: "Smart Valet", desc: "Automated car retrieval system." },
  { id: "05", title: "Wine Cellar", desc: "Temperature controlled private lockers." },
  { id: "06", title: "24/7 Concierge", desc: "White-glove service at your door." },
];

export default function AmenitiesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>The Lifestyle</h2>
        <p className={styles.subtitle}>Curated services for the discerning few.</p>
      </div>

      <div className={styles.grid}>
        {AMENITIES.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={styles.card}
          >
            <span className={styles.number}>{item.id}</span>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
            <div className={styles.animatedLine}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}