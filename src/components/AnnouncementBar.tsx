export default function AnnouncementBar() {
  return (
    <div style={{ background: "#FF2020", color: "#ffffff" }} className="w-full text-center py-2 px-4 text-sm font-semibold tracking-wide z-50 whitespace-nowrap overflow-hidden text-ellipsis">
      🔥 Limited spots — enrollment closing soon.{" "}
      <a href="#cta" className="underline font-bold hover:opacity-80 transition-opacity">Claim yours →</a>
    </div>
  );
}
