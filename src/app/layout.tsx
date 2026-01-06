import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


