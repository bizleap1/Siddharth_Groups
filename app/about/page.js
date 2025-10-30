"use client";

import Image from "next/image";
import Link from "next/link";
import { Italiana, Barlow } from "next/font/google";
import { motion } from "framer-motion";

const italiana = Italiana({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: ["400", "600"], subsets: ["latin"] });

export default function About() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-visible">
        <div className="relative w-full h-[50vh] md:h-[70vh] -mt-[80px]">
          <Image
            src="/images/Hero2.avif" // replace with your banner
            alt="About Siddharth Hotels"
            fill
            priority
            className="object-cover object-center w-full"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Static Floating Card */}
        <div className="relative z-20 flex justify-center">
          <div className="-mt-[120px] bg-white rounded-2xl shadow-lg border border-gray-200 w-[90%] max-w-4xl p-8 md:p-10 text-center">
            <h1
              className={`${italiana.className} text-4xl md:text-5xl text-gray-800 mb-4`}
            >
              About Siddharth Groups
            </h1>
            <p
              className={`${barlow.className} text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed`}
            >
              Redefining hospitality with a perfect blend of comfort, elegance,
              and culinary excellence across our signature services.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`${italiana.className} text-4xl md:text-5xl text-gray-800 mb-8`}
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${barlow.className} text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto`}
          >
            Founded with a vision to create memorable experiences, Siddharth
            Hotels has become a name synonymous with excellence in hospitality.
            From refined stays to curated dining, every experience we offer is
            designed to delight, inspire, and comfort.
            <br /> <br />
            With a legacy rooted in quality and trust, we continue to craft
            moments that bring people together — whether it’s a luxury stay, an
            exquisite meal, or a grand celebration catered to perfection.
          </motion.p>
        </div>
      </section>

      {/* ================= SERVICES (REPLACED OUR BRANDS) ================= */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`${italiana.className} text-4xl md:text-5xl text-gray-800 mb-12`}
          >
            Our Services
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Premiere */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src="/images/Hero3.jpg"
                  alt="Hotel Siddharth Premiere"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <h3
                  className={`${italiana.className} text-2xl text-gray-800 mb-3`}
                >
                  Siddharth Premiere
                </h3>
                <p
                  className={`${barlow.className} text-gray-600 text-base leading-relaxed mb-5`}
                >
                  A luxurious stay designed for both business and leisure
                  travelers — sophistication meets comfort.
                </p>
                <Link
                  href="/premiere"
                  className="inline-block bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
                >
                  Know More
                </Link>
              </div>
            </motion.div>

            {/* Naava */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src="/images/Hero1.avif"
                  alt="Naava Restaurant"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <h3
                  className={`${italiana.className} text-2xl text-gray-800 mb-3`}
                >
                  Naava
                </h3>
                <p
                  className={`${barlow.className} text-gray-600 text-base leading-relaxed mb-5`}
                >
                  A vibrant dining destination blending modern global flavors
                  with timeless Indian taste.
                </p>
                <Link
                  href="/naava"
                  className="inline-block bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
                >
                  Know More
                </Link>
              </div>
            </motion.div>

            {/* Outdoor Catering */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src="/images/Hero2.avif"
                  alt="Siddharth Outdoor Catering"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <h3
                  className={`${italiana.className} text-2xl text-gray-800 mb-3`}
                >
                  Outdoor Catering
                </h3>
                <p
                  className={`${barlow.className} text-gray-600 text-base leading-relaxed mb-5`}
                >
                  Crafting bespoke dining experiences for every occasion —
                  elegant, delicious, unforgettable.
                </p>
                <Link
                  href="/outdoor-catering"
                  className="inline-block bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
                >
                  Know More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
