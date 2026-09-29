# SreeRam — Elite AI/ML & Software Engineering Portfolio

A production-grade, truth-audited engineering portfolio presenting verified technical competencies, machine learning pipelines, REST backends, and full-stack software architectures.

---

## 🚀 Key Features

- **Credibility & Absolute Truth Standard:** No fabricated statistics, metrics, or false URLs. Missing items appear as styled, transparent placeholder chips ready for live updates.
- **20-Second Recruiter Snapshot:** Rapidly scannable summary optimized for technical recruiters and hiring managers.
- **Engineering Architecture Flows:** Visual data pipelines for each project (e.g., `RAW DATA → PREPROCESSING → MODEL → FASTAPI → INFERENCE`).
- **Interactive AI & ML Lab:** Live interactive previews for Confusion Matrix threshold tuning, Tabular Feature Importance inspection, REST inference simulation, and Prompt Engineering schema guards.
- **Dynamic GitHub Sync:** Real-time query to `https://api.github.com/users/police-create/repos` with robust loading, error, empty, and rate-limit fallbacks.
- **Accessible & Performance-Optimized:** WCAG AA contrast compliance, keyboard navigation, visible focus rings, reduced-motion compatibility, and zero heavy 3D bloatware.
- **Data-Driven Architecture:** All content lives in structured TypeScript files under `/src/data/`.

---

## 🛠️ Technology Stack

- **Core:** React 19, TypeScript 5, Vite 6
- **Styling:** Modern Tailwind CSS v4, CSS Variables & Grid Systems
- **Icons:** Lucide React
- **Routing:** React Router v7 with URL filter state synchronization (`?filter=ai-ml`)

---

## 📦 Project Structure

```
Portfolio.e42/
├── public/
│   ├── favicon.svg             # Engineering SVG favicon
│   ├── robots.txt              # Search crawler directives
│   ├── sitemap.xml             # Search engine sitemap
│   ├── _redirects              # Netlify SPA redirect fallback
│   └── resume/                 # Expected directory for resume.pdf
│       └── resume.pdf          # Place your compiled PDF resume here
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI primitives (Button, GlassCard, Badge, Skeleton, etc.)
│   │   ├── Navbar.tsx          # Sticky navigation & mobile drawer
│   │   ├── Hero.tsx            # Hero section with interactive profile.json window
│   │   ├── RecruiterSnapshot.tsx # 20-second recruiter scannable overview
│   │   ├── SkillsSection.tsx   # Categorized skills (no artificial % bars)
│   │   ├── ProjectsSection.tsx # Projects grid with filter tabs & search param sync
│   │   ├── ProjectCard.tsx     # Project card with mini architecture flow
│   │   ├── ProjectDetailModal.tsx # 10-point deep-dive engineering case study
│   │   ├── AiMlLab.tsx         # Interactive AI/ML exploratory lab modules
│   │   ├── InternshipsSection.tsx # Verified internship domains & structured entries
│   │   ├── CertificationsSection.tsx # Verified credentials & certification cards
│   │   ├── JourneySection.tsx  # Sequential engineering roadmap
│   │   ├── GithubSection.tsx   # Live GitHub repository API component
│   │   ├── LinkedInSection.tsx # LinkedIn connection banner
│   │   ├── ResumeSection.tsx   # Resume view & download handler
│   │   ├── ContactSection.tsx  # Validated contact form with honeypot & mailto fallback
│   │   └── Footer.tsx          # Engineering footer
│   ├── data/
│   │   ├── profile.ts          # Personal data, positioning & code identity
│   │   ├── skills.ts           # Categorized technology stack
│   │   ├── projects.ts         # Full project definitions & case studies
│   │   ├── certifications.ts   # Verified certifications & credential IDs
│   │   ├── internships.ts      # Domain-specific internship entries
│   │   ├── journey.ts          # Sequential learning progression
│   │   └── labExperiments.ts   # Interactive lab module schemas
│   ├── types/
│   │   └── index.ts            # Strict TypeScript interfaces
│   ├── App.tsx                 # Root application component
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Global tokens, glassmorphism, & grid backgrounds
├── vercel.json                 # Vercel deployment configuration & security headers
├── TODO-REPLACE.md             # Index of all editable placeholders
└── README.md
```

---

## ⚡ Getting Started

### 1. Installation

Ensure Node.js LTS (v20+) is installed. Run:

```bash
npm install
```

### 2. Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

Compile TypeScript and build the optimized distribution bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ✍️ How to Customize & Update Data

All portfolio content is decoupled from UI components and stored cleanly in `/src/data/`:

### 1. Adding or Updating Projects
Open `src/data/projects.ts` and add or edit items in the `projectsData` array:
```typescript
{
  id: "your-project-id",
  slug: "your-project-slug",
  title: "Project Title",
  category: "AI / ML", // 'AI / ML' | 'Python + AI' | 'Data Science' | 'Full Stack' | 'API / Backend' | 'Cybersecurity'
  summary: "One-line technical summary",
  problem: "Specific problem addressed",
  solution: "Technical solution implemented",
  stack: ["Python", "FastAPI", "React"],
  features: ["Feature 1", "Feature 2"],
  architecture: ["DATA", "MODEL", "API", "UI"],
  github: "https://github.com/police-create/repo-name",
  liveDemo: "https://demo-url.com",
  status: "Verified",
  details: {
    problemDeepDive: "...",
    approach: ["..."],
    architectureSteps: [{ label: "API Gateway", sublabel: "FastAPI" }],
    implementationDetails: ["..."],
    resultsSummary: "Result available in project documentation.",
    challengesOvercome: ["..."],
    futureRoadmap: ["..."]
  }
}
```

### 2. Updating Certifications
Open `src/data/certifications.ts`. Update `credentialId` and `credentialUrl` with your real verification links:
```typescript
{
  id: "oracle-agentic-ai",
  name: "Oracle — Agentic AI Certification",
  issuer: "Oracle",
  year: "2024",
  credentialId: "ORA-AI-XXXXXX",
  credentialUrl: "https://catalog-education.oracle.com/...",
  skills: ["Agentic AI", "Autonomous Systems"]
}
```

### 3. Adding Your PDF Resume
Place your resume document inside `/public/resume/resume.pdf`. The resume download buttons will automatically activate and detect the file.

### 4. Configuring Contact Form Endpoint
Create a `.env` file in the root directory (refer to `.env.example`):
```env
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```
*If left blank, the form automatically uses an interactive `mailto:` client fallback.*

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push this repository to your GitHub account (`https://github.com/police-create/portfolio`).
2. Import the project into [Vercel](https://vercel.com).
3. Vercel will automatically detect `vite` and use the preset with `vercel.json` rewrite rules.

### Deploying to Netlify
1. Connect your repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The included `public/_redirects` file guarantees seamless client-side routing.

---

## 📜 Credibility Standard
Every claim made on this portfolio is backed by verifiable code repositories, certification issuers, or transparent placeholder indicators. Refer to [TODO-REPLACE.md](file:///TODO-REPLACE.md) for remaining items to populate as new achievements are unlocked.
