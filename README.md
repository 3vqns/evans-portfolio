# Evans Armantrading III - Portfolio Website

A modern, premium portfolio website built with Next.js and Framer Motion.

## Features

- **Project Search & Filter**: Search projects by title, tech stack, or tags, and filter by category
- **Responsive Design**: Fully responsive with mobile-optimized layouts
- **Accessibility**: Respects `prefers-reduced-motion` and provides proper contrast
- **Premium Minimal Design**: Emerald green + dark jungle green + cream color palette
- **Scroll-driven Animations**: Smooth parallax effects and scroll-triggered reveals

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
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
│   ├── page.tsx          # Main home page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   ├── about/            # About page
│   ├── awards/           # Awards page
│   ├── contact/          # Contact page
│   ├── projects/         # Projects detail page
│   └── resume/           # Resume page
├── components/
│   ├── Nav.tsx           # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── SelectedWork.tsx  # Project gallery with search/filter
│   ├── ProjectCard.tsx   # Project card component
│   ├── ProjectSection.tsx # Full project detail section
│   ├── Awards.tsx        # Awards section
│   ├── Resume.tsx        # Resume download section
│   ├── Contact.tsx       # Contact section
│   ├── ScrollProgress.tsx # Scroll progress indicator
│   └── MotionTokens.ts   # Animation system
├── data/
│   └── projects.ts       # Project data
├── hooks/
│   └── useMediaQuery.ts  # Media query hook
└── lib/
    └── scrollProgress.ts # Scroll utilities
```

## License

MIT


