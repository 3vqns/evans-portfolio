"use client";

import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Contact />
    </main>
  );
}

