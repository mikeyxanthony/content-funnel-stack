export default function Footer() {
  return (
    <footer className="border-t border-[#FF2020]/10 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[#FF2020] font-black text-lg tracking-tighter">CFS</span>
          <span className="text-white/30 text-sm">Content Funnel Stack by Verdex Studio</span>
        </div>
        <div className="flex gap-6 text-white/30 text-sm">
          <a href="#story" className="hover:text-white transition-colors">About</a>
          <a href="#offer" className="hover:text-white transition-colors">Program</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="mailto:info@verdexstudio.com" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-white/20 text-xs text-center sm:text-right">2026 Verdex Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
