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

## Assets

Place your project poster images in `public/posters/`:
- `sturgeon.jpg`
- `aiid.jpg`
- `gonephishin.jpg`
- `fico.jpg`
- `blackjack.jpg`
- `expense.jpg`

Place your resume PDF at `public/resume.pdf`.

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette.

### Projects

Edit `src/data/projects.ts` to add, remove, or modify projects.

### 3D Scenes

Each scene in `src/three/scenes/` can be customized. The `progress` prop (0-1) represents scroll progress through the section.

## Deployment

### GitHub Pages

This project is configured for static export and deployed to GitHub Pages at:
**https://3vqns.github.io/evans-portfolio/**

Deployment is automated via GitHub Actions. On every push to `main`, the site is built and deployed automatically.

**Local Build:**
```bash
npm run build
```

The static export will be generated in the `out/` directory.

**GitHub Pages Settings:**
- Go to your repository Settings → Pages
- Source should be set to "GitHub Actions"
- The workflow will deploy automatically on push to `main`

## License

MIT


