import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_PAGES_DATA, PROJECTS, COMPANY } from '../data/siteData';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function ServiceDetailPage({ serviceKey }) {
  const data = SERVICE_PAGES_DATA[serviceKey] || SERVICE_PAGES_DATA['interior-design'];
  const [sliderPos, setSliderPos] = useState(50);

  usePageMeta({
    title: data.seoTitle,
    description: data.seoDescription,
    canonicalPath: '/services/' + serviceKey
  });

  const relatedProjects = PROJECTS.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: data.heroTitle }
        ]}
        bgImage={data.heroImage}
      />

      {/* KEY METRICS STRIP */}
      <section style={{ background: 'var(--ink-2)', borderBottom: '1px solid var(--border)', padding: '36px 0' }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center' }}>
            {data.stats.map((st) => (
              <div key={st.label}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--accent)', lineHeight: 1 }}>
                  {st.value}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '8px' }}>
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE DISCIPLINES / SPECIALTIES */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
            <span className="eyebrow">Technical Scope of Works</span>
            <h2 className="section-title">
              Specialist Capabilities in <em>{data.heroTitle}</em>
            </h2>
          </div>

          <div className="grid-2" style={{ gap: '28px' }}>
            {data.specialties.map((spec, i) => (
              <div key={spec.title} className="card" style={{ padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr', background: 'var(--ink-2)' }}>
                <img src={spec.image} alt={spec.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '28px 32px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="badge">{spec.tag}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)' }}>0{i + 1}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '10px' }}>
                    {spec.title}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                    {spec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER INTERACTIVE SLIDER + TIER PACKAGES (For Office Renovation or any service with beforeAfter) */}
      {data.beforeAfter && (
        <section className="section section-alt">
          <div className="container">
            <div className="grid-2" style={{ gap: '48px', alignItems: 'center' }}>
              <div>
                <span className="eyebrow">Interactive Transformation</span>
                <h2 className="section-title">
                  Before &amp; After <em>Workspace Renewal</em>
                </h2>
                <p className="lead-text" style={{ marginBottom: '20px' }}>
                  Drag the comparison slider to inspect how our in-house team transforms dated shell-and-core or legacy cellular offices into high-performance acoustic environments.
                </p>
                <div className="card" style={{ padding: '20px', marginBottom: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--danger)', textTransform: 'uppercase', marginBottom: '4px' }}>Before Intervention</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>{data.beforeAfter.beforeLabel}</p>
                </div>
                <div className="card" style={{ padding: '20px', borderColor: 'var(--border-gold)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '4px' }}>After YFB Turnkey Fit-Out</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--cream)' }}>{data.beforeAfter.afterLabel}</p>
                </div>
              </div>

              <div>
                <div style={{ position: 'relative', height: '420px', overflow: 'hidden', border: '1px solid var(--border)', userSelect: 'none' }}>
                  <img
                    src={data.beforeAfter.afterImage}
                    alt="After YFB Fit-Out"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, width: sliderPos + '%', overflow: 'hidden', borderRight: '2px solid var(--accent)' }}>
                    <img
                      src={data.beforeAfter.beforeImage}
                      alt="Before Fit-Out"
                      style={{ width: '100%', height: '420px', objectFit: 'cover', filter: 'grayscale(70%) contrast(0.9)' }}
                    />
                  </div>
                  <span className="badge" style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(13,13,13,0.85)' }}>Before</span>
                  <span className="badge" style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(13,13,13,0.85)' }}>After</span>
                </div>
                <div style={{ marginTop: '16px' }}>
                  <label htmlFor="ba-slider" className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Slide to Compare</span>
                    <span>{sliderPos}%</span>
                  </label>
                  <input
                    id="ba-slider"
                    type="range"
                    min="5"
                    max="95"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'ew-resize' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RENOVATION PACKAGES (IF PRESENT) */}
      {data.packages && (
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
              <span className="eyebrow">Tailored Delivery Models</span>
              <h2 className="section-title">
                Structured <em>Renovation Programmes</em>
              </h2>
            </div>
            <div className="grid-3">
              {data.packages.map((pkg, idx) => (
                <div key={pkg.tier} className="card" style={{ borderColor: idx === 1 ? 'var(--accent)' : 'var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="badge">{pkg.timeline}</span>
                      {idx === 1 && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)', textTransform: 'uppercase' }}>Most Popular</span>}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--cream)', marginBottom: '6px' }}>
                      {pkg.tier}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: 'var(--accent)', marginBottom: '20px' }}>
                      Ideal for: {pkg.idealFor}
                    </p>
                    <ul style={{ paddingLeft: '18px', display: 'grid', gap: '10px', color: 'var(--muted)', fontSize: '0.88rem', marginBottom: '28px' }}>
                      {pkg.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/enquiry" className={idx === 1 ? 'btn btn-primary' : 'btn btn-outline'} style={{ width: '100%' }}>
                    Request {pkg.tier} BOQ
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4-STEP METHODOLOGY */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '48px' }}>
            <span className="eyebrow">Execution Methodology</span>
            <h2 className="section-title">
              Our 4-Stage <em>Delivery Protocol</em>
            </h2>
          </div>
          <div className="grid-4">
            {data.process.map((p) => (
              <div key={p.step} className="card">
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.3rem', color: 'var(--accent)', marginBottom: '12px' }}>
                  {p.step}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--cream)', marginBottom: '10px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <span className="eyebrow">Proven Track Record</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Recent <em>Delivered Projects</em></h2>
            </div>
            <Link to="/projects" className="btn btn-outline">View All 12 Case Studies</Link>
          </div>
          <div className="grid-3">
            {relatedProjects.map((proj) => (
              <Link key={proj.id} to={'/projects/' + proj.slug} className="card" style={{ padding: 0, overflow: 'hidden', textDecoration: 'none' }}>
                <img src={proj.heroImage} alt={proj.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{ padding: '24px' }}>
                  <span className="eyebrow">{proj.category} · {proj.location}</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '8px' }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{proj.area} · Completed {proj.year}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* DIRECT CONSULTATION CTA (Fixes USBC competitor phone bug) */}
          <div className="card" style={{ marginTop: '48px', padding: '40px', background: 'var(--ink-2)', borderColor: 'var(--border-gold)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span className="eyebrow">Start Your Project</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', color: 'var(--cream)', marginBottom: '6px' }}>
                Ready to Discuss Your {data.heroTitle} Requirements?
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>
                Speak directly with our Dubai engineering & estimation team at <strong style={{ color: 'var(--accent)' }}>{COMPANY.phone}</strong> or <strong style={{ color: 'var(--accent)' }}>{COMPANY.email}</strong>.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/enquiry" className="btn btn-primary">Request Itemized Quote</Link>
              <a href={'tel:' + COMPANY.phoneRaw} className="btn btn-outline">Call {COMPANY.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
