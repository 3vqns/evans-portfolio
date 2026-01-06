
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "./MotionTokens";

const awards = [
  {
    title: "1st Place - MAC-AFS Conference",
    description: "AI-Driven Sturgeon Breach Detection project earned first place at the MAC-AFS Conference, competing against graduate-level research and demonstrating excellence in computer vision applications for conservation research.",
    icon: "🏆",
    imagePath: "/evans-portfolio/awards/MACAFS_Presentation_Pic.png",
  },
  {
    title: "3rd Place - Delaware State University Hackathon",
    description: "Gone Phishin' Chrome extension secured third place at the Delaware State University Hackathon as part of a team project, delivering real-time phishing detection in the browser using AI-based email analysis.",
    icon: "🥉",
    imagePath: "/evans-portfolio/awards/2025_DSU_Hackathon.jpeg",
  },
  {
    title: "Challenge Winners - FICO Educational Analytics Challenge",
    description: "Won the FICO Educational Analytics Challenge as part of The Transformers team, achieving ~92% accuracy on the official golden dataset for customer conversation intent classification under noisy, real-world conditions.",
    icon: "📊",
    imagePath: "/evans-portfolio/awards/FICO_Logo.png",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-cream-50 mb-4">
            Awards & Recognition
          </h2>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="h-full bg-cream-50/5 backdrop-blur-sm border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-all duration-300 hover:bg-cream-50/10 overflow-hidden flex flex-col">
                {/* Portrait Image Slot */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  {award.imagePath ? (
                    <Image
                      src={award.imagePath}
                      alt={`${award.title} presentation`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream-50/10 to-jungle-900/30 border-b border-emerald-500/20 rounded-t-lg">
                      <span className="text-cream-50/40 text-sm">Presentation photo</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="text-5xl mb-6">{award.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-cream-50 mb-4 group-hover:text-emerald-300 transition-colors">
                    {award.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-cream-50/70 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

