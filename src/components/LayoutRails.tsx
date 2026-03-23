/**
 * LayoutRails
 * Vertical guide lines tied to the max-w-7xl content container.
 * Responsive:
 *   Mobile  (< md)  — 2 outer frame rails only
 *   Tablet  (md-lg)  — outer rails + center guide
 *   Desktop (lg+)    — outer rails + center + two third-column guides
 *
 * No tiled patterns. No backgrounds. Pure architectural guide lines.
 */
export default function LayoutRails() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none"
      style={{ zIndex: 0 }}
    >
      {/* Container aligned to max-w-7xl (1280px) */}
      <div
        className="relative h-full mx-auto"
        style={{ maxWidth: "1280px", width: "100%" }}
      >
        {/* Left outer frame rail — all breakpoints */}
        <div
          className="absolute inset-y-0 left-0 w-px"
          style={{ background: "rgba(255,255,255,0.055)" }}
        />
        {/* Right outer frame rail — all breakpoints */}
        <div
          className="absolute inset-y-0 right-0 w-px"
          style={{ background: "rgba(255,255,255,0.055)" }}
        />

        {/* Center guide — tablet and up (md+) */}
        <div
          className="absolute inset-y-0 w-px hidden md:block"
          style={{
            left: "50%",
            transform: "translateX(-0.5px)",
            background: "rgba(255,255,255,0.028)",
          }}
        />

        {/* Left-third guide — desktop only (lg+) */}
        <div
          className="absolute inset-y-0 w-px hidden lg:block"
          style={{ left: "33.333%", background: "rgba(255,255,255,0.018)" }}
        />
        {/* Right-third guide — desktop only (lg+) */}
        <div
          className="absolute inset-y-0 w-px hidden lg:block"
          style={{ right: "33.333%", background: "rgba(255,255,255,0.018)" }}
        />
      </div>
    </div>
  );
}
