import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUp } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "../data/siteData";
import { useSmoothScrollAndParallax } from "../utils/useSmoothScrollAndParallax";

function WhatsAppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.71 6.404L3.2 28.8l6.56-1.72a12.74 12.74 0 0 0 6.244 1.62h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.053A12.71 12.71 0 0 0 16.004 3.2Zm7.485 18.27c-.315.89-1.838 1.7-2.55 1.807-.652.098-1.477.14-2.385-.148-.55-.175-1.256-.41-2.16-.8-3.8-1.64-6.282-5.467-6.472-5.72-.19-.253-1.545-2.056-1.545-3.922 0-1.866.978-2.784 1.325-3.164.347-.38.757-.475 1.01-.475.252 0 .505.003.726.013.233.011.545-.088.852.65.316.76 1.073 2.626 1.168 2.816.095.19.158.412.032.665-.126.253-.19.41-.38.633-.19.22-.398.493-.568.664-.19.19-.388.396-.166.776.22.38.982 1.62 2.108 2.624 1.448 1.29 2.668 1.69 3.047 1.88.38.19.6.158.82-.095.222-.253.947-1.107 1.2-1.487.252-.38.504-.316.85-.19.348.126 2.21.1.042 2.588 1.233.38.19.632.285.726.443.095.158.095.918-.22 1.807Z"
      />
    </svg>
  );
}

export default function Layout({ children }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  useSmoothScrollAndParallax();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    if (!location.hash) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`;

  return (
    <>
      <div className="scroll-progress-bar" aria-hidden="true" />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand-logo-link" aria-label={`${COMPANY.shortName} Home`}>
            <img
              src="/static/logo.jpg"
              alt={`${COMPANY.shortName} Logo`}
              className="main-logo"
              width="150"
              height="64"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Primary Navigation">
            {NAV_ITEMS.map((item) => {
              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="nav-item-wrap"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                >
                  <span className="nav-link-group">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `nav-link-anchor${isActive ? " active" : ""}`}
                    >
                      {item.label}
                    </NavLink>
                    {item.dropdown && (
                      <button
                        type="button"
                        className="nav-chevron-btn"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isOpen}
                        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      >
                        <ChevronDown
                          size={15}
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease"
                          }}
                        />
                      </button>
                    )}
                  </span>

                  {item.dropdown && isOpen && (
                    <div className="dropdown-panel" role="menu">
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          role="menuitem"
                          className={({ isActive }) => `dropdown-item${isActive ? " active" : ""}`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="header-actions">
            <div className="header-call-block">
              <span className="header-call-label">Call the Studio</span>
              <a href={COMPANY.phoneHref} className="header-call-number">
                {COMPANY.phone}
              </a>
            </div>
            <Link to="/enquiry" className="header-enquire-btn">
              Enquire Now
            </Link>
          </div>

          <button
            type="button"
            className="hamburger-btn"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="mobile-drawer" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const subOpen = mobileSub === item.label;
              return (
                <div key={item.label}>
                  <div className="mobile-nav-row">
                    <Link
                      to={item.path}
                      className="mobile-nav-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <button
                        type="button"
                        className="mobile-submenu-toggle"
                        aria-label={`Toggle ${item.label} mobile submenu`}
                        aria-expanded={subOpen}
                        onClick={() => setMobileSub(subOpen ? null : item.label)}
                      >
                        <ChevronDown
                          size={18}
                          style={{
                            transform: subOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease"
                          }}
                        />
                      </button>
                    )}
                  </div>
                  {item.dropdown && subOpen && (
                    <div className="mobile-sub-list">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="mobile-sub-item"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ paddingTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <div>
                <div className="header-call-label">Direct Studio Line</div>
                <a href={COMPANY.phoneHref} className="header-call-number">
                  {COMPANY.phone}
                </a>
              </div>
              <Link
                to="/enquiry"
                className="btn btn-brass"
                onClick={() => setMobileOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content">
        {children || <Outlet />}
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" aria-label={`${COMPANY.shortName} Home`}>
                <img
                  src="/static/logo.jpg"
                  alt={`${COMPANY.shortName} Logo`}
                  style={{ height: 58, width: "auto", borderRadius: 4, background: "#fff", padding: 4 }}
                  width="136"
                  height="58"
                  loading="lazy"
                />
              </Link>
              <p>
                A Dubai-based interior fit-out, architecture, and joinery studio delivering turnkey commercial, residential, and hospitality spaces across the UAE since {COMPANY.established}.
              </p>
              <div className="footer-social">
                <a
                  href={COMPANY.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Yashmeen Future Building on LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                  </svg>
                </a>
                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Yashmeen Future Building on Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Studio</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/founders-message">Founder&apos;s Message</Link></li>
                <li><Link to="/why-us">Why Choose Us</Link></li>
                <li><Link to="/projects">Portfolio</Link></li>
                <li><Link to="/photo-gallery">Photo Gallery</Link></li>
                <li><Link to="/video-gallery">Video Walkthroughs</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Services</h3>
              <ul>
                <li><Link to="/services">All Services Overview</Link></li>
                <li><Link to="/services/interior-design">Interior Fit-Out &amp; Design</Link></li>
                <li><Link to="/services/architecture">Architecture Design &amp; Build</Link></li>
                <li><Link to="/services/construction">Construction &amp; MEP</Link></li>
                <li><Link to="/services/office-renovation">Office Renovation</Link></li>
                <li><Link to="/enquiry">Request a Quotation</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
                </li>
                <li>
                  <a href={COMPANY.emailHref}>{COMPANY.email}</a>
                </li>
                <li>{COMPANY.studioAddress}</li>
                <li style={{ color: "#9c9890", fontSize: 13 }}>{COMPANY.factoryAddress}</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
            <span>ISO 9001:2015 · ISO 14001:2015 · ISO 45001:2015 Certified Turnkey Contractor</span>
          </div>
        </div>
      </footer>

      <div className="fab-stack">
        {showScrollTop && (
          <button
            type="button"
            className="fab-scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fab-whatsapp"
          aria-label={`Chat with ${COMPANY.shortName} on WhatsApp`}
        >
          <WhatsAppIcon />
        </a>
      </div>
    </>
  );
}

export function PageHero({ eyebrow, title, subtitle, breadcrumbs = [], bgImage = "/static/pages-bg.webp" }) {
  return (
    <section
      className="subpage-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="wrap">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16, display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(250,247,240,0.72)" }}>
            <Link to="/" style={{ color: "var(--brass-light)" }}>Home</Link>
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <span>/</span>
                {bc.to ? (
                  <Link to={bc.to} style={{ color: "var(--brass-light)" }}>{bc.label}</Link>
                ) : (
                  <span>{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        {eyebrow && <div className="eyebrow eyebrow-light eyebrow-center">{eyebrow}</div>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
