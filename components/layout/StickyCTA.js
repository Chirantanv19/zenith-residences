"use client";
import styles from "@/styles/StickyCTA.module.css";

export default function StickyCTA() {
  return (
    <div className={styles.ctaBar}>
      <div className={styles.info}>
        <span className={styles.priceTag}>Starting from $1.2M</span>
      </div>
      <button className={styles.button} onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>
        Enquire Now
      </button>
    </div>
  );
}