import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../src/pages/index.astro", import.meta.url), "utf8");
const required = [
  "Memes are a concurrency.",
  "https://github.com/memebank",
  "https://github.com/cliptown",
  "Cloud analysis is opt-in",
];

for (const fragment of required) {
  if (!page.includes(fragment)) {
    throw new Error(`marketing page is missing required fragment: ${fragment}`);
  }
}
if (/TODO|lorem ipsum/i.test(page)) {
  throw new Error("marketing page contains placeholder copy");
}
console.log("marketing content checks passed");
