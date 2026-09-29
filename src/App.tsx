import { useState, useRef, useEffect } from "react";
import type React from "react";
import * as opentype from "opentype.js";
import specCheiron from "./imports/simoncheiron_spec.png";
import galleryImg1 from "./imports/gallery-1.jpg";
import galleryImg2 from "./imports/gallery-2.jpg";
import galleryImg3 from "./imports/gallery-3.jpg";
import galleryXoxo1 from "./imports/xoxo1.png";
import galleryXoxo2 from "./imports/xoxo2.png";
import galleryXoxo3 from "./imports/xoxo3.png";
import galleryXoxo4 from "./imports/xoxo4.png";
import galleryUber1 from "./imports/uber1.png";
import galleryUber2 from "./imports/uber2.png";
import galleryUber3 from "./imports/uber3.png";
import galleryUber4 from "./imports/uber4.png";
import gallerySvek1 from "./imports/svek1.png";
import gallerySvek2 from "./imports/svek2.png";
import gallerySvek3 from "./imports/svek3.png";
import gallerySvek4 from "./imports/svek4.png";
import gallerySonja1 from "./imports/sonja1.png";
import gallerySonja2 from "./imports/sonja2.png";
import gallerySonja3 from "./imports/sonja3.png";
import gallerySonja4 from "./imports/sonja4.png";
import galleryMormor1 from "./imports/mormor1.png";
import galleryMormor2 from "./imports/mormor2.png";
import galleryMormor3 from "./imports/mormor3.png";
import galleryMormor4 from "./imports/mormor4.png";
import galleryLiljan1 from "./imports/liljan1.png";
import galleryLiljan2 from "./imports/liljan2.png";
import galleryLiljan3 from "./imports/liljan3.png";
import galleryLiljan4 from "./imports/liljan4.png";
import galleryBrus1 from "./imports/brus1.png";
import galleryFacit1 from "./imports/facit1.png";
import galleryFacit2 from "./imports/facit2.png";
import galleryFacit3 from "./imports/facit3.png";
import galleryFacit4 from "./imports/facit4.png";
import galleryGalanite1 from "./imports/galanite1.png";
import galleryGalanite2 from "./imports/galanite2.png";
import galleryGalanite3 from "./imports/galanite3.png";
import galleryGalanite4 from "./imports/galanite4.png";
import galleryElla1 from "./imports/ella1.png";
import galleryElla2 from "./imports/ella2.png";
import galleryElla3 from "./imports/ella3.png";
import galleryElla4 from "./imports/ella4.png";
import galleryCrypto1 from "./imports/crypto1.png";
import galleryCrypto2 from "./imports/crypto2.png";
import galleryCrypto3 from "./imports/crypto3.png";
import galleryCrypto4 from "./imports/crypto4.png";
import galleryLastCall1 from "./imports/lastcall1.png";
import galleryLastCall2 from "./imports/lastcall2.png";
import galleryLastCall3 from "./imports/lastcall3.png";
import galleryLastCall4 from "./imports/lastcall4.png";
import galleryKuriren1 from "./imports/kuriren1.png";
import galleryKuriren2 from "./imports/kuriren2.png";
import galleryKuriren3 from "./imports/kuriren3.png";
import galleryKuriren4 from "./imports/kuriren4.png";
import galleryCheiron1 from "./imports/cheiron1.png";
import galleryCheiron2 from "./imports/cheiron2.png";
import galleryCheiron3 from "./imports/cheiron3.png";
import galleryCheiron4 from "./imports/cheiron4.png";
import galleryBrus2 from "./imports/brus2.png";
import galleryBrus3 from "./imports/brus3.png";
import galleryBrus4 from "./imports/brus4.png";
import galleryBip1 from "./imports/bip1.png";
import galleryBip2 from "./imports/bip2.png";
import galleryBip3 from "./imports/bip3.png";
import galleryBip4 from "./imports/bip4.png";
import placeholderBip from "./imports/Placeholder_BIP.png";
import placeholderBrus from "./imports/Placeholder_Brus.png";
import placeholderCheiron from "./imports/Placeholder_Cheiron.png";
import placeholderCrypto from "./imports/Placeholder_Crypto.png";
import placeholderDukat from "./imports/Placeholder_Dukat.png";
import placeholderElla from "./imports/Placeholder_Ella.png";
import placeholderFacit from "./imports/Placeholder_Facit.png";
import placeholderGalanite from "./imports/Placeholder_Galanite.png";
import placeholderKuriren from "./imports/Placeholder_Kuriren.png";
import placeholderLastCall from "./imports/Placeholder_LastCall.png";
import placeholderLcdUber from "./imports/Placeholder_LCDUber.png";
import placeholderLiljan from "./imports/Placeholder_Liljan.png";
import placeholderMormor from "./imports/Placeholder_Mormor.png";
import placeholderSonja from "./imports/Placeholder_Sonja.png";
import placeholderSvek from "./imports/Placeholder_Svek.png";
import placeholderXoxo from "./imports/Placeholder_XOXO.png";
import transitionSvgRaw from "./imports/transition-asset.svg?raw";

const GALLERY_IMAGES = [galleryImg1, galleryImg2, galleryImg3];
import logo from "./imports/Logo_OTF_ny.png";
import specDukat from "./imports/alvadukat_spec.png";
import specElla from "./imports/casparella_spec.png";
import specLastCall from "./imports/emmalastcall_spec.png";
import specXOXO from "./imports/emmaxoxo_spec.png";
import specLiljan from "./imports/enyaliljan_spec.png";
import specKurir from "./imports/fahedkuriren_spec.png";
import specGalanite from "./imports/hannahgalanite_spec.png";
import specFacit from "./imports/jesperfacit_spec.png";
import specMormor from "./imports/lawrencemormor_spec.png";
import specBrus from "./imports/linnbrus_spec.png";
import specCrypto from "./imports/lovisacrypto_spec.png";
import specUber from "./imports/siljelcduber_spec.png";
import specSvek from "./imports/tindrasvek_spec.png";
import specSonja from "./imports/vesonja_spec.png";
import specBip from "./imports/vivibip_spec.png";
import introGif from "./imports/intro.gif";
import eyesSvg from "./imports/eyes.svg";
import headerEyesSvg from "./imports/OTF_EYES-2.svg";
import enterButtonSvg from "./imports/enter-button.svg";

type Page =
  | { id: "home" }
  | { id: "foundry" }
  | { id: "about" }
  | { id: "licensing" }
  | { id: "contact" }
  | { id: "bundle" }
  | { id: "typeface"; name: string };

function typefaceSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function pageToPath(page: Page) {
  if (page.id === "home") return "/intro";
  if (page.id === "foundry") return "/shop";
  if (page.id === "about") return "/about";
  if (page.id === "contact") return "/faq";
  if (page.id === "bundle") return "/bundle";
  if (page.id === "typeface") return `/shop/${typefaceSlug(page.name)}`;
  return `/${page.id}`;
}

type Edge = "top" | "bottom" | "left" | "right";

const BRAND = "OTF License";

// Text on each cell is always pure black or white for contrast.
const B = "#000", W = "#fff";

// Every accent colour used across the site — reused for random picks.
const PALETTE = ["#ff2cb2", "#0074ff", "#ff1d38", "#00ab53", "#fff800", "#c3872f", "#ff5756"];

// Builds a jagged starburst (price-sticker) path around a centre point.
function starburstPath(cx: number, cy: number, spikes: number, outerR: number, innerR: number) {
  const step = Math.PI / spikes;
  let d = "";
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const a = i * step - Math.PI / 2;
    d += `${i === 0 ? "M" : "L"}${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r).toFixed(1)} `;
  }
  return d + "Z";
}

// Elliptical/rectangular variant of the starburst — separate radii per axis so the
// price tag can be wider than it is tall.
function rectStarburstPath(cx: number, cy: number, spikes: number, outerRX: number, outerRY: number, innerRX: number, innerRY: number) {
  const step = Math.PI / spikes;
  let d = "";
  for (let i = 0; i < spikes * 2; i++) {
    const rx = i % 2 === 0 ? outerRX : innerRX;
    const ry = i % 2 === 0 ? outerRY : innerRY;
    const a = i * step - Math.PI / 2;
    d += `${i === 0 ? "M" : "L"}${(cx + Math.cos(a) * rx).toFixed(1)},${(cy + Math.sin(a) * ry).toFixed(1)} `;
  }
  return d + "Z";
}

const typefaces = [
  // — top row: stay —
  { name: "Last Call",    designer: "Emma Ljungqvist",    klass: "VK27", bg: "#0074ff", fg: W, img: specLastCall, gallery: [placeholderLastCall], font: "'Last Call', sans-serif", file: "/fonts/LASTCALLVF.woff2", casing: "upperInitial", scale: 1.50, gumroad: "https://otflicense.gumroad.com/l/lastcall?wanted=true" },
  { name: "XOXO",        designer: "Emma Tungelstedt",   klass: "VK27", bg: "#ff2cb2", fg: W, img: specXOXO, gallery: [placeholderXoxo], font: "'XOXO', sans-serif", file: "/fonts/emmaxoxo.otf", scale: 1.27, gumroad: "https://otflicense.gumroad.com/l/oilldc?wanted=true" },
  { name: "Liljan",         designer: "Enya Borg",        klass: "VK27", bg: "#ff5756", fg: W, img: specLiljan, gallery: [placeholderLiljan], font: "'Liljan', sans-serif", file: "/fonts/enyaliljan.otf", casing: "lower", scale: 0.84, gumroad: "https://otflicense.gumroad.com/l/liljan?wanted=true" },
  { name: "Kuriren",       designer: "Fahed Dehchar",     klass: "VK27", bg: "#fff800", fg: B, img: specKurir, gallery: [placeholderKuriren], font: "'Kurir', sans-serif", file: "/fonts/fahedkurir.otf", scale: 1.42 },
  // — middle —
  { name: "Ella",        designer: "Caspar Broms",   klass: "VK27", bg: "#00ab53", fg: W, img: specElla, gallery: [placeholderElla], font: "'Ella', sans-serif", file: "/fonts/casparella.woff2", scale: 1.11 },
  { name: "Svek",        designer: "Tindra Berglund",    klass: "VK27", bg: "#0074ff", fg: W, img: specSvek, gallery: [placeholderSvek], font: "'Svek', sans-serif", file: "/fonts/SVEKVF.woff2", casing: "upper", scale: 1.27, gumroad: "https://otflicense.gumroad.com/l/svek?wanted=true" },
  { name: "Cheiron",         designer: "Simon Grey",      klass: "VK27", bg: "#c3872f", fg: W, img: specCheiron, gallery: [placeholderCheiron], font: "'Cheiron', sans-serif", file: "/fonts/CHEIRONRebrandVARIABLEVF.woff2", casing: "upperInitial", scale: 1.27 },
  { name: "LCD Über",         designer: "Silje Nordback", klass: "VK27", bg: "#ff1d38", fg: W, img: specUber, gallery: [placeholderLcdUber], font: "'Uber', sans-serif", file: "/fonts/siljeuber.otf", scale: 1.50, gumroad: "https://otflicense.gumroad.com/l/lcduber?wanted=true" },
  { name: "BIP",         designer: "Vivi Tang",  klass: "VK27", bg: "#c3872f", fg: W, img: specBip, gallery: [placeholderBip], font: "'BIP', sans-serif", file: "/fonts/BIPExtendedSans-serifVF.woff2", casing: "upper", scale: 1.54, gumroad: "https://otflicense.gumroad.com/l/bip?wanted=true" },
  // — lower: Galanite + Dukat —
  { name: "Galanite",         designer: "Hannah Mårtensson",     klass: "VK27", bg: "#fff800", fg: B, img: specGalanite, gallery: [placeholderGalanite], font: "'Galanite', sans-serif", file: "/fonts/hannahgalanite.ttf", casing: "upper", scale: 1.27, gumroad: "https://otflicense.gumroad.com/l/galanite?wanted=true" },
  { name: "Dukat",    designer: "Alva Kinneholm",  klass: "VK27", bg: "#ff2cb2", fg: W, img: specDukat, gallery: [placeholderDukat], font: "'Dukat', sans-serif", file: "/fonts/alvadukat.otf", scale: 1.27, gumroad: "https://otflicense.gumroad.com/l/dukat?wanted=true" },
  // — bottom: Crypto, Facit, Sonja, Mormor, Brus —
  { name: "Crypto",         designer: "Lovisa Åkerblom",   klass: "VK27", bg: "#0074ff", fg: W, img: specCrypto, gallery: [placeholderCrypto], font: "'Crypto', sans-serif", file: "/fonts/lovisacrypto.otf", casing: "lower", scale: 1.27, gumroad: "https://otflicense.gumroad.com/l/crypto?wanted=true" },
  { name: "Facit",        designer: "Jesper Smeding",        klass: "VK27", bg: "#ff1d38", fg: W, img: specFacit, gallery: [placeholderFacit], font: "'Facit', sans-serif", file: "/fonts/jesperfacit.otf", scale: 1.27, gumroad: "https://otflicense.gumroad.com/l/facitsans?wanted=true" },
  { name: "Sonja",         designer: "Ve Örnehed",    klass: "VK27", bg: "#c3872f", fg: W, img: specSonja, gallery: [placeholderSonja], font: "'Sonja', sans-serif", file: "/fonts/vesonja.otf", casing: "upper", scale: 1.03, gumroad: "https://otflicense.gumroad.com/l/sonja?wanted=true" },
  { name: "Mormor",         designer: "Lawrence Ponsonby",   klass: "VK27", bg: "#ff5756", fg: W, img: specMormor, gallery: [placeholderMormor], font: "'Mormor', sans-serif", file: "/fonts/lawrencemormor_v2.otf", scale: 1.65 },
  { name: "Brus",         designer: "Linn Willebrand",    klass: "VK27", bg: "#00ab53", fg: W, img: specBrus, gallery: [placeholderBrus], font: "'Brus', sans-serif", file: "/fonts/BRUSxVelociped8VF.woff2", scale: 1.27, gumroad: "https://otflicense.gumroad.com/l/brus?wanted=true" },
];

// Native variable-font typefaces — rendered directly by the browser (not the
// SVG/opentype.js overlay) so variable-font metrics/kerning stay correct. Each
// axis maps to a CSS font-variation-settings tag. These known ranges act as
// fallback axis data even when opentype.js cannot parse the WOFF2 file.
type VFAxis = { label: string; tag: string; min: number; max: number; default: number; onOff?: boolean };
const NATIVE_VF: Record<string, VFAxis[]> = {
  "Ella": [
    { label: "Weight", tag: "wght", min: 100, max: 700, default: 100 },
    { label: "Serif", tag: "SRIF", min: 0, max: 100, default: 0 },
  ],
  "Brus": [
    { label: "Weight", tag: "wght", min: 60, max: 177, default: 60 },
    { label: "Slant", tag: "slnt", min: 0, max: 60, default: 0 },
  ],
  "Cheiron": [
    { label: "Weight", tag: "wght", min: 0, max: 100, default: 0 },
    { label: "Width", tag: "wdth", min: 0, max: 100, default: 0 },
  ],
  "Svek": [
    { label: "Italic", tag: "ital", min: 0, max: 100, default: 0, onOff: true },
  ],
  "BIP": [
    { label: "Weight", tag: "wght", min: 0, max: 100, default: 0 },
  ],
  "Last Call": [
    { label: "Weight", tag: "wght", min: 0, max: 900, default: 0 },
  ],
};

const SHOP_TYPEFACE_NAMES = [
  "BIP",
  "Brus",
  "Cheiron",
  "Crypto",
  "Dukat",
  "Ella",
  "Facit",
  "Galanite",
  "Kuriren",
  "Last Call",
  "Liljan",
  "Mormor",
  "Sonja",
  "Svek",
  "LCD Über",
  "XOXO",
] as const;

const shopTypefaces = SHOP_TYPEFACE_NAMES.map(
  (name) => typefaces.find((face) => face.name === name)!,
);

const SHOP_STICKER_LAYOUT: Record<string, { x: number; y: number; rotation: number }> = {
  BIP: { x: -65, y: 14, rotation: -6 },
  Brus: { x: 25, y: -32, rotation: 4 },
  Cheiron: { x: 42, y: 24, rotation: -3 },
  Crypto: { x: 68, y: -20, rotation: 6 },
  Dukat: { x: 140, y: 30, rotation: -5 },
  Ella: { x: 170, y: -12, rotation: 3 },
  Facit: { x: -145, y: -18, rotation: 5 },
  Galanite: { x: -95, y: -20, rotation: -4 },
  Kuriren: { x: -4, y: -28, rotation: 2 },
  "Last Call": { x: 100, y: 22, rotation: -5 },
  Liljan: { x: 150, y: -10, rotation: 6 },
  Mormor: { x: -104, y: 20, rotation: -4 },
  Sonja: { x: -52, y: -24, rotation: 6 },
  Svek: { x: -2, y: 28, rotation: -2 },
  "LCD Über": { x: 50, y: -18, rotation: 5 },
  XOXO: { x: 104, y: 12, rotation: -6 },
};

function pageFromPath(pathname: string): Page {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/intro" || path === "/") return { id: "home" };
  if (path === "/shop") return { id: "foundry" };
  if (path === "/about") return { id: "about" };
  if (path === "/faq") return { id: "contact" };
  if (path === "/bundle") return { id: "bundle" };

  const shopMatch = path.match(/^\/shop\/([^/]+)$/);
  if (shopMatch) {
    const face = typefaces.find((item) => typefaceSlug(item.name) === shopMatch[1].toLowerCase());
    if (face) return { id: "typeface", name: face.name };
  }

  return { id: "home" };
}

// Designer directory, derived from the typefaces (each colour/contrast pairing reused).
const designers = typefaces.map((t) => {
  const handle = t.designer.toLowerCase().replace(/\s+/g, "");
  return {
    name: t.designer,
    klass: t.klass,
    color: t.bg,
    textColor: t.fg,
    site: `${handle}.se`,
    social: handle,
  };
});

const DESIGNER_CLASSES = ["All", ...Array.from(new Set(designers.map((d) => d.klass)))];

// Ticket/stamp SVG path: rounded-corner rectangle with semicircular notches at top and bottom centre.
// viewBox 0 0 200 100. Corner radius 10, notch radius 12 centred at (100, 0) and (100, 100).
const TICKET_PATH = [
  "M 10 0",
  "L 88 0",
  "A 12 12 0 0 1 112 0",   // top notch bites downward into shape
  "L 190 0",
  "A 10 10 0 0 1 200 10",  // top-right rounded corner
  "L 200 90",
  "A 10 10 0 0 1 190 100", // bottom-right rounded corner
  "L 112 100",
  "A 12 12 0 0 1 88 100",  // bottom notch bites upward into shape
  "L 10 100",
  "A 10 10 0 0 1 0 90",    // bottom-left rounded corner
  "L 0 10",
  "A 10 10 0 0 1 10 0",    // top-left rounded corner
  "Z",
].join(" ");

function NameCell({ d }: { d: typeof designers[0] }) {
  const [cardHover, setCardHover] = useState(false);
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);
  const id = d.name.replace(/\s+/g, "-");

  return (
    <div
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => { setCardHover(false); setLeftHover(false); setRightHover(false); }}
      style={{ position: "relative", minHeight: 80, display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}
    >
      <div style={{ position: "relative", width: "100%" }}>
        <svg viewBox="0 0 200 100" style={{ width: "100%", height: "auto", display: "block" }}>
          <defs>
            <clipPath id={`clip-${id}`}>
              <path d={TICKET_PATH} />
            </clipPath>
          </defs>
          {/* Left half fill — white until hovered */}
          <rect x="0" y="0" width="100" height="100" fill={cardHover && leftHover ? d.color : "#fff"} clipPath={`url(#clip-${id})`} style={{ transition: "fill 0.15s ease" }} />
          {/* Right half fill */}
          <rect x="100" y="0" width="100" height="100" fill={cardHover && rightHover ? d.color : "#fff"} clipPath={`url(#clip-${id})`} style={{ transition: "fill 0.15s ease" }} />
          {/* Vertical dividing line — only on hover */}
          {cardHover && <line x1="100" y1="0" x2="100" y2="100" stroke="#000" strokeWidth="1.5" />}
          {/* Stamp outline — always visible */}
          <path d={TICKET_PATH} fill="none" stroke="#000" strokeWidth="1.5" />
        </svg>

        {/* Name — centred inside stamp, hidden on hover */}
        {!cardHover && (
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "1rem", color: "#000", textAlign: "center", padding: "0 1rem",
            pointerEvents: "none",
          }}>
            {d.name}
          </div>
        )}

        {/* Left half — Website (only active on card hover) */}
        {cardHover && (
          <a
            href={`https://${d.site}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setLeftHover(true)}
            onMouseLeave={() => setLeftHover(false)}
            style={{
              position: "absolute", top: 0, left: 0, width: "50%", bottom: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "0.8rem",
              color: leftHover ? d.textColor : "#000",
              textDecoration: "none", transition: "color 0.15s ease",
            }}
          >
            Website
          </a>
        )}

        {/* Right half — Social (only active on card hover) */}
        {cardHover && (
          <a
            href={`https://instagram.com/${d.social}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setRightHover(true)}
            onMouseLeave={() => setRightHover(false)}
            style={{
              position: "absolute", top: 0, left: "50%", right: 0, bottom: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "0.8rem",
              color: rightHover ? d.textColor : "#000",
              textDecoration: "none", transition: "color 0.15s ease",
            }}
          >
            Social
          </a>
        )}
      </div>
    </div>
  );
}

function StarTag({ face }: { face: typeof typefaces[0] }) {
  return (
    <div style={{ width: 110, height: 110, position: "relative", pointerEvents: "none" }}>
      <svg viewBox="0 0 110 110" width="110" height="110" style={{ position: "absolute", inset: 0 }}>
        <path
          d="M55,4 L62,36 L93,18 L76,46 L110,50 L80,65 L96,97 L63,81 L55,110 L47,81 L14,97 L30,65 L0,50 L34,46 L17,18 L48,36 Z"
          fill="white" stroke="black" strokeWidth="2.5"
        />
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "30px 16px",
      }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.55rem", fontWeight: "bold", color: "#000", lineHeight: 1.3 }}>
          {face.name}
        </p>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.47rem", color: "#333", lineHeight: 1.2, marginTop: 1 }}>
          {face.designer}
        </p>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "0.44rem", color: "#666", lineHeight: 1.2 }}>
          {face.klass}
        </p>
      </div>
    </div>
  );
}

function randomEdgePlacement(): { edge: Edge; pct: number } {
  const edges: Edge[] = ["top", "bottom", "left", "right"];
  return {
    edge: edges[Math.floor(Math.random() * 4)],
    pct: 15 + Math.random() * 55,
  };
}

function edgeToStyle(edge: Edge, pct: number): React.CSSProperties {
  const half = -55; // half of 110px tag
  if (edge === "top")    return { top: half,  left: `${pct}%`, transform: "translate(-50%, 0)" };
  if (edge === "bottom") return { bottom: half, left: `${pct}%`, transform: "translate(-50%, 0)" };
  if (edge === "left")   return { left: half, top: `${pct}%`, transform: "translate(0, -50%)" };
  return { right: half, top: `${pct}%`, transform: "translate(0, -50%)" };
}

function Cell({ face, width, onNavigate, nudgeX = 0, nudgeY = 0, rotation = 0 }: {
  face: typeof typefaces[0];
  width: string;
  onNavigate: (p: Page) => void;
  nudgeX?: number;
  nudgeY?: number;
  rotation?: number;
}) {
  const [hovered, setHovered] = useState(false);

  const s = face.scale ?? 1;
  // Hover tilt: 5° in the same direction as the resting rotation
  const hoverRotation = rotation >= 0 ? 15 : -15;

  return (
    <div
      className="cell"
      style={{ width, display: "flex", alignItems: "flex-start", pointerEvents: "none", transform: `translate(${nudgeX}px, ${nudgeY}px)` }}
    >
      <img
        src={face.img}
        alt={face.name}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onNavigate({ id: "typeface", name: face.name })}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          cursor: "pointer",
          pointerEvents: "auto",
          transform: hovered
            ? `rotate(${hoverRotation}deg) scale(${s})`
            : `rotate(${rotation}deg) scale(${s})`,
          transition: "none",
          transformOrigin: "center",
          position: "relative",
          zIndex: hovered ? 1 : 0,
        }}
      />
    </div>
  );
}

// Renders text as an SVG that auto-scales to fill the available width,
// as large as possible for the cell.
function FitText({ text, font, color }: { text: string; font: string; color: string }) {
  const textRef = useRef<SVGTextElement | null>(null);
  const [box, setBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

  // Break multi-word names onto separate lines so each line can grow larger.
  const words = text.split(" ").filter(Boolean);

  useEffect(() => {
    if (textRef.current) {
      const b = textRef.current.getBBox();
      setBox({ x: b.x, y: b.y, w: b.width, h: b.height });
    }
  }, [text, font]);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={box ? `${box.x} ${box.y} ${box.w} ${box.h}` : undefined}
      style={{ display: "block", overflow: "visible" }}
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        ref={textRef}
        x="0"
        y="0"
        textAnchor="middle"
        style={{ fontFamily: font, fontSize: 100, fill: color, whiteSpace: "pre" }}
      >
        {words.map((word, i) => (
          <tspan key={i} x="0" dy={i === 0 ? "0" : "1em"}>
            {word}
          </tspan>
        ))}
      </text>
    </svg>
  );
}

function NavTextButton({ label, width, onClick, color = "#000" }: { label: string; width: number; onClick: () => void; color?: string }) {
  return (
    <button
      className="nav-link"
      onClick={onClick}
      style={{
        width,
        height: 48,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        fontFamily: "Arial, sans-serif",
        fontSize: "20px",
        color,
      }}
    >
      {label}
    </button>
  );
}

function NavBar({ onNavigate, bg = "#fff", fg = "#000", onBrand, logoHeight = "3rem", starColor, linkScale = 1, padding = "3rem 4.5rem 2.25rem", logoTop = "3rem", showEyes = true, onEyesHover }: { onNavigate: (p: Page) => void; bg?: string; fg?: string; onBrand?: () => void; logoHeight?: string; starColor?: string; linkScale?: number; padding?: string; logoTop?: string; showEyes?: boolean; onEyesHover?: () => void }) {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        position: "sticky",
        background: bg,
        padding,
        transition: "background 0.25s ease",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "1.5rem",
      }}
    >
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <NavTextButton label="ABOUT" width={140} color={fg} onClick={() => onNavigate({ id: "about" })} />
        <NavTextButton label="FAQ" width={140} color={fg} onClick={() => onNavigate({ id: "contact" })} />
      </div>
      <button
        onClick={onBrand ?? (() => onNavigate({ id: "foundry" }))}
        style={{ position: "absolute", left: "50%", top: logoTop, transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
      >
        <img
          src={logo}
          alt={BRAND}
          style={{ height: logoHeight, display: "block", filter: fg === "#fff" ? "invert(1)" : "none" }}
        />
        {showEyes && (
          <img
            src={headerEyesSvg}
            alt=""
            aria-hidden="true"
            onMouseEnter={(e) => { e.stopPropagation(); onEyesHover?.(); }}
            style={{
              position: "absolute",
              left: "calc(100% + 1.1rem)",
              top: "0.5rem",
              height: "1.75rem",
              width: "auto",
              display: "block",
              filter: fg === "#fff" ? "invert(1)" : "none",
              cursor: "pointer",
            }}
          />
        )}
      </button>
      <NavTextButton label="BUY THE MEGA BUNDLE!" width={344} color={fg} onClick={() => onNavigate({ id: "bundle" })} />
    </nav>
  );
}

const PAGE_TEXT: Record<string, string> = {
  ABOUT:
    "OTF License is an independent studio drawing original typefaces for print and screen. Open 24/7 since 2026, we design letters with equal attention to craft and character — from editorial serifs to raw display faces. Every family is developed in-house and tested across languages, sizes, and media.",
  Licensing:
    "Our fonts are available under desktop, web, app, and broadcast licenses, priced by the number of users and monthly page views. A single trial weight is free for testing. Custom and exclusive licenses are available for brands and publishers — get in touch and we will tailor an agreement to your needs.",
  FAQ:
    "Say hello at hello@beckmanstype.se, or find us at Brahegatan 10, Stockholm. For licensing questions, custom commissions, or press, we usually reply within two working days. We are always happy to talk type.",
  Buy:
    "Buy and license our typefaces for desktop, web, app, and broadcast use. Support the foundry directly and get new releases, work-in-progress cuts, and the occasional free trial weight. Head over to our Gumroad to purchase and follow along.",
};

// Nav link that flashes a jagged starburst behind the label on hover — random
// palette colour by default, or a fixed colour to match a typeface page.
function StarLink({ label, onClick, fg, starColor, scale = 1 }: { label: string; onClick: () => void; fg: string; starColor?: string; scale?: number }) {
  const [hover, setHover] = useState(false);
  const [rand, setRand] = useState(PALETTE[0]);
  const color = starColor ?? rand;
  const star = starburstPath(100, 100, 20, 96, 74);
  const size = 150 * scale;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => {
        if (!starColor) setRand(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
        setHover(true);
      }}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        fontFamily: "Arial, sans-serif",
        fontSize: `${1.6 * scale}rem`,
        fontWeight: "bold",
        color: fg,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
      }}
    >
      {hover && (
        <svg
          viewBox="0 0 200 200"
          width={size}
          height={size}
          style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }}
        >
          <path d={star} fill={color} />
        </svg>
      )}
      <span
        style={{
          position: "relative",
          color: hover ? "#000" : fg,
          textDecoration: hover ? "underline" : "none",
          textUnderlineOffset: 8,
          textDecorationThickness: 3,
        }}
      >
        {label}
      </span>
    </button>
  );
}

// Fixed bottom-right CTA — a rectangular starburst price tag for the mega bundle.
function StarBuyButton({ onNavigate }: { onNavigate?: (p: Page) => void }) {
  const [hover, setHover] = useState(false);
  const [randColor, setRandColor] = useState<string | null>(null);
  const W = 420;
  const H = 200;
  const star = rectStarburstPath(W / 2, H / 2, 22, W / 2 - 6, H / 2 - 6, (W / 2 - 6) * 0.82, (H / 2 - 6) * 0.72);
  return (
    <button
      onClick={() => onNavigate ? onNavigate({ id: "bundle" }) : window.open("https://otflicense.gumroad.com/l/megabundlepack?wanted=true", "_blank", "noopener,noreferrer")}
      onMouseEnter={() => {
        setRandColor(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
        setHover(true);
      }}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed",
        right: "1.5rem",
        bottom: "1.5rem",
        zIndex: 40,
        width: W,
        height: H,
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {hover && (
        <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} style={{ position: "absolute", inset: 0 }}>
          <path d={star} fill={randColor ?? PALETTE[0]} />
        </svg>
      )}
      <span
        style={{
          position: "relative",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          fontSize: "1.3rem",
          color: "#000",
          whiteSpace: "nowrap",
          textDecoration: hover ? "underline" : "none",
          textUnderlineOffset: 6,
          textDecorationThickness: 3,
        }}
      >
        BUY THE MEGA BUNDLE!!
      </span>
    </button>
  );
}

function GumroadEmbed({ url }: { url: string }) {
  // Re-inject Gumroad's embed script on every mount so it re-scans and renders
  // the freshly-rendered embed div after client-side navigation.
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://gumroad.com/js/gumroad-embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div className="gumroad-product-embed">
      <a href={url}>Loading...</a>
    </div>
  );
}

function ScrollGallery() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const boxes = [320, 260, 400, 280, 360, 300, 380, 250];

  return (
    <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
      <div style={{ transform: `translateY(${120 - scrollY * 0.65}px)`, willChange: "transform" }}>
        {boxes.map((h, i) => (
          <div
            key={i}
            style={{
              background: `hsl(0,0%,${84 - i * 3}%)`,
              height: h,
              marginBottom: 16,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function SimplePage({ title, onNavigate, showEyes, onEyesHover }: { title: string; onNavigate: (p: Page) => void; showEyes?: boolean; onEyesHover?: () => void }) {
  const [klassFilter, setKlassFilter] = useState<string>("All");
  const shownDesigners = klassFilter === "All" ? designers : designers.filter((d) => d.klass === klassFilter);

  if (title === "ABOUT") {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <NavBar onNavigate={onNavigate} showEyes={showEyes} onEyesHover={onEyesHover} />
        {/* Two-column layout: left = description + names, right = scroll gallery */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", flex: 1, paddingTop: "5.5rem" }}>
          {/* Left column */}
          <div style={{ padding: "0 3rem 6rem 4rem" }}>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "1.15rem", color: "#000", lineHeight: 1.6, marginBottom: "2.5rem" }}>
              {PAGE_TEXT["ABOUT"]}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <h2 style={{ fontFamily: "Arial, sans-serif", fontSize: "1.6rem", fontWeight: "bold", color: "#000", margin: 0 }}>Designers</h2>
              <select
                value={klassFilter}
                onChange={(e) => setKlassFilter(e.target.value)}
                style={{ fontFamily: "Arial, sans-serif", fontSize: "1rem", padding: "0.4rem 0.75rem", border: "1.5px solid #000", background: "#fff", color: "#000", cursor: "pointer" }}
              >
                {DESIGNER_CLASSES.map((c) => (
                  <option key={c} value={c}>{c === "All" ? "All classes" : c}</option>
                ))}
              </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {shownDesigners.map((d) => <NameCell key={d.name} d={d} />)}
            </div>
          </div>

          {/* Right column — sticky scroll gallery */}
          <div style={{ paddingTop: "1rem" }}>
            <ScrollGallery />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar onNavigate={onNavigate} showEyes={showEyes} onEyesHover={onEyesHover} />
      <div className="flex-1 flex flex-col px-10" style={{ paddingTop: "5.5rem", paddingBottom: "3rem" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "1.15rem", color: "#000", lineHeight: 1.6, maxWidth: "48rem" }}>
          {PAGE_TEXT[title] ?? "Coming soon."}
        </p>
        {title === "Buy" && (
          <a href="https://otflicenser.gumroad.com" target="_blank" rel="noopener noreferrer"
            style={{ alignSelf: "flex-start", marginTop: "2rem", fontFamily: "Arial, sans-serif", fontSize: "1.1rem", fontWeight: "bold", color: "#fff", background: "#000", padding: "0.9rem 2rem", textDecoration: "none", cursor: "pointer" }}>
            Buy on Gumroad →
          </a>
        )}
      </div>
    </div>
  );
}


// Characters shown in the glyph list, grouped in the order the categories appear.
const CHAR_GROUPS: { label: string; chars: string[] }[] = [
  { label: "Uppercase", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") },
  { label: "Lowercase", chars: "abcdefghijklmnopqrstuvwxyz".split("") },
  { label: "Accents", chars: "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜÝàáâãäåæçèéêëìíîïñòóôõöøùúûüýÿ".split("") },
  { label: "Numbers", chars: "0123456789".split("") },
  {
    label: "Punctuations",
    chars: [".", ",", ":", ";", "…", "!", "¡", "?", "¿", "·", "•", "*", "#", "/", "\\", "-", "–", "—", "_", "(", ")", "{", "}", "[", "]", "‚", "„", "“", "”", "‘", "’", "«", "»", "‹", "›", "\"", "'"],
  },
  {
    label: "Symbols",
    chars: ["ƒ", "@", "&", "¶", "§", "©", "®", "™", "°", "|", "¦", "†", "‡", "¢", "¤", "$", "€", "£", "¥", "+", "−", "×", "÷", "=", "≠", ">", "<", "≥", "≤", "±", "≈", "~", "¬", "^", "∞", "∫", "∏", "∑", "√", "∂", "%", "‰", "↑", "↗", "→", "↘", "↓", "↙", "←", "↖", "◊"],
  },
  {
    label: "Other",
    chars: ["ﬀ", "ﬁ", "ﬂ", "ﬃ", "ﬄ", "ﬅ", "ﬆ", "ª", "º", "µ"],
  },
];

// Adobe-style glyph names for every character shown in the panel, so the
// "Glyph:" label reads e.g. "parenleft", "Aring", "comma" rather than the raw
// character. Falls back to the parsed font's own name, then a uniXXXX form.
const GLYPH_NAMES: Record<string, string> = {
  ...Object.fromEntries("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c) => [c, c])),
  ...Object.fromEntries("abcdefghijklmnopqrstuvwxyz".split("").map((c) => [c, c])),
  "0": "zero", "1": "one", "2": "two", "3": "three", "4": "four",
  "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine",
  "À": "Agrave", "Á": "Aacute", "Â": "Acircumflex", "Ã": "Atilde", "Ä": "Adieresis", "Å": "Aring", "Æ": "AE",
  "Ç": "Ccedilla", "È": "Egrave", "É": "Eacute", "Ê": "Ecircumflex", "Ë": "Edieresis",
  "Ì": "Igrave", "Í": "Iacute", "Î": "Icircumflex", "Ï": "Idieresis", "Ñ": "Ntilde",
  "Ò": "Ograve", "Ó": "Oacute", "Ô": "Ocircumflex", "Õ": "Otilde", "Ö": "Odieresis", "Ø": "Oslash",
  "Ù": "Ugrave", "Ú": "Uacute", "Û": "Ucircumflex", "Ü": "Udieresis", "Ý": "Yacute",
  "à": "agrave", "á": "aacute", "â": "acircumflex", "ã": "atilde", "ä": "adieresis", "å": "aring", "æ": "ae",
  "ç": "ccedilla", "è": "egrave", "é": "eacute", "ê": "ecircumflex", "ë": "edieresis",
  "ì": "igrave", "í": "iacute", "î": "icircumflex", "ï": "idieresis", "ñ": "ntilde",
  "ò": "ograve", "ó": "oacute", "ô": "ocircumflex", "õ": "otilde", "ö": "odieresis", "ø": "oslash",
  "ù": "ugrave", "ú": "uacute", "û": "ucircumflex", "ü": "udieresis", "ý": "yacute", "ÿ": "ydieresis",
  ".": "period", ",": "comma", ":": "colon", ";": "semicolon", "…": "ellipsis",
  "!": "exclam", "¡": "exclamdown", "?": "question", "¿": "questiondown", "·": "periodcentered", "•": "bullet",
  "*": "asterisk", "#": "numbersign", "/": "slash", "\\": "backslash", "-": "hyphen", "–": "endash", "—": "emdash", "_": "underscore",
  "(": "parenleft", ")": "parenright", "{": "braceleft", "}": "braceright", "[": "bracketleft", "]": "bracketright",
  "‚": "quotesinglbase", "„": "quotedblbase", "“": "quotedblleft", "”": "quotedblright", "‘": "quoteleft", "’": "quoteright",
  "«": "guillemotleft", "»": "guillemotright", "‹": "guilsinglleft", "›": "guilsinglright", "\"": "quotedbl", "'": "quotesingle",
  "ƒ": "florin", "@": "at", "&": "ampersand", "¶": "paragraph", "§": "section", "©": "copyright", "®": "registered", "™": "trademark", "°": "degree",
  "|": "bar", "¦": "brokenbar", "†": "dagger", "‡": "daggerdbl", "¢": "cent", "¤": "currency", "$": "dollar", "€": "Euro", "£": "sterling", "¥": "yen",
  "+": "plus", "−": "minus", "×": "multiply", "÷": "divide", "=": "equal", "≠": "notequal", ">": "greater", "<": "less",
  "≥": "greaterequal", "≤": "lessequal", "±": "plusminus", "≈": "approxequal", "~": "asciitilde", "¬": "logicalnot", "^": "asciicircum",
  "∞": "infinity", "∫": "integral", "∏": "product", "∑": "summation", "√": "radical", "∂": "partialdiff", "%": "percent", "‰": "perthousand",
  "↑": "arrowup", "↗": "arrowupright", "→": "arrowright", "↘": "arrowdownright", "↓": "arrowdown", "↙": "arrowdownleft", "←": "arrowleft", "↖": "arrowupleft", "◊": "lozenge",
  "ﬀ": "ff", "ﬁ": "fi", "ﬂ": "fl", "ﬃ": "ffi", "ﬄ": "ffl", "ﬅ": "longst", "ﬆ": "st", "ª": "ordfeminine", "º": "ordmasculine", "µ": "mu",
};

// Detects whether a CSS-loaded font actually contains a glyph for `char`, without
// parsing the font file. A missing glyph falls back to the generic family, so its
// measured width matches the generic-alone width against BOTH monospace and
// sans-serif fallbacks; a present glyph differs from at least one. Used for the
// native variable fonts, whose WOFF2 files opentype.js cannot parse.
function browserGlyphExists(ctx: CanvasRenderingContext2D, char: string, family: string): boolean {
  ctx.font = `72px monospace`;
  const monoBase = ctx.measureText(char).width;
  ctx.font = `72px ${family}, monospace`;
  const monoFam = ctx.measureText(char).width;
  ctx.font = `72px sans-serif`;
  const sansBase = ctx.measureText(char).width;
  ctx.font = `72px ${family}, sans-serif`;
  const sansFam = ctx.measureText(char).width;
  return monoFam !== monoBase || sansFam !== sansBase;
}

// Full-width panel: large showcase on the left, categorised character list on the right.
// When the parsed opentype font is available, only glyphs actually present in the
// face are shown (missing chars are omitted and empty categories are hidden). Native
// variable fonts (no parsed font) instead detect coverage via the browser.
function GlyphSection({ font, otFont, panelBg, panelText, fontVariationSettings }: { font: string; otFont: opentype.Font | null; panelBg: string; panelText: string; fontVariationSettings?: string }) {
  // Browser-detected coverage for native fonts (otFont === null). Null while
  // detecting, so the predefined list is never shown as-is.
  const [detected, setDetected] = useState<Set<string> | null>(null);
  useEffect(() => {
    if (otFont) {
      setDetected(null);
      return;
    }
    let cancelled = false;
    const family = font.split(",")[0].trim();
    const run = () => {
      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return;
      const found = new Set<string>();
      for (const group of CHAR_GROUPS) {
        for (const c of group.chars) {
          if (browserGlyphExists(ctx, c, family)) found.add(c);
        }
      }
      if (!cancelled) setDetected(found);
    };
    const fontsApi = (document as any).fonts;
    if (fontsApi?.load) {
      fontsApi.load(`72px ${family}`).then(() => { if (!cancelled) run(); }).catch(() => { if (!cancelled) run(); });
    } else {
      run();
    }
    return () => { cancelled = true; };
  }, [otFont, font]);

  const groups = CHAR_GROUPS.map((group) => ({
    label: group.label,
    chars: otFont
      ? group.chars.filter((c) => otFont.charToGlyphIndex(c) > 0)
      : detected
      ? group.chars.filter((c) => detected.has(c))
      : [],
  })).filter((group) => group.chars.length > 0);

  const firstChar = groups[0]?.chars[0] ?? "A";
  const [hovered, setHovered] = useState(firstChar);
  useEffect(() => {
    setHovered(firstChar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otFont, detected]);

  // Metadata for the currently highlighted glyph. The Unicode value comes from
  // the character itself; the glyph name is read from the parsed font when
  // available, falling back to the character.
  const codePoint = hovered.codePointAt(0) ?? 0;
  const glyphUnicode = "U+" + codePoint.toString(16).toUpperCase().padStart(4, "0");
  const glyphName =
    GLYPH_NAMES[hovered] ??
    (otFont ? otFont.glyphs.get(otFont.charToGlyphIndex(hovered))?.name : undefined) ??
    "uni" + codePoint.toString(16).toUpperCase().padStart(4, "0");

  return (
    <div style={{ background: panelBg, padding: "1.5rem", display: "flex", gap: "1.5rem", alignItems: "stretch", transition: "background 0.25s ease" }}>
      {/* Showcase — left */}
      <div style={{ position: "relative", flex: "0 0 38%", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", color: panelText, transition: "color 0.25s ease" }}>
        <span style={{ fontFamily: font, fontVariationSettings, fontSize: "clamp(7rem, 18vw, 18rem)", lineHeight: 1 }}>{hovered}</span>
        <div style={{ position: "absolute", left: 0, bottom: 0, fontFamily: "Arial, sans-serif", fontSize: "0.8rem", lineHeight: 1.5, color: panelText }}>
          <div>Glyph: {glyphName}</div>
          <div>Unicode: {glyphUnicode}</div>
        </div>
      </div>

      {/* Character list — right, grouped by category */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {groups.map((group) => (
          <div key={group.label}>
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.8rem", color: panelText, marginBottom: "0.4rem" }}>
              {group.label}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(34px, 1fr))", gap: 2 }}>
              {group.chars.map((g, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(g)}
                  style={{
                    fontFamily: font,
                    fontVariationSettings,
                    color: hovered === g ? panelBg : panelText,
                    background: hovered === g ? panelText : "transparent",
                    aspectRatio: "1/1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    cursor: "default",
                    borderRadius: 2,
                    transition: "background 0.15s ease, color 0.15s ease",
                  }}
                >
                  {g}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WipCarousel({ panelText, images = [] }: { panelText: string; images?: string[] }) {
  const count = images.length;

  // Single-image or empty: no carousel needed
  if (count <= 1) {
    return (
      <div style={{ position: "absolute", inset: 0, background: "#fff" }}>
        {images[0] && <img src={images[0]} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />}
      </div>
    );
  }

  // Infinite loop: [last, ...images, first]
  const slides = [images[count - 1], ...images, images[0]];
  const total = slides.length;

  // Start at index 1 (the real first image)
  const [idx, setIdx] = useState(1);
  const [animated, setAnimated] = useState(true);

  const go = (d: number) => {
    setAnimated(true);
    setIdx((prev) => prev + d);
  };

  const handleTransitionEnd = () => {
    // Silently snap from clone to real slide with no animation
    if (idx === 0) {
      setAnimated(false);
      setIdx(count);
    } else if (idx === total - 1) {
      setAnimated(false);
      setIdx(1);
    }
  };

  const arrowStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.25)",
    border: `1.5px solid ${panelText}`,
    color: panelText,
    width: 40,
    height: 40,
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "1.1rem",
    lineHeight: 1,
    zIndex: 2,
    transition: "color 0.25s ease, border-color 0.25s ease",
  };

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#fff" }}>
      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: "flex",
          width: `${total * 100}%`,
          height: "100%",
          transform: `translateX(-${(idx / total) * 100}%)`,
          transition: animated ? "transform 0.42s cubic-bezier(0.65, 0, 0.35, 1)" : "none",
        }}
      >
        {slides.map((src, i) => (
          <div key={i} style={{ width: `${100 / total}%`, flexShrink: 0, height: "100%" }}>
            <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
          </div>
        ))}
      </div>
      <button onClick={() => go(-1)} style={{ ...arrowStyle, left: 12 }} aria-label="Previous">‹</button>
      <button onClick={() => go(1)} style={{ ...arrowStyle, right: 12 }} aria-label="Next">›</button>
    </div>
  );
}

type Mode = "color" | "invert" | "panelsDark" | "panelsLight";

// Wraps text into visual lines the same way the textarea does: break on explicit
// newlines, then greedily wrap words once a line's measured advance width exceeds
// the available box width.
function wrapLines(font: opentype.Font, text: string, fontSizePx: number, maxWidthPx: number): string[] {
  const paragraphs = text.split("\n");
  const result: string[] = [];
  for (const para of paragraphs) {
    if (para === "") { result.push(""); continue; }
    const words = para.split(" ");
    let current = "";
    for (const word of words) {
      if (font.getAdvanceWidth(word, fontSizePx) > maxWidthPx) {
        if (current) { result.push(current); current = ""; }
        let chunk = "";
        for (const ch of word) {
          const candidateChunk = chunk + ch;
          if (chunk && font.getAdvanceWidth(candidateChunk, fontSizePx) > maxWidthPx) {
            result.push(chunk);
            chunk = ch;
          } else {
            chunk = candidateChunk;
          }
        }
        current = chunk;
        continue;
      }
      const candidate = current ? current + " " + word : word;
      if (current && font.getAdvanceWidth(candidate, fontSizePx) > maxWidthPx) {
        result.push(current);
        current = word;
      } else {
        current = candidate;
      }
    }
    result.push(current);
  }
  return result;
}

// Builds SVG path data from an opentype.js Path, skipping any command with a
// non-finite coordinate. A single NaN in the "d" attribute breaks the rest of
// the path; degenerate curves (e.g. custom .notdef glyphs) can produce those.
function safePathData(path: opentype.Path): string {
  let d = "";
  for (const cmd of path.commands) {
    const vals = [cmd.x, cmd.y, cmd.x1, cmd.y1, cmd.x2, cmd.y2].filter((v) => v !== undefined);
    if (vals.some((v) => !Number.isFinite(v as number))) continue;
    if (cmd.type === "M") d += `M${cmd.x} ${cmd.y}`;
    else if (cmd.type === "L") d += `L${cmd.x} ${cmd.y}`;
    else if (cmd.type === "C") d += `C${cmd.x1} ${cmd.y1} ${cmd.x2} ${cmd.y2} ${cmd.x} ${cmd.y}`;
    else if (cmd.type === "Q") d += `Q${cmd.x1} ${cmd.y1} ${cmd.x} ${cmd.y}`;
    else if (cmd.type === "Z") d += "Z";
  }
  return d;
}

// Renders a single line of preview text as an SVG path built from the loaded
// font. Any character absent from the font's cmap is drawn with the font's own
// .notdef glyph (opentype.js substitutes it automatically) rather than falling
// back to another typeface.
function GlyphLine({ font, text, fontSizePx, lineHeightPx, fill, weightAxis, weightValue, letterSpacing = 0 }: {
  font: opentype.Font;
  text: string;
  fontSizePx: number;
  lineHeightPx: number;
  fill: string;
  weightAxis: { min: number; max: number; default: number } | null;
  weightValue: number;
  letterSpacing?: number;
}) {
  // Em letter-spacing → pixels, inserted between characters (never after the last).
  const spacingPx = letterSpacing * fontSizePx;
  const ascenderPx = (font.ascender / font.unitsPerEm) * fontSizePx;
  // Baseline placement inside the line box mirrors CSS half-leading.
  const baselineY = (lineHeightPx - fontSizePx) / 2 + ascenderPx;

  let d = "";
  let advanceWidth = 0;
  let bbox: { x2: number } | null = null;

  if (text) {
    if (weightAxis) {
      // Draw character by character so each glyph can carry its own variation
      // weight — normal glyphs follow the slider, missing (.notdef) glyphs stay
      // at the font's default weight.
      const scale = fontSizePx / font.unitsPerEm;
      let currentX = 0;
      const paths: opentype.Path[] = [];
      const chars = Array.from(text);
      chars.forEach((ch, ci) => {
        const glyphIndex = font.charToGlyphIndex(ch);
        (font as any).variation.set({ wght: glyphIndex === 0 ? weightAxis.default : weightValue });
        const glyph = font.glyphs.get(glyphIndex);
        const path = glyph.getPath(currentX, baselineY, fontSizePx, {}, font);
        d += safePathData(path);
        paths.push(path);
        currentX += glyph.advanceWidth * scale;
        if (ci < chars.length - 1) currentX += spacingPx;
      });
      // Restore a consistent default render state for anything read afterward.
      (font as any).variation.set({ wght: weightValue });
      advanceWidth = currentX;
      let maxX2 = 0;
      for (const p of paths) {
        const b = p.getBoundingBox();
        if (Number.isFinite(b.x2) && b.x2 > maxX2) maxX2 = b.x2;
      }
      bbox = { x2: maxX2 };
    } else if (spacingPx !== 0) {
      // Draw glyph-by-glyph so letter spacing can be inserted between characters.
      const scale = fontSizePx / font.unitsPerEm;
      let currentX = 0;
      const paths: opentype.Path[] = [];
      const chars = Array.from(text);
      chars.forEach((ch, ci) => {
        const glyphIndex = font.charToGlyphIndex(ch);
        const glyph = font.glyphs.get(glyphIndex);
        const path = glyph.getPath(currentX, baselineY, fontSizePx, {}, font);
        d += safePathData(path);
        paths.push(path);
        currentX += glyph.advanceWidth * scale;
        if (ci < chars.length - 1) currentX += spacingPx;
      });
      advanceWidth = currentX;
      let maxX2 = 0;
      for (const p of paths) {
        const b = p.getBoundingBox();
        if (Number.isFinite(b.x2) && b.x2 > maxX2) maxX2 = b.x2;
      }
      bbox = { x2: maxX2 };
    } else {
      const path = font.getPath(text, 0, baselineY, fontSizePx);
      d = safePathData(path);
      advanceWidth = font.getAdvanceWidth(text, fontSizePx);
      bbox = path.getBoundingBox();
    }
  }

  const width = bbox ? Math.max(advanceWidth, bbox.x2) : advanceWidth;
  return (
    <svg width={Math.max(width, 1)} height={lineHeightPx} style={{ display: "block", overflow: "visible" }}>
      {d && <path d={d} fill={fill} fillRule="evenodd" />}
    </svg>
  );
}

function TypefacePage({ name, onNavigate, showEyes, onEyesHover }: { name: string; onNavigate: (p: Page) => void; showEyes?: boolean; onEyesHover?: () => void }) {
  const face = typefaces.find((f) => f.name === name);
  // Local state — automatically resets on unmount (back to foundry) or refresh.
  const [mode, setMode] = useState<Mode>("color");
  const [top, setTop] = useState("");
  const [size, setSize] = useState(16); // rem — starts at the slider's max size
  const [font, setFont] = useState<opentype.Font | null>(null);
  // Per-typeface weight control: variable fonts expose a wght axis (slider),
  // static fonts show a fixed "Regular" label instead.
  const [weightAxis, setWeightAxis] = useState<{ min: number; max: number; default: number } | null>(null);
  const [weightValue, setWeightValue] = useState(400);
  // Letter spacing (em) — applies to every typeface, native or SVG-rendered.
  const [spacing, setSpacing] = useState(0);
  // Native variable fonts: rendered by the browser with live axis values.
  const nativeAxes = NATIVE_VF[name] ?? null;
  const isNative = nativeAxes !== null;
  const [axisValues, setAxisValues] = useState<Record<string, number>>({});
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [boxWidth, setBoxWidth] = useState(0);

  // Track the preview box's rendered width so the overlay can wrap words to match.
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const measure = () => setBoxWidth(el.clientWidth);
    measure();
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Parse the actual font file with opentype.js so we can draw glyphs (and the
  // font's own .notdef) ourselves instead of relying on CSS font fallback.
  useEffect(() => {
    let cancelled = false;
    setFont(null);
    setWeightAxis(null);
    setSpacing(0);
    // Native variable fonts render through the browser using known axis data,
    // so they don't need (and opentype.js often can't parse) the WOFF2 file.
    if (nativeAxes) {
      const init: Record<string, number> = {};
      for (const a of nativeAxes) init[a.tag] = a.default;
      setAxisValues(init);
      return () => {
        cancelled = true;
      };
    }
    if (face?.file) {
      fetch(face.file)
        .then((res) => res.arrayBuffer())
        .then((buffer) => {
          if (cancelled) return;
          const parsed = opentype.parse(buffer);
          setFont(parsed);
          // Detect a variable font's weight axis (fvar table, "wght" tag).
          const fvar = (parsed.tables as any)?.fvar;
          const wght = fvar?.axes?.find((a: any) => a.tag === "wght");
          if (wght) {
            setWeightAxis({ min: wght.minValue, max: wght.maxValue, default: wght.defaultValue });
            setWeightValue(wght.defaultValue);
          } else {
            setWeightAxis(null);
          }
        })
        .catch(() => {
          if (!cancelled) {
            setFont(null);
            setWeightAxis(null);
          }
        });
    }
    return () => {
      cancelled = true;
    };
  }, [name]);

  // Type the typeface name into the preview window on entry. Faces marked
  // "upperInitial" default to CAPS but stay freely editable to either case.
  useEffect(() => {
    const seed = face?.casing === "upperInitial" ? name.toUpperCase() : name;
    let i = 0;
    setTop("");
    const id = setInterval(() => {
      i++;
      setTop(seed.slice(0, i));
      if (i >= seed.length) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, [name]);

  if (!face) return null;

  // Some faces are uppercase- or lowercase-only; force typed/preview text to match.
  const applyCase = (s: string) =>
    face.casing === "upper" ? s.toUpperCase() : face.casing === "lower" ? s.toLowerCase() : s;
  const previewText = applyCase(top);

  // Wrap the text the same way the box does, so the overlay lines up with it.
  const wrappedLines = font && boxWidth ? wrapLines(font, previewText, size * 16, boxWidth - 4) : previewText.split("\n");

  // Fit a single row by default; grow with each added line, up to four.
  const previewLines = Math.max(1, wrappedLines.length);

  // Panel (column) colours + surrounding page colours by mode.
  const panelBg = mode === "color" ? face.bg : mode === "invert" ? face.fg : mode === "panelsDark" ? "#000" : "#fff";
  const panelText = mode === "color" ? face.fg : mode === "invert" ? face.bg : mode === "panelsDark" ? "#fff" : "#000";
  const pageBg = mode === "panelsLight" ? "#000" : "#fff";
  const pageText = mode === "panelsLight" ? "#fff" : "#000";

  const GAP = 24;

  // Applied alongside fontFamily so variable fonts reflect their sliders live.
  // Native fonts use their configured axes; SVG fonts keep the wght axis.
  const fontVariationSettings = isNative
    ? nativeAxes!.map((a) => `'${a.tag}' ${axisValues[a.tag] ?? a.default}`).join(", ")
    : weightAxis
    ? `'wght' ${weightValue}`
    : undefined;

  const fieldBase: React.CSSProperties = {
    fontFamily: face.font,
    fontVariationSettings,
    letterSpacing: `${spacing}em`,
    background: panelBg,
    color: panelText,
    border: "none",
    outline: "none",
    resize: "none",
    width: "100%",
    boxSizing: "border-box",
    overflow: "hidden",
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: pageBg }}>
      <NavBar onNavigate={onNavigate} bg={pageBg} fg={pageText} logoHeight="3rem" starColor={face.bg} linkScale={0.7} showEyes={showEyes} onEyesHover={onEyesHover} />
      <div className="flex-1 flex flex-col px-10" style={{ gap: 12, paddingTop: "2.5rem", paddingBottom: "3rem" }}>
        {/* Top column — big editable preview, controls pinned at the top */}
        <div style={{ position: "relative", background: panelBg, minHeight: "52vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "4.5rem", paddingBottom: "2.5rem", transition: "background 0.25s ease" }}>
          {/* Size slider + colour dots, side by side and centred at the top. */}
          <div style={{ position: "absolute", top: 16, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 20, zIndex: 2, color: panelText }}>
            {/* Size */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: panelText }}>Size</span>
              <input
                type="range"
                min={3}
                max={16}
                step={0.5}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="size-slider"
              />
            </div>
            {/* Space — em letter spacing; numeric value intentionally hidden. */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: panelText }}>Space</span>
              <input
                type="range"
                min={0}
                max={0.2}
                step={0.01}
                value={spacing}
                onChange={(e) => setSpacing(Number(e.target.value))}
                className="size-slider"
              />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {([
                { m: "color" as Mode, c: face.bg },
                { m: "panelsDark" as Mode, c: "#000" },
                { m: "panelsLight" as Mode, c: "#fff" },
              ]).map(({ m, c }) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  title={m}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: c,
                    border: "1.5px solid rgba(128,128,128,0.6)",
                    cursor: "pointer",
                    padding: 0,
                    outline: mode === m ? "2px solid rgba(128,128,128,0.9)" : "none",
                    outlineOffset: 2,
                  }}
                />
              ))}
            </div>
            {/* Variable-font controls — native fonts expose their configured axes,
                SVG variable fonts keep the wght slider, static fonts show "Regular". */}
            {isNative ? (
              nativeAxes!.map((axis) =>
                axis.onOff ? (
                  <div key={axis.tag} style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: panelText }}>{axis.label}</span>
                    <button
                      onClick={() =>
                        setAxisValues((prev) => ({
                          ...prev,
                          [axis.tag]: (prev[axis.tag] ?? axis.default) >= axis.max ? axis.min : axis.max,
                        }))
                      }
                      style={{
                        width: 34,
                        height: 20,
                        borderRadius: 10,
                        border: "1.5px solid rgba(128,128,128,0.6)",
                        background: (axisValues[axis.tag] ?? axis.default) >= axis.max ? panelText : "transparent",
                        cursor: "pointer",
                        padding: 0,
                        position: "relative",
                      }}
                      aria-pressed={(axisValues[axis.tag] ?? axis.default) >= axis.max}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: 2,
                          left: (axisValues[axis.tag] ?? axis.default) >= axis.max ? 16 : 2,
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: (axisValues[axis.tag] ?? axis.default) >= axis.max ? panelBg : panelText,
                          transition: "left 0.15s ease",
                        }}
                      />
                    </button>
                  </div>
                ) : (
                  <div key={axis.tag} style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: panelText }}>{axis.label}</span>
                    <input
                      type="range"
                      min={axis.min}
                      max={axis.max}
                      step={1}
                      value={axisValues[axis.tag] ?? axis.default}
                      onChange={(e) => setAxisValues((prev) => ({ ...prev, [axis.tag]: Number(e.target.value) }))}
                      className="size-slider"
                    />
                  </div>
                )
              )
            ) : weightAxis ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: panelText }}>Weight</span>
                <input
                  type="range"
                  min={weightAxis.min}
                  max={weightAxis.max}
                  step={1}
                  value={weightValue}
                  onChange={(e) => setWeightValue(Number(e.target.value))}
                  className="size-slider"
                />
              </div>
            ) : (
              <div style={{ width: 96, flexShrink: 0, fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: panelText }}>
                Regular
              </div>
            )}
          </div>
          {/* Editable preview — one row by default, grows with content up to four rows.
              Extra bottom room keeps descenders on the last line fully visible. */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "visible", padding: "0 2rem" }}>
            <div ref={boxRef} style={{ position: "relative", width: "100%" }}>
              <textarea
                value={previewText}
                onChange={(e) => {
                  if (e.target.value.split("\n").length <= 4) setTop(e.target.value);
                }}
                rows={previewLines}
                style={{
                  ...fieldBase,
                  display: "block",
                  padding: 2,
                  fontSize: `${size}rem`,
                  lineHeight: 1.3,
                  textAlign: "center",
                  height: `${previewLines * size * 1.3 + size * 0.35}rem`,
                  // Once the font is parsed the SVG overlay draws the glyphs, so
                  // hide the textarea's own text (caret stays visible). Until then
                  // fall back to normal rendering so text is never invisible.
                  color: font && !isNative ? "transparent" : panelText,
                  caretColor: panelText,
                }}
              />
              {/* Purely visual overlay — draws the real glyphs on top of the
                  transparent textarea, aligned to the same box/padding/metrics.
                  Skipped for native variable fonts, which the browser renders. */}
              {font && !isNative && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    boxSizing: "border-box",
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  {wrappedLines.map((line, idx) => (
                    <GlyphLine
                      key={idx}
                      font={font}
                      text={line}
                      fontSizePx={size * 16}
                      lineHeightPx={size * 16 * 1.3}
                      fill={panelText}
                      weightAxis={weightAxis}
                      weightValue={weightValue}
                      letterSpacing={spacing}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Designer label + right-to-left looping marquee on one line */}
        <div style={{ display: "flex", alignItems: "center", overflow: "hidden" }}>
          <span style={{ fontFamily: "Arial, sans-serif", fontSize: "1rem", fontWeight: "bold", color: pageText, whiteSpace: "nowrap", flexShrink: 0, paddingRight: "1.5rem" }}>
            Designer:
          </span>
          <div style={{ overflow: "hidden", whiteSpace: "nowrap", flex: 1 }}>
            <div style={{ display: "inline-flex", animation: "marquee 24s linear infinite" }}>
              {Array.from({ length: 24 }).map((_, k) => (
                <span
                  key={k}
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "1rem", fontWeight: "normal", color: pageText, paddingRight: "2.5rem", whiteSpace: "nowrap" }}
                >
                  {k % 2 === 0 ? face.designer : face.klass}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Info (left) + Work-in-progress images (right), side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: GAP, alignItems: "stretch" }}>
          {/* Info — left: description + details */}
          <div style={{ background: panelBg, color: panelText, padding: "1.75rem", display: "flex", flexDirection: "column", transition: "background 0.25s ease, color 0.25s ease" }}>
            <p style={{ fontFamily: face.font, fontSize: "0.95rem", color: panelText, opacity: 0.85, marginTop: 0, marginBottom: "1.75rem", lineHeight: 1.6 }}>
              {applyCase(`${face.name} is a ${face.klass} typeface designed by ${face.designer} at OTF License. Drawn for editorial and display use, it balances character and clarity across sizes. More on its history, features, and language support is coming soon.`)}
            </p>
            <div style={{ marginTop: "auto", fontFamily: "Arial, sans-serif", fontSize: "0.8rem", color: panelText, display: "flex", flexDirection: "column-reverse" }}>
              {[
                ["First sketched:", "2024"],
                ["Released:", "2026"],
                ["Update:", "2026"],
                ["Version:", "1.0"],
                ["Language support:", "Latin Extended"],
                ["Range:", "Light, Medium, Regular, Italic, Bold"],
                ["Format:", "ttf, otf, woff"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", gap: "0.75rem", padding: "0.3rem 0" }}>
                  <span style={{ flex: "0 0 42%", fontWeight: "bold" }}>{label}</span>
                  <span style={{ flex: 1 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image field — right */}
          <div style={{ position: "relative", overflow: "hidden", background: panelBg, transition: "background 0.25s ease" }}>
            <WipCarousel panelText={panelText} images={face.gallery ?? GALLERY_IMAGES} />
          </div>
        </div>

        {/* Full-width Glyphs panel — showcase (left) + character list (right).
            Extra top margin so the gap above the panel matches the preview→columns
            whitespace (which also spans the designer marquee row between them). */}
        <div style={{ marginTop: "calc(1.2rem + 12px)" }}>
          <GlyphSection font={face.font} otFont={font} panelBg={panelBg} panelText={panelText} fontVariationSettings={fontVariationSettings} />
        </div>

        {/* Gumroad purchase widget */}
        <div style={{ marginTop: GAP, display: "flex", justifyContent: "center" }}>
          <GumroadEmbed url={face.gumroad ?? "https://otflicense.gumroad.com"} />
        </div>
      </div>
    </div>
  );
}

const BAND_PHRASES = [
  "BUNDLE PACK: SAVE 74%!",
  "BUY NOW OR REGRET IT.",
  "BUY THE BUNDLE, FOR THE PRICE OF 4",
];

// Colors that need black text for legibility
const LIGHT_BAND_COLORS = new Set(["#fff800", "#c3872f", "#00ab53"]);

function MarqueeBand({ direction = "forward", onNavigate }: { direction?: "forward" | "reverse"; onNavigate?: (p: Page) => void }) {
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    // Cycle through palette at ~0.6 s per frame — matches the intro gif tempo
    const id = setInterval(() => {
      setColorIdx((prev) => (prev + 1) % PALETTE.length);
    }, 1200);
    return () => clearInterval(id);
  }, []);

  const bg = PALETTE[colorIdx];
  const textColor = LIGHT_BAND_COLORS.has(bg) ? "#000" : "#fff";
  const eyesFilter = textColor === "#000" ? "none" : "invert(1)";

  const REPEAT = 8;
  const totalSlots = BAND_PHRASES.length * REPEAT * 2;
  const words = Array.from({ length: totalSlots }).map((_, i) => {
    const phrase = BAND_PHRASES[i % BAND_PHRASES.length];
    return (
      <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "3rem", paddingRight: "3rem" }}>
        <span style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          fontSize: "1.5rem",
          letterSpacing: "0.04em",
          color: textColor,
          whiteSpace: "nowrap",
          textTransform: "uppercase",
          transition: "color 0.3s ease",
        }}>{phrase}</span>
        <img src={eyesSvg} alt="" style={{ height: "1.5rem", width: "auto", display: "inline-block", filter: eyesFilter, transition: "filter 0.3s ease" }} />
      </span>
    );
  });

  return (
    <button
      onClick={() => onNavigate ? onNavigate({ id: "bundle" }) : window.open("https://otflicense.gumroad.com/l/megabundlepack?wanted=true", "_blank", "noopener,noreferrer")}
      style={{ display: "block", width: "100%", overflow: "hidden", background: bg, padding: "0.85rem 0", border: "none", cursor: "pointer", transition: "background 0.3s ease" }}
    >
      <div style={{ display: "inline-flex", animation: `${direction === "reverse" ? "marqueeReverse" : "marquee"} 80s linear infinite` }}>{words}</div>
    </button>
  );
}

const BUNDLE_URL = "https://otflicense.gumroad.com/l/megabundlepack?wanted=true";

function BundlePage({ onNavigate, showEyes, onEyesHover }: { onNavigate: (p: Page) => void; showEyes?: boolean; onEyesHover?: () => void }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://gumroad.com/js/gumroad-embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <NavBar onNavigate={onNavigate} showEyes={showEyes} onEyesHover={onEyesHover} />
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", paddingBottom: "5rem" }}>
        <div className="gumroad-product-embed" style={{ width: "100%", maxWidth: 740 }}>
          <a href={BUNDLE_URL}>Loading…</a>
        </div>
      </div>
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200 }}>
        <MarqueeBand direction="reverse" onNavigate={onNavigate} />
      </div>
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const enter = () => onNavigate({ id: "foundry" });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLButtonElement) return;
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        enter();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      onClick={enter}
      style={{ position: "fixed", inset: 0, overflow: "hidden", background: "#fff", cursor: "pointer" }}
    >
      {/* GIF — 80% of viewport, centred */}
      <img
        src={introGif}
        alt={BRAND}
        style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "90%", height: "90%", objectFit: "contain", display: "block" }}
      />

      {/* Top band — travels right to left */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }}>
        <MarqueeBand direction="forward" onNavigate={onNavigate} />
      </div>

      {/* Bottom band — travels left to right */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2 }}>
        <MarqueeBand direction="reverse" onNavigate={onNavigate} />
      </div>

      {/* Enter button — true SVG oval, stop-motion hover */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          enter();
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translate(-50%, 0) scale(1.08) rotate(-3deg)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translate(-50%, 0) scale(1) rotate(0deg)"; }}
        style={{
          position: "absolute",
          left: "50%",
          top: "65%",
          transform: "translate(-50%, 0)",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          zIndex: 3,
          transition: "none",
        }}
      >
        <img src={enterButtonSvg} alt="Enter the shop" style={{ width: 160, display: "block" }} />
      </button>
    </div>
  );
}

const FAQ_ITEMS = [
  {
    q: "About the fonts",
    a: "These typefaces were designed by students at Beckmans College of Design, class VK27. They are real, original fonts — but some are still in development. Think of them as trials, demos, and experiments made with care and shared with joy!",
  },
  {
    q: "What does the desktop license cover?",
    a: "The desktop license covers the use of the font for creating graphics, printed materials, videos and animations, wordmarks, logos, and social media content.",
  },
  {
    q: "What does it not cover?",
    a: "The standard license does not cover:\n\n— use in broadcasting (TV, cinema, video-on-demand, or subscription streaming services)\n— use on streaming or social media platforms with over 100,000 followers or subscribers\n— use in applications or games\n— use of the font as a logo or wordmark for an organisation with more than 50 employees\n— embedding the font in hardware or software\n— any use related to NFTs or cryptocurrencies\n— use in a political or religious context without our written consent\n\nFor any of the above, please get in touch at otflicense@gmail.com. The fonts can never be used to promote violence or discrimination.",
  },
  {
    q: "Can I modify the fonts?",
    a: "You may convert letterforms to outlines in design software. Modifying the font file itself is not permitted. If you would like a specific modification, get in touch — we are happy to help.",
  },
  {
    q: "How do I buy a font?",
    a: "Head to our Gumroad shop at otflicense.gumroad.com. Choose a font, complete the purchase, and you will receive the font file by email from Gumroad. Files are available in OTF and TTF format.",
  },
  {
    q: "Will I receive updates?",
    a: "Yes. If a designer updates their font, Gumroad will send you the new file automatically. You only pay once!",
  },
  {
    q: "What is the refund policy?",
    a: "All sales are final. We do not offer refunds on digital goods.",
  },
  {
    q: "I bought a font token at an event — how do I redeem it?",
    a: "We sell physical font tokens at festivals and events. Each token comes with a unique redemption code. To download your font, go to the product page on our Gumroad shop, enter your code in the discount code field at checkout, and the price drops to zero. The font file will then be sent to your email.",
  },
];

function FaqPage({ onNavigate, showEyes, onEyesHover }: { onNavigate: (p: Page) => void; showEyes?: boolean; onEyesHover?: () => void }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar onNavigate={onNavigate} showEyes={showEyes} onEyesHover={onEyesHover} />
      <div className="flex-1 flex flex-col px-10" style={{ paddingTop: "5.5rem", paddingBottom: "5rem", maxWidth: "52rem" }}>
        {FAQ_ITEMS.map(({ q, a }, i) => (
          <div key={i} style={{ marginBottom: "2.8rem" }}>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: "1.45rem", fontWeight: "bold", color: "#000", margin: "0 0 0.7rem", textDecoration: "underline", textUnderlineOffset: "5px", textDecorationThickness: "2px" }}>
              {q}
            </p>
            {a.split("\n\n").map((para, j) => (
              <p key={j} style={{ fontFamily: "Arial, sans-serif", fontSize: "1.05rem", color: "#000", lineHeight: 1.65, margin: j === 0 ? 0 : "0.7rem 0 0" }}>
                {para}
              </p>
            ))}
          </div>
        ))}

        {/* Contact block with star-hover mailto */}
        <div style={{ marginBottom: "2.8rem" }}>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "1.45rem", fontWeight: "bold", color: "#000", margin: "0 0 0.9rem", textDecoration: "underline", textUnderlineOffset: "5px", textDecorationThickness: "2px" }}>
            Contact
          </p>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: "1.05rem", color: "#000", lineHeight: 1.65, margin: "0 0 1rem" }}>
            For licensing questions, large organisation inquiries, or anything else:
          </p>
          <StarLink
            label="otflicense@gmail.com"
            onClick={() => { window.location.href = "mailto:otflicense@gmail.com"; }}
            fg="#000"
            scale={1.3}
          />
        </div>
      </div>
    </div>
  );
}

// ——— Eyes easter egg ———
// Phase 0: eyes shown in navbar
// Phase 1–3: eyes floating at a random screen position (hop 1, 2, 3)
// Phase 4: modal shown
function getRandomEyesPos() {
  const margin = 80;
  return {
    x: margin + Math.random() * (window.innerWidth - 120 - margin * 2),
    y: margin + Math.random() * (window.innerHeight - 56 - margin * 2),
  };
}

function FloatingEyes({ pos, onHover, filter }: { pos: { x: number; y: number }; onHover: () => void; filter?: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);
  return (
    <img
      src={headerEyesSvg}
      alt=""
      onMouseEnter={onHover}
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        height: "1.75rem",
        width: "auto",
        display: "block",
        cursor: "pointer",
        zIndex: 8000,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.35s ease",
        filter: filter,
      }}
    />
  );
}

function EasterEggModal({ onClose, onNavigate }: { onClose: () => void; onNavigate?: (p: Page) => void }) {
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
  }, []);
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9000,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(0,0,0,0.35)",
        opacity: entered ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          onClose();
          if (onNavigate) onNavigate({ id: "bundle" });
          else window.open("https://otflicense.gumroad.com/l/megabundlepack?wanted=true", "_blank", "noopener,noreferrer");
        }}
        style={{
          background: "#fff",
          border: "2px solid #000",
          padding: "3rem 4rem",
          textAlign: "center",
          cursor: "pointer",
          transform: entered ? "translateY(0)" : "translateY(24px)",
          transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
          maxWidth: 420,
        }}
      >
        <p style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "2rem", color: "#000", margin: "0 0 0.75rem" }}>
          alright, you got me.
        </p>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "1.1rem", color: "#000", margin: 0 }}>
          click me to earn a reward
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>(() => pageFromPath(window.location.pathname));
  const [transY, setTransY] = useState<string | null>(null);
  const [transColor, setTransColor] = useState(PALETTE[0]);
  const navigating = useRef(false);
  const pendingPage = useRef<Page | null>(null);

  // Eyes easter egg
  const [eyesPhase, setEyesPhase] = useState(0);
  const [eyesPos, setEyesPos] = useState({ x: 0, y: 0 });

  function handleEyesHover() {
    if (eyesPhase < 3) {
      setEyesPhase((p) => p + 1);
      setEyesPos(getRandomEyesPos());
    } else {
      setEyesPhase(4);
    }
  }

  function transitionTo(p: Page) {
    if (navigating.current) {
      pendingPage.current = p;
      return;
    }
    navigating.current = true;

    // Pick a random palette colour for the band each time it appears
    setTransColor(PALETTE[Math.floor(Math.random() * PALETTE.length)]);

    // Start below screen with no transition, then slide in
    setTransY("translateY(100%)");
    requestAnimationFrame(() => requestAnimationFrame(() => {
      setTransY("translateY(0%)");
      setTimeout(() => {
        setPage(p);
        // Reset the eyes easter egg whenever leaving the foundry page.
        if (p.id !== "foundry") { setEyesPhase(0); setEyesPos({ x: 0, y: 0 }); }
        window.scrollTo(0, 0);
        // Slide out upward
        setTimeout(() => {
          setTransY("translateY(-100%)");
          setTimeout(() => {
            setTransY(null);
            navigating.current = false;
            if (pendingPage.current) {
              const nextPage = pendingPage.current;
              pendingPage.current = null;
              transitionTo(nextPage);
            }
          }, 520);
        }, 40);
      }, 520);
    }));
  }

  function navigate(p: Page) {
    const path = pageToPath(p);
    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
    }
    transitionTo(p);
  }

  useEffect(() => {
    const initialPage = pageFromPath(window.location.pathname);
    const canonicalPath = pageToPath(initialPage);
    if (window.location.pathname !== canonicalPath) {
      window.history.replaceState(null, "", canonicalPath);
    }

    const handlePopState = () => {
      transitionTo(pageFromPath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const cols = 4;
  const colGap = 48;
  const rowGap = 24;
  const cellWidth = `calc((100% - ${colGap * (cols - 1)}px) / ${cols} * 0.50)`;

  // Easter egg is only active on the foundry/sticker page.
  const foundryEyesProps = { showEyes: eyesPhase === 0, onEyesHover: handleEyesHover };
  const staticEyesProps  = { showEyes: true };

  let content: React.ReactNode;
  if (page.id === "home")     content = <HomePage onNavigate={navigate} />;
  else if (page.id === "about")    content = <SimplePage title="ABOUT" onNavigate={navigate} {...staticEyesProps} />;
  else if (page.id === "contact")  content = <FaqPage onNavigate={navigate} {...staticEyesProps} />;
  else if (page.id === "bundle")   content = <BundlePage onNavigate={navigate} {...staticEyesProps} />;
  else if (page.id === "typeface") content = <TypefacePage name={page.name} onNavigate={navigate} {...staticEyesProps} />;
  else content = (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#fff" }}>
      <div style={{ background: "#fff", flexShrink: 0 }}>
        <NavBar onNavigate={navigate} onBrand={() => navigate({ id: "home" })} padding="2.5rem 4.5rem 1.5rem" {...foundryEyesProps} />
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem 3rem" }}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", rowGap }}>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", columnGap: colGap }}>
            {shopTypefaces.slice(0, 6).map((face) => (
              <Cell key={face.name} face={face} width={cellWidth} onNavigate={navigate} nudgeX={SHOP_STICKER_LAYOUT[face.name].x} nudgeY={SHOP_STICKER_LAYOUT[face.name].y} rotation={SHOP_STICKER_LAYOUT[face.name].rotation} />
            ))}
          </div>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", columnGap: colGap, marginTop: rowGap * 2 }}>
            {shopTypefaces.slice(6, 11).map((face) => (
              <Cell key={face.name} face={face} width={cellWidth} onNavigate={navigate} nudgeX={SHOP_STICKER_LAYOUT[face.name].x} nudgeY={SHOP_STICKER_LAYOUT[face.name].y} rotation={SHOP_STICKER_LAYOUT[face.name].rotation} />
            ))}
          </div>
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", columnGap: colGap * 2 }}>
            {shopTypefaces.slice(11).map((face) => (
              <Cell key={face.name} face={face} width={cellWidth} onNavigate={navigate} nudgeX={SHOP_STICKER_LAYOUT[face.name].x} nudgeY={SHOP_STICKER_LAYOUT[face.name].y} rotation={SHOP_STICKER_LAYOUT[face.name].rotation} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ flexShrink: 0 }}>
        <MarqueeBand direction="reverse" onNavigate={navigate} />
      </div>
    </div>
  );

  return (
    <>
      {content}

      {/* Eyes easter egg — floating hops (phases 1-3), foundry page only */}
      {page.id === "foundry" && eyesPhase >= 1 && eyesPhase <= 3 && (
        <FloatingEyes key={eyesPhase} pos={eyesPos} onHover={handleEyesHover} />
      )}

      {/* Eyes easter egg — reward modal (phase 4), foundry page only */}
      {page.id === "foundry" && eyesPhase === 4 && (
        <EasterEggModal onClose={() => setEyesPhase(0)} onNavigate={navigate} />
      )}

      {/* Global fixed marquee — visible on every page, sits above content */}
      {page.id !== "home" && page.id !== "foundry" && page.id !== "bundle" && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200 }}>
          <MarqueeBand direction="reverse" onNavigate={navigate} />
        </div>
      )}

      {/* Page transition overlay */}
      {transY !== null && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            transform: transY,
            transition: transY === "translateY(100%)" ? "none" : "transform 0.52s cubic-bezier(0.76, 0, 0.24, 1)",
            display: "flex", alignItems: "stretch",
          }}
        >
          <div
            style={{ width: "100%", height: "100%", display: "block" }}
            dangerouslySetInnerHTML={{
              __html: transitionSvgRaw
                .replace(/#00ab53/gi, transColor)
                .replace("<svg ", '<svg preserveAspectRatio="none" style="width:100%;height:100%;display:block" '),
            }}
          />
        </div>
      )}
    </>
  );
}
