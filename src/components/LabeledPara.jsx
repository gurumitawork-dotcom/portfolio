import Reveal from "./Reveal.jsx";

/** An editorial "numbered section" treatment for long-form paragraphs —
 *  gives each block its own identity instead of one wall of text. */
export default function LabeledPara({ index, label, children, delay = 0, dropCap = false }) {
  return (
    <Reveal delay={delay} className="flex gap-3 sm:gap-6">
      <span className="font-serif text-2xl sm:text-4xl text-teal-600/25 shrink-0 w-8 sm:w-11 leading-none pt-0.5">
        {index}
      </span>
      <div className="min-w-0">
        <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700 mb-2">{label}</h3>
        <p className={`measure text-slate-600 leading-relaxed text-[15px] ${dropCap ? "drop-cap" : ""}`}>
          {children}
        </p>
      </div>
    </Reveal>
  );
}
