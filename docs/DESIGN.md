# Reference-inspired portfolio design

## Sources and capture context

Inspected on 30 October 2026 for the existing React/CRA portfolio.

- User reference: https://www.awwwards.com/sites/olha-lazarieva
- Actual site: https://www.olhalazarieva.com/
- Inspected published hero screenshot: https://assets.awwwards.com/awards/submissions/2025/08/68af13d98621f852628699.jpg

Firecrawl extracted the actual site's branding and text. Its live full-page capture and the interactive browser remained largely blank during loading, so they did not establish animation timings or complete below-fold geometry. The published Awwwards hero screenshot was downloaded and its pixels inspected; it establishes the oversized condensed title, center-right monochrome portrait, bracket navigation, narrow discipline labels, generous whitespace, compact monospace copy, and lower-corner links.

## Observed tokens

Branding extraction on the actual site reports background `#F7F7F7`, primary text `#101010`, Spline Sans Mono for supporting text and Sofia Sans Condensed for display/body typography. Those colors also match the Awwwards entry's palette. The entry page itself has a different interface and Inter Tight typography; its UI is not the target design.

Spacing and sizing below are adaptations, not exact source CSS. The reference uses very large condensed text spanning almost the entire hero width, a portrait under the title, sparse borders, square edges, and small uppercase labels. It avoids colorful dashboard treatments in its introduction.

## Adaptation for Bhuvan

- Reuse Bhuvan's existing public portrait; grayscale with a subtle color hover. No reference portraits, project art, branding, text or awards copied.
- Headline is AI DEVELOPER, with Python/backend/applied AI context. Keep all six verified project descriptions and source URLs.
- Self-host the two open font families using Fontsource packages and their included licenses; no third-party font request at runtime.
- Desktop container: 44px side gutters, 1600px maximum; 18px mobile gutters. These are implementation choices.
- Hero: condensed display type around 20.8vw, a 12-column portrait composition, corner contact/recent-work links. Narrow screens rearrange the image and type without forcing desktop width.
- Work section: dark charcoal horizontal snap gallery, restrained original technical illustrations and one actual GridQuest screenshot. Native overflow supports touch; buttons and keyboard focus support alternative navigation. Its arrangement is an original interpretation because the dynamic reference gallery could not be reliably captured.
- About: large editorial statement plus compact supporting copy.
- Expertise: three numbered accordion rows with real capability details.
- Contact: oversized typographic email invitation with existing public contact URLs.

## Interaction and accessibility

Original CSS entrance/reveal animation rather than reproducing the reference's GSAP/WebGL implementation. Reduced-motion preferences disable motion. Reveal enhancement starts only when IntersectionObserver is available; content is otherwise visible. Mobile menu supports Escape, focus containment and return focus. Accordions expose aria-expanded and aria-controls. Filters retain all three project categories; no desktop game or CLI is labeled a live web demo.

## Verification limits

The reference's exact loading sequence, full scroll choreography, mobile layout and 3D effects were not observable in the available capture. This implementation follows the inspected visual language and is not a pixel-perfect reconstruction. Validate the live desktop layout, project filtering, gallery controls, menu and narrow iframe viewport before publication.
