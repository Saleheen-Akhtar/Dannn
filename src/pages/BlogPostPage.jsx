import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, COMPANY } from '../data/siteData';
import { usePageMeta } from '../utils/usePageMeta';
import { PageHero } from '../components/Layout';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((b) => b.slug === slug) || BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.filter((b) => b.id !== post.id);

  usePageMeta({
    title: post.title,
    description: post.excerpt,
    canonicalPath: '/blog/' + post.slug
  });

  return (
    <>
      <PageHero
        eyebrow={post.category + ' · ' + post.date + ' · ' + post.readTime}
        title={post.title}
        subtitle={'By ' + post.author + ' · ' + post.excerpt}
        breadcrumbs={[
          { label: 'Journal', to: '/#journal' },
          { label: post.category }
        ]}
        bgImage={post.image}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '860px' }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: '100%', height: '440px', objectFit: 'cover', border: '1px solid var(--border)', marginBottom: '40px' }}
          />

          <div style={{ display: 'grid', gap: '24px', fontSize: '1.05rem', color: 'var(--cream)', lineHeight: 1.9, fontWeight: 300 }}>
            {post.content.map((paragraph, i) => (
              <p key={i} style={{ color: i === 0 ? 'var(--cream)' : 'var(--muted)' }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="card" style={{ marginTop: '48px', padding: '32px', background: 'var(--ink-2)', borderColor: 'var(--border-gold)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="eyebrow">Written by {post.author}</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--cream)', marginBottom: '6px' }}>
                Need Authority or Fit-Out Advisory in Dubai?
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)' }}>
                Consult our engineering team at {COMPANY.phone} or request a complimentary site inspection.
              </p>
            </div>
            <Link to="/enquiry" className="btn btn-primary">Book Consultation</Link>
          </div>

          {/* RELATED ARTICLES */}
          <div style={{ marginTop: '64px' }}>
            <span className="eyebrow">More Insights</span>
            <h3 className="section-title" style={{ fontSize: '2rem' }}>Continue <em>Reading</em></h3>
            <div className="grid-2" style={{ gap: '24px' }}>
              {otherPosts.map((op) => (
                <Link key={op.id} to={'/blog/' + op.slug} className="card" style={{ textDecoration: 'none' }}>
                  <span className="eyebrow">{op.category} · {op.readTime}</span>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '10px' }}>
                    {op.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--muted)' }}>{op.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
