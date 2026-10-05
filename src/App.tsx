import { useState, useRef, useEffect, useLayoutEffect } from "react";
import type React from "react";
import { createPortal } from "react-dom";
import * as opentype from "opentype.js";
import * as fontkit from "fontkit";
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
import bildBip1 from "./imports/bild_bip1.png";
import bildBip2 from "./imports/bild_bip2.png";
import bildBip3 from "./imports/bild_bip3.png";
import bildBip4 from "./imports/bild_bip4.png";
import bildBip5 from "./imports/bild_bip5.png";
import bildBrus1 from "./imports/bild_brus1.png";
import bildBrus2 from "./imports/bild_brus2.png";
import bildBrus3 from "./imports/bild_brus3.png";
import bildBrus4 from "./imports/bild_brus4.png";
import bildBrus5 from "./imports/bild_brus5.png";
import bildCheiron1 from "./imports/bild_cheiron1.png";
import bildCheiron2 from "./imports/bild_cheiron2.png";
import bildCheiron3 from "./imports/bild_cheiron3.png";
import bildCheiron4 from "./imports/bild_cheiron4.png";
import bildCheiron5 from "./imports/bild_cheiron5.png";
import bildCrypto1 from "./imports/bild_crypto1.png";
import bildCrypto2 from "./imports/bild_crypto2.png";
import bildCrypto3 from "./imports/bild_crypto3.png";
import bildCrypto4 from "./imports/bild_crypto4.png";
import bildCrypto5 from "./imports/bild_crypto5.png";
import bildDukat1 from "./imports/bild_dukat1.png";
import bildDukat2 from "./imports/bild_dukat2.png";
import bildDukat3 from "./imports/bild_dukat3.png";
import bildDukat4 from "./imports/bild_dukat4.png";
import bildElla1 from "./imports/bild_ella1.png";
import bildElla2 from "./imports/bild_ella2.png";
import bildElla3 from "./imports/bild_ella3.png";
import bildElla4 from "./imports/bild_ella4.png";
import bildElla5 from "./imports/bild_ella5.png";
import bildFacit1 from "./imports/bild_facit1.png";
import bildFacit2 from "./imports/bild_facit2.png";
import bildFacit3 from "./imports/bild_facit3.png";
import bildFacit4 from "./imports/bild_facit4.png";
import bildFacit5 from "./imports/bild_facit5.png";
import bildGalanite1 from "./imports/bild_galanite1.png";
import bildGalanite2 from "./imports/bild_galanite2.png";
import bildGalanite3 from "./imports/bild_galanite3.png";
import bildGalanite4 from "./imports/bild_galanite4.png";
import bildGalanite5 from "./imports/bild_galanite5.png";
import bildKuriren1 from "./imports/bild_kuriren1.png";
import bildKuriren2 from "./imports/bild_kuriren2.png";
import bildKuriren3 from "./imports/bild_kuriren3.png";
import bildKuriren4 from "./imports/bild_kuriren4.png";
import bildKuriren5 from "./imports/bild_kuriren5.png";
import bildLastCall1 from "./imports/bild_lastcall1.png";
import bildLastCall2 from "./imports/bild_lastcall2.png";
import bildLastCall3 from "./imports/bild_lastcall3.png";
import bildLastCall4 from "./imports/bild_lastcall4.png";
import bildLastCall5 from "./imports/bild_lastcall5.png";
import bildLcdUber1 from "./imports/bild_lcduber1.png";
import bildLcdUber2 from "./imports/bild_lcduber2.png";
import bildLcdUber3 from "./imports/bild_lcduber3.png";
import bildLcdUber4 from "./imports/bild_lcduber4.png";
import bildLcdUber5 from "./imports/bild_lcduber5.png";
import bildLiljan1 from "./imports/bild_liljan1.png";
import bildLiljan2 from "./imports/bild_liljan2.png";
import bildLiljan3 from "./imports/bild_liljan3.png";
import bildLiljan4 from "./imports/bild_liljan4.png";
import bildLiljan5 from "./imports/bild_liljan5.png";
import bildMormor1 from "./imports/bild_mormor1.png";
import bildMormor2 from "./imports/bild_mormor2.png";
import bildMormor3 from "./imports/bild_mormor3.png";
import bildMormor4 from "./imports/bild_mormor4.png";
import bildMormor5 from "./imports/bild_mormor5.png";
import bildSonja1 from "./imports/bild_sonja1.png";
import bildSonja2 from "./imports/bild_sonja2.png";
import bildSonja3 from "./imports/bild_sonja3.png";
import bildSonja4 from "./imports/bild_sonja4.png";
import bildSonja5 from "./imports/bild_sonja5.png";
import bildSvek1 from "./imports/bild_svek1.png";
import bildSvek2 from "./imports/bild_svek2.png";
import bildSvek3 from "./imports/bild_svek3.png";
import bildSvek4 from "./imports/bild_svek4.png";
import bildSvek5 from "./imports/bild_svek5.png";
import bildXoxo1 from "./imports/bild_xoxo1.png";
import bildXoxo2 from "./imports/bild_xoxo2.png";
import bildXoxo3 from "./imports/bild_xoxo3.png";
import bildXoxo4 from "./imports/bild_xoxo4.png";
import bildXoxo5 from "./imports/bild_xoxo5.png";
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
import variableFontSticker from "./imports/ChatGPT_Image_Sep_30__2026__08_16_47_PM__1_.png";

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
  { name: "Last Call", displayName: "LastCall",    designer: "Emma Ljungqvist",    klass: "VK27", bg: "#0074ff", fg: W, img: specLastCall, gallery: [bildLastCall1, bildLastCall2, bildLastCall3, bildLastCall4, bildLastCall5], font: "'Last Call', sans-serif", file: "/fonts/OTF_Lastcall.woff2", casing: "upperInitial", scale: 1.50, previewSize: 16, mobilePreviewSize: 3.5, gumroad: "https://otflicense.gumroad.com/l/lastcall?wanted=true" },
  { name: "XOXO",        designer: "Emma Tungelstedt",   klass: "VK27", bg: "#ff2cb2", fg: W, img: specXOXO, gallery: [bildXoxo1, bildXoxo2, bildXoxo3, bildXoxo4, bildXoxo5], font: "'XOXO', sans-serif", file: "/fonts/emmaxoxo.otf", scale: 1.27, previewSize: 16, mobilePreviewSize: 5, gumroad: "https://otflicense.gumroad.com/l/xoxo?wanted=true" },
  { name: "Liljan",         designer: "Enya Borg",        klass: "VK27", bg: "#ff5756", fg: W, img: specLiljan, gallery: [bildLiljan1, bildLiljan2, bildLiljan3, bildLiljan4, bildLiljan5], font: "'Liljan', sans-serif", file: "/fonts/enyaliljan.otf", casing: "lower", scale: 0.84, previewSize: 16, mobilePreviewSize: 6.5, gumroad: "https://otflicense.gumroad.com/l/liljan?wanted=true" },
  { name: "Kuriren",       designer: "Fahed Dehchar",     klass: "VK27", bg: "#fff800", fg: B, img: specKurir, gallery: [bildKuriren1, bildKuriren2, bildKuriren3, bildKuriren4, bildKuriren5], font: "'Kurir', sans-serif", file: "/fonts/fahedkurir.otf", scale: 1.42, previewSize: 16, mobilePreviewSize: 5, gumroad: "https://otflicense.gumroad.com/l/kuriren?wanted=true" },
  // — middle —
  { name: "Ella",        designer: "Caspar Broms",   klass: "VK27", bg: "#00ab53", fg: W, img: specElla, gallery: [bildElla1, bildElla2, bildElla3, bildElla4, bildElla5], font: "'Ella', sans-serif", file: "/fonts/OTF_Ella.woff2", scale: 1.11, previewSize: 16, mobilePreviewSize: 8.5, gumroad: "https://otflicense.gumroad.com/l/ella?wanted=true" },
  { name: "Svek",        designer: "Tindra Berglund",    klass: "VK27", bg: "#0074ff", fg: W, img: specSvek, gallery: [bildSvek1, bildSvek2, bildSvek3, bildSvek4, bildSvek5], font: "'Svek', sans-serif", file: "/fonts/SVEKVF.woff2", casing: "upper", scale: 1.27, previewSize: 16, mobilePreviewSize: 11, gumroad: "https://otflicense.gumroad.com/l/svek?wanted=true" },
  { name: "Cheiron",         designer: "Simon Grey",      klass: "VK27", bg: "#c3872f", fg: W, img: specCheiron, gallery: [bildCheiron1, bildCheiron2, bildCheiron3, bildCheiron4, bildCheiron5], font: "'Cheiron', sans-serif", file: "/fonts/OTF_Cheiron.woff2", casing: "upperInitial", scale: 1.27, previewSize: 16, mobilePreviewSize: 3.5, gumroad: "https://otflicense.gumroad.com/l/cheiron?wanted=true" },
  { name: "LCD Über",         designer: "Silje Nordback", klass: "VK27", bg: "#ff1d38", fg: W, img: specUber, gallery: [bildLcdUber1, bildLcdUber2, bildLcdUber3, bildLcdUber4, bildLcdUber5], font: "'Uber', sans-serif", file: "/fonts/siljeuber.otf", scale: 1.50, previewSize: 16, mobilePreviewSize: 3.5, gumroad: "https://otflicense.gumroad.com/l/lcduber?wanted=true" },
  { name: "BIP",         designer: "Vivi Tang",  klass: "VK27", bg: "#c3872f", fg: W, img: specBip, gallery: [bildBip1, bildBip2, bildBip3, bildBip4, bildBip5], font: "'BIP', sans-serif", file: "/fonts/OTF_Bip.woff2", casing: "upper", scale: 1.54, previewSize: 16, mobilePreviewSize: 6.5, gumroad: "https://otflicense.gumroad.com/l/bip?wanted=true" },
  // — lower: Galanite + Dukat —
  { name: "Galanite",         designer: "Hannah Mårtensson",     klass: "VK27", bg: "#fff800", fg: B, img: specGalanite, gallery: [bildGalanite1, bildGalanite2, bildGalanite3, bildGalanite4, bildGalanite5], font: "'Galanite', sans-serif", file: "/fonts/hannahgalanite.ttf", casing: "upper", scale: 1.27, previewSize: 16, mobilePreviewSize: 3, gumroad: "https://otflicense.gumroad.com/l/galanite?wanted=true" },
  { name: "Dukat",    designer: "Alva Kinneholm",  klass: "VK27", bg: "#ff2cb2", fg: W, img: specDukat, gallery: [bildDukat1, bildDukat2, bildDukat3, bildDukat4], font: "'Dukat', sans-serif", file: "/fonts/alvadukat.otf", scale: 1.27, previewSize: 16, mobilePreviewSize: 5, gumroad: "https://otflicense.gumroad.com/l/dukat?wanted=true" },
  // — bottom: Crypto, Facit, Sonja, Mormor, Brus —
  { name: "Crypto", displayName: "Crypto Mono", designer: "Lovisa Åkerblom",   klass: "VK27", bg: "#0074ff", fg: W, img: specCrypto, gallery: [bildCrypto1, bildCrypto2, bildCrypto3, bildCrypto4, bildCrypto5], font: "'Crypto', sans-serif", file: "/fonts/lovisacrypto.otf", casing: "lower", scale: 1.27, previewSize: 14, mobilePreviewSize: 3, gumroad: "https://otflicense.gumroad.com/l/crypto?wanted=true" },
  { name: "Facit",        designer: "Jesper Smeding",        klass: "VK27", bg: "#ff1d38", fg: W, img: specFacit, gallery: [bildFacit1, bildFacit2, bildFacit3, bildFacit4, bildFacit5], font: "'Facit', sans-serif", file: "/fonts/jesperfacit.otf", scale: 1.27, previewSize: 16, mobilePreviewSize: 5.5, gumroad: "https://otflicense.gumroad.com/l/facit?wanted=true" },
  { name: "Sonja",         designer: "Ve Örnehed",    klass: "VK27", bg: "#c3872f", fg: W, img: specSonja, gallery: [bildSonja1, bildSonja2, bildSonja3, bildSonja4, bildSonja5], font: "'Sonja', sans-serif", file: "/fonts/vesonja.otf", casing: "upper", scale: 1.03, previewSize: 16, mobilePreviewSize: 7, gumroad: "https://otflicense.gumroad.com/l/sonja?wanted=true" },
  { name: "Mormor",         designer: "Lawrence Ponsonby",   klass: "VK27", bg: "#ff5756", fg: W, img: specMormor, gallery: [bildMormor1, bildMormor2, bildMormor3, bildMormor4, bildMormor5], font: "'Mormor', sans-serif", file: "/fonts/lawrencemormor_v2.otf", scale: 1.65, previewSize: 16, mobilePreviewSize: 4.5, gumroad: "https://otflicense.gumroad.com/l/mormor?wanted=true" },
  { name: "Brus",         designer: "Linn Willebrand",    klass: "VK27", bg: "#00ab53", fg: W, img: specBrus, gallery: [bildBrus1, bildBrus2, bildBrus3, bildBrus4, bildBrus5], font: "'Brus', sans-serif", file: "/fonts/OTF_Brus.woff2", scale: 1.27, previewSize: 16, mobilePreviewSize: 6.5, gumroad: "https://otflicense.gumroad.com/l/brus?wanted=true" },
];

// Native variable-font typefaces — rendered directly by the browser (not the
// SVG/opentype.js overlay) so variable-font metrics/kerning stay correct. Each
// axis maps to a CSS font-variation-settings tag. These known ranges act as
// fallback axis data even when opentype.js cannot parse the WOFF2 file.
// Glyphs-panel presets. Explicit coordinates where known; otherwise the
// coordinates come from the font's own named instances (fvar) at runtime.
type VFPreset = { name: string; values?: Record<string, number> };
const ELLA_WEIGHTS: [string, number][] = [["Thin", 100], ["ExtraLight", 200], ["Light", 300], ["Regular", 400], ["Medium", 500], ["SemiBold", 600], ["Bold", 700]];
const VARIABLE_FONT_PRESETS: Record<string, VFPreset[]> = {
  "Ella": ELLA_WEIGHTS.flatMap(([n, w]) => [{ name: n, values: { wght: w, SRIF: 0 } }, { name: `${n} Serif`, values: { wght: w, SRIF: 100 } }]),
  "Brus": ["Light", "Regular", "Medium", "Bold", "Bold Black", "Narrow Light Italic", "Italic", "Medium Italic", "Bold Italic", "Black Italic"].map((name) => ({ name })),
  "Last Call": ["Thin", "ExtraLight", "Light", "Medium", "SemiBold", "Bold", "ExtraBold", "Black"].map((name) => ({ name })),
  "Cheiron": ["Regular", "RegularStencil", "bold"].map((name) => ({ name })),
  "BIP": [{ name: "Regular", values: { wght: 0 } }, { name: "Medium", values: { wght: 50 } }, { name: "Bold", values: { wght: 100 } }],
};
const presetKey = (n: string) => n.toLowerCase().replace(/[\s_-]/g, "");
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
  "LCD Über",
  "Liljan",
  "Mormor",
  "Sonja",
  "Svek",
  "XOXO",
] as const;

const shopTypefaces = SHOP_TYPEFACE_NAMES.map(
  (name) => typefaces.find((face) => face.name === name)!,
);

const INTRO_STICKER_ORDER = [
  "Dukat",
  "Facit",
  "LCD Über",
  "Liljan",
  "Galanite",
  "Ella",
  "Mormor",
  "Svek",
  "Brus",
  "Last Call",
  "XOXO",
  "Kuriren",
  "Cheiron",
  "Sonja",
  "Crypto",
  "BIP",
] as const;

const INTRO_STICKER_INDEX = Object.fromEntries(
  INTRO_STICKER_ORDER.map((name, index) => [name, index]),
) as Record<string, number>;

const GUMROAD_PRODUCT_IDS: Record<string, string> = {
  BIP: "triuuf",
  Brus: "kzwbfn",
  Cheiron: "eagsbq",
  Crypto: "jgntpu",
  Dukat: "pfvilv",
  Ella: "iwggr",
  Facit: "gjeoz",
  Galanite: "owetjk",
  Kuriren: "pynjvq",
  "Last Call": "rlvhn",
  "LCD Über": "gxuwda",
  Liljan: "yzcepd",
  Mormor: "garhny",
  Sonja: "stlzzs",
  Svek: "goowyt",
  XOXO: "jcwvkd",
};

const VARIABLE_FONT_STICKERS = new Set(["BIP", "Brus", "Cheiron", "Ella", "Last Call"]);

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
  // Slot values kept in place when the stickers were re-alphabetised.
  "LCD Über": { x: 170, y: -10, rotation: 6 },
  Liljan: { x: -104, y: 20, rotation: -4 },
  Mormor: { x: -52, y: -24, rotation: 6 },
  Sonja: { x: -2, y: 28, rotation: -2 },
  Svek: { x: 50, y: -18, rotation: 5 },
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
    // Per-designer address goes here once it exists; falls back to the foundry contact.
    email: undefined as string | undefined,
  };
});

// Class codes map to graduation years: shown as "2027" in the filter, "Class of 2027" in the marquee.
const KLASS_YEAR: Record<string, string> = { VK27: "2027" };
const klassYear = (k: string) => KLASS_YEAR[k] ?? k;
const klassLabel = (k: string) => `Class of ${klassYear(k)}`;

const DESIGNER_CLASSES = ["All", ...Array.from(new Set(designers.map((d) => d.klass)))];

// Semicircular notches cut into the top and bottom centre of a sharp rectangle.
// Two mask layers, each covering one half, so the cut-outs are true negative space.
const NOTCH_MASK =
  "radial-gradient(circle at 50% 0, transparent 13px, #000 13.5px) top / 100% 51% no-repeat, " +
  "radial-gradient(circle at 50% 100%, transparent 13px, #000 13.5px) bottom / 100% 51% no-repeat";

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block" }}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.6 2.8 3.9 6 3.9 9.5s-1.3 6.7-3.9 9.5c-2.6-2.8-3.9-6-3.9-9.5s1.3-6.7 3.9-9.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block" }}>
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: "block" }}>
      <rect x="2.75" y="5.25" width="18.5" height="13.5" rx="1.5" />
      <path d="M3.25 6l8.75 7 8.75-7" />
    </svg>
  );
}

function DesignerCell({ d, index = 0 }: { d: typeof designers[0]; index?: number }) {
  // One random palette colour picked on enter, held stable for the whole hover.
  const [hoverBg, setHoverBg] = useState<string | null>(null);
  const fg = hoverBg ? (hoverBg === "#fff800" ? "#000" : "#fff") : "#000";
  const link: React.CSSProperties = { color: fg, textDecoration: "none", fontSize: "0.85rem" };

  return (
    <div
      onMouseEnter={() => setHoverBg(PALETTE[Math.floor(Math.random() * PALETTE.length)])}
      onMouseLeave={() => setHoverBg(null)}
      className="about-designer-cell"
      style={{
        position: "relative", aspectRatio: "2 / 1",
        background: hoverBg ?? "transparent",
        WebkitMask: NOTCH_MASK, mask: NOTCH_MASK,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        padding: "0 1.25rem", fontFamily: "Arial, sans-serif", color: fg,
      } as React.CSSProperties}
    >
      <div className="about-designer-name" style={{ fontWeight: "bold", fontSize: "1rem", lineHeight: 1.15, marginBottom: "0.6rem", textAlign: "center" }}>{d.name}</div>
      <div className="about-designer-links" style={{ display: "flex", justifyContent: "center", gap: "1.25rem", width: "70%" }}>
        <a href={`https://${d.site}`} target="_blank" rel="noopener noreferrer" aria-label={`${d.name} website`} title="Website" style={link}><GlobeIcon /></a>
        <a href={`https://instagram.com/${d.social}`} target="_blank" rel="noopener noreferrer" aria-label={`${d.name} on Instagram`} title="Instagram" style={link}><InstagramIcon /></a>
        <a href={`mailto:${d.email ?? "otflicense@gmail.com"}`} aria-label={`Email ${d.name}`} title="Email" style={link}><MailIcon /></a>
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
          {(face as { displayName?: string }).displayName ?? face.name}
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

function Cell({ face, width, onNavigate, nudgeX = 0, nudgeY = 0, rotation = 0, index = 0 }: {
  face: typeof typefaces[0];
  index?: number;
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
      // Mobile zig-zag hooks: side alternates by order, with a small per-sticker x jitter.
      data-side={index % 2 === 0 ? "left" : "right"}
      data-first={index === 0 ? "" : undefined}
      data-name={face.name}
      style={{ "--zz-rot": `${[-6, 9, 2, -11, -1, 4, 12, -4, 7, -9, 0, 11, -3, -12, 5, 8][index % 16]}deg`, "--zz-x": `${[0, -3, 4, -2, 2, -4, 3, -1][index % 8]}vw`, "--s": s, width, display: "flex", alignItems: "flex-start", pointerEvents: "none", transform: `translate(${nudgeX}px, ${nudgeY}px)`, position: "relative", zIndex: hovered ? 2 : 0 } as React.CSSProperties}
    >
      <div
        className="cell-pop"
        style={{ width: "100%", transform: "scale(1)", transformOrigin: "center", "--sticker-index": INTRO_STICKER_INDEX[face.name] } as React.CSSProperties}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="cell-inner"
          onClick={() => onNavigate({ id: "typeface", name: face.name })}
          style={{
            width: "100%",
            cursor: "pointer",
            pointerEvents: "auto",
            transform: hovered
              ? `rotate(${hoverRotation}deg) scale(${s})`
              : `rotate(${rotation}deg) scale(${s})`,
            transition: "none",
            transformOrigin: "center",
            position: "relative",
            zIndex: hovered ? 1 : 0,
            // Read by the mobile stylesheet: desktop scale + hover tilt as resting pose.
            "--s": s,
            "--hover-rot": `${hoverRotation}deg`,
          } as React.CSSProperties}
        >
          <img
            src={face.img}
            alt={face.name}
            onLoad={(e) => {
              const img = e.currentTarget;
              // Mobile layout normalises sticker size by area using this ratio.
              if (img.naturalHeight) img.closest<HTMLElement>(".cell")?.style.setProperty("--ar", String(img.naturalWidth / img.naturalHeight));
            }}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          {VARIABLE_FONT_STICKERS.has(face.name) && (
            <img
              src={variableFontSticker}
              className="cell-badge"
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-1%",
                right: "-1%",
                width: `${21.505 / s}%`,
                height: "auto",
                display: "block",
                pointerEvents: "none",
              }}
            />
          )}
        </div>
      </div>
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

function NavTextButton({ label, width, onClick, color = "#000", className = "" }: { label: string; width: number; onClick: () => void; color?: string; className?: string }) {
  // Fills with one random palette colour per hover; picked on enter so it
  // stays stable for the whole hover.
  const [hoverBg, setHoverBg] = useState<string | null>(null);
  return (
    <button
      className={`nav-text-btn ${className}`}
      onClick={onClick}
      onMouseEnter={() => setHoverBg(PALETTE[Math.floor(Math.random() * PALETTE.length)])}
      onMouseLeave={() => setHoverBg(null)}
      style={{
        minWidth: width,
        height: 48,
        background: hoverBg ?? "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0.75rem",
        fontFamily: "Arial, sans-serif",
        // Same size and weight as the homepage marquee text.
        fontSize: "1.5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        // Same text colour rule as the marquee: black on light colours, white otherwise.
        // Idle: the nav's text colour (white on the black page mode).
        color: hoverBg ? (LIGHT_BAND_COLORS.has(hoverBg) ? "#000" : "#fff") : color,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* The static label always sizes the box; on hover it's hidden and the
          same label loops right-to-left inside the fixed box instead. */}
      <span style={{ visibility: hoverBg ? "hidden" : "visible" }}>{label}</span>
      {hoverBg && (
        <span aria-hidden style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", overflow: "hidden" }}>
          <span
            ref={(el) => { if (el) el.style.animationDuration = `${el.scrollWidth / 2 / bandSpeedPxPerSec}s`; }}
            style={{ display: "inline-flex", animation: "marquee 6s linear infinite" }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} style={{ paddingRight: "1.5rem" }}>{label}</span>
            ))}
          </span>
        </span>
      )}
    </button>
  );
}

function NavBar({ onNavigate, bg = "#fff", fg = "#000", onBrand, logoHeight = "3rem", starColor, linkScale = 1, padding = "3rem 4.5rem 2.25rem", logoTop = "3rem", showEyes = true, onEyesHover, onBundlePage = false, className }: { onNavigate: (p: Page) => void; className?: string; onBundlePage?: boolean; bg?: string; fg?: string; onBrand?: () => void; logoHeight?: string; starColor?: string; linkScale?: number; padding?: string; logoTop?: string; showEyes?: boolean; onEyesHover?: () => void }) {
  // The panel is always mounted; menuOpen only toggles its slide state.
  const [menuOpen, setMenuOpen] = useState(false);
  // Band + text colours, picked once each time the menu opens.
  const [menuColors, setMenuColors] = useState<string[]>(PALETTE.slice(0, 3));
  const toggleMenu = () => {
    if (!menuOpen) setMenuColors((prev) => {
      // Three distinct palette colours, starting on a different one than last time.
      const shuffled = [...PALETTE].sort(() => Math.random() - 0.5);
      if (shuffled[0] === prev[0]) shuffled.push(shuffled.shift()!);
      return shuffled.slice(0, 3);
    });
    setMenuOpen((o) => !o);
  };
  const menuItems: { label: string; to: Page }[] = [
    { label: "ABOUT US", to: { id: "about" } },
    { label: "LICENSING STUFF", to: { id: "contact" } },
    onBundlePage ? { label: "BUY A SINGLE TYPEFACE", to: { id: "foundry" } } : { label: "BUY THE MEGA BUNDLE!", to: { id: "bundle" } },
  ];
  return (
    <nav
      className={`sticky top-0 z-50 tf-nav ${className ?? ""}`}
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
      <div className="nav-left" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <NavTextButton label="ABOUT US" width={140} color={fg} onClick={() => onNavigate({ id: "about" })} />
        <NavTextButton label="LICENSING STUFF" width={140} color={fg} onClick={() => onNavigate({ id: "contact" })} />
      </div>
      <button
        className="nav-logo"
        onClick={onBrand ?? (() => onNavigate({ id: "foundry" }))}
        style={{ position: "absolute", left: "50%", top: logoTop, transform: "translateX(-50%)", display: "flex", alignItems: "flex-start", gap: "1.1rem", background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
      >
        <img
          src={logo}
          alt={BRAND}
          style={{ height: logoHeight, display: "block", filter: fg === "#fff" ? "invert(1)" : "none" }}
        />
        {/* Eyes sit in flow beside the wordmark so the pair centres as one unit.
            When hidden (easter egg hops) they keep their space to avoid a shift. */}
        <img
          className="nav-eyes"
          src={headerEyesSvg}
          alt=""
          aria-hidden="true"
          onMouseEnter={showEyes ? (e) => { e.stopPropagation(); onEyesHover?.(); } : undefined}
          style={{
            marginTop: "0.5rem",
            height: "1.75rem",
            width: "auto",
            display: "block",
            flexShrink: 0,
            visibility: showEyes ? "visible" : "hidden",
            filter: fg === "#fff" ? "invert(1)" : "none",
            cursor: "pointer",
          }}
        />
      </button>
      {/* On the bundle page this becomes the way back to single typefaces. */}
      <NavTextButton
        className="nav-bundle"
        label={onBundlePage ? "BUY A SINGLE TYPEFACE" : "BUY THE MEGA BUNDLE!"}
        width={344}
        color={fg}
        onClick={() => onNavigate(onBundlePage ? { id: "foundry" } : { id: "bundle" })}
      />
      {/* Mobile only: the three links collapse into a hamburger menu. */}
      <button
        type="button"
        className="nav-burger"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={toggleMenu}
        style={{ color: fg }}
      >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          {menuOpen ? <path d="M5 5l16 16M21 5L5 21" /> : <path d="M3 6h20M3 13h20M3 20h20" />}
        </svg>
      </button>
      <div className="nav-menu-clip">
        <div className={`nav-menu${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
          {/* One moving band per destination, same language as the marquee. */}
          {menuItems.map(({ label, to }, row) => (
            <button
              key={label}
              type="button"
              className="nav-menu-row"
              aria-label={label}
              onClick={() => { setMenuOpen(false); window.setTimeout(() => onNavigate(to), 300); }}
              style={{ background: menuColors[row], color: LIGHT_BAND_COLORS.has(menuColors[row]) ? "#000" : "#fff" }}
            >
              <span className="nav-menu-track" aria-hidden="true" style={{ animationDuration: `${14 + row * 3}s` }}>
                {Array.from({ length: 12 }).map((_, i) => <span key={i} className="nav-menu-word">{label}</span>)}
              </span>
            </button>
          ))}
        </div>
      </div>
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
      onClick={() => onNavigate ? onNavigate({ id: "bundle" }) : window.location.assign("/bundle")}
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

function gumroadProductUrl(url: string) {
  const productUrl = new URL(url);
  productUrl.searchParams.delete("embed");
  productUrl.searchParams.delete("wanted");
  return productUrl.toString();
}

function gumroadCheckoutUrl(url: string) {
  const checkoutUrl = new URL(gumroadProductUrl(url));
  checkoutUrl.searchParams.set("wanted", "true");
  return checkoutUrl.toString();
}

function gumroadEmbeddedCheckoutUrl(productId: string) {
  const checkoutUrl = new URL("https://gumroad.com/checkout");
  checkoutUrl.searchParams.set("embed", "true");
  checkoutUrl.searchParams.set("wanted", "true");
  checkoutUrl.searchParams.set("product", productId);
  checkoutUrl.searchParams.set("quantity", "1");
  return checkoutUrl.toString();
}

function GumroadInlineCheckout({ url, productId, minHeight = 640 }: { url: string; productId?: string; minHeight?: number }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const minHeightRef = useRef(minHeight);
  minHeightRef.current = minHeight;
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const checkoutUrl = gumroadCheckoutUrl(url);
  const embeddedCheckoutUrl = productId ? gumroadEmbeddedCheckoutUrl(productId) : null;

  useEffect(() => {
    setStatus("loading");
    if (!embeddedCheckoutUrl) {
      setStatus("error");
      return;
    }

    const receiveHeight = (event: MessageEvent) => {
      const iframe = iframeRef.current;
      if (!iframe || event.source !== iframe.contentWindow) return;

      try {
        const origin = new URL(event.origin);
        if (origin.hostname !== "gumroad.com" && !origin.hostname.endsWith(".gumroad.com")) return;
      } catch {
        return;
      }

      if (
        typeof event.data === "object" &&
        event.data !== null &&
        event.data.type === "height" &&
        typeof event.data.height === "number"
      ) {
        iframe.style.height = `${Math.max(minHeightRef.current, event.data.height)}px`;
      }
    };

    window.addEventListener("message", receiveHeight);
    return () => window.removeEventListener("message", receiveHeight);
  }, [embeddedCheckoutUrl]);

  return (
    <div className="gumroad-checkout">
      {embeddedCheckoutUrl && (
        <iframe
          ref={iframeRef}
          className="gumroad-checkout-frame"
          src={embeddedCheckoutUrl}
          title="Gumroad checkout"
          scrolling="no"
          style={minHeight > 640 ? { height: minHeight } : undefined}
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("error")}
          allow="payment"
        />
      )}
      {status === "loading" && (
        <p className="gumroad-checkout-status" role="status">
          Loading checkout...
        </p>
      )}
      {status === "error" && (
        <p className="gumroad-checkout-status" role="alert">
          Checkout could not load.{" "}
          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
            Continue to Gumroad
          </a>
        </p>
      )}
    </div>
  );
}

// Final About paragraph sizes (rem) per typeface.
const ABOUT_SIZE: Record<string, { desktop: number; mobile: number }> = {
  BIP: { desktop: 0.95, mobile: 1.0 },
  Brus: { desktop: 1.15, mobile: 1.05 },
  Cheiron: { desktop: 1.15, mobile: 1.1 },
  Crypto: { desktop: 1.15, mobile: 1.05 },
  Dukat: { desktop: 1.2, mobile: 1.15 },
  Ella: { desktop: 1.25, mobile: 1.1 },
  Facit: { desktop: 1.3, mobile: 1.25 },
  Galanite: { desktop: 1.1, mobile: 1.25 },
  Kuriren: { desktop: 1.35, mobile: 1.35 },
  "Last Call": { desktop: 1.0, mobile: 1.15 },
  "LCD Über": { desktop: 1.2, mobile: 1.3 },
  Liljan: { desktop: 1.25, mobile: 1.25 },
  Mormor: { desktop: 1.2, mobile: 1.15 },
  Sonja: { desktop: 1.3, mobile: 1.35 },
  Svek: { desktop: 1.8, mobile: 1.8 },
  XOXO: { desktop: 1.2, mobile: 1.7 },
};
// Final desktop Glyph showcase sizes (rem); mobile is 16rem for every typeface.
const GLYPH_SHOWCASE_DESKTOP: Record<string, number> = {
  BIP: 25, Brus: 28, Cheiron: 23, Crypto: 28, Dukat: 28, Ella: 23.5, Facit: 28, Galanite: 28,
  Kuriren: 28, "Last Call": 28, "LCD Über": 28, Liljan: 28, Mormor: 28, Sonja: 28, Svek: 28, XOXO: 25.25,
};
const GLYPH_SHOWCASE_MOBILE = 16;

function SiteFooter({ color = "#000" }: { color?: string }) {
  return (
    <footer className="site-footer" style={{ color }}>
      <p>© 2026 OTF License. All rights reserved.</p>
      <img
        src={eyesSvg}
        alt="OTF License"
        style={{ filter: color === "#fff" ? "invert(1)" : undefined }}
      />
    </footer>
  );
}

// About-page video; drop an imported asset or URL here to enable playback.
const ABOUT_VIDEO_SRC = "";

function SimplePage({ title, onNavigate, showEyes, onEyesHover }: { title: string; onNavigate: (p: Page) => void; showEyes?: boolean; onEyesHover?: () => void }) {
  const [klassFilter, setKlassFilter] = useState<string>("");
  const shownDesigners = klassFilter === "" || klassFilter === "All" ? designers : designers.filter((d) => d.klass === klassFilter);

  if (title === "ABOUT") {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <NavBar onNavigate={onNavigate} showEyes={showEyes} onEyesHover={onEyesHover} />
        {/* Two-column layout: left = description + names, right = scroll gallery */}
        <div className="about-intro" style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr", paddingTop: "5.5rem" }}>
          {/* Left column */}
          <div className="about-intro-col" style={{ padding: "0 3rem 0 4rem" }}>
            <p className="about-intro-text" style={{ fontFamily: "Arial, sans-serif", fontSize: "1.15rem", color: "#000", lineHeight: 1.6, marginBottom: "2.5rem" }}>
              {PAGE_TEXT["ABOUT"]}
            </p>


          </div>
          {/* Right column — About video. Set ABOUT_VIDEO_SRC to connect the asset. */}
          <div className="about-video" style={{ padding: "0 4rem 0 1rem" }}>
            {ABOUT_VIDEO_SRC ? (
              <video src={ABOUT_VIDEO_SRC} controls playsInline preload="metadata" style={{ display: "block", width: "100%", height: "auto", background: "#000" }} />
            ) : (
              <div style={{ aspectRatio: "16 / 9", background: "#f2f2f2", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: "#000" }}>Video coming soon</div>
            )}
            <p className="about-video-credit" style={{ fontFamily: "Arial, sans-serif", fontSize: "0.75rem", color: "#000", opacity: 0.7, margin: "0.4rem 0 0" }}>Promo video by Jesper Smeding</p>
          </div>
        </div>

        {/* Designers heading + filter — below the whole text/video row */}
        <div className="about-designers-head" style={{ padding: "2.5rem 4rem 0", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          <h2 style={{ fontFamily: "Arial, sans-serif", fontSize: "1.6rem", fontWeight: "bold", color: "#000", margin: 0 }}>Designers</h2>
          <select
            value={klassFilter}
            onChange={(e) => setKlassFilter(e.target.value)}
            style={{ fontFamily: "Arial, sans-serif", fontSize: "1rem", padding: "0.4rem 0.75rem", border: "1.5px solid #000", background: "#fff", color: "#000", cursor: "pointer" }}
          >
            <option value="" disabled hidden>Class of...</option>
            {DESIGNER_CLASSES.map((c) => (
              <option key={c} value={c}>{c === "All" ? "All" : klassYear(c)}</option>
            ))}
          </select>
        </div>

        {/* Designer grid — full content width, as many columns as fit */}
        <div className="about-designer-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(13rem, 1fr))", gap: "2.5rem 3rem", padding: "1.5rem 4rem 1.5rem 4rem" }}>
          {[...shownDesigners].sort((a, b) => a.name.localeCompare(b.name, "sv")).map((d, i) => <DesignerCell key={d.name} d={d} index={i} />)}
        </div>
        <SiteFooter />
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
  { label: "Uppercase", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÆÖØ".split("") },
  { label: "Lowercase", chars: "abcdefghijklmnopqrstuvwxyzåäæöø".split("") },
  { label: "Accents", chars: "ÀÁÂÃÇÈÉÊËÌÍÎÏÑÒÓÔÕÙÚÛÜÝàáâãçèéêëìíîïñòóôõùúûüýÿ".split("") },
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

// Glyphs Dukat hides from its panel even though they exist in the font file —
// an explicit per-face display exception (the glyphs are not removed from the font).
const DUKAT_HIDDEN_GLYPHS = new Set(["lozenge", "uni25CC"]);

// Full-width panel: large showcase on the left, categorised character list on the right.
// Coverage is read from the selected font's own cmap: opentype.js for the parseable
// (otf/ttf) faces, and `coverage` (a set of code points read via fontkit) for the
// native WOFF2 variable fonts opentype.js cannot parse. A character is shown only
// when it genuinely exists in that font — never inferred from browser fallback.
function GlyphSection({ font, faceName, otFont, coverage, panelBg, panelText, fontVariationSettings, controls, mobileGlyphSize, desktopGlyphSize, sizeDebug }: { font: string; faceName: string; otFont: opentype.Font | null; coverage: Set<number> | null; panelBg: string; panelText: string; fontVariationSettings?: string; controls?: React.ReactNode; mobileGlyphSize?: string; desktopGlyphSize?: string; sizeDebug?: React.ReactNode }) {
  const groups = CHAR_GROUPS.map((group) => ({
    label: group.label,
    chars: (otFont
      ? group.chars.filter((c) => otFont.charToGlyphIndex(c) > 0)
      : coverage
      ? group.chars.filter((c) => coverage.has(c.codePointAt(0) ?? -1))
      : []
    ).filter((c) => {
      // Dukat-only exception: hide these two glyphs from its Glyphs panel.
      if (faceName !== "Dukat") return true;
      const name = otFont ? otFont.glyphs.get(otFont.charToGlyphIndex(c))?.name : undefined;
      return !(name && DUKAT_HIDDEN_GLYPHS.has(name));
    }),
  })).filter((group) => group.chars.length > 0);

  // Mobile only: categories act as independent accordions, all collapsed on load.
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  const [openGroups, setOpenGroups] = useState<Set<string>>(() => new Set());
  const toggleGroup = (label: string) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label); else next.add(label);
      return next;
    });

  const firstChar = groups[0]?.chars[0] ?? "A";
  const [hovered, setHovered] = useState(firstChar);
  useEffect(() => {
    setHovered(firstChar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otFont, coverage]);

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
    <div className="tf-glyphs" style={{ background: panelBg, padding: "1.5rem", display: "flex", gap: "1.5rem", alignItems: "stretch", transition: "background 0.25s ease" }}>
      {/* Showcase — left. The variable-font / "Regular" controls sit at the top
          of this column so they share the top row with the first glyph category
          heading in the right column. Shares the exact same axis state as the
          Preview panel's controls. */}
      <div className="tf-glyph-showcase" style={{ position: "relative", flex: "0 0 38%", minWidth: 0, display: "flex", flexDirection: "column", gap: "1rem", color: panelText, transition: "color 0.25s ease" }}>
        {controls && (
          <div className="tf-glyph-controls" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem" }}>
            {controls}
          </div>
        )}
        <div className="tf-glyph-stage" style={{ position: "relative", flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "visible" }}>
          {/* Keyed so each glyph gets a fresh node (no stale paint), and padded
              (offset by an equal negative margin) so the element's paint box
              covers ink beyond the line box — outlines outside it were leaving
              fragments behind on repaint. Layout size is unchanged. */}
          <span key={hovered} className="tf-glyph-big" style={{ display: "block", fontFamily: font, fontVariationSettings, fontSize: desktopGlyphSize ?? "clamp(7rem, 18vw, 18rem)", "--glyph-mobile-size": mobileGlyphSize, lineHeight: 1, padding: "0.5em", margin: "-0.5em", overflow: "visible", pointerEvents: "none" } as React.CSSProperties}>{hovered}</span>
          <div style={{ position: "absolute", left: 0, bottom: 0, fontFamily: "Arial, sans-serif", fontSize: "0.8rem", lineHeight: 1.5, color: panelText }}>
            <div>Glyph: {glyphName}</div>
            <div>Unicode: {glyphUnicode}</div>
          </div>
          {sizeDebug}
        </div>
      </div>

      {/* Character list — right, grouped by category */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {groups.map((group) => {
          const open = !isMobile || openGroups.has(group.label);
          return (
          <div key={group.label}>
            {isMobile ? (
              <button
                type="button"
                aria-expanded={open}
                onClick={() => toggleGroup(group.label)}
                style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "Arial, sans-serif", fontSize: "0.8rem", color: panelText, marginBottom: open ? "0.4rem" : 0, textAlign: "left" }}
              >
                <span>{group.label}</span>
                <span aria-hidden="true">{open ? "−" : "+"}</span>
              </button>
            ) : (
            <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.8rem", color: panelText, marginBottom: "0.4rem" }}>
              {group.label}
            </div>
            )}
            {open && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(34px, 1fr))", gap: 2 }}>
              {group.chars.map((g, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(g)}
                  onClick={() => setHovered(g)}
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
            )}
          </div>
          );
        })}
      </div>
    </div>
  );
}

// Fixed-size image field for each typeface page. Reads the current typeface's
// image list, fills the field with cover-cropped images, auto-advances every ~5s
// with a horizontal slide, and opens the clicked image in a contain-fit lightbox.
function WipCarousel({ panelText, images = [] }: { panelText: string; images?: string[] }) {
  const count = images.length;

  // Infinite loop: [last, ...images, first]
  const slides = count > 1 ? [images[count - 1], ...images, images[0]] : images;
  const total = slides.length;

  // Start at index 1 (the real first image)
  const [idx, setIdx] = useState(1);
  const [animated, setAnimated] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);

  // Reset when the typeface (and so its image list) changes.
  useEffect(() => {
    setAnimated(false);
    setIdx(1);
  }, [images]);

  const go = (d: number) => {
    setAnimated(true);
    setIdx((prev) => prev + d);
  };

  // Auto-advance; restarts after every move (manual or automatic) and is paused
  // while the lightbox is open.
  useEffect(() => {
    if (count <= 1 || lightbox) return;
    // If a transitionend was missed (e.g. background tab), snap back into range.
    if (idx <= 0 || idx >= total - 1) {
      const t = window.setTimeout(handleTransitionEnd, 650);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => go(1), 5000);
    return () => window.clearTimeout(t);
  }, [idx, count, lightbox]);

  // Escape closes the lightbox.
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const handleTransitionEnd = () => {
    // Silently snap from clone to real slide with no animation
    if (idx <= 0) {
      setAnimated(false);
      setIdx(count);
    } else if (idx >= total - 1) {
      setAnimated(false);
      setIdx(1);
    }
  };

  const imgStyle: React.CSSProperties = { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", cursor: "zoom-in" };

  const lightboxEl = lightbox && (
    <div
      onClick={() => setLightbox(null)}
      style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
    >
      <img
        src={lightbox}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}
      />
      <button
        onClick={() => setLightbox(null)}
        aria-label="Close"
        style={{ position: "absolute", top: 16, right: 20, background: "none", border: "none", color: "#fff", fontFamily: "Arial, sans-serif", fontSize: "1.8rem", lineHeight: 1, cursor: "pointer" }}
      >
        ×
      </button>
    </div>
  );

  // Empty: keep the reserved field. Single image: no slideshow.
  if (count <= 1) {
    return (
      <>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#fff" }}>
        {images[0] && <img src={images[0]} alt="" onClick={() => setLightbox(images[0])} style={imgStyle} />}
      </div>
      {lightboxEl && createPortal(lightboxEl, document.body)}
      </>
    );
  }

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
    <>
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", background: "#fff" }}>
      <div
        onTransitionEnd={(e) => e.target === e.currentTarget && handleTransitionEnd()}
        style={{
          display: "flex",
          width: `${total * 100}%`,
          height: "100%",
          transform: `translateX(-${(idx / total) * 100}%)`,
          transition: animated ? "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)" : "none",
        }}
      >
        {slides.map((src, i) => (
          <div key={i} style={{ width: `${100 / total}%`, flexShrink: 0, height: "100%", overflow: "hidden" }}>
            <img src={src} alt="" onClick={() => setLightbox(src)} style={imgStyle} />
          </div>
        ))}
      </div>
      <button onClick={() => go(-1)} style={{ ...arrowStyle, left: 12 }} aria-label="Previous">‹</button>
      <button onClick={() => go(1)} style={{ ...arrowStyle, right: 12 }} aria-label="Next">›</button>
    </div>
    {lightboxEl && createPortal(lightboxEl, document.body)}
    </>
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
  // rem — initial size per typeface: desktop uses previewSize, ≤768px uses
  // mobilePreviewSize. Chosen once on open; the Size slider owns it afterwards.
  const [size, setSize] = useState(() =>
    window.matchMedia("(max-width: 768px)").matches
      ? face?.mobilePreviewSize ?? face?.previewSize ?? 16
      : face?.previewSize ?? 16
  );
  const [font, setFont] = useState<opentype.Font | null>(null);
  // Code-point coverage read from the native WOFF2 fonts (via fontkit) for the
  // Glyphs panel, since opentype.js cannot parse WOFF2. Null for otf/ttf faces,
  // which the Glyphs panel reads through the parsed `font` (opentype) instead.
  const [coverage, setCoverage] = useState<Set<number> | null>(null);
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
  // Mobile only: ONE active control shared by Preview and Glyphs. It only picks
  // which control is visible — values live in the states above and never reset.
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 768px)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  const [activeControl, setActiveControl] = useState("size");
  const [controlMenu, setControlMenu] = useState<"preview" | "glyphs" | "preset" | null>(null);
  const [resolvedPresets, setResolvedPresets] = useState<{ name: string; values: Record<string, number> }[]>([]);
  // Mobile Glyphs has its own control picker (axes only — no Size/Space).
  const [glyphControl, setGlyphControl] = useState("wght");
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

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
    setCoverage(null);
    setWeightAxis(null);
    setSpacing(0);
    // Native variable fonts render through the browser using known axis data.
    // opentype.js cannot parse their WOFF2 files, so the Glyphs panel reads real
    // cmap coverage via fontkit (which decodes WOFF2) — never browser fallback.
    if (nativeAxes) {
      const init: Record<string, number> = {};
      for (const a of nativeAxes) init[a.tag] = a.default;
      const presetDefs = VARIABLE_FONT_PRESETS[name] ?? [];
      const staticPresets = presetDefs.every((p) => p.values) ? presetDefs.map((p) => ({ name: p.name, values: p.values! })) : [];
      setResolvedPresets(staticPresets);
      const staticRegular = staticPresets.find((p) => p.name === "Regular");
      setAxisValues(staticRegular ? { ...init, ...staticRegular.values } : init);
      if (face?.file) {
        fetch(face.file)
          .then((res) => res.arrayBuffer())
          .then((buffer) => {
            if (cancelled) return;
            const fk = (fontkit as any).create(new Uint8Array(buffer));
            const cps: number[] = fk?.characterSet ?? [];
            setCoverage(new Set(cps));
            if (presetDefs.length && !staticPresets.length) {
              const named: Record<string, Record<string, number>> = fk?.namedVariations ?? {};
              const byKey = new Map(Object.entries(named).map(([k, v]) => [presetKey(k), v]));
              const resolved = presetDefs
                .map((p) => ({ name: p.name, values: byKey.get(presetKey(p.name)) }))
                .filter((p): p is { name: string; values: Record<string, number> } => !!p.values)
                .map((p) => ({ name: p.name, values: Object.fromEntries(nativeAxes.filter((a) => a.tag in p.values).map((a) => [a.tag, p.values[a.tag]])) }));
              setResolvedPresets(resolved);
              const regular = resolved.find((p) => p.name === "Regular");
              if (regular) setAxisValues((prev) => ({ ...prev, ...regular.values }));
            }
          })
          .catch(() => {
            if (!cancelled) setCoverage(null);
          });
      }
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
    const shown = name === "Crypto" ? "Crypto Mono" : name;
    const seed = name === "Last Call" ? "LASTCALL" : face?.casing === "upperInitial" ? shown.toUpperCase() : shown;
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

  // Auto-grow the preview to its real rendered height, so both Enter and natural
  // wrapping add rows. Re-measured once webfonts finish loading.
  useLayoutEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    const fit = () => {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
  });

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

  // Variable-font controls shared between the Preview panel and the Glyphs
  // panel so both interfaces read and write the exact same axis state. Null for
  // non-variable typefaces (Preview falls back to a "Regular" label).
  const renderAxis = (axis: VFAxis) =>
        axis.onOff ? (
          <div key={axis.tag} style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: panelText, display: "inline-grid", textAlign: "left" }}>
              {/* Invisible "Regular" reserves a fixed width so toggling never shifts layout. */}
              <span aria-hidden style={{ gridArea: "1 / 1", visibility: "hidden" }}>Regular</span>
              <span style={{ gridArea: "1 / 1" }}>{(axisValues[axis.tag] ?? axis.default) >= axis.max ? "Italic" : "Regular"}</span>
            </span>
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
        );
  const weightControl = weightAxis ? (
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
  ) : null;
  const variableControls = isNative ? <>{nativeAxes!.map(renderAxis)}</> : weightControl;

  const sizeControl = (
    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
      <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: panelText }}>Size</span>
      <input type="range" min={3} max={16} step={0.5} value={size} onChange={(e) => setSize(Number(e.target.value))} className="size-slider" />
    </div>
  );
  const spaceControl = (
    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
      <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: panelText }}>Space</span>
      <input type="range" min={0} max={0.2} step={0.01} value={spacing} onChange={(e) => setSpacing(Number(e.target.value))} className="size-slider" />
    </div>
  );

  // Every control this typeface actually has — Size, Space, then its real axes.
  const mobileOptions: { key: string; label: string; node: React.ReactNode }[] = [
    { key: "size", label: "Size", node: sizeControl },
    { key: "space", label: "Space", node: spaceControl },
    ...(isNative
      ? nativeAxes!.map((a) => ({ key: a.tag, label: a.label, node: renderAxis(a) }))
      : weightControl
      ? [{ key: "wght", label: "Weight", node: weightControl }]
      : []),
  ];
  // Mobile Glyphs: only the real sliders (Svek's on/off italic is rendered as its toggle instead).
  const glyphOptions = mobileOptions.filter((o) => o.key !== "size" && o.key !== "space" && !nativeAxes?.find((a) => a.tag === o.key)?.onOff);
  const glyphToggleAxes = nativeAxes?.filter((a) => a.onOff) ?? [];

  // Mobile compact control row: [active control] [options button + menu].
  const mobileControlRow = (
    where: "preview" | "glyphs",
    options = mobileOptions,
    activeKey = activeControl,
    setActiveKey: (k: string) => void = setActiveControl,
  ) => {
    const activeOption = options.find((o) => o.key === activeKey) ?? options[0];
    return (
    <div className="tf-mobile-control" style={{ position: "relative", display: "flex", alignItems: "center", gap: 12, width: "100%", color: panelText }}>
      <div className="tf-mobile-control-active" style={{ flex: 1, minWidth: 0, display: "flex" }}>{activeOption.node}</div>
      <button
        type="button"
        aria-label="Choose control"
        aria-haspopup="menu"
        aria-expanded={controlMenu === where}
        onClick={() => setControlMenu((m) => (m === where ? null : where))}
        style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", border: `1.5px solid ${panelText}`, background: controlMenu === where ? panelText : "transparent", color: controlMenu === where ? panelBg : panelText, cursor: "pointer", padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {/* Same "›" glyph as the slideshow arrows, turned to point down (up when open). */}
        <span aria-hidden="true" style={{ display: "block", fontSize: "1.1rem", lineHeight: 1, transform: `rotate(${controlMenu === where ? -90 : 90}deg)`, transition: "transform 0.15s ease" }}>›</span>
      </button>
      {controlMenu === where && (
        <div role="menu" style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 5, minWidth: 128, background: panelBg, color: panelText, border: "1.5px solid rgba(128,128,128,0.6)", borderRadius: 8, padding: 4, boxShadow: "0 6px 18px rgba(0,0,0,0.18)" }}>
          {options.map((o) => (
            <button
              key={o.key}
              type="button"
              role="menuitemradio"
              aria-checked={o.key === activeOption.key}
              onClick={() => { setActiveKey(o.key); setControlMenu(null); }}
              style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "0.5rem 0.65rem", border: "none", borderRadius: 5, background: o.key === activeOption.key ? panelText : "transparent", color: o.key === activeOption.key ? panelBg : panelText, fontFamily: "Arial, sans-serif", fontSize: "0.9rem", textAlign: "left", cursor: "pointer" }}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
    );
  };

  // Glyphs preset dropdown — writes into axisValues; the label is derived by exact match.
  const activePreset = resolvedPresets.find((p) => Object.entries(p.values).every(([t, v]) => axisValues[t] === v));
  const presetControl = resolvedPresets.length > 0 ? (
    <div style={{ position: "relative", flexShrink: 0, color: panelText }}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={controlMenu === "preset"}
        onClick={() => setControlMenu((m) => (m === "preset" ? null : "preset"))}
        style={{ display: "flex", alignItems: "center", gap: 6, maxWidth: "42vw", border: "none", background: "transparent", color: panelText, padding: 0, cursor: "pointer", fontFamily: "Arial, sans-serif", fontSize: "0.9rem", whiteSpace: "nowrap" }}
      >
        <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{activePreset?.name ?? "Custom"}</span>
        <span aria-hidden="true">↓</span>
      </button>
      {controlMenu === "preset" && (
        <div role="menu" style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, zIndex: 5, minWidth: 128, maxWidth: "70vw", maxHeight: 280, overflowY: "auto", background: panelBg, color: panelText, border: "1.5px solid rgba(128,128,128,0.6)", borderRadius: 8, padding: 4, boxShadow: "0 6px 18px rgba(0,0,0,0.18)" }}>
          {resolvedPresets.map((p) => (
            <button
              key={p.name}
              type="button"
              role="menuitemradio"
              aria-checked={p === activePreset}
              onClick={() => { setAxisValues((prev) => ({ ...prev, ...p.values })); setControlMenu(null); }}
              style={{ display: "block", width: "100%", padding: "0.5rem 0.65rem", border: "none", borderRadius: 5, background: p === activePreset ? panelText : "transparent", color: p === activePreset ? panelBg : panelText, fontFamily: "Arial, sans-serif", fontSize: "0.9rem", textAlign: "left", whiteSpace: "nowrap", cursor: "pointer" }}
            >
              {p.name}
            </button>
          ))}
        </div>
      )}
    </div>
  ) : null;

  // Static-typeface fallback label, shared by Preview and Glyphs so both show
  // "Regular" in the same control-area position.
  const regularLabel = (
    <div style={{ width: 96, flexShrink: 0, fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: panelText }}>
      Regular
    </div>
  );

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

  const aboutText = `${(face as { displayName?: string }).displayName ?? face.name} is a ${face.klass} typeface designed by ${face.designer} at OTF License. Drawn for editorial and display use, it balances character and clarity across sizes. More on its history, features, and language support is coming soon.`;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: pageBg }}>
      <NavBar onNavigate={onNavigate} bg={pageBg} fg={pageText} logoHeight="3rem" starColor={face.bg} linkScale={0.7} showEyes={showEyes} onEyesHover={onEyesHover} />
      <div className="tf-page flex-1 flex flex-col px-10" style={{ gap: 12, paddingTop: "2.5rem", paddingBottom: "3rem" }}>
        {/* Top column — big editable preview, controls pinned at the top */}
        <div className="tf-preview" style={{ position: "relative", background: panelBg, minHeight: "52vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "4.5rem", paddingBottom: "2.5rem", transition: "background 0.25s ease" }}>
          {/* Size slider + colour dots, side by side and centred at the top. */}
          <div className="tf-preview-controls" style={{ position: "absolute", top: 16, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 20, zIndex: 2, color: panelText }}>
            {isMobile && mobileControlRow("preview")}
            {/* Size */}
            {!isMobile && <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
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
            </div>}
            {/* Space — em letter spacing; numeric value intentionally hidden. */}
            {!isMobile && <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
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
            </div>}
            <div className="tf-color-dots" style={{ display: "flex", gap: 10 }}>
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
                    border: `1.5px solid ${mode === m ? "transparent" : panelText}`,
                    cursor: "pointer",
                    padding: 0,
                    outline: mode === m ? `2px solid ${panelText}` : "none",
                    outlineOffset: 2,
                  }}
                />
              ))}
            </div>
            {/* Variable-font controls — native fonts expose their configured axes,
                SVG variable fonts keep the wght slider; static fonts show no label. */}
            {!isMobile && variableControls}
          </div>
          {/* Editable preview — one row by default, grows with content up to four rows.
              Extra bottom room keeps descenders on the last line fully visible. */}
          <div className="tf-preview-field" style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "visible", padding: "0 2rem" }}>
            <div ref={boxRef} style={{ position: "relative", width: "100%" }}>
              <textarea
                ref={textareaRef}
                value={previewText}
                onChange={(e) => {
                  if (e.target.value.split("\n").length <= 4) setTop(e.target.value);
                }}
                rows={1}
                style={{
                  ...fieldBase,
                  display: "block",
                  padding: 2,
                  fontSize: `${size}rem`,
                  lineHeight: 1.3,
                  textAlign: "center",
                  overflow: "hidden",
                  // A textarea always clips its own content box, so its glyphs are
                  // drawn transparent and the visible text comes from the unclipped
                  // mirror below. The caret and selection stay native.
                  color: "transparent",
                  caretColor: panelText,
                }}
              />
              {/* Visible preview text — native browser rendering through the real
                  @font-face family, laid out identically to the textarea but with
                  overflow visible so extreme outlines are never cropped. */}
              <div
                aria-hidden
                style={{
                  ...fieldBase,
                  background: "transparent",
                  position: "absolute",
                  inset: 0,
                  padding: 2,
                  fontSize: `${size}rem`,
                  lineHeight: 1.3,
                  textAlign: "center",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  overflow: "visible",
                  pointerEvents: "none",
                  color: panelText,
                }}
              >
                {previewText.endsWith("\n") ? previewText + "\u200b" : previewText}
              </div>
            </div>
          </div>
        </div>

        {/* Designer name + class in a full-width right-to-left marquee */}
        <div style={{ display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div key={face.name} className="tf-designer-marquee-enter" style={{ overflow: "hidden", whiteSpace: "nowrap", flex: 1 }}>
            <div className="tf-designer-marquee-track" style={{ display: "inline-flex" }}>
              {Array.from({ length: 24 }).map((_, k) => (
                <span
                  key={k}
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "1rem", fontWeight: "normal", color: pageText, paddingRight: "2.5rem", whiteSpace: "nowrap" }}
                >
                  {k % 2 === 0 ? face.designer : klassLabel(face.klass)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Info (left) + Work-in-progress images (right), side by side */}
        <div className="tf-info-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: GAP, alignItems: "stretch" }}>
          {/* Info — left: description + details */}
          <div className="tf-info" style={{ position: "relative", background: panelBg, color: panelText, padding: "1.75rem", display: "flex", flexDirection: "column", transition: "background 0.25s ease, color 0.25s ease" }}>
            <p className="tf-about-text" style={{ fontFamily: face.font, fontVariationSettings: name === "Brus" ? '"slnt" 0' : undefined, fontSize: `${(isMobile ? ABOUT_SIZE[face.name]?.mobile : ABOUT_SIZE[face.name]?.desktop) ?? 0.95}rem`, color: panelText, opacity: 0.85, margin: "0 0 1.75rem", lineHeight: 1.6 }}>
              {applyCase(aboutText)}
            </p>
            <div style={{ marginTop: "auto", fontFamily: "Arial, sans-serif", fontSize: "0.8rem", color: panelText, display: "flex", flexDirection: "column-reverse" }}>
              {/* Listed bottom-up: the container is column-reverse, so this
                  renders First sketched → Format from top to bottom. */}
              {[
                ["EULA:", ""],
                ["Format:", "ttf, otf, woff"],
                ["Range:", name === "Ella"
                  ? "Thin Serif, Thin, ExtraLight, ExtraLight Serif, Light Serif, Light, Light Serif Italic, Regular Serif, Regular, Regular Italic, Medium Serif, Medium, Medium Serif Italic, Medium Italic, SemiBold, SemiBold Serif, Bold Serif, Bold, Bold Serif Italic"
                  : name === "Svek"
                    ? "Regular, Italic"
                    : variableControls
                      ? "Light, Medium, Regular, Italic, Bold"
                      : "Regular"],
                ["Version:", "1.0"],
                ["Last update:", "October 2026"],
                ["Released:", "October 2026"],
                ["First sketched:", "October 2025"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", gap: "0.75rem", padding: "0.3rem 0" }}>
                  <span style={{ flex: "0 0 42%", fontWeight: "bold" }}>{label}</span>
                  {label === "EULA:" ? (
                    <a href="/faq" onClick={(e) => { e.preventDefault(); onNavigate({ id: "contact" }); }} style={{ flex: 1, color: "inherit", textDecoration: "underline" }}>Click here</a>
                  ) : (
                    <span style={{ flex: 1 }}>{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image field — right */}
          <div className="tf-gallery" style={{ position: "relative", overflow: "hidden", background: panelBg, transition: "background 0.25s ease" }}>
            <WipCarousel panelText={panelText} images={face.gallery ?? GALLERY_IMAGES} />
          </div>
        </div>

        {/* Full-width Glyphs panel — showcase (left) + character list (right).
            Extra top margin so the gap above the panel matches the preview→columns
            whitespace (which also spans the designer marquee row between them). */}
        <div className="tf-glyphs-wrap" style={{ marginTop: "calc(1.2rem + 12px)" }}>
          <GlyphSection font={face.font} faceName={face.name} otFont={font} coverage={coverage} panelBg={panelBg} panelText={panelText} fontVariationSettings={fontVariationSettings}
            controls={presetControl ? <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", minWidth: 0 }}>{presetControl}<div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 12 }}>{isMobile ? (
              glyphOptions.length > 1
                ? mobileControlRow("glyphs", glyphOptions, glyphControl, setGlyphControl)
                : glyphOptions.length === 1
                ? glyphOptions[0].node
                : regularLabel
            ) : variableControls}</div></div> : isMobile ? (
              glyphToggleAxes.length > 0
                ? <>{glyphToggleAxes.map(renderAxis)}</>
                : glyphOptions.length > 1
                ? mobileControlRow("glyphs", glyphOptions, glyphControl, setGlyphControl)
                : glyphOptions.length === 1
                ? glyphOptions[0].node
                : regularLabel
            ) : variableControls ?? regularLabel}
            mobileGlyphSize={`${GLYPH_SHOWCASE_MOBILE}rem`}
            desktopGlyphSize={`${GLYPH_SHOWCASE_DESKTOP[face.name] ?? 28}rem`}
          />
        </div>

        {/* Gumroad purchase widget */}
        <div className="tf-buy" style={{ marginTop: GAP, display: "flex", justifyContent: "center", maxWidth: "100%" }}>
          <GumroadInlineCheckout
            key={face.gumroad}
            url={face.gumroad ?? "https://otflicense.gumroad.com"}
            productId={GUMROAD_PRODUCT_IDS[face.name]}
          />
        </div>
        <SiteFooter color={pageText} />
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

// Scroll speed (px/s) of the marquee band, measured from its rendered track so
// the nav-button hover loops can run at exactly the same tempo.
let bandSpeedPxPerSec = 80;

function MarqueeBand({ direction = "forward", onNavigate, interactive = true }: { direction?: "forward" | "reverse"; onNavigate?: (p: Page) => void; interactive?: boolean }) {
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
      onClick={() => {
        if (!interactive) return;
        onNavigate ? onNavigate({ id: "bundle" }) : window.location.assign("/bundle");
      }}
      tabIndex={interactive ? 0 : -1}
      aria-hidden={interactive ? undefined : true}
      className="marquee-band"
      style={{ display: "block", width: "100%", overflow: "hidden", background: bg, padding: "0.85rem 0", border: "none", cursor: interactive ? "pointer" : "default", transition: "background 0.3s ease" }}
    >
      <div
        ref={(el) => { if (el && el.scrollWidth) bandSpeedPxPerSec = el.scrollWidth / 2 / 80; }}
        style={{ display: "inline-flex", animation: `${direction === "reverse" ? "marqueeReverse" : "marquee"} 80s linear infinite` }}
      >{words}</div>
    </button>
  );
}

const BUNDLE_URL = "https://otflicense.gumroad.com/l/megabundlepack";
const BUNDLE_PRODUCT_ID = "hrcidq";

function BundlePage({ onNavigate, showEyes, onEyesHover }: { onNavigate: (p: Page) => void; showEyes?: boolean; onEyesHover?: () => void }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      <NavBar onNavigate={onNavigate} onBundlePage showEyes={showEyes} onEyesHover={onEyesHover} />
      <div style={{ flex: "1 0 auto", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2rem", paddingBottom: "5rem" }}>
        <GumroadInlineCheckout url={BUNDLE_URL} productId={BUNDLE_PRODUCT_ID} minHeight={2600} />
        <SiteFooter />
      </div>
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200 }}>
        <MarqueeBand direction="reverse" onNavigate={onNavigate} />
      </div>
    </div>
  );
}

function HomePage({ onIntroComplete }: { onIntroComplete: () => void }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = window.setTimeout(onIntroComplete, reducedMotion ? 100 : 2700);
    return () => window.clearTimeout(timeout);
  }, [onIntroComplete]);

  return (
    <div className="intro-sequence">
      <div className="intro-sticker-shell">
        <img className="intro-sticker" src={introGif} alt={BRAND} />
      </div>

      {/* Top band — travels right to left */}
      <div className="intro-band intro-band-top">
        <MarqueeBand direction="forward" interactive={false} />
      </div>

      {/* Bottom band — travels left to right */}
      <div className="intro-band intro-band-bottom">
        <MarqueeBand direction="reverse" interactive={false} />
      </div>
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

// Collapsible licensing section: invisible at rest, the contact-cell notch shape
// in a palette colour on hover, held while open and through the collapse.
function FaqItem({ q, a = "", color, children }: { q: string; a?: string; color: string; children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [closing, setClosing] = useState(false);
  const active = hover || open || closing;
  const fg = active ? (LIGHT_BAND_COLORS.has(color) ? "#000" : "#fff") : "#000";
  const toggle = () => {
    if (open) {
      setClosing(true);
      window.setTimeout(() => setClosing(false), 350);
    }
    setOpen((o) => !o);
  };
  return (
    <div
      className="faq-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ marginBottom: "1.4rem", padding: "1.1rem 1.25rem", marginLeft: "-1.25rem", marginRight: "-1.25rem", background: active ? color : "transparent", color: fg, WebkitMask: active ? NOTCH_MASK : undefined, mask: active ? NOTCH_MASK : undefined }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={toggle}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", width: "100%", background: "none", border: "none", padding: 0, cursor: "pointer", color: "inherit", textAlign: "left" }}
      >
        <span style={{ fontFamily: "Arial, sans-serif", fontSize: "1.45rem", fontWeight: "bold", textDecoration: "underline", textUnderlineOffset: "5px", textDecorationThickness: "2px" }}>{q}</span>
        {/* Same "›" glyph as the slideshow/options arrows: down when closed, up when open. */}
        <span aria-hidden="true" style={{ flexShrink: 0, width: "1.6rem", textAlign: "center", marginLeft: "auto", fontSize: "1.6rem", lineHeight: 1, transform: `rotate(${open ? -90 : 90}deg)`, transition: "transform 0.3s ease" }}>›</span>
      </button>
      <div style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr", transition: "grid-template-rows 0.35s ease" }}>
        <div style={{ overflow: "hidden" }}>
          {children ?? a.split("\n\n").map((para, j) => (
            <p key={j} style={{ fontFamily: "Arial, sans-serif", fontSize: "1.05rem", color: "inherit", lineHeight: 1.65, margin: "0.7rem 0 0" }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqPage({ onNavigate, showEyes, onEyesHover }: { onNavigate: (p: Page) => void; showEyes?: boolean; onEyesHover?: () => void }) {
  const faqSections = [
    ...FAQ_ITEMS.map(({ q, a }, i) => <FaqItem key={i} q={q} a={a} color={PALETTE[i % PALETTE.length]} />),
    // Contact block
    <FaqItem key="contact" q="Contact" color={PALETTE[FAQ_ITEMS.length % PALETTE.length]}>
      <p style={{ fontFamily: "Arial, sans-serif", fontSize: "1.05rem", color: "inherit", lineHeight: 1.65, margin: "0.7rem 0 0" }}>
        For licensing questions, large organisation inquiries, or anything else:{" "}
        <a href="mailto:otflicense@gmail.com" style={{ color: "inherit" }}>otflicense@gmail.com</a>
      </p>
    </FaqItem>,
  ].map((node, i) => ({ i, node }));
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar onNavigate={onNavigate} showEyes={showEyes} onEyesHover={onEyesHover} />
      <div className="faq-grid flex-1 px-10" style={{ display: "flex", alignItems: "flex-start", gap: "4rem", width: "100%", boxSizing: "border-box", paddingTop: "5.5rem", paddingBottom: "1rem" }}>
        {/* Two independent stacks (even items left, odd right) so an open section
            only pushes down its own column. On mobile the stacks dissolve and
            `order` restores the original sequence. */}
        {[0, 1].map((col) => (
          <div key={col} className="faq-stack" style={{ flex: "1 1 0", minWidth: 0, display: "flex", flexDirection: "column" }}>
            {faqSections.filter((_, i) => i % 2 === col).map(({ i, node }) => (
              <div key={i} style={{ order: i }}>{node}</div>
            ))}
          </div>
        ))}
      </div>
      <SiteFooter />
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
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setEntered(true)));
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setColorIdx((prev) => (prev + 1) % PALETTE.length);
    }, 1200);
    return () => clearInterval(id);
  }, []);

  const modalBg = PALETTE[colorIdx];
  const modalText = LIGHT_BAND_COLORS.has(modalBg) ? "#000" : "#fff";

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
          else window.location.assign("/bundle");
        }}
        style={{
          width: "min(80vw, 420px)",
          aspectRatio: "1",
          boxSizing: "border-box",
          background: modalBg,
          border: "none",
          padding: "3rem",
          textAlign: "center",
          cursor: "pointer",
          transform: entered ? "translateY(0)" : "translateY(24px)",
          transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "2rem", color: modalText, margin: "0 0 0.75rem", transition: "color 0.3s ease" }}>
          Good job!
        </p>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "1.1rem", color: modalText, margin: 0, transition: "color 0.3s ease" }}>
          Click to redeem your offer.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>(() => {
    const initialPage = pageFromPath(window.location.pathname);
    return initialPage.id === "home" ? { id: "foundry" } : initialPage;
  });
  const [showIntro, setShowIntro] = useState(
    () => pageFromPath(window.location.pathname).id === "home",
  );
  const [landingEntrance, setLandingEntrance] = useState(
    () => pageFromPath(window.location.pathname).id === "home",
  );
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
    if (p.id === "home") {
      setPage({ id: "foundry" });
      setLandingEntrance(true);
      setShowIntro(true);
      return;
    }
    transitionTo(p);
  }

  function completeIntro() {
    window.history.replaceState(null, "", "/shop");
    setShowIntro(false);
    // Keep the entrance class until the synchronized nav reveal has finished.
    window.setTimeout(() => setLandingEntrance(false), 860);
  }

  useEffect(() => {
    const initialPage = pageFromPath(window.location.pathname);
    const canonicalPath = pageToPath(initialPage);
    if (window.location.pathname !== canonicalPath) {
      window.history.replaceState(null, "", canonicalPath);
    }

    const handlePopState = () => {
      const nextPage = pageFromPath(window.location.pathname);
      if (nextPage.id === "home") {
        setPage({ id: "foundry" });
        setLandingEntrance(true);
        setShowIntro(true);
      } else {
        transitionTo(nextPage);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const cols = 4;
  const colGap = 48;
  const rowGap = 24;
  const cellWidth = `calc((100% - ${colGap * (cols - 1)}px) / ${cols} * 0.50)`;

  // The fixed marquee overlays the viewport bottom; publish its height so the
  // footer (All rights reserved + eyes) reserves matching space above it.
  const fixedMarqueeRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const root = document.documentElement;
    const el = fixedMarqueeRef.current;
    const update = () => {
      const h = el && getComputedStyle(el).position === "fixed" ? el.offsetHeight : 0;
      root.style.setProperty("--fixed-marquee-h", `${h}px`);
    };
    update();
    const ro = el && typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    if (el) ro?.observe(el);
    window.addEventListener("resize", update);
    return () => { ro?.disconnect(); window.removeEventListener("resize", update); root.style.setProperty("--fixed-marquee-h", "0px"); };
  }, [page.id]);

  // Easter egg is only active on the foundry/sticker page.
  const foundryEyesProps = { showEyes: eyesPhase === 0, onEyesHover: handleEyesHover };
  const staticEyesProps  = { showEyes: true };

  let content: React.ReactNode;
  if (page.id === "about")    content = <SimplePage title="ABOUT" onNavigate={navigate} {...staticEyesProps} />;
  else if (page.id === "contact")  content = <FaqPage onNavigate={navigate} {...staticEyesProps} />;
  else if (page.id === "bundle")   content = <BundlePage onNavigate={navigate} {...staticEyesProps} />;
  else if (page.id === "typeface") content = <TypefacePage name={page.name} onNavigate={navigate} {...staticEyesProps} />;
  else content = (
    <div className={`shop-root${landingEntrance ? " landing-enter" : ""}`} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff" }}>
      <div style={{ background: "#fff", flexShrink: 0 }}>
        <NavBar onNavigate={navigate} onBrand={() => navigate({ id: "home" })} padding="2.5rem 4.5rem 1.5rem" {...foundryEyesProps} />
      </div>
      {/* overflow visible + raised layer so hovered stickers aren't cropped by the band edges */}
      <div className="shop-stage" style={{ flex: "1 0 auto", overflow: "visible", position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem 3rem" }}>
        <div className="shop-grid" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", rowGap }}>
          <div className="shop-row" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", columnGap: colGap }}>
            {shopTypefaces.slice(0, 6).map((face, i) => (
              <Cell key={face.name} face={face} width={cellWidth} onNavigate={navigate} nudgeX={SHOP_STICKER_LAYOUT[face.name].x} nudgeY={SHOP_STICKER_LAYOUT[face.name].y} rotation={SHOP_STICKER_LAYOUT[face.name].rotation} index={shopTypefaces.indexOf(face)} />
            ))}
          </div>
          <div className="shop-row" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", columnGap: colGap, marginTop: rowGap * 2 }}>
            {shopTypefaces.slice(6, 11).map((face, i) => (
              <Cell key={face.name} face={face} width={cellWidth} onNavigate={navigate} nudgeX={SHOP_STICKER_LAYOUT[face.name].x} nudgeY={SHOP_STICKER_LAYOUT[face.name].y} rotation={SHOP_STICKER_LAYOUT[face.name].rotation} index={shopTypefaces.indexOf(face)} />
            ))}
          </div>
          <div className="shop-row" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", columnGap: colGap * 2 }}>
            {shopTypefaces.slice(11).map((face, i) => (
              <Cell key={face.name} face={face} width={cellWidth} onNavigate={navigate} nudgeX={SHOP_STICKER_LAYOUT[face.name].x} nudgeY={SHOP_STICKER_LAYOUT[face.name].y} rotation={SHOP_STICKER_LAYOUT[face.name].rotation} index={shopTypefaces.indexOf(face)} />
            ))}
          </div>
        </div>
      </div>
      <div className="shop-bottom-marquee" style={{ flexShrink: 0, position: "relative", zIndex: 2 }}>
        <MarqueeBand direction="reverse" onNavigate={navigate} />
      </div>
    </div>
  );

  return (
    <>
      {content}
      {showIntro && <HomePage onIntroComplete={completeIntro} />}

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
        <div ref={fixedMarqueeRef} className={page.id === "typeface" ? "tf-buy-marquee" : undefined} style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200 }}>
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
                .replace("<svg ", `<svg preserveAspectRatio="${window.innerWidth <= 768 ? "xMidYMid slice" : "none"}" style="width:100%;height:100%;display:block" `),
            }}
          />
        </div>
      )}
    </>
  );
}
