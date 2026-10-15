import {
  LayoutDashboard,
  Mail,
  Building2,
  BookOpen,
  FolderTree,
  Users2,
  Settings2,
  TrendingUp,
} from "lucide-react";
import { COMPANY } from "@/data/siteData";

export const workspaceNavigation = [
  { name: "Executive Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Client Enquiries", href: "/dashboard/enquiries", icon: Mail, badge: "Live" },
  { name: "Portfolio Case Studies", href: "/dashboard/projects", icon: Building2 },
  { name: "Journal & Insights", href: "/dashboard/blogs", icon: BookOpen },
  { name: "Service Categories", href: "/dashboard/categories", icon: FolderTree },
  { name: "Career Openings", href: "/dashboard/careers", icon: Users2 },
];

export const adminNavigation = [
  { name: "Performance & Analytics", href: "/dashboard/analytics", icon: TrendingUp },
  { name: "Studio & Factory Settings", href: "/dashboard/settings", icon: Settings2 },
];

export const companies = [
  {
    name: "Business Bay Design Studio",
    role: "Headquarters",
    members: [
      {
        name: COMPANY.founder.name,
        role: "Founder & MD",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256",
        initials: "DA",
      },
      {
        name: "Senior Estimation Team",
        role: "Estimator",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256",
        initials: "ET",
      },
    ],
  },
  {
    name: "Al Quoz 3 Joinery Plant",
    role: "Manufacturing Bay",
    members: [
      {
        name: "Production Master Joiner",
        role: "Plant Lead",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=256&h=256",
        initials: "AQ",
      },
    ],
  },
];

export const currentUser = {
  name: COMPANY.founder.name,
  email: COMPANY.email,
  role: COMPANY.founder.role,
  initials: "DA",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256",
};

export const defaultNotifications = [
  {
    id: "notif-1",
    title: "New Commercial BOQ Enquiry",
    description: "Office fit-out inquiry submitted for DIFC Tower (8,500 sq.ft).",
    time: "10 min ago",
  },
  {
    id: "notif-2",
    title: "Project Milestone Reached",
    description: "EDC Corporate Headquarters joinery delivered from Al Quoz 3.",
    time: "2 hours ago",
  },
  {
    id: "notif-3",
    title: "New Career Application",
    description: "Senior Interior Architect applied for open Dubai position.",
    time: "Yesterday",
  },
];
