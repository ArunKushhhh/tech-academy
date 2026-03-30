# Project Research: Architecture

## Environment
- **Domain:** Static Website for Educational Institute
- **Context:** Subsequent milestone (Adding catalog, info, and contact form)

## System Design
- **Single-Page Architecture:** Everything exists on `app/page.tsx` utilizing deep-linking fragment URLs (e.g., `#contact`, `#programs`).
- **Component Boundaries:**
  - `Hero` (Intro & Hook)
  - `Programs` (Course Catalog)
  - `About/Philosophy` (New section)
  - `Testimonials`
  - `Contact Form` (New section)
  - `Footer`
- **Data Flow:** Static data (or hardcoded JSON objects) passed down into components. Contact form data flows out via a web request to a third-party form handler (like Web3Forms).

## Build Order
1. Build out the `About/Philosophy` visual section.
2. Build the `Course Catalog` (expand `Programs`).
3. Build the `Contact Form` section and finalize the API integration for email sending.
4. Hook up the navigation and smooth scrolling across the page.
