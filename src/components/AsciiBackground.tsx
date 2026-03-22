const CHARS = "01 /\\ <> {} [] ~~ ** .. ?? @# $& 10 \\/ >< ][ !. ";
const ROW = CHARS.repeat(18);
const ROWS = Array.from({ length: 55 }, () => ROW);

export default function AsciiBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none"
      style={{
        // Explicit inline positioning — avoids any Tailwind purge or
        // class-ordering issue. 100vw/100vh ensures full viewport on
        // mobile Safari where inset-0 can misbehave.
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <pre
        style={{
          fontFamily: "monospace",
          fontSize: "10px",
          lineHeight: "1.8",
          letterSpacing: "0.04em",
          color: "rgba(255,255,255,0.20)",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          padding: "6px",
        }}
      >
        {ROWS.join("\n")}
      </pre>
    </div>
  );
}
