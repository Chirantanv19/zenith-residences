"use client";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>ZENITH</h2>
          <p className={styles.tagline}>Redefining the horizon since 2024.</p>
        </div>
        
        <div className={styles.linksGrid}>
          <div className={styles.column}>
            <h4>Exploration</h4>
            <span>Residences</span>
            <span>Amenities</span>
            <span>Penthouse</span>
          </div>
          <div className={styles.column}>
            <h4>Company</h4>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
          <div className={styles.column}>
            <h4>Social</h4>
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Vimeo</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {year} Zenith Residences. All rights reserved.
        </p>
        <p className={styles.credits}>
          Designed by <span className={styles.gold}>Aura Architectura</span>
        </p>
      </div>
    </footer>
  );
}