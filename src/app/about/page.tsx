"use client";

import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <About />
    </main>
  );
}

