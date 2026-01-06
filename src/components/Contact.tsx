"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./MotionTokens";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen pt-32 pb-64 px-6 flex items-center justify-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold text-cream-50 mb-8"
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-cream-50/70 mb-12 max-w-2xl mx-auto"
        >
          Interested in discussing opportunities, learning more about my experience, or exploring how I can contribute to your team? I&apos;d love to hear from you.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.a
            href="https://www.linkedin.com/in/evansiii/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Connect on LinkedIn
          </motion.a>

          <motion.a
            href="https://github.com/3vqns"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-transparent border-2 border-emerald-500 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-colors duration-200"
          >
            View GitHub
          </motion.a>
        </motion.div>

        {/* Minimal Footer */}
        <motion.div
          variants={fadeInUp}
          className="pt-12 border-t border-emerald-500/20"
        >
          <p className="text-cream-50/50 text-sm">
            © {new Date().getFullYear()} Evans Armantrading III. Built with Next.js & Framer Motion.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

