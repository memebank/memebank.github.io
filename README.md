# MemeBank marketing site

Astro source for the organization site at `https://memebank.github.io/`.

## Product coverage

The site presents MemeBank as a Flutter mobile/desktop and Rust service platform for importing, deduplicating, enriching, searching, previewing, sharing, and copying reusable images. It covers OCR, captions, tags, embeddings, full-text/vector search, portable storage, and the API boundary with [ClipTown](https://github.com/cliptown).

The code workbench contains TypeScript, Python, curl, and enrichment-job **API previews**. They are intentionally not represented as released SDKs because a public `memebank-clients` repository does not yet exist.

## Development

```bash
npm install
npm test
npm run dev
```

## Deployment

Pushes to `main` build and upload the static Astro output through `.github/workflows/pages.yml`. The repository must be public and GitHub Pages must use **GitHub Actions** as its source before the canonical URL will serve publicly.

## Planning

- Linear: `memebank`
- GitHub Project: https://github.com/orgs/memebank/projects/1
- Organization: https://github.com/memebank
