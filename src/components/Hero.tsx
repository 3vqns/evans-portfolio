"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./MotionTokens";

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Subtle background grain */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-cream-50 leading-tight"
        >
          Evans Armantrading III
        </motion.h1>

        {/* Headline */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-400 leading-relaxed max-w-4xl mx-auto font-light"
        >
          Applied machine learning systems with real-world impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="https://www.linkedin.com/in/evansiii/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Connect on LinkedIn
          </motion.a>
          
          <motion.a
            href="#projects"
            whileHover={{ y: -2, opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-transparent border-2 border-emerald-500 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-colors duration-200"
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

