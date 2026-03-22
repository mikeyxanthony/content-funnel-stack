export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-8 pb-16 px-4 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39FF14]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse" />
              <span className="text-[#39FF14] text-xs font-semibold uppercase tracking-widest">For Coaches & Agency Owners Doing $15-20k/mo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-4 tracking-tight">
              Increase Your <span className="text-[#39FF14] neon-glow">Show & Close Rates</span> With the Content Funnel System
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              You have the YouTube experience and an offer that works. We will fix your leaking funnel <strong className="text-white">WITHOUT</strong> rebuilding everything from scratch.
            </p>
            <ul className="space-y-3 mb-8">
              {["Turn your existing content into a predictable call-booking machine","Systems that work while you are on calls","Full funnel audit included free when you join now"].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-white/85 text-sm sm:text-base">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#39FF14]/20 border border-[#39FF14]/40 rounded flex items-center justify-center text-[#39FF14] text-xs font-bold">✓</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <a href="#cta" className="neon-btn px-8 py-4 rounded-xl text-base font-black tracking-wide pulse-glow">Claim Your Free Strategy Session →</a>
            <p className="mt-3 text-white/40 text-xs">100% free. No commitment. 30-minute call.</p>
          </div>
          <div className="relative animate-fade-in-up">
            <div className="neon-border rounded-2xl overflow-hidden bg-[#1A1A1A]">
              <div className="aspect-video bg-[#111111] flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/5 to-transparent" />
                <div className="relative z-10 text-center px-6">
                  <div className="w-16 h-16 bg-[#39FF14]/20 border-2 border-[#39FF14] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#39FF14] ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <p className="text-white/50 text-sm">Watch: How The Content Funnel Stack works</p>
                  <p className="text-[#39FF14]/70 text-xs mt-1">[ VSL placeholder — add your link ]</p>
                </div>
              </div>
            </div>
            <div className="mt-4 neon-border rounded-xl bg-[#111111] p-4 flex items-center gap-4">
              <div className="flex -space-x-2">{["A","B","C","D"].map((l,i) => (<div key={i} className="w-8 h-8 rounded-full bg-[#39FF14]/20 border-2 border-[#0A0A0A] flex items-center justify-center text-[#39FF14] text-xs font-bold">{l}</div>))}</div>
              <div><div className="flex gap-0.5 text-[#39FF14] text-sm">★★★★★</div><p className="text-white/60 text-xs mt-0.5">Trusted by <strong className="text-white">200+ coaches</strong> and agency owners</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
