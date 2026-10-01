import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_CATEGORIES, COMPANY } from '../data/siteData';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function FaqPage() {
  usePageMeta({
    title: 'Frequently Asked Questions — Fit-Out Costs, Timelines & Approvals in Dubai',
    description: 'Answers to common questions about turnkey interior fit-out timelines, Dubai Municipality & DCD authority approvals, bespoke joinery, and BOQ pricing.',
    canonicalPath: '/faq'
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [openKey, setOpenKey] = useState('Turnkey Execution & Timelines-0');

  const filteredCategories = FAQ_CATEGORIES.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter((cat) => cat.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Knowledge Base & Client Guide"
        title={<>Frequently Asked <em>Questions</em></>}
        subtitle="Clear, transparent answers on UAE authority approvals, itemized BOQ pricing, turnkey execution schedules, and post-handover warranties."
        breadcrumbs={[
          { label: 'About Us', to: '/about' },
          { label: 'FAQ' }
        ]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* SEARCH FILTER */}
          <div style={{ marginBottom: '40px' }}>
            <label htmlFor="faq-search" className="form-label">Search Questions by Keyword (e.g. DCD, Timeline, BOQ, Joinery)</label>
            <input
              id="faq-search"
              type="search"
              className="form-input"
              placeholder="Type to filter questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredCategories.map((cat) => (
            <div key={cat.category} style={{ marginBottom: '48px' }}>
              <span className="eyebrow">{cat.category}</span>
              <div style={{ display: 'grid', gap: '14px', marginTop: '16px' }}>
                {cat.items.map((item, idx) => {
                  const key = cat.category + '-' + idx;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={key}
                      className="card"
                      style={{
                        padding: 0,
                        borderColor: isOpen ? 'var(--accent)' : 'var(--border)'
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenKey(isOpen ? '' : key)}
                        aria-expanded={isOpen}
                        style={{
                          width: '100%',
                          padding: '22px 26px',
                          background: 'transparent',
                          border: 'none',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '16px',
                          textAlign: 'left',
                          cursor: 'pointer',
                          color: 'var(--cream)'
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 500 }}>
                          {item.q}
                        </span>
                        <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '1.2rem', flexShrink: 0 }}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div style={{ padding: '0 26px 24px', color: 'var(--muted)', fontSize: '0.94rem', lineHeight: 1.8, borderTop: '1px solid var(--border)', paddingTop: '18px' }}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* CTA BOX */}
          <div className="card" style={{ padding: '36px', textAlign: 'center', background: 'var(--ink-3)', borderColor: 'var(--border-gold)' }}>
            <span className="eyebrow">Have a Specific Technical Question?</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--cream)', marginBottom: '12px' }}>
              Speak Directly With Our Estimating & Authority Team
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', maxWidth: '580px', margin: '0 auto 24px' }}>
              Call us on <a href={'tel:' + COMPANY.phoneRaw} style={{ color: 'var(--accent)' }}>{COMPANY.phone}</a> or request a complimentary site assessment and BOQ consultation.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/enquiry" className="btn btn-primary">Request Free Consultation</Link>
              <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
