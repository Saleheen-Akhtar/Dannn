import React, { useState } from "react";
import {
  Mail,
  Phone,
  Calendar,
  Trash2,
  PhoneCall,
  Search,
  CheckCircle2,
  DollarSign,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppEnquiryUrl } from "@/utils/leadService";

export function EnquiriesContent({ enquiries = [], onDeleteEnquiry }) {
  const [filterService, setFilterService] = useState("All");
  const [search, setSearch] = useState("");

  const services = ["All", ...new Set(enquiries.map((e) => e.service).filter(Boolean))];

  const filtered = enquiries.filter((enq) => {
    const matchesService = filterService === "All" || enq.service === filterService;
    const matchesSearch =
      !search ||
      enq.name?.toLowerCase().includes(search.toLowerCase()) ||
      enq.phone?.includes(search) ||
      enq.email?.toLowerCase().includes(search.toLowerCase()) ||
      enq.message?.toLowerCase().includes(search.toLowerCase());
    return matchesService && matchesSearch;
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-7 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-serif text-foreground">Client Enquiries &amp; BOQ Leads</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Direct turnkey fit-out quote briefs logged from public website forms
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            {enquiries.length} Total Submissions
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {services.map((srv) => (
            <button
              key={srv}
              type="button"
              onClick={() => setFilterService(srv)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                filterService === srv
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {srv}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-64">
          <input
            type="text"
            placeholder="Search leads by name, phone, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-secondary border rounded-xl px-3 py-1.5 text-xs outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* ENQUIRIES LIST */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center text-muted-foreground border border-dashed rounded-2xl">
          {enquiries.length === 0
            ? "No enquiries received yet. Form submissions will automatically populate here."
            : "No enquiries match your search criteria."}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((enq) => (
            <div
              key={enq.id}
              className="rounded-2xl border bg-card p-5 space-y-3.5 shadow-2xs hover:border-primary/40 transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{enq.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[0.68rem] font-bold bg-primary/15 text-primary px-2 py-0.5 rounded-full">
                      {enq.service}
                    </span>
                    <span className="text-[0.7rem] text-muted-foreground flex items-center gap-1">
                      <Clock className="size-3" />
                      {new Date(enq.createdAt).toLocaleDateString("en-AE", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={() => onDeleteEnquiry?.(enq.id)}
                  className="text-muted-foreground hover:text-destructive cursor-pointer"
                  title="Delete Lead"
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>

              {/* CONTACT DETAILS */}
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground bg-secondary/50 p-2.5 rounded-xl border">
                <div className="flex items-center gap-1.5 truncate">
                  <Phone className="size-3.5 text-primary shrink-0" />
                  <a href={`tel:${enq.phone}`} className="hover:underline truncate">{enq.phone || "No phone"}</a>
                </div>
                <div className="flex items-center gap-1.5 truncate">
                  <Mail className="size-3.5 text-primary shrink-0" />
                  <a href={`mailto:${enq.email}`} className="hover:underline truncate">{enq.email || "No email"}</a>
                </div>
                {enq.location && (
                  <div className="flex items-center gap-1.5 truncate col-span-2">
                    <MapPin className="size-3.5 text-primary shrink-0" />
                    <span className="truncate">{enq.location}</span>
                  </div>
                )}
                {enq.budget && (
                  <div className="flex items-center gap-1.5 truncate col-span-2">
                    <DollarSign className="size-3.5 text-emerald-500 shrink-0" />
                    <span>Budget Range: {enq.budget}</span>
                  </div>
                )}
              </div>

              {/* CLIENT BRIEF / MESSAGE */}
              {enq.message && (
                <div className="p-3 rounded-xl bg-background border text-xs text-foreground/90 leading-relaxed italic">
                  &ldquo;{enq.message}&rdquo;
                </div>
              )}

              {/* ACTION BAR */}
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="text-[0.65rem] text-muted-foreground">
                  Source: {enq.source || "Website Form"}
                </span>

                <a
                  href={buildWhatsAppEnquiryUrl(enq)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                >
                  <PhoneCall className="size-3.5" />
                  WhatsApp Lead
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
