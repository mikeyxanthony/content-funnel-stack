const credentials = ["Built and scaled content funnels for 7-figure coaches","Helped 200+ coaches and agency owners optimize their call pipelines","$4.2M+ revenue generated across client base","Specialist in YouTube-to-funnel architecture and VSL optimization","Creator of the Content Funnel Stack framework"];
export default function AboutFounder() {
  return (
    <section id="founder" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#39FF14] text-xs font-semibold uppercase tracking-widest">Who You Are Learning From</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3">Built by People Who Have <span className="text-[#39FF14] neon-glow">Done It</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="neon-border rounded-2xl bg-[#111111] aspect-square max-w-sm mx-auto w-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/10 to-transparent" />
            <div className="relative z-10 text-center">
              <div className="w-28 h-28 rounded-full bg-[#39FF14]/20 border-2 border-[#39FF14] flex items-center justify-center mx-auto mb-4 text-[#39FF14] font-black text-4xl">V</div>
              <p className="text-white font-bold text-lg">Verdex Team</p>
              <p className="text-[#39FF14] text-sm mt-1">Funnel Systems Architects</p>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-white/80 leading-relaxed">The Verdex team has spent years in the trenches building content funnels that convert. We have worked with coaches and agency owners across fitness, business, mindset, marketing, and more.</p>
            <p className="text-white/80 leading-relaxed">We have seen exactly why funnels leak: weak hooks, broken follow-up, no pre-call trust sequence. And we have systematized the fix for all of it.</p>
            <ul className="space-y-2 mt-4">{credentials.map((c,i) => (<li key={i} className="flex items-start gap-3 text-white/70 text-sm"><span className="text-[#39FF14] mt-0.5 flex-shrink-0">◆</span>{c}</li>))}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
