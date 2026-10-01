import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VIDEO_SHOWCASES } from '../data/siteData';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function VideoGalleryPage() {
  usePageMeta({
    title: 'Site & Joinery Factory Walkthroughs — Video Showcase Gallery',
    description: 'Explore 8 authentic architectural walkthroughs, Al Quoz CNC joinery factory tours, and MEP engineering showcases by YFB Fit-Out Contracting.',
    canonicalPath: '/video-gallery'
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);

  const categories = ['All', ...Array.from(new Set(VIDEO_SHOWCASES.map((v) => v.category)))];
  const filtered = selectedCategory === 'All'
    ? VIDEO_SHOWCASES
    : VIDEO_SHOWCASES.filter((v) => v.category === selectedCategory);

  return (
    <>
      <PageHero
        eyebrow="Motion & Technical Walkthroughs"
        title={<>Site Execution &amp; <em>Factory Showcase</em></>}
        subtitle="Go inside our 35,000 sq.ft Al Quoz 3 CNC joinery facility and walk through our completed DIFC headquarters, Palm Jumeirah villas, and DHA medical clinics."
        breadcrumbs={[
          { label: 'Gallery', to: '/photo-gallery' },
          { label: 'Video Gallery' }
        ]}
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
            <div className="filter-bar" style={{ marginBottom: 0 }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={'filter-btn ' + (selectedCategory === cat ? 'active' : '')}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <Link to="/photo-gallery" className="btn btn-outline">
              View High-Res Photo Gallery →
            </Link>
          </div>

          <div className="grid-2" style={{ gap: '28px' }}>
            {filtered.map((vid) => (
              <div key={vid.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{ position: 'relative', height: '290px', cursor: 'pointer', overflow: 'hidden' }}
                  onClick={() => setActiveVideo(vid)}
                >
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.75)' }}
                  />
                  <span className="badge" style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(13,13,13,0.88)' }}>
                    {vid.category}
                  </span>
                  <span style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    background: 'rgba(13,13,13,0.88)',
                    border: '1px solid var(--border)',
                    padding: '4px 10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--cream)'
                  }}>
                    {vid.duration}
                  </span>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.92)',
                    color: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    boxShadow: '0 12px 30px rgba(0,0,0,0.5)'
                  }}>
                    ▶
                  </div>
                </div>

                <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '6px' }}>
                      {vid.location}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '10px' }}>
                      {vid.title}
                    </h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '18px' }}>
                      {vid.summary}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                    <button type="button" className="btn btn-primary" onClick={() => setActiveVideo(vid)}>
                      Open Walkthrough Brief
                    </button>
                    {vid.projectSlug && (
                      <Link to={'/projects/' + vid.projectSlug} className="btn btn-outline">
                        Case Study →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE WALKTHROUGH MODAL */}
      {activeVideo && (
        <div className="lightbox-overlay" onClick={() => setActiveVideo(null)}>
          <div
            className="card"
            style={{ maxWidth: '760px', width: '100%', padding: 0, overflow: 'hidden', background: 'var(--ink-2)', border: '1px solid var(--accent)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative', height: '360px' }}>
              <img src={activeVideo.thumbnail} alt={activeVideo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(13,13,13,0.88)', border: '1px solid var(--border)', color: 'var(--cream)', width: '38px', height: '38px', cursor: 'pointer' }}
              >
                ✕
              </button>
              <div style={{ position: 'absolute', bottom: '16px', left: '20px', display: 'flex', gap: '10px' }}>
                <span className="badge" style={{ background: 'rgba(13,13,13,0.9)' }}>{activeVideo.category}</span>
                <span className="badge" style={{ background: 'rgba(13,13,13,0.9)' }}>{activeVideo.duration}</span>
              </div>
            </div>
            <div style={{ padding: '32px' }}>
              <span className="eyebrow">{activeVideo.location}</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', color: 'var(--cream)', marginBottom: '12px' }}>
                {activeVideo.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: 1.8, marginBottom: '20px' }}>
                {activeVideo.summary}
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>
                Key Technical Sequences Covered
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                {activeVideo.highlights.map((h) => (
                  <span key={h} className="badge">{h}</span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                {activeVideo.projectSlug ? (
                  <Link to={'/projects/' + activeVideo.projectSlug} className="btn btn-primary" onClick={() => setActiveVideo(null)}>
                    Inspect Full Case Study &amp; Gallery
                  </Link>
                ) : (
                  <Link to="/enquiry" className="btn btn-primary" onClick={() => setActiveVideo(null)}>
                    Book an Al Quoz Factory Tour
                  </Link>
                )}
                <button type="button" className="btn btn-outline" onClick={() => setActiveVideo(null)}>
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
