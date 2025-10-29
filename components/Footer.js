"use client";

import { motion } from "framer-motion";
import { Italiana, Barlow } from "next/font/google";
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const italiana = Italiana({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: ["400", "500"], subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6"
      >
        {/* Title */}
        <h3
          className={`${italiana.className} text-3xl md:text-4xl text-[#1a1040] mb-6`}
        >
          Siddharth <span className="text-[#a07d56]">Hotels</span>
        </h3>

        {/* Contact Info */}
        <div className="space-y-2 mb-8">
          <p className={`${barlow.className} text-gray-700 text-base`}>
            care@siddharthhotels.com
          </p>
          <p className={`${barlow.className} text-gray-700 text-base`}>
            +91 84128 00000
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8 text-[#a07d56] text-2xl">
          <a
            href="https://www.instagram.com/siddharthhotels/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1a1040] transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/HotelSiddharthPremiere"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1a1040] transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-24 bg-gray-300 mx-auto mb-6"></div>

        {/* Copyright */}
        <p
          className={`${barlow.className} text-gray-500 text-sm tracking-wide`}
        >
          © {new Date().getFullYear()} Siddharth Hotels. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
