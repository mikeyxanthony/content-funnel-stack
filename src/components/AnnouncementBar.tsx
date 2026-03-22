export default function AnnouncementBar() {
  return (
    <div style={{background:"#39FF14",color:"#0A0A0A"}} className="w-full text-center py-2 px-4 text-sm font-semibold tracking-wide z-50">
      🔥 Limited spots available — Enrollment closes soon.{" "}
      <a href="#cta" className="underline font-bold hover:opacity-80 transition-opacity">Claim your spot now →</a>
    </div>
  );
}
