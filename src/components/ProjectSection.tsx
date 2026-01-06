"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";
import { fadeInUp, maskReveal } from "./MotionTokens";

interface ProjectSectionProps {
  project: Project;
}

export default function ProjectSection({ project }: ProjectSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.3]);
  
  // Frame overlay animation
  const frameScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const frameOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Metric counter (simplified - triggers once when in view)
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
      if (latest > 0.2 && !hasCounted) {
        setHasCounted(true);
      }
    });
    return unsubscribe;
  }, [scrollYProgress, hasCounted]);

  // Use metrics from project data if available
  const metrics = project.metrics || [];

  return (
    <section
      id={`project-${project.id}`}
      ref={sectionRef}
      className="min-h-screen py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Title */}
            <div>
              <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4 block">
                {project.category}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-50 mb-6 leading-tight">
                {project.title}
              </h2>
            </div>

            {/* Outcome */}
            <motion.div
              variants={maskReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-cream-50/80 leading-relaxed">
                {project.outcome}
              </p>
            </motion.div>

            {/* Metrics */}
            {metrics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-6 pt-6 border-t border-emerald-500/20"
              >
                {metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                      {hasCounted ? metric.value : "—"}
                    </div>
                    <div className="text-sm text-cream-50/60 uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Detailed Description */}
            {project.detailedDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-6 border-t border-emerald-500/20"
              >
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                  Overview
                </h3>
                <p className="text-cream-50/80 leading-relaxed">
                  {project.detailedDescription}
                </p>
              </motion.div>
            )}

            {/* Key Achievements */}
            {project.keyAchievements && project.keyAchievements.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-emerald-500/20"
              >
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                  Highlights
                </h3>
                <ul className="space-y-2">
                  {project.keyAchievements.map((achievement, idx) => (
                    <li key={idx} className="text-cream-50/80 leading-relaxed flex items-start">
                      <span className="text-emerald-400 mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Role & Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="space-y-4 pt-6 border-t border-emerald-500/20"
            >
              <div>
                <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  My Role
                </h3>
                <p className="text-cream-50/80">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  Tech Snapshot
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual with parallax and frame overlay */}
          <motion.div
            style={{ y: imageY, opacity: imageOpacity }}
            className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden"
          >
            {/* Image with parallax */}
            <div className="absolute inset-0">
              <Image
                src={`/evans-portfolio/posters/${project.sceneId}.png`}
                alt={project.title}
                fill
                className={
                  project.sceneId === "fico"
                    ? "object-cover object-left-top"
                    : project.sceneId === "expense"
                    ? "object-contain"
                    : "object-cover"
                }
              />
            </div>

            {/* Frame overlay (emerald/cream lines) */}
            <motion.div
              style={{ scale: frameScale, opacity: frameOpacity }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Top line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-400 origin-left"
              />
              {/* Bottom line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 origin-right"
              />
              {/* Left line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-0 bottom-0 left-0 w-0.5 bg-emerald-400 origin-top"
              />
              {/* Right line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-0 bottom-0 right-0 w-0.5 bg-emerald-400 origin-bottom"
              />
            </motion.div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-jungle-900/40 via-transparent to-jungle-900/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

