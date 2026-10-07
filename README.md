# Fermor Homepage — Product Design Assignment

**Concept: Your money, in context.**

A premium, responsive Fermor homepage built as a product-design exercise — not just a marketing page. The experience moves a user from **See → Understand → Decide** through editorial storytelling, financial visualization and one meaningful interactive scenario.

## Product thinking

The core question is:

> **What does this number mean for me?**

Instead of filling the page with generic fintech features, the experience connects financial data to decisions. The final scenario — *“Can I afford a ₹12L car?”* — demonstrates the kind of contextual answer the product should provide.

## What I deliberately chose

- One strong interactive financial scenario rather than many shallow widgets.
- Financial data as the visual language.
- Editorial typography, warm paper surfaces and a restrained green accent.
- Motion that supports hierarchy: floating context chips, chart transitions, orbit movement, hover states and a moving principle strip.
- No generic AI gradients, stock imagery, fake testimonials or excessive glassmorphism.
- Reduced-motion support for accessibility.

## Technical decisions

- **Next.js 15 + React 19 + TypeScript**
- Dependency-light CSS rather than a large UI framework.
- SVG charts for lightweight, scalable financial visualization.
- Client-side state for the scenario model; no backend is required for this assignment.
- Responsive mobile navigation.
- Illustrative return is explicitly labelled rather than presented as a financial promise.

## Run

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
npm run start
```

## Live

https://fermor-homepage.onrender.com

## Repository

https://github.com/Eshablink/fermor-homepage

## Assessment QA

- [x] GitHub repository
- [x] Responsive homepage
- [x] Product narrative
- [x] Interactive financial scenario
- [x] Production deployment
- [x] Motion system + reduced-motion fallback
- [ ] Local production build independently verified
- [ ] Final desktop/mobile browser QA
