"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import ProjectSection from "@/components/ProjectSection";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  useEffect(() => {
    // Handle hash navigation from main page
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />

      {/* Page Header */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream-50 mb-6">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-cream-50/70 max-w-3xl mx-auto">
            A deep dive into the work I&apos;ve built—from computer vision research to full-stack applications.
          </p>
        </div>
      </section>

      {/* Individual Project Detail Sections */}
      {projects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </main>
  );
}

