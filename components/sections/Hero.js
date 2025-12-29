"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect: Image moves slower than scroll
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section ref={containerRef} className={styles.hero}>
      <div className={styles.content}>
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.eyebrow}
        >
          Limited Edition Residences
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
          className={styles.title}
        >
          THE <br /> <span className={styles.outline}>ZENITH</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className={styles.description}
        >
          An icon of architectural precision, rising above the city skyline.
        </motion.p>
      </div>

      <motion.div style={{ y }} className={styles.imageContainer}>
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80" 
          alt="Zenith Building Exterior"
          className={styles.mainImage}
        />
      </motion.div>
      
      <div className={styles.overlay}></div>
    </section>
  );
}