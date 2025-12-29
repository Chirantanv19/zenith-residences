"use client";
import { motion } from "framer-motion";
import styles from "@/styles/Highlights.module.css";

const DATA = [
  { label: "Levels", value: "84", unit: "Stories" },
  { label: "Residences", value: "120", unit: "Units" },
  { label: "Completion", value: "2026", unit: "Q4" },
  { label: "Views", value: "360°", unit: "Skyline" },
];

export default function Highlights() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {DATA.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={styles.card}
          >
            <span className={styles.label}>{item.label}</span>
            <div className={styles.valueGroup}>
              <h2 className={styles.value}>{item.value}</h2>
              <span className={styles.unit}>{item.unit}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}