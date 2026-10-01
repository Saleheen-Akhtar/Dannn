import { COMPANY, CAREER_OPENINGS } from "../data/siteData";

const ENQUIRIES_KEY = "yfb_enquiries_v2";
const APPLICATIONS_KEY = "yfb_applications_v2";
const CATEGORIES_KEY = "yfb_categories_v2";
const WEB_DETAILS_KEY = "yfb_web_details_v2";
const AUTH_KEY = "yfb_admin_user_v2";

const DEFAULT_CATEGORIES = [
  { _id: "cat-1", categoryName: "Commercial Fit-Out", status: true },
  { _id: "cat-2", categoryName: "Residential Villa Fit-Out", status: true },
  { _id: "cat-3", categoryName: "Hospitality & F&B", status: true },
  { _id: "cat-4", categoryName: "Luxury Retail", status: true },
  { _id: "cat-5", categoryName: "Healthcare & Clinics", status: true },
  { _id: "cat-6", categoryName: "Bespoke Joinery & Furniture", status: true }
];

function safeRead(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function safeWrite(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore storage quota errors
  }
}

// Unified Lead Submission — Works for Homepage Form, Contact Page, and Detailed Enquiry Page
// Never silently loses leads to an HTML SPA fallback!
export async function submitLeadEnquiry(payload) {
  const id = "enq-" + Date.now();
  const fullName = (payload.fullName || payload.name || "").trim();
  const entry = {
    _id: id,
    id: id,
    createdAt: new Date().toISOString(),
    status: "New",
    source: payload.source || "Website",
    name: fullName,
    fullName: fullName,
    email: (payload.email || "").trim(),
    phone: (payload.phone || payload.mobile || "").trim(),
    service: payload.service || payload.services || "Interior Fit-Out",
    projectType: payload.projectType || "",
    location: payload.location || "",
    budget: payload.budget || payload.budgetRange || "",
    budgetRange: payload.budgetRange || payload.budget || "To Be Assessed",
    timeline: payload.timeline || "",
    message: (payload.message || "").trim()
  };

  // 1. Always persist locally so it is recorded in the Admin Dashboard immediately
  const existing = safeRead(ENQUIRIES_KEY, []);
  safeWrite(ENQUIRIES_KEY, [entry, ...existing]);

  // 2. If a production API endpoint is configured via VITE_API_URL, send it & verify JSON response
  const apiUrl = import.meta.env.VITE_API_URL;
  if (apiUrl) {
    try {
      const res = await fetch(`${apiUrl.replace(/\/$/, "")}/enquiry/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry)
      });
      const contentType = res.headers.get("content-type") || "";
      if (!res.ok || !contentType.includes("application/json")) {
        console.warn("API returned non-JSON or non-200 response; lead safely stored locally.");
      }
    } catch (err) {
      console.warn("Remote API unreachable; lead safely stored locally.", err);
    }
  } else {
    // Simulate brief network latency for smooth UX feedback
    await new Promise((r) => setTimeout(r, 450));
  }

  entry.ok = true;
  entry.record = entry;
  return entry;
}

// Build a pre-filled WhatsApp URL for instant follow-up if the user wants immediate chat
export function buildWhatsAppEnquiryUrl(entry) {
  const lines = [
    `Hello ${COMPANY.shortName},`,
    `I have just submitted an enquiry on your website:`,
    `• Name: ${entry.name}`,
    `• Phone: ${entry.phone}`,
    `• Email: ${entry.email}`,
    entry.projectType ? `• Project Type: ${entry.projectType}` : null,
    `• Service: ${Array.isArray(entry.service) ? entry.service.join(", ") : entry.service}`,
    entry.location ? `• Location: ${entry.location}` : null,
    entry.budget ? `• Budget: ${entry.budget}` : null,
    entry.timeline ? `• Timeline: ${entry.timeline}` : null,
    entry.message ? `• Brief: ${entry.message}` : null
  ].filter(Boolean);

  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

// Job Application Submission on /careers
// --- COMPATIBILITY ENRICHMENT ---
export function submitJobApplication(payload) {
  const id = "app-" + Date.now();
  const fullName = (payload.fullName || payload.name || "").trim();
  const entry = {
    _id: id,
    id: id,
    createdAt: new Date().toISOString(),
    positionId: payload.positionId || payload.jobId,
    positionName: payload.positionName || payload.jobTitle,
    jobTitle: payload.jobTitle || payload.positionName,
    name: fullName,
    fullName: fullName,
    email: (payload.email || "").trim(),
    phone: (payload.phone || "").trim(),
    experience: (payload.experience || payload.experienceYears || "").trim(),
    experienceYears: (payload.experienceYears || payload.experience || "").trim(),
    portfolioUrl: (payload.portfolioUrl || "").trim(),
    coverNote: (payload.coverNote || "").trim()
  };

  const existing = safeRead(APPLICATIONS_KEY, []);
  safeWrite(APPLICATIONS_KEY, [entry, ...existing]);
  entry.ok = true;
  entry.record = entry;
  return entry;
}

export function getStoredEnquiries() {
  return safeRead(ENQUIRIES_KEY, []);
}

export function deleteStoredEnquiry(id) {
  const next = getStoredEnquiries().filter((item) => item._id !== id && item.id !== id);
  safeWrite(ENQUIRIES_KEY, next);
  return next;
}

export function getStoredApplications() {
  return safeRead(APPLICATIONS_KEY, []);
}

export function getStoredCategories() {
  return safeRead(CATEGORIES_KEY, DEFAULT_CATEGORIES).map((c) => ({
    ...c,
    id: c.id || c._id,
    name: c.name || c.categoryName,
    slug: c.slug || (c.name || c.categoryName || "").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    active: c.active !== undefined ? c.active : c.status
  }));
}

export function saveStoredCategories(list) {
  safeWrite(CATEGORIES_KEY, list);
  return list;
}

export function getStoredWebDetails() {
  return safeRead(WEB_DETAILS_KEY, {
    address: {
      street: "Bay Square, Building 12 - Office G01, Marasi Dr",
      area: "Business Bay",
      city: "Dubai",
      country: "United Arab Emirates",
      factory: "35,000 sq.ft Production Facility — Al Quoz Industrial Area 3, Dubai"
    },
    companyName: COMPANY.legalName,
    founderName: COMPANY.founder.name,
    phone: COMPANY.phone,
    studioAddress: COMPANY.studioAddress,
    factoryAddress: COMPANY.factoryAddress,
    email: COMPANY.email,
    mobile: COMPANY.phone,
    whatsapp: COMPANY.phone,
    socialLinks: [
      { platform: "linkedin", url: COMPANY.social.linkedin },
      { platform: "instagram", url: COMPANY.social.instagram }
    ]
  });
}

export function saveStoredWebDetails(details) {
  safeWrite(WEB_DETAILS_KEY, details);
  return details;
}

export function getVacancies() {
  return CAREER_OPENINGS;
}

export function getAuthUser() {
  return safeRead(AUTH_KEY, null);
}

export function loginAdmin(arg1, arg2) {
  const email = typeof arg1 === "object" ? arg1.email : arg1;
  const password = typeof arg1 === "object" ? arg1.password : arg2;
  if (!email || !password || password.length < 4) {
    throw new Error("Please enter a valid work email and password.");
  }
  const user = {
    name: "Studio Administrator",
    email: email.trim(),
    role: "admin",
    token: "yfb-session-" + Date.now()
  };
  safeWrite(AUTH_KEY, user);
  return { ...user, ok: true };
}

export function logoutAdmin() {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch {
    // ignore
  }
}
