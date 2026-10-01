import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../data/siteData';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function AboutPage() {
  usePageMeta({
    title: 'About Us — Turnkey Fit-Out & Architecture Specialists Since 2016',
    description: 'Discover Yashmeen Future Building & Fit-Out Contracting Co. L.L.C. Established in 2016 in Dubai with a 35,000 sq.ft Al Quoz joinery factory and 200+ in-house specialists.',
    canonicalPath: '/about'
  });

  const milestones = [
    {
      year: '2016',
      title: 'Foundation in Dubai',
      desc: 'Founded by Mohammad Danish Adnan as a specialist interior contracting and custom joinery practice serving commercial clients in Business Bay and Deira.'
    },
    {
      year: '2018',
      title: 'Al Quoz Manufacturing Facility',
      desc: 'Expanded into a dedicated in-house bespoke timber, stone, and architectural metal fabrication plant in Al Quoz Industrial Area 3.'
    },
    {
      year: '2021',
      title: 'Turnkey MEP & Authority Division',
      desc: 'Launched our integrated mechanical, electrical, plumbing, and Dubai Municipality / DCD / Trakhees authority approval engineering unit.'
    },
    {
      year: '2024',
      title: '500+ Projects Milestone',
      desc: 'Surpassed 500 delivered commercial workspaces, F&B flagships, clinics, and private villas across Dubai, Abu Dhabi, and Sharjah.'
    },
    {
      year: '2026',
      title: '640+ Delivered Spaces & Smart Integration',
      desc: 'Operating a 35,000 sq.ft automated CNC joinery facility with 200+ specialists delivering LEED-aligned, KNX-automated architectural spaces.'
    }
  ];

  const pillars = [
    {
      num: '01',
      title: 'Single-Point Accountability',
      desc: 'Unlike fragmented design studios or pure brokers, we unite architectural design, authority approvals, MEP engineering, and factory joinery under one contract.'
    },
    {
      num: '02',
      title: '35,000 sq.ft In-House Factory',
      desc: 'Direct control over custom millwork, acoustic paneling, fire-rated doors, and stone fabrication in Al Quoz 3—eliminating middleman markups and delays.'
    },
    {
      num: '03',
      title: 'First-Time Authority Clearance',
      desc: 'Dedicated authority engineers registered across DM, DCD, DDA, Trakhees, DIFC, and Emaar ensure rapid permit issuance and completion certificates.'
    },
    {
      num: '04',
      title: 'Fixed-Price BOQ Transparency',
      desc: 'Every contract includes an itemized Bill of Quantities, material sample sign-offs, and weekly milestone Gantt tracking with zero hidden variations.'
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="About YFB Contracting · Est. 2016"
        title={<>Engineering <em>Timeless</em> Spaces Across the UAE</>}
        subtitle="Yashmeen Future Building & Fit-Out Contracting Co. L.L.C is a premier design-and-build firm uniting architectural vision, in-house manufacturing, and precision site execution."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* OVERVIEW SECTION */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="/static/about-us.webp"
                alt="YFB Fit-Out Contracting — Architectural Interior Execution"
                style={{ width: '100%', height: '540px', objectFit: 'cover', border: '1px solid var(--border)' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                background: 'rgba(13, 13, 13, 0.92)',
                border: '1px solid var(--accent)',
                padding: '22px 28px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--accent)', lineHeight: 1 }}>
                  {COMPANY.established} — {COMPANY.yearsExperience} Years
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cream)', marginTop: '6px' }}>
                  Single-Source Turnkey Excellence
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-title">
                Where Architectural Craft Meets <em>Engineering Discipline</em>
              </h2>
              <p className="lead-text" style={{ marginBottom: '20px' }}>
                Established in {COMPANY.established} in Dubai by {COMPANY.founder.name}, {COMPANY.legalName} has grown into one of the UAE&apos;s most trusted turnkey interior fit-out and architectural contracting companies.
              </p>
              <p className="lead-text" style={{ marginBottom: '28px' }}>
                From corporate headquarters in DIFC and Business Bay to private signature villas in Palm Jumeirah and Emirates Hills, our {COMPANY.inHouseTeam} in-house architects, MEP engineers, and master joiners execute complex spatial transformations with a {COMPANY.onTimeRate} on-time handover record.
              </p>

              <div className="grid-2" style={{ gap: '20px', marginBottom: '32px' }}>
                <div className="card" style={{ padding: '22px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px' }}>
                    Our Mission
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                    To deliver architectural environments of enduring value through itemized cost transparency, factory-controlled craftsmanship, and uncompromising adherence to timelines.
                  </p>
                </div>
                <div className="card" style={{ padding: '22px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px' }}>
                    Our Vision
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                    To set the regional benchmark for integrated design-and-build execution across the UAE, blending sustainable materials with intelligent building systems.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/founders-message" className="btn btn-primary">
                  Read Founder&apos;s Message
                </Link>
                <Link to="/projects" className="btn btn-outline">
                  Explore 640+ Delivered Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIFIED STATS BAR */}
      <section className="section section-alt" style={{ padding: '64px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center' }}>
            {COMPANY.stats.map((s) => (
              <div key={s.label} style={{ padding: '16px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.2rem', color: 'var(--accent)', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--cream)', marginTop: '10px' }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '4px' }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 PILLARS */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
            <span className="eyebrow">The YFB Advantage</span>
            <h2 className="section-title">
              Built on Four <em>Non-Negotiable</em> Pillars
            </h2>
          </div>
          <div className="grid-4">
            {pillars.map((p) => (
              <div key={p.num} className="card">
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--accent)', marginBottom: '14px' }}>
                  {p.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--cream)', marginBottom: '12px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
            <span className="eyebrow">Our Journey (2016 — 2026)</span>
            <h2 className="section-title">
              A Decade of <em>Continuous Growth</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gap: '20px' }}>
            {milestones.map((m) => (
              <div key={m.year} className="card" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '24px', alignItems: 'center', padding: '28px 32px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent)', borderRight: '1px solid var(--border)', paddingRight: '20px' }}>
                  {m.year}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--cream)', marginBottom: '6px' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & AUTHORITIES */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Compliance & Accreditations</span>
              <h2 className="section-title">
                ISO Certified & <em>Authority Approved</em>
              </h2>
              <p className="lead-text" style={{ marginBottom: '24px' }}>
                Every YFB project is engineered and executed in strict compliance with UAE Civil Defense codes, green building regulations, and international ISO quality standards.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {COMPANY.authorities.map((auth) => (
                  <span key={auth} className="badge">{auth}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gap: '16px' }}>
              {COMPANY.certifications.map((cert) => (
                <div key={cert.code} className="card" style={{ padding: '22px 26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--accent)' }}>{cert.code}</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--muted)', marginTop: '4px' }}>{cert.label}</div>
                  </div>
                  <span className="badge">Verified</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
