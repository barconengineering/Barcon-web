# Verification results

9 November 2026 — client feedback feature branch.

| Check | Result |
| --- | --- |
| ESLint | Passed |
| Production build and TypeScript | Passed with Node 24.22.1 |
| Automated contact/content/asset tests | 8 passed; email provider mocked |
| Browser route audit | All 24 content routes returned HTTP 200, with one H1 each |
| Responsive overflow | No horizontal overflow on any of the 24 routes at 320, 768, 1024 or 1440 pixels |
| Runtime page errors | None during the route audit |
| Legacy service URLs | Both return 308 redirects to corrected service routes |
| Missing route | Correct HTTP 404 response |
| Certificate links | All three PDFs return HTTP 200 with application/pdf content type |
| Sitemap | 24 HTTPS URLs |
| Review indexing | robots.txt disallows crawling; indexing remains disabled |
| Project filters | All 10; Water 7; Irrigation 1; Solar 1; Roads 1 |
| Search and reset | Ade-Dawe found; empty state and clear/reset work |
| Mobile navigation | Opens, closes with Escape, and restores focus to the menu button |
| Contact browser checks | Required-field and short-message validation; simulated failure/success and form reset pass |
| Honeypot | Offscreen at -10000px, aria-hidden, tabindex -1 |
| Axe accessibility | No WCAG 2 A/AA or 2.1 AA violations on ten representative pages |
| Visual review | Desktop/mobile homepage, About layout and all public certificate pages inspected |

The accessibility sample covers Home, About, Services, Electromechanical, Projects,
Hobicha, Ade-Dawe, Approach, Contact and Privacy. Automated results do not replace
manual assistive-technology testing or guarantee full WCAG conformance. The community
video still needs a verified transcript/captions if its audio carries additional information.

The live site's About and Projects pages were checked: they contain the previous
nine-project version and do not supply the missing recognition scans or Ade-Dawe entry.

Not verified: real email delivery/receipt (no Resend key or recipient configured),
production performance after deployment, final management factual approval and
production hosting/analytics configuration. See LAUNCH-CHECKLIST.md.

GitHub publishing is blocked by repository permissions: a dry-run push returned
403 for local Git account K3d4m. The feature branch is local; neither main nor the
live deployment has been changed.

## Original UI restoration verification

After restoring the original palette, homepage flow and animation hooks:

- Production build / TypeScript and ESLint passed again.
- All 24 routes returned 200 with one H1 and no overflow at 320, 768, 1024 and 1440px.
- Both redirects, missing-page 404, all three certificate PDFs and 24 sitemap URLs passed again.
- Axe found no tested A/AA violations on ten representative pages in both light and dark schemes.
- Scroll-driven infrastructure progress changed from 0 to 0.888 on scrolling; the content reveal became visible. Reduced motion renders the complete diagram at progress 1.
- Mobile navigation opens, closes with Escape and restores focus.
- Updated desktop and mobile homepage screenshots were visually reviewed.

The earlier 8 automated tests remain the content/contact baseline; these unchanged paths were not retested for the presentation-only restoration.
