"use client";
import { motion } from "framer-motion";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className={styles.nav}
    >
      <div className={styles.logo}>ZENITH</div>
      <div className={styles.links}>
        <span className={styles.link}>Gallery</span>
        <span className={styles.link}>Amenities</span>
        <span className={styles.link}>Location</span>
        <span className={styles.link}>Contact</span>
      </div>
    </motion.nav>
  );
}