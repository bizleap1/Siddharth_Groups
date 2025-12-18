"use client";

import { motion } from "framer-motion";
import {
  FaBed,
  FaMountain,
  FaConciergeBell,
  FaGlassCheers,
  FaSuitcaseRolling,
  FaTv,
  FaUsers,
  FaUtensils,
  FaCoffee,
  FaWifi,
  FaTaxi,
  FaParking,
} from "react-icons/fa";

export default function Facilities() {
  const amenities = [
    { icon: <FaBed size={30} />, label: "Furnished Rooms" },
    { icon: <FaMountain size={30} />, label: "Mountain View Windows" },
    { icon: <FaConciergeBell size={30} />, label: "24/7 Room Services" },
    { icon: <FaGlassCheers size={30} />, label: "Bar & Lounge" },
    { icon: <FaSuitcaseRolling size={30} />, label: "Travel Desk" },
    { icon: <FaTv size={30} />, label: "LED TV with DTH Channels" },
    { icon: <FaUsers size={30} />, label: "Banquets & Conferences" },
    { icon: <FaUtensils size={30} />, label: "Pure Veg Restaurant" },
    { icon: <FaCoffee size={30} />, label: "Tea & Coffee Maker" },
    { icon: <FaWifi size={30} />, label: "Hi-speed Wi-Fi Internet" },
    { icon: <FaTaxi size={30} />, label: "Easy Taxi Access" },
    { icon: <FaParking size={30} />, label: "Parking Facilities" },
  ];

  return (
    <section className="bg-white py-24 text-center text-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-[#1a1040] mb-4 font-serif"
        >
          Fabulous Amenities & Facilities
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-600 text-base md:text-lg mb-12 font-normal"
        >
          A wide range of amenities for our visitors and guests to enjoy and relax — hosted by the best comfort and care.
        </motion.p>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-14 justify-center"
        >
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="text-[#1a1040]">{item.icon}</div>
              <p className="text-gray-700 text-base font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
