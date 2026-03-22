const SF = { fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" } as const;

export default function AffiliateProgram() {
  return (
    <section id="affiliate" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="border border-white/10 rounded-2xl bg-[#111111]/30 p-8 sm:p-12 text-center">
          <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">Affiliate Program</span>
          <h2 className="text-2xl sm:text-3xl mt-3 mb-4 text-white">Know Someone Who Needs This?{" "}<span className="neon-glow serif-highlight" style={{...SF, color:'#FF2020'}}>Get Paid.</span></h2>
          <p className="text-white/50 mb-6 max-w-xl mx-auto">Refer a coach or agency owner to The Content Funnel Stack and earn a generous commission for every enrollment.</p>
          <a href="mailto:info@verdexstudio.com?subject=CFS Affiliate Program" className="inline-block border border-[#FF2020]/30 text-[#FF2020] hover:bg-[#FF2020]/10 px-8 py-3 rounded-xl text-sm font-bold transition-colors">Apply to Become an Affiliate</a>
          <p className="text-white/30 text-xs mt-4">Typical commission: 20-30% per referral</p>
        </div>
      </div>
    </section>
  );
}
