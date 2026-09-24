import { useState, useRef, useEffect } from "react";
import type React from "react";
import * as opentype from "opentype.js";
import img1 from "./imports/_1.png";
import img2 from "./imports/2.png";
import img3 from "./imports/3.png";
import img4 from "./imports/4.png";
import img5 from "./imports/5.png";
import img6 from "./imports/6.png";
import img7 from "./imports/7.png";
import img8 from "./imports/8.png";
import img9 from "./imports/9.png";
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

type Page =
  | { id: "home" }
  | { id: "foundry" }
  | { id: "about" }
  | { id: "licensing" }
  | { id: "contact" }
  | { id: "typeface"; name: string };

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
  { name: "Dukat",    designer: "Alva Kinneholm",  klass: "VK27", bg: "#ff2cb2", fg: W, img: specDukat, font: "'Dukat', sans-serif", file: "/fonts/alvadukat.otf" },
  { name: "Ella",        designer: "Caspar Broms",   klass: "VK27", bg: "#00ab53", fg: W, img: specElla, font: "'Ella', sans-serif", file: "/fonts/casparella.ttf" },
  { name: "Last Call",    designer: "Emma Ljungkvist",    klass: "VK27", bg: "#0074ff", fg: W, img: specLastCall, font: "'Last Call', sans-serif", file: "/fonts/emmalastcall.ttf" },
  { name: "XOXO",        designer: "Emma Tungelstedt",   klass: "VK27", bg: "#ff2cb2", fg: W, img: specXOXO, font: "'XOXO', sans-serif", file: "/fonts/emmaxoxo.otf" },
  { name: "Liljan",         designer: "Enya Borg",        klass: "VK27", bg: "#ff5756", fg: W, img: specLiljan, font: "'Liljan', sans-serif", file: "/fonts/enyaliljan.otf" },
  { name: "Kurir",       designer: "Fahed Dehchar",     klass: "VK27", bg: "#fff800", fg: B, img: specKurir, font: "'Kurir', sans-serif", file: "/fonts/fahedkurir.otf" },
  { name: "Galanite",         designer: "Hannah Mårtensson",     klass: "VK27", bg: "#fff800", fg: B, img: specGalanite, font: "'Galanite', sans-serif", file: "/fonts/hannahgalanite.ttf" },
  { name: "Facit",        designer: "Jesper Smeding",        klass: "VK27", bg: "#ff1d38", fg: W, img: specFacit, font: "'Facit', sans-serif", file: "/fonts/jesperfacit.otf" },
  { name: "Mormor",         designer: "Lawrence Ponsonby",   klass: "VK27", bg: "#ff5756", fg: W, img: specMormor, font: "'Mormor', sans-serif", file: "/fonts/lawrencemormor_v2.otf" },
  { name: "Brus",         designer: "Linn Willebrand",    klass: "VK27", bg: "#00ab53", fg: W, img: specBrus, font: "'Brus', sans-serif", file: "/fonts/linnbrus.ttf" },
  { name: "Crypto",         designer: "Lovisa Åkerblom",   klass: "VK27", bg: "#0074ff", fg: W, img: specCrypto, font: "'Crypto', sans-serif", file: "/fonts/lovisacrypto.otf" },
  { name: "Uber",         designer: "Silje Nordback", klass: "VK27", bg: "#ff1d38", fg: W, img: specUber, font: "'Uber', sans-serif", file: "/fonts/siljeuber.otf" },
  { name: "Cheiron",         designer: "Simon Grey",      klass: "VK27", bg: "#c3872f", fg: W, img: img4, font: "'Cheiron', sans-serif", file: "/fonts/simoncheiron.ttf" },
  { name: "Svek",        designer: "Tindra Berglund",    klass: "VK27", bg: "#0074ff", fg: W, img: specSvek, font: "'Svek', sans-serif", file: "/fonts/tindrasvek.ttf" },
  { name: "Sonja",         designer: "Ve Örnehed",    klass: "VK27", bg: "#c3872f", fg: W, img: specSonja, font: "'Sonja', sans-serif", file: "/fonts/vesonja.otf" },
  { name: "BIP",         designer: "Vivi Tang",  klass: "VK27", bg: "#c3872f", fg: W, img: specBip, font: "'BIP', sans-serif", file: "/fonts/vivibip.ttf" },
];

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

function NameCell({ d }: { d: typeof designers[0] }) {
  const [hover, setHover] = useState(false);
  const R = 12;
  const notch = `radial-gradient(circle ${R}px at 50% 0, transparent ${R}px, #000 ${R + 1}px), radial-gradient(circle ${R}px at 50% 100%, transparent ${R}px, #000 ${R + 1}px)`;
  const linkStyle: React.CSSProperties = { color: "inherit", textDecoration: "underline", cursor: "pointer" };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        WebkitMaskImage: notch,
        WebkitMaskComposite: "source-in",
        maskImage: notch,
        maskComposite: "intersect",
        background: hover ? d.color : "#fff",
        color: hover ? d.textColor : "#000",
        padding: "1.5rem 1.5rem",
        minHeight: 112,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "background 0.2s ease, color 0.2s ease",
      }}
    >
      <div style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "1.05rem" }}>{d.name}</div>
      <div style={{ marginTop: "0.4rem", display: "flex", gap: "1rem", fontFamily: "Arial, sans-serif", fontSize: "0.8rem" }}>
        <a href={`https://${d.site}`} target="_blank" rel="noopener noreferrer" style={linkStyle}>Website</a>
        <a href={`https://instagram.com/${d.social}`} target="_blank" rel="noopener noreferrer" style={linkStyle}>Social</a>
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

function Cell({ face, width, onNavigate }: {
  face: typeof typefaces[0];
  width: string;
  onNavigate: (p: Page) => void;
}) {
  const [hovered, setHovered] = useState(false);
  // Each cell gets its own random tilt, generated once and stable across re-hovers.
  const [tilt] = useState(() => Math.random() * 22 - 11); // -11°..11°
  // Slight resting rotation so cells aren't perfectly upright (never upside down).
  const [rest] = useState(() => Math.random() * 16 - 8); // -8°..8°
  // Stable random scatter offset — keeps left-to-right order but breaks up the rows.
  const [offX] = useState(() => Math.random() * 44 - 22); // -22..22px
  const [offY] = useState(() => Math.random() * 80 - 40); // -40..40px

  // Only the PNG itself is clickable; the wrapper just carries the hover tilt/offset.
  return (
    <div
      className="cell"
      style={{ width, display: "flex", alignItems: "flex-start", pointerEvents: "none", transform: `translate(${offX}px, ${offY}px)` }}
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
          transform: hovered ? `rotate(${tilt}deg)` : `rotate(${rest}deg)`,
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

function NavBar({ onNavigate, bg = "#fff", fg = "#000", onBrand, logoHeight = "6rem", starColor, linkScale = 1, padding = "3rem 4.5rem 2.25rem", logoTop = "1.5rem" }: { onNavigate: (p: Page) => void; bg?: string; fg?: string; onBrand?: () => void; logoHeight?: string; starColor?: string; linkScale?: number; padding?: string; logoTop?: string }) {
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
      <StarLink label="ABOUT" onClick={() => onNavigate({ id: "about" })} fg={fg} starColor={starColor} scale={linkScale} />
      <button
        onClick={onBrand ?? (() => onNavigate({ id: "foundry" }))}
        style={{ position: "absolute", left: "50%", top: logoTop, transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
      >
        <img
          src={logo}
          alt={BRAND}
          style={{ height: logoHeight, display: "block", filter: fg === "#fff" ? "invert(1)" : "none" }}
        />
      </button>
      <StarLink label="FAQ" onClick={() => onNavigate({ id: "contact" })} fg={fg} starColor={starColor} scale={linkScale} />
    </nav>
  );
}

const PAGE_TEXT: Record<string, string> = {
  ABOUT:
    "Beckmans Type Foundry is an independent studio drawing original typefaces for print and screen. Open 24/7 since 2026, we design letters with equal attention to craft and character — from editorial serifs to raw display faces. Every family is developed in-house and tested across languages, sizes, and media.",
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
function StarBuyButton() {
  const [hover, setHover] = useState(false);
  const [randColor, setRandColor] = useState<string | null>(null);
  const W = 420;
  const H = 200;
  const star = rectStarburstPath(W / 2, H / 2, 22, W / 2 - 6, H / 2 - 6, (W / 2 - 6) * 0.82, (H / 2 - 6) * 0.72);
  return (
    <button
      onClick={() => window.open("https://otflicense.gumroad.com", "_blank", "noopener,noreferrer")}
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

function SimplePage({ title, onNavigate }: { title: string; onNavigate: (p: Page) => void }) {
  const [klassFilter, setKlassFilter] = useState<string>("All");
  const shownDesigners = klassFilter === "All" ? designers : designers.filter((d) => d.klass === klassFilter);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col px-10" style={{ paddingTop: "5.5rem", paddingBottom: "3rem" }}>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "1.15rem", color: "#000", lineHeight: 1.6, maxWidth: "48rem" }}>
          {PAGE_TEXT[title] ?? "Coming soon."}
        </p>
        {title === "Buy" && (
          <a
            href="https://otflicenser.gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              alignSelf: "flex-start",
              marginTop: "2rem",
              fontFamily: "Arial, sans-serif",
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "#fff",
              background: "#000",
              padding: "0.9rem 2rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Buy on Gumroad →
          </a>
        )}
        {title === "ABOUT" && (
          <div style={{ marginTop: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <h2 style={{ fontFamily: "Arial, sans-serif", fontSize: "1.6rem", fontWeight: "bold", color: "#000", margin: 0 }}>Designers</h2>
              <select
                value={klassFilter}
                onChange={(e) => setKlassFilter(e.target.value)}
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1rem",
                  padding: "0.4rem 0.75rem",
                  border: "1.5px solid #000",
                  background: "#fff",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                {DESIGNER_CLASSES.map((c) => (
                  <option key={c} value={c}>{c === "All" ? "All classes" : c}</option>
                ))}
              </select>
            </div>
            <div
              style={{
                marginTop: "1.5rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {shownDesigners.map((d) => (
                <NameCell key={d.name} d={d} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Selectable weights shown in the "Regular" dropdown and reflected in Format.
const WEIGHTS = ["Light", "Medium", "Regular", "Italic", "Bold"];

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

// Full-width panel: large showcase on the left, categorised character list on the right.
// When the parsed opentype font is available, only glyphs actually present in the
// face are shown (missing chars are omitted and empty categories are hidden).
function GlyphSection({ font, otFont, panelBg, panelText }: { font: string; otFont: opentype.Font | null; panelBg: string; panelText: string }) {
  const groups = CHAR_GROUPS.map((group) => ({
    label: group.label,
    chars: otFont ? group.chars.filter((c) => otFont.charToGlyphIndex(c) > 0) : group.chars,
  })).filter((group) => group.chars.length > 0);

  const firstChar = groups[0]?.chars[0] ?? "A";
  const [hovered, setHovered] = useState(firstChar);
  useEffect(() => {
    setHovered(firstChar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otFont]);

  return (
    <div style={{ background: panelBg, padding: "1.5rem", display: "flex", gap: "1.5rem", alignItems: "stretch", transition: "background 0.25s ease" }}>
      {/* Showcase — left */}
      <div style={{ flex: "0 0 38%", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", color: panelText, transition: "color 0.25s ease" }}>
        <span style={{ fontFamily: font, fontSize: "clamp(7rem, 18vw, 18rem)", lineHeight: 1 }}>{hovered}</span>
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
  const count = Math.max(images.length, 1);
  const [i, setI] = useState(0);
  const go = (d: number) => setI((prev) => (prev + d + count) % count);
  const arrowStyle: React.CSSProperties = {
    background: "none",
    border: `1.5px solid ${panelText}`,
    color: panelText,
    width: 40,
    height: 40,
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "1.1rem",
    lineHeight: 1,
    flexShrink: 0,
    transition: "color 0.25s ease, border-color 0.25s ease",
  };
  return (
    <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12 }}>
      <button onClick={() => go(-1)} style={arrowStyle} aria-label="Previous">‹</button>
      {/* Image field — same 3:4 frame as before; drop real images in via `images`. */}
      <div style={{ flex: 1, maxWidth: 300, margin: "0 auto", aspectRatio: "3 / 4", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {images[i] && (
          <img src={images[i]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        )}
      </div>
      <button onClick={() => go(1)} style={arrowStyle} aria-label="Next">›</button>
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

// Renders a single line of preview text as an SVG path built from the loaded
// font. Any character absent from the font's cmap is drawn with the font's own
// .notdef glyph (opentype.js substitutes it automatically) rather than falling
// back to another typeface.
function GlyphLine({ font, text, fontSizePx, lineHeightPx, fill }: {
  font: opentype.Font;
  text: string;
  fontSizePx: number;
  lineHeightPx: number;
  fill: string;
}) {
  const ascenderPx = (font.ascender / font.unitsPerEm) * fontSizePx;
  // Baseline placement inside the line box mirrors CSS half-leading.
  const baselineY = (lineHeightPx - fontSizePx) / 2 + ascenderPx;
  const width = text ? font.getAdvanceWidth(text, fontSizePx) : 0;
  const d = text ? font.getPath(text, 0, baselineY, fontSizePx).toPathData(2) : "";
  return (
    <svg width={Math.max(width, 1)} height={lineHeightPx} style={{ display: "block", overflow: "visible" }}>
      {d && <path d={d} fill={fill} />}
    </svg>
  );
}

function TypefacePage({ name, onNavigate }: { name: string; onNavigate: (p: Page) => void }) {
  const face = typefaces.find((f) => f.name === name);
  // Local state — automatically resets on unmount (back to foundry) or refresh.
  const [mode, setMode] = useState<Mode>("color");
  const [top, setTop] = useState("");
  const [size, setSize] = useState(16); // rem — starts at the slider's max size
  const [weight, setWeight] = useState("Regular");
  const [weightOpen, setWeightOpen] = useState(false);
  const [font, setFont] = useState<opentype.Font | null>(null);
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
    if (face?.file) {
      opentype.load(face.file, (err, f) => {
        if (!cancelled && !err && f) setFont(f);
      });
    }
    return () => {
      cancelled = true;
    };
  }, [name]);

  // Type the typeface name into the preview window on entry.
  useEffect(() => {
    let i = 0;
    setTop("");
    const id = setInterval(() => {
      i++;
      setTop(name.slice(0, i));
      if (i >= name.length) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, [name]);

  if (!face) return null;

  // Wrap the text the same way the box does, so the overlay lines up with it.
  const wrappedLines = font && boxWidth ? wrapLines(font, top, size * 16, boxWidth - 4) : top.split("\n");

  // Fit a single row by default; grow with each added line, up to four.
  const previewLines = Math.min(4, Math.max(1, wrappedLines.length));

  // Panel (column) colours + surrounding page colours by mode.
  const panelBg = mode === "color" ? face.bg : mode === "invert" ? face.fg : mode === "panelsDark" ? "#000" : "#fff";
  const panelText = mode === "color" ? face.fg : mode === "invert" ? face.bg : mode === "panelsDark" ? "#fff" : "#000";
  const pageBg = mode === "panelsLight" ? "#000" : "#fff";
  const pageText = mode === "panelsLight" ? "#fff" : "#000";

  const GAP = 24;

  const fieldBase: React.CSSProperties = {
    fontFamily: face.font,
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
      <NavBar onNavigate={onNavigate} bg={pageBg} fg={pageText} logoHeight="3rem" starColor={face.bg} linkScale={0.7} padding="2.5rem 4.5rem 1.75rem" logoTop="1.5rem" />
      <div className="flex-1 flex flex-col px-10" style={{ gap: 12, paddingTop: "2.5rem", paddingBottom: "3rem" }}>
        {/* Top column — big editable preview, controls pinned at the top */}
        <div style={{ position: "relative", background: panelBg, minHeight: "52vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "4.5rem", paddingBottom: "2.5rem", transition: "background 0.25s ease" }}>
          {/* Size slider + colour dots, side by side and centred at the top. */}
          <div style={{ position: "absolute", top: 16, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 20, zIndex: 2, color: panelText }}>
            <input
              type="range"
              min={3}
              max={16}
              step={0.5}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="size-slider"
            />
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
            {/* Weight selector — fixed width so the label never shifts the row. */}
            <div style={{ position: "relative", width: 96, flexShrink: 0 }}>
              <button
                onClick={() => setWeightOpen((o) => !o)}
                style={{ fontFamily: "Arial, sans-serif", fontSize: "0.9rem", color: panelText, background: "none", border: "none", cursor: "pointer", padding: 0, width: "100%", textAlign: "left" }}
              >
                {weight} ▾
              </button>
              {weightOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    left: 0,
                    background: pageBg,
                    color: pageText,
                    border: `1px solid ${pageText}`,
                    zIndex: 5,
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 110,
                  }}
                >
                  {WEIGHTS.map((w) => (
                    <button
                      key={w}
                      onClick={() => {
                        setWeight(w);
                        setWeightOpen(false);
                      }}
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "0.85rem",
                        color: pageText,
                        background: w === weight ? "rgba(128,128,128,0.2)" : "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "0.4rem 0.75rem",
                        textAlign: "left",
                      }}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Editable preview — one row by default, grows with content up to four rows.
              Extra bottom room keeps descenders on the last line fully visible. */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "visible", padding: "0 2rem" }}>
            <div ref={boxRef} style={{ position: "relative", width: "100%" }}>
              <textarea
                value={top}
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
                  color: font ? "transparent" : panelText,
                  caretColor: panelText,
                }}
              />
              {/* Purely visual overlay — draws the real glyphs on top of the
                  transparent textarea, aligned to the same box/padding/metrics. */}
              {font && (
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
            <div style={{ display: "inline-flex", animation: "marquee 45s linear infinite" }}>
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
              {face.name} is a {face.klass} typeface designed by {face.designer} at OTF License. Drawn for editorial and display use, it balances character and clarity across sizes. More on its history, features, and language support is coming soon.
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

          {/* Image field — right (currently the WIP carousel, ready for real images) */}
          <div style={{ background: panelBg, color: panelText, padding: "1.75rem", display: "flex", flexDirection: "column", transition: "background 0.25s ease, color 0.25s ease" }}>
            <WipCarousel panelText={panelText} />
          </div>
        </div>

        {/* Full-width Glyphs panel — showcase (left) + character list (right).
            Extra top margin so the gap above the panel matches the preview→columns
            whitespace (which also spans the designer marquee row between them). */}
        <div style={{ marginTop: "calc(1.2rem + 12px)" }}>
          <GlyphSection font={face.font} otFont={font} panelBg={panelBg} panelText={panelText} />
        </div>

        {/* Gumroad purchase widget */}
        <div style={{ marginTop: GAP, display: "flex", justifyContent: "center" }}>
          <GumroadEmbed url="https://otflicense.gumroad.com/l/facitsans" />
        </div>
      </div>
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const bandFont: React.CSSProperties = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    fontSize: "1.5rem",
    letterSpacing: "0.02em",
    color: "#000",
    whiteSpace: "nowrap",
  };

  const hPhrases = ["Convenient", "typefaces", "designed", "by students", "from Beckmans", "College of Design"];
  const vPhrases = ["Open till late", "24/7", "Open 7 days", "24 hrs", "Your one-stop-shop", "Buy now"];

  // Repeat each phrase set enough times to span the whole band on load, then
  // present two identical halves (REPEAT × 2) so the -50% loop is seamless.
  const REPEAT = 4;
  const hWords = Array.from({ length: hPhrases.length * REPEAT * 2 }).map((_, i) => (
    <span key={i} style={{ ...bandFont, paddingRight: "2.5rem" }}>{hPhrases[i % hPhrases.length]}</span>
  ));
  const vWords = Array.from({ length: vPhrases.length * REPEAT * 2 }).map((_, i) => (
    <span key={i} style={{ ...bandFont, writingMode: "vertical-rl", paddingBottom: "2.5rem" }}>{vPhrases[i % vPhrases.length]}</span>
  ));

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", background: "#fff" }}>
      {/* Full-screen looping intro GIF */}
      <img
        src={introGif}
        alt={BRAND}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      {/* Top band — travels right to left, endless loop */}
      <div style={{ position: "absolute", top: "1.5rem", left: 0, right: 0, overflow: "hidden", zIndex: 2 }}>
        <div style={{ display: "inline-flex", animation: "marquee 150s linear infinite" }}>{hWords}</div>
      </div>

      {/* Bottom band — travels left to right, endless loop */}
      <div style={{ position: "absolute", bottom: "1.5rem", left: 0, right: 0, overflow: "hidden", zIndex: 2 }}>
        <div style={{ display: "inline-flex", animation: "marqueeReverse 150s linear infinite" }}>{hWords}</div>
      </div>

      {/* Left band — travels top to bottom */}
      <div style={{ position: "absolute", left: "1.5rem", top: 0, bottom: 0, overflow: "hidden", zIndex: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", animation: "marqueeDown 150s linear infinite" }}>{vWords}</div>
      </div>

      {/* Right band — travels bottom to top */}
      <div style={{ position: "absolute", right: "1.5rem", top: 0, bottom: 0, overflow: "hidden", zIndex: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", animation: "marqueeUp 150s linear infinite" }}>{vWords}</div>
      </div>

      {/* Clickable button on top → start page */}
      <button
        onClick={() => onNavigate({ id: "foundry" })}
        style={{
          position: "absolute",
          left: "50%",
          top: "74%",
          transform: "translateX(-50%)",
          background: "transparent",
          color: "#000",
          border: "none",
          cursor: "pointer",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          fontSize: "1.1rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "0.5rem 1rem",
          zIndex: 3,
        }}
      >
        Enter 
      </button>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>({ id: "home" });

  function navigate(p: Page) {
    setPage(p);
    window.scrollTo(0, 0);
  }

  if (page.id === "home")      return <HomePage onNavigate={navigate} />;
  if (page.id === "about")     return <SimplePage title="ABOUT" onNavigate={navigate} />;
  if (page.id === "contact")   return <SimplePage title="FAQ"   onNavigate={navigate} />;
  if (page.id === "typeface")  return <TypefacePage name={page.name} onNavigate={navigate} />;

  // Start page is always the zoomed-out layout so every cell is visible (6 per row)
  // and the whole grid fits within the viewport without scrolling.
  const cols = 6;
  const colGap = 44;
  const rowGap = 2;
  const cellWidth = `calc((100% - ${colGap * (cols - 1)}px) / ${cols} * 0.81)`;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#fff" }}>
      <div className="sticky top-0 z-50 flex flex-col" style={{ background: "#fff" }}>
        <NavBar onNavigate={navigate} onBrand={() => navigate({ id: "home" })} padding="4.5rem 4.5rem 2.25rem" />
      </div>

      <div style={{ padding: "3rem 2.5rem 3.5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", columnGap: colGap, rowGap }}>
          {typefaces.map((face) => (
            <Cell
              key={face.name}
              face={face}
              width={cellWidth}
              onNavigate={navigate}
            />
          ))}
        </div>
      </div>
      <StarBuyButton />
    </div>
  );
}
