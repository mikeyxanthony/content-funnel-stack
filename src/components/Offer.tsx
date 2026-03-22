const SF = { fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" } as const;

const items = [
  {name:"Content Funnel Blueprint",value:"$2,000",desc:"Full roadmap of your optimized content-to-call funnel.",icon:"🗺️"},
  {name:"VSL Optimization Suite",value:"$1,500",desc:"Script review, hook rewrite, and CRO for your sales video.",icon:"🎬"},
  {name:"No-Show Elimination System",value:"$1,200",desc:"Email and SMS sequences that increase show rates by 40%+ on average.",icon:"📅"},
  {name:"YouTube-to-Funnel Integration",value:"$800",desc:"Optimized CTAs, landing page copy, and channel architecture.",icon:"📹"},
  {name:"Close Rate Toolkit",value:"$1,000",desc:"Pre-call nurture sequences and trust builders sent before every call.",icon:"🤝"},
  {name:"Weekly Group Coaching Calls",value:"$2,400/yr",desc:"Live Q&A and implementation support every week.",icon:"📞"},
  {name:"SOPs + Templates Library",value:"$500",desc:"Done-for-you templates for every stage of your content funnel.",icon:"📋"},
  {name:"Private Community Access",value:"$600/yr",desc:"Network with 200+ coaches and agency owners.",icon:"👥"},
];
export default function Offer() {
  return (
    <section id="offer" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#FF2020] text-xs font-semibold uppercase tracking-widest">What is Included</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-3 mb-4">Everything You Need to{" "}<span className="text-[#FF2020] neon-glow serif-highlight" style={SF}>Stack Your Funnel</span></h2>
          <p className="text-white/60 max-w-xl mx-auto">Every piece is designed to work together. No random tactics.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {items.map((item) => (
            <div key={item.name} className="neon-border rounded-xl bg-[#111111] p-5 flex flex-col gap-3 hover:bg-[#1A1A1A] transition-colors">
              <div className="text-3xl">{item.icon}</div>
              <div><p className="text-white font-bold text-sm">{item.name}</p><p className="text-[#FF2020] text-xs font-semibold mt-0.5">Value: {item.value}</p></div>
              <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="neon-border rounded-2xl bg-[#111111] p-8 text-center">
          <p className="text-white/50 text-sm mb-2">Total Value</p>
          <p className="text-5xl text-white line-through opacity-40">$10,000+</p>
          <p className="text-white/50 text-sm mt-4 mb-2">Your Investment Today</p>
          <p className="text-5xl neon-glow serif-highlight" style={{...SF, color:'#FF2020'}}>Book a Free Call</p>
          <p className="text-white/40 text-sm mt-3">Get a custom quote on your 30-min strategy session</p>
          <a href="#cta" className="neon-btn mt-6 px-8 py-4 rounded-xl text-base font-black pulse-glow">Claim Your Free Strategy Session</a>
          <p className="text-white/30 text-xs mt-3">100% Money-Back Guarantee</p>
        </div>
      </div>
    </section>
  );
}
