/**
 * LayoutRails
 * Sits at z-index 9999 with pointer-events-none — on top of all content,
 * never blocking interaction. Opacity is tuned so lines are clearly visible
 * but don’t compete with content readability.
 *
 * Responsive:
 *   Mobile  (< md)  — 2 outer frame rails only
 *   Tablet  (md–lg) — outer rails + center guide
 *   Desktop (lg+)   — outer rails + center + two third-column guides
 */
export default function LayoutRails() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 select-none"
      style={{ zIndex: 9999, pointerEvents: "none" }}
    >
      {/* Container locked to max-w-7xl (1280px), centered */}
      <div
        className="relative h-full mx-auto"
        style={{ maxWidth: "1280px", width: "100%" }}
      >
        {/* Left outer frame rail — all breakpoints */}
        <div
          className="absolute inset-y-0 left-0 w-px"
          style={{ background: "rgba(255,255,255,0.18)" }}
        />
        {/* Right outer frame rail — all breakpoints */}
        <div
          className="absolute inset-y-0 right-0 w-px"
          style={{ background: "rgba(255,255,255,0.18)" }}
        />

        {/* Center guide — tablet and up (md+) */}
        <div
          className="absolute inset-y-0 w-px hidden md:block"
          style={{
            left: "50%",
            transform: "translateX(-0.5px)",
            background: "rgba(255,255,255,0.08)",
          }}
        />

        {/* Left-third guide — desktop only (lg+) */}
        <div
          className="absolute inset-y-0 w-px hidden lg:block"
          style={{ left: "33.333%", background: "rgba(255,255,255,0.06)" }}
        />
        {/* Right-third guide — desktop only (lg+) */}
        <div
          className="absolute inset-y-0 w-px hidden lg:block"
          style={{ right: "33.333%", background: "rgba(255,255,255,0.06)" }}
        />
      </div>
    </div>
  );
}
