"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Italiana, Barlow } from "next/font/google";

const italiana = Italiana({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: ["400", "600"], subsets: ["latin"] });

const services = [
  {
    id: 1,
    image: "/images/Service1.avif",
    title: "Luxury Stays",
    description:
      "Experience elegance and comfort at Siddharth Premier with unmatched premium hospitality.",
    tag: "Stay",
    href: "/premiere",
  },
  {
    id: 2,
    image: "/images/Service2.avif",
    title: "Contemporary Dining",
    description:
      "Indulge in modern culinary delights with stylish interiors at Curry Culture.",
    tag: "Dining",
    href: "/premiere",
  },
  {
    id: 3,
    image: "/images/Service3.avif",
    title: "Bake my cake Bakery",
    description:
      "At Bake My Cake, every creation is made with love. Because a cake is more than dessert — it’s a celebration.",
    tag: "Bakery",
    href: "/premiere",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    /* FULL WIDTH BLACK */
    <section className="relative overflow-hidden w-full bg-black">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 text-center text-white">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`${italiana.className} text-white text-4xl md:text-5xl tracking-tight`}
        >
          Our <span className="text-[#d4af37]">Services</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`${barlow.className} text-gray-400 text-lg mt-4 max-w-2xl mx-auto leading-relaxed`}
        >
          Explore sophisticated hospitality offerings and exquisite dining
          experiences across our hotel outlets.
        </motion.p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group h-full rounded-3xl overflow-hidden border border-[#d4af37]/20 bg-[#0b0b0b] shadow-lg hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-[#d4af37] ring-1 ring-[#d4af37]/30">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 flex flex-col h-full text-left">
                <h3
                  className={`${barlow.className} text-white text-xl md:text-2xl font-semibold`}
                >
                  {service.title}
                </h3>
                <p
                  className={`${barlow.className} text-gray-400 mt-2 leading-relaxed`}
                >
                  {service.description}
                </p>

                <div className="mt-6">
                  <motion.button
                    onClick={() => setActive(service)}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-4 py-2 text-black text-sm font-semibold hover:bg-[#e6c55c]"
                  >
                    View more →
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="fixed z-50 inset-0 flex items-center justify-center p-6"
            >
              <div className="relative w-full max-w-2xl bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#d4af37]/30">
                <div className="relative h-56 md:h-72">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
                </div>

                <div className="p-6 md:p-8">
                  <h3
                    className={`${italiana.className} text-2xl md:text-3xl text-[#d4af37]`}
                  >
                    {active.title}
                  </h3>
                  <p
                    className={`${barlow.className} text-gray-400 mt-3 leading-relaxed`}
                  >
                    {active.description}
                  </p>

                  <div className="mt-6 flex gap-3">
                    <Link
                      href={active.href}
                      onClick={() => setActive(null)}
                      className="rounded-full bg-[#d4af37] px-4 py-2 text-black text-sm font-semibold"
                    >
                      Visit page
                    </Link>
                    <button
                      onClick={() => setActive(null)}
                      className="rounded-full border border-[#d4af37]/40 px-4 py-2 text-sm text-[#d4af37]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
