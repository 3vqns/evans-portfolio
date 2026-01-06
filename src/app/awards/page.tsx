"use client";

import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Awards from "@/components/Awards";

export default function AwardsPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Awards />
    </main>
  );
}

