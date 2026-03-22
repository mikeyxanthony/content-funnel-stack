export default function FinalCTA() {
  return (
    <section id="cta" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="neon-border rounded-3xl bg-[#111111] relative overflow-hidden p-10 sm:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#39FF14]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <span className="text-[#39FF14] text-xs font-semibold uppercase tracking-widest">Ready to Fix Your Funnel?</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-4 mb-4 leading-tight">Stop Leaving <span className="text-[#39FF14] neon-glow">Money on the Table</span></h2>
            <p className="text-white/60 mb-8 text-lg max-w-xl mx-auto">Book your free 30-minute strategy session. We will audit your current funnel live, identify your top 3 leaks, and show you exactly what to fix first.</p>
            <a href="#" className="neon-btn px-10 py-5 rounded-2xl text-lg font-black pulse-glow">Book Your Free Strategy Session</a>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/40 text-xs">
              {["100% Free No obligation","30-minute call","Instant value zero pitch pressure"].map((t) => (<span key={t} className="flex items-center gap-1.5"><span className="text-[#39FF14]">✓</span>{t}</span>))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
