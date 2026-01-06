# Evans Armantrading III - Portfolio Website

A modern, premium portfolio website featuring scroll-driven 3D project backgrounds, built with Next.js, React Three Fiber, and Framer Motion.

## Features

- **Scroll-Driven 3D Animations**: Each project section features a unique 3D scene that animates based on scroll progress
- **Project Search & Filter**: Search projects by title, tech stack, or tags, and filter by category
- **Responsive Design**: Desktop-first experience with mobile fallbacks to static images
- **Accessibility**: Respects `prefers-reduced-motion` and provides proper contrast
- **Premium Minimal Design**: Emerald green + dark jungle green + cream color palette

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React Three Fiber** + **drei** for 3D graphics
- **Framer Motion** for animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page with all sections
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Nav.tsx           # Navigation component
│   ├── Section.tsx       # Section wrapper
│   ├── ProjectCard.tsx   # Project card component
│   ├── ProjectSearch.tsx # Project search/filter
│   ├── ResumeCTA.tsx     # Resume download CTA
│   └── ContactCTA.tsx    # Contact section CTA
├── three/
│   ├── PortfolioCanvas.tsx # Main 3D canvas
│   ├── SceneManager.tsx    # Scene switching logic
│   └── scenes/            # Individual 3D scenes
│       ├── SturgeonScene.tsx
│       ├── AIIDScene.tsx
│       ├── GonePhishinScene.tsx
│       ├── FICOScene.tsx
│       ├── BlackJackScene.tsx
│       └── ExpenseScene.tsx
├── data/
│   └── projects.ts       # Project data
├── lib/
│   └── scrollProgress.ts # Scroll progress utilities
└── hooks/
    └── useMediaQuery.ts  # Media query hook
```

## License

MIT


