"use client";

import CountUp from "react-countup";
import Image from "next/image";
import { motion } from "framer-motion";
import { Italiana, Barlow } from "next/font/google";

const italiana = Italiana({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: ["400", "600"], subsets: ["latin"] });

export default function Stats() {
  return (
    <section className="bg-white py-24 text-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${italiana.className} text-4xl md:text-5xl text-[#1a1040] mb-6`}
        >
          Welcome to{" "}
          <span className="text-[#a07d56]">Siddharth Group</span>
        </motion.h2>

        {/* ABOUT TEXT */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${barlow.className} text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-16`}
        >
          Rooted in excellence and hospitality, Siddharth Group brings together
          luxury, comfort and timeless taste. From the refined stays at
          <span className="text-[#a07d56] font-semibold"> Siddharth Premier </span>
          to the exquisite flavors of{" "}
          <span className="text-[#a07d56] font-semibold">Curry Culture</span> and
          the heartfelt sweetness of{" "}
          <span className="text-[#a07d56] font-semibold">Bake My Cake</span>,
          every experience is crafted with care and passion. We don’t just offer
          hospitality — we offer belonging.
        </motion.p>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mx-auto mb-20 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] rounded-3xl overflow-hidden shadow-2xl"


        >
          <Image
            src="/images/About.avif" // your image
            alt="Siddharth Group Interior"
            width={1200}
            height={700}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* STATS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-center"
        >
          {[
            { value: 150, label: "Timeless Quality" },
            { value: 1500, label: "Trusted by Guests" },
            { value: 10, label: "Years of Excellence" },
            { value: 5, label: "Hospitality Outlets" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3
                className={`${barlow.className} text-5xl font-semibold text-[#a07d56]`}
              >
                <CountUp start={0} end={stat.value} duration={2.5} />+
              </h3>
              <p
                className={`${barlow.className} text-gray-700 text-lg font-medium mt-2`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
