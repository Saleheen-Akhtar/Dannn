import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAdmin } from '../utils/leadService';
import { usePageMeta } from '../utils/usePageMeta';
import DemostackDashboardCMS from '../components/dashboards/demostack-dashboard';

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
    const res = loginAdmin(email, password);
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
                placeholder="Enter studio security passkey"
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

export function DashboardPage({ initialTab = '/dashboard' }) {
  usePageMeta({
    title: 'Executive CRM & Content Dashboard — YFB Fit-Out Contracting',
    description: 'Manage client enquiries, case studies, journal articles, service categories, and company settings.',
    canonicalPath: '/dashboard',
    robots: 'noindex, nofollow'
  });

  return <DemostackDashboardCMS initialTab={initialTab} />;
}
