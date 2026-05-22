"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./MotionTokens";

const experiences = [
  {
    role: "Founder & CEO",
    company: "Evans Estates LLC",
    dateRange: "Jan 2024 – Present",
    highlights: [
      "Founded a real estate investment and renovation company managing full-scale property flips end-to-end",
      "Coordinated contractors, obtained city permits, and budgeted renovations with spreadsheet automation",
      "Oversaw redesign of electrical, plumbing, and interior layouts to meet safety and market value standards",
      "Applied SCRUM methodology to manage timelines and workflow",
    ],
  },
  {
    role: "Research Intern",
    company: "CIBiLI",
    dateRange: "Jul 2024 – Present",
    highlights: [
      "Developed Python scripts to classify pixelated vs. clear sonar images for aquatic research",
      "Built YOLOv8 image detection pipeline (93% accuracy) to identify fish breaching from rivers",
      "Created and augmented a dataset in Roboflow, trained with PyTorch, analyzed precision/recall",
      "Deployed a real-time detection system for ecological conservation",
      "Presented at MAC-AFS Conference and won 1st place",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-cream-50 mb-4">
            Experience
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="h-full bg-cream-50/5 backdrop-blur-sm border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-all duration-300 hover:bg-cream-50/10 p-8 flex flex-col gap-4">
                <div>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-xl font-bold text-cream-50">{exp.role}</h3>
                      <p className="text-emerald-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-cream-50/50 whitespace-nowrap">{exp.dateRange}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((point, i) => (
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
