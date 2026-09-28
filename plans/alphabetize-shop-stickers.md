# Plan: Alphabetize all 16 shop stickers

## Goal
Rearrange the actual sticker grid on `/shop` so all 16 typeface stickers read in alphabetical order from left to right, continuing from the top row to the middle row and then the bottom row.

## Confirmed layout order
Keep the existing 6 / 5 / 5 row structure and use this order:

1. Top row: BIP, Brus, Cheiron, Crypto, Dukat, Ella
2. Middle row: Facit, Galanite, Kurir, Last Call, Liljan
3. Bottom row: Mormor, Sonja, Svek, Uber, XOXO

## Implementation
1. In `src/App.tsx`, derive a shop-only alphabetized copy of `typefaces` using the `name` field and `localeCompare`.
   - Copy before sorting so the original `typefaces` array is not mutated.
   - Keep the original array order intact because it also feeds the About-page designer directory and other behavior outside the shop grid.
2. Update only the three `/shop` row renderers to slice and render the alphabetized shop array:
   - indices 0–5 for the six-item top row;
   - indices 6–10 for the five-item middle row;
   - indices 11–15 for the five-item bottom row.
3. Preserve all sticker metadata and interactions, including routes, designer data, images, scales, Gumroad links, hover transforms, and click navigation.
4. Preserve the existing 6/5/5 row spacing and positional system:
   - the first and last sticker in each row retain the row-edge horizontal spread;
   - existing per-typeface vertical nudges remain attached to their named stickers after reordering;
   - row centering, horizontal gaps, and vertical gaps remain unchanged.

## Scope
- Change the visual order on `/shop` only.
- Do not reorder the About-page designer list.
- Do not change sticker sizes, spacing values, hover behavior, routes, checkout URLs, navigation, or any individual font page.

## Verification
1. Open `/shop` in the existing preview and confirm the visual order is exactly the 6/5/5 sequence above.
2. Confirm each sticker still opens its matching `/shop/[slug]` page.
3. Check that no stickers overlap or clip after their existing nudges are applied in the new rows.
4. Confirm `/about` retains its prior designer ordering and other pages are unaffected.
5. Run `pnpm run build` and `git diff --check`; treat any nonzero exit as a failure and resolve issues within scope.
