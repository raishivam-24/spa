// server/server.jsx
//
// Small production server for the Serenity Salon and Wellness Spa site.
// Serves the built static assets from ../dist and falls back to index.html
// for any unknown path, so client-side routes (react-router-dom) still work
// on a hard refresh or a direct link.
//
// This file lives in its own /server folder with a local package.json set
// to "commonjs" — the root project uses "type": "module" for the Vite/React
// app, and Node's ESM loader doesn't recognise the ".jsx" extension. Putting
// this file in a CommonJS-scoped folder lets `node server/server.jsx` run
// directly without any extra build step or loader flags.
//
// Usage:
//   npm run build        # produces ../dist
//   npm run serve        # starts this server (defaults to PORT 3000)

const path = require("node:path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "..", "dist");
const INDEX_HTML = path.join(DIST_DIR, "index.html");

// Serve hashed static assets (JS/CSS/images) with long-lived caching.
app.use(
  express.static(DIST_DIR, {
    index: false,
    maxAge: "1y",
    setHeaders(res, filePath) {
      if (filePath.endsWith("index.html")) {
        // index.html itself should always be revalidated, never cached hard,
        // so deploys are picked up immediately.
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

// Basic health check, handy for uptime monitors / load balancers.
app.get("/healthz", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

// SPA fallback: any other GET request returns index.html so
// react-router-dom's BrowserRouter can take over on the client.
// (Express 5 dropped bare "*" wildcard routes — a plain trailing
// middleware with no path matches everything not already handled above.)
app.use((req, res, next) => {
  if (req.method !== "GET") return next();
  res.sendFile(INDEX_HTML, (err) => {
    if (err) next(err);
  });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).send("Something went wrong serving the site.");
});

app.listen(PORT, () => {
  console.log(`Serenity Salon and Wellness Spa — serving ${DIST_DIR}`);
  console.log(`→ http://localhost:${PORT}`);
});
