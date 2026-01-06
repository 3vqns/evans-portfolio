import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evans Armantrading III | Portfolio",
  description: "ML/Full-stack engineer specializing in computer vision, NLP, and high-impact projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


