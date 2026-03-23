const SF = { fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" } as const;

// Real headshots for social proof widget
const HEADSHOTS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=face",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-8 pb-16 px-4 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2020]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[#FF2020]/10 border border-[#FF2020]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#FF2020] rounded-full animate-pulse flex-shrink-0" />
              <span className="text-[#FF2020] text-xs font-semibold uppercase tracking-widest whitespace-nowrap">Coaches &amp; Agency Owners &middot; $15&ndash;20k/mo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-4 tracking-tight">
              Increase Your{" "}
              <span className="text-[#FF2020] neon-glow serif-highlight" style={SF}>Show &amp; Close Rates</span>{" "}
              With the Content Funnel System
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              You have the YouTube experience and an offer that works. We will fix your leaking funnel <strong className="text-white">WITHOUT</strong> rebuilding everything from scratch.
            </p>
            <ul className="space-y-3 mb-8">
              {["Turn your existing content into a predictable call-booking machine","Systems that work while you are on calls","Full funnel audit included free when you join now"].map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-white/85 text-sm sm:text-base">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#FF2020]/20 border border-[#FF2020]/40 rounded flex items-center justify-center text-[#FF2020] text-xs font-bold">✓</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <a href="#cta" className="neon-btn px-8 py-4 rounded-xl text-base font-black tracking-wide pulse-glow">Claim Your Free Strategy Session →</a>
            <p className="mt-3 text-white/40 text-xs">100% free. No commitment. 30-minute call.</p>
          </div>

          <div className="relative animate-fade-in-up">
            {/* YouTube VSL embed */}
            <div className="neon-border rounded-2xl overflow-hidden bg-[#111111]">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.youtube.com/embed/0jk1zGhHb-g?rel=0&modestbranding=1"
                  title="The Content Funnel Stack — How It Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
            </div>

            {/* Social proof strip with real headshots */}
            <div className="mt-4 neon-border rounded-xl bg-[#111111] p-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                {HEADSHOTS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-[#FF2020] text-sm">★★★★★</div>
                <p className="text-white/60 text-xs mt-0.5">Trusted by <strong className="text-white">200+ coaches</strong> and agency owners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
