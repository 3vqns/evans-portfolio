
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
  {
    title: "1st Place - Delaware State University Hackathon",
    description: "PictureMe, a live event photo-matching platform powered by AWS Rekognition, won first place at the DSU Hackathon. Built and shipped in a single hackathon session with a team.",
    icon: "🏆",
    imagePath: null,
  },
  {
    title: "1st Place - University of Delaware Hackathon",
    description: "Smooth-Cruize, a full-stack pothole detection platform using YOLOv8 and Google Gemini, won first place at the UD Hackathon. Led development of the full-stack system across Python backend and Next.js frontend.",
    icon: "🏆",
    imagePath: null,
  },
];

function AwardCard({ award }: { award: typeof awards[0] }) {
  return (
    <motion.div variants={fadeInUp} className="relative group">
      <div className="h-full bg-cream-50/5 backdrop-blur-sm border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-all duration-300 hover:bg-cream-50/10 overflow-hidden flex flex-col">
        {/* Portrait image */}
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          {award.imagePath ? (
            <Image
              src={award.imagePath}
              alt={award.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cream-50/5 to-jungle-900/40">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-emerald-500/30 mb-3"
              >
                <path d="M6 4h12v6a6 6 0 01-12 0V4z" />
                <path d="M6 7H3a1 1 0 000 2c0 2.5 1.5 4.5 3.5 5.5" />
                <path d="M18 7h3a1 1 0 010 2c0 2.5-1.5 4.5-3.5 5.5" />
                <path d="M12 16v4" />
                <path d="M8 20h8" />
              </svg>
              <span className="text-cream-50/25 text-xs uppercase tracking-[0.15em]">Photo coming</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 flex-1 flex flex-col">
          <div className="text-5xl mb-6">{award.icon}</div>
          <h3 className="text-2xl font-bold text-cream-50 mb-4 group-hover:text-emerald-300 transition-colors">
            {award.title}
          </h3>
          <p className="text-cream-50/70 leading-relaxed">{award.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Awards() {
  const firstRow = awards.slice(0, 3);
  const lastRow = awards.slice(3);

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

        {/* First row: 3 cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {firstRow.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </motion.div>

        {/* Last row: remaining cards, centered */}
        {lastRow.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`grid grid-cols-1 gap-8 mt-8 mx-auto ${
              lastRow.length === 1
                ? "md:grid-cols-1 md:max-w-sm"
                : "md:grid-cols-2 md:max-w-2xl"
            }`}
          >
            {lastRow.map((award, index) => (
              <AwardCard key={index + firstRow.length} award={award} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
