const SF = { fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" } as const;

const testimonials = [
  {
    name: "Alex R.",
    role: "Business Coach, $18k/mo",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=72&h=72&fit=crop&crop=face",
    text: "My show rate went from 55% to 87% in the first 30 days. The no-show elimination system alone paid for everything 10x over.",
    stars: 5,
  },
  {
    name: "Maria C.",
    role: "Agency Owner, $22k/mo",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=72&h=72&fit=crop&crop=face",
    text: "I had traffic but no system to convert it. Booked 14 calls in the first week after implementing the YouTube funnel integration.",
    stars: 5,
  },
  {
    name: "Jason T.",
    role: "Fitness Coach, $15k/mo",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=72&h=72&fit=crop&crop=face",
    text: "Closed 3 high-ticket clients in the first month. Pre-call nurture sequences are insane. Prospects show up already sold.",
    stars: 5,
  },
  {
    name: "Priya N.",
    role: "Marketing Agency, $20k/mo",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=72&h=72&fit=crop&crop=face",
    text: "Went from 40% close rate to 68%. The content funnel blueprint was exactly what I needed.",
    stars: 5,
  },
  {
    name: "Devon K.",
    role: "Mindset Coach, $12k/mo",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=72&h=72&fit=crop&crop=face",
    text: "The VSL optimization suite doubled my opt-in rate. I did not need a new video, just the right hook.",
    stars: 5,
  },
  {
    name: "Carlos M.",
    role: "Sales Coach, $25k/mo",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=72&h=72&fit=crop&crop=face",
    text: "Best investment I have made this year. The community alone is worth it.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#FF2020] text-xs font-semibold uppercase tracking-widest">Social Proof</span>
          <h2 className="text-3xl sm:text-4xl mt-3 mb-4">
            Real Results From{" "}
            <span className="text-[#FF2020] neon-glow serif-highlight" style={SF}>Real People</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="neon-border rounded-xl bg-[#111111] p-6 flex flex-col gap-4">
              <div className="flex gap-0.5 text-[#FF2020] text-sm">{"★".repeat(t.stars)}</div>
              <p className="text-white/80 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#FF2020]/10">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-9 h-9 rounded-full border border-[#FF2020]/30 object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className="text-white text-sm font-bold">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
