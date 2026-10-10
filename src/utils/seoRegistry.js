import {
  COMPANY,
  PROJECTS,
  BLOG_POSTS,
  SERVICE_PAGES_DATA,
  FAQ_CATEGORIES
} from "../data/siteData";

export const SITE_ORIGIN = "https://www.yfbfitoutcontracting.com";

export const HOSTED_OG_IMAGES = {
  default: `${SITE_ORIGIN}/static/hero/hospitality.jpg`,
  commercial: `${SITE_ORIGIN}/static/hero/commercial.jpg`,
  hospitality: `${SITE_ORIGIN}/static/hero/hospitality.jpg`,
  residential: `${SITE_ORIGIN}/static/hero/residential.jpg`,
  approach: `${SITE_ORIGIN}/static/hero/approach.jpg`,
  founder: `${SITE_ORIGIN}/static/founder.jpg`,
  whyUs: `${SITE_ORIGIN}/static/why-us.jpg`,
  logo: `${SITE_ORIGIN}/static/logo.jpg`
};

// Complete list of all static + dynamic routes to pre-render at build time
export const PRERENDER_ROUTES = [
  "/",
  "/about",
  "/founders-message",
  "/why-us",
  "/faq",
  "/careers",
  "/services",
  "/services/architecture",
  "/services/interior-design",
  "/services/construction",
  "/services/office-renovation",
  "/projects",
  ...PROJECTS.map((p) => `/projects/${p.slug}`),
  "/project/details",
  "/gallery",
  "/photo-gallery",
  "/video-gallery",
  "/contact",
  "/enquiry",
  ...BLOG_POSTS.map((b) => `/blog/${b.slug}`),
  "/login",
  "/forgot-password",
  "/dashboard",
  "/dashboard/categories",
  "/404"
];

// Canonical indexable routes for sitemap.xml (excludes admin, legacy alias, and 404)
export const SITEMAP_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.9" },
  { path: "/founders-message", changefreq: "monthly", priority: "0.7" },
  { path: "/why-us", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/services/architecture", changefreq: "monthly", priority: "0.85" },
  { path: "/services/interior-design", changefreq: "monthly", priority: "0.85" },
  { path: "/services/construction", changefreq: "monthly", priority: "0.85" },
  { path: "/services/office-renovation", changefreq: "monthly", priority: "0.85" },
  { path: "/projects", changefreq: "weekly", priority: "0.9" },
  ...PROJECTS.map((p) => ({
    path: `/projects/${p.slug}`,
    changefreq: "monthly",
    priority: "0.8"
  })),
  { path: "/gallery", changefreq: "monthly", priority: "0.75" },
  { path: "/photo-gallery", changefreq: "monthly", priority: "0.8" },
  { path: "/video-gallery", changefreq: "monthly", priority: "0.75" },
  { path: "/faq", changefreq: "monthly", priority: "0.75" },
  { path: "/careers", changefreq: "weekly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.9" },
  { path: "/enquiry", changefreq: "monthly", priority: "0.9" },
  ...BLOG_POSTS.map((b) => ({
    path: `/blog/${b.slug}`,
    changefreq: "monthly",
    priority: "0.75"
  }))
];

function getSectorOgImage(category = "") {
  const cat = category.toLowerCase();
  if (cat.includes("commercial") || cat.includes("office") || cat.includes("healthcare")) {
    return HOSTED_OG_IMAGES.commercial;
  }
  if (cat.includes("residential") || cat.includes("villa") || cat.includes("architecture")) {
    return HOSTED_OG_IMAGES.residential;
  }
  return HOSTED_OG_IMAGES.hospitality;
}

function buildBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_ORIGIN}${item.path === "/" ? "/" : item.path}`
    }))
  };
}

const PROVIDER_REF = {
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_ORIGIN}/#organization`,
  name: COMPANY.name,
  url: `${SITE_ORIGIN}/`,
  telephone: "+971543862870",
  email: COMPANY.email,
  logo: HOSTED_OG_IMAGES.logo,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bay Square, Building 12 - Office G01, Marasi Dr - Business Bay",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE"
  }
};

const STATIC_ROUTE_META = {
  "/": {
    title: "Turnkey Interior Fit-Out & Architecture Studio in Dubai | Yashmeen Future Building",
    description:
      "Yashmeen Future Building & Fit-Out Contracting designs, engineers, manufactures, and installs turnkey commercial, hospitality, and residential interiors across Dubai and Abu Dhabi.",
    canonicalPath: "/",
    ogImage: HOSTED_OG_IMAGES.default,
    ogType: "website",
    robots: "index, follow"
  },
  "/about": {
    title: "About Us — Turnkey Fit-Out & Architecture Specialists Since 2016 | Yashmeen Future Building",
    description:
      "Discover Yashmeen Future Building & Fit-Out Contracting Co. L.L.C. Established in 2016 in Dubai with a 35,000 sq.ft Al Quoz joinery factory and 200+ in-house specialists.",
    canonicalPath: "/about",
    ogImage: HOSTED_OG_IMAGES.whyUs,
    ogType: "website",
    robots: "index, follow"
  },
  "/founders-message": {
    title: "Founder's Message — Mohammad Danish Adnan | Yashmeen Future Building",
    description:
      "Read the message from Mohammad Danish Adnan, Founder & Managing Director of Yashmeen Future Building & Fit-Out Contracting Co. L.L.C in Dubai.",
    canonicalPath: "/founders-message",
    ogImage: HOSTED_OG_IMAGES.founder,
    ogType: "profile",
    robots: "index, follow"
  },
  "/why-us": {
    title: "Why Choose YFB — In-House Al Quoz Factory & 98% On-Time Delivery | Yashmeen Future Building",
    description:
      "See why leading UAE corporates and villa owners choose YFB Fit-Out Contracting: 35,000 sq.ft Al Quoz joinery plant, itemized BOQs, and 98% on-time handovers.",
    canonicalPath: "/why-us",
    ogImage: HOSTED_OG_IMAGES.whyUs,
    ogType: "website",
    robots: "index, follow"
  },
  "/faq": {
    title: "Frequently Asked Questions — Fit-Out Costs, Timelines & Approvals in Dubai | Yashmeen Future Building",
    description:
      "Answers to common questions about turnkey interior fit-out timelines, Dubai Municipality & DCD authority approvals, bespoke joinery, and BOQ pricing.",
    canonicalPath: "/faq",
    ogImage: HOSTED_OG_IMAGES.approach,
    ogType: "website",
    robots: "index, follow"
  },
  "/careers": {
    title: "Careers at YFB — Join Our 200+ Architects, Engineers & Master Craftsmen | Yashmeen Future Building",
    description:
      "Explore open career opportunities at Yashmeen Future Building & Fit-Out Contracting Co. L.L.C in Dubai across Project Management, Joinery, MEP, and Estimation.",
    canonicalPath: "/careers",
    ogImage: HOSTED_OG_IMAGES.commercial,
    ogType: "website",
    robots: "index, follow"
  },
  "/services": {
    title: "Turnkey Fit-Out, Architecture, Construction & Renovation Services in Dubai | Yashmeen Future Building",
    description:
      "Explore YFB Fit-Out Contracting capabilities: Architecture Design, Luxury Interior Fit-Out, Civil & MEP Construction, Office Renovation, and Bespoke Joinery.",
    canonicalPath: "/services",
    ogImage: HOSTED_OG_IMAGES.commercial,
    ogType: "website",
    robots: "index, follow"
  },
  "/projects": {
    title: "Delivered Projects Portfolio — 640+ Commercial, Villa & Hospitality Spaces | Yashmeen Future Building",
    description:
      "Explore YFB Fit-Out Contracting flagship projects across DIFC, Business Bay, Palm Jumeirah, Dubai Marina, and Dubai Healthcare City.",
    canonicalPath: "/projects",
    ogImage: HOSTED_OG_IMAGES.hospitality,
    ogType: "website",
    robots: "index, follow"
  },
  "/gallery": {
    title: "Architectural & Interior Fit-Out Photo Gallery — 18 Curated Spaces | Yashmeen Future Building",
    description:
      "Browse 18 unique high-resolution interior fit-out, custom joinery, villa architecture, and hospitality photographs delivered across Dubai.",
    canonicalPath: "/gallery",
    ogImage: HOSTED_OG_IMAGES.residential,
    ogType: "website",
    robots: "index, follow"
  },
  "/photo-gallery": {
    title: "Architectural & Interior Fit-Out Photo Gallery — 18 Curated Spaces | Yashmeen Future Building",
    description:
      "Browse 18 unique high-resolution interior fit-out, custom joinery, villa architecture, and hospitality photographs delivered across Dubai.",
    canonicalPath: "/photo-gallery",
    ogImage: HOSTED_OG_IMAGES.residential,
    ogType: "website",
    robots: "index, follow"
  },
  "/video-gallery": {
    title: "Site & Joinery Factory Walkthroughs — Video Showcase Gallery | Yashmeen Future Building",
    description:
      "Explore 8 authentic architectural walkthroughs, Al Quoz CNC joinery factory tours, and MEP engineering showcases by YFB Fit-Out Contracting.",
    canonicalPath: "/video-gallery",
    ogImage: HOSTED_OG_IMAGES.commercial,
    ogType: "website",
    robots: "index, follow"
  },
  "/contact": {
    title: "Contact Us — Business Bay Design Studio & Al Quoz 3 Joinery Factory | Yashmeen Future Building",
    description:
      "Contact Yashmeen Future Building & Fit-Out Contracting Co. L.L.C in Dubai. Call +971 54 386 2870 or email info@yfbfitoutcontracting.com.",
    canonicalPath: "/contact",
    ogImage: HOSTED_OG_IMAGES.commercial,
    ogType: "website",
    robots: "index, follow"
  },
  "/enquiry": {
    title: "Request an Itemized Fit-Out Quote & Free Site Survey — Dubai | Yashmeen Future Building",
    description:
      "Configure your commercial office, luxury villa, hospitality, or clinic fit-out scope and receive an itemized Bill of Quantities (BOQ) from YFB Contracting.",
    canonicalPath: "/enquiry",
    ogImage: HOSTED_OG_IMAGES.approach,
    ogType: "website",
    robots: "index, follow"
  },
  "/login": {
    title: "Executive Portal Login | Yashmeen Future Building",
    description:
      "Authorized management portal for Yashmeen Future Building & Fit-Out Contracting Co. L.L.C.",
    canonicalPath: "/login",
    ogImage: HOSTED_OG_IMAGES.default,
    ogType: "website",
    robots: "noindex, nofollow"
  },
  "/forgot-password": {
    title: "Reset Portal Passkey | Yashmeen Future Building",
    description: "Reset your YFB Executive Portal passkey.",
    canonicalPath: "/forgot-password",
    ogImage: HOSTED_OG_IMAGES.default,
    ogType: "website",
    robots: "noindex, nofollow"
  },
  "/dashboard": {
    title: "Executive CRM & Content Dashboard | Yashmeen Future Building",
    description:
      "Manage enquiries, job applications, categories, and company contact details.",
    canonicalPath: "/dashboard",
    ogImage: HOSTED_OG_IMAGES.default,
    ogType: "website",
    robots: "noindex, nofollow"
  },
  "/dashboard/categories": {
    title: "Service Categories Management — Executive Dashboard | Yashmeen Future Building",
    description: "Manage turnkey fit-out service categories in the YFB Executive Portal.",
    canonicalPath: "/dashboard/categories",
    ogImage: HOSTED_OG_IMAGES.default,
    ogType: "website",
    robots: "noindex, nofollow"
  },
  "/404": {
    title: "404 Page Not Found | Yashmeen Future Building",
    description:
      "The requested page could not be found. Explore our turnkey interior fit-out services and 640+ delivered projects across Dubai.",
    canonicalPath: "/404",
    ogImage: HOSTED_OG_IMAGES.default,
    ogType: "website",
    robots: "noindex, nofollow"
  }
};

export function buildRouteJsonLd(pathname, meta) {
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const fullUrl = `${SITE_ORIGIN}${cleanPath === "/" ? "/" : cleanPath}`;

  // 1. Homepage: HomeAndConstructionBusiness + WebSite
  if (cleanPath === "/") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HomeAndConstructionBusiness",
          "@id": `${SITE_ORIGIN}/#organization`,
          name: COMPANY.name,
          alternateName: "YFB Fitout Contracting",
          url: `${SITE_ORIGIN}/`,
          logo: HOSTED_OG_IMAGES.logo,
          image: HOSTED_OG_IMAGES.default,
          description: meta.description,
          foundingDate: "2016",
          founder: {
            "@type": "Person",
            name: COMPANY.founder.name,
            jobTitle: COMPANY.founder.role
          },
          telephone: "+971543862870",
          email: COMPANY.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bay Square, Building 12 - Office G01, Marasi Dr - Business Bay",
            addressLocality: "Dubai",
            addressRegion: "Dubai",
            addressCountry: "AE"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.1864,
            longitude: 55.2804
          },
          areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "United Arab Emirates"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "18:00"
            }
          ],
          priceRange: "$$$"
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_ORIGIN}/#website`,
          url: `${SITE_ORIGIN}/`,
          name: COMPANY.shortName,
          publisher: { "@id": `${SITE_ORIGIN}/#organization` }
        }
      ]
    };
  }

  // 2. Specialist Service Detail Routes (/services/:key)
  if (cleanPath.startsWith("/services/")) {
    const serviceKey = cleanPath.replace("/services/", "");
    const sData = SERVICE_PAGES_DATA[serviceKey];
    const serviceName = sData ? sData.title : "Turnkey Interior Fit-Out Service";
    return {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: serviceName, path: cleanPath }
        ]),
        {
          "@type": "Service",
          "@id": `${fullUrl}#service`,
          name: serviceName,
          serviceType: serviceName,
          description: meta.description,
          url: fullUrl,
          image: meta.ogImage,
          provider: PROVIDER_REF,
          areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "United Arab Emirates"]
        }
      ]
    };
  }

  // 3. Services Hub (/services)
  if (cleanPath === "/services") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" }
        ]),
        {
          "@type": "Service",
          "@id": `${fullUrl}#service-catalog`,
          name: "Turnkey Interior Fit-Out, Architecture, Construction & Office Renovation Services",
          description: meta.description,
          url: fullUrl,
          provider: PROVIDER_REF,
          areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "United Arab Emirates"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "YFB Turnkey Contracting Services",
            itemListElement: Object.entries(SERVICE_PAGES_DATA).map(([key, item]) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: item.title,
                description: item.seoDescription,
                url: `${SITE_ORIGIN}/services/${key}`
              }
            }))
          }
        }
      ]
    };
  }

  // 4. Project Case Study Detail Routes (/projects/:slug or /project/details)
  if (cleanPath.startsWith("/projects/") || cleanPath === "/project/details") {
    const slug = cleanPath.replace("/projects/", "");
    const project = PROJECTS.find((p) => p.slug === slug) || PROJECTS[0];
    return {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` }
        ]),
        {
          "@type": "CreativeWork",
          "@id": `${SITE_ORIGIN}/projects/${project.slug}#project`,
          name: `${project.title} — ${project.location}`,
          headline: project.title,
          description: meta.description,
          url: `${SITE_ORIGIN}/projects/${project.slug}`,
          image: meta.ogImage,
          genre: project.category,
          locationCreated: {
            "@type": "Place",
            name: project.location
          },
          creator: PROVIDER_REF
        }
      ]
    };
  }

  // 5. Projects Hub (/projects)
  if (cleanPath === "/projects") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" }
        ]),
        {
          "@type": "CollectionPage",
          "@id": `${fullUrl}#collection`,
          name: meta.title,
          description: meta.description,
          url: fullUrl,
          isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: PROJECTS.map((p, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              url: `${SITE_ORIGIN}/projects/${p.slug}`,
              name: `${p.title} (${p.location})`
            }))
          }
        }
      ]
    };
  }

  // 6. Blog Post Detail Routes (/blog/:slug)
  if (cleanPath.startsWith("/blog/")) {
    const slug = cleanPath.replace("/blog/", "");
    const post = BLOG_POSTS.find((b) => b.slug === slug) || BLOG_POSTS[0];
    return {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: post.title, path: `/blog/${post.slug}` }
        ]),
        {
          "@type": "BlogPosting",
          "@id": `${SITE_ORIGIN}/blog/${post.slug}#article`,
          headline: post.title,
          description: post.excerpt,
          url: `${SITE_ORIGIN}/blog/${post.slug}`,
          image: meta.ogImage,
          author: {
            "@type": "Person",
            name: post.author
          },
          publisher: PROVIDER_REF,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_ORIGIN}/blog/${post.slug}`
          }
        }
      ]
    };
  }

  // 7. FAQ Page (/faq)
  if (cleanPath === "/faq") {
    const allFaqs = FAQ_CATEGORIES.flatMap((cat) => cat.items || []);
    return {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" }
        ]),
        {
          "@type": "FAQPage",
          "@id": `${fullUrl}#faq`,
          name: meta.title,
          description: meta.description,
          url: fullUrl,
          mainEntity: allFaqs.map((q) => ({
            "@type": "Question",
            name: q.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.a
            }
          }))
        }
      ]
    };
  }

  // 8. About / Founder / Why Us Pages
  if (cleanPath === "/about" || cleanPath === "/founders-message" || cleanPath === "/why-us") {
    const labelMap = {
      "/about": "About Us",
      "/founders-message": "Founder's Message",
      "/why-us": "Why Choose Us"
    };
    return {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: labelMap[cleanPath], path: cleanPath }
        ]),
        {
          "@type": "AboutPage",
          "@id": `${fullUrl}#webpage`,
          name: meta.title,
          description: meta.description,
          url: fullUrl,
          mainEntity: PROVIDER_REF
        }
      ]
    };
  }

  // 9. Contact & Enquiry Pages
  if (cleanPath === "/contact" || cleanPath === "/enquiry") {
    const label = cleanPath === "/contact" ? "Contact Us" : "Request a Quote";
    return {
      "@context": "https://schema.org",
      "@graph": [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: label, path: cleanPath }
        ]),
        {
          "@type": "ContactPage",
          "@id": `${fullUrl}#contact`,
          name: meta.title,
          description: meta.description,
          url: fullUrl,
          mainEntity: PROVIDER_REF
        }
      ]
    };
  }

  // 10. Default Subpage (Careers, Galleries, Portal, 404)
  const pageLabel = cleanPath.replace(/^\//, "").replace(/-/g, " ") || "Page";
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: pageLabel.charAt(0).toUpperCase() + pageLabel.slice(1), path: cleanPath }
      ]),
      {
        "@type": "WebPage",
        "@id": `${fullUrl}#webpage`,
        name: meta.title,
        description: meta.description,
        url: fullUrl,
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` }
      }
    ]
  };
}

export function getRouteSeoMeta(pathname = "/", overrides = {}) {
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  let resolved = STATIC_ROUTE_META[cleanPath];

  // Dynamic /services/:serviceKey
  if (!resolved && cleanPath.startsWith("/services/")) {
    const serviceKey = cleanPath.replace("/services/", "");
    const sData = SERVICE_PAGES_DATA[serviceKey];
    if (sData) {
      const cleanSeoTitle = sData.seoTitle.replace(/\s*[—|]\s*Yashmeen Future Building.*$/i, "");
      resolved = {
        title: `${cleanSeoTitle} | ${COMPANY.shortName}`,
        description: sData.seoDescription,
        canonicalPath: `/services/${serviceKey}`,
        ogImage: getSectorOgImage(serviceKey),
        ogType: "website",
        robots: "index, follow"
      };
    }
  }

  // Dynamic /projects/:slug or /project/details
  if (!resolved && (cleanPath.startsWith("/projects/") || cleanPath === "/project/details")) {
    const slug = cleanPath === "/project/details" ? PROJECTS[0].slug : cleanPath.replace("/projects/", "");
    const project = PROJECTS.find((p) => p.slug === slug) || PROJECTS[0];
    resolved = {
      title: `${project.title} — ${project.location} Case Study | ${COMPANY.shortName}`,
      description: `${project.summary} Delivered by YFB Fit-Out Contracting (${project.area}, ${project.duration}).`,
      canonicalPath: `/projects/${project.slug}`,
      ogImage: getSectorOgImage(project.category),
      ogType: "article",
      robots: cleanPath === "/project/details" ? "noindex, follow" : "index, follow"
    };
  }

  // Dynamic /blog/:slug
  if (!resolved && cleanPath.startsWith("/blog/")) {
    const slug = cleanPath.replace("/blog/", "");
    const post = BLOG_POSTS.find((b) => b.slug === slug) || BLOG_POSTS[0];
    resolved = {
      title: `${post.title} | ${COMPANY.shortName}`,
      description: post.excerpt,
      canonicalPath: `/blog/${post.slug}`,
      ogImage: getSectorOgImage(post.category),
      ogType: "article",
      robots: "index, follow"
    };
  }

  // Fallback for unknown route -> 404
  if (!resolved) {
    resolved = { ...STATIC_ROUTE_META["/404"], canonicalPath: cleanPath };
  }

  const cleanOverrideTitle = overrides.title
    ? overrides.title.replace(/\s*[—|]\s*Yashmeen Future Building.*$/i, "")
    : "";

  const finalTitle = cleanOverrideTitle
    ? cleanOverrideTitle.includes(COMPANY.shortName)
      ? cleanOverrideTitle
      : `${cleanOverrideTitle} | ${COMPANY.shortName}`
    : resolved.title;

  const finalDescription = overrides.description || resolved.description;
  const finalCanonicalPath = overrides.canonicalPath || resolved.canonicalPath || cleanPath;
  const canonicalUrl = `${SITE_ORIGIN}${finalCanonicalPath === "/" ? "/" : finalCanonicalPath}`;
  const ogImage = overrides.ogImage || resolved.ogImage || HOSTED_OG_IMAGES.default;
  const ogType = overrides.ogType || resolved.ogType || "website";
  const robots = overrides.robots || resolved.robots || "index, follow";

  const metaObj = {
    title: finalTitle,
    description: finalDescription,
    canonicalPath: finalCanonicalPath,
    canonicalUrl,
    ogImage,
    ogType,
    robots
  };

  metaObj.jsonLd = buildRouteJsonLd(finalCanonicalPath, metaObj);
  return metaObj;
}
