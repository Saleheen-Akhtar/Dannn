import React, { useState } from "react";
import { Users2, MapPin, Clock, ExternalLink, Mail, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAREER_OPENINGS } from "@/data/siteData";

export function CareersContent({ applications = [], vacancies = CAREER_OPENINGS }) {
  const [activeTab, setActiveTab] = useState("applications");

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-7 md:py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-serif text-foreground">Careers &amp; Studio Talent CMS</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Manage open positions across Business Bay design studio and Al Quoz 3 joinery facility
          </p>
        </div>

        <div className="flex gap-2 bg-secondary p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveTab("applications")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              activeTab === "applications" ? "bg-background text-foreground shadow-2xs" : "text-muted-foreground"
            }`}
          >
            Applications ({applications.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("vacancies")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              activeTab === "vacancies" ? "bg-background text-foreground shadow-2xs" : "text-muted-foreground"
            }`}
          >
            Open Vacancies ({vacancies.length})
          </button>
        </div>
      </div>

      {activeTab === "applications" ? (
        applications.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground border border-dashed rounded-2xl">
            No candidate applications received yet. Applications submitted on /careers will appear here.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications.map((app) => (
              <div key={app.id} className="p-5 rounded-2xl border bg-card space-y-3 shadow-2xs">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{app.fullName || app.name}</h3>
                    <p className="text-xs text-primary font-medium">{app.positionName || app.jobTitle}</p>
                  </div>
                  <span className="text-[0.65rem] text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">
                    {new Date(app.createdAt).toLocaleDateString("en-AE", { month: "short", day: "numeric" })}
                  </span>
                </div>

                <div className="text-xs text-muted-foreground space-y-1 bg-secondary/40 p-2.5 rounded-xl border">
                  <div className="flex items-center gap-1.5 truncate">
                    <Phone className="size-3 text-primary shrink-0" />
                    <span>{app.phone || "No phone"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <Mail className="size-3 text-primary shrink-0" />
                    <span>{app.email}</span>
                  </div>
                  {app.portfolioUrl && (
                    <div className="flex items-center gap-1.5 truncate">
                      <ExternalLink className="size-3 text-primary shrink-0" />
                      <a href={app.portfolioUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline truncate">
                        Portfolio / CV Link
                      </a>
                    </div>
                  )}
                </div>

                {app.coverNote && (
                  <p className="text-xs text-foreground/85 italic border-l-2 border-primary/50 pl-2 py-0.5">
                    &ldquo;{app.coverNote}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {vacancies.map((job) => (
            <div key={job.id} className="p-5 rounded-2xl border bg-card space-y-3 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[0.65rem] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {job.department}
                </span>
                <h3 className="font-semibold text-sm text-foreground mt-2">{job.title}</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="size-3" /> {job.location} · {job.type}
                </p>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-3">
                  {job.description}
                </p>
              </div>

              <div className="pt-3 border-t flex items-center justify-between text-xs">
                <span className="text-emerald-500 font-medium flex items-center gap-1 text-[0.7rem]">
                  <CheckCircle2 className="size-3" /> Active Hiring
                </span>
                <span className="text-muted-foreground text-[0.65rem] font-mono">
                  Experience: {job.experience || "3-5 Years"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
