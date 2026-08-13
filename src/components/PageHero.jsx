import Reveal from "./Reveal.jsx";

export default function PageHero({ eyebrow, title, lede }) {
  return (
    <div className="pt-28 pb-8 sm:pt-44 sm:pb-14">
      <div className="container-lg">
        <Reveal immediate>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-[1.75rem] sm:text-5xl font-semibold max-w-3xl break-words leading-tight">{title}</h1>
          {lede && <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-2xl">{lede}</p>}
        </Reveal>
      </div>
    </div>
  );
}
