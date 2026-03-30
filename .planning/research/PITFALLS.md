# Project Research: Pitfalls

## Environment
- **Domain:** Static Website for Educational Institute
- **Context:** Subsequent milestone (Adding catalog, info, and contact form)

## Known Issues
1. **Lost Form Submissions**
   - *Warning Sign:* Contact form submits successfully on the frontend but no emails are received by the educator.
   - *Prevention:* Use a reliable serverless form endpoint (like Web3Forms or Resend) and ensure error handling is visible on the form UI (Success / Error states).
2. **Animation Performance Issues**
   - *Warning Sign:* The page stutters on mobile devices scrolling through the GSAP and Aurora components.
   - *Prevention:* Optimize Canvas/WebGL elements (like Aurora) to pause when not in the viewport.
3. **Poor SEO from SPA behavior**
   - *Warning Sign:* Search engines don't index the course catalog correctly.
   - *Prevention:* Ensure semantic HTML (`<section>`, `<h1>`, `<h2>`) is used, and metadata is populated in `app/layout.tsx`. Single page is fine as long as Next.js pre-renders the HTML.
4. **Unclear Navigation**
   - *Warning Sign:* Users get lost trying to find the contact form.
   - *Prevention:* Use sticky navigation with bold CTA buttons that anchor scroll seamlessly.
