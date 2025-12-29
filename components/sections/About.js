"use client";
import styles from "@/styles/About.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.grid}>
        <div className={styles.imageSide}>
          <img 
            src="https://images.unsplash.com/photo-1600607687940-4e5a994239b3?auto=format&fit=crop&w=1000&q=80" 
            alt="Interior Lounge" 
          />
        </div>
        
        <div className={styles.textSide}>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={styles.content}
          >
            <h2 className={styles.heading}>A New Standard <br/> of Elevation</h2>
            <p className={styles.text}>
              Every detail of The Zenith has been meticulously considered. 
              From the floor-to-ceiling thermal glass to the hand-finished 
              marble surfaces, we have redefined what it means to live in the sky.
            </p>
            <div className={styles.signature}>Zenith Architects</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}