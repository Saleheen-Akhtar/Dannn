import React, { useState } from "react";
import { Plus, BookOpen, Calendar, Clock, ExternalLink, X, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/data/siteData";

export function BlogsContent({ blogs = BLOG_POSTS, onAddBlog }) {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Interior Architecture");
  const [newAuthor, setNewAuthor] = useState("Mohammad Danish Adnan");
  const [newExcerpt, setNewExcerpt] = useState("");
  const [newReadTime, setNewReadTime] = useState("5 min read");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newPost = {
      id: "blog-" + Date.now(),
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: newTitle.trim(),
      category: newCategory,
      author: newAuthor,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      readTime: newReadTime,
      excerpt: newExcerpt.trim() || "Insights into turnkey commercial fit-out by YFB Contracting.",
      content: [newExcerpt.trim()],
      image: "/static/hero/hospitality.jpg",
    };

    onAddBlog?.(newPost);
    setIsCreateOpen(false);
    setNewTitle("");
    setNewExcerpt("");
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-7 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-serif text-foreground">Journal &amp; Technical Insights CMS</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Manage thought leadership and interior architecture publications
          </p>
        </div>

        <Button onClick={() => setIsCreateOpen(true)} className="h-10 gap-1.5 rounded-xl px-4 text-xs font-semibold">
          <Plus className="size-4" />
          Publish New Article
        </Button>
      </div>

      {isCreateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-card border rounded-2xl p-6 w-full max-w-lg shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-semibold text-base text-foreground font-serif">Publish Technical Insight</h3>
              <Button variant="ghost" size="icon-xs" onClick={() => setIsCreateOpen(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-medium text-foreground block mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sustainable Office Acoustics in Dubai High-Rises"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1">Category</label>
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1">Author</label>
                  <input
                    type="text"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-foreground block mb-1">Excerpt &amp; Overview</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Summary of the key engineering takeaways..."
                  value={newExcerpt}
                  onChange={(e) => setNewExcerpt(e.target.value)}
                  className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsCreateOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" size="sm">
                  Publish to Journal
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ARTICLES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {blogs.map((post) => (
          <article
            key={post.id || post.slug}
            className="group rounded-2xl border bg-card overflow-hidden shadow-2xs hover:border-primary/50 transition-all flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={post.image || post.img}
                alt={post.title}
                className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[0.65rem] font-semibold px-2 py-0.5 rounded-md">
                {post.category}
              </span>
            </div>

            <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[0.7rem] text-muted-foreground mb-1.5">
                  <Calendar className="size-3" />
                  <span>{post.date}</span>
                  <span>·</span>
                  <Clock className="size-3" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-semibold text-sm text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t flex items-center justify-between text-xs mt-3">
                <span className="text-[0.68rem] text-muted-foreground">
                  By {post.author}
                </span>

                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-medium text-xs"
                >
                  View Live <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
