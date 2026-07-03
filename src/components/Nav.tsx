"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { durations, easing } from "./MotionTokens";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Awards", href: "/#awards" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: durations.med, ease: easing.primary }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-jungle-900/80 backdrop-blur-md shadow-lg border-b border-emerald-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              EA<span className="text-cream-50">III</span>
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium relative group transition-colors text-cream-50/80 hover:text-emerald-400"
              >
                <motion.span whileHover={{ y: -2 }}>
                  {item.label}
                </motion.span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden relative" ref={menuRef}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
              className="text-cream-50/90 hover:text-emerald-400 transition-colors"
            >
              Menu
            </button>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  id="mobile-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: durations.fast, ease: easing.primary }}
                  className="absolute right-0 top-full mt-2 w-52 bg-jungle-900/95 backdrop-blur-md border border-emerald-500/20 rounded-lg shadow-lg overflow-hidden"
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm font-medium transition-colors text-cream-50/80 hover:text-emerald-400 hover:bg-cream-50/5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
