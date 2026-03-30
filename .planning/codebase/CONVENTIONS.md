# Coding Conventions

## Code Style
- Single quotes / double quotes handled by Prettier / ESLint.
- Uses absolute imports mapped via `tsconfig.json` paths (`@/components/*`, `@/sections/*`, etc.).
- React 19 / functional components everywhere. RSC (React Server Components) supported/enabled.

## Styling Patterns
- Utility-first CSS using Tailwind.
- Uses `clsx` and `tailwind-merge` utility functions (`cn()`) to construct reusable and conditional `className` strings.
- Incorporates dynamic visual effects inline or through reusable functional components (e.g. `<Aurora />` passing in configuration props).

## Error Handling
- Currently, no major centralized error boundary patterns (`error.tsx`) in the Next.js `app/` directory. Next.js's standard React error overlays handle development issues. No heavy backend data fetching means complex API error state handling is minimal/non-existent.
