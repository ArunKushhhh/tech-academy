# Concerns & Technical Debt

## Architectural / Codebase
- **Testing**: Complete lack of testing frameworks or test configurations. Unit and integration tests need to be instituted before the complexity grows.
- **Error Boundaries**: Minimal error handling configurations shown in the structure. Application resilience strategy is missing.

## Performance
- **Heavy Frontend Graphics**: Heavy reliance on Three.js, GSAP, framer-motion/motion. While powerful, combining multiple intensive graphics paradigms can lead to performance degradation on low-end devices if not carefully optimized.

## Security
- Application is purely frontend. Standard cross-site scripting (XSS) prevention logic present in modern Next/React code is sufficient for now.
