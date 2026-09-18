import { useState, useRef, useEffect } from "react";
import type React from "react";
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

type Page =
  | { id: "home" }
  | { id: "foundry" }
  | { id: "about" }
  | { id: "licensing" }
  | { id: "contact" }
  | { id: "subscribe" }
  | { id: "typeface"; name: string };

type Edge = "top" | "bottom" | "left" | "right";

const BRAND = "OTF License";

// Text on each cell is always pure black or white for contrast.
const B = "#000", W = "#fff";

const typefaces = [
  { name: "Galanite",    designer: "Alva Kinneholm",  klass: "VK27", bg: "#ff2cb2", fg: W, img: img1, font: "'Galanite', regular" },
  { name: "Margaux",        designer: "Caspar Broms",   klass: "VK27", bg: "#0074ff", fg: W, img: img2, font: "'Space Mono', monospace" },
  { name: "Vellum Text",    designer: "Emma Ljungkvist",    klass: "VK27", bg: "#ff1d38", fg: W, img: img3, font: "'Abril Fatface', serif" },
  { name: "Graveur",        designer: "Emma Tungelstedt",   klass: "VK27", bg: "#00ab53", fg: W, img: img4, font: "'Pacifico', cursive" },
  { name: "Plinth",         designer: "Enya Borg",        klass: "VK27", bg: "#fff800", fg: B, img: img5, font: "'Roboto Condensed', sans-serif" },
  { name: "Nocturne",       designer: "Fahed Dehchar",     klass: "VK27", bg: "#c3872f", fg: W, img: img6, font: "'UnifrakturMaguntia', cursive" },
  { name: "Castor",         designer: "Hannah Mårtensson",     klass: "VK27", bg: "#ff5756", fg: W, img: img7, font: "'Playfair Display', serif" },
  { name: "Fenwick",        designer: "Jesper Smeding",        klass: "VK27", bg: "#ff2cb2", fg: W, img: img8, font: "'Space Mono', monospace" },
  { name: "Oriole",         designer: "Lawrence Ponsonby",   klass: "VK27", bg: "#0074ff", fg: W, img: img9, font: "'Abril Fatface', serif" },
  { name: "Braque",         designer: "Linn Willebrand",    klass: "VK27", bg: "#ff1d38", fg: W, img: img1, font: "'Pacifico', cursive" },
  { name: "Tallow",         designer: "Lovisa Åkerblom",   klass: "VK27", bg: "#00ab53", fg: W, img: img2, font: "'Roboto Condensed', sans-serif" },
  { name: "Sonder",         designer: "Silje Nordback", klass: "VK27", bg: "#fff800", fg: B, img: img3, font: "'UnifrakturMaguntia', cursive" },
  { name: "Calque",         designer: "Simon Grey",      klass: "VK27", bg: "#c3872f", fg: W, img: img4, font: "'Playfair Display', serif" },
  { name: "Reverie",        designer: "Tindra Berglund",    klass: "VK27", bg: "#ff5756", fg: W, img: img5, font: "'Space Mono', monospace" },
  { name: "Halcyon",        designer: "Ve Örnehed",    klass: "VK27", bg: "#ff2cb2", fg: W, img: img6, font: "'Abril Fatface', serif" },
  { name: "Fathom",         designer: "Vivi Tang",  klass: "VK27", bg: "#0074ff", fg: W, img: img7, font: "'Roboto Condensed', sans-serif" },
];

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

  // Only the PNG itself is clickable; the wrapper just carries the hover tilt.
  return (
    <div
      className="cell"
      style={{ width, display: "flex", pointerEvents: "none" }}
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
          transform: hovered ? `rotate(${tilt}deg)` : "rotate(0deg)",
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

function NavBar({ onNavigate, bg = "#fff", fg = "#000", onBrand }: { onNavigate: (p: Page) => void; bg?: string; fg?: string; onBrand?: () => void }) {
  const linkStyle: React.CSSProperties = { fontFamily: "Arial, sans-serif", fontSize: "1.1rem", color: fg, background: "none", border: "none", cursor: "pointer", padding: 0 };
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        position: "sticky",
        background: bg,
        padding: "2.75rem 2.5rem",
        transition: "background 0.25s ease",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "1.5rem",
      }}
    >
      <button
        onClick={onBrand ?? (() => onNavigate({ id: "foundry" }))}
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
      >
        <img
          src={logo}
          alt={BRAND}
          style={{ height: "2.4rem", display: "block", filter: fg === "#fff" ? "invert(1)" : "none" }}
        />
      </button>
      <div className="flex items-center gap-8" style={{ justifyContent: "flex-end", flexWrap: "wrap" }}>
        <button onClick={() => onNavigate({ id: "about" })} style={linkStyle}>About</button>
        <button onClick={() => onNavigate({ id: "licensing" })} style={linkStyle}>Licensing</button>
        <button onClick={() => onNavigate({ id: "contact" })} style={linkStyle}>Contact</button>
        <button onClick={() => onNavigate({ id: "subscribe" })} style={{ ...linkStyle, fontWeight: "bold" }}>Buy</button>
      </div>
    </nav>
  );
}

const PAGE_TEXT: Record<string, string> = {
  About:
    "Beckmans Type Foundry is an independent studio drawing original typefaces for print and screen. Open 24/7 since 2026, we design letters with equal attention to craft and character — from editorial serifs to raw display faces. Every family is developed in-house and tested across languages, sizes, and media.",
  Licensing:
    "Our fonts are available under desktop, web, app, and broadcast licenses, priced by the number of users and monthly page views. A single trial weight is free for testing. Custom and exclusive licenses are available for brands and publishers — get in touch and we will tailor an agreement to your needs.",
  Contact:
    "Say hello at hello@beckmanstype.se, or find us at Brahegatan 10, Stockholm. For licensing questions, custom commissions, or press, we usually reply within two working days. We are always happy to talk type.",
  Buy:
    "Buy and license our typefaces for desktop, web, app, and broadcast use. Support the foundry directly and get new releases, work-in-progress cuts, and the occasional free trial weight. Head over to our Patreon to purchase and follow along.",
};

function SubscribeFooter({ onNavigate, bg = "#fff", fg = "#000" }: { onNavigate: (p: Page) => void; bg?: string; fg?: string }) {
  return (
    <div style={{ background: bg, padding: "1.5rem 2.5rem 2.5rem", display: "flex", justifyContent: "center", transition: "background 0.25s ease" }}>
      <button
        onClick={() => onNavigate({ id: "subscribe" })}
        style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "clamp(3rem, 11vw, 9rem)", color: fg, background: "none", border: "none", cursor: "pointer", transition: "color 0.25s ease" }}
      >
        Buy
      </button>
    </div>
  );
}

function SimplePage({ title, onNavigate }: { title: string; onNavigate: (p: Page) => void }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col justify-center px-10 max-w-3xl">
        <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "3rem", fontWeight: "bold", color: "#000" }}>{title}</h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: "1.15rem", color: "#000", lineHeight: 1.6, marginTop: "1.5rem" }}>
          {PAGE_TEXT[title] ?? "Coming soon."}
        </p>
        {title === "Buy" && (
          <a
            href="https://www.patreon.com/cw/justmytypefoundry?utm_source=campaign-search-results"
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
            Support us on Patreon →
          </a>
        )}
      </div>
    </div>
  );
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;!?&@#$%*()+-=/".split("");

function GlyphSection({ font, panelBg, panelText, compact = false }: { font: string; panelBg: string; panelText: string; compact?: boolean }) {
  const [hovered, setHovered] = useState(GLYPHS[0]);

  const grid = (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${compact ? 34 : 56}px, 1fr))`, gap: compact ? 2 : 4 }}>
      {GLYPHS.map((g, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(g)}
          style={{
            fontFamily: font,
            color: panelText,
            aspectRatio: "1/1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: compact ? "1rem" : "1.6rem",
            cursor: "default",
            borderRadius: 2,
            background: hovered === g ? panelText : "transparent",
            transition: "background 0.15s ease, color 0.15s ease",
            ...(hovered === g ? { color: panelBg } : null),
          }}
        >
          {g}
        </div>
      ))}
    </div>
  );

  const showcase = (
    <div
      style={{
        color: panelText,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
        padding: "0.35em 0",
        transition: "color 0.25s ease",
      }}
    >
      <span style={{ fontFamily: font, fontSize: compact ? "clamp(6rem, 14vw, 12rem)" : "clamp(10rem, 28vw, 26rem)", lineHeight: 1.5 }}>{hovered}</span>
    </div>
  );

  // Compact: showcase on the left, glyph grid on the right (side by side).
  if (compact) {
    return (
      <div style={{ background: panelBg, padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem", transition: "background 0.25s ease" }}>
        <button
          style={{ alignSelf: "flex-end", fontFamily: font, fontSize: "1.1rem", color: panelText, background: "none", border: "none", cursor: "pointer", opacity: 0.85, padding: 0 }}
        >
          Regular
        </button>
        <div style={{ display: "flex", alignItems: "stretch", gap: "1.25rem", flex: 1 }}>
          <div style={{ flex: "0 0 45%", minWidth: 0 }}>{showcase}</div>
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>{grid}</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: panelBg, padding: "1.5rem", transition: "background 0.25s ease" }}>
      {grid}
      <div style={{ minHeight: 420, paddingBottom: "3rem" }}>{showcase}</div>
    </div>
  );
}

function WipCarousel({ panelText, font }: { panelText: string; font: string }) {
  const slides = ["Work in progress 1", "Work in progress 2", "Work in progress 3"];
  const [i, setI] = useState(0);
  const go = (d: number) => setI((prev) => (prev + d + slides.length) % slides.length);
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
      <div
        style={{
          flex: 1,
          maxWidth: 300,
          margin: "0 auto",
          aspectRatio: "3 / 4",
          border: `1px solid ${panelText}`,
          opacity: 0.85,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: panelText,
          fontFamily: font,
          fontSize: "1.1rem",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          transition: "color 0.25s ease, border-color 0.25s ease",
        }}
      >
        {slides[i]}
      </div>
      <button onClick={() => go(1)} style={arrowStyle} aria-label="Next">›</button>
    </div>
  );
}

type Mode = "color" | "invert" | "panelsDark" | "panelsLight";

function TypefacePage({ name, onNavigate }: { name: string; onNavigate: (p: Page) => void }) {
  const face = typefaces.find((f) => f.name === name);
  // Local state — automatically resets on unmount (back to foundry) or refresh.
  const [mode, setMode] = useState<Mode>("color");
  const [top, setTop] = useState(name);
  const [size, setSize] = useState(6); // rem — controls the big preview text
  if (!face) return null;

  // Show at least two rows from the start; grow up to the four-line maximum.
  const previewLines = Math.min(4, Math.max(2, top.split("\n").length));

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
      <NavBar onNavigate={onNavigate} bg={pageBg} fg={pageText} />
      <div className="flex-1 flex flex-col px-10" style={{ gap: GAP, paddingTop: 0, paddingBottom: "3rem" }}>
        {/* Top column — big editable preview, size slider in the top-left corner */}
        <div style={{ position: "relative", background: panelBg, transition: "background 0.25s ease" }}>
          <div style={{ position: "absolute", top: 16, left: 16, zIndex: 2, color: panelText }}>
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
          <div style={{ position: "absolute", top: 16, right: 16, display: "flex", gap: 10, zIndex: 2 }}>
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
          {/* Editable multi-line preview — at least two rows visible, up to four editable */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "4rem 2rem 1rem" }}>
            <textarea
              value={top}
              onChange={(e) => {
                if (e.target.value.split("\n").length <= 4) setTop(e.target.value);
              }}
              rows={previewLines}
              style={{
                ...fieldBase,
                fontSize: `${size}rem`,
                lineHeight: 1.15,
                textAlign: "center",
                height: `${previewLines * size * 1.15}rem`,
              }}
            />
          </div>
          <div style={{ paddingBottom: "2.5rem" }} />
        </div>

        {/* Designer label + right-to-left looping marquee on one line */}
        <div style={{ display: "flex", alignItems: "center", overflow: "hidden" }}>
          <span style={{ fontFamily: "Arial, sans-serif", fontSize: "1.5rem", fontWeight: "bold", color: pageText, whiteSpace: "nowrap", flexShrink: 0, paddingRight: "1.5rem" }}>
            Designer:
          </span>
          <div style={{ overflow: "hidden", whiteSpace: "nowrap", flex: 1 }}>
            <div style={{ display: "inline-flex", animation: "marquee 45s linear infinite" }}>
              {Array.from({ length: 24 }).map((_, k) => (
                <span
                  key={k}
                  style={{ fontFamily: "Arial, sans-serif", fontSize: "1.5rem", fontWeight: "normal", color: pageText, paddingRight: "2.5rem", whiteSpace: "nowrap" }}
                >
                  {k % 2 === 0 ? face.designer : face.klass}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* About (left) + compact Glyphs/Showcase (right), side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: GAP, alignItems: "stretch" }}>
          {/* About — left */}
          <div style={{ background: panelBg, color: panelText, padding: "1.75rem", display: "flex", flexDirection: "column", transition: "background 0.25s ease, color 0.25s ease" }}>
            <h1 style={{ fontFamily: face.font, fontSize: "2.5rem", fontWeight: "bold", color: panelText, margin: 0 }}>About {face.name}</h1>
            <p style={{ fontFamily: face.font, fontSize: "1.15rem", color: panelText, opacity: 0.85, marginTop: "0.75rem", marginBottom: "1.75rem", lineHeight: 1.6 }}>
              {face.name} is a {face.klass} typeface designed by {face.designer} at OTF License. Drawn for editorial and display use, it balances character and clarity across sizes. More on its history, features, and language support is coming soon.
            </p>
            <WipCarousel panelText={panelText} font={face.font} />
          </div>

          {/* Glyphs + showcase — right, smaller */}
          <GlyphSection font={face.font} panelBg={panelBg} panelText={panelText} compact />
        </div>
      </div>
      <SubscribeFooter onNavigate={onNavigate} bg={pageBg} fg={pageText} />
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "#fff" }}>
      <button
        onClick={() => onNavigate({ id: "foundry" })}
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
      >
        <img src={logo} alt={BRAND} style={{ width: "min(60vw, 640px)", height: "auto", display: "block" }} />
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
  if (page.id === "about")     return <SimplePage title="About"     onNavigate={navigate} />;
  if (page.id === "licensing") return <SimplePage title="Licensing" onNavigate={navigate} />;
  if (page.id === "contact")   return <SimplePage title="Contact"   onNavigate={navigate} />;
  if (page.id === "subscribe") return <SimplePage title="Buy" onNavigate={navigate} />;
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
        <NavBar onNavigate={navigate} onBrand={() => navigate({ id: "home" })} />
      </div>

      <div style={{ padding: "0 2.5rem 2rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", columnGap: colGap, rowGap }}>
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
    </div>
  );
}
