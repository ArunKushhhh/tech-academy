# Project Research: Stack

## Environment
- **Domain:** Static Website for Educational Institute
- **Context:** Subsequent milestone (Adding catalog, info, and contact form to existing React/Next.js skeleton)

## Standard Architecture
**Standard 2025 Stack:**
- **Framework:** Next.js (App Router) for static site generation (SSG) / React
- **Styling:** Tailwind CSS + Radix UI / shadcn/ui
- **Animation:** GSAP, Framer Motion
- **Hosting/Deployment:** Vercel or Netlify (optimized for static exports or Edge caching)
- **Forms:** Web3Forms, Formspree, or Resend (for serverless email sending without a DB)

## Recommendations
1. **Next.js Static Export:** Export the site as static HTML via `output: 'export'` in `next.config.ts` if no server-side renders are strictly necessary. This significantly improves load speed and reduces hosting costs.
2. **Form Integration:** Use **Web3Forms** or **Resend**. They integrate perfectly with static sites and React, offering serverless endpoints to handle form submissions without needing to maintain an Express/Node backend.

## Anti-Recommendations
- **Heavy CMS / Databases (WordPress, PostgreSQL):** Overkill since the requirement is a static landing page funneling students to a contact form.
- **Client-heavy SPA (e.g., raw React + Vite without pre-rendering):** Poor SEO for an educational institute. Next.js pre-rendering solves this.
