# Phase 3: Conversion & UX Optimization - Context

**Gathered:** 2026-03-31
**Status:** Ready for planning

<domain>
## Phase Boundary

Wire up the contact form to capture leads via EmailJS, implement smooth single-page navigation with real section anchors, update the navbar and footer links to target actual sections, add a sticky/visible CTA, and configure the site for static export.

</domain>

<decisions>
## Implementation Decisions

### Navbar Cards (CardNav items in app/page.tsx)
- **D-01:** Card 1 → Label: **"Educator"**, one link: "Profile" → `href="#educator"` (smooth scrolls to educator section)
- **D-02:** Card 2 → Label: **"Programs"**, four links: "School Students", "Engineering", "Programming", "Professionals" → all `href="#programs"` (all scroll to programs section)
- **D-03:** Card 3 → Label: **"Testimonials"**, one link: "Testimonials" → `href="#testimonials"` (scrolls to testimonials section)

### CTA Button ("Join Now" → "Contact Us")
- **D-04:** The `StarBorder` "Join Now" button in the **navbar** must be renamed to **"Contact Us"** and scroll to `#contact` on click.
- **D-05:** The "Join Now" button in the **hero section** must also be renamed to **"Contact Us"** and scroll to `#contact`.
- **D-06:** Use the existing `StarBorder` component for both CTA buttons (no new component needed).

### Section ID Anchors
- **D-07:** Add `id` attributes to all sections so navbar, footer, and CTA buttons can anchor to them:
  - Hero → `id="hero"`
  - Educator → `id="educator"`
  - Philosophy → `id="about"` (or `id="philosophy"`)
  - Programs → `id="programs"`
  - Testimonials → `id="testimonials"`
  - Contact (new) → `id="contact"`

### Contact Us Section
- **D-08:** Build a new `sections/contact.tsx` section, placed **directly above the footer** in `app/page.tsx`.
- **D-09:** Layout is a **two-column dark-themed split**:
  - **Left column:** Email icon (top-left), large "Contact us" heading, subtitle copy, contact info line (email • phone • support), and a world map graphic with a "We are here" pin (Pune, India location).
  - **Right column:** A form with fields: Full Name, Email Address, Company (optional), Message (textarea), and a Submit button.
- **D-10:** Form fields: Full Name (required), Email Address (required), Company (optional), Message (required).
- **D-11:** Submit button uses the `StarBorder` component for styling.
- **D-12:** Dark card/glassmorphism background consistent with the existing premium aesthetic.
- **D-13:** Success state: show a confirmation message after submission (e.g., "Thanks! We'll be in touch soon.").

### Form Submission Service
- **D-14:** Use **EmailJS** (client-side, browser-based) — no server required.
- **D-15:** EmailJS is compatible with static export since it runs entirely in the browser.
- **D-16:** Required EmailJS config: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` — store in `.env.local`.
- **D-17:** The educator's email (Shraddha Oza) will be configured inside the EmailJS template on the dashboard — not hardcoded in the code.

### Footer Links
- **D-18:** Update footer nav links to scroll to real section anchors that exist on the page:
  - "Programs" → `#programs`
  - "About" → `#about` (Philosophy section)
  - "Testimonials" → `#testimonials`
  - "Contact" → `#contact`
  - Remove or hide links to sections that don't exist (Pricing, Blog, Privacy, Terms) — or keep as plain `#` placeholders if footer layout requires them.
- **D-19:** Social media links in the footer remain as `#` placeholders (out of scope).

### Smooth Scrolling
- **D-20:** Enable CSS smooth scrolling globally via `scroll-behavior: smooth` in `globals.css` (or Tailwind `scroll-smooth` on `html`).
- **D-21:** All anchor `href="#section-id"` links will auto-smooth-scroll with this CSS rule — no JS required.

### Static Export
- **D-22:** Add `output: 'export'` to `next.config.ts` to enable static HTML/CSS/JS build.
- **D-23:** Verify no server-only features are in use (API routes, server actions, etc.) — site is pure static with EmailJS handling forms client-side.
- **D-24:** Run `pnpm build` at the end to confirm the export succeeds with no errors.

### Agent's Discretion
- Exact copy for contact section subtitle and contact info details (email, phone) — use sensible placeholders that match the academy's persona; educator can update later.
- World map visual implementation — can be a CSS/SVG background or a lightweight static map image with an absolute-positioned pin label.
- Exact spacing, typography sizing, and dark color palette values to match existing premium aesthetic.
- Animation on the contact form (fade-in on scroll) — agent may add subtle motion if it fits the existing GSAP/Motion pattern without overengineering.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Scope
- `.planning/PROJECT.md` — Overall goals, constraints, single-page architecture rule
- `.planning/REQUIREMENTS.md` — CONV-02, CONV-03, UX-01, UX-02, UX-03 acceptance criteria

### Key Source Files
- `app/page.tsx` — Main entry: CardNav items config, section assembly order
- `components/nav.tsx` — CardNav component: items prop shape, StarBorder button
- `sections/hero.tsx` — Hero section: locate existing "Join Now" CTA button
- `sections/footer.tsx` — Footer: nav links to update with real anchors
- `components/ui/star-border.tsx` — StarBorder CTA component used for buttons

### EmailJS
- Install: `pnpm add @emailjs/browser`
- Docs: https://www.emailjs.com/docs/sdk/send-form/
- Config via `.env.local` with `NEXT_PUBLIC_` prefix

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `components/ui/star-border.tsx` — Used for CTA buttons; accepts `as`, `className`, `color`, `speed` props. Already used in navbar. Use for Submit button too.
- `components/ui/button.tsx` — Standard button available if needed for secondary actions.
- `components/ui/card.tsx` — Card primitive available for contact form card wrapper.
- `components/ui/aurora.tsx` — Already used in hero, do not replicate in contact section.
- All section files (`hero.tsx`, `educator.tsx`, etc.) — Need `id` prop added at the root element.

### Established Patterns
- Dark glassmorphism with `backdrop-blur`, `bg-white/10`, `border-white/10` — matches nav card style.
- GSAP animations used in nav — keep contact section animation lightweight (Motion `useInView` or simple CSS).
- Tailwind v4 utility-first — all styling via className, no inline styles except where GSAP requires.
- `"use client"` directive required for any component using hooks, event handlers, or EmailJS.

### Integration Points
- `app/page.tsx` — Add `<Contact />` import and render it between `<Testimonials />` and `<Footer />`.
- `app/globals.css` — Add `html { scroll-behavior: smooth; }` for global smooth scrolling.
- `next.config.ts` — Add `output: 'export'` for static build.
- `.env.local` (new file) — Add EmailJS environment variables.

</code_context>

<specifics>
## Specific Ideas

- Contact form layout reference: dark two-column split — left with icon, heading, subtitle, contact info, world map with pin; right with form fields and StarBorder submit button. (Provided as image reference by user.)
- "We are here" world map pin represents Pune, India — the educator's location.
- Contact info line on the left: use placeholder email/phone that the educator can configure — or source from educator profile data established in Phase 1 (Shraddha Oza).

</specifics>

<deferred>
## Deferred Ideas

- Interactive EmailJS template configuration (the educator needs to set up their EmailJS account) — out of scope for this phase; document in a README or `SETUP.md`.
- Social media links in footer — remain `#` for now, can be wired up in a future phase when actual academy social profiles exist.
- Course filtering by audience type — deferred to v2 requirements.

</deferred>

---

*Phase: 03-conversion-ux-optimization*
*Context gathered: 2026-03-31*
