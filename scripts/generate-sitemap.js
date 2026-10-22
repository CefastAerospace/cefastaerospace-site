#!/usr/bin/env node
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const basePath = '/cefastaerospace-site';
const hostname = 'https://cefastaerospace.github.io';
const routes = [
  '/',
  '/sobre',
  '/projetos',
  '/projetos/fcp-01',
  '/conquistas',
  '/equipe',
  '/patrocinadores',
  '/contato',
];

const lastmod = new Date().toISOString().split('T')[0];

const urls = routes.map((route) => {
  const loc = `${hostname}${basePath}${route}`;
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls}
</urlset>`;

const distDir = resolve(process.cwd(), 'dist');
writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap);
console.log('✅ sitemap.xml generated at dist/sitemap.xml');