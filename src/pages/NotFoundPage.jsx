import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function NotFoundPage() {
  usePageMeta({
    title: '404 Page Not Found — YFB Fit-Out Contracting',
    description: 'The requested page could not be found. Explore our turnkey interior fit-out services and 640+ delivered projects across Dubai.'
  });

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <span className="eyebrow">Error 404 · Architectural Route Not Found</span>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '4.5rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '16px' }}>
          404
        </h1>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--cream)', marginBottom: '16px' }}>
          This Space Has Moved or Does Not Exist
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '0.96rem', marginBottom: '32px', lineHeight: 1.75 }}>
          Return to our main architectural portfolio or explore our specialist divisions below.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">Return to Homepage</Link>
          <Link to="/projects" className="btn btn-outline">Explore Delivered Projects</Link>
          <Link to="/services" className="btn btn-outline">Our Services</Link>
        </div>
      </div>
    </section>
  );
}
