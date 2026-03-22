"use client";
import { useState } from "react";
const faqs = [
  {q:"What if I don't have a big YouTube audience?",a:"The system works with any size audience. We have seen coaches with under 1,000 subscribers book 10+ calls/week with the right funnel architecture."},
  {q:"How quickly will I see results?",a:"Most clients see measurable improvement in show rates within the first 2 weeks. Close rate improvements typically show up by week 4."},
  {q:"Do I need to rebuild my entire funnel?",a:"No. We work with what you have and optimize it. In most cases, we are fixing 3-5 critical leaks rather than starting from scratch."},
  {q:"What is included in the weekly calls?",a:"Live Q&A, hot seat reviews of your funnel metrics, troubleshooting no-shows or low close rates, and group implementation time. Calls are recorded."},
  {q:"Is there a money-back guarantee?",a:"Yes. If you implement the system for 30 days and do not see improvement in your show rate or close rate, we will refund you in full."},
  {q:"How is this different from other funnel courses?",a:"This is not a course. It is a done-with-you implementation program. We build it alongside you in real-time with specific feedback on your VSL, sequences, and YouTube channel."},
];
export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#39FF14] text-xs font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3">Questions? We Have <span className="text-[#39FF14] neon-glow">Answers</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq,i) => (
            <div key={i} className={`neon-border rounded-xl bg-[#111111] overflow-hidden transition-all ${open===i?"border-[#39FF14]/40":""}`}>
              <button className="w-full text-left px-6 py-5 flex items-center justify-between gap-4" onClick={() => setOpen(open===i?null:i)}>
                <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
                <span className={`text-[#39FF14] text-lg flex-shrink-0 transition-transform ${open===i?"rotate-45":""}`}>+</span>
              </button>
              {open===i && <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-[#39FF14]/10 pt-4">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
