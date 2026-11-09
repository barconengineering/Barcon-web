# Barcon Engineering website

Next.js App Router website with TypeScript, local fonts and responsive styles.

## Setup

Use a supported Node.js runtime, then run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. On this Windows host, Node 24.22.1 completed production builds; system Node 24.15.0 failed to start a Turbopack CSS worker. The build script serializes Windows filesystem work to avoid contention.

## Checks

```sh
npm run lint
npm test
npm run build
npm start
```

Tests cover contact validation and response handling with a fake email provider, portfolio invariants and asset paths. They send no real email. Production output is `.next` on Vercel and `.next-build` locally.

## Content and routes

The site has 24 content routes: seven top-level pages, seven service detail pages and ten project detail pages. It includes category filters, project search/reset, certificate links, a contact form and privacy information.

- Company details, approved copy, service groups and projects: `src/lib/content.ts`.
- Page templates: `src/app`; shared UI: `src/components`.
- Base styles: `src/app/globals.css`; Additive content styles: `src/app/feedback.css`.
- Image provenance: `ASSETS.txt`; publication dependencies: `LAUNCH-CHECKLIST.md`.

The old `/services/roads-bridges` and `/services/import-export` URLs permanently redirect to the corrected road-maintenance and equipment/materials routes.

## Design preservation

The client feedback changes content and imagery; it does not request a white theme or removal of animation. The original navy header, palette (including system dark mode), homepage section order, scroll reveals and animated infrastructure diagram are retained. The approved water-point illustration replaces the old hero visual. Service thumbnails, capability groups and portfolio filters implement the specific feedback.

## Enquiries

The form posts to `/api/contact`, validates on the server and sends through Resend. Configure server-only `RESEND_API_KEY` and `CONTACT_TO_EMAIL`; verify the sender domain for `Barcon Website <noreply@barconengineering.com>`. Do not commit secrets. `.env.example` documents configuration names.

A hidden honeypot, bounded request size, same-origin check and service allowlist provide basic safeguards. Apply additional production abuse/rate controls at the hosting/firewall layer. Provider errors and missing configuration return failure rather than claiming delivery. Confirm real inbox receipt and reply handling before launch.

## Preview and publication

Review builds are noindex by default. Set `NEXT_PUBLIC_SITE_URL` to the confirmed HTTPS origin and set `NEXT_PUBLIC_ALLOW_INDEXING=true` only after factual checks and publication approval. These settings determine canonicals, sitemap and robots output at build time.

Vercel Analytics is included only on Vercel deployments. Enable Analytics in that project and keep privacy copy consistent with the actual provider setup.

Deploy with a Next.js server runtime. A static-only export cannot run the current contact API; the old static preparation script remains for historical reference and is not the supported delivery mode.

The source hero video remains available in the repository, but the homepage now uses the management-approved water-point illustration. The original large DJI source video is not required for the current page and is not in this repository. Existing community footage is retained on About as a visitor-controlled video.

## Client feedback and rollback

Implemented from the 9 November 2026 feedback on branch `codex/client-feedback-2026-11-09`, based on `908218be9c96e31da5d7bb0e6d77e95701d7361e`. See `LAUNCH-CHECKLIST.md` for materials to supply after this update and verification still required. No missing project photographs or facts are fabricated. The 19+ total is withheld pending confirmation.

Keep changes on the feature branch for review. Before merge, switch back to unchanged `main` to recover the baseline. After merge, use a revert commit or hosting deployment rollback rather than rewriting shared history.
