# Plan: Replace slow Gumroad embed with instant overlay button

## Context
The current `GumroadEmbed` component (App.tsx:614–632) works by re-injecting
`gumroad-embed.js` on every mount. That script fetches from Gumroad's servers,
which causes a visible "Loading…" delay every time a font page is opened. The
rendered widget is a cross-origin iframe, so the product cover image inside it
cannot be removed via CSS.

The fix: replace the embed with Gumroad's **overlay/popup** mode. A single
persistent script (`gumroad.js`) is loaded once in `index.html`, and any
`<a>` with `class="gumroad-button"` opens a checkout overlay on click — no
iframe, no cover image, near-instant render.

## Changes

### 1. `index.html` — preload the Gumroad overlay script once
Add to `<head>` (before `</head>`):
```html
<script src="https://gumroad.com/js/gumroad.js" async></script>
```
Loading it here means it's already cached by the time any font page mounts.

### 2. `src/App.tsx` — rewrite `GumroadEmbed` (lines 614–632)
Remove the `useEffect` that injects/removes the script on every mount.
Replace the component with a styled anchor that Gumroad's overlay script picks up:

```tsx
function GumroadEmbed({ url }: { url: string }) {
  return (
    <a
      href={url}
      className="gumroad-button"
      data-gumroad-single-product="true"
      style={{
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        fontSize: "1.1rem",
        background: "#000",
        color: "#fff",
        padding: "1rem 2.5rem",
        textDecoration: "none",
        display: "inline-block",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}
    >
      Buy now
    </a>
  );
}
```

The `gumroad-button` class and `data-gumroad-single-product="true"` attribute
are what Gumroad's overlay script looks for to intercept the click.

## Result
- **No loading state** — the button renders immediately
- **No product cover image** — just the clean checkout overlay
- **Script loaded once** globally, not re-fetched per page navigation

## Verification
1. Open any font page (e.g. `/shop/last-call`) — the buy button should appear
   instantly with no "Loading…" text
2. Click the button — Gumroad's checkout overlay should open on top of the page
3. Navigate between font pages — no delay, no re-fetch
