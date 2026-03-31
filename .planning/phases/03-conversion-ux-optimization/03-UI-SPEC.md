---
phase: 3
slug: conversion-ux-optimization
status: approved
shadcn_initialized: true
preset: radix-nova
created: 2026-03-31
---

# Phase 3 — UI Design Contract

> Visual and interaction contract for Phase 3: Conversion & UX Optimization.
> Covers: Contact Us section, CTA button updates, navbar link wiring, footer link wiring, smooth scrolling, section anchors.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | shadcn/ui |
| Preset | radix-nova |
| Component library | Radix UI |
| Icon library | lucide-react, react-icons (fa6) |
| Font | Inherited from site (existing globals.css) |
| Theme | Light — white/light-grey backgrounds, dark text |

---

## Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Icon gaps, inline padding |
| sm | 8px | Form field gaps, icon margins |
| md | 16px | Form input padding, label margins |
| lg | 24px | Column internal padding |
| xl | 32px | Section horizontal padding |
| 2xl | 48px | Section vertical padding (top/bottom) |
| 3xl | 64px | Section max content width padding |

---

## Typography

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Body | 16px | 400 | 1.6 |
| Label (form) | 14px | 500 | 1.4 |
| Input placeholder | 14px | 400 | 1.4 |
| Section heading ("Contact us") | 40–48px | 700 | 1.1 |
| Section subheading | 16px | 400 | 1.6 |
| Contact info line | 14px | 400 | 1.5 |
| CTA button ("Contact Us") | 14px | 600 | 1 |
| Map pin label ("We are here") | 12px | 500 | 1 |

---

## Color

| Role | Value | Usage |
|------|-------|-------|
| Dominant (60%) | `#FFFFFF` | Section background, form background |
| Surface (card) | `#F9FAFB` (gray-50) | Form card container background |
| Secondary | `#F3F4F6` (gray-100) | Input field backgrounds |
| Border | `#E5E7EB` (gray-200) | Input borders, section divider |
| Text primary | `#111827` (gray-900) | Headings, labels |
| Text secondary | `#6B7280` (gray-500) | Placeholders, subheading, contact info |
| Accent | `#1447E6` | StarBorder glow color, map pin pulse |
| Destructive | `#EF4444` | Form validation errors only |

Accent reserved for: StarBorder button glow, map location pulse animation, focus rings on form fields.

---

## Contact Us Section — Layout Contract

```
┌──────────────────────────────────────────────────────────────┐
│  Section: id="contact"  bg-white  py-16 px-8 md:px-16       │
│                                                              │
│  ┌─────────────────────────┐  ┌──────────────────────────┐  │
│  │  LEFT COLUMN            │  │  RIGHT COLUMN (FORM CARD)│  │
│  │  flex-1 space-y-6       │  │  flex-1                  │  │
│  │                         │  │                          │  │
│  │  [Mail icon box]        │  │  bg-gray-50              │  │
│  │  56×56px, bg-gray-900   │  │  rounded-2xl             │  │
│  │  rounded-xl             │  │  border border-gray-200  │  │
│  │  text-white             │  │  p-8 shadow-sm           │  │
│  │                         │  │                          │  │
│  │  "Contact us"           │  │  [Full Name input]       │  │
│  │  text-4xl font-bold     │  │  [Email Address input]   │  │
│  │  text-gray-900          │  │  [Company input]         │  │
│  │                         │  │  [Message textarea]      │  │
│  │  Subheading copy        │  │                          │  │
│  │  text-gray-500          │  │  [StarBorder Submit btn] │  │
│  │  max-w-xs               │  │                          │  │
│  │                         │  └──────────────────────────┘  │
│  │  Contact info line      │                                 │
│  │  email • phone          │                                 │
│  │  text-sm text-gray-500  │                                 │
│  │                         │                                 │
│  │  [World map / SVG]      │                                 │
│  │  relative container     │                                 │
│  │  with pin + label       │                                 │
│  └─────────────────────────┘                                 │
└──────────────────────────────────────────────────────────────┘
```

**Responsive behaviour:**
- Desktop (md+): `grid grid-cols-2 gap-16 items-start`
- Mobile: `flex flex-col gap-10` (left column first, form card below)

---

## Form Fields Contract

| Field | Type | Label | Placeholder | Required |
|-------|------|-------|-------------|----------|
| Full Name | text input | "Full name" | "e.g. Rahul Sharma" | ✓ |
| Email Address | email input | "Email Address" | "your@email.com" | ✓ |
| Company | text input | "Institution / School (optional)" | "e.g. DY Patil College" | ✗ |
| Message | textarea (4 rows) | "Message" | "Tell us what you'd like to learn..." | ✓ |

**Input styling:**
```
bg-white border border-gray-200 rounded-lg px-4 py-3
text-gray-900 placeholder:text-gray-400
focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500
transition-colors duration-200
w-full text-sm
```

**Label styling:**
```
text-sm font-medium text-gray-700 mb-1.5
```

---

## CTA Button Contract (StarBorder)

All "Contact Us" CTA buttons use the existing `<StarBorder>` component with:

```tsx
<StarBorder
  as="button"   // or "a" with href="#contact"
  color="#1447E6"
  speed="5s"
  className="font-medium text-sm"
>
  Contact Us
</StarBorder>
```

**Locations:**
1. Navbar (replaces "Join Now") — `as="a"` with `href="#contact"`
2. Hero section (replaces "Join Now") — `as="a"` with `href="#contact"`
3. Contact form submit button — `as="button"` with `type="submit"`

**Submit button full width behaviour:**
- Form submit: `className="w-full justify-center font-medium text-sm"`

---

## Map / Location Pin Contract

**Implementation:** SVG world map background image (static, no JS library).

```
Container:
  relative w-full h-[180px] md:h-[200px]
  bg-gray-100 rounded-xl overflow-hidden mt-4

World map image:
  absolute inset-0 w-full h-full object-cover opacity-20 grayscale

Pin (Pune, roughly 55% from left, 42% from top):
  absolute w-3 h-3 bg-blue-600 rounded-full
  top-[42%] left-[55%] -translate-x-1/2 -translate-y-1/2
  ring-4 ring-blue-500/30 animate-ping (CSS pulse)

Label pill:
  absolute bg-gray-900 text-white text-xs px-2 py-1 rounded-full
  top-[30%] left-[52%]
  "We are here"
  with a downward connecting line (2px border-l border-gray-400 h-8 ml-2)
```

---

## Section ID Anchors Contract

All sections must have an `id` on their outermost element:

| Section file | id value |
|-------------|----------|
| `sections/hero.tsx` | `id="hero"` |
| `sections/educator.tsx` | `id="educator"` |
| `sections/philosophy.tsx` | `id="about"` |
| `sections/programs.tsx` | `id="programs"` |
| `sections/testimonials.tsx` | `id="testimonials"` |
| `sections/contact.tsx` (new) | `id="contact"` |

---

## Navbar Items Contract

`app/page.tsx` items array — replace existing placeholder config:

```tsx
const items = [
  {
    label: "Educator",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Profile", href: "#educator", ariaLabel: "Educator Profile" }
    ]
  },
  {
    label: "Programs",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "School Students", href: "#programs", ariaLabel: "Programs for School Students" },
      { label: "Engineering", href: "#programs", ariaLabel: "Programs for Engineering Students" },
      { label: "Programming", href: "#programs", ariaLabel: "Programming Programs" },
      { label: "Professionals", href: "#programs", ariaLabel: "Programs for Professionals" }
    ]
  },
  {
    label: "Testimonials",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Testimonials", href: "#testimonials", ariaLabel: "Student Testimonials" }
    ]
  }
];
```

---

## Footer Links Contract

Update footer `navLinks` array in `sections/footer.tsx`:

```tsx
const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
```

Remove: Pricing, Blog, Privacy, Terms (no corresponding sections exist).

---

## Smooth Scrolling Contract

Add to `app/globals.css`:

```css
html {
  scroll-behavior: smooth;
}
```

No JavaScript scroll library needed — CSS handles all anchor link scrolling.

---

## Copywriting Contract

| Element | Copy |
|---------|------|
| Contact section heading | "Contact us" |
| Contact section subheading | "Have a question about our programs? We'd love to hear from you. Reach out and we'll get back to you shortly." |
| Contact info email | "info@techacademy.in" |
| Contact info phone | "+91 98765 43210" |
| Map pin label | "We are here" |
| Form submit CTA | "Send Message" (inside StarBorder button) |
| Nav/Hero CTA | "Contact Us" (inside StarBorder button) |
| Success message heading | "Message sent!" |
| Success message body | "Thanks for reaching out. Shraddha will get back to you shortly." |
| Form error (required) | "This field is required" |
| Form error (invalid email) | "Please enter a valid email address" |

---

## Interaction States Contract

### Form inputs
- **Default:** `border-gray-200 bg-white`
- **Focus:** `border-blue-500 ring-2 ring-blue-500/20`
- **Error:** `border-red-400 ring-2 ring-red-400/20`
- **Disabled:** N/A

### Submit button (StarBorder)
- **Default:** StarBorder animated glow
- **Loading (submitting):** Show spinner icon inside button, disable pointer events, label "Sending..."
- **Success:** Replace form with success message card (green check icon + heading + body)
- **Error:** Show inline error below button: "Something went wrong. Please try again."

### Map pin
- CSS `animate-ping` pulse on the blue dot (ring expands and fades)
- No hover state required

---

## Animation Contract

| Element | Animation | Library |
|---------|-----------|---------|
| Contact section entrance | `opacity-0 → opacity-100`, `translateY(20px) → 0` on scroll into view | Motion `useInView` |
| Form card entrance | Same fade-up, 150ms delay after section | Motion `useInView` |
| Map pin | CSS `animate-ping` (Tailwind built-in) | CSS only |
| Input focus ring | `transition-colors duration-200` | CSS only |
| StarBorder glow | Existing StarBorder animation | Existing component |

GSAP: Do **not** add new GSAP animations to the contact section. Keep motion lightweight (Motion/CSS only).

---

## Static Export Contract

Add to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: 'export',
  // ... other existing config
};
```

**Compatibility check:**
- EmailJS: ✓ (browser SDK, no server)
- Next.js Image: use `unoptimized: true` if using `<Image>` in contact section, OR use `<img>` tag directly
- No API routes or server actions: ✓ (none in use)

---

## EmailJS Integration Contract

**Install:** `pnpm add @emailjs/browser`

**Environment variables** (`.env.local`):
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Send call:**
```tsx
import emailjs from '@emailjs/browser';

const result = await emailjs.sendForm(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  formRef.current!,
  { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
);
```

**Form field `name` attributes** (must match EmailJS template variables):
- `name="user_name"` — Full Name
- `name="user_email"` — Email Address
- `name="user_company"` — Company
- `name="message"` — Message

---

## Acceptance Checklist (Checker: verify all 6 dimensions)

- [ ] **D1 — Color:** Contact section uses white/gray-50 background, gray-900 text, #1447E6 accent only on StarBorder + pin
- [ ] **D2 — Spacing:** All spacing tokens used consistently; form fields have uniform padding (px-4 py-3)
- [ ] **D3 — Typography:** Section heading 40-48px/700, form labels 14px/500, body 16px/400
- [ ] **D4 — Components:** StarBorder used for all 3 CTA instances; inputs follow stated styling contract; no new component primitives added
- [ ] **D5 — Copy:** All 10 copy strings defined; no placeholder "Lorem ipsum"
- [ ] **D6 — Interactions:** Form states (focus, error, loading, success) fully defined; map pin has pulse animation; scroll is CSS-only
