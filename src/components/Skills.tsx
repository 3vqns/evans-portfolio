"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./MotionTokens";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "C++"],
  },
  {
    label: "Frameworks & Tools",
    skills: ["FastAPI", "Next.js", "React", "Tailwind CSS", "Google Gemini API", "PyTorch", "YOLO", "Git"],
  },
  {
    label: "Cloud & Databases",
    skills: ["PostgreSQL", "Supabase", "REST APIs", "AWS Rekognition", "Cloudinary"],
  },
  {
    label: "Operating Systems",
    skills: ["macOS", "Windows", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-cream-50 mb-4">
            Skills
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {skillGroups.map((group, index) => (
            <motion.div key={index} variants={fadeInUp} className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-cream-50/50 uppercase tracking-widest">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 text-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
