"use client";
import Link from "next/link";
import styles from "@/styles/StickyCTA.module.css";

export default function StickyCTA() {
  return (
    <div className={styles.ctaBar}>
      <div className={styles.info}>
        <span className={styles.priceTag}>Limited Units Remaining</span>
      </div>
      {/* Use "/#enquire" - The slash (/) sends the user to the home page, 
         the hash (#) scrolls them to the ID.
      */}
      <Link href="/#enquire" className={styles.button}>
        Enquire Now
      </Link>
    </div>
  );
}