import React from 'react';
import { Link } from 'react-router-dom';
import { CORE_SERVICES, COMPANY } from '../data/siteData';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function ServicesHubPage() {
  usePageMeta({
    title: 'Turnkey Fit-Out, Architecture, Construction & Renovation Services in Dubai',
    description: 'Explore YFB Fit-Out Contracting capabilities: Architecture Design, Luxury Interior Fit-Out, Civil & MEP Construction, Office Renovation, and Bespoke Joinery.',
    canonicalPath: '/services'
  });

  const specialistLinks = [
    {
      title: 'Architecture Design',
      path: '/services/architecture',
      tag: 'BIM · Concept to Permit',
      desc: 'Contextual structural architecture, villa massing, facade engineering, and full Dubai Municipality / DDA authority submissions.'
    },
    {
      title: 'Interior Design & Turnkey Fit-Out',
      path: '/services/interior-design',
      tag: 'Bespoke Luxury Interiors',
      desc: 'Material curation, 3D photorealistic visualization, acoustic engineering, and complete site execution across offices, hospitality, and villas.'
    },
    {
      title: 'Civil, MEP & Construction',
      path: '/services/construction',
      tag: 'Structural & Electro-Mechanical',
      desc: 'Shell-and-core structural modifications, mezzanine steelworks, HVAC/fire-fighting upgrades, and civil contracting.'
    },
    {
      title: 'Office Renovation & Workspace',
      path: '/services/office-renovation',
      tag: 'Zero-Downtime Phased Fit-Out',
      desc: 'Rapid corporate workspace transformation, acoustic glass partitioning, ergonomic furniture, and IT/AV integration.'
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Integrated Design & Build Capabilities"
        title={<>Comprehensive <em>Turnkey Services</em> Under One Roof</>}
        subtitle="From initial feasibility and Dubai authority approvals to in-house Al Quoz joinery manufacturing and final commissioning, we manage every discipline in-house."
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* 4 SPECIALIST PRACTICE AREAS */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
            <span className="eyebrow">Dedicated Practice Divisions</span>
            <h2 className="section-title">
              Four Specialist Divisions, <em>One Accountable Partner</em>
            </h2>
          </div>

          <div className="grid-2" style={{ gap: '28px' }}>
            {specialistLinks.map((s, idx) => (
              <Link
                key={s.path}
                to={s.path}
                className="card"
                style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textDecoration: 'none' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span className="badge">{s.tag}</span>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--accent)' }}>0{idx + 1}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--cream)', marginBottom: '12px' }}>
                    {s.title}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: 1.75, marginBottom: '24px' }}>
                    {s.desc}
                  </p>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Explore Division Specifications <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ALL 6 CORE CAPABILITIES */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
            <span className="eyebrow">Complete Scope Matrix</span>
            <h2 className="section-title">
              Full-Spectrum <em>Technical Execution</em>
            </h2>
          </div>

          <div className="grid-3">
            {CORE_SERVICES.map((srv) => (
              <div key={srv.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <img src={srv.image} alt={srv.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span className="eyebrow">{srv.number} · {srv.shortTitle}</span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--cream)', marginBottom: '10px' }}>
                      {srv.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '18px' }}>
                      {srv.description}
                    </p>
                    <ul style={{ paddingLeft: '16px', color: 'var(--cream)', fontSize: '0.82rem', display: 'grid', gap: '6px', marginBottom: '22px' }}>
                      {srv.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={srv.path} className="btn btn-outline" style={{ width: '100%' }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY APPROVAL BANNER */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: '44px', background: 'var(--ink-2)', borderColor: 'var(--border-gold)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '28px' }}>
            <div style={{ maxWidth: '640px' }}>
              <span className="eyebrow">Direct Authority Approvals</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--cream)', marginBottom: '10px' }}>
                Need Fast-Track Fit-Out Permits & BOQ Pricing?
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: 1.7 }}>
                Our in-house engineering team manages architectural and MEP submissions across {COMPANY.authorities.join(', ')}.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/enquiry" className="btn btn-primary">Request Itemized BOQ</Link>
              <a href={'tel:' + COMPANY.phoneRaw} className="btn btn-outline">Call {COMPANY.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
