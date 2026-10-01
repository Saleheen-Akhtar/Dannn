import React, { useState } from 'react';
import { COMPANY } from '../data/siteData';
import { submitLeadEnquiry, buildWhatsAppEnquiryUrl } from '../utils/leadService';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function EnquiryPage() {
  usePageMeta({
    title: 'Request an Itemized Fit-Out Quote & Free Site Survey — Dubai',
    description: 'Configure your commercial office, luxury villa, hospitality, or clinic fit-out scope and receive an itemized Bill of Quantities (BOQ) from YFB Contracting.',
    canonicalPath: '/enquiry'
  });

  const projectTypes = [
    'Commercial Office / HQ',
    'Luxury Villa / Penthouse',
    'F&B / Fine Dining / Cafe',
    'Medical Clinic / Wellness',
    'Retail Showroom / Boutique',
    'Warehouse / Industrial'
  ];

  const scopeOptions = [
    'Turnkey Design & Fit-Out',
    'Architectural & 3D Visualization',
    'Authority Approvals (DM / DCD / DIFC)',
    'MEP, HVAC & Fire-Fighting',
    'Custom Joinery & Millwork',
    'Acoustic Partitions & Ceilings',
    'Smart Automation (KNX / AV)'
  ];

  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: 'Commercial Office / HQ',
    selectedServices: ['Turnkey Design & Fit-Out', 'Authority Approvals (DM / DCD / DIFC)'],
    location: '',
    areaSqFt: '3,000 – 8,000 sq.ft',
    budgetRange: 'AED 500K – 1.5M',
    timeline: 'Immediate (Within 30 Days)',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const toggleService = (srv) => {
    setForm((prev) => {
      const exists = prev.selectedServices.includes(srv);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== srv)
          : [...prev.selectedServices, srv]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitLeadEnquiry({
      ...form,
      service: form.projectType + ' (' + form.selectedServices.join(', ') + ')',
      source: 'enquiry-configurator'
    });
    setSubmitting(false);
    setResult(res);
  };

  return (
    <>
      <PageHero
        eyebrow="Project Scope Configurator"
        title={<>Request an <em>Itemized BOQ &amp; Site Survey</em></>}
        subtitle="Complete the technical brief below. Our senior quantity surveyors and project directors will prepare a structured cost breakdown and execution schedule."
        breadcrumbs={[{ label: 'Project Enquiry' }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '980px' }}>
          {result?.ok && (
            <div className="status-banner success" style={{ marginBottom: '32px', padding: '28px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '8px' }}>
                Project Brief Registered — Reference #{result.record.id.slice(-6)}
              </h3>
              <p style={{ marginBottom: '16px', fontSize: '0.92rem' }}>
                Thank you, <strong>{result.record.fullName}</strong>. Your scope for a <strong>{form.projectType}</strong> ({form.areaSqFt}) has been assigned to our estimating desk.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href={buildWhatsAppEnquiryUrl(result.record)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Fast-Track via WhatsApp (6361718607) →
                </a>
                <a href={'tel:' + COMPANY.phoneRaw} className="btn btn-outline">
                  Call Estimating Desk
                </a>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="card" style={{ padding: '44px', display: 'grid', gap: '28px' }}>
            {/* STEP 1: SECTOR */}
            <div>
              <span className="eyebrow">01 · Select Property Sector</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '12px' }}>
                {projectTypes.map((pt) => {
                  const active = form.projectType === pt;
                  return (
                    <button
                      key={pt}
                      type="button"
                      onClick={() => setForm({ ...form, projectType: pt })}
                      style={{
                        padding: '16px 18px',
                        textAlign: 'left',
                        background: active ? 'rgba(201,168,76,0.16)' : 'var(--ink-3)',
                        border: '1px solid ' + (active ? 'var(--accent)' : 'var(--border)'),
                        color: active ? 'var(--accent-light)' : 'var(--cream)',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        fontWeight: active ? 500 : 400
                      }}
                    >
                      {active ? '✓ ' : ''}{pt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: MULTI-SELECT SCOPE */}
            <div>
              <span className="eyebrow">02 · Required Engineering &amp; Fit-Out Disciplines (Select All That Apply)</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '12px' }}>
                {scopeOptions.map((srv) => {
                  const active = form.selectedServices.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      style={{
                        padding: '11px 16px',
                        background: active ? 'var(--accent)' : 'var(--ink-3)',
                        color: active ? 'var(--ink)' : 'var(--cream)',
                        border: '1px solid ' + (active ? 'var(--accent)' : 'var(--border)'),
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        fontWeight: active ? 600 : 400
                      }}
                    >
                      {active ? '✓ ' : '+ '}{srv}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: PARAMETERS */}
            <div>
              <span className="eyebrow">03 · Space Parameters &amp; Investment Range</span>
              <div className="grid-3" style={{ gap: '16px', marginTop: '12px' }}>
                <div>
                  <label className="form-label">Approximate Area (sq.ft)</label>
                  <select
                    className="form-select"
                    value={form.areaSqFt}
                    onChange={(e) => setForm({ ...form, areaSqFt: e.target.value })}
                  >
                    <option value="Under 1,500 sq.ft">Under 1,500 sq.ft</option>
                    <option value="1,500 – 3,000 sq.ft">1,500 – 3,000 sq.ft</option>
                    <option value="3,000 – 8,000 sq.ft">3,000 – 8,000 sq.ft</option>
                    <option value="8,000 – 20,000 sq.ft">8,000 – 20,000 sq.ft</option>
                    <option value="20,000+ sq.ft">20,000+ sq.ft</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Estimated Budget (AED)</label>
                  <select
                    className="form-select"
                    value={form.budgetRange}
                    onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                  >
                    <option value="AED 250K – 500K">AED 250K – 500K</option>
                    <option value="AED 500K – 1.5M">AED 500K – 1.5M</option>
                    <option value="AED 1.5M – 3.5M">AED 1.5M – 3.5M</option>
                    <option value="AED 3.5M – 10M+">AED 3.5M – 10M+</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Target Mobilization</label>
                  <select
                    className="form-select"
                    value={form.timeline}
                    onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                  >
                    <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                    <option value="1 – 3 Months">1 – 3 Months</option>
                    <option value="3 – 6 Months">3 – 6 Months</option>
                    <option value="Budgeting / Feasibility Stage">Budgeting / Feasibility Stage</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STEP 4: CONTACT DETAILS */}
            <div>
              <span className="eyebrow">04 · Client &amp; Site Information</span>
              <div className="grid-2" style={{ gap: '16px', marginTop: '12px' }}>
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Your Full Name"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">Company / Organization (Optional)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Company or Private Villa Owner"
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="name@company.ae"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="+971 50 000 0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <label className="form-label">Building / Community Location in UAE *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Index Tower DIFC, Opus Business Bay, Frond G Palm Jumeirah..."
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
              </div>

              <div style={{ marginTop: '16px' }}>
                <label className="form-label">Project Notes &amp; Specific Requirements *</label>
                <textarea
                  required
                  rows={4}
                  className="form-textarea"
                  placeholder="Tell us about your current shell-and-core or fitted status, authority requirements, or desired design style..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                Direct Desk: <strong style={{ color: 'var(--accent)' }}>{COMPANY.phone}</strong> · <strong style={{ color: 'var(--accent)' }}>{COMPANY.email}</strong>
              </div>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Generating Enquiry...' : 'Submit Technical Brief & Request BOQ'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
