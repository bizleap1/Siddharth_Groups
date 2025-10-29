"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md py-2"
          : "bg-black/05 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl md:text-3xl font-semibold tracking-wide transition-all duration-500 ${
              scrolled ? "text-gray-900" : "text-white drop-shadow-md"
            }`}
          >
            <span className="text-yellow-500">Siddharth</span>{" "}
            <span className="text-gray-200">Group</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`relative text-[15px] font-medium tracking-wide transition-all duration-500 ${
                  scrolled
                    ? "text-gray-800 hover:text-yellow-600"
                    : "text-white hover:text-yellow-300 drop-shadow-md"
                }`}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none transition-all duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="md:hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-3 py-4 shadow-xl border border-yellow-100"
            >
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center text-lg font-medium text-gray-800 hover:text-yellow-600 transition-all py-3 hover:bg-yellow-50/70"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
