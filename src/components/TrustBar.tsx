const items = ["200+ Clients Served","$4.2M+ Revenue Generated","85% Avg Show Rate","2x Close Rate Improvement","48hr Funnel Turnaround","100% Money-Back Guarantee"];
export default function TrustBar() {
  return (
    <div className="border-y border-[#FF2020]/10 bg-[#111111]/50 overflow-hidden py-3">
      <div className="flex items-center">
        <div className="marquee flex items-center gap-10 whitespace-nowrap">
          {[...items,...items].map((item,i) => (
            <span key={i} className="flex items-center gap-2 text-white/50 text-sm font-medium flex-shrink-0"><span className="text-[#FF2020] text-xs">◆</span>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
