"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";
import { hoverLift, hoverScale } from "./MotionTokens";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="group cursor-pointer w-full"
      onClick={onClick}
    >
      <div className="relative bg-cream-50/5 backdrop-blur-sm border border-emerald-500/20 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-emerald-500/40 min-h-[600px]">
        {/* Image placeholder */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <Image
            src={`/evans-portfolio/posters/${project.sceneId}.png`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-jungle-900/80 via-jungle-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category badge */}
          <div className="mb-3">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-cream-50 mb-3 group-hover:text-emerald-300 transition-colors">
            {project.title}
          </h3>

          {/* Outcome preview */}
          <p className="text-cream-50/70 text-sm md:text-base mb-4 line-clamp-2">
            {project.outcome.replace(/\*\*/g, "")}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View indicator */}
          <div className="flex items-center gap-2 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
            <span className="text-sm font-medium">View Project</span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
