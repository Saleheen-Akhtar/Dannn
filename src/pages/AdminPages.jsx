import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { COMPANY } from '../data/siteData';
import {
  getAuthUser,
  loginAdmin,
  logoutAdmin,
  getStoredEnquiries,
  deleteStoredEnquiry,
  getStoredApplications,
  getStoredCategories,
  saveStoredCategories,
  getStoredWebDetails,
  saveStoredWebDetails
} from '../utils/leadService';
import { usePageMeta } from '../utils/usePageMeta';

export function LoginPage() {
  usePageMeta({
    title: 'Executive Portal Login — YFB Fit-Out Contracting',
    description: 'Authorized management portal for Yashmeen Future Building & Fit-Out Contracting Co. L.L.C.',
    canonicalPath: '/login'
  });

  const navigate = useNavigate();
  const [email, setEmail] = useState('info@yfbfitoutcontracting.com');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const res = loginAdmin(email, password || 'demo');
    if (res.ok) {
      navigate('/dashboard');
    } else {
      setError(res.message || 'Invalid credentials');
    }
  };

  return (
    <section className="section" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '480px' }}>
        <div className="card" style={{ padding: '44px', borderColor: 'var(--border-gold)' }}>
          <span className="eyebrow">Authorized Access</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--cream)', marginBottom: '8px' }}>
            YFB Executive <em>Portal</em>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: '28px' }}>
            Manage client BOQ enquiries, career applications, service categories, and website configuration.
          </p>

          {error && <div className="status-banner error">{error}</div>}

          <form onSubmit={handleLogin} style={{ display: 'grid', gap: '18px' }}>
            <div>
              <label className="form-label">Administrator Email</label>
              <input
                type="email"
                required
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Security Passkey</label>
              <input
                type="password"
                required
                className="form-input"
                placeholder="Enter passkey (any non-empty key for demo)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Sign In to Dashboard
            </button>
          </form>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '0.8rem' }}>
            <Link to="/forgot-password" style={{ color: 'var(--accent)' }}>Forgot Passkey?</Link>
            <Link to="/" style={{ color: 'var(--muted)' }}>← Return to Public Website</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ForgotPasswordPage() {
  usePageMeta({
    title: 'Reset Portal Passkey — YFB Fit-Out Contracting',
    description: 'Reset your YFB Executive Portal passkey.',
    canonicalPath: '/forgot-password'
  });

  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '480px' }}>
        <div className="card" style={{ padding: '44px' }}>
          <span className="eyebrow">Account Recovery</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--cream)', marginBottom: '10px' }}>
            Reset Portal <em>Passkey</em>
          </h1>
          {sent ? (
            <div className="status-banner success">
              Recovery instructions have been dispatched to <strong>{email}</strong>.
              <div style={{ marginTop: '14px' }}>
                <Link to="/login" className="btn btn-primary">Return to Login</Link>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              style={{ display: 'grid', gap: '18px' }}
            >
              <div>
                <label className="form-label">Registered Corporate Email (@yfbfitoutcontracting.com)</label>
                <input
                  type="email"
                  required
                  className="form-input"
                  placeholder="info@yfbfitoutcontracting.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Send Recovery Link</button>
              <Link to="/login" style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>← Back to Login</Link>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export function DashboardPage({ initialTab = 'enquiries' }) {
  usePageMeta({
    title: 'Executive CRM & Content Dashboard — YFB Fit-Out Contracting',
    description: 'Manage enquiries, job applications, categories, and company contact details.',
    canonicalPath: '/dashboard'
  });

  const navigate = useNavigate();
  const location = useLocation();
  const user = getAuthUser() || { name: COMPANY.founder.name, email: COMPANY.email };

  const defaultTab = location.pathname.includes('categories') ? 'categories' : initialTab;
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [enquiries, setEnquiries] = useState(() => getStoredEnquiries());
  const [applications] = useState(() => getStoredApplications());
  const [categories, setCategories] = useState(() => getStoredCategories());
  const [newCatName, setNewCatName] = useState('');
  const [newCatSlug, setNewCatSlug] = useState('');
  const [webDetails, setWebDetails] = useState(() => getStoredWebDetails());
  const [savedNotice, setSavedNotice] = useState('');

  const handleDeleteEnquiry = (id) => {
    const next = deleteStoredEnquiry(id);
    setEnquiries(next);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    const slug = newCatSlug.trim() || newCatName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const next = [...categories, { id: 'cat-' + Date.now(), name: newCatName.trim(), slug, active: true }];
    setCategories(next);
    saveStoredCategories(next);
    setNewCatName('');
    setNewCatSlug('');
  };

  const handleToggleCategory = (id) => {
    const next = categories.map((c) => (c.id === id ? { ...c, active: !c.active } : c));
    setCategories(next);
    saveStoredCategories(next);
  };

  const handleSaveWebDetails = (e) => {
    e.preventDefault();
    saveStoredWebDetails(webDetails);
    setSavedNotice('Canonical company details updated and synchronized.');
    setTimeout(() => setSavedNotice(''), 4000);
  };

  return (
    <section className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        {/* HEADER */}
        <div className="card" style={{ padding: '28px 32px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', borderColor: 'var(--border-gold)' }}>
          <div>
            <span className="eyebrow">YFB Executive Operations Center</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', color: 'var(--cream)' }}>
              Welcome, <em>{user.name}</em>
            </h1>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-outline">View Live Website</Link>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                logoutAdmin();
                navigate('/login');
              }}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* KPI SUMMARY */}
        <div className="grid-4" style={{ marginBottom: '32px' }}>
          <div className="card" style={{ padding: '22px' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--accent)' }}>{enquiries.length}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Lead Enquiries</div>
          </div>
          <div className="card" style={{ padding: '22px' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--accent)' }}>{applications.length}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Job Applications</div>
          </div>
          <div className="card" style={{ padding: '22px' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--accent)' }}>{categories.length}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--muted)' }}>Service Categories</div>
          </div>
          <div className="card" style={{ padding: '22px' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--success)', marginTop: '8px' }}>100% Synced</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '6px' }}>{COMPANY.phone}</div>
          </div>
        </div>

        {/* TABS */}
        <div className="filter-bar" style={{ marginBottom: '28px' }}>
          <button type="button" className={'filter-btn ' + (activeTab === 'enquiries' ? 'active' : '')} onClick={() => setActiveTab('enquiries')}>
            Client Enquiries ({enquiries.length})
          </button>
          <button type="button" className={'filter-btn ' + (activeTab === 'applications' ? 'active' : '')} onClick={() => setActiveTab('applications')}>
            Career Applications ({applications.length})
          </button>
          <button type="button" className={'filter-btn ' + (activeTab === 'categories' ? 'active' : '')} onClick={() => setActiveTab('categories')}>
            Categories ({categories.length})
          </button>
          <button type="button" className={'filter-btn ' + (activeTab === 'settings' ? 'active' : '')} onClick={() => setActiveTab('settings')}>
            Canonical Website Details
          </button>
        </div>

        {/* TAB 1: ENQUIRIES */}
        {activeTab === 'enquiries' && (
          <div className="card" style={{ padding: '28px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.7rem', color: 'var(--cream)', marginBottom: '18px' }}>
              Submitted Client BOQ &amp; Consultation Enquiries
            </h2>
            {enquiries.length === 0 ? (
              <p style={{ color: 'var(--muted)', padding: '24px 0' }}>
                No enquiries stored in this browser session yet. Submit a test enquiry on <Link to="/enquiry" style={{ color: 'var(--accent)' }}>/enquiry</Link> or <Link to="/contact" style={{ color: 'var(--accent)' }}>/contact</Link> to inspect it here immediately.
              </p>
            ) : (
              <div style={{ display: 'grid', gap: '16px' }}>
                {enquiries.map((enq) => (
                  <div key={enq.id} className="card" style={{ padding: '20px', background: 'var(--ink-3)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                      <div>
                        <span className="badge">{enq.service}</span>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--cream)', marginTop: '8px' }}>
                          {enq.fullName} ({enq.phone})
                        </h3>
                        <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                          {enq.email} · Location: {enq.location} · Budget: {enq.budgetRange}
                        </div>
                      </div>
                      <button type="button" className="btn btn-outline" onClick={() => handleDeleteEnquiry(enq.id)}>
                        Archive
                      </button>
                    </div>
                    {enq.message && (
                      <p style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--cream)' }}>{enq.message}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CAREER APPLICATIONS */}
        {activeTab === 'applications' && (
          <div className="card" style={{ padding: '28px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.7rem', color: 'var(--cream)', marginBottom: '18px' }}>
              Candidate Applications
            </h2>
            {applications.length === 0 ? (
              <p style={{ color: 'var(--muted)' }}>
                No candidate applications submitted yet. Visit <Link to="/careers" style={{ color: 'var(--accent)' }}>/careers</Link> to test the modal.
              </p>
            ) : (
              <div style={{ display: 'grid', gap: '16px' }}>
                {applications.map((app) => (
                  <div key={app.id} className="card" style={{ padding: '20px', background: 'var(--ink-3)' }}>
                    <span className="badge">{app.jobTitle}</span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--cream)', marginTop: '8px' }}>
                      {app.fullName} — {app.experienceYears}
                    </h3>
                    <div style={{ fontSize: '0.84rem', color: 'var(--muted)' }}>{app.email} · {app.phone}</div>
                    <p style={{ marginTop: '8px', fontSize: '0.88rem', color: 'var(--cream)' }}>{app.coverNote}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: CATEGORIES */}
        {activeTab === 'categories' && (
          <div className="grid-2" style={{ gap: '28px', alignItems: 'start' }}>
            <div className="card" style={{ padding: '28px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--cream)', marginBottom: '16px' }}>
                Active Service &amp; Portfolio Categories
              </h2>
              <div style={{ display: 'grid', gap: '12px' }}>
                {categories.map((cat) => (
                  <div key={cat.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: 'var(--ink-3)', border: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ color: 'var(--cream)', fontWeight: 500 }}>{cat.name}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--muted)' }}>/{cat.slug}</div>
                    </div>
                    <button type="button" className="btn btn-outline" onClick={() => handleToggleCategory(cat.id)}>
                      {cat.active ? 'Active' : 'Hidden'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleAddCategory} className="card" style={{ padding: '28px', display: 'grid', gap: '16px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--cream)' }}>Add New Category</h3>
              <div>
                <label className="form-label">Category Title *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="e.g. Luxury Retail Boutiques"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                />
              </div>
              <div>
                <label className="form-label">URL Slug</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="luxury-retail-boutiques"
                  value={newCatSlug}
                  onChange={(e) => setNewCatSlug(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Save Category</button>
            </form>
          </div>
        )}

        {/* TAB 4: CANONICAL SETTINGS */}
        {activeTab === 'settings' && (
          <form onSubmit={handleSaveWebDetails} className="card" style={{ padding: '32px', display: 'grid', gap: '18px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.7rem', color: 'var(--cream)' }}>
              Canonical Website Contact &amp; Identity Configuration
            </h2>
            {savedNotice && <div className="status-banner success">{savedNotice}</div>}
            <div className="grid-2" style={{ gap: '16px' }}>
              <div>
                <label className="form-label">Legal Entity Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={webDetails.companyName}
                  onChange={(e) => setWebDetails({ ...webDetails, companyName: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Founder &amp; Managing Director</label>
                <input
                  type="text"
                  className="form-input"
                  value={webDetails.founderName}
                  onChange={(e) => setWebDetails({ ...webDetails, founderName: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Canonical Phone &amp; WhatsApp</label>
                <input
                  type="text"
                  className="form-input"
                  value={webDetails.phone}
                  onChange={(e) => setWebDetails({ ...webDetails, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Canonical Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={webDetails.email}
                  onChange={(e) => setWebDetails({ ...webDetails, email: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Business Bay Design Studio Address</label>
                <input
                  type="text"
                  className="form-input"
                  value={webDetails.studioAddress}
                  onChange={(e) => setWebDetails({ ...webDetails, studioAddress: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label">Al Quoz 3 Joinery Factory Address</label>
                <input
                  type="text"
                  className="form-input"
                  value={webDetails.factoryAddress}
                  onChange={(e) => setWebDetails({ ...webDetails, factoryAddress: e.target.value })}
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">Save Canonical Configuration</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
