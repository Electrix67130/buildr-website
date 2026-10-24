#!/usr/bin/env node
// Pré-compile les articles du centre d'aide (.md) en un seul guides.json.
// À lancer après chaque modification d'un article :
//   npm run build:guides
// Comme pour les pages légales, marked reste hors du pipeline Next.js.
//
// Chaque article commence par un en-tête :
//   ---
//   title: Comment inviter votre équipe ?
//   section: equipe            (une des sections de src/lib/guides.ts)
//   audience: Administrateur, chef de chantier — dashboard et app
//   summary: Une phrase pour la liste des articles et la description Google.
//   order: 1                   (rang dans sa section)
//   related: rejoindre-invitation, valider-etape-photo
//   ---

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, "..", "src", "content", "guides");
const REQUIRED = ["title", "section", "audience", "summary", "order"];

marked.setOptions({ gfm: true, breaks: false });

function parse(file, raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`${file} : en-tête --- manquant`);
  const meta = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  for (const key of REQUIRED) {
    if (!meta[key]) throw new Error(`${file} : champ « ${key} » manquant`);
  }
  return { meta, body: match[2] };
}

const files = (await fs.readdir(DIR)).filter((f) => f.endsWith(".md")).sort();
const guides = [];

for (const file of files) {
  const { meta, body } = parse(file, await fs.readFile(path.join(DIR, file), "utf8"));
  guides.push({
    slug: file.replace(/\.md$/, ""),
    title: meta.title,
    section: meta.section,
    audience: meta.audience,
    summary: meta.summary,
    order: Number(meta.order),
    related: meta.related ? meta.related.split(",").map((s) => s.trim()).filter(Boolean) : [],
    html: marked.parse(body),
  });
}

// Un lien « Voir aussi » vers un article absent passerait inaperçu jusqu'au 404.
const slugs = new Set(guides.map((g) => g.slug));
for (const g of guides) {
  for (const r of g.related) {
    if (!slugs.has(r)) throw new Error(`${g.slug} : article lié inconnu « ${r} »`);
  }
}

await fs.writeFile(path.join(DIR, "guides.json"), JSON.stringify(guides, null, 2) + "\n", "utf8");
console.log(`✓ guides.json (${guides.length} articles)`);
