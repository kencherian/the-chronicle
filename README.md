# The Cherian Chronicle

Editorial broadsheet personal portfolio for **Ken Cherian** — Computer Engineering student at SVPCET, Nagpur, specializing in full-stack web engineering, cybersecurity telemetry, and applied machine learning.

Designed around a classic metropolitan newspaper layout, the site pairs strict `0px` border-radius geometry, `1px` hairline column dividers, and `3px` double-line structural rules with `Playfair Display`, `Newsreader`, and `JetBrains Mono` typography.

---

## Features

- **Broadsheet Masthead & Edition Toggle:** Centered serif nameplate flanked by an availability ear box and an interactive **Morning Newsprint / Evening Edition** (`#F7F5F0` / `#141413`) theme switcher persisted via `localStorage`, anchored by a `3px` double-bordered dateline strip.
- **Above-the-Fold Lead Story:** Features a `SPECIAL REPORT` kicker, 2-column executive summary with a 3-line CSS drop cap, grayscale-to-color hover portrait plate, and inset pull quote.
- **Interactive Primary Architecture Schematic:** Anchored 8-column lead dispatch for **Aegis-SIEM-SOAR** featuring a clickable, keyboard-accessible 4-node SVG pipeline schematic (`Telemetry Ingestion`, `MITRE ATT&CK Correlator`, `Immutable Audit & Alert Store`, `SOAR Webhook Orchestrator`).
- **Domain-Filtered & Paginated Project Archive:** 2×2 broadsheet grid (`4` items per page) covering 10 production projects across **Cybersecurity**, **Full-Stack**, **Machine-Learning**, and **Data-Visualization**, with section-scoped pagination and smooth scroll-to-header behavior.
- **Slide-Over Story & Dispatch Drawer:** Inspect full project case studies, copyable source code excerpts, and interactive workload benchmark tables (`Nominal Load` vs. `3× Burst Spike`), as well as full-text publication and lab dispatches.
- **Right Rail Sidebar Briefs:** Filterable stock-composite **Technical Index** (`All`, `Systems`, `Interface`, `Data`), chronological **Appointments & Credentials**, and **News in Brief** dispatches.
- **The Classifieds Footer & Print Stylesheet:** 4-box grid offering one-click email copying, an inline inquiry form, external links, client-side plain-text CV download (`Ken-Cherian-Curriculum-Vitae.txt`), and a comprehensive `@media print` stylesheet optimized for newsprint hard copies.

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8 (`@vitejs/plugin-react`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom `@theme` tokens and `@custom-variant dark`
- **Typography:** Google Fonts (`Playfair Display`, `Newsreader`, `JetBrains Mono`)
- **Icons:** `lucide-react`

---

## Project Structure

```text
├── index.html                          # Entry HTML, Google Fonts CDN, and SEO/OG meta tags
├── metadata.json                       # Applet manifest metadata
├── package.json                        # Scripts and dependencies
├── vite.config.ts                      # Vite & Tailwind CSS v4 configuration
└── src/
    ├── App.tsx                         # Root 12-column layout, theme state, and drawer controller
    ├── index.css                       # Tailwind tokens, drop cap, plate filters, and @media print
    ├── main.tsx                        # React DOM entry point
    ├── assets/images/                  # Local editorial photography plates
    ├── data/
    │   └── editorialData.ts            # Masthead, bio, 10 projects, index, timeline, and briefs
    └── components/
        ├── Masthead.tsx                # Nameplate, ear boxes, Evening Edition toggle, dateline nav
        ├── LeadStory.tsx               # Special Report biography, drop cap, portrait, pull quote
        ├── FeaturedProjects.tsx        # Lead dispatch, domain filter bar, 2×2 paginated grid
        ├── ArchitecturalPlate.tsx      # Interactive 4-node Aegis SIEM-SOAR SVG schematic
        ├── EditorialImage.tsx          # Framed grayscale-to-color plate with fallback state
        ├── RightRail.tsx               # Technical Index table, timeline, and News in Brief
        ├── StoryDrawer.tsx             # Tabbed modal/drawer for stories, code, and benchmarks
        └── ClassifiedsFooter.tsx       # 4-box footer: email, wires, CV download, print, colophon
```

---

## Getting Started

### Prerequisites

- Node.js 20+ and npm (or Bun)

### Local Development

```bash
# Install dependencies
npm install

# Start the development server on http://localhost:3000
npm run dev
```

### Build & Type-Check

```bash
# Run TypeScript type checking
npm run lint

# Build production bundle into dist/
npm run build

# Preview production build locally
npm run preview
```

---

## Customization

All editorial copy and portfolio entries are centralized for straightforward updates:

- **Content & Projects:** Edit `/src/data/editorialData.ts` (`MASTHEAD_CONFIG`, `LEAD_STORY`, `FEATURED_PROJECTS`, `TECHNICAL_INDEX`, `APPOINTMENTS`, `NEWS_IN_BRIEF`, and `CLASSIFIEDS_CONFIG`).
- **Lead Schematic:** Update node labels, metrics, and SVG diagram text in `/src/components/ArchitecturalPlate.tsx`.
- **Theme Tokens & Print Rules:** Adjust colors, font tokens, or `@page` / `@media print` styling in `/src/index.css`.
- **HTML Metadata:** Update `<title>` and OpenGraph tags in `/index.html` and `/metadata.json`.
