import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { PROJECTS, COMPANY } from '../data/siteData';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const querySlug = searchParams.get('slug') || searchParams.get('id');

  const project =
    PROJECTS.find((p) => p.slug === slug || p.id === slug || p.slug === querySlug || p.id === querySlug) ||
    PROJECTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setLightboxOpen(false);
  }, [project.id]);

  usePageMeta({
    title: project.title + ' — ' + project.location + ' Case Study',
    description: project.summary + ' Delivered by YFB Fit-Out Contracting (' + project.area + ', ' + project.duration + ').',
    canonicalPath: '/projects/' + project.slug
  });

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
      if (e.key === 'ArrowLeft') setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, project.gallery.length]);

  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);
  const currentImg = project.gallery[activeImageIndex] || project.heroImage;

  return (
    <>
      <PageHero
        eyebrow={project.category + ' · ' + project.location}
        title={project.title}
        subtitle={project.summary}
        breadcrumbs={[
          { label: 'Projects', to: '/projects' },
          { label: project.title }
        ]}
        bgImage={project.heroImage}
      />

      {/* METADATA SPECIFICATION BAR */}
      <section style={{ background: 'var(--ink-2)', borderBottom: '1px solid var(--border)', padding: '28px 0' }}>
        <div className="container">
          <div className="grid-4" style={{ gap: '20px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)' }}>Client</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--cream)', marginTop: '4px' }}>{project.client}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)' }}>Location</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--cream)', marginTop: '4px' }}>{project.location}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)' }}>Gross Floor Area</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--accent)', marginTop: '4px' }}>{project.area}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)' }}>Programme & Year</div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--accent)', marginTop: '4px' }}>{project.duration} · {project.year}</div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY + NARRATIVE */}
      <section className="section">
        <div className="container">
          {/* INTERACTIVE IMAGE VIEWER */}
          <div style={{ marginBottom: '56px' }}>
            <div
              style={{ position: 'relative', height: '540px', border: '1px solid var(--border)', overflow: 'hidden', cursor: 'zoom-in', background: 'var(--ink-2)' }}
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={currentImg}
                alt={project.title + ' — View ' + (activeImageIndex + 1)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: 'rgba(13,13,13,0.88)',
                border: '1px solid var(--border-gold)',
                padding: '10px 18px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--accent)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase'
              }}>
                Click to Enlarge ({activeImageIndex + 1} / {project.gallery.length})
              </div>
            </div>

            {/* THUMBNAIL STRIP */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginTop: '14px' }}>
              {project.gallery.map((imgUrl, idx) => (
                <button
                  key={imgUrl}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    padding: 0,
                    height: '96px',
                    border: idx === activeImageIndex ? '2px solid var(--accent)' : '1px solid var(--border)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: 'var(--ink-2)',
                    opacity: idx === activeImageIndex ? 1 : 0.65
                  }}
                >
                  <img src={imgUrl} alt={'Thumbnail ' + (idx + 1)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>

          {/* CASE STUDY DETAILS */}
          <div className="grid-2" style={{ gap: '56px', alignItems: 'start' }}>
            <div>
              <span className="eyebrow">Architectural Narrative</span>
              <h2 className="section-title">
                Challenge &amp; <em>Turnkey Solution</em>
              </h2>
              <div className="card" style={{ marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px' }}>
                  01 · The Brief &amp; Site Challenge
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: 1.8 }}>
                  {project.challenge}
                </p>
              </div>
              <div className="card" style={{ borderColor: 'var(--border-gold)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '8px' }}>
                  02 · YFB Engineering &amp; Factory Solution
                </div>
                <p style={{ color: 'var(--cream)', fontSize: '0.94rem', lineHeight: 1.8 }}>
                  {project.solution}
                </p>
              </div>
            </div>

            <div>
              <div className="card" style={{ padding: '32px', marginBottom: '24px' }}>
                <span className="eyebrow">Scope of Works</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '16px' }}>
                  Disciplines Delivered In-House
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                  {project.scope.map((s) => (
                    <span key={s} className="badge">{s}</span>
                  ))}
                </div>

                <span className="eyebrow">Technical Highlights</span>
                <ul style={{ paddingLeft: '18px', display: 'grid', gap: '10px', color: 'var(--cream)', fontSize: '0.9rem' }}>
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="card" style={{ padding: '28px', background: 'var(--ink-3)', borderColor: 'var(--border-gold)' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '8px' }}>
                  Planning a Similar {project.category} Project?
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '20px' }}>
                  Request an itemized Bill of Quantities and programme schedule from our {project.location.split(',')[1] || 'Dubai'} engineering team.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link to="/enquiry" className="btn btn-primary">Request Similar Quote</Link>
                  <a href={'tel:' + COMPANY.phoneRaw} className="btn btn-outline">Call {COMPANY.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
            <div>
              <span className="eyebrow">Continue Exploring</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>More Delivered <em>Case Studies</em></h2>
            </div>
            <Link to="/projects" className="btn btn-outline">All 12 Projects</Link>
          </div>
          <div className="grid-3">
            {relatedProjects.map((rel) => (
              <Link key={rel.id} to={'/projects/' + rel.slug} className="card" style={{ padding: 0, overflow: 'hidden', textDecoration: 'none' }}>
                <img src={rel.heroImage} alt={rel.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '22px' }}>
                  <span className="eyebrow">{rel.category} · {rel.location}</span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--cream)' }}>{rel.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImg} alt={project.title} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '16px', gap: '16px' }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
              >
                ← Prev
              </button>
              <div style={{ textAlign: 'center', color: 'var(--cream)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                {project.title} — Image {activeImageIndex + 1} of {project.gallery.length} (Press ESC to close)
              </div>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setActiveImageIndex((prev) => (prev + 1) % project.gallery.length)}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
