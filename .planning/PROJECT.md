# Tech Academy

## What This Is

A single-page static website for an educational institute named "Tech Academy". It serves as a landing page aimed at prospective students and their parents, providing information on the academy's courses and philosophy, with the primary objective of driving inquiries via a contact form.

## Core Value

Connect students and parents with the right educator quickly and intuitively through a highly accessible contact form.

## Requirements

### Validated

- ✓ Next.js App Router and React foundation
- ✓ Hero section with Aurora background
- ✓ Programs/Courses section
- ✓ Testimonials section
- ✓ Footer section
- ✓ Premium aesthetic using GSAP animations, Motion, and shadcn/ui

### Active

- [ ] Complete and integrate a Course Catalog within the existing structure
- [ ] Add a section detailing the Academy's information and philosophy
- [ ] Implement a functional Contact Form directed to the educator
- [ ] Connect all sections via smooth scrolling (Single Page App navigation)

### Out of Scope

- [Authentication/Accounts] — It's a static marketing site; no student portals or login required.
- [Complex Backend/Database] — The contact form should simply send an inquiry (via email or a simple API integration), avoiding heavy database abstractions.
- [Multi-page Routing] — Specified as a single-page website to funnel users directly to the contact form seamlessly.

## Context

- The codebase is already initialized with a premium React/Next.js stack utilizing Tailwind CSS (v4).
- The visual language is already established: sleek components, glassmorphism UI, and micro-interactions (e.g., Aurora background, glowing buttons, Spotlight cards).
- Target audience is students and parents seeking educational services.

## Constraints

- **Architecture**: Single-page structure — keep routing flat and use scroll anchoring.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Single-page layout | Keeps the user funnel extremely focused towards the contact form. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: March 2026 after initialization*
