# Southern Minority Alliance — Website

> **Reducing poverty and closing the racial wealth gap for Black and Brown communities in Memphis and the Mid-South.**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)](https://react.dev)

---

## Project Purpose

This is the public-facing website for **Southern Minority Alliance (SMA)**, a Memphis-based nonprofit organization focused on equity-centered economic and workforce development. The site serves:

- **Black and Brown entrepreneurs** seeking business growth support, procurement certifications, and capital access
- **Adult learners** enrolling in the Memphis Technology Bootcamp (Data Analysis & AI tracks)
- **Funders, CDFIs, and anchor institutions** evaluating SMA as an implementation partner
- **Community members** exploring events, resources, and civic data tools

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router compatible) |
| UI | React 19 |
| Styling | CSS Modules + global CSS |
| Forms | Jotform (embedded) |
| Data Dashboard | Priority Compass (Wix Headless, embedded via iframe) |
| Deployment | Vercel (auto-deploy from `main`) |
| Version Control | GitHub |
| Design Assets | Canva |
| Content Planning | Notion |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, mission, impact snapshot |
| `/businesses` | Minority Business Growth & Resiliency Initiative |
| `/learners` | Memphis Technology Bootcamp |
| `/impact` | Impact metrics and partner logos |
| `/contact` | Contact and partnership inquiry form |
| `/priority-compass` | Community Data Dashboard (Priority Compass embed) |

---

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Nomadwill78/southern-minority-alliance-site.git
cd southern-minority-alliance-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Deployment

This project is deployed automatically via **Vercel**.

1. Every push to `main` triggers a production deployment
2. Pull requests generate preview deployment URLs automatically
3. Custom domain is configured in the Vercel dashboard

To deploy your own fork:
1. Fork this repository
2. Import to [Vercel](https://vercel.com/new)
3. Vercel auto-detects Next.js — no configuration needed
4. Add your custom domain in Vercel project settings

---

## Brand Guidelines

| Token | Value | Usage |
|---|---|---|
| Primary Navy | `#1B3A6B` | Hero backgrounds, headings |
| Brand Navy | `#143C72` | Navbar, body accents |
| Gold | `#C9A84C` | CTAs, stat numbers, highlights |
| Off-white | `#F5F0E8` | Page backgrounds |
| Light Gray | `#F5F7FA` | Card backgrounds |

**Fonts:** Montserrat (headings) + Open Sans (body)

---

## Integrations

### Jotform
All forms (business intake, bootcamp applications, partner inquiries, contact) are embedded via the `JotformEmbed` component. To update a form, replace the form ID in the relevant page component.

### Priority Compass
The community equity data dashboard is embedded on the `/priority-compass` page via iframe. The source is hosted at `https://sma-priori-dc68a4df-damonwill78.wix-site-host.com/`.

### Canva
Brand assets (hero images, infographics, social cards) are exported from Canva and stored in the `/public/assets` directory.

---

## Project Roadmap

### Short-term (Q3 2025)
- [ ] Migrate to TypeScript
- [ ] Add Open Graph / SEO metadata to all pages
- [ ] Implement full accessibility audit (WCAG 2.1 AA)
- [ ] Add `.eslintrc` and consistent linting rules
- [ ] Consolidate to CSS Modules throughout

### Medium-term (Q4 2025)
- [ ] Add headless CMS (Sanity or Contentful) for staff-managed content
- [ ] Migrate Jotform to server-side form handling with validation and CRM integration
- [ ] Add spam protection (Cloudflare Turnstile or hCaptcha)
- [ ] Add Google Analytics / privacy-respecting analytics (Plausible)

### Long-term (2026)
- [ ] Member portal for program participants
- [ ] Resource library with filterable downloads
- [ ] Multi-city expansion (beyond Memphis/Mid-South)
- [ ] Email notification system for form submissions

---

## Accessibility

This project targets **WCAG 2.1 AA** compliance. Ongoing checklist:

- [ ] Semantic heading hierarchy (`h1` > `h2` > `h3`) on every page
- [ ] `alt` text on all images
- [ ] Accessible button and link labels
- [ ] Keyboard navigation for all interactive elements
- [ ] Visible focus states
- [ ] Color contrast ratio >= 4.5:1 for body text
- [ ] ARIA labels on icon-only buttons

Nonprofit grant applications frequently require accessibility compliance. Run audits with [Lighthouse](https://developer.chrome.com/docs/lighthouse/) and [axe DevTools](https://www.deque.com/axe/).

---

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Open a pull request — Vercel will generate a preview URL
4. Get review, then merge to `main` for auto-deploy

---

## License

All rights reserved. Southern Minority Alliance © 2025. Contact [info@southernminorityalliance.org](mailto:info@southernminorityalliance.org) for permissions.
