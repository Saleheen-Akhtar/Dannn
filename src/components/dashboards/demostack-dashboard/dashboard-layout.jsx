import React from "react";
import { DashboardSidebar } from "./components/demostack/sidebar";
import { DashboardTopbar } from "./components/demostack/topbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./dashboard.css";

export default function DashboardLayout({
  children,
  searchQuery,
  setSearchQuery,
  notifications,
  onLogout,
}) {
  return (
    <SidebarProvider
      className="demostack-dashboard h-screen w-full overflow-hidden"
      style={{
        "--sidebar-width": "16.5rem",
        "--sidebar-width-icon": "4.75rem",
      }}
    >
      <DashboardSidebar onLogout={onLogout} />

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden bg-background">
        <DashboardTopbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          notifications={notifications}
        />

        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="min-h-full">
            {children}
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
