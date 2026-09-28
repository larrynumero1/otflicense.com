# Plan: Alphabetical free-flowing shop stickers

## Goal
Rearrange all 16 stickers on `/shop` into alphabetical order while replacing the rigid three-row grid with a looser, editorial composition. The stickers should still read alphabetically from left to right and then continue on the next wrapped line, but should sit at varied heights and retain varied rotations so the result feels scattered rather than gridded.

## Confirmed alphabetical sequence
Use this shop-only DOM order:

1. BIP
2. Brus
3. Cheiron
4. Crypto
5. Dukat
6. Ella
7. Facit
8. Galanite
9. Kurir
10. Last Call
11. Liljan
12. Mormor
13. Sonja
14. Svek
15. Uber
16. XOXO

The exact number of stickers per visual line may respond to the available width; alphabetical order must never change.

## Implementation

### 1. Create a shop-only alphabetical collection
In `src/App.tsx`, derive an alphabetized copy of `typefaces` using `name.localeCompare`.

- Copy before sorting so the original `typefaces` array is never mutated.
- Keep the source array order unchanged because it also feeds the About-page designer directory and other behavior outside `/shop`.
- Preserve each typeface object intact so images, routes, font metadata, scales, casing, designers, and Gumroad URLs remain associated with the correct sticker.

### 2. Replace fixed row slices with one wrapping composition
Replace the three explicit `slice(...)` row renderers in the foundry view with one centered flex-wrap container that maps the alphabetized collection once.

- Keep DOM order alphabetical.
- Use the existing shop content area and retain centered wrapping.
- Retain the current horizontal gap as the baseline separation.
- Use a larger row gap than the current rigid layout so transformed/scaled stickers from adjacent wrapped lines cannot overlap.
- Keep enough outer padding that the scattered edge stickers do not clip against the viewport.
- Do not use CSS `order`, absolute positioning, or offsets large enough to make one sticker visually cross an alphabetical neighbor.

### 3. Make the layout intentionally free-flowing
Replace the old row-index-based edge nudges with name-based, modest horizontal and vertical offsets. This keeps the composition stable even when the number of wrapped items changes.

Use the following starting offsets, in pixels, and tune only downward during preview validation if an overlap occurs:

| Sticker | X | Y |
|---|---:|---:|
| BIP | 0 | -12 |
| Brus | +24 | +18 |
| Cheiron | -24 | -20 |
| Crypto | -18 | +8 |
| Dukat | +24 | +40 |
| Ella | +10 | +28 |
| Facit | -12 | -36 |
| Galanite | +12 | -24 |
| Kurir | +16 | +36 |
| Last Call | -20 | -8 |
| Liljan | +8 | +16 |
| Mormor | -8 | +40 |
| Sonja | +12 | -10 |
| Svek | +20 | +14 |
| Uber | -10 | -18 |
| XOXO | +8 | -36 |

These directions retain the user’s previous placement intent where applicable: XOXO, Galanite, and Facit sit higher; Kurir, Ella, Dukat, and Mormor sit lower; Brus trends right; Crypto and Cheiron trend left.

- Consolidate offsets into a single name-keyed sticker-position map rather than row-index conditionals.
- Extend/reuse `Cell`’s existing `nudgeX` and `nudgeY` props to apply these values.
- Preserve the current random resting rotation and small random horizontal scatter, plus the existing hover rotation/scale behavior.
- The offsets should create an irregular baseline, not separate isolated clusters.

### 4. Preserve interaction and surrounding UI
Do not change navigation, the header/logo/eyes treatment, marquee, transition overlay, sticker sizes, hover behavior, routes, font pages, checkout behavior, or the About-page designer ordering.

## Responsive and edge-case behavior

- Flex wrapping must keep alphabetical source order at every viewport width.
- At narrower widths, stickers may move onto additional lines rather than shrink to illegibility or overlap.
- Transforms do not contribute to flex layout measurements, so row gap and container padding must account for the largest sticker scale and the specified vertical offsets.
- The shop currently clips overflow inside its viewport-height content area; preview at the available Figma Make viewport and reduce offset amplitudes or cell width if needed so no sticker is cut off. Do not solve clipping by allowing sticker overlap.

## Verification

1. Open `/shop` in the existing preview and read the stickers left-to-right, line-by-line; confirm the exact alphabetical sequence listed above.
2. Confirm the arrangement visibly feels staggered through varied vertical positions and existing rotation rather than aligned to a strict grid.
3. Confirm no stickers overlap one another in their resting state and none clip at the content edges, beneath the header, or above the marquee.
4. Resize the preview across representative desktop widths and confirm wrapping preserves alphabetical order and separation.
5. Click representative stickers from the beginning, middle, and end of the sequence and confirm each opens its matching `/shop/[slug]` page.
6. Confirm `/about` retains its prior designer ordering and unrelated pages are unchanged.
7. Run `pnpm run build` and `git diff --check`; resolve any nonzero exit within scope.
