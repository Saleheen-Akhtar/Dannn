import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Whole-Website Smooth Scrolling, Scroll Progress & Multi-Depth Parallax Engine
 * - Provides silky-smooth inertial wheel scrolling on desktop
 * - Drives 60fps hardware-accelerated parallax across Hero, PageHero, Room Blocks, Project Cards, and Gallery imagery
 * - Triggers staggered scroll-reveal animations across all pages on route change
 */
export function useSmoothScrollAndParallax() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId = null;
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    let isWheelScrolling = false;

    const updateParallaxScene = () => {
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight || 1;
      const docHeight = Math.max(
        document.documentElement.scrollHeight - viewportH,
        1
      );
      const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);

      document.documentElement.style.setProperty("--scroll-y", `${scrollY.toFixed(1)}px`);
      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));

      // 1. Homepage Hero Background & Foreground Card Parallax
      const heroBgImg = document.querySelector(".home-hero-bg img");
      if (heroBgImg && scrollY < viewportH * 1.4) {
        const yOffset = scrollY * 0.34;
        heroBgImg.style.transform = `translate3d(0, ${yOffset.toFixed(1)}px, 0) scale(1.1)`;
      }

      const heroBlueprint = document.querySelector(".home-hero-blueprint");
      if (heroBlueprint && scrollY < viewportH * 1.4) {
        const yBlueprint = scrollY * 0.18;
        heroBlueprint.style.transform = `translate3d(0, ${yBlueprint.toFixed(1)}px, 0)`;
      }

      const heroVisual = document.querySelector(".home-hero-visual");
      if (heroVisual && window.innerWidth > 960 && scrollY < viewportH * 1.3) {
        const yCard = scrollY * -0.09;
        heroVisual.style.transform = `translate3d(0, ${yCard.toFixed(1)}px, 0)`;
      }

      // 2. Subpage Hero Banner Parallax (All 17 Subpages)
      const subpageHeroes = document.querySelectorAll(".subpage-hero");
      subpageHeroes.forEach((hero) => {
        const rect = hero.getBoundingClientRect();
        if (rect.bottom > -100 && rect.top < viewportH + 100) {
          const offset = rect.top * -0.32;
          hero.style.backgroundPosition = `center calc(50% + ${offset.toFixed(1)}px)`;
        }
      });

      // 3. Architectural Image Window Parallax (.room-block img, .project-card-media img, .card img)
      const parallaxImages = document.querySelectorAll(
        ".room-block img, .project-card-media img, .parallax-img-wrap img, .card > img, .card > div > img"
      );
      parallaxImages.forEach((img) => {
        const parent = img.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > viewportH + 80) return;

        // Calculate normalized position (-1 at top of viewport to +1 at bottom)
        const centerOffset = (rect.top + rect.height * 0.5 - viewportH * 0.5) / (viewportH * 0.5);
        const shift = Math.max(Math.min(centerOffset * -18, 22), -22);
        img.style.setProperty("--p-shift", `${shift.toFixed(1)}px`);
      });

      // 4. Custom [data-parallax] elements
      const customNodes = document.querySelectorAll("[data-parallax]");
      customNodes.forEach((node) => {
        const speed = parseFloat(node.getAttribute("data-parallax") || "0.15");
        const rect = node.getBoundingClientRect();
        if (rect.bottom > -100 && rect.top < viewportH + 100) {
          const centerDelta = rect.top + rect.height * 0.5 - viewportH * 0.5;
          const moveY = centerDelta * -speed;
          node.style.transform = `translate3d(0, ${moveY.toFixed(1)}px, 0)`;
        }
      });
    };

    // Smooth Inertial Wheel Loop (Desktop)
    const smoothStep = () => {
      if (isWheelScrolling) {
        currentScroll += (targetScroll - currentScroll) * 0.14;
        if (Math.abs(targetScroll - currentScroll) > 0.5) {
          window.scrollTo(0, currentScroll);
          updateParallaxScene();
          rafId = requestAnimationFrame(smoothStep);
        } else {
          window.scrollTo(0, targetScroll);
          isWheelScrolling = false;
          updateParallaxScene();
          rafId = null;
        }
      } else {
        updateParallaxScene();
        rafId = null;
      }
    };

    const onScroll = () => {
      if (!isWheelScrolling) {
        currentScroll = window.scrollY;
        targetScroll = window.scrollY;
      }
      if (!rafId) {
        rafId = requestAnimationFrame(smoothStep);
      }
    };

    const onWheel = (e) => {
      // Do not hijack wheel inside modals, lightboxes, or scrollable inner containers
      if (
        e.ctrlKey ||
        document.querySelector(".lightbox-overlay, .modal-backdrop") ||
        e.target.closest(".lightbox-overlay, .modal-backdrop, .mobile-drawer, textarea, select")
      ) {
        return;
      }

      // Only apply inertial smoothing for mouse wheel on desktop viewports
      if (window.innerWidth < 1024 || Math.abs(e.deltaY) < 4) return;

      e.preventDefault();
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0
      );
      if (!isWheelScrolling) {
        currentScroll = window.scrollY;
        targetScroll = window.scrollY;
      }
      targetScroll = Math.min(Math.max(targetScroll + e.deltaY * 0.95, 0), maxScroll);
      isWheelScrolling = true;
      if (!rafId) {
        rafId = requestAnimationFrame(smoothStep);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial run
    updateParallaxScene();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Route-aware Scroll Reveal Observer for sections, cards, and headings
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      const revealTargets = document.querySelectorAll(
        ".section-head, .card, .project-card-link, .service-card, .blog-card, .why-row-item, .fdiv-item, .stat-cell, .grid-2 > div, .grid-3 > div, .grid-4 > div"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      revealTargets.forEach((el, idx) => {
        el.classList.add("reveal-on-scroll");
        el.style.setProperty("--reveal-delay", `${(idx % 4) * 65}ms`);
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 60);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}
