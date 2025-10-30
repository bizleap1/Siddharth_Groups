"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Italiana, Barlow } from "next/font/google";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const italiana = Italiana({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: ["400", "600"], subsets: ["latin"] });

export default function OutdoorCatering() {
  const whatsapp = "https://wa.me/918412800000";
  const images = [
    "/outdoor/O1.webp",
    "/outdoor/O2.avif",
    "/outdoor/O3.avif",
    "/outdoor/O4.avif",
    "/outdoor/O5.avif",
    "/outdoor/O6.avif",
    
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
            src="/images/Hero2.avif"
            alt="Outdoor Catering"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Floating Card — NO ANIMATION (like Premiere) */}
        <div className="relative z-20 flex justify-center">
          <div className="-mt-[120px] bg-white rounded-2xl shadow-lg border border-gray-200 w-[90%] max-w-4xl p-6 md:p-10 text-center">
            <p
              className={`${barlow.className} text-gray-600 text-sm font-semibold tracking-[3px] uppercase mb-3`}
            >
              🍽️ Chandrapur
            </p>
            <h1 className={`${italiana.className} text-4xl md:text-5xl text-gray-800 mb-4`}>
              Outdoor Catering
            </h1>
            <p
              className={`${barlow.className} text-gray-600 text-base md:text-lg leading-relaxed mb-6`}
            >
              We bring the experience of fine dining right to your venue.
              Whether it’s a <b>wedding</b>, <b>birthday</b>, or <b>corporate
              event</b>, we serve delicious food and provide full setup to make
              your celebration effortless and elegant.
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
            >
              Book Catering on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className={`${italiana.className} text-4xl md:text-5xl text-gray-800 mb-6`}
          >
            Crafted for Every Celebration
          </h2>
          <p
            className={`${barlow.className} text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed`}
          >
            From traditional Indian feasts to elegant global cuisines — our team
            handles everything: catering, presentation, and service. Every
            occasion becomes a gourmet experience to remember.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`${italiana.className} text-4xl md:text-5xl text-gray-800 text-center mb-12`}
          >
            Our Outdoor Events
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => handleImageClick(i)}
              >
                <Image
                  src={src}
                  alt={`Outdoor Catering ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN IMAGE VIEWER */}
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

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="bg-gray-800 rounded-2xl max-w-4xl mx-auto text-center p-8 md:p-12 shadow-xl">
          <h3
            className={`${italiana.className} text-3xl md:text-4xl text-white mb-4`}
          >
            Make Your Event Unforgettable
          </h3>
          <p
            className={`${barlow.className} text-gray-300 text-lg mb-8 max-w-2xl mx-auto`}
          >
            From setup to serving — we handle it all. Let Siddharth Group turn
            your occasion into an experience filled with flavor, elegance, and
            joy.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-gray-800 hover:bg-gray-100 font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all duration-300 shadow-lg"
          >
            Book Outdoor Catering
          </a>
        </div>
      </section>
    </main>
  );
}
