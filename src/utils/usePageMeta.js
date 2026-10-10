import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteSeoMeta } from "./seoRegistry";

export function usePageMeta({ title, description, canonicalPath, ogImage } = {}) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const meta = getRouteSeoMeta(pathname, { title, description, canonicalPath, ogImage });

    document.title = meta.title;

    const setMeta = (selector, attr, val) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, val);
    };

    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[name="robots"]', "content", meta.robots);
    setMeta('meta[property="og:type"]', "content", meta.ogType);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", meta.canonicalUrl);
    setMeta('meta[property="og:image"]', "content", meta.ogImage);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
    setMeta('meta[name="twitter:image"]', "content", meta.ogImage);
    setMeta('link[rel="canonical"]', "href", meta.canonicalUrl);

    const jsonLdEl = document.getElementById("route-jsonld");
    if (jsonLdEl && meta.jsonLd) {
      jsonLdEl.textContent = JSON.stringify(meta.jsonLd);
    }
  }, [title, description, canonicalPath, ogImage, pathname]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
}
