"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { durations, easing } from "./MotionTokens";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Awards", href: "/awards" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              // Mark as active if pathname matches
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium relative group transition-colors ${
                    isActive
                      ? "text-emerald-400"
                      : "text-cream-50/80 hover:text-emerald-400"
                  }`}
                >
                  <motion.span whileHover={{ y: -2 }}>
                    {item.label}
                  </motion.span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
          </div>
          <div className="md:hidden relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cream-50/90 hover:text-emerald-400 transition-colors"
            >
              Menu
            </button>
            
            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 top-full mt-2 w-48 bg-jungle-900/95 backdrop-blur-md border border-emerald-500/20 rounded-lg shadow-lg overflow-hidden"
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-emerald-400 bg-emerald-500/10"
                          : "text-cream-50/80 hover:text-emerald-400 hover:bg-cream-50/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

