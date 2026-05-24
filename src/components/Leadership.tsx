"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./MotionTokens";

const leadershipEntries = [
  {
    icon: "🤖",
    title: "Boston Dynamics Spot Operator — \"Opportunity Lives Here\"",
    dateRange: "May 2026",
    highlights: [
      "Served as the main operator of a Boston Dynamics Spot robot at a high-profile Delaware AI event hosted by Senator Darius Brown at The Queen in Wilmington",
      "Operated alongside DSU students Edaijah Rodriguez, James Jordan III, Michael Danquah-Tabbi, and Jared Bryant",
      "Event brought together senators, executives, educators, and Dr. Tony Allen to discuss AI and innovation in Delaware",
    ],
  },
  {
    icon: "🎤",
    title: "Speaker — Delaware General Assembly Capital Bond Committee",
    dateRange: "May 2026",
    highlights: [
      "Testified before the Delaware General Assembly's Capital Bond Committee at Legislative Hall in support of Delaware State University",
      "Shared experience as an Inspire Scholar and junior CS major, representing the impact of DSU's research and scholarship programs",
      "Invited by DSU President Dr. Tony Allen and VP Pia Z. Stokes",
    ],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-cream-50 mb-4">
            Leadership
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {leadershipEntries.map((entry, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="h-full bg-cream-50/5 backdrop-blur-sm border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-all duration-300 hover:bg-cream-50/10 p-8 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{entry.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-cream-50 leading-snug">{entry.title}</h3>
                    <p className="text-sm text-cream-50/50 mt-1">{entry.dateRange}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {entry.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3 text-cream-50/70 text-sm leading-relaxed">
                      <span className="text-emerald-400 mt-1 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
