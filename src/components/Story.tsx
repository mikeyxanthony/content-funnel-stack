export default function Story() {
  return (
    <section id="story" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#FF2020] text-xs font-semibold uppercase tracking-widest">A Message From the Founder</span>
          <p className="text-white/40 text-xs mt-1">Updated: March 2026</p>
        </div>
        <div className="neon-border rounded-2xl bg-[#111111] p-8 sm:p-12 space-y-6 text-white/80 text-lg leading-relaxed">
          <p>Dear business builder,</p>
          <p>We get it. Growing a business is hard. <strong className="text-white">Really f*cking hard.</strong></p>
          <p>You are probably worried about where your next <span className="bg-[#FF2020]/10 text-[#FF2020] px-1 rounded">strategy call</span> will come from. Stressed. Sleeping like a teething two-year-old.</p>
          <p className="text-white/50 italic">Should I post more on YouTube? Update my VSL? Fix my no-show problem? What is actually moving the needle?</p>
          <p>Most coaches and agency owners at your level have <strong className="text-white">an audience, an offer, and a track record</strong>. What they do not have is a <span className="text-[#FF2020] font-bold">system</span> that turns their content into booked calls.</p>
          <p>That is why we built <strong className="text-[#FF2020]">The Content Funnel Stack</strong>. The end-to-end system that turns your YouTube presence into a <span className="bg-[#FF2020]/10 text-[#FF2020] px-1 rounded">high-converting call funnel</span>.</p>
          <p>Higher show rates. Higher close rates. <strong className="text-white">More revenue from the audience you already have.</strong></p>
          <div className="border-t border-[#FF2020]/20 pt-6 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FF2020]/20 border border-[#FF2020]/40 flex items-center justify-center text-[#FF2020] font-black text-xl">V</div>
            <div><p className="text-white font-bold text-base">The Verdex Team</p><p className="text-white/40 text-sm">Funnel Systems for Coaches and Agency Owners</p></div>
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {[{title:"I want more booked calls",desc:"See how we optimize your top-of-funnel content",href:"#offer"},{title:"I want higher close rates",desc:"Learn how we build trust before the call",href:"#process"}].map((item) => (
            <a key={item.title} href={item.href} className="neon-border rounded-xl bg-[#1A1A1A] p-5 hover:bg-[#111111] transition-colors block">
              <p className="text-white font-bold text-base">{item.title}</p>
              <p className="text-white/50 text-sm mt-1">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
