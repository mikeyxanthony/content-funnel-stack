const steps = [
  {step:"01",title:"Funnel Audit and Blueprint",desc:"We map your entire content ecosystem and identify exactly where leads are dropping off. You leave with a prioritized fix list.",duration:"Week 1"},
  {step:"02",title:"Funnel Build and Optimization",desc:"We implement the Content Funnel Stack: optimized CTAs, VSL hooks, landing page copy, and your no-show elimination sequences. Everything goes live.",duration:"Weeks 2-3"},
  {step:"03",title:"Pre-Call Trust System",desc:"Automated email and SMS sequences go out between booking and call. Prospects show up already knowing your story, your results, and your offer.",duration:"Week 3"},
  {step:"04",title:"Optimize and Scale",desc:"Weekly group calls to review metrics, troubleshoot, and iterate. We track show rates and close rates weekly and adjust until the numbers are right.",duration:"Week 4 Ongoing"},
];
export default function Process() {
  return (
    <section id="process" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#FF2020] text-xs font-semibold uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl mt-3 mb-4">From Day 1 to <span className="text-[#FF2020] neon-glow">Fully Operational</span></h2>
          <p className="text-white/50">A clear 4-step process with no guesswork.</p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-10 bottom-10 w-px bg-[#FF2020]/20 hidden sm:block" />
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="relative flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full neon-border bg-[#111111] flex items-center justify-center z-10">
                  <span className="text-[#FF2020] font-black text-base">{s.step}</span>
                </div>
                <div className="flex-1 neon-border rounded-xl bg-[#111111] p-6 pt-5">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                    <h3 className="text-white font-bold text-base">{s.title}</h3>
                    <span className="text-[#FF2020] text-xs bg-[#FF2020]/10 border border-[#FF2020]/30 px-3 py-1 rounded-full font-semibold flex-shrink-0">{s.duration}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
