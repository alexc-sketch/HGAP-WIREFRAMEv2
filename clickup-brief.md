# HGAP website rebuild: homepage design brief

**Client:** Hitachi Global Air Power (HGAP)
**Project:** Website rebuild on WordPress (block theme, Gutenberg, ACF Pro)
**Scope of this task:** Homepage (desktop, tablet, mobile), global header and mega menu, footer
**Owner:** [Name] · **Designer:** [Name] · **Due:** [Date]

---

## Objective

Design the new HGAP homepage, header and footer in the Hitachi brand portal style, ready for the WordPress build.

The site browses like a catalogue but converts like a B2B business: through **Request a Quote** and **phone calls**, not a checkout.

## Links

- **Functioning wireframe (GitHub):** [add repo / GitHub Pages link]
  - `index.html`: homepage, desktop and mobile (resize the window)
  - `mobile-preview.html`: homepage in a 390px phone frame
  - `sitemap.html`: navigation, footer and policy pages
- **Wireframe canvas (V1 vs V2):** https://claude.ai/artifact/6kp4JXKY5pMYSzkPpFZGzs
- **Designer handover doc:** https://claude.ai/artifact/7kfenk7XZeJnX2eKcZtt4Y (use for the brand guideline section; where it differs, this brief and the V2 wireframe win)
- **Sitemap (Figma):** https://www.figma.com/board/WloVbTfHGuH7dGftgiBVS9/HGAP-SITEMAP
- **Hitachi brand portal:** [client access]

## What the data says

GA4, 27 Oct 2025 to 27 Oct 2026, real visitors only.

- **Phone calls are the top lead type** (46% of genuine leads), so the phone number is visible everywhere.
- **Only about 17% of visitors start on the homepage**, so it's a quick signpost, not a brochure.
- **Visitor interest:** products 50%, branch locations 32%, services 15%, rental 2%.

## Deliverables

- [ ] Homepage, desktop (1440px)
- [ ] Homepage, tablet (768px)
- [ ] Homepage, mobile (390px)
- [ ] Header: default, search open, mega menu open, category hover
- [ ] Mobile menu: closed, open, accordion open
- [ ] Footer, desktop and mobile
- [ ] Hero carousel: 3 slides, plus control states (pause, play, focus)
- [ ] Product finder: default, focus, More Filters open (mobile)
- [ ] Component sheet: buttons, text links, cards, chips, icons, form fields

## Homepage sections (V2 order)

"Desktop only" means hidden on phones; it stays in the page code for SEO.

1. Promo bar (only when an offer is live)
2. Header and mega menu
3. Hero carousel (3 slides: Air compressors, AirLinx, Service and parts)
4. USP strip (desktop only)
5. Product finder (red band)
6. How can we help: Buying, Support, Fleet
7. Explore air compressors by category (2 rows of 4)
8. Our brands (desktop only)
9. How buying works (desktop only)
10. AirLinx (desktop only)
11. Services and parts (4 cards)
12. Branch finder
13. Industries (desktop only)
14. About us, with Careers link (desktop only)
15. Insights (desktop only)
16. Final CTA (red band)
17. Newsletter (desktop only)
18. Footer

## Brand rules (summary)

- **Colours:** Hitachi red #E60027 for actions only; red dark #B8001F; ink #1A1A1A; body #333333; muted #5C5C5C; lines #E3E3E3; greys #F2F2F2 and #F5F5F5; dark section #3C3C3C.
- **Type:** Hitachi brand typeface (files and licence from the client). Headlines are light, with one bold phrase.
- **Shapes:** 4px corners on cards and images; pill-shaped buttons; square mega menu panel.
- **Red:** reserved for Request a Quote and key accents.
- **Header (Hitachi standard):** wordmark; utility row with Region / Language, phone (icon), Contact Us (mail icon), and Search on the far right.
- **Footer (Hitachi standard):** contact strip, link columns, then the brand bar: Hitachi Global Website link, "© Hitachi, Ltd. 1994, 2026. All rights reserved.", legal links.

## Copy rules

- AP Style, Australian English.
- Sentence case for headings; title case for nav, footer links and buttons.
- Button wording is exactly "Request a Quote".
- Text links start with "Explore" and end with an arrow (except "Book a service" and "Call").
- No em dashes.

## Do not

- No "Shop" wording, cart, shortlist or quote list.
- No Request a Quote in the menu.
- No model counts in links or tiles.
- No client logos, testimonials or response-time promises.
- No featured models; show brands only.
- No forms on the homepage; service and parts link to their pages.
- No unverified claims: 24/7, stock, warranty length, savings percentages.

## Assets needed from the client

- [ ] Hitachi typeface files and web licence
- [ ] Logo files: Hitachi, Sullair, Champion, Bebicon, Air-One
- [ ] Australian site and team photography
- [ ] AirLinx dashboard screenshot
- [ ] Australia map artwork for the branch finder
- [ ] ABN for the footer
- [ ] Managed Air Power description

## Decisions to confirm

- [ ] Wordmark colour: red or black
- [ ] "Services & Parts" or "Services and Parts"
- [ ] "Find a Branch" in the header utility row
- [ ] Request a Quote page (outside the menu, with its own form and tracking)
- [ ] Rotary Screw category page
- [ ] "24/7 service" claim
- [ ] Brands section on mobile (currently hidden)

## Notes for development (later tasks)

- The live **Book a Service form is broken** (required upload field). Fix it now; don't wait for the rebuild.
- **Redirects:** /products/oil-injected/ to the new Oil Flooded page; merge /insights-archive/ into /insights/.
- **GA4:** add an internal traffic filter and bot filtering; track quotes separately; include device split in reports.
- **Build map:** the "Build map" toggle in the wireframe shows the Gutenberg or ACF block for each section.

## Acceptance criteria

- [ ] Labels match the sitemap exactly
- [ ] Tap targets at least 44px; body text at least 16px on mobile; WCAG AA colour contrast
- [ ] Carousel has a visible pause button
- [ ] Phone number tappable everywhere it appears
- [ ] Mobile homepage no longer than the V2 wireframe (about 6,300px)
