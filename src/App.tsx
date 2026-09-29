1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
import { useState, useRef, useEffect } from "react";
import type React from "react";
import * as opentype from "opentype.js";
import specCheiron from "./imports/simoncheiron_spec.png";
import galleryImg1 from "./imports/gallery-1.jpg";
import galleryImg2 from "./imports/gallery-2.jpg";
import galleryImg3 from "./imports/gallery-3.jpg";
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
  | { id: "typeface"; name: string };

function typefaceSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function pageToPath(page: Page) {
  if (page.id === "home") return "/intro";
  if (page.id === "foundry") return "/shop";
  if (page.id === "about") return "/about";
  if (page.id === "contact") return "/faq";
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
  { name: "Last Call",    designer: "Emma Ljungqvist",    klass: "VK27", bg: "#0074ff", fg: W, img: specLastCall, font: "'Last Call', sans-serif", file: "/fonts/LASTCALLVF.woff2", scale: 1.50, gumroad: "https://otflicense.gumroad.com/l/lastcall?wanted=true" },
  { name: "XOXO",        designer: "Emma Tungelstedt",   klass: "VK27", bg: "#ff2cb2", fg: W, img: specXOXO, font: "'XOXO', sans-serif", file: "/fonts/emmaxoxo.otf", scale: 1.27, gumroad: "https://otflicense.gumroad.com/l/oilldc?wanted=true" },
  { name: "Liljan",         designer: "Enya Borg",        klass: "VK27", bg: "#ff5756", fg: W, img: specLiljan, font: "'Liljan', sans-serif", file: "/fonts/enyaliljan.otf", casing: "lower", scale: 0.84, gumroad: "https://otflicense.gumroad.com/l/liljan?wanted=true" },
  { name: "Kurir",       designer: "Fahed Dehchar",     klass: "VK27", bg: "#fff800", fg: B, img: specKurir, font: "'Kurir', sans-serif", file: "/fonts/fahedkurir.otf", scale: 1.42 },
  // — middle —
