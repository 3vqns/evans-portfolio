import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Evans Armantrading III | Portfolio",
  description: "ML/Full-stack engineer specializing in computer vision, NLP, and high-impact projects",
  openGraph: {
    title: "Evans Armantrading III | Portfolio",
    description: "ML/Full-stack engineer specializing in computer vision, NLP, and high-impact projects",
    images: [
      {
        url: "https://3vqns.github.io/evans-portfolio/headshot-preview.png",
        width: 1792,
        height: 1800,
        alt: "Evans Armantrading III",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evans Armantrading III | Portfolio",
    description: "ML/Full-stack engineer specializing in computer vision, NLP, and high-impact projects",
    images: ["https://3vqns.github.io/evans-portfolio/headshot-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
