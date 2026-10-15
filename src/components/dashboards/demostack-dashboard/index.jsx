import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardLayout from "./dashboard-layout";
import { DashboardContent } from "./components/demostack/dashboard-content";
import { DemostacksContent } from "./components/demostack/demostacks-content";
import { EnquiriesContent } from "./components/demostack/enquiries-content";
import { BlogsContent } from "./components/demostack/blogs-content";
import { CategoriesContent } from "./components/demostack/categories-content";
import { CareersContent } from "./components/demostack/careers-content";
import { SettingsContent } from "./components/demostack/settings-content";
import {
  DashboardNavigationProvider,
  useDashboardNavigation,
} from "./components/demostack/navigation";
import { ThemeProvider } from "./components/demostack/theme-provider";
import {
  getAuthUser,
  logoutAdmin,
  getStoredEnquiries,
  deleteStoredEnquiry,
  getStoredApplications,
  getStoredCategories,
  saveStoredCategories,
  getStoredWebDetails,
  saveStoredWebDetails,
} from "@/utils/leadService";
import { PROJECTS, BLOG_POSTS } from "@/data/siteData";

function DashboardViewRouter({ user, onLogout }) {
  const { pathname } = useDashboardNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  // Live state for CMS
  const [enquiries, setEnquiries] = useState([]);
  const [applications, setApplications] = useState([]);
  const [categories, setCategories] = useState([]);
  const [webDetails, setWebDetails] = useState({});
  const [projectsList, setProjectsList] = useState(PROJECTS);
  const [blogsList, setBlogsList] = useState(BLOG_POSTS);

  useEffect(() => {
    setEnquiries(getStoredEnquiries());
    setApplications(getStoredApplications());
    setCategories(getStoredCategories());
    setWebDetails(getStoredWebDetails());
  }, []);

  const handleDeleteEnquiry = (id) => {
    const updated = deleteStoredEnquiry(id);
    setEnquiries(updated);
  };

  const handleToggleCategory = (id) => {
    const next = categories.map((c) =>
      c.id === id ? { ...c, active: !c.active } : c
    );
    setCategories(next);
    saveStoredCategories(next);
  };

  const handleAddCategory = (newCat) => {
    const next = [...categories, newCat];
    setCategories(next);
    saveStoredCategories(next);
  };

  const handleSaveWebDetails = (details) => {
    setWebDetails(details);
    saveStoredWebDetails(details);
  };

  const handleAddProject = (newProj) => {
    setProjectsList([newProj, ...projectsList]);
  };

  const handleAddBlog = (newBlog) => {
    setBlogsList([newBlog, ...blogsList]);
  };

  const notifications = [
    ...enquiries.slice(0, 3).map((e) => ({
      id: e.id,
      title: `New Enquiry from ${e.name}`,
      description: `${e.service} (${e.budget || "Budget: TBD"})`,
      time: new Date(e.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    })),
  ];

  // Route Content Renderer
  const renderActiveContent = () => {
    switch (pathname) {
      case "/dashboard/enquiries":
        return (
          <EnquiriesContent
            enquiries={enquiries}
            onDeleteEnquiry={handleDeleteEnquiry}
          />
        );
      case "/dashboard/projects":
        return (
          <DemostacksContent
            projects={projectsList}
            onAddProject={handleAddProject}
          />
        );
      case "/dashboard/blogs":
        return (
          <BlogsContent
            blogs={blogsList}
            onAddBlog={handleAddBlog}
          />
        );
      case "/dashboard/categories":
        return (
          <CategoriesContent
            categories={categories}
            onToggleCategory={handleToggleCategory}
            onAddCategory={handleAddCategory}
          />
        );
      case "/dashboard/careers":
        return (
          <CareersContent
            applications={applications}
          />
        );
      case "/dashboard/settings":
        return (
          <SettingsContent
            webDetails={webDetails}
            onSaveWebDetails={handleSaveWebDetails}
          />
        );
      case "/dashboard":
      default:
        return (
          <DashboardContent
            enquiries={enquiries}
            projects={projectsList}
            categories={categories}
          />
        );
    }
  };

  return (
    <DashboardLayout
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      notifications={notifications}
      onLogout={onLogout}
    >
      {renderActiveContent()}
    </DashboardLayout>
  );
}

export default function DemostackDashboardCMS({ initialTab = "/dashboard" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const auth = getAuthUser();
    if (!auth || !auth.token) {
      navigate("/login", { replace: true });
    } else {
      setUser(auth);
    }
    setCheckingAuth(false);
  }, [navigate]);

  const handleLogout = () => {
    logoutAdmin();
    navigate("/login", { replace: true });
  };

  if (checkingAuth || !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background text-foreground">
        <div className="size-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Derive initial tab from URL if present
  const currentTab = location.pathname.startsWith("/dashboard")
    ? location.pathname
    : initialTab;

  return (
    <ThemeProvider defaultTheme="dark">
      <DashboardNavigationProvider initialTab={currentTab}>
        <DashboardViewRouter user={user} onLogout={handleLogout} />
      </DashboardNavigationProvider>
    </ThemeProvider>
  );
}
