import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FoundersMessagePage from './pages/FoundersMessagePage';
import WhyUsPage from './pages/WhyUsPage';
import FaqPage from './pages/FaqPage';
import CareersPage from './pages/CareersPage';
import ServicesHubPage from './pages/ServicesHubPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PhotoGalleryPage from './pages/PhotoGalleryPage';
import VideoGalleryPage from './pages/VideoGalleryPage';
import ContactPage from './pages/ContactPage';
import EnquiryPage from './pages/EnquiryPage';
import BlogPostPage from './pages/BlogPostPage';
import { LoginPage, ForgotPasswordPage, DashboardPage } from './pages/AdminPages';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/founders-message" element={<FoundersMessagePage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/careers" element={<CareersPage />} />

        {/* Services Hub + 4 Specialist Service Routes */}
        <Route path="/services" element={<ServicesHubPage />} />
        <Route path="/services/architecture" element={<ServiceDetailPage serviceKey="architecture" />} />
        <Route path="/services/interior-design" element={<ServiceDetailPage serviceKey="interior-design" />} />
        <Route path="/services/construction" element={<ServiceDetailPage serviceKey="construction" />} />
        <Route path="/services/office-renovation" element={<ServiceDetailPage serviceKey="office-renovation" />} />

        {/* Portfolio + Dynamic Case Study Routes (including legacy /project/details compatibility) */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/project/details" element={<ProjectDetailPage />} />

        {/* Galleries (including /gallery hub alias) */}
        <Route path="/gallery" element={<PhotoGalleryPage />} />
        <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
        <Route path="/video-gallery" element={<VideoGalleryPage />} />

        {/* Contact, Configurator & Journal */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

        {/* Executive Portal & Dashboard */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<DashboardPage initialTab="enquiries" />} />
        <Route path="/dashboard/categories" element={<DashboardPage initialTab="categories" />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
