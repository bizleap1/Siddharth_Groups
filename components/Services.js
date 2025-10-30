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
    <section className="relative overflow-hidden w-full bg-gradient-to-b from-[#f7f2ff] via-white to-[#eef2ff]">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`${italiana.className} text-[#1a1040] text-4xl md:text-5xl font-bold tracking-tight`}
        >
          Our Services
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`${barlow.className} text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed`}
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
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group h-full rounded-3xl overflow-hidden border border-black/5 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1a1040] shadow-sm ring-1 ring-black/5">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 flex flex-col h-full text-left">
                <h3
                  className={`${barlow.className} text-[#1a1040] text-xl md:text-2xl font-semibold`}
                >
                  {service.title}
                </h3>
                <p
                  className={`${barlow.className} text-gray-600 mt-2 leading-relaxed`}
                >
                  {service.description}
                </p>

                {/* View more */}
                <div className="mt-6">
                  <motion.button
                    onClick={() => setActive(service)}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1a1040] px-4 py-2 text-white text-sm font-semibold shadow-lg shadow-[#1a1040]/20 hover:bg-[#2a1b5f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1040]/50"
                  >
                    View more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="fixed z-50 inset-0 flex items-center justify-center p-6"
            >
              <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <button
                  onClick={() => setActive(null)}
                  className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#1a1040] shadow-md ring-1 ring-black/5 hover:bg-white"
                  aria-label="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 6l12 12M6 18L18 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <div className="relative h-56 md:h-72">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
                </div>

                <div className="p-6 md:p-8">
                  <h3
                    className={`${italiana.className} text-2xl md:text-3xl text-[#1a1040]`}
                  >
                    {active.title}
                  </h3>
                  <p
                    className={`${barlow.className} text-gray-600 mt-3 leading-relaxed`}
                  >
                    {active.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={active.href}
                      className="inline-flex items-center gap-2 rounded-full bg-[#1a1040] px-4 py-2 text-white text-sm font-semibold shadow-lg shadow-[#1a1040]/20 hover:bg-[#2a1b5f]"
                      onClick={() => setActive(null)}
                    >
                      Visit page
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <button
                      onClick={() => setActive(null)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#1a1040]/20 px-4 py-2 text-sm font-semibold text-[#1a1040] hover:bg-[#f4f2fb]"
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
