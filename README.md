# BARENG

Website for Barcon Engineering, built with Next.js App Router, TypeScript, Tailwind CSS, and ESLint.

The local project name is BARENG. The public company name follows the supplied profile and logo: Barcon Engineering.

## Repository setup

The hero video is stored with Git LFS. Install Git LFS before cloning, or run `git lfs install` followed by `git lfs pull` in an existing clone. Deployment environments must download LFS objects so `public/videos/DJI_0580.MP4` contains the video rather than a pointer file.

Run `npm ci` after cloning to install the locked dependencies.

## Development

```sh
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run lint
npm run build
```

## Production

```sh
npm run build
npm start
```

The build script sets `UV_THREADPOOL_SIZE=1` on Windows to avoid intermittent filesystem contention during Next.js static page generation. The generated application is written to `.next-build`.

## Site content

- Home, About, Services, Projects, Our approach, Contact, and Privacy.
- Seven service detail pages and nine project detail pages.
- Project category filters, search, empty states, and reset.
- Responsive navigation, keyboard focus, reduced motion, and a system dark theme.
- Satoshi headings and Source Sans 3 body text, both served locally.

Company details, service content, and project records are in `src/lib/content.ts`. Page layouts are in `src/app`; shared components are in `src/components`; theme and responsive styles are in `src/app/globals.css`.

## Enquiries

The contact form validates and prepares an email draft. Visitors review the draft, then open their email application or copy the message. It does not submit to a server, save enquiries, or claim delivery. Direct submission requires an email service and server-side endpoint.

## Assets and content

The two engineering images are AI-generated illustrations used in general company and service contexts. They are not photographs of the named projects. Visible illustration captions were removed at the user request; descriptive alt text and internal provenance remain. The home irrigation feature uses a boxed SVG engineering diagram instead of an image. See `ASSETS.txt` for provenance and prompt briefs.

Company and project copy was adapted from the two supplied Word documents. Dates, certifications, testimonials, and individual project completion statuses were not invented. The logo is a CSS crop of the supplied brand reference image; replace it with an original transparent or vector asset when available.

## Local verification

Production build and ESLint pass. Browser checks cover the 23 content pages, project filters and search, contact validation and review, 404 recovery, responsive navigation, and widths down to 320px. Automated accessibility and performance results are included in the handover notes.

## Before public launch

Set NEXT_PUBLIC_SITE_URL to the confirmed HTTPS origin and NEXT_PUBLIC_ALLOW_INDEXING=true before the approved production build. Per-page canonicals, sitemap, and robots are generated from those settings. Without an origin, private-review builds remain noindex and disallow crawling. Confirm the public company/project copy, and connect a form delivery provider only if direct submissions are wanted. Replace illustrative images and the screenshot-derived logo when original brand/project assets are available. Deployment has not been performed.

## Static delivery

Set BARENG_STATIC_EXPORT=true and run npm run build. The export is written to .next-export. scripts/prepare-static.mjs creates Next.js route payload aliases for plain static hosting. Configure clean URLs (route to route.html), serve 404.html for missing routes, and preserve _next assets. Rebuild after changing the production origin or indexing setting.
