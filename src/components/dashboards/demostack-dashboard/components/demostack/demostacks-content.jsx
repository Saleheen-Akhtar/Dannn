import React, { useMemo, useState } from "react";
import {
  ArrowDownWideNarrow,
  Copy,
  EllipsisVertical,
  ExternalLink,
  Grid2X2,
  List,
  Pencil,
  Plus,
  Trash2,
  Building2,
  MapPin,
  Calendar,
  X,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/data/siteData";

const sortLabels = {
  recent: "Recent",
  ascending: "Title A-Z",
  descending: "Title Z-A",
};

export function DemostacksContent({ projects = PROJECTS, onAddProject }) {
  const [sort, setSort] = useState("recent");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [view, setView] = useState("grid");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // Form State for New Case Study
  const [newTitle, setNewTitle] = useState("");
  const [newClient, setNewClient] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newCategory, setNewCategory] = useState("Commercial Fit-Out");
  const [newArea, setNewArea] = useState("");
  const [newDuration, setNewDuration] = useState("");
  const [newSummary, setNewSummary] = useState("");

  const categories = useMemo(() => {
    return ["All", ...new Set(projects.map((p) => p.category))];
  }, [projects]);

  const visibleProjects = useMemo(() => {
    let filtered =
      selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    if (sort === "ascending") {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sort === "descending") {
      return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
    }
    return filtered;
  }, [projects, selectedCategory, sort]);

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newProject = {
      id: "proj-" + Date.now(),
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: newTitle.trim(),
      client: newClient.trim() || "Private Client",
      location: newLocation.trim() || "Dubai, UAE",
      category: newCategory,
      area: newArea.trim() || "5,000 sq.ft",
      duration: newDuration.trim() || "75 Days",
      year: "2026",
      summary: newSummary.trim() || "Turnkey interior fit-out delivered by YFB.",
      heroImage: "/static/hero/hospitality.jpg",
      thumbImage: "/static/hero/commercial.jpg",
      gallery: ["/static/hero/commercial.jpg", "/static/hero/hospitality.jpg"],
    };

    onAddProject?.(newProject);
    setIsCreateOpen(false);
    setNewTitle("");
    setNewClient("");
    setNewLocation("");
    setNewArea("");
    setNewDuration("");
    setNewSummary("");
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-7 md:py-8 space-y-6">
      {/* HEADER BAR */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold font-serif text-foreground">Delivered Case Studies</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Manage flagship commercial, residential, and hospitality projects showcase
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => setIsCreateOpen(true)}
            className="h-10 gap-1.5 rounded-xl px-4 text-xs font-semibold"
          >
            <Plus className="size-4" />
            Add New Case Study
          </Button>
        </div>
      </div>

      {/* CREATE PROJECT MODAL */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-card border rounded-2xl p-6 w-full max-w-lg shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-semibold text-base text-foreground font-serif">Add Flagship Project</h3>
              <Button variant="ghost" size="icon-xs" onClick={() => setIsCreateOpen(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-medium text-foreground block mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Al Wasl Luxury Private Office"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1">Client Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Al Wasl Holdings"
                    value={newClient}
                    onChange={(e) => setNewClient(e.target.value)}
                    className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Business Bay, Dubai"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none"
                  >
                    <option value="Commercial Fit-Out">Commercial Fit-Out</option>
                    <option value="Hospitality & F&B">Hospitality &amp; F&amp;B</option>
                    <option value="Residential Villa">Residential Villa</option>
                    <option value="Luxury Retail">Luxury Retail</option>
                    <option value="Healthcare & Clinics">Healthcare &amp; Clinics</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1">Gross Area</label>
                  <input
                    type="text"
                    placeholder="e.g. 12,000 sq.ft"
                    value={newArea}
                    onChange={(e) => setNewArea(e.target.value)}
                    className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1">Duration</label>
                  <input
                    type="text"
                    placeholder="e.g. 70 Days"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-foreground block mb-1">Case Study Summary</label>
                <textarea
                  rows={3}
                  placeholder="Turnkey design, MEP engineering and Al Quoz joinery fabrication..."
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  className="w-full bg-secondary border rounded-xl px-3 py-2 text-xs outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsCreateOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" size="sm">
                  Save Case Study
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TOOLBAR: FILTERS, SORTS & VIEW TOGGLE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer",
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort & Grid Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger
              type="button"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "h-9 gap-1.5 rounded-xl px-3 text-xs text-muted-foreground",
              })}
            >
              <ArrowDownWideNarrow className="size-4" />
              <span>Sort: {sortLabels[sort]}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                {Object.entries(sortLabels).map(([val, label]) => (
                  <DropdownMenuRadioItem key={val} value={val} className="text-xs cursor-pointer">
                    {label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline"
            size="icon"
            className={cn("size-9 rounded-xl", view === "list" && "bg-muted")}
            onClick={() => setView(view === "grid" ? "list" : "grid")}
            aria-label="Toggle view"
          >
            {view === "grid" ? <List className="size-4" /> : <Grid2X2 className="size-4" />}
          </Button>
        </div>
      </div>

      {/* PROJECT COLLECTION */}
      {visibleProjects.length === 0 ? (
        <div className="p-12 text-center text-muted-foreground border border-dashed rounded-2xl">
          No projects match the current sector filter.
        </div>
      ) : (
        <div
          className={cn(
            view === "grid"
              ? "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              : "space-y-3"
          )}
        >
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className={cn(
                "group rounded-2xl border bg-card overflow-hidden shadow-2xs hover:border-primary/50 transition-all",
                view === "list" && "flex items-center gap-4 p-3"
              )}
            >
              <div
                className={cn(
                  "relative aspect-[16/10] overflow-hidden bg-muted",
                  view === "list" && "w-36 aspect-square shrink-0 rounded-xl"
                )}
              >
                <img
                  src={project.heroImage || project.thumbImage}
                  alt={project.title}
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[0.65rem] font-semibold px-2 py-0.5 rounded-md">
                  {project.category}
                </span>
              </div>

              <div className={cn("p-4 space-y-2 flex-1", view === "list" && "p-0")}>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon-xs",
                        className: "text-muted-foreground",
                      })}
                      aria-label="Options"
                    >
                      <EllipsisVertical className="size-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem asChild>
                        <a
                          href={`/projects/${project.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <ExternalLink className="size-4" />
                          View Live Case Study
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Pencil className="size-4" />
                        Edit Specifications
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Copy className="size-4" />
                        Duplicate Project
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3" />
                    {project.location}
                  </span>
                  <span>·</span>
                  <span>{project.area}</span>
                  <span>·</span>
                  <span>{project.duration}</span>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
