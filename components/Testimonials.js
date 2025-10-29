"use client";

import { motion } from "framer-motion";
import { Italiana, Barlow } from "next/font/google";

const italiana = Italiana({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: ["400", "500"], subsets: ["latin"] });

export default function Testimonials() {
  const reviews = [
    {
      text: "Loved it!! We stayed with our family for 3–4 days and the experience was awesome. The hotel staff were friendly, food was good, WiFi was fast. Overall 5/5 experience!",
      name: "Subhashis Das",
      place: "Kolkata",
    },
    {
      text: "It was a very pleasant stay! The view from the room was fantastic. The staff were cooperative and I’d definitely recommend this hotel for families.",
      name: "Anushree",
      place: "Rajasthan",
    },
    {
      text: "Amazing hospitality and beautiful interiors! Siddharth Group truly knows how to make guests feel special.",
      name: "Rahul Mehta",
      place: "Pune",
    },
    {
      text: "The food was delicious, the rooms were spotless and the staff made us feel right at home. Perfect getaway!",
      name: "Priya Sharma",
      place: "Delhi",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 text-black w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className={`${italiana.className} text-3xl sm:text-4xl md:text-5xl text-[#d4af37]`}
          >
            Testimonial
          </h2>
          <p
            className={`${barlow.className} text-gray-600 mt-2 text-base sm:text-lg`}
          >
            What our guests are saying
          </p>
        </div>

        {/* Marquee Reviews */}
        <div className="relative">
          <motion.div
            className="flex space-x-4 sm:space-x-6 md:space-x-8 animate-scroll"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="min-w-[250px] sm:min-w-[350px] md:min-w-[500px] bg-white shadow-md sm:shadow-lg rounded-xl border border-gray-200 p-4 sm:p-6 md:p-8"
              >
                <p
                  className={`${barlow.className} text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6`}
                >
                  {review.text}
                </p>
                <p
                  className={`${barlow.className} text-[#d4af37] font-semibold text-sm sm:text-base md:text-lg`}
                >
                  {review.name}{" "}
                  <span className="text-gray-500 font-normal">– {review.place}</span>
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
