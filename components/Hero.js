"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Italiana, Barlow } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const italiana = Italiana({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: "400", subsets: ["latin"] });

const slides = [
  {
    id: 1,
    image: "/images/Hero3.jpg",
    location: "CHANDRAPUR",
    title: "SIDDHARTH PREMIERE",
    offer: "Luxury Suite & Deluxe Rooms",
    link: "/premiere",
  },
  {
    id: 2,
    image: "/images/Hero1.avif",
    location: "CHANDRAPUR",
    title: "NAAVA",
    offer:
      "Indulge in a culinary journey that blends tradition with modernity, crafted for discerning palates.",
    link: "/naava",
  },
  {
    id: 3,
    image: "/images/Hero2.avif",
    location: "CHANDRAPUR",
    title: "OUTDOOR CATERING",
    offer:
      "Siddharth Group also specializes in outdoor catering, offering not just delicious food but complete arrangements.",
    link: "/outdoor-catering",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  const handleExplore = () => {
    router.push(slide.link);
  };

  return (
    <section className="relative w-full h-auto md:h-[102vh] -mt-20 overflow-hidden bg-black">
      {/* Background Image */}
      <div className="relative w-full h-[45vh] md:h-full">
        <Image
          key={slide.id}
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className="object-cover object-center transition-all duration-[1200ms] ease-in-out"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Desktop Text Box */}
        <div className="hidden md:flex absolute inset-0 justify-center items-center z-10">
          <div className="bg-black/40 backdrop-blur-sm px-12 py-10 rounded-2xl text-center max-w-2xl border border-[#d4af37]/30">
            <p
              className={`${barlow.className} text-[#d4af37]/90 text-sm tracking-[3px] uppercase`}
            >
              📍 {slide.location}
            </p>

            <h1
              className={`${italiana.className} text-[#f5e6c8] text-6xl font-normal mt-3 leading-tight drop-shadow-lg`}
            >
              {slide.title}
            </h1>

            <p
              className={`${barlow.className} text-gray-300 text-lg mt-3 leading-relaxed`}
            >
              {slide.offer}
            </p>

            <button
              onClick={handleExplore}
              className={`${barlow.className} mt-6 border border-[#d4af37] text-[#d4af37] px-6 py-2 rounded-md text-base hover:bg-[#d4af37] hover:text-black transition`}
            >
              EXPLORE NOW →
            </button>
          </div>
        </div>

        {/* Arrows (Desktop Only) */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 p-3 rounded-full transition hidden md:block border border-[#d4af37]/40"
        >
          <ChevronLeft className="text-[#d4af37] w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 p-3 rounded-full transition hidden md:block border border-[#d4af37]/40"
        >
          <ChevronRight className="text-[#d4af37] w-5 h-5" />
        </button>

        {/* Dots (Desktop Only) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 hidden md:flex">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-[#d4af37]" : "bg-[#d4af37]/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Text Box */}
      <div className="md:hidden relative z-20 -mt-14 px-4">
        <div className="bg-black/95 backdrop-blur-sm rounded-2xl shadow px-6 py-5 text-center border border-[#d4af37]/40">
          <p
            className={`${barlow.className} text-[#d4af37]/80 text-xs tracking-[3px] uppercase`}
          >
            📍 {slide.location}
          </p>

          <h1
            className={`${italiana.className} text-[#f5e6c8] text-2xl font-normal mt-2 leading-tight`}
          >
            {slide.title}
          </h1>

          <p
            className={`${barlow.className} text-gray-300 text-sm mt-2 leading-relaxed`}
          >
            {slide.offer}
          </p>

          <button
            onClick={handleExplore}
            className={`${barlow.className} mt-4 border border-[#d4af37] text-[#d4af37] px-5 py-2 rounded-md text-xs hover:bg-[#d4af37] hover:text-black transition`}
          >
            EXPLORE NOW →
          </button>

          {/* Mobile Arrows Inside Text Box */}
          <div className="flex justify-center gap-6 mt-4">
            <button
              onClick={prevSlide}
              className="bg-black border border-[#d4af37]/50 text-[#d4af37] p-2 rounded-full active:scale-95 transition"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black border border-[#d4af37]/50 text-[#d4af37] p-2 rounded-full active:scale-95 transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
