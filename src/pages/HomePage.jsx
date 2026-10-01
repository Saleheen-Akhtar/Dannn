import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Phone, Mail, MapPin, ShieldCheck, Award, Sparkles } from "lucide-react";
import { toast } from "sonner";
import {
  COMPANY,
  CLIENT_PARTNERS,
  CORE_SERVICES,
  OFFER_TABS,
  PROJECTS,
  TESTIMONIALS,
  BLOG_POSTS
} from "../data/siteData";
import { usePageMeta } from "../utils/usePageMeta";
import { submitLeadEnquiry, buildWhatsAppEnquiryUrl } from "../utils/leadService";

const PROJECT_FILTERS = ["All", "Commercial", "Residential", "Hospitality", "Retail", "Healthcare"];

const HERO_SHOWCASES = [
  {
    idx: "01",
    eyebrow: "DUBAI · EST. 2016 · TURNKEY DESIGN & BUILD",
    line1: "Thoughtful",
    line2: "Interiors for",
    line3: "a Better Tomorrow",
    subtitle:
      "We design, engineer, and build beautiful, functional commercial, residential, and hospitality spaces across the UAE — crafted in-house at our 35,000 sq.ft Al Quoz 3 joinery facility.",
    projectTitle: "Emirates Hills Private Residence",
    projectMeta: "11,800 sq.ft · Full Villa Fit-Out & Bespoke Millwork",
    slug: "emirates-hills-private-residence",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=85"
  },
  {
    idx: "02",
    eyebrow: "EXECUTIVE WORKPLACES · DIFC & BUSINESS BAY",
    line1: "Considered",
    line2: "Workspaces Built",
    line3: "for High Performance",
    subtitle:
      "From acoustic fluted-oak boardrooms to turnkey MEP and authority approvals, most commercial headquarters are delivered on a fixed programme within 60 to 90 days.",
    projectTitle: "EDC Corporate Headquarters",
    projectMeta: "15,210 sq.ft · Al Maryah Island, Abu Dhabi",
    slug: "edc-headquarters-abu-dhabi",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85"
  },
  {
    idx: "03",
    eyebrow: "35,000 SQ.FT AL QUOZ 3 FACTORY · BESPOKE JOINERY",
    line1: "Architectural",
    line2: "Craftsmanship",
    line3: "Under One Roof",
    subtitle:
      "200+ in-house architects, MEP engineers, and master joiners delivering custom kitchens, wardrobes, stone monoliths, and smart automation with zero subcontractor markups.",
    projectTitle: "Palm Jumeirah Signature Villa",
    projectMeta: "9,800 sq.ft · Architectural Extension & Interior Fit-Out",
    slug: "palm-jumeirah-signature-villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
  }
];

const HERO_BOTTOM_CARDS = [
  {
    lines: ["Residential", "Design"],
    meta: "150+ Luxury Villas · Turnkey Fit-Out",
    path: "/services/architecture",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  },
  {
    lines: ["Commercial", "Spaces"],
    meta: "60–90 Day Delivery · DIFC & Business Bay",
    path: "/services/office-renovation",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    lines: ["Bespoke", "Interiors"],
    meta: "35,000 sq.ft Al Quoz 3 Joinery Plant",
    path: "/services/interior-design",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
  }
];

const LEDGER_STATS = [
  {
    idx: "01",
    count: 10,
    suffix: "+",
    label: "Years Active",
    detail: "Established in Dubai in 2016"
  },
  {
    idx: "02",
    count: 640,
    suffix: "+",
    label: "Projects Delivered",
    detail: "Offices, villas, F&B & clinics"
  },
  {
    idx: "03",
    count: 35,
    suffix: "K",
    label: "Sq.Ft Al Quoz Factory",
    detail: "In-house joinery, metal & glass"
  },
  {
    idx: "04",
    count: 200,
    suffix: "+",
    label: "In-House Specialists",
    detail: "Architects, MEP & craftsmen"
  },
  {
    idx: "05",
    count: 98,
    suffix: "%",
    label: "On-Time Handover",
    detail: "ISO 9001 · 14001 · 45001 certified"
  }
];

function AnimatedCounter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = React.useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frameId = null;
    let started = false;

    const runAnimation = () => {
      if (started) return;
      started = true;
      const duration = 1500;
      const startTime = performance.now();

      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setVal(Math.round(target * eased));
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          setVal(target);
        }
      };
      frameId = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          runAnimation();
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {val}
      <span className="lm-stat-suffix">{suffix}</span>
    </span>
  );
}

export default function HomePage() {
  usePageMeta({
    title: "Turnkey Interior Fit-Out & Architecture Studio in Dubai",
    description:
      "Yashmeen Future Building & Fit-Out Contracting designs, engineers, manufactures, and installs turnkey commercial, hospitality, and residential interiors across Dubai and Abu Dhabi."
  });

  const [projectFilter, setProjectFilter] = useState("All");
  const [activeOfferTab, setActiveOfferTab] = useState(OFFER_TABS[0].id);
  const [testiIdx, setTestiIdx] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const activeHero = HERO_SHOWCASES[heroSlide] || HERO_SHOWCASES[0];

  // Home Contact Form State
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Interior Fit-Out",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [submittedEntry, setSubmittedEntry] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestiIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    const heroTimer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SHOWCASES.length);
    }, 6500);
    return () => {
      clearInterval(timer);
      clearInterval(heroTimer);
    };
  }, []);

  const filteredProjects =
    projectFilter === "All"
      ? PROJECTS.slice(0, 9)
      : PROJECTS.filter((p) => p.category.toLowerCase() === projectFilter.toLowerCase());

  const currentOffer = OFFER_TABS.find((t) => t.id === activeOfferTab) || OFFER_TABS[0];
  const currentTesti = TESTIMONIALS[testiIdx];

  const handleHomeSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      toast.error("Please fill in your name, phone number, and email.");
      return;
    }
    setSending(true);
    try {
      const saved = await submitLeadEnquiry({ ...form, source: "Homepage Form" });
      setSubmittedEntry(saved);
      setForm({ name: "", phone: "", email: "", service: "Interior Fit-Out", message: "" });
      toast.success("Enquiry received! Our studio team will contact you within one working day.");
    } catch {
      toast.error("Could not submit enquiry. Please call us directly at " + COMPANY.phone);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* 1. LUMEN-INSPIRED SCULPTURAL ARCH EDITORIAL HERO & WARM GALLERY DOCK */}
      <section className="lm-hero" id="home">
        {/* Decorative Architectural Arch & Sunlit Room Stage */}
        <div className="lm-arch-stage" aria-hidden="true">
          <div className="lm-arch-outer">
            <div className="lm-arch-terracotta-alcove" />
            {HERO_SHOWCASES.map((slide, idx) => (
              <div
                key={slide.slug}
                className={`lm-arch-slide${heroSlide === idx ? " is-active" : ""}`}
              >
                <img
                  src={slide.image}
                  alt={slide.projectTitle}
                  width="1600"
                  height="1100"
                  fetchPriority={idx === 0 ? "high" : "auto"}
                />
              </div>
            ))}
            <div className="lm-arch-blend-left" />
            <div className="lm-arch-blend-bottom" />
          </div>
        </div>

        {/* Left-Edge Vertical Slide Index (01 | 02 03) */}
        <div className="lm-side-pagination" role="tablist" aria-label="Hero showcase slides">
          {HERO_SHOWCASES.map((slide, idx) => {
            const active = heroSlide === idx;
            return (
              <React.Fragment key={slide.idx}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Slide ${slide.idx}: ${slide.projectTitle}`}
                  className={`lm-page-num${active ? " active" : ""}`}
                  onClick={() => setHeroSlide(idx)}
                >
                  {slide.idx}
                </button>
                {idx === 0 && <span className="lm-page-line" aria-hidden="true" />}
              </React.Fragment>
            );
          })}
        </div>

        <div className="wrap lm-hero-container">
          <div className="lm-hero-main">
            {/* LEFT EDITORIAL COLUMN */}
            <div className="lm-copy-col">
              <div className="lm-eyebrow">{activeHero.eyebrow}</div>

              <h1 className="lm-headline">
                <span>{activeHero.line1}</span>
                <span>{activeHero.line2}</span>
                <span>{activeHero.line3}</span>
              </h1>

              <p className="lm-subtitle">{activeHero.subtitle}</p>

              {/* CIRCULAR SAGE/FOREST BUTTON + EXPLORE OUR WORK */}
              <div className="lm-cta-group">
                <Link to="/projects" className="lm-explore-cta">
                  <span className="lm-circle-btn" aria-hidden="true">
                    <ArrowRight size={20} strokeWidth={1.75} />
                  </span>
                  <span className="lm-explore-label">Explore Our Work</span>
                </Link>

                <Link to="/enquiry" className="lm-secondary-link">
                  Book a Free Site Visit →
                </Link>
              </div>
            </div>

            {/* RIGHT FLOATING CAPTION PILL OVER ARCH */}
            <div className="lm-arch-caption-wrap">
              <Link to={`/projects/${activeHero.slug}`} className="lm-arch-badge">
                <span className="lm-ab-dot" />
                <div>
                  <div className="lm-ab-title">{activeHero.projectTitle}</div>
                  <div className="lm-ab-meta">{activeHero.projectMeta}</div>
                </div>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* BOTTOM 3-CARD HORIZONTAL CATEGORY DOCK (Residential / Commercial / Bespoke) */}
          <div className="lm-bottom-cards">
            {HERO_BOTTOM_CARDS.map((card) => (
              <Link key={card.path} to={card.path} className="lm-feature-card">
                <div className="lm-fc-thumb">
                  <img src={card.image} alt={card.lines.join(" ")} loading="eager" />
                </div>
                <div className="lm-fc-body">
                  <h2 className="lm-fc-title">
                    {card.lines.map((line, i) => (
                      <span key={i}>{line}</span>
                    ))}
                  </h2>
                  <p className="lm-fc-meta">{card.meta}</p>
                  <span className="lm-fc-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 1B. COHESIVE WARM ARCHITECTURAL STATISTIC LEDGER */}
      <section className="lm-stats-bar" aria-label="Key Company Figures">
        <div className="wrap">
          <div className="lm-stats-grid">
            {LEDGER_STATS.map((st) => (
              <div key={st.idx} className="lm-stat-item">
                <div className="lm-stat-top">
                  <span className="lm-stat-idx">{st.idx}</span>
                  <span className="lm-stat-line" />
                </div>
                <div className="lm-stat-value">
                  <AnimatedCounter target={st.count} suffix={st.suffix} />
                </div>
                <div className="lm-stat-label">{st.label}</div>
                <div className="lm-stat-detail">{st.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CLIENT PARTNERS MARQUEE */}
      <section className="clients-bar" aria-label="Clients we have worked with">
        <div className="wrap">
          <div className="clients-head">
            <span className="eyebrow">Trusted By</span>
            <span className="clients-sub">Commercial, hospitality, healthcare, and residential clients across the UAE</span>
          </div>
          <div className="logo-marquee">
            <div className="logo-track">
              {[...CLIENT_PARTNERS, ...CLIENT_PARTNERS].map((client, i) => (
                <span key={`${client.name}-${i}`} className="client-logo-pill">
                  <Sparkles size={18} style={{ color: "var(--brass)" }} aria-hidden="true" />
                  <span>{client.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT STUDIO SECTION */}
      <section className="section-pad bg-paper" id="about">
        <div className="wrap">
          <div className="about-home-grid">
            <div className="about-home-copy">
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-title">A single studio, every trade under one roof.</h2>
              <p>
                {COMPANY.name} is a Dubai-based fit-out and architectural design studio specialising in bespoke, functional spaces for commercial, hospitality, and residential clients. Headquartered in Bay Square, Business Bay, with our 35,000 sq.ft manufacturing facility in Al Quoz 3, our architects, 3D visualisers, MEP engineers, and joinery craftsmen collaborate daily so nothing gets lost between drawing and delivery.
              </p>
              <p>
                Because our MEP engineering division works alongside design and joinery from day one, air-conditioning, electrical, plumbing, and authority approvals are engineered upfront rather than bolted on later — keeping every project on one predictable schedule.
              </p>
              <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link to="/about" className="btn btn-outline">
                  Our Story &amp; Mission
                </Link>
                <Link to="/founders-message" className="btn btn-brass">
                  Founder&apos;s Message
                </Link>
              </div>
            </div>

            <div className="about-visual-stack">
              <div className="room-block" style={{ minHeight: 380 }}>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                  alt="Business Bay design studio and executive workspace"
                  loading="lazy"
                  width="600"
                  height="760"
                />
                <span className="rb-label">Business Bay Studio</span>
              </div>
              <div className="about-visual-col">
                <div className="room-block" style={{ flex: 1, minHeight: 180 }}>
                  <img
                    src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=700&q=80"
                    alt="Al Quoz 3 bespoke joinery and carpentry facility"
                    loading="lazy"
                    width="500"
                    height="360"
                  />
                  <span className="rb-label">Al Quoz Joinery Bay</span>
                </div>
                <div className="room-block" style={{ flex: 1, minHeight: 180 }}>
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80"
                    alt="Material curation and 3D visualisation desk"
                    loading="lazy"
                    width="500"
                    height="360"
                  />
                  <span className="rb-label">Material Library</span>
                </div>
              </div>
              <div className="about-badge-float">
                <div className="n">{COMPANY.yearsActive}</div>
                <div className="t">Years shaping Dubai &amp; Abu Dhabi interiors</div>
              </div>
            </div>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="idx">01</div>
              <h3>Interior Fit-Out</h3>
              <p>Turnkey construction of luxury commercial and residential interiors, engineered and installed by one team.</p>
            </div>
            <div className="pillar-card">
              <div className="idx">02</div>
              <h3>Interior Design</h3>
              <p>Concept, photorealistic 3D visualisation, and material curation tailored to how you actually live and work.</p>
            </div>
            <div className="pillar-card">
              <div className="idx">03</div>
              <h3>Renovation</h3>
              <p>Full villa, penthouse, and phased office transformations executed with minimal disruption.</p>
            </div>
            <div className="pillar-card">
              <div className="idx">04</div>
              <h3>MEP Engineering</h3>
              <p>HVAC, electrical, plumbing, and fire-safety engineered in-house — never subcontracted out of sight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIX CORE SERVICES */}
      <section className="section-pad bg-paper-2" id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Six disciplines, one accountable studio.</h2>
            <p className="section-lede">
              Every discipline below is delivered by our own specialists from our Business Bay studio and Al Quoz 3 factory — zero layers of subcontracting between your brief and the finished room.
            </p>
          </div>

          <div className="service-cards-grid">
            {CORE_SERVICES.map((srv) => (
              <div key={srv.num} className="service-card">
                <div>
                  <div className="snum">{srv.num}</div>
                  <h3>{srv.title}</h3>
                  <p>{srv.shortDesc}</p>
                </div>
                <Link to={srv.path} className="service-more-link">
                  <span>Explore {srv.title}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS & AWARDS */}
      <section className="section-pad bg-white" id="certifications">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: "center" }}>
            <span className="eyebrow eyebrow-center">Certifications &amp; Standards</span>
            <h2 className="section-title" style={{ margin: "0 auto" }}>
              Independently audited, consistently recognised.
            </h2>
          </div>

          <div className="certs-row">
            {COMPANY.certifications.map((cert, i) => (
              <div key={cert.code} className="cert-card">
                <div className="cert-ring">
                  {i < 3 ? <ShieldCheck size={24} /> : <Award size={24} />}
                </div>
                <h3>{cert.code}</h3>
                <p>{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="section-pad bg-paper" id="why">
        <div className="wrap why-home-grid">
          <div>
            <div className="section-head" style={{ marginBottom: 16 }}>
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="section-title">Why clients choose to build with us.</h2>
            </div>

            <div className="why-items-list">
              <div className="why-row-item">
                <div className="wn">01</div>
                <div>
                  <h3>Everything in-house</h3>
                  <p>Design, MEP engineering, joinery manufacturing, and site installation under one company — no quality drift.</p>
                </div>
              </div>
              <div className="why-row-item">
                <div className="wn">02</div>
                <div>
                  <h3>Fast, predictable delivery</h3>
                  <p>Most commercial fit-outs complete in 60–90 days thanks to off-site Al Quoz joinery fabrication running in parallel with site works.</p>
                </div>
              </div>
              <div className="why-row-item">
                <div className="wn">03</div>
                <div>
                  <h3>ISO-certified quality &amp; HSE</h3>
                  <p>ISO 9001, 14001, and 45001 govern every project, regardless of contract size, audited annually.</p>
                </div>
              </div>
              <div className="why-row-item">
                <div className="wn">04</div>
                <div>
                  <h3>Transparent itemised pricing</h3>
                  <p>Clear Bills of Quantities (BOQ), weekly site progress updates, and milestone-linked payments with zero hidden variations.</p>
                </div>
              </div>
              <div className="why-row-item">
                <div className="wn">05</div>
                <div>
                  <h3>UAE-wide authority expertise</h3>
                  <p>Direct approvals mastery with DM, DCD, DDA, Trakhees, DIFC, Emaar, Nakheel, and Abu Dhabi municipalities.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="room-block" style={{ minHeight: 460 }}>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Yashmeen Future Building engineers and designers reviewing site progress in DIFC Dubai"
              loading="lazy"
              width="700"
              height="800"
            />
            <span className="rb-tag">Site Walkthrough</span>
            <span className="rb-label">Turnkey Fit-Out Execution — DIFC, Dubai</span>
          </div>
        </div>
      </section>

      {/* 7. RECENTLY COMPLETED FIT-OUTS (PORTFOLIO) */}
      <section className="section-pad bg-white" id="projects">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 32 }}>
            <div>
              <span className="eyebrow">Project Gallery</span>
              <h2 className="section-title">Recently completed fit-outs.</h2>
            </div>
            <Link to="/projects" className="btn btn-outline">
              View All {PROJECTS.length} Projects
            </Link>
          </div>

          <div className="filter-bar" role="group" aria-label="Filter projects by sector">
            {PROJECT_FILTERS.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn${projectFilter === cat ? " active" : ""}`}
                aria-pressed={projectFilter === cat}
                onClick={() => setProjectFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((proj) => (
              <Link
                key={proj.id}
                to={`/projects/${proj.slug}`}
                className="project-card-link"
                aria-label={`View case study: ${proj.title}`}
              >
                <div className="project-card-media">
                  <img
                    src={proj.thumbImage}
                    alt={`${proj.title} — ${proj.location}`}
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                  <span className="rb-tag">{proj.tag}</span>
                </div>
                <div className="project-card-body">
                  <div className="project-card-cat">{proj.category}</div>
                  <h3 className="project-card-title">{proj.title}</h3>
                  <div className="project-card-meta">
                    <span>{proj.location}</span>
                    <span>{proj.size}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHAT WE OFFER (INTERACTIVE TABS) */}
      <section className="section-pad bg-paper-2" id="offer">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Since {COMPANY.established}</span>
            <h2 className="section-title">What we can offer your space.</h2>
          </div>

          <div className="offer-tabs-bar" role="tablist" aria-label="Capabilities tabs">
            {OFFER_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeOfferTab === tab.id}
                className={`offer-tab-btn${activeOfferTab === tab.id ? " active" : ""}`}
                onClick={() => setActiveOfferTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="offer-panel-grid" role="tabpanel">
            <div className="offer-panel-copy">
              <h3>{currentOffer.heading}</h3>
              <p>{currentOffer.copy}</p>
              <ul className="offer-check-list">
                {currentOffer.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div style={{ marginTop: 28 }}>
                <Link to="/enquiry" className="btn btn-dark">
                  Request a Scope &amp; Quote
                </Link>
              </div>
            </div>

            <div className="room-block" style={{ aspectRatio: "16 / 11" }}>
              <img
                src={currentOffer.img}
                alt={currentOffer.caption}
                loading="lazy"
                width="800"
                height="550"
              />
              <span className="rb-label">{currentOffer.caption}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. OUR 35,000 SQ.FT AL QUOZ 3 FACTORY */}
      <section className="section-pad bg-ink" id="factory">
        <div className="wrap factory-grid">
          <div className="factory-visual-grid">
            <div className="room-block">
              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80"
                alt="35,000 sq.ft Al Quoz 3 production facility floor"
                loading="lazy"
                width="900"
                height="500"
              />
              <span className="rb-tag">Al Quoz Industrial Area 3</span>
              <span className="rb-label">35,000 sq.ft Production Facility</span>
            </div>
            <div className="room-block">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=700&q=80"
                alt="Architectural metalwork and glass fabrication workshop"
                loading="lazy"
                width="450"
                height="340"
              />
              <span className="rb-label">Metal &amp; Glass Bay</span>
            </div>
            <div className="room-block">
              <img
                src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=700&q=80"
                alt="Joinery bay with CNC and solid woodworking equipment"
                loading="lazy"
                width="450"
                height="340"
              />
              <span className="rb-label">Joinery &amp; Millwork Bay</span>
            </div>
          </div>

          <div>
            <span className="eyebrow eyebrow-light">Our Factory</span>
            <h2 className="section-title section-title-light">
              A 35,000 sq.ft facility in Al Quoz 3.
            </h2>
            <p style={{ marginTop: 16, color: "rgba(250, 247, 240, 0.8)" }}>
              Three specialist manufacturing divisions share one roof in Al Quoz Industrial Area 3, keeping bespoke joinery, metalwork, glass, upholstery, and spray finishing under 100% in-house quality control.
            </p>

            <div className="factory-divs-list">
              <div className="fdiv-item">
                <div>
                  <h3>Joinery &amp; Upholstery</h3>
                  <p>CNC woodworking, natural timber veneers, acoustic wall panels, wardrobes, kitchens, and bespoke upholstered seating.</p>
                </div>
              </div>
              <div className="fdiv-item">
                <div>
                  <h3>Metal &amp; Architectural Glass</h3>
                  <p>Custom brass, bronze, and stainless steelwork paired with double-glazed acoustic partitions and feature mirrors.</p>
                </div>
              </div>
              <div className="fdiv-item">
                <div>
                  <h3>Signage &amp; Specialist Finishes</h3>
                  <p>Corporate environmental branding, liquid metal coatings, and dust-free polyurethane lacquer booths.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS CAROUSEL */}
      <section className="section-pad bg-paper-2" id="testimonials">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: "center" }}>
            <span className="eyebrow eyebrow-center">Testimonials</span>
            <h2 className="section-title" style={{ margin: "0 auto" }}>
              What our clients say.
            </h2>
          </div>

          <div className="testi-shell">
            <div className="testi-card">
              <svg width="34" height="26" viewBox="0 0 34 26" fill="var(--brass)" style={{ margin: "0 auto" }} aria-hidden="true">
                <path d="M0 26V14.6C0 6.2 4.9 1 12.9 0l1.5 4.4C9 5.6 6.4 8.6 6.1 13.2h7.5V26H0zm18.6 0V14.6c0-8.4 4.9-13.6 12.9-14.6l1.5 4.4c-5.4 1.2-8 4.2-8.3 8.8h7.5V26H18.6z" />
              </svg>
              <p className="testi-quote-msg">&ldquo;{currentTesti.quote}&rdquo;</p>
              <div className="testi-who">
                <strong>{currentTesti.author}</strong>
                <span>{currentTesti.role}</span>
              </div>
            </div>

            <div className="testi-nav">
              <button
                type="button"
                className="testi-arrow-btn"
                aria-label="Previous testimonial"
                onClick={() => setTestiIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              >
                <ChevronLeft size={18} />
              </button>

              <div className="testi-dots-row" role="tablist" aria-label="Choose testimonial">
                {TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={testiIdx === idx}
                    aria-label={`Show testimonial ${idx + 1} from ${item.author}`}
                    className={`testi-dot-btn${testiIdx === idx ? " active" : ""}`}
                    onClick={() => setTestiIdx(idx)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="testi-arrow-btn"
                aria-label="Next testimonial"
                onClick={() => setTestiIdx((prev) => (prev + 1) % TESTIMONIALS.length)}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. JOURNAL / INSIGHTS */}
      <section className="section-pad bg-paper" id="blog">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Insights</span>
            <h2 className="section-title">From the journal.</h2>
          </div>

          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="blog-card">
                <Link to={`/blog/${post.slug}`} className="room-block" style={{ aspectRatio: "16 / 10" }}>
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    width="600"
                    height="375"
                  />
                  <span className="rb-tag">{post.tag}</span>
                </Link>
                <div className="blog-card-body">
                  <div className="blog-meta">{post.date}</div>
                  <h3>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="service-more-link">
                    <span>Read Article</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CONTACT & CONSULTATION FORM */}
      <section className="section-pad bg-ink" id="contact">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow eyebrow-light">Get In Touch</span>
            <h2 className="section-title section-title-light">Start your project.</h2>
          </div>

          <div className="contact-home-grid">
            <div>
              <div className="cinfo-list">
                <div className="cinfo-item">
                  <div className="cinfo-icon"><Phone size={18} /></div>
                  <div>
                    <h3>Call the Studio</h3>
                    <p><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></p>
                  </div>
                </div>
                <div className="cinfo-item">
                  <div className="cinfo-icon"><Mail size={18} /></div>
                  <div>
                    <h3>Email Us</h3>
                    <p><a href={COMPANY.emailHref}>{COMPANY.email}</a></p>
                  </div>
                </div>
                <div className="cinfo-item">
                  <div className="cinfo-icon"><MapPin size={18} /></div>
                  <div>
                    <h3>Design Studio (Head Office)</h3>
                    <p>{COMPANY.studioAddress}</p>
                  </div>
                </div>
                <div className="cinfo-item">
                  <div className="cinfo-icon"><MapPin size={18} /></div>
                  <div>
                    <h3>In-House Joinery &amp; Factory</h3>
                    <p>{COMPANY.factoryAddress}</p>
                  </div>
                </div>
              </div>

              <div className="map-embed-box">
                <iframe
                  title="Yashmeen Future Building Business Bay Studio Map"
                  src={COMPANY.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="dark-form-card">
              {submittedEntry ? (
                <div style={{ textAlign: "center", padding: "28px 12px" }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(37, 211, 102, 0.18)",
                      color: "#4ade80",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px"
                    }}
                  >
                    <Check size={28} />
                  </div>
                  <h3 style={{ fontSize: 26, color: "var(--paper)", marginBottom: 10 }}>
                    Enquiry Received
                  </h3>
                  <p style={{ color: "rgba(250, 247, 240, 0.8)", marginBottom: 24 }}>
                    Thank you, <strong>{submittedEntry.name}</strong>. Your project brief has been logged and our senior estimator will reach out within one working day.
                  </p>
                  <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <a
                      href={buildWhatsAppEnquiryUrl(submittedEntry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-brass"
                    >
                      Send via WhatsApp Now
                    </a>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => setSubmittedEntry(null)}
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleHomeSubmit}>
                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="h-name">Full Name *</label>
                      <input
                        id="h-name"
                        type="text"
                        required
                        className="form-input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="h-phone">Phone *</label>
                      <input
                        id="h-phone"
                        type="tel"
                        required
                        className="form-input"
                        placeholder="+971 50 000 0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="h-email">Email *</label>
                      <input
                        id="h-email"
                        type="email"
                        required
                        className="form-input"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="h-service">Service Needed</label>
                      <select
                        id="h-service"
                        className="form-input"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                      >
                        <option value="Interior Fit-Out">Interior Fit-Out</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Villa Renovation">Villa Renovation</option>
                        <option value="Office Fit-Out & Renovation">Office Fit-Out &amp; Renovation</option>
                        <option value="Bespoke Joinery Works">Bespoke Joinery Works</option>
                        <option value="Architecture & Construction">Architecture &amp; Construction</option>
                        <option value="MEP Engineering">MEP Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="h-msg">Tell us about your project *</label>
                    <textarea
                      id="h-msg"
                      rows={4}
                      required
                      className="form-input"
                      placeholder="Location, approximate sq.ft, commercial or residential, target timeline..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-brass"
                    style={{ width: "100%" }}
                    disabled={sending}
                  >
                    {sending ? "Submitting Enquiry..." : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
