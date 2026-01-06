"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "./MotionTokens";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-cream-50 mb-4">
            About
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src="/headshot.png"
              alt="Evans Armantrading III"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5 max-w-3xl"
          >
            <p className="text-xl text-cream-50/80 leading-relaxed">
              I&apos;m an applied machine learning engineer focused on building real-world systems across computer vision and NLP (Natural Language Processing). My work spans conservation research, AI detection, and security-focused applications, where I&apos;ve delivered measurable outcomes through both individual and team-based projects.
            </p>
            <p className="text-xl text-cream-50/80 leading-relaxed">
              What sets me apart is my ability to lead technical work and clearly communicate complex ideas. I&apos;ve guided collaborative ML and software projects while translating advanced concepts into clear, actionable insights for researchers, judges, and non-technical audiences—especially in competitive and research-driven environments where communication is as critical as engineering.
            </p>
            <p className="text-xl text-cream-50/80 leading-relaxed">
              Outside of engineering, I played basketball throughout high school and currently compete on a college club team. These experiences reinforced discipline, teamwork, and performing under pressure—skills that directly shape how I approach technical challenges and collaboration.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

