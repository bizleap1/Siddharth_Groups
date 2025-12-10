"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Premiere", path: "/premiere" },
    { name: "Naava", path: "/naava" },
    { name: "Bakery", path: "/bakery" },
    { name: "Outdoor Catering", path: "/outdoor-catering" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md"
          : "bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl md:text-3xl font-semibold transition-all duration-500 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <span className="text-yellow-500">Siddharth</span>{" "}
            <span className={scrolled ? "text-gray-800" : "text-gray-200"}>
              Group
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative text-[15px] font-medium transition-colors duration-300 ${
                    scrolled
                      ? active
                        ? "text-yellow-600"
                        : "text-gray-700 hover:text-yellow-500"
                      : active
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {item.name}
                  {/* Underline animation */}
                  <motion.span
                    layoutId="underline"
                    className={`absolute left-0 bottom-0 h-[2px] ${
                      active ? "bg-yellow-500 w-full" : "w-0"
                    } transition-all duration-300`}
                  ></motion.span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((s) => !s)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-full focus:outline-none transition-colors ${
              scrolled ? "text-gray-800 bg-white/30" : "text-white bg-transparent"
            }`}
          >
            {/* Container for 3 bars */}
            <div className="relative w-6 h-5">
              {/* top bar */}
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                style={{ originX: 0.5, originY: 0.5 }}
                className="absolute left-0 top-0 w-6 h-[2px] rounded-full bg-current block"
              />
              {/* middle bar */}
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                style={{ originX: 0.5 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[2px] rounded-full bg-current block"
              />
              {/* bottom bar */}
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                style={{ originX: 0.5, originY: 0.5 }}
                className="absolute left-0 bottom-0 w-6 h-[2px] rounded-full bg-current block"
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="md:hidden mt-3"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl py-3 shadow-lg border border-yellow-100 mx-2">
                {navItems.map((item) => {
                  const active = pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-center text-base font-medium py-3 px-4 transition-all mx-2 rounded-lg ${
                        active
                          ? "text-yellow-600 bg-yellow-50/70"
                          : "text-gray-800 hover:text-yellow-600 hover:bg-yellow-50/50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
