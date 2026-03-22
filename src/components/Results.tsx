const results = [{metric:"87%",label:"Avg Show Rate",sub:"Up from ~55% baseline"},{metric:"2.1x",label:"Close Rate Lift",sub:"After pre-call nurture"},{metric:"48hrs",label:"Funnel Turnaround",sub:"From onboarding to live"},{metric:"$4.2M+",label:"Revenue Generated",sub:"Across all CFS clients"}];
const skills = ["Content-to-call funnel architecture","VSL scripting and hook optimization","No-show elimination sequences","YouTube channel funnel integration","Pre-call trust building automation","Close rate optimization frameworks","Offer positioning and messaging","Analytics and conversion tracking"];
export default function Results() {
  return (
    <section id="results" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#FF2020] text-xs font-semibold uppercase tracking-widest">Tangible Results</span>
          <h2 className="text-3xl sm:text-4xl mt-3 mb-4">What You Will Have <span className="text-[#FF2020] neon-glow">After 30 Days</span></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {results.map((r) => (
            <div key={r.metric} className="neon-border rounded-xl bg-[#111111] p-6 text-center">
              <p className="text-4xl text-[#FF2020] neon-glow">{r.metric}</p>
              <p className="text-white font-bold text-sm mt-1">{r.label}</p>
              <p className="text-white/40 text-xs mt-1">{r.sub}</p>
            </div>
          ))}
        </div>
        <div className="neon-border rounded-2xl bg-[#111111] p-8">
          <h3 className="text-white font-bold text-lg mb-6">Key Skills and Systems You Will Have Implemented:</h3>
          <div className="grid sm:grid-cols-2 gap-3">{skills.map((s,i) => (<div key={i} className="flex items-center gap-3 text-white/70 text-sm"><span className="text-[#FF2020] flex-shrink-0">◆</span>{s}</div>))}</div>
        </div>
      </div>
    </section>
  );
}
