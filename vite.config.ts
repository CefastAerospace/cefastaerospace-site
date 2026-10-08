import { defineConfig, type Plugin, type Connect } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
const base = "/cefastaerospace-site/";
const pageDirectories = [
  "equipe",
  "projetos",
  "projetos/fcp-01",
  "projetos/cansat",
  "patrocinadores",
  "contato",
];
// Match static directory hosting: /equipe redirects to /equipe/ before HTML lookup.
const redirectDirectory: Connect.NextHandleFunction = (
  request,
  response,
  next,
) => {
  const url = new URL(request.url ?? "/", "http://localhost");
  if (
    (request.method === "GET" || request.method === "HEAD") &&
    pageDirectories.some((path) => url.pathname === `${base}${path}`)
  ) {
    response.writeHead(308, { Location: `${url.pathname}/${url.search}` });
    response.end();
    return;
  }
  next();
};
const directoryUrls: Plugin = {
  name: "mpa-directory-urls",
  configureServer(server) {
    server.middlewares.use(redirectDirectory);
  },
  configurePreviewServer(server) {
    server.middlewares.use(redirectDirectory);
  },
};
export default defineConfig({
  base,
  appType: "mpa",
  plugins: [directoryUrls, react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: [
        "index.html",
        ...pageDirectories.map((path) => `${path}/index.html`),
      ],
    },
  },
});
