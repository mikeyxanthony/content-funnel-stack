import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Content Funnel Stack | Increase Your Show & Close Rates",
  description: "The content funnel system for coaches and agency owners doing $15-20k/mo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0A0A0A] text-white">
        {/*
          Subtle square grid with radial gradient mask.
          Fixed so it anchors to the viewport (not the scroll position).
          z-index 0 — sits behind the z-1 content wrapper.
          Radial mask: fully visible at center, fades to transparent at edges.
        */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), " +
              "linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 90% 90% at 50% 45%, black 0%, rgba(0,0,0,0.55) 45%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 90% at 50% 45%, black 0%, rgba(0,0,0,0.55) 45%, transparent 72%)",
          }}
        />
        {/* Content — z-index 1 keeps it above the grid layer */}
        <div className="relative" style={{ zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
