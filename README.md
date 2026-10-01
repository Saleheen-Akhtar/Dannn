# Yashmeen Future Building & Fit-Out Contracting Co. L.L.C — Upgraded Website

Complete, production-ready React + Vite codebase for **Yashmeen Future Building & Fit-Out Contracting Co. L.L.C** (`https://www.yfbfitoutcontracting.com/`), engineered to eliminate every bug, content contradiction, duplicate image, and broken workflow identified in the deep website audit.

---

## Key Improvements Over the Original Website

### 1. 100% Content Consistency & Zero Contradictions
- **Single Canonical Phone & WhatsApp (`+971 54 386 2870`):** Replaced the competitor USBC Interiors phone number (`+971 4 552 5858`) on service pages and purged the placeholder `+971 00 000 0000` from the footer.
- **Single Canonical Email (`info@yfbfitoutcontracting.com`):** Purged `info@yourdomain.ae` across all pages.
- **Unified Founder Identity:** Standardized **Mohammad Danish Adnan (Founder & Managing Director)** across the Homepage, About page, Founder's Message page, and Executive Portal—fixing the copy-paste error where the Founder's Message bio previously referred to *"Ahmed"*.
- **Unified Company Timeline & Statistics:** Standardized **Est. 2016**, **10+ Years Active**, **640+ Projects Delivered**, **200+ In-House Specialists**, **150+ Luxury Villas**, **98% On-Time Handover**, and **35,000 sq.ft Al Quoz 3 Factory + Business Bay Studio** across every page.

### 2. Zero Image Duplication & Dynamic Case Studies
- **12 Distinct Flagship Projects:** Every project card on `/` and `/projects` now uses a unique architectural image and links to its own dynamic case study route (`/projects/:slug`), replacing the hardcoded single "EDC Headquarters" page.
- **18 Unique Photo Gallery Items:** Eliminated all duplicate Unsplash photo IDs on `/photo-gallery`.
- **Purged Rickroll Videos & Broken Iframes:** Replaced the 4 Rick Astley (`dQw4w9WgXcQ`) embeds, `picsum.photos` random placeholders, and broken `VIDEO_ID_HERE` iframe on `/video-gallery` and `/why-us` with 8 authentic Dubai fit-out & Al Quoz joinery factory walkthroughs.

### 3. Working Forms, Careers & Executive Portal
- **Working Lead Capture (`src/utils/leadService.js`):** The Homepage Quick Enquiry form, `/contact`, and `/enquiry` now persist enquiries to `localStorage` (viewable immediately in `/dashboard`), verify JSON responses when `VITE_API_URL` is configured, and offer one-click WhatsApp dispatch.
- **Populated Careers Page (`/careers`):** Pre-loaded with 6 open Dubai fit-out roles and a functional **Apply Now** modal.
- **Unified Executive Portal (`/login`, `/dashboard`, `/dashboard/categories`):** Styled in the luxury Ink & Brass palette to manage Enquiries, Job Applications, Categories, and Canonical Website Details.

### 4. Technical SEO, Accessibility & Performance
- Includes `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`, `public/.htaccess` (Apache SPA fallback), OpenGraph/Twitter meta tags, JSON-LD `HomeAndConstructionBusiness` structured data, dynamic per-route titles via `usePageMeta`, WCAG 2.1 AA contrast, and fixed mobile hero ordering.

---

## Getting Started

```bash
cd C:\Users\sahil\Projects\Dannn
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```
