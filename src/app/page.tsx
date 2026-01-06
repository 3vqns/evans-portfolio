"use client";

import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Awards from "@/components/Awards";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import { projects } from "@/data/projects";

export default function Home() {
  const router = useRouter();

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects#project-${projectId}`);
  };

  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />

      <Hero />

      <About />

      <SelectedWork projects={projects} onProjectClick={handleProjectClick} />

      <Awards />

      <Resume />

      <Contact />
    </main>
  );
}
