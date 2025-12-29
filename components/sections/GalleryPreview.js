"use client";
import styles from "@/styles/Gallery.module.css";
import { motion } from "framer-motion";



const PHOTOS = [
  "https://images.unsplash.com/photo-1600607687940-4e5a994239b3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80"
];

export default function GalleryPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.masonry}>
        {PHOTOS.map((src, i) => (
          <motion.div 
            key={i}
            className={styles.imageWrapper}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.6 }}
          >
            <img src={src} alt="Property View" className={styles.img} />
          </motion.div>
        ))}
      </div>
      <div className={styles.viewMore}>
        <button className={styles.btn}>Full Experience</button>
      </div>
    </section>
  );
}