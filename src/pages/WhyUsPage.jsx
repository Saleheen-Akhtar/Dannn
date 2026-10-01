import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, VIDEO_SHOWCASES } from '../data/siteData';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function WhyUsPage() {
  usePageMeta({
    title: 'Why Choose YFB — In-House Al Quoz Factory & 98% On-Time Delivery',
    description: 'See why leading UAE corporates and villa owners choose YFB Fit-Out Contracting: 35,000 sq.ft Al Quoz joinery plant, itemized BOQs, and 98% on-time handovers.',
    canonicalPath: '/why-us'
  });

  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const activeTour = VIDEO_SHOWCASES[activeTourIndex] || VIDEO_SHOWCASES[0];

  const comparisonRows = [
    {
      criterion: 'Joinery & Custom Millwork',
      yfb: 'In-house 35,000 sq.ft CNC & spray-booth plant in Al Quoz 3',
      typical: 'Outsourced to 3rd-party workshops with markup & delays'
    },
    {
      criterion: 'Authority Approvals (DM / DCD / DIFC)',
      yfb: 'Dedicated in-house authority engineers & direct portal submission',
      typical: 'External PROs leading to multiple rejection cycles'
    },
    {
      criterion: 'Cost & BOQ Structure',
      yfb: 'Fixed-price, line-by-line itemized BOQ before mobilization',
      typical: 'Lump-sum allowances that trigger costly site variations'
    },
    {
      criterion: 'MEP & HVAC Engineering',
      yfb: 'Integrated in-house MEP team with coordinated BIM shop drawings',
      typical: 'Subcontracted MEP clashing with ceiling & joinery details'
    },
    {
      criterion: 'Handover & Post-Completion Support',
      yfb: '98% on-time handover + 12-month DLP & 24/7 rapid response',
      typical: 'Snagging delays and slow post-handover maintenance'
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="The YFB Difference"
        title={<>Why Discerning Clients <em>Choose YFB</em></>}
        subtitle="We eliminate the risks of fragmented contracting by owning the entire delivery chain—from architectural concept and authority approvals to in-house factory joinery."
        breadcrumbs={[
          { label: 'About Us', to: '/about' },
          { label: 'Why Choose Us' }
        ]}
        bgImage="/static/why-us-bg.jpg"
      />

      {/* FEATURE SHOWCASE */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Total Vertical Integration</span>
              <h2 className="section-title">
                Engineered for <em>Zero Surprises</em> on Site
              </h2>
              <p className="lead-text" style={{ marginBottom: '24px' }}>
                In the UAE fit-out industry, project delays almost always trace back to two bottlenecks: waiting on external joinery sub-suppliers and navigating complex authority permits.
              </p>
              <p className="lead-text" style={{ marginBottom: '32px' }}>
                YFB solved both. With {COMPANY.inHouseTeam} full-time specialists and our own {COMPANY.factorySize} manufacturing plant in Al Quoz Industrial Area 3, we control quality, cost, and critical-path timelines directly.
              </p>

              <div className="grid-2" style={{ gap: '16px' }}>
                <div className="card" style={{ padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent)' }}>100%</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--cream)', marginTop: '4px' }}>BOQ Price Certainty</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '6px' }}>Every material sample and unit rate locked prior to site start.</p>
                </div>
                <div className="card" style={{ padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent)' }}>{COMPANY.onTimeRate}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--cream)', marginTop: '4px' }}>On-Time Handover</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '6px' }}>Verified across {COMPANY.projectsCompleted} commercial and residential handovers.</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/static/why-us.jpg"
                alt="YFB Fit-Out Precision Site & Joinery Execution"
                style={{ width: '100%', height: '500px', objectFit: 'cover', border: '1px solid var(--border)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '44px' }}>
            <span className="eyebrow">Side-by-Side Comparison</span>
            <h2 className="section-title">
              YFB Turnkey vs. <em>Conventional Contractors</em>
            </h2>
          </div>

          <div style={{ overflowX: 'auto', border: '1px solid var(--border)', background: 'var(--ink-2)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)', background: 'var(--ink-3)' }}>
                  <th style={{ padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    Delivery Criterion
                  </th>
                  <th style={{ padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    YFB Fit-Out Contracting (In-House)
                  </th>
                  <th style={{ padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    Typical Fit-Out Broker / Contractor
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.criterion} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '20px 24px', fontWeight: 500, color: 'var(--cream)', fontSize: '0.92rem' }}>
                      {row.criterion}
                    </td>
                    <td style={{ padding: '20px 24px', color: 'var(--cream)', fontSize: '0.9rem', background: 'rgba(201, 168, 76, 0.05)' }}>
                      <span style={{ color: 'var(--accent)', marginRight: '8px', fontWeight: 700 }}>✓</span>
                      {row.yfb}
                    </td>
                    <td style={{ padding: '20px 24px', color: 'var(--muted)', fontSize: '0.88rem' }}>
                      <span style={{ color: 'var(--danger)', marginRight: '8px' }}>✕</span>
                      {row.typical}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INTERACTIVE STUDIO & FACTORY SHOWCASE (Replaces broken VIDEO_ID_HERE iframe) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
            <div>
              <span className="eyebrow">Behind the Scenes</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Inside Our <em>Execution & Factory</em> Walkthroughs
              </h2>
            </div>
            <Link to="/video-gallery" className="btn btn-outline">
              View All 8 Walkthroughs
            </Link>
          </div>

          <div className="grid-2" style={{ gap: '32px', alignItems: 'stretch' }}>
            <div className="card" style={{ padding: 0, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '420px' }}>
              <img
                src={activeTour.thumbnail}
                alt={activeTour.title}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)' }}
              />
              <div style={{ position: 'relative', zIndex: 2, padding: '32px', background: 'linear-gradient(to top, rgba(13,13,13,0.95), transparent)' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge">{activeTour.category}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--cream)' }}>
                    {activeTour.duration} · {activeTour.location}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--cream)', marginBottom: '10px' }}>
                  {activeTour.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '18px', lineHeight: 1.7 }}>
                  {activeTour.summary}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeTour.highlights.map((h) => (
                    <span key={h} style={{ fontSize: '0.75rem', padding: '5px 12px', background: 'rgba(201,168,76,0.14)', border: '1px solid var(--border-gold)', color: 'var(--accent-light)' }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '12px' }}>
              {VIDEO_SHOWCASES.slice(0, 4).map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTourIndex(idx)}
                  style={{
                    textAlign: 'left',
                    padding: '20px 24px',
                    background: idx === activeTourIndex ? 'rgba(201,168,76,0.12)' : 'var(--ink-2)',
                    border: '1px solid ' + (idx === activeTourIndex ? 'var(--accent)' : 'var(--border)'),
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    transition: 'var(--transition)'
                  }}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>
                      0{idx + 1} · {item.category} ({item.duration})
                    </div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--cream)' }}>
                      {item.title}
                    </div>
                  </div>
                  <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>→</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
