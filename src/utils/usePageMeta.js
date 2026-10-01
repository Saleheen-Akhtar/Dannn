import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { COMPANY } from "../data/siteData";

export function usePageMeta({ title, description }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${COMPANY.shortName}`
      : `${COMPANY.shortName} | Turnkey Interior Fit-Out & Design Studio in Dubai`;
    document.title = fullTitle;

    const desc =
      description ||
      "Yashmeen Future Building & Fit-Out Contracting is an ISO-certified Dubai interior fit-out, architecture, joinery, and MEP engineering studio delivering turnkey spaces across the UAE since 2016.";

    const setMeta = (selector, attr, val) => {
      let el = document.querySelector(selector);
      if (el) el.setAttribute(attr, val);
    };

    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[property="og:url"]', "content", `https://www.yfbfitoutcontracting.com${pathname}`);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", desc);
    setMeta('link[rel="canonical"]', "href", `https://www.yfbfitoutcontracting.com${pathname}`);
  }, [title, description, pathname]);

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
