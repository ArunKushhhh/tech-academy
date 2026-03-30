# Architecture

## Layers & Patterns
- **Frontend App Router**: Next.js App Router paradigm (`app/` directory).
- **Component-driven Design**: UI composed of discrete structural blocks built mainly with React.
- **Section Pattern**: Complex logical sections of the app are separated into a dedicated `sections/` directory (e.g., `hero.tsx`, `footer.tsx`, `programs.tsx`).
- **Interactive UI Paradigm**: Heavy emphasis on frontend UI, animations, and micro-interactions powered by GSAP, three.js, and shadcn.

## Data Flow
- Standard React uni-directional data flow using functional components and hooks.
- Currently, static content configuration is passed directly at the page level (e.g., `items` config in `app/page.tsx`). No server actions or external data fetching mechanisms are immediately apparent.

## Key Entry Points
- `app/layout.tsx`: Root layout for the application.
- `app/page.tsx`: Main entry point for the homepage, orchestrating layout and importing components and sections.
