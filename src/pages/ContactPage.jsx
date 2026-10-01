import React, { useState } from 'react';
import { COMPANY } from '../data/siteData';
import { submitLeadEnquiry, buildWhatsAppEnquiryUrl } from '../utils/leadService';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact Us — Business Bay Design Studio & Al Quoz 3 Joinery Factory',
    description: 'Contact Yashmeen Future Building & Fit-Out Contracting Co. L.L.C in Dubai. Call +971 54 386 2870 or email info@yfbfitoutcontracting.com.',
    canonicalPath: '/contact'
  });

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Interior Design & Fit-Out',
    location: 'Business Bay / Downtown Dubai',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await submitLeadEnquiry({ ...form, source: 'contact-page' });
    setSubmitting(false);
    setResult(res);
  };

  return (
    <>
      <PageHero
        eyebrow="Direct Consultation · Dubai, UAE"
        title={<>Connect With Our <em>Engineering &amp; Design Team</em></>}
        subtitle="Visit our Business Bay studio or schedule a private tour of our 35,000 sq.ft custom joinery and fabrication facility in Al Quoz Industrial Area 3."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section">
        <div className="container">
          {/* 4 UNIFIED CONTACT CARDS */}
          <div className="grid-4" style={{ marginBottom: '56px' }}>
            <div className="card">
              <span className="eyebrow">Direct Line &amp; WhatsApp</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '8px' }}>
                <a href={'tel:' + COMPANY.phoneRaw} style={{ color: 'var(--accent)' }}>{COMPANY.phone}</a>
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--muted)' }}>
                Instant connection to our Senior Estimation &amp; Client Advisory desk.
              </p>
            </div>

            <div className="card">
              <span className="eyebrow">Official Email Desk</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--cream)', marginBottom: '8px', wordBreak: 'break-all' }}>
                <a href={'mailto:' + COMPANY.email} style={{ color: 'var(--accent)' }}>{COMPANY.email}</a>
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--muted)' }}>
                Send architectural drawings, tender packages, and RFP documents.
              </p>
            </div>

            <div className="card">
              <span className="eyebrow">Design &amp; HQ Studio</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--cream)', marginBottom: '8px' }}>
                Business Bay, Dubai
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--muted)' }}>
                {COMPANY.address.studio}
              </p>
            </div>

            <div className="card">
              <span className="eyebrow">In-House Joinery Plant</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--cream)', marginBottom: '8px' }}>
                Al Quoz Industrial 3
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--muted)' }}>
                {COMPANY.address.factory}
              </p>
            </div>
          </div>

          <div className="grid-2" style={{ gap: '48px', alignItems: 'start' }}>
            {/* CONTACT FORM */}
            <div className="card" style={{ padding: '40px' }}>
              <span className="eyebrow">Send a Direct Message</span>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>
                Request a <em>Site Visit or Call Back</em>
              </h2>

              {result?.ok && (
                <div className="status-banner success">
                  <div style={{ fontWeight: 600, marginBottom: '6px' }}>
                    Enquiry Logged — Reference #{result.record.id.slice(-6)}
                  </div>
                  <p style={{ fontSize: '0.86rem', marginBottom: '12px' }}>
                    Thank you, {result.record.fullName}. Our Dubai estimation team will respond within 2 business hours.
                  </p>
                  <a
                    href={buildWhatsAppEnquiryUrl(result.record)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Send Instant Copy via WhatsApp →
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '18px' }}>
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
                <div className="grid-2" style={{ gap: '16px' }}>
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
                    <label className="form-label">Phone / WhatsApp *</label>
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
                <div className="grid-2" style={{ gap: '16px' }}>
                  <div>
                    <label className="form-label">Service Required</label>
                    <select
                      className="form-select"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="Interior Design & Fit-Out">Interior Design &amp; Fit-Out</option>
                      <option value="Office Renovation">Office Renovation</option>
                      <option value="Architecture Design">Architecture Design</option>
                      <option value="Civil & MEP Construction">Civil &amp; MEP Construction</option>
                      <option value="Bespoke Joinery & Millwork">Bespoke Joinery &amp; Millwork</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Project Area / Emirate</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. DIFC, Business Bay, Palm Jumeirah"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label">Project Brief &amp; Approximate Area (sq.ft) *</label>
                  <textarea
                    required
                    rows={4}
                    className="form-textarea"
                    placeholder="Share your space size, target handover date, and scope requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'Submitting Enquiry...' : 'Submit Consultation Request'}
                </button>
              </form>
            </div>

            {/* GOOGLE MAP & HOURS */}
            <div>
              <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
                <span className="eyebrow">Working Hours</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '14px' }}>
                  Studio &amp; Factory Schedule
                </h3>
                <div style={{ display: 'grid', gap: '10px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                  <div><strong style={{ color: 'var(--cream)' }}>Weekdays:</strong> {COMPANY.workingHours.weekdays}</div>
                  <div><strong style={{ color: 'var(--cream)' }}>Saturday:</strong> {COMPANY.workingHours.saturday}</div>
                  <div><strong style={{ color: 'var(--cream)' }}>Sunday:</strong> {COMPANY.workingHours.sunday}</div>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden', height: '380px' }}>
                <iframe
                  title="YFB Fit-Out Contracting — Business Bay Dubai Location"
                  src={COMPANY.address.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(85%) invert(90%) contrast(85%)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
