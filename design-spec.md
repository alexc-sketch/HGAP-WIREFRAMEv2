# HGAP design spec (V2)

Confirm final colour values and the typeface against the Hitachi brand portal.

## Colours

| Token | Hex | Use |
|---|---|---|
| Hitachi red | #E60027 | Primary buttons, accents, active nav item (white text passes AA, 4.8:1) |
| Red dark | #B8001F | Hover; red text on white pills |
| Red band | #A8001C to #E60027 to #F0281E, 100°, soft #FF4A3D glow | Product finder and final CTA only |
| Ink | #1A1A1A | Headings, nav, outline buttons |
| Body | #333333 | Paragraphs |
| Muted | #5C5C5C | Eyebrows, meta lines |
| Line | #E3E3E3 | Borders, dividers |
| Grey surface | #F2F2F2 | Header row 2, mega menu left pane |
| Section tint | #F5F5F5 | Alternating sections, cards |
| Dark section | #3C3C3C | AirLinx |
| Red tint | #FDE8EB | Icon circles |

## Typography

| Style | Size / line height | Weight |
|---|---|---|
| Hero headline | 32 to 48px / 1.1 | Light (300) with one bold (700) phrase |
| Section heading (H2) | 34px / 1.15 | Light with one bold phrase |
| Card heading (H3) | 18 to 22px | Bold |
| Body | 16 to 17px / 1.5 | Regular |
| Eyebrow | 13 to 14px | Semibold, sentence case |

## Components

| Component | Spec |
|---|---|
| Primary button | Red pill, 46px tall, white text, title case |
| Outline button | 2px ink border, pill |
| Text link | Semibold red, "Explore ..." plus arrow |
| Phone link | Phone icon plus number, always tappable |
| Card | #F5F5F5 or white, 4px corners, link pinned to the bottom so links line up |
| Chip | White pill, 1px line border, 44px tall (branch cities) |
| Frosted card | Light grey, about 95% opacity, 12px blur (hero); dark version for AirLinx |
| Utility icons | 15px line icons: globe, phone, mail, search |

## Interactions

| Element | Behaviour |
|---|---|
| Mega menu | Click to open; open item fills red; hover or focus a category to swap the right pane; Escape, outside click or X closes |
| Search | Icon plus "Search", far right; opens a full-width bar under row 1 |
| Mobile menu | Menu icon becomes X; accordion per top item; Contact Us and Call at the bottom |
| Carousel | Primary button per slide (Explore Air Compressors, Explore AirLinx, Book a Service) plus Call; 3 slides, 6-second autoplay, pauses on hover, focus or pause button; no motion with reduced-motion settings; slide tabs hidden on mobile |
| Product finder | Search box plus 3 dropdowns; on mobile the dropdowns sit behind "More Filters (3)" |

## Breakpoints

| Width | Change |
|---|---|
| Under 560px | Category grid 2 columns, compact tiles |
| Under 900px | Mobile header and menu; desktop-only sections hidden; hero card stacks under the photo |
| Under 1100px | Category grid 2 columns |

## WordPress build map

| Section | Block |
|---|---|
| Header and footer | Template parts; custom ACF Mega menu block; options page |
| Hero | ACF Hero carousel (H1, up to 4 slides, autoplay settings) |
| USP strip | ACF block, synced pattern |
| Product finder | ACF block; GET form to /products/ |
| How can we help | Core blocks pattern |
| Categories, brands, industries | ACF grid blocks pulling taxonomy terms or posts |
| How buying works | ACF Steps, synced pattern |
| AirLinx | ACF Feature panel (dark style) |
| Services | ACF Image link cards |
| Branch finder | ACF Branch network (Branch post type) |
| About us | ACF Summary with dot points, image, two links |
| Insights | Core Query Loop (latest 3 posts) |
| Final CTA, newsletter | Synced patterns |
