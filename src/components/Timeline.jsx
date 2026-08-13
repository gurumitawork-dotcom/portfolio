import Reveal from "./Reveal.jsx";

export default function Timeline({ items }) {
  return (
    <div className="relative pl-6 sm:pl-8 border-l border-slate-900/[0.12]">
      {items.map((item, idx) => (
        <Reveal key={idx} delay={idx * 0.04} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[30px] sm:-left-[37px] top-1 h-3 w-3 rounded-full bg-teal-500 shadow-glow-teal ring-4 ring-paper-50" />
          <span className="eyebrow !text-[11px]">{item.date}</span>
          <h3 className="mt-1.5 text-base sm:text-lg font-semibold text-navy-900 break-words">{item.title}</h3>
          {item.subtitle && <p className="mt-1 text-sm text-teal-700/90">{item.subtitle}</p>}
          {item.desc && <p className="mt-2 text-sm text-slate-600 max-w-xl">{item.desc}</p>}
        </Reveal>
      ))}
    </div>
  );
}
