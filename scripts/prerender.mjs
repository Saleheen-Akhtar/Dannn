import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const ssrDir = path.resolve(rootDir, "dist-ssr");
const publicDir = path.resolve(rootDir, "public");

function escapeHtmlAttr(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtmlText(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectRouteHead(templateHtml, meta) {
  let html = templateHtml;

  const safeTitle = escapeHtmlText(meta.title);
  const safeTitleAttr = escapeHtmlAttr(meta.title);
  const safeDescAttr = escapeHtmlAttr(meta.description);
  const safeRobotsAttr = escapeHtmlAttr(meta.robots);
  const safeCanonicalAttr = escapeHtmlAttr(meta.canonicalUrl);
  const safeOgImageAttr = escapeHtmlAttr(meta.ogImage);
  const safeOgTypeAttr = escapeHtmlAttr(meta.ogType);

  // 1. <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`);

  // 2. <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${safeDescAttr}" />`
  );

  // 3. <meta name="robots">
  html = html.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${safeRobotsAttr}" />`
  );

  // 4. <link rel="canonical">
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${safeCanonicalAttr}" />`
  );

  // 5. OpenGraph tags
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${safeOgTypeAttr}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${safeTitleAttr}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${safeDescAttr}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${safeCanonicalAttr}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${safeOgImageAttr}" />`
  );

  // 6. Twitter Card tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${safeTitleAttr}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${safeDescAttr}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${safeOgImageAttr}" />`
  );

  // 7. Per-route JSON-LD Structured Data
  const jsonLdString = JSON.stringify(meta.jsonLd, null, 2);
  html = html.replace(
    /<script\s+id="route-jsonld"\s+type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script id="route-jsonld" type="application/ld+json">\n${jsonLdString}\n  </script>`
  );

  return html;
}

function buildSitemapXml(siteOrigin, sitemapRoutes) {
  const lastmod = "2026-10-11";
  const urlEntries = sitemapRoutes
    .map((item) => {
      const loc = `${siteOrigin}${item.path === "/" ? "/" : item.path}`;
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${item.changefreq}</changefreq>`,
        `    <priority>${item.priority}</priority>`,
        "  </url>"
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
}

async function runPrerender() {
  const ssrEntryPath = path.join(ssrDir, "entry-server.js");
  if (!fs.existsSync(ssrEntryPath)) {
    throw new Error(`SSR bundle not found at ${ssrEntryPath}. Run vite build --ssr first.`);
  }

  const templatePath = path.join(distDir, "index.html");
  const templateHtml = fs.readFileSync(templatePath, "utf-8");

  const ssrModuleUrl = pathToFileURL(ssrEntryPath).href;
  const {
    render,
    PRERENDER_ROUTES,
    SITEMAP_ROUTES,
    SITE_ORIGIN,
    getRouteSeoMeta
  } = await import(ssrModuleUrl);

  console.log(`\n[SSR Pre-Render] Pre-rendering ${PRERENDER_ROUTES.length} routes...`);

  for (const route of PRERENDER_ROUTES) {
    const appHtml = render(route);
    const meta = getRouteSeoMeta(route);

    let routeHtml = injectRouteHead(templateHtml, meta);
    routeHtml = routeHtml.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${appHtml}</div>`
    );

    if (route === "/") {
      fs.writeFileSync(path.join(distDir, "index.html"), routeHtml, "utf-8");
    } else if (route === "/404") {
      // Write both dist/404.html (for Vercel & Apache ErrorDocument) and dist/404/index.html
      fs.writeFileSync(path.join(distDir, "404.html"), routeHtml, "utf-8");
      const dir404 = path.join(distDir, "404");
      fs.mkdirSync(dir404, { recursive: true });
      fs.writeFileSync(path.join(dir404, "index.html"), routeHtml, "utf-8");
    } else {
      const cleanRel = route.replace(/^\//, "");
      const outDir = path.join(distDir, cleanRel);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), routeHtml, "utf-8");
    }

    console.log(`  ✓ ${route.padEnd(44)} -> <title>${meta.title.slice(0, 56)}...</title>`);
  }

  // Generate comprehensive sitemap.xml in both public/ and dist/
  const sitemapXml = buildSitemapXml(SITE_ORIGIN, SITEMAP_ROUTES);
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf-8");
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
  console.log(`\n[Sitemap] Generated sitemap.xml with ${SITEMAP_ROUTES.length} canonical URLs.`);

  // Clean up temporary dist-ssr build folder
  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log(`[SSR Pre-Render] Complete! All ${PRERENDER_ROUTES.length} routes written to dist/.\n`);
}

runPrerender().catch((err) => {
  console.error("[SSR Pre-Render] Fatal error:", err);
  process.exit(1);
});
