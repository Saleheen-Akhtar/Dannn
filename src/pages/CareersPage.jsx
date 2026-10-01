import React, { useState } from 'react';
import { COMPANY } from '../data/siteData';
import { getVacancies, submitJobApplication } from '../utils/leadService';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function CareersPage() {
  usePageMeta({
    title: 'Careers at YFB — Join Our 200+ Architects, Engineers & Master Craftsmen',
    description: 'Explore open career opportunities at Yashmeen Future Building & Fit-Out Contracting Co. L.L.C in Dubai across Project Management, Joinery, MEP, and Estimation.',
    canonicalPath: '/careers'
  });

  const vacancies = getVacancies();
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [expandedId, setExpandedId] = useState(vacancies[0]?.id || '');
  const [applyingRole, setApplyingRole] = useState(null);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceYears: '5-8 Years',
    linkedinOrPortfolio: '',
    coverNote: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const departments = ['All', ...Array.from(new Set(vacancies.map((v) => v.department)))];
  const filteredVacancies = selectedDepartment === 'All'
    ? vacancies
    : vacancies.filter((v) => v.department === selectedDepartment);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    const record = submitJobApplication({
      ...formState,
      jobId: applyingRole.id,
      jobTitle: applyingRole.title,
      department: applyingRole.department
    });
    setSubmitStatus({ ok: true, record });
  };

  return (
    <>
      <PageHero
        eyebrow={'Careers · ' + COMPANY.inHouseTeam + ' Specialists'}
        title={<>Build Your Career With <em>Dubai&apos;s Fit-Out Leaders</em></>}
        subtitle="We are always looking for talented architects, civil & MEP engineers, CNC joinery specialists, and commercial estimators to join our Business Bay studio and Al Quoz 3 factory."
        breadcrumbs={[
          { label: 'About Us', to: '/about' },
          { label: 'Careers' }
        ]}
      />

      <section className="section">
        <div className="container">
          {/* FILTER PILLS */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
            <div>
              <span className="eyebrow">Current Openings ({filteredVacancies.length})</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Open Positions in <em>Dubai</em></h2>
            </div>
            <div className="filter-bar" style={{ marginBottom: 0 }}>
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  className={'filter-btn ' + (selectedDepartment === dept ? 'active' : '')}
                  onClick={() => setSelectedDepartment(dept)}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* JOB LISTINGS */}
          <div style={{ display: 'grid', gap: '20px' }}>
            {filteredVacancies.map((job) => {
              const isExpanded = expandedId === job.id;
              return (
                <div key={job.id} className="card" style={{ padding: '28px 32px', borderColor: isExpanded ? 'var(--accent)' : 'var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px' }}>
                        <span className="badge">{job.department}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)' }}>
                          {job.location} · {job.type} · {job.experience}
                        </span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--cream)' }}>
                        {job.title}
                      </h3>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => setExpandedId(isExpanded ? '' : job.id)}
                      >
                        {isExpanded ? 'Hide Details' : 'View Role'}
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          setApplyingRole(job);
                          setSubmitStatus(null);
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>

                  <p style={{ color: 'var(--muted)', fontSize: '0.92rem', marginTop: '14px', lineHeight: 1.75 }}>
                    {job.summary}
                  </p>

                  {isExpanded && (
                    <div style={{ marginTop: '22px', paddingTop: '22px', borderTop: '1px solid var(--border)' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
                        Key Requirements & Qualifications
                      </div>
                      <ul style={{ display: 'grid', gap: '8px', paddingLeft: '18px', color: 'var(--cream)', fontSize: '0.9rem' }}>
                        {job.requirements.map((req) => (
                          <li key={req}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPLICATION MODAL */}
      {applyingRole && (
        <div className="lightbox-overlay" onClick={() => setApplyingRole(null)}>
          <div
            className="card"
            style={{ maxWidth: '620px', width: '100%', padding: '36px', background: 'var(--ink-2)', border: '1px solid var(--accent)', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <span className="eyebrow">Career Application · {applyingRole.department}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--cream)' }}>
                  {applyingRole.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setApplyingRole(null)}
                style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--cream)', width: '36px', height: '36px', cursor: 'pointer' }}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {submitStatus?.ok ? (
              <div className="status-banner success">
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '8px' }}>
                  Application Received — Reference #{submitStatus.record.id.slice(-6)}
                </h4>
                <p style={{ marginBottom: '16px', fontSize: '0.9rem' }}>
                  Thank you, <strong>{submitStatus.record.fullName}</strong>. Your application for <strong>{applyingRole.title}</strong> has been logged with our HR & Technical Leadership team. You may also email your full CV/Portfolio PDF to <a href={'mailto:' + COMPANY.careersEmail} style={{ color: 'var(--accent)' }}>{COMPANY.careersEmail}</a>.
                </p>
                <button type="button" className="btn btn-primary" onClick={() => setApplyingRole(null)}>
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} style={{ display: 'grid', gap: '16px' }}>
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Tariq Al Mansoori"
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                  />
                </div>
                <div className="grid-2" style={{ gap: '16px' }}>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="name@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      placeholder="+971 50 000 0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid-2" style={{ gap: '16px' }}>
                  <div>
                    <label className="form-label">UAE Fit-Out Experience *</label>
                    <select
                      className="form-select"
                      value={formState.experienceYears}
                      onChange={(e) => setFormState({ ...formState, experienceYears: e.target.value })}
                    >
                      <option value="2-4 Years">2–4 Years</option>
                      <option value="5-8 Years">5–8 Years</option>
                      <option value="8-12 Years">8–12 Years</option>
                      <option value="12+ Years">12+ Years</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">LinkedIn / Portfolio Link</label>
                    <input
                      type="url"
                      className="form-input"
                      placeholder="https://linkedin.com/in/..."
                      value={formState.linkedinOrPortfolio}
                      onChange={(e) => setFormState({ ...formState, linkedinOrPortfolio: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label">Key UAE Projects Delivered & Notice Period *</label>
                  <textarea
                    required
                    rows={4}
                    className="form-textarea"
                    placeholder="Briefly highlight your relevant UAE project experience, authority approvals held (e.g. DM/DCD/SOE), and availability..."
                    value={formState.coverNote}
                    onChange={(e) => setFormState({ ...formState, coverNote: e.target.value })}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px' }}>
                  <button type="button" className="btn btn-outline" onClick={() => setApplyingRole(null)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
