import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../data/siteData';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function FoundersMessagePage() {
  usePageMeta({
    title: "Founder's Message — Mohammad Danish Adnan",
    description: "Read the message from Mohammad Danish Adnan, Founder & Managing Director of Yashmeen Future Building & Fit-Out Contracting Co. L.L.C in Dubai.",
    canonicalPath: '/founders-message'
  });

  return (
    <>
      <PageHero
        eyebrow="Leadership Perspective"
        title={<>Message from Our <em>Founder</em></>}
        subtitle="On building a design-and-build practice anchored in engineering integrity, factory-controlled quality, and unwavering client trust since 2016."
        breadcrumbs={[
          { label: 'About Us', to: '/about' },
          { label: "Founder's Message" }
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'start' }}>
            {/* FOUNDER PORTRAIT CARD */}
            <div style={{ position: 'sticky', top: '110px' }}>
              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <img
                  src={COMPANY.founder.photo}
                  alt={COMPANY.founder.name + ' — ' + COMPANY.founder.role}
                  style={{ width: '100%', height: '520px', objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div style={{ padding: '28px 32px', background: 'var(--ink-2)', borderTop: '1px solid var(--border)' }}>
                  <span className="eyebrow" style={{ marginBottom: '6px' }}>{COMPANY.founder.role}</span>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', color: 'var(--cream)', marginBottom: '8px' }}>
                    {COMPANY.founder.name}
                  </h2>
                  <p style={{ fontSize: '0.86rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                    {COMPANY.founder.experienceNote} · Leading {COMPANY.inHouseTeam} architects, engineers, and master joiners across the UAE.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--accent)' }}>{COMPANY.established}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Founded</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--accent)' }}>{COMPANY.projectsCompleted}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Projects</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--accent)' }}>{COMPANY.onTimeRate}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', color: 'var(--muted)' }}>On-Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EDITORIAL MESSAGE */}
            <div>
              <span className="eyebrow">Executive Letter · Dubai, UAE</span>
              <h2 className="section-title" style={{ marginBottom: '28px' }}>
                &ldquo;True luxury in contracting is <em>certainty</em>—knowing that what is promised on paper will be delivered on site.&rdquo;
              </h2>

              <div style={{ display: 'grid', gap: '22px', fontSize: '1.02rem', color: 'var(--cream)', lineHeight: 1.85, fontWeight: 300 }}>
                <p>
                  When I founded <strong>{COMPANY.legalName}</strong> in Dubai in <strong>{COMPANY.established}</strong>, the regional fit-out market suffered from a persistent disconnect: visionary architectural concepts were routinely compromised during site execution due to fragmented subcontractors, vague cost estimates, and delayed authority approvals.
                </p>
                <p style={{ color: 'var(--muted)' }}>
                  From day one, our mandate was clear—to build a unified, single-source design-and-build practice where architectural designers, MEP engineers, authority specialists, and master craftsmen work side by side under one roof.
                </p>
                <p style={{ color: 'var(--muted)' }}>
                  Investing in our own <strong>{COMPANY.factorySize} custom joinery and fabrication facility in Al Quoz Industrial Area 3</strong> transformed how we deliver projects. Whether we are crafting acoustic walnut boardrooms for a DIFC financial institution, engineering a sterile medical clinic in Dubai Healthcare City, or completing a bespoke signature residence on Palm Jumeirah, every millwork detail is pre-assembled and inspected before it ever reaches the site.
                </p>
                <p style={{ color: 'var(--muted)' }}>
                  Today, over <strong>{COMPANY.projectsCompleted} delivered projects</strong> and <strong>{COMPANY.yearsExperience} years</strong> later, our proudest metric remains our <strong>{COMPANY.onTimeRate} on-time handover record</strong> and the repeat partnerships we hold with leading developers and corporate occupiers across the Emirates.
                </p>
                <p>
                  When you entrust your space to YFB Fit-Out Contracting, you receive my personal commitment—and the dedication of our {COMPANY.inHouseTeam} specialists—to deliver on budget, on schedule, and beyond expectation.
                </p>
              </div>

              {/* SIGNATURE BLOCK */}
              <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
                <div>
                  <svg width="210" height="54" viewBox="0 0 210 54" fill="none" aria-label="Mohammad Danish Adnan Signature" style={{ marginBottom: '8px' }}>
                    <path d="M12 40 C28 12, 34 44, 48 22 C58 8, 62 38, 78 26 C94 14, 102 36, 118 20 C132 8, 145 35, 168 18 C178 12, 190 22, 202 15" stroke="#c9a84c" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                    <path d="M24 46 L185 38" stroke="rgba(201,168,76,0.45)" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--cream)' }}>
                    {COMPANY.founder.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {COMPANY.founder.role} · {COMPANY.shortName}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Link to="/enquiry" className="btn btn-primary">
                    Discuss Your Project
                  </Link>
                  <Link to="/why-us" className="btn btn-outline">
                    Why Choose YFB
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
