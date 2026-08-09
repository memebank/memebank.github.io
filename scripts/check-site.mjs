import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../src/pages/index.astro", import.meta.url), "utf8");
const required = [
  "MemeBank — remember every image",
  "Memes are a concurrency",
  "Select client language",
  "TypeScript API preview",
  "Python API preview",
  "curl upload flow",
  "Enrichment job JSON",
  "https://github.com/memebank",
  "https://github.com/cliptown",
  "navigator.clipboard",
  "prefers-reduced-motion",
];

for (const fragment of required) {
  if (!page.includes(fragment)) {
    throw new Error(`marketing page is missing required fragment: ${fragment}`);
  }
}

if (/TODO|lorem ipsum|undefined/i.test(page)) {
  throw new Error("marketing page contains placeholder or invalid copy");
}

console.log("marketing content and API-workbench checks passed");
