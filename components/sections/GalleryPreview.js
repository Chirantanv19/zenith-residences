"use client";
import styles from "@/styles/Gallery.module.css";
import { motion } from "framer-motion";

const PHOTOS = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
 
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80"
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