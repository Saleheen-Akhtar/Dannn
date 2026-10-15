import React, { useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  X,
  PhoneCall,
  Clock,
  Sparkles,
  Building,
  FileText,
  CheckCircle2,
} from "lucide-react";
import {
  DashboardFolderPlusIcon,
  DashboardImagesIcon,
  DashboardVideoIcon,
} from "./icons";
import { Button } from "@/components/ui/button";
import { buildWhatsAppEnquiryUrl } from "@/utils/leadService";
import { useDashboardNavigation } from "./navigation";

export function DashboardContent({ enquiries = [], projects = [], categories = [] }) {
  const { navigate } = useDashboardNavigation();

  const dashboardActions = [
    {
      title: "Client BOQ Enquiries",
      description: `${enquiries.length} client briefs recorded from website`,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      icon: DashboardFolderPlusIcon,
      onClick: () => navigate("/dashboard/enquiries"),
      badge: `${enquiries.length} Leads`,
    },
    {
      title: "Portfolio Case Studies",
      description: `${projects.length} delivered commercial, villa & hospitality spaces`,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
      icon: DashboardImagesIcon,
      onClick: () => navigate("/dashboard/projects"),
      badge: "640+ Handed Over",
    },
    {
      title: "Turnkey Service Disciplines",
      description: `${categories.length} active fit-out, architecture & MEP divisions`,
      image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=600&q=80",
      icon: DashboardVideoIcon,
      onClick: () => navigate("/dashboard/categories"),
      badge: "35,000 sq.ft Plant",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-6 md:px-7 md:py-8">
      {/* 1. KEY STUDIO METRICS SUMMARY */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-2xl border bg-card p-4 shadow-2xs">
          <div className="flex items-center justify-between text-muted-foreground text-xs uppercase tracking-wider font-mono">
            <span>Total Enquiries</span>
            <FileText className="size-4 text-primary" />
          </div>
          <div className="text-2xl font-bold font-serif text-foreground mt-2">{enquiries.length}</div>
          <p className="text-[0.7rem] text-muted-foreground mt-1">Preserved with zero data drop</p>
        </div>

        <div className="rounded-2xl border bg-card p-4 shadow-2xs">
          <div className="flex items-center justify-between text-muted-foreground text-xs uppercase tracking-wider font-mono">
            <span>Flagship Projects</span>
            <Building className="size-4 text-primary" />
          </div>
          <div className="text-2xl font-bold font-serif text-foreground mt-2">{projects.length}</div>
          <p className="text-[0.7rem] text-muted-foreground mt-1">DIFC, Business Bay, Palm Jumeirah</p>
        </div>

        <div className="rounded-2xl border bg-card p-4 shadow-2xs">
          <div className="flex items-center justify-between text-muted-foreground text-xs uppercase tracking-wider font-mono">
            <span>Active Disciplines</span>
            <Sparkles className="size-4 text-primary" />
          </div>
          <div className="text-2xl font-bold font-serif text-foreground mt-2">{categories.length}</div>
          <p className="text-[0.7rem] text-muted-foreground mt-1">Design, Joinery, MEP, Civil</p>
        </div>

        <div className="rounded-2xl border bg-card p-4 shadow-2xs">
          <div className="flex items-center justify-between text-muted-foreground text-xs uppercase tracking-wider font-mono">
            <span>On-Time Handover</span>
            <CheckCircle2 className="size-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold font-serif text-foreground mt-2">98%</div>
          <p className="text-[0.7rem] text-muted-foreground mt-1">Est. 2016 · 10+ Years Active</p>
        </div>
      </section>

      {/* 2. THREE CORE ACTION TILES */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {dashboardActions.map((action) => (
          <div
            key={action.title}
            onClick={action.onClick}
            className="flex w-full flex-col items-start gap-6 rounded-2xl border bg-card px-4 pt-4 pb-4 transition-all hover:bg-secondary cursor-pointer hover:border-primary/40 group shadow-2xs"
          >
            <div className="relative flex size-12 items-center justify-center overflow-hidden rounded-xl">
              <img
                src={action.image}
                alt=""
                className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40" />
              <action.icon className="text-white relative z-10 size-6" />
            </div>

            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm text-foreground">{action.title}</p>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {action.description}
              </p>
              <div className="mt-2">
                <span className="inline-block text-[0.65rem] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {action.badge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. RECENT CLIENT LEADS STREAM */}
      <section className="rounded-2xl border bg-card p-5 space-y-4 shadow-2xs">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-foreground">Recent Client Enquiries</h2>
            <p className="text-xs text-muted-foreground">Direct customer submissions from website lead configurator</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => navigate("/dashboard/enquiries")} className="text-xs rounded-xl">
            View All Enquiries ({enquiries.length})
          </Button>
        </div>

        {enquiries.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-sm border border-dashed rounded-xl">
            No customer enquiries submitted yet. When clients submit fit-out briefs, they will appear here.
          </div>
        ) : (
          <div className="divide-y border rounded-xl overflow-hidden">
            {enquiries.slice(0, 4).map((enq) => (
              <div key={enq.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-secondary/40 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-foreground">{enq.name}</span>
                    <span className="text-[0.65rem] font-medium bg-primary/15 text-primary px-2 py-0.5 rounded-full">
                      {enq.service}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="size-3" />
                      {new Date(enq.createdAt).toLocaleDateString("en-AE", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {enq.phone} · {enq.email} {enq.budget ? `· Budget: ${enq.budget}` : ""}
                  </p>
                  {enq.message && (
                    <p className="text-xs text-foreground/80 italic line-clamp-1">
                      &ldquo;{enq.message}&rdquo;
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={buildWhatsAppEnquiryUrl(enq)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                  >
                    <PhoneCall className="size-3.5" />
                    Reply on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. STUDIO GUIDES & OPERATIONAL BEST PRACTICES */}
      <DashboardTips />
    </div>
  );
}

function DashboardTips() {
  const [visible, setVisible] = useState(true);
  const scrollRef = useRef(null);

  const studioTips = [
    {
      title: "Dubai Municipality (DM) Approvals",
      description: "Direct engineering portal submission for structural fit-out permits",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Civil Defence (DCD) Compliance",
      description: "In-house MEP fire-alarm, sprinkler and smoke containment engineering",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Al Quoz 3 Joinery Parallel Works",
      description: "Fabricate bespoke millwork off-site during MEP first-fix to cut 30 days",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Transparent Itemised BOQs",
      description: "Lock client milestones with zero hidden variation claims",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
    },
  ];

  if (!visible) return null;

  function scrollRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  }

  return (
    <section className="flex flex-col gap-4 rounded-2xl border bg-card p-5 shadow-2xs">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-foreground">Turnkey Fit-Out Studio Standards</h2>
          <p className="text-xs text-muted-foreground">Architectural engineering and Al Quoz 3 manufacturing protocols</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setVisible(false)}
          className="text-xs text-muted-foreground rounded-lg"
        >
          Dismiss <X className="size-3.5 ml-1" />
        </Button>
      </div>

      <div className="relative overflow-hidden">
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth pb-2 no-scrollbar">
          {studioTips.map((tip) => (
            <article key={tip.title} className="group flex w-64 shrink-0 flex-col gap-3 rounded-xl border p-3 bg-secondary/30">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg">
                <img
                  src={tip.image}
                  alt=""
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="font-semibold text-xs text-foreground line-clamp-1">{tip.title}</h3>
                <p className="text-[0.72rem] text-muted-foreground mt-1 leading-snug line-clamp-2">
                  {tip.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon-sm"
          onClick={scrollRight}
          className="absolute top-1/2 -translate-y-1/2 right-2 rounded-full shadow-md bg-background/90"
          aria-label="Scroll tips"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
