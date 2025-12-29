"use client";
import styles from "@/styles/StickyCTA.module.css";
import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className={styles.ctaBar}>
      <div className={styles.info}>
        <span className={styles.priceTag}>Starting from $1.2M</span>
      </div>
      {/* This link works across routes if the form is on the homepage */}
      <Link href="/#enquire" className={styles.button}>
        Enquire Now
      </Link>
    </div>
  );
}