"use client";
import styles from "@/styles/Location.module.css";

export default function LocationMap() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.title}>The Nexus of <br/> Luxury</h2>
          <p className={styles.address}>1200 Skyline Blvd, Penthouse District, NY</p>
          <ul className={styles.landmarks}>
            <li><span>05 min</span> Central Park</li>
            <li><span>10 min</span> Financial District</li>
            <li><span>02 min</span> Michelin Dining</li>
          </ul>
        </div>
        <div className={styles.mapWrapper}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164965!2d-73.987844!3d40.757974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI4LjciTiA3M8KwNTknMTYuMiJX!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
            className={styles.map}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}