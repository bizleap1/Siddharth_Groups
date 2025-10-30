"use client";

import { useState } from "react";
import Image from "next/image";
import { Italiana, Barlow } from "next/font/google";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const italiana = Italiana({ weight: "400", subsets: ["latin"] });
const barlow = Barlow({ weight: ["400", "600"], subsets: ["latin"] });

export default function Contact() {
  const whatsappNumber = "918412800000"; // No '+' sign
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    const text = `New Enquiry from Siddharth Hotels Website:
    
Name: ${name}
Email: ${email}
Message: ${message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <main className="w-full min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-visible">
        <div className="relative w-full h-[50vh] md:h-[70vh] -mt-[80px]">
          <Image
            src="/images/Hero2.avif" // replace with your hero banner
            alt="Contact Siddharth Hotels"
            fill
            priority
            className="object-cover object-center w-full"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-20 flex justify-center">
          <div className="-mt-[120px] bg-white rounded-2xl shadow-lg border border-gray-200 w-[90%] max-w-4xl p-8 md:p-10 text-center">
            <h1
              className={`${italiana.className} text-4xl md:text-5xl text-gray-800 mb-4`}
            >
              Contact Us
            </h1>
            <p
              className={`${barlow.className} text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed`}
            >
              We'd love to hear from you! Reach out for bookings, feedback, or
              any inquiries — our team is always happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-gray-800 text-xl" />
              <span className={`${barlow.className} text-lg font-semibold`}>
                care@siddharthhotels.com
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-gray-800 text-xl" />
              <span className={`${barlow.className} text-lg font-semibold`}>
                +91 84128 00000
              </span>
            </div>
          </motion.div>

          {/* Socials */}
          <div className="flex justify-center gap-5 mt-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.instagram.com/siddharthhotels/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <FaInstagram className="text-3xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.facebook.com/HotelSiddharthPremiere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <FaFacebookF className="text-3xl" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="pb-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`${barlow.className} block text-gray-700 font-semibold mb-2`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`${barlow.className} block text-gray-700 font-semibold mb-2`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`${barlow.className} block text-gray-700 font-semibold mb-2`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-800"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Send Message via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
