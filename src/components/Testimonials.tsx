const testimonials = [
  {name:"Alex R.",role:"Business Coach, $18k/mo",avatar:"A",text:"My show rate went from 55% to 87% in the first 30 days. The no-show elimination system alone paid for everything 10x over.",stars:5},
  {name:"Maria C.",role:"Agency Owner, $22k/mo",avatar:"M",text:"I had traffic but no system to convert it. Booked 14 calls in the first week after implementing the YouTube funnel integration.",stars:5},
  {name:"Jason T.",role:"Fitness Coach, $15k/mo",avatar:"J",text:"Closed 3 high-ticket clients in the first month. Pre-call nurture sequences are insane. Prospects show up already sold.",stars:5},
  {name:"Priya N.",role:"Marketing Agency, $20k/mo",avatar:"P",text:"Went from 40% close rate to 68%. The content funnel blueprint was exactly what I needed.",stars:5},
  {name:"Devon K.",role:"Mindset Coach, $12k/mo",avatar:"D",text:"The VSL optimization suite doubled my opt-in rate. I did not need a new video, just the right hook.",stars:5},
  {name:"Carlos M.",role:"Sales Coach, $25k/mo",avatar:"C",text:"Best investment I have made this year. The community alone is worth it.",stars:5},
];
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#FF2020] text-xs font-semibold uppercase tracking-widest">Social Proof</span>
          <h2 className="text-3xl sm:text-4xl mt-3 mb-4">Real Results From <span className="text-[#FF2020] neon-glow">Real People</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="neon-border rounded-xl bg-[#111111] p-6 flex flex-col gap-4">
              <div className="flex gap-0.5 text-[#FF2020] text-sm">{"★".repeat(t.stars)}</div>
              <p className="text-white/80 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#FF2020]/10">
                <div className="w-9 h-9 rounded-full bg-[#FF2020]/20 border border-[#FF2020]/40 flex items-center justify-center text-[#FF2020] font-bold text-sm">{t.avatar}</div>
                <div><p className="text-white text-sm font-bold">{t.name}</p><p className="text-white/40 text-xs">{t.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
