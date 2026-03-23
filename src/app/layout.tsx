import type { Metadata } from "next";
import "./globals.css";
import LayoutRails from "@/components/LayoutRails";

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
        {/* Architectural layout guide rails — sits at z-index 0 behind all content */}
        <LayoutRails />
        {/* Page content — z-index 1 keeps it above the rail layer */}
        <div className="relative" style={{ zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
