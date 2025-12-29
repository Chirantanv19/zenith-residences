"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  const linkVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i + 0.3 },
    }),
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={styles.nav}
      >
        <div className={styles.logo}>ZENITH</div>

        {/* Desktop Links */}
        <div className={styles.desktopLinks}>
          <span className={styles.link}>Gallery</span>
          <span className={styles.link}>Amenities</span>
          <span className={styles.link}>Location</span>
          <span className={styles.link}>Contact</span>
        </div>

        {/* Mobile Toggle */}
        <div 
          className={`${styles.mobileToggle} ${isOpen ? styles.activeToggle : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileLinks}>
              {["Gallery", "Amenities", "Location", "Contact"].map((item, i) => (
                <motion.span 
                  key={item}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => setIsOpen(false)}
                  className={styles.mobileLink}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}