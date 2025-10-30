"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Italiana, Barlow } from "next/font/google";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const italiana = Italiana({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: ["400", "600"], subsets: ["latin"] });

export default function Naava() {
  const whatsapp = "https://wa.me/918412800000";
  const images = [
    "/naava/gallery1.jpg",
    "/naava/gallery2.jpg",
    "/naava/gallery3.jpg",
    "/naava/gallery4.jpg",
    "/naava/gallery5.jpg",
    "/naava/gallery6.jpg",
    "/naava/gallery7.jpg",
    "/naava/gallery8.jpg",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleImageClick = (i) => setSelectedIndex(i);
  const handleClose = () => setSelectedIndex(null);
  const handleNext = () => setSelectedIndex((i) => (i + 1) % images.length);
  const handlePrev = () =>
    setSelectedIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <main className="w-full min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-visible">
        <div className="relative w-full h-[50vh] md:h-[70vh] -mt-[80px]">
          <Image
            src="/images/Hero1.avif"
            alt="Naava Restaurant"
            fill
            priority
            className="object-cover object-center w-full"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Floating Card — no animation */}
        <div className="relative z-20 flex justify-center">
          <div className="-mt-[120px] bg-white rounded-2xl shadow-lg border border-gray-200 w-[90%] max-w-4xl p-6 md:p-10 text-center">
            <p
              className={`${barlow.className} text-gray-600 text-sm font-semibold tracking-[3px] uppercase mb-3`}
            >
              📍 Chandrapur
            </p>

            <div className="flex justify-center mb-6">
              <Image
                src="/logo/Naava.png"
                alt="Naava Logo"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>

            <p
              className={`${barlow.className} text-gray-600 text-base md:text-lg leading-relaxed mb-6`}
            >
              Indulge in a culinary journey that blends tradition with modernity,
              crafted for discerning palates. Explore our stylish interiors and
              vibrant atmosphere, designed to make every meal memorable.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className={`${italiana.className} text-4xl md:text-5xl text-gray-800 mb-6`}
          >
            A Celebration of Taste
          </h2>
          <p
            className={`${barlow.className} text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed`}
          >
            Naava invites you to experience a menu that bridges the classic and
            the contemporary — from timeless Indian delicacies to modern global
            plates, every dish is crafted with passion and precision. Whether
            it’s an intimate dinner or a lively get-together, our space promises
            warmth, flavor, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* GALLERY SECTION (clickable) */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`${italiana.className} text-4xl md:text-5xl text-gray-800 text-center mb-12`}
          >
            Naava Gallery
          </h2>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
                onClick={() => handleImageClick(i)}
              >
                <Image
                  src={src}
                  alt={`Naava Gallery ${i + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN VIEWER */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              <X size={32} />
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-5 text-white text-3xl"
            >
              <ChevronLeft size={40} />
            </button>
            <div className="max-w-5xl max-h-[90vh]">
              <Image
                src={images[selectedIndex]}
                alt={`Full Image ${selectedIndex + 1}`}
                width={1200}
                height={800}
                className="w-auto h-full object-contain rounded-lg"
              />
            </div>
            <button
              onClick={handleNext}
              className="absolute right-5 text-white text-3xl"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="bg-gray-800 rounded-2xl max-w-4xl mx-auto text-center p-8 md:p-12 shadow-xl">
          <h3
            className={`${italiana.className} text-3xl md:text-4xl text-white mb-4`}
          >
            Reserve Your Experience
          </h3>
          <p
            className={`${barlow.className} text-gray-300 text-lg mb-8 max-w-2xl mx-auto`}
          >
            Experience fine dining with artistry, elegance, and comfort — every
            plate tells a story at Naava.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-gray-800 hover:bg-gray-100 font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all duration-300 shadow-lg"
          >
            Book a Table on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
