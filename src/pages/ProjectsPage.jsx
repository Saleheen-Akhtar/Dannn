import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, COMPANY } from '../data/siteData';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function ProjectsPage() {
  usePageMeta({
    title: 'Delivered Projects Portfolio — 640+ Commercial, Villa & Hospitality Spaces',
    description: 'Explore YFB Fit-Out Contracting flagship projects across DIFC, Business Bay, Palm Jumeirah, Dubai Marina, and Dubai Healthcare City.',
    canonicalPath: '/projects'
  });

  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow={'Portfolio · ' + COMPANY.projectsCompleted + ' Delivered Spaces'}
        title={<>Signature <em>Projects &amp; Case Studies</em></>}
        subtitle="Every project below represents a real, single-source turnkey mandate—featuring distinct architectural photography, verified square footage, and full engineering scope."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <section className="section">
        <div className="container">
          {/* FILTER BAR */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <span className="eyebrow">Filter by Sector ({filteredProjects.length} Shown)</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Explore Our <em>UAE Portfolio</em>
              </h2>
            </div>
            <div className="filter-bar" style={{ marginBottom: 0 }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={'filter-btn ' + (activeCategory === cat ? 'active' : '')}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT CARDS GRID */}
          <div className="grid-3">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={'/projects/' + project.slug}
                className="card"
                style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
              >
                <div style={{ position: 'relative', height: '270px', overflow: 'hidden' }}>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <span className="badge" style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(13,13,13,0.88)' }}>
                    {project.category}
                  </span>
                  <span style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    padding: '4px 10px',
                    background: 'rgba(13,13,13,0.88)',
                    border: '1px solid var(--border)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--accent)'
                  }}>
                    {project.area} · {project.year}
                  </span>
                </div>

                <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '6px' }}>
                      {project.location}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '10px' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '18px' }}>
                      {project.summary}
                    </p>
                  </div>

                  <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--accent)' }}>
                    <span>View Full Case Study</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
