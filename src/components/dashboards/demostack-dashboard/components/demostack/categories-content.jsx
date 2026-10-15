import React, { useState } from "react";
import { Plus, Check, X, FolderTree, Power, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CategoriesContent({ categories = [], onToggleCategory, onAddCategory }) {
  const [newCatName, setNewCatName] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    const newCat = {
      id: "cat-" + Date.now(),
      name: newCatName.trim(),
      slug: newCatName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      active: true,
    };

    onAddCategory?.(newCat);
    setNewCatName("");
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-7 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-serif text-foreground">Turnkey Service Disciplines</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Configure active contracting categories displayed across website menus and quotation filters
          </p>
        </div>
      </div>

      {/* ADD CATEGORY FORM */}
      <form onSubmit={handleAdd} className="flex gap-2 p-4 rounded-2xl border bg-card shadow-2xs">
        <input
          type="text"
          placeholder="New Category Name (e.g. Acoustic Glazing & Partitions)..."
          value={newCatName}
          onChange={(e) => setNewCatName(e.target.value)}
          className="flex-1 bg-secondary border rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary"
        />
        <Button type="submit" size="sm" className="rounded-xl gap-1 text-xs font-semibold">
          <Plus className="size-4" /> Add Category
        </Button>
      </form>

      {/* CATEGORIES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id || cat.name}
            className={`p-4 rounded-2xl border transition-all ${
              cat.active !== false ? "bg-card border-border" : "bg-muted/40 border-dashed opacity-60"
            } flex items-center justify-between gap-3 shadow-2xs`}
          >
            <div className="space-y-0.5">
              <h3 className="font-semibold text-sm text-foreground">{cat.name}</h3>
              <p className="text-[0.68rem] text-muted-foreground font-mono">
                /services/{cat.slug || cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onToggleCategory?.(cat.id)}
              className={`size-8 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${
                cat.active !== false
                  ? "bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              title={cat.active !== false ? "Click to Deactivate" : "Click to Activate"}
            >
              <Power className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
