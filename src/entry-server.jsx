import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import {
  PRERENDER_ROUTES,
  SITEMAP_ROUTES,
  SITE_ORIGIN,
  getRouteSeoMeta
} from "./utils/seoRegistry";

export function render(url) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}

export { PRERENDER_ROUTES, SITEMAP_ROUTES, SITE_ORIGIN, getRouteSeoMeta };
