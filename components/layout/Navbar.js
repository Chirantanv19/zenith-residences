"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // Required for routing
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

  // Define your routes here for consistency
  const navLinks = [
    { name: "Gallery", href: "/gallery" },
    { name: "Amenities", href: "/amenities" },
    { name: "Location", href: "/location" },
    { name: "Contact", href: "/#enquire" }, // Anchor link to home page form
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={styles.nav}
      >
        <Link href="/" className={styles.logo}>ZENITH</Link>

        {/* Desktop Links */}
        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.link}>
              {link.name}
            </Link>
          ))}
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
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                >
                  <Link 
                    href={link.href} 
                    className={styles.mobileLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}