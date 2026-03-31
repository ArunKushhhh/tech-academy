# Phase 3: Conversion & UX Optimization — Research

**Researcher:** Orchestrator (direct research pass)
**Date:** 2026-03-31
**Phase Requirements:** CONV-02, CONV-03, UX-01, UX-02, UX-03

---

## Executive Summary

Phase 3 involves four distinct implementation areas:
1. **Contact form** — new `sections/contact.tsx` with EmailJS integration
2. **Navigation wiring** — update navbar items config, add section `id` anchors, rename CTA buttons
3. **Footer cleanup** — update links to match real section anchors
4. **Static export** — add `output: 'export'` to `next.config.ts`

All integration patterns are well-understood. No novel architecture decisions required. This is a standard "wire it all up" phase.

---

## Codebase Findings

### Existing Architecture
- **Framework:** Next.js 16.2.1, App Router, React 19
- **Styling:** Tailwind CSS v4, `globals.css` uses `@import "tailwindcss"` — no `tailwind.config.js`
- **Component pattern:** All sections use `"use client"` directive; functional components exported as `default`
- **Section root structure:** `educator.tsx` wraps in `<section className="...">` — need to add `id` prop
- **No `useInView` currently used** — motion library present (`motion ^12.38.0`) but only `circular-text`, `experience-card`, `aurora` use animation hooks

### Dependencies Confirmed Present
| Dep | Version | Relevance |
|-----|---------|-----------|
| `motion` | ^12.38.0 | Available for contact section scroll-in animation |
| `gsap` | ^3.14.2 | Already used in nav/split-text — do NOT add to contact section |
| `lucide-react` | ^0.577.0 | Use `Mail` icon for contact section icon box |
| `react-icons` | ^5.6.0 | Available (fa6 used in footer) |
| `tw-animate-css` | ^1.4.0 | `animate-ping` equivalent available |

### Sections Without `id` Anchors (all need adding)
```
sections/hero.tsx       → root: <div className="w-full min-h-screen..."> → add id="hero"
sections/educator.tsx   → root: <section className="w-full py-24...">    → add id="educator"
sections/philosophy.tsx → root: unknown (uses Card)                       → add id="about"
sections/programs.tsx   → root: unknown (uses SpotlightCard)              → add id="programs"
sections/testimonials.tsx → root: unknown                                 → add id="testimonials"
sections/contact.tsx    → new file                                        → id="contact" built-in
```

### Hero CTA Button (confirmed location)
```tsx
// sections/hero.tsx — line ~44
<StarBorder as="button" color="#1447E6" speed="5s">
  Join Now
</StarBorder>
```
Change to `as="a" href="#contact"` and text → "Contact Us".

### StarBorder Component Internals (important for submit button)
The `StarBorder` inner div has `background: 'linear-gradient(to bottom, #000, #111827)'` hardcoded in inline styles. The button always renders dark internally. This is fine for the CTA buttons. For the form submit, wrap it with `type="submit"` by passing `as="button"` — the `...rest` spread will pass `type`, `disabled`, and `onClick` through correctly.

### `app/globals.css` (current state)
```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@custom-variant dark (&:is(.dark *));
@theme inline { ... }
```
**Add `scroll-behavior: smooth` to the `html` element** — best placed after the `@theme` block or via a `@layer base` block to work with Tailwind v4.

### `next.config.ts` (current state)
```ts
const nextConfig: NextConfig = {};
```
Clean — just add `output: 'export'` and optionally `images: { unoptimized: true }` (needed because Next.js Image Optimization is incompatible with static export, and the educator section uses `next/image`).

### `public/` assets
`globe.svg` exists but is a generic globe icon (not a world map). Need a proper world map SVG/image for the contact section. Options:
- **Option A:** Use `public/globe.svg` at large size with low opacity as decorative background (quick, but may look wrong)
- **Option B:** Inline a minimal world map SVG (dots/paths for continents) — better visual fidelity
- **Option C:** Use a world map image from a CDN / open-source (e.g., Natural Earth data simplified SVG) — most accurate, no extra deps
- **Recommendation: Option B** — inline a simplified SVG world map (paths for land masses, ~2KB) directly in the contact component. No network dependency, no `<Image>` issues with static export.

---

## EmailJS Integration Research

### Install
```bash
pnpm add @emailjs/browser
```

### Recommended pattern for React (from official docs)
Two approaches — `sendForm` (uses `<form ref>`) or `send` (uses an object). **Use `send()` with controlled state** for this implementation since it gives cleaner TypeScript and avoids `useRef` on the form:

```tsx
import emailjs from '@emailjs/browser';

// In submit handler:
const result = await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    user_name: formData.name,
    user_email: formData.email,
    user_company: formData.company,
    message: formData.message,
  },
  { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
);
```

**OR use `sendForm` with `useRef`** (simpler, less state management):
```tsx
const formRef = useRef<HTMLFormElement>(null);
await emailjs.sendForm(serviceId, templateId, formRef.current!, { publicKey });
```

**Decision: Use controlled state (`send()`)** — avoids `name` attribute dependency, easier to validate pre-send, and aligns with React best practices for controlled inputs. The `sendForm` approach ties validation to DOM `name` attrs which are harder to test.

### EmailJS Template Variables
When using `send()` with an object, variable names in the EmailJS template must match the object keys:
- `{{user_name}}` → Full Name
- `{{user_email}}` → Email Address  
- `{{user_company}}` → Company/Institution
- `{{message}}` → Message body

### Environment Variables
`.env.local` (gitignored by default in Next.js):
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```
These are `NEXT_PUBLIC_` so they're embedded at build time — compatible with static export.

### `.env.local.example` to commit
Always commit an example file (without real values) so the educator knows what to fill in:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

---

## Smooth Scrolling Research

### CSS approach (recommended — no JS needed)
```css
/* In globals.css, inside @layer base or as a top-level rule */
html {
  scroll-behavior: smooth;
}
```

### Navbar offset consideration
The navbar is positioned `absolute top-[1.2em]` (or `md:top-[2em]`), height 60px. With `scroll-behavior: smooth` and `href="#section-id"`, the browser scrolls so the section top aligns with the viewport top — which means content under the navbar is hidden.

**Fix:** Add `scroll-margin-top` to each section:
```css
/* Each section that has an id anchor */
section[id], div[id] {
  scroll-margin-top: 80px; /* navbar height + buffer */
}
```

Or add `className="scroll-mt-20"` (Tailwind: `scroll-margin-top: 5rem = 80px`) to each section root element directly.

**Recommendation:** Add `scroll-mt-20` Tailwind class to every section root that gets an `id` — this is the cleanest, most maintainable approach in a Tailwind project.

---

## Static Export Research

### Next.js 16 Static Export Configuration
```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Required: Next.js Image Optimization incompatible with static export
  },
};

export default nextConfig;
```

### Static Export Constraints
| Feature | Static Export Compatible? | Action Required |
|---------|--------------------------|-----------------|
| `next/image` | ⚠️ With `unoptimized: true` | Add `images.unoptimized: true` to config |
| API Routes | ✗ | None exist in this project ✓ |
| Server Actions | ✗ | None exist ✓ |
| `useSearchParams` | ✗ (without Suspense) | Not used ✓ |
| EmailJS | ✓ (browser SDK) | No action needed ✓ |
| GSAP/Motion | ✓ (client-side) | No action needed ✓ |

### Verification
After adding `output: 'export'`, run `pnpm build` — output goes to `out/` directory. The build will fail if any incompatible features are used. Currently the codebase is clean.

---

## World Map SVG Research

### Problem
The `public/globe.svg` existing asset is a simple icon (not a world map). The contact section needs a recognizable world map silhouette.

### Recommended Approach: Inline SVG
Use a simplified world map SVG (land mass outlines, continent paths). Key sources:
- **Natural Earth simplified** — open domain SVG world maps
- **amCharts free SVG maps** — open-source world map SVGs
- A simplified ~3KB SVG with continent outlines styled with low opacity is ideal

### Implementation Pattern
```tsx
// In contact.tsx — world map section
<div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-gray-100 mt-4">
  {/* World map SVG background */}
  <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full opacity-15">
    {/* Continent paths here */}
  </svg>
  
  {/* Pune pin — approximately 55% from left, 42% from top */}
  <div className="absolute top-[42%] left-[55%] -translate-x-1/2 -translate-y-1/2">
    {/* Outer pulse ring */}
    <div className="absolute w-6 h-6 bg-blue-500/30 rounded-full animate-ping -translate-x-1/2 -translate-y-1/2" />
    {/* Pin dot */}
    <div className="w-3 h-3 bg-blue-600 rounded-full ring-2 ring-white" />
  </div>
  
  {/* Label */}
  <div className="absolute top-[28%] left-[53%] flex flex-col items-center">
    <span className="bg-gray-900 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
      We are here
    </span>
    <div className="w-px h-6 bg-gray-500 mt-0.5" />
  </div>
</div>
```

---

## Contact Form State Management

### Recommended pattern for Next.js App Router ("use client")
Use React's `useState` for controlled inputs and form state machine:

```tsx
type FormState = 'idle' | 'submitting' | 'success' | 'error';

const [formState, setFormState] = useState<FormState>('idle');
const [formData, setFormData] = useState({
  name: '', email: '', company: '', message: ''
});
const [errors, setErrors] = useState<Record<string, string>>({});
```

### Validation (client-side, pre-send)
```tsx
const validate = () => {
  const errs: Record<string, string> = {};
  if (!formData.name.trim()) errs.name = 'This field is required';
  if (!formData.email.trim()) errs.email = 'This field is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    errs.email = 'Please enter a valid email address';
  if (!formData.message.trim()) errs.message = 'This field is required';
  return errs;
};
```

### No external form library needed
React Hook Form would be overkill here — a 4-field form with simple required/email validation is cleanly handled with `useState`.

---

## Motion Library Pattern (for scroll-in animation)

The `motion` library (v12 — Framer Motion rebranded) is installed. Use `useInView` hook:

```tsx
import { motion, useInView } from 'motion';
import { useRef } from 'react';

// In component:
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: '-100px' });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5 }}
>
```

**Note:** `motion` v12 is the standalone `motion` package (not `framer-motion`). Import from `'motion'` not `'framer-motion'`. The `useInView` API is identical.

---

## Plan Architecture Recommendations

### Plan split (3 plans, respecting roadmap)

**03-01: Contact Form Section** (Wave 1)
- Create `sections/contact.tsx` with EmailJS, form state, world map, `id="contact"`
- Install `@emailjs/browser`
- Create `.env.local.example`

**03-02: Navigation & Anchor Wiring** (Wave 1, parallel with 03-01)
- Update `app/page.tsx` navbar `items` config
- Add `id` + `scroll-mt-20` to all section root elements
- Rename CTA buttons (nav "Join Now" → "Contact Us", hero "Join Now" → "Contact Us")
- Update footer nav links
- Integrate `<Contact />` into `app/page.tsx`
- Add `scroll-behavior: smooth` to `globals.css`

**03-03: Static Export & Polish** (Wave 2, after 03-01 and 03-02)
- Add `output: 'export'` + `images.unoptimized: true` to `next.config.ts`
- Run `pnpm build` and verify `out/` is generated
- Fix any build errors

---

## Validation Architecture

### Requirements traceability
| REQ-ID | Plan | Acceptance Criteria |
|--------|------|---------------------|
| CONV-02 | 03-01 | `sections/contact.tsx` exists; EmailJS `send()` call present; env vars documented |
| CONV-03 | 03-02 | StarBorder CTA in navbar links to `#contact`; StarBorder CTA in hero links to `#contact` |
| UX-01 | 03-02 | `globals.css` contains `scroll-behavior: smooth`; all section ids present |
| UX-02 | 03-02 | No new GSAP animations added; Motion `useInView` used for contact section only |
| UX-03 | 03-03 | `next.config.ts` contains `output: 'export'`; `pnpm build` exits 0 |

## RESEARCH COMPLETE
