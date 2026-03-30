# Project Structure

## Directory Layout
- `app/`: Next.js App Router entry points (pages, layouts, globals.css).
- `components/`: Reusable UI elements, animations (e.g., `aurora.tsx`, `laser-flow.tsx`), and the `ui/` directory containing primitive components from shadcn.
- `sections/`: High-level composing parts of a given page (e.g., `hero.tsx`, `footer.tsx`, `programs.tsx`, `testimonials.tsx`).
- `lib/`: Utility functions and shared logic (e.g., `utils.ts`).
- `public/`: Static files like `favicon.ico` or `logo.svg`.
- `.planning/`: Project planning artifacts and documentation maps (managed by GSD).

## Naming Conventions
- React components and sections use `kebab-case` for file names (e.g., `laser-flow.tsx`, `spotlight-card.tsx`).
- Functional components within files are typically `PascalCase` (e.g., `export default function Home()`).
