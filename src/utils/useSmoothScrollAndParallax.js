import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Whole-Website Smooth Scrolling, Scroll Progress & Multi-Depth Parallax Engine
 * - Scopes scroll progress transform directly to .scroll-progress-bar (zero root style invalidation)
 * - Drives 60fps hardware-accelerated parallax across Bento Hero, PageHero, Room Blocks, and Project Cards
 * - Interactive cursor-depth micro-parallax for Bento Hero on desktop/laptop
 * - Triggers staggered scroll-reveal animations ONLY on below-the-fold elements (zero hydration flicker)
 * - Properly disconnects IntersectionObserver on route change cleanup
 */
export function useSmoothScrollAndParallax() {
  const location = useLocation();

  useEffect(() => {
    let rafId = null;
    const progressBar = document.querySelector(".scroll-progress-bar");

    // 1. Scroll-driven Multi-Depth Parallax Engine
    const updateParallaxScene = () => {
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight || 1;
      const docHeight = Math.max(document.documentElement.scrollHeight - viewportH, 1);
      const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);

      // Scope progress directly to the bar element instead of <html> root variables
      if (progressBar) {
        progressBar.style.transform = `scaleX(${progress.toFixed(4)})`;
      }

      // Bento Hero Scroll Parallax (Desktop / Laptop)
      const hero = document.querySelector(".yfb-hero");
      if (hero && scrollY < viewportH * 1.5 && window.innerWidth >= 1025) {
        const colLeft = document.querySelector(".yfb-col-left");
        const cardHosp = document.querySelector(".yfb-card-hospitality");
        const splitRow = document.querySelector(".yfb-split-row");
        const colRight = document.querySelector(".yfb-col-right");
        const heroHead = document.querySelector(".yfb-hero-head");

        if (colLeft) colLeft.style.setProperty("--s-shift-y", `${(scrollY * 0.08).toFixed(1)}px`);
        if (cardHosp) cardHosp.style.setProperty("--s-shift-y", `${(scrollY * 0.03).toFixed(1)}px`);
        if (splitRow) splitRow.style.setProperty("--s-shift-y", `${(scrollY * 0.06).toFixed(1)}px`);
        if (colRight) colRight.style.setProperty("--s-shift-y", `${(scrollY * 0.10).toFixed(1)}px`);
        if (heroHead) heroHead.style.transform = `translate3d(0, ${(scrollY * 0.12).toFixed(1)}px, 0)`;
      }

      // Subpage Hero Banner Parallax
      const subpageHeroes = document.querySelectorAll(".subpage-hero");
      subpageHeroes.forEach((sh) => {
        const rect = sh.getBoundingClientRect();
        if (rect.bottom > -100 && rect.top < viewportH + 100) {
          const offset = rect.top * -0.32;
          sh.style.backgroundPosition = `center calc(50% + ${offset.toFixed(1)}px)`;
        }
      });

      // Architectural Image Window Parallax (.yfb-card img, .room-block img, .project-card-media img, .card img)
      const parallaxImages = document.querySelectorAll(
        ".yfb-card img, .yfb-approach-bg-img, .room-block img, .project-card-media img, .parallax-img-wrap img, .card > img, .card > div > img"
      );
      parallaxImages.forEach((img) => {
        const parent = img.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > viewportH + 80) return;

        const centerOffset = (rect.top + rect.height * 0.5 - viewportH * 0.5) / (viewportH * 0.5);
        const shift = Math.max(Math.min(centerOffset * -16, 20), -20);
        img.style.setProperty("--p-shift", `${shift.toFixed(1)}px`);
      });

      // Custom [data-parallax] elements
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

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          updateParallaxScene();
          rafId = null;
        });
      }
    };

    // 2. Desktop/Laptop Interactive Mouse Parallax for Bento Hero
    let mouseRafId = null;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const onMouseMove = (e) => {
      if (window.innerWidth < 1025) return;
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      targetMouseY = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      if (!mouseRafId) {
        mouseRafId = requestAnimationFrame(updateMouseParallax);
      }
    };

    const updateMouseParallax = () => {
      currentMouseX += (targetMouseX - currentMouseX) * 0.08;
      currentMouseY += (targetMouseY - currentMouseY) * 0.08;

      const colLeft = document.querySelector(".yfb-col-left");
      const cardHosp = document.querySelector(".yfb-card-hospitality");
      const cardStat = document.querySelector(".yfb-card-stat");
      const cardAppr = document.querySelector(".yfb-card-approach");
      const colRight = document.querySelector(".yfb-col-right");

      if (colLeft) {
        colLeft.style.setProperty("--m-shift-x", `${(-currentMouseX * 7).toFixed(2)}px`);
        colLeft.style.setProperty("--m-shift-y", `${(-currentMouseY * 7).toFixed(2)}px`);
      }
      if (cardHosp) {
        cardHosp.style.setProperty("--m-shift-x", `${(currentMouseX * 5).toFixed(2)}px`);
        cardHosp.style.setProperty("--m-shift-y", `${(-currentMouseY * 5).toFixed(2)}px`);
      }
      if (cardStat) {
        cardStat.style.setProperty("--m-shift-x", `${(-currentMouseX * 5).toFixed(2)}px`);
        cardStat.style.setProperty("--m-shift-y", `${(currentMouseY * 5).toFixed(2)}px`);
      }
      if (cardAppr) {
        cardAppr.style.setProperty("--m-shift-x", `${(currentMouseX * 5).toFixed(2)}px`);
        cardAppr.style.setProperty("--m-shift-y", `${(currentMouseY * 5).toFixed(2)}px`);
      }
      if (colRight) {
        colRight.style.setProperty("--m-shift-x", `${(currentMouseX * 7).toFixed(2)}px`);
        colRight.style.setProperty("--m-shift-y", `${(-currentMouseY * 7).toFixed(2)}px`);
      }

      if (Math.abs(targetMouseX - currentMouseX) > 0.005 || Math.abs(targetMouseY - currentMouseY) > 0.005) {
        mouseRafId = requestAnimationFrame(updateMouseParallax);
      } else {
        mouseRafId = null;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Initial update
    updateParallaxScene();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
      if (mouseRafId) cancelAnimationFrame(mouseRafId);
    };
  }, [location.pathname]);

  // Route-aware Scroll Reveal Observer (skips elements already in view to prevent hydration flicker)
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    let observer = null;
    const timer = setTimeout(() => {
      const viewportH = window.innerHeight || 800;
      const revealTargets = document.querySelectorAll(
        ".section-head, .card, .project-card-link, .service-card, .blog-card, .why-row-item, .fdiv-item, .stat-cell, .grid-2 > div, .grid-3 > div, .grid-4 > div, .yfb-proof-stat, .clients-head"
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -24px 0px" }
      );

      revealTargets.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        // Skip elements already visible in or above the viewport on initial load — prevents content flicker!
        if (rect.top < viewportH * 0.92) {
          el.classList.remove("reveal-on-scroll");
          el.classList.add("is-revealed");
          return;
        }
        el.classList.add("reveal-on-scroll");
        el.style.setProperty("--reveal-delay", `${(idx % 4) * 65}ms`);
        observer.observe(el);
      });
    }, 30);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [location.pathname]);
}
