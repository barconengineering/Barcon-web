# Client feedback implementation and launch checks

Reviewed brief: Barcon Engineering Website Developer Feedback, 9 November 2026.
Baseline: `908218be9c96e31da5d7bb0e6d77e95701d7361e`.
Feature branch: `codex/client-feedback-2026-11-09`.
Client-facing status: `SIGN-OFF-REPORT.md` / `SIGN-OFF-REPORT.docx` (11 November 2026). Keep this file and the report in step.

## Section 8 sign-off status

Checked on 11 November 2026 against the code and the rendered site (24 routes at 360/768/1280px). Totals: 3 Done, 6 Partly done, 1 Waiting on Barcon.

| # | Checklist item | Status | Open points |
| --- | --- | --- | --- |
| 1 | Approved water-point hero with exact official logo | Partly done | Side-by-side header/footer logo needs approval; illustration contains a baked-in logo; stats band covers the jerrycan on desktop; vector logo wanted |
| 2 | Gravel road and DCI/HDPE/GC image corrections | Partly done | DCI and GC product photos/references |
| 3 | All About Us approved text | Done | — |
| 4 | Qualifications shown and current validity confirmed | Waiting on Barcon | Confirm validity/renewal of all three certificates |
| 5 | Two recognition certificates with accurate captions | Done | — |
| 6 | Seven service pages per section 4 | Partly done | DCI/GC product imagery on the supply page; optional ID of the solar service photo |
| 7 | Ten projects, authentic photos, JV attribution | Partly done | Soka-Sonicha, Karat and Dongoro Bonkoya show photos reassigned from other projects (see Reassigned photographs); Ade-Dawe holding summary; JV roles unconfirmed |
| 8 | No percentages; homepage count validated | Done | — |
| 9 | Contact details verified and form tested | Partly done | Confirm single email and recipient inbox; real end-to-end delivery test not yet run |
| 10 | Mobile, SEO, accessibility, performance, privacy QA | Partly done | Live checks after deployment (HTTPS, speed, sitemap, analytics); email retention for privacy text; publication approval |

## Implemented

- Responsive water-focused homepage using the final accepted illustration, with editable copy, navigation, facts, and seven service cards.
- Official logo artwork, unaltered, shown in a side-by-side arrangement in the header (colour/white by scroll state) and footer (white). The stacked originals remain in `public/`. The side-by-side arrangement is awaiting Barcon approval.
- Authentic existing road, building, pump, solar and HDPE-storage images. The superseded asphalt and generic pipe illustrations are not used.
- Approved mission, vision, founder biography, qualification order and issuers.
- Linked public copies of all three competency certificates. The electromechanical portrait and private house number are removed; the source documents are unchanged outside the repository. No active-validity label is asserted.
- Two recognition certificates displayed: the Ministry of Water and Energy Certificate of Appreciation (3rd Ethiopian Water and Energy Week sponsorship) and the Hobicha Woreda Certificate of Appreciation, both received 10 November 2026 and shown in the About recognition section with approved captions and a full-screen view. No translation of the Amharic certificate is published.
- Seven corrected service pages with grouped capabilities, relevant project links, and qualification links where applicable.
- Ten public project entries, six Completed and four Ongoing. Management confirmed on 10 November 2026 that all ten statuses in the brief are current. All percentage progress, granular quantities and contract dates are removed from public project descriptions.
- Existing JV attribution retained for Hobicha, Kelle, Solarization, Soka-Sonicha and Karat (still to be confirmed by Barcon).
- Separate Water, Irrigation, Solar and Roads filters, status filter, search and reset.
- Old roads and import/export URLs permanently redirect to the corrected service routes.
- Approach wording describes practical principles without asserting unverified formal operational systems.
- Consistent central contact details; existing Resend delivery retained with server validation, same-origin protection, bounded request bodies and a hidden honeypot.
- Privacy copy reflects Resend and Vercel Analytics; analytics runs only on Vercel hosting.
- Private builds remain noindex by default.
- The community video has no narration, so no captions are needed. Confirmed 10 November 2026.
- Confirmed by management on 10 November 2026: all ten project statuses, the homepage “10 Projects” count, phone `+251 96 256 1867` and the Imperial Plaza Building, Office 201, Woreda 02, Lemi Kura Sub-City, Addis Ababa address. The Hobicha client and Talato scope are also confirmed.

## Decisions awaiting Barcon approval

- Side-by-side logo in header and footer instead of the stacked original.
- Hero illustration kept unchanged although it contains the Barcon logo (the brief asks for no logos in images).
- Hero framing: the stats band covers the jerrycan on desktop.
- Photographs reassigned, unlabelled, from other projects to Soka-Sonicha, Karat and Dongoro Bonkoya on the user’s instruction (see below).
- Ade-Dawe Phase II holding summary.
- No translation of the Amharic Hobicha certificate.
- Additions beyond the brief: Contact Us nav button, redesigned project filter bar (category pills, status chips, search), full-screen photo viewing.
- Copy not covered by the brief: About “Our story”, values and community video text; homepage introduction and “Delivered for government institutions and development partners”; Approach principles.

## Still needed from Barcon

The user confirmed on 9 November 2026 that unavailable materials may be supplied after the update. Do not fill these gaps with invented facts or generated project photographs. Same order as the report.

1. Approve the side-by-side header/footer logo, or request the stacked version.
2. Approve the baked-in logo in the hero illustration; decide whether to reframe the hero so the jerrycan is visible on desktop.
3. Vector original of the official logo, if available.
4. Authentic DCI and GC pipe photos/product references. Current supply imagery shows HDPE storage; text lists DCI/HDPE/GC supply without claiming GC installation or stock.
5. Confirm current validity/renewal of the three competency certificates; supply renewed copies. Do not infer expiry from filenames or ignore renewal pages.
6. Verified photographs for Soka-Sonicha, Karat and Dongoro Bonkoya, with project-to-photo identification, to replace the reassigned photographs.
7. Ade-Dawe Phase II: verified 2–3 sentence scope, location, client and Barcon/JV role. It has six site photographs but still uses a holding summary.
8. Confirm JV partner and Barcon role for Hobicha, Kelle, Solarization, Soka-Sonicha and Karat.
9. Optional: identify the project for the solar service photo, and which station (Beneya, Garbota, Birbiskela) each solar project photo shows.
10. Public-use permission for all project photographs and captions.
11. Confirm `info@barconengineering.com` as the single public email and the inbox for `CONTACT_TO_EMAIL`.
12. Domain access to verify `noreply@barconengineering.com` in Resend; set server-only `RESEND_API_KEY` and `CONTACT_TO_EMAIL`; run a real enquiry and confirm receipt/reply handling. Automated tests use a fake provider and do not prove inbox delivery.
13. Confirm email retention practice. Privacy copy avoids inventing a retention period or claiming absence of all provider processing.
14. Confirm the Approach wording matches actual operating practice.
15. Confirm copy not covered by the brief (listed above).
16. Confirm the production HTTPS origin, DNS and hosting; set `NEXT_PUBLIC_SITE_URL`; confirm Vercel Analytics in production; configure spam/rate controls at the hosting/firewall layer; run live speed, HTTPS and sitemap checks.
17. Final publication approval, then enable `NEXT_PUBLIC_ALLOW_INDEXING=true`.

## Reassigned photographs

On 11 November 2026 the user instructed that photographs be moved from projects that have galleries into the three projects without any, with no label, overriding the brief's requirement for project-specific photographs. Each photo now appears on one project only and was removed from its original gallery. None are AI-edited. These are not photographs of the projects they now illustrate; keep this record so they can be swapped if verified photographs arrive.

| File now | Originally | Original project | Now shown on |
| --- | --- | --- | --- |
| `public/images/soka-sonicha/service-reservoir.jpg` | `hobicha/service-reservoir-01.jpg` | Hobicha Water Supply | Soka-Sonicha Asrado Dama Phase II |
| `public/images/soka-sonicha/trench-excavation.jpg` | `hobicha/trench-excavation-1.jpg` | Hobicha Water Supply | Soka-Sonicha Asrado Dama Phase II |
| `public/images/soka-sonicha/water-point.jpg` | `dimeka/water-point-2.jpg` | Dimeka Water Supply & Sanitation | Soka-Sonicha Asrado Dama Phase II |
| `public/images/karat/service-reservoir.jpg` | `dimeka/service-reservoir-02.jpg` | Dimeka Water Supply & Sanitation | Karat Water Supply |
| `public/images/karat/pipe-laying.jpg` | `kelle/pipe-laying.jpg` | Kelle Water Supply | Karat Water Supply |
| `public/images/karat/generator-house.jpg` | `kelle/generator-house-construction.jpg` | Kelle Water Supply | Karat Water Supply |
| `public/images/dongoro-bonkoya/trench-excavation.jpg` | `ade-dawe/trench-excavation.jpg` | Ade-Dawe Phase II Water Supply | Dongoro Bonkoya Phase II Water Supply |
| `public/images/dongoro-bonkoya/valve-chamber.jpg` | `ade-dawe/valve-chamber-02.jpg` | Ade-Dawe Phase II Water Supply | Dongoro Bonkoya Phase II Water Supply |
| `public/images/dongoro-bonkoya/water-point.jpg` | `hobicha/water-point.jpg` | Hobicha Water Supply | Dongoro Bonkoya Phase II Water Supply |

## Validation and rollback

Run `npm run lint`, `npm test`, and `npm run build`. Browser QA covers all 24 content routes, old service redirects, not-found recovery, responsive layouts, project filters, form success/failure simulations and keyboard navigation.

This Windows host's system Node 24.15.0 failed to start a Turbopack CSS worker. The same build succeeded using the bundled Node 24.22.1. Use a working supported Node runtime; this is not an application compile error.

The baseline is preserved on `main`; implementation is isolated on the feature branch. Before merge, returning to `main` restores the prior source. After merge, use a normal revert commit or the hosting platform's previous deployment rollback rather than rewriting shared history.

The original Barcon production site has not been deployed or merged. The feature branch is pushed for review. A separately labelled GPT Sites review copy is public by link, with email sending disabled. The main website still requires a Next.js server deployment for its active `/api/contact` endpoint.

## UI preservation requested in review

- Original navy styling, homepage flow, scroll reveals, animated infrastructure diagram and dark theme restored.
- Approved hero illustration, official logo and factual content corrections retained.
- About sequence restored: story, founder, mission/vision, values, community, qualifications, with new recognition following qualifications.
- The feedback does not request a white homepage or a wholesale redesign.
