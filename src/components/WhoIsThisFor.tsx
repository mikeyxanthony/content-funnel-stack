const SF = { fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" } as const;

const forList = ["Coaches or agency owners doing $15-20k/mo","You have a YouTube channel with an existing audience","Booking calls but struggling with no-shows or low close rates","You have a proven offer but your funnel is unoptimized","You want systems not more content to create","Willing to implement and take action in 30 days or less"];
const notForList = ["Complete beginners with no offer or results","People looking for overnight results with zero effort","Those wanting to outsource everything and stay hands-off","Anyone not willing to show up to weekly calls"];
export default function WhoIsThisFor() {
  return (
    <section id="who" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#FF2020] text-xs font-semibold uppercase tracking-widest">Is This For You?</span>
          <h2 className="text-3xl sm:text-4xl mt-3">This Is{" "}<span className="text-[#FF2020] neon-glow serif-highlight" style={SF}>Specifically Built</span>{" "}For You If</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="neon-border rounded-2xl bg-[#111111] p-8">
            <div className="flex items-center gap-2 mb-6"><span className="text-[#FF2020] text-xl">✅</span><h3 className="text-white font-bold text-lg">This IS for you if</h3></div>
            <ul className="space-y-3">{forList.map((item,i) => (<li key={i} className="flex items-start gap-3 text-white/75 text-sm"><span className="text-[#FF2020] mt-0.5 flex-shrink-0">◆</span>{item}</li>))}</ul>
          </div>
          <div className="border border-white/10 rounded-2xl bg-[#111111]/50 p-8">
            <div className="flex items-center gap-2 mb-6"><span className="text-red-400 text-xl">🚫</span><h3 className="text-white/60 font-bold text-lg">This is NOT for you if</h3></div>
            <ul className="space-y-3">{notForList.map((item,i) => (<li key={i} className="flex items-start gap-3 text-white/40 text-sm"><span className="text-red-400/60 mt-0.5 flex-shrink-0">✕</span>{item}</li>))}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
