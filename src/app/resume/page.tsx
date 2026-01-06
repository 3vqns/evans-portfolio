"use client";

import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Resume from "@/components/Resume";

export default function ResumePage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Resume />
    </main>
  );
}

