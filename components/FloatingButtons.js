"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button after some scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918412800000"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center text-2xl transition-all duration-300"
      >
        <FaWhatsapp />
      </motion.a>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          className="bg-[#1a1040] hover:bg-[#a07d56] text-white p-4 rounded-full shadow-lg flex items-center justify-center text-2xl transition-all duration-300"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  );
}
