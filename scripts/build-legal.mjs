#!/usr/bin/env node
// Pré-compile les .md légaux en .html.
// À lancer manuellement après chaque modification d'un fichier .md :
//   node scripts/build-legal.mjs
// Pas dans le pipeline Next.js → aucune dépendance npm requise au runtime.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, "..", "src", "content", "legal");

marked.setOptions({ gfm: true, breaks: false });

const slugs = ["cgu", "privacy", "mentions-legales"];

for (const slug of slugs) {
  const md = await fs.readFile(path.join(DIR, `${slug}.md`), "utf8");
  const html = marked.parse(md);
  await fs.writeFile(path.join(DIR, `${slug}.html`), html, "utf8");
  console.log(`✓ ${slug}.html`);
}
