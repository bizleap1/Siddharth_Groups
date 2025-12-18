"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Italiana, Barlow } from "next/font/google";


const italiana = Italiana({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: ["400", "600"], subsets: ["latin"] });

export default function Premiere() {
  const whatsapp = "https://wa.me/918412800000";

  return (
    <main className="w-full min-h-screen bg-white">
      {/* HERO SECTION - Fixed behind navbar */}
      {/* HERO SECTION - Half over image and half below */}
<section className="relative w-full overflow-visible">
  {/* Hero Image behind navbar */}
  <div className="relative w-full h-[50vh] md:h-[70vh] -mt-[80px]">
    <Image
      src="/images/Hero4.jpg"
      alt="Siddharth Premiere"
      fill
      priority
      className="object-cover object-center w-full"
    />
    <div className="absolute inset-0 bg-black/30" />
  </div>

  {/* Card overlapping half on image and half below */}
  <div className="relative z-20 flex justify-center">
    <div className="-mt-[120px] bg-white rounded-2xl shadow-lg border border-gray-200 w-[90%] max-w-4xl p-6 md:p-10 text-center">
      <p className="text-gray-600 text-sm font-semibold tracking-[3px] uppercase mb-3">
        📍 Chandrapur
      </p>
      <h1 className={`${italiana.className} text-4xl md:text-5xl text-gray-800 mb-4`}>
        Siddharth Premiere
      </h1>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
        Luxury Suite & Deluxe Rooms — Experience unparalleled comfort in our
        Luxury Suite, featuring elegant decor, modern amenities, and stunning
        views.
      </p>
      <a
        href="https://wa.me/918412800000"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
      >
        Book on WhatsApp
      </a>
    </div>
  </div>
</section>




      {/* CONTENT SECTIONS - White background */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Luxury Suite Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className={`${italiana.className} text-4xl md:text-5xl text-gray-800 mb-4`}>Luxury Suite & Deluxe Rooms</h2>
              <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
              <p className={`${barlow.className} text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed`}>
                Experience unparalleled comfort in our Luxury Suite, featuring elegant decor, modern amenities, and stunning views — perfect for a lavish getaway or business stay.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <Image 
                    src={`/images/room${item}.avif`} 
                    alt={`Luxury Room ${item}`}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          

          {/* Bliss & Vibe Banquet Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20 pt-12 border-t border-gray-200"
          >
            <div className="text-center mb-12">
              <h2 className={`${italiana.className} text-4xl md:text-5xl text-gray-800 mb-4`}>Bliss & Vibe Banquet</h2>
              <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
              <p className={`${barlow.className} text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed`}>
                A space where elegance meets energy, and every moment feels like pure bliss. Celebrate life's milestones in style, only at Vibe & Bliss.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <Image 
                    src={`/images/P2${item}.avif`} 
                    alt={`Banquet ${item}`}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gourmet Delights Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20 pt-12 border-t border-gray-200"
          >
            <div className="text-center mb-12">
              <h2 className={`${italiana.className} text-4xl md:text-5xl text-gray-800 mb-4`}>Gourmet Delights</h2>
              <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
              <p className={`${barlow.className} text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed`}>
                From authentic flavors to spirited celebrations — Siddharth Group brings you Curry Culture and Oak Bar, where taste and togetherness meet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <Image 
                    src={`/images/P3${item}.avif`} 
                    alt={`Gourmet Food ${item}`}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center py-16"
          >
            <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
              <h3 className={`${italiana.className} text-3xl md:text-4xl text-white mb-4`}>
                Ready to Experience Luxury?
              </h3>
              <p className={`${barlow.className} text-gray-300 text-lg mb-8 max-w-2xl mx-auto`}>
                Book your stay or event with us today and discover the perfect blend of comfort, elegance, and exceptional service.
              </p>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-800 hover:bg-gray-100 font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.208-3.553-8.498"/>
                </svg>
                Start Your Journey on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}