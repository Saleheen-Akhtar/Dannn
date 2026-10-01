import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PHOTO_GALLERY_ITEMS } from '../data/siteData';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function PhotoGalleryPage() {
  usePageMeta({
    title: 'Architectural & Interior Fit-Out Photo Gallery — 18 Curated Spaces',
    description: 'Browse 18 unique high-resolution interior fit-out, custom joinery, villa architecture, and hospitality photographs delivered across Dubai.',
    canonicalPath: '/photo-gallery'
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const categories = ['All', ...Array.from(new Set(PHOTO_GALLERY_ITEMS.map((item) => item.category)))];
  const filtered = selectedCategory === 'All'
    ? PHOTO_GALLERY_ITEMS
    : PHOTO_GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') setLightboxIdx((prev) => (prev + 1) % filtered.length);
      if (e.key === 'ArrowLeft') setLightboxIdx((prev) => (prev - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx, filtered.length]);

  const activePhoto = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  return (
    <>
      <PageHero
        eyebrow="Visual Archive · 100% Unique Photography"
        title={<>Interior &amp; Architectural <em>Photo Gallery</em></>}
        subtitle="Inspect our bespoke walnut joinery, book-matched marble reception lobbies, acoustic boardrooms, and private residential sanctuaries across the UAE."
        breadcrumbs={[
          { label: 'Gallery', to: '/photo-gallery' },
          { label: 'Photo Gallery' }
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
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIdx(null);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <Link to="/video-gallery" className="btn btn-outline">
              Switch to Video Walkthroughs →
            </Link>
          </div>

          <div className="grid-3">
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                className="card"
                style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setLightboxIdx(idx)}
              >
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span className="badge" style={{ position: 'absolute', top: '14px', left: '14px', background: 'rgba(13,13,13,0.85)' }}>
                    {item.category}
                  </span>
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '4px' }}>
                    {item.location} · {item.area}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--cream)' }}>
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activePhoto && (
        <div className="lightbox-overlay" onClick={() => setLightboxIdx(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={activePhoto.image} alt={activePhoto.title} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '16px', gap: '16px' }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setLightboxIdx((prev) => (prev - 1 + filtered.length) % filtered.length)}
              >
                ← Prev
              </button>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--cream)' }}>{activePhoto.title}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)' }}>
                  {activePhoto.category} · {activePhoto.location} · {activePhoto.area}
                </div>
              </div>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setLightboxIdx((prev) => (prev + 1) % filtered.length)}
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
