# Client feedback implementation and launch checks

Reviewed brief: Barcon Engineering Website Developer Feedback, 9 November 2026.
Baseline: `908218be9c96e31da5d7bb0e6d77e95701d7361e`.
Feature branch: `codex/client-feedback-2026-11-09`.

## Implemented

- Responsive water-focused homepage using the final accepted illustration, with editable copy, navigation, facts, and seven service cards.
- Official supplied logo pixels, displayed as a CSS crop of the colour variant. No retyped wordmark or regenerated logo.
- Authentic existing road, building, pump, solar and HDPE-storage images. The superseded asphalt and generic pipe illustrations are not used.
- Approved mission, vision, founder biography, qualification order and issuers.
- Linked public copies of all three competency certificates. The electromechanical portrait and private house number are removed; the source documents are unchanged outside the repository. No active-validity label is asserted.
- Approved recognition descriptions, without fabricated certificate images or purported verbatim Amharic translation.
- Seven corrected service pages with grouped capabilities, relevant project links, and qualification links where applicable.
- Ten public project entries, six Completed and four Ongoing, reflecting the feedback document's portfolio record. All percentage progress, granular quantities and contract dates are removed from public project descriptions.
- Existing JV attribution retained for Hobicha, Kelle, Solarization, Soka-Sonicha and Karat.
- Separate Water, Irrigation, Solar and Roads filters, search and reset.
- Old roads and import/export URLs permanently redirect to the corrected service routes.
- Approach wording describes practical principles without asserting unverified formal operational systems.
- Consistent central contact details; existing Resend delivery retained with server validation, same-origin protection, bounded request bodies and a hidden honeypot.
- Privacy copy reflects Resend and Vercel Analytics; analytics runs only on Vercel hosting.
- Private builds remain noindex by default.

## Materials to supply after this update

The user confirmed on 9 November 2026 that unavailable materials may be supplied after the update. Do not fill these gaps with invented facts or generated project photographs.

| Item | Needed before final public sign-off |
| --- | --- |
| Ade-Dawe Phase II | Verified 2–3 sentence scope, location/client, Barcon/JV role, and genuine project photographs. The entry currently uses only its name, category and brief-record status. |
| Other missing project galleries | Verified photographs for Solarization, Soka-Sonicha, Karat and Dongoro Bonkoya, with project-to-photo identification. Existing general solar photographs are not assigned to a named project without evidence. |
| Recognition | Original Ministry of Water and Energy and Hobicha Woreda certificate images. Confirm the Amharic translation before publishing any verbatim translation. |
| Pipe products | Authentic DCI and GC product references/photos. Current supply imagery accurately shows HDPE storage; text lists DCI/HDPE/GC supply without claiming GC installation or stock availability. |
| Brand | A transparent PNG or vector original would improve the official logo presentation. Current source proportions and colours are preserved. |

## Factual and operational confirmation

- Confirm all ten project statuses as current. Dates/percentages in historical evidence must not be reused as current progress.
- Confirm roles, clients, locations and photo captions, including JV partners and public-use permission.
- Validate the all-time project count independently. The unverified “19+ projects delivered” claim is omitted; the homepage shows 2016 and seven disciplines.
- Confirm current certificate renewal/validity with management. Do not infer expiry from filenames or ignore renewal pages.
- Confirm `info@barconengineering.com`, `+251 901 223 150`, and Imperial Plaza Building, Office 201, Woreda 02, Lemi Kura Sub-City, Addis Ababa.
- Confirm email retention and actual operating practices. Privacy copy avoids inventing a retention period or claiming absence of all provider processing.
- Set server-only `RESEND_API_KEY` and `CONTACT_TO_EMAIL`; verify the sending domain for `noreply@barconengineering.com`. Run a real enquiry and confirm receipt/reply handling. Automated tests use a fake provider and do not prove inbox delivery.
- Configure production spam/rate controls at the trusted hosting/firewall layer; the honeypot is only one layer.
- Confirm the production HTTPS origin, DNS and HTTPS. Set `NEXT_PUBLIC_SITE_URL` to that origin. Enable `NEXT_PUBLIC_ALLOW_INDEXING=true` only after publication approval.
- Confirm Vercel Analytics is enabled in the production project and the privacy text matches actual hosting configuration.
- Obtain captions/transcript for the community video if its audio conveys information not already in the adjacent description.

## Validation and rollback

Run `npm run lint`, `npm test`, and `npm run build`. Browser QA covers all 24 content routes, old service redirects, not-found recovery, responsive layouts, project filters, form success/failure simulations and keyboard navigation.

This Windows host's system Node 24.15.0 failed to start a Turbopack CSS worker. The same build succeeded using the bundled Node 24.22.1. Use a working supported Node runtime; this is not an application compile error.

The baseline is preserved on `main`; implementation is isolated on the feature branch. Before merge, returning to `main` restores the prior source. After merge, use a normal revert commit or the hosting platform's previous deployment rollback rather than rewriting shared history.

No production deployment or merge is part of this update. Static-only export is not supported for the active `/api/contact` endpoint; use a Next.js server deployment.
