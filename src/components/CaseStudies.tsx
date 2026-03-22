const SF = { fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" } as const;

const cases = [
  {name:"Alex R. - Business Coach",result:"+58% show rate in 30 days",before:"Booking 8-10 calls/week but only 4-5 showed up. Close rate stuck at 30%.",after:"After no-show elimination system and pre-call nurture: 87% show rate, 52% close rate. Added $11k MRR within 6 weeks.",initials:"AR"},
  {name:"Maria C. - Digital Agency",result:"14 booked calls in week 1",before:"Great YouTube channel but zero funnel infrastructure. Traffic with no conversion.",after:"Implemented YouTube-to-funnel integration with optimized VSL. 14 calls booked in first 7 days, 6 closed.",initials:"MC"},
  {name:"Jason T. - Fitness Coach",result:"$23k closed in month 1",before:"Unoptimized VSL, high no-show rate, prospects showing up cold to calls.",after:"VSL rewrite, hook optimization, and full pre-call sequence. Prospects arrived sold. $23k in new client revenue month one.",initials:"JT"},
];
export default function CaseStudies() {
  return (
    <section id="cases" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#FF2020] text-xs font-semibold uppercase tracking-widest">Track Record</span>
          <h2 className="text-3xl sm:text-4xl mt-3 mb-4">Case Studies and{" "}<span className="text-[#FF2020] neon-glow serif-highlight" style={SF}>Proof</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.name} className="neon-border rounded-2xl bg-[#111111] p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF2020]/20 border border-[#FF2020]/40 flex items-center justify-center text-[#FF2020] font-bold text-sm flex-shrink-0">{c.initials}</div>
                <div><p className="text-white font-bold text-sm">{c.name}</p><p className="text-[#FF2020] text-xs font-semibold">{c.result}</p></div>
              </div>
              <div className="space-y-3 flex-1">
                <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-3"><p className="text-red-400 text-xs font-semibold uppercase tracking-wide mb-1">Before</p><p className="text-white/60 text-xs leading-relaxed">{c.before}</p></div>
                <div className="bg-[#FF2020]/5 border border-[#FF2020]/20 rounded-lg p-3"><p className="text-[#FF2020] text-xs font-semibold uppercase tracking-wide mb-1">After</p><p className="text-white/70 text-xs leading-relaxed">{c.after}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
