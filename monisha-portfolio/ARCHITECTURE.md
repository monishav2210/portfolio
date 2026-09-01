# Monisha V Portfolio Architecture

## 1. Project Scope

A single-page personal portfolio for Monisha V, a Generative AI Developer and Web Developer. The experience will present verified education, internship experience, skills, and projects with Corevia AI as the primary case study.

Implementation target: React + Vite + JavaScript + CSS, with React Icons and Framer Motion.

Content rule: only the information supplied for this portfolio is included. Email address, social URLs, resume file, live demo URLs, and GitHub URLs will be represented as data fields and populated when the real values/assets are available. No placeholder contact details or invented claims will be published.

## 2. Folder Structure

```text
monisha-portfolio/
├── public/
│   ├── images/
│   │   └── .gitkeep
│   ├── resume/
│   │   └── .gitkeep
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── FeaturedProject.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── ARCHITECTURE.md
├── README.md
├── package.json
└── vite.config.js
```

The directories and architecture document are created first. The remaining files are planned implementation files and will be generated only after approval.

## 3. Component Architecture

- `main.jsx`: Vite entry point; mounts the React application and imports global styles.
- `App.jsx`: Page composition only. Owns the section order, shared section IDs, and active-section observation state if needed. It does not contain portfolio copy or detailed markup for every section.
- `Navbar.jsx`: Sticky transparent navigation, MV mark, desktop links, mobile menu, active section indicator, and accessible menu controls.
- `Hero.jsx`: Name, role, description, primary actions, and a custom CSS/DOM AI network visual. The visual is decorative and has an accessible text alternative.
- `About.jsx`: Compact profile highlights and statistics/cards for BCA Graduate, Generative AI Developer, Web Developer, problem solving, and AI/software development interests.
- `Skills.jsx`: Category groups and reusable skill cards populated from data.
- `Experience.jsx`: Semantic professional timeline for the Testleaf internship.
- `FeaturedProject.jsx`: The Corevia AI case study, architecture flow, feature list, technology list, and action links.
- `Projects.jsx`: Reusable cards for the four additional projects, with conditional GitHub and Live Demo actions.
- `Education.jsx`: BCA education timeline/card.
- `Contact.jsx`: Contact heading, available contact links, and accessible contact form presentation. Submission behavior will be defined when a backend or form provider is chosen.
- `Footer.jsx`: Identity, social/contact links, and copyright line.
- `portfolioData.js`: Single source of truth for navigation labels, profile copy, skills, experience, projects, education, and external links.
- `index.css`: Design tokens, reset, typography, global accessibility styles, and responsive primitives.
- `App.css`: Layout, component-level styling, motion states, timeline, project architecture diagram, and responsive rules.

Components receive content through imports from `portfolioData.js`; UI components should remain reusable and avoid hard-coded portfolio facts wherever practical.

## 4. Data Flow

```text
portfolioData.js
        |
        v
      App.jsx  ---> shared section IDs / active navigation state
        |
        +--> Navbar.jsx
        +--> Hero.jsx
        +--> About.jsx
        +--> Skills.jsx
        +--> Experience.jsx
        +--> FeaturedProject.jsx
        +--> Projects.jsx
        +--> Education.jsx
        +--> Contact.jsx
        +--> Footer.jsx
```

1. Static portfolio content is exported from `portfolioData.js`.
2. `App.jsx` composes the page and passes only the relevant data slices to sections.
3. `Navbar.jsx` uses section IDs and `IntersectionObserver`-based state to expose the active section.
4. Action links are rendered conditionally when a real URL or asset is available.
5. The contact form is client-side accessible markup initially; no fake submission success state will be shown without a configured service.
6. Framer Motion handles viewport reveals and small interaction states while respecting `prefers-reduced-motion`.

## 5. Corevia AI Project Architecture

The case study will make the following product flow visually legible without pretending that a backend is running inside the portfolio:

```text
User
  |
  v
React Frontend
  |
  v
Node.js / Express API
  |
  v
Document Processing
  |
  v
Chunking
  |
  v
Embeddings
  |
  v
Vector Database
  |
  v
Semantic Retrieval
  |
  v
LLM
  |
  v
AI Response
```

Case-study content:

- Problem: organizational documents are difficult to search and understand efficiently.
- Solution: an AI-powered enterprise knowledge assistant using Retrieval-Augmented Generation.
- Key features: document upload, document processing, RAG pipeline, semantic search, vector search, AI question answering, chat history, and source-based responses.
- Technology stack: React, TypeScript, Node.js, Express, MongoDB, Langflow, RAG, embeddings, vector database, and LLM.
- Actions: GitHub, Live Demo, and Case Study buttons are data-driven and only enabled with real destinations.

The visual treatment will use a prominent case-study layout with a dark architecture canvas, gold path markers, and restrained glass panels. It will remain understandable on small screens by switching the flow from a horizontal composition to a vertical sequence.

## 6. Design System

### Color tokens

| Token | Value | Use |
|---|---|---|
| Main background | `#080D1A` | Page background |
| Secondary background | `#0F172A` | Section contrast and surfaces |
| Primary gold | `#D4AF37` | Accent, borders, active states |
| Bright gold | `#F5D76E` | Focus/hover emphasis and key highlights |
| Main text | `#F8FAFC` | Headings and primary content |
| Secondary text | `#94A3B8` | Supporting copy and metadata |
| Border | `#1E293B` | Dividers and card outlines |

Gold is reserved for emphasis, active navigation, calls to action, timeline markers, and Corevia architecture paths. Navy surfaces carry most of the visual weight; there will be no blue, purple, or green accent system.

### Visual language

- Premium, quiet, and technical rather than decorative.
- Expressive display typography paired with a highly readable sans-serif for body copy; font loading will use a performant web-font strategy with fallbacks.
- Fine borders, layered navy surfaces, subtle blur, and low-opacity grid/technical patterns for glassmorphism.
- Cards use restrained radii and clear hierarchy; page sections remain unframed rather than nested inside cards.
- Motion is limited to entrance reveals, active navigation transitions, hover elevation, and the Corevia flow emphasis.
- All controls have visible focus states, adequate contrast, semantic labels, and touch-friendly hit areas.

## 7. Responsive Strategy

- Mobile-first CSS with layout breakpoints for phone, tablet, and desktop rather than device-specific markup.
- Desktop: two-column hero and featured-project compositions, full navigation, and generous section spacing.
- Tablet: compressed two-column layouts where content remains readable; architecture flow may wrap.
- Mobile: stacked sections, collapsible hamburger navigation, vertical timelines, full-width actions, and a vertical Corevia architecture diagram.
- Use fluid container widths with stable max-widths, `clamp()` for headings, and grid/flex constraints to prevent layout shift.
- Decorative AI visual elements hide or simplify on narrow screens without removing the core content.
- Images/assets will use intrinsic dimensions and lazy loading where relevant.
- Motion and blur reduce under `prefers-reduced-motion` and constrained-device conditions.
- Keyboard navigation, focus order, reduced motion, color contrast, and form labeling are acceptance criteria for every viewport.

## 8. Deployment Architecture

```text
Source repository
        |
        v
Vite production build (`npm run build`)
        |
        v
Static hosting (recommended: Vercel, Netlify, or GitHub Pages)
        |
        v
CDN-served portfolio
```

- Build output: Vite `dist/` directory.
- Runtime: static hosting; no portfolio server is required for the initial release.
- Routing: single-page anchor navigation, avoiding server-side route requirements.
- Assets: public images and the real resume PDF are versioned under their planned public directories when supplied.
- CI/CD: install dependencies, run lint/build checks if configured, then deploy `dist/` from the default branch.
- Contact form deployment requires a selected provider or API endpoint before production submission is enabled.
- Production checks: responsive smoke test, keyboard/accessibility pass, link verification, and Lighthouse performance review.

## 9. Development Plan

1. **Scaffold**: create the Vite React JavaScript project files, package scripts, configuration, and the planned source files.
2. **Foundation**: add design tokens, global CSS, typography, accessibility primitives, and data model.
3. **Navigation and hero**: build sticky navigation, active section tracking, responsive hero, and the custom AI visual.
4. **Profile sections**: implement About, Skills, Experience, and Education from shared data.
5. **Corevia case study**: build the primary featured-project layout, architecture flow, feature list, stack, and actions.
6. **Project and contact surfaces**: add the other project cards, contact form, footer, and conditional external links.
7. **Motion and polish**: add restrained Framer Motion reveals and hover states with reduced-motion support.
8. **Verification**: run build/lint checks, inspect mobile/tablet/desktop layouts, check focus behavior, verify no invented content, and validate all configured links.
9. **Deployment preparation**: add README setup/deployment instructions and confirm the chosen static host configuration.

## Approval Gate

This document and the empty folder structure are the complete first phase. React source code, configuration files, dependencies, and assets should be generated only after approval of this architecture.
