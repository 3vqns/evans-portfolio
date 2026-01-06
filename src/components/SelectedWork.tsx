"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { fadeInUp, staggerContainer } from "./MotionTokens";

interface SelectedWorkProps {
  projects: Project[];
  onProjectClick: (projectId: string) => void;
}

const categories: Array<"All" | Project["category"]> = [
  "All",
  "Research/ML",
  "Security",
  "Full-Stack",
  "Java/OOP",
];

export default function SelectedWork({ projects, onProjectClick }: SelectedWorkProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | Project["category"]>("All");

  // Filter projects - empty search shows all projects
  const filteredProjects = useMemo(() => {
    const trimmedQuery = searchQuery.trim();
    return projects.filter((project) => {
      const matchesSearch =
        trimmedQuery === "" ||
        project.title.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(trimmedQuery.toLowerCase())) ||
        project.stack.some((tech) => tech.toLowerCase().includes(trimmedQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [projects, searchQuery, selectedCategory]);

  return (
    <section id="projects" className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-cream-50 mb-4">
            My Work
          </h2>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search Input */}
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search projects, tech, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-cream-50/5 border border-emerald-500/20 rounded-lg text-cream-50 placeholder-cream-50/40 focus:outline-none focus:border-emerald-500/50 focus:bg-cream-50/10 transition-all"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-emerald-500 text-white"
                    : "bg-cream-50/5 text-cream-50/70 border border-emerald-500/20 hover:border-emerald-500/40 hover:text-cream-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          key={`${filteredProjects.length}-${searchQuery}-${selectedCategory}`}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp} className="flex">
              <ProjectCard
                project={project}
                onClick={() => onProjectClick(project.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-cream-50/50 text-lg">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

