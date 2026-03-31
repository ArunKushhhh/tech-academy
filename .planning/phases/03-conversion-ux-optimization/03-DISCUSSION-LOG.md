# Phase 3: Conversion & UX Optimization - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-03-31
**Phase:** 03-conversion-ux-optimization
**Areas discussed:** Navbar Links, CTA Buttons, Contact Form Design, Form Service, Footer Links, Static Export

---

## A — Contact Form Design

| Option | Description | Selected |
|--------|-------------|----------|
| Dedicated section above footer | New `sections/contact.tsx` rendered between Testimonials and Footer | ✓ |
| Embedded in footer | Combined layout | |
| Modal / slide-in | Overlay triggered by CTA | |

**User's choice:** Dedicated section, placed directly above the footer.
**Notes:** User provided a reference image — dark two-column layout: left side has email icon, "Contact us" heading, subtitle, contact info, world map with "We are here" pin (Pune, India); right side has form with Full Name, Email Address, Company (optional), Message, and a StarBorder Submit button.

---

## B — Form Submission Service

| Option | Description | Selected |
|--------|-------------|----------|
| EmailJS | Client-side, no server needed, browser SDK | ✓ |
| Web3Forms | Simple POST to their API | |
| Resend | Server-side email sending | |

**User's choice:** EmailJS
**Notes:** EmailJS is fully compatible with static export as it runs in the browser. Educator's email configured inside EmailJS dashboard template, not hardcoded.

---

## C — Navbar & CTA Wiring

| Area | Decision | Selected |
|------|----------|----------|
| Card 1 | "Educator" → Profile link → `#educator` | ✓ |
| Card 2 | "Programs" → 4 links (School Students, Engineering, Programming, Professionals) → all `#programs` | ✓ |
| Card 3 | "Testimonials" → Testimonials link → `#testimonials` | ✓ |
| Navbar CTA | StarBorder "Join Now" → renamed "Contact Us" → `#contact` | ✓ |
| Hero CTA | "Join Now" button → renamed "Contact Us" → `#contact` | ✓ |

**Notes:** Use `StarBorder` component for both CTA buttons. All anchors require `id` attributes added to section root elements.

---

## D — Static Export

| Option | Description | Selected |
|--------|-------------|----------|
| `output: 'export'` | Static HTML/CSS/JS build | ✓ |
| Default (server) | Node.js server required | |

**User's choice:** Agent decides.
**Notes:** User was unfamiliar with this — agent explained static export and why EmailJS makes it compatible. Agent to add `output: 'export'` to `next.config.ts` and validate with `pnpm build`.

---

## Footer Links

**User's choice:** Update to real section anchors (Programs, About, Testimonials, Contact). Remove/hide links to non-existent sections (Pricing, Blog, Privacy, Terms).

---

## Agent's Discretion

- World map visual implementation
- Exact copy for contact section subtitle and contact info
- Smooth scroll animation on contact form
- Exact color values and spacing within the established dark aesthetic

## Deferred Ideas

- EmailJS account setup guide for educator (document separately)
- Social media links in footer (no live profiles yet)
- Course filtering by audience type (v2 requirement)
