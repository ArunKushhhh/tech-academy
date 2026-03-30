<!-- GSD:project-start source:PROJECT.md -->
## Project

**Tech Academy**

A single-page static website for an educational institute named "Tech Academy". It serves as a landing page aimed at prospective students and their parents, providing information on the academy's courses and philosophy, with the primary objective of driving inquiries via a contact form.

**Core Value:** Connect students and parents with the right educator quickly and intuitively through a highly accessible contact form.

### Constraints

- **Architecture**: Single-page structure — keep routing flat and use scroll anchoring.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Core Technologies
- Language: TypeScript (v5), React (v19)
- Framework: Next.js (v16.2.1 - App Router)
- Styling: Tailwind CSS (v4) with `tailwind-merge` and `clsx`
- Package Manager: pnpm
## UI & Animation
- Components: shadcn/ui (`radix-nova` style)
- Icons: `lucide-react`, `react-icons`
- Animation: GSAP (`@gsap/react`, `gsap`), Motion (`motion`), `tw-animate-css`
- 3D/Canvas: `@react-three/fiber`, `three`, `ogl`
## Build & Tooling
- Linting: ESLint (v9)
- Type Checking: TypeScript
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

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
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

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
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
