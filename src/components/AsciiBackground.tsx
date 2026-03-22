const CHARS = "01 /\\ <> {} [] ~~ ** .. ?? @# $& 10 \\/ >< ][ !. ";
const ROW = CHARS.repeat(18);
const ROWS = Array.from({ length: 55 }, () => ROW);

export default function AsciiBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none select-none"
      style={{ zIndex: 0 }}
    >
      <pre
        style={{
          fontFamily: "monospace",
          fontSize: "10px",
          lineHeight: "1.8",
          letterSpacing: "0.04em",
          color: "rgba(255,255,255,0.08)",
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
