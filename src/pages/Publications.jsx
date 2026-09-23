import { useMemo, useRef, useState } from "react";
import { BookOpen, Search } from "lucide-react";
import Reveal from "../components/ui/Reveal.jsx";
import PageBanner from "../components/clinic/PageBanner.jsx";
import { PUBLICATIONS, BOOK_CHAPTERS } from "../data/citations.js";
import { renderCitation } from "../utils/text.js";
import { TOPICS, publicationTopic, groupByYear } from "../utils/publications.js";
import { publicationsStethoscope } from "../assets/images/index.js";
import { smoothScrollTo } from "../components/utility/SmoothScroll.jsx";

const FILTERS = ["All", ...TOPICS, "Chapters"];

const IMPACT = {
  papers: 54,
  citations: 1010,
  h: 17,
  i10: 30,
};

function CitationLine({ text, query }) {
  const parts = renderCitation(text, query);
  return (
    <p className="min-w-0 text-[13.5px] sm:text-sm leading-relaxed text-slate-700 break-words">
      {parts.map((part, i) =>
        part.author ? (
          <strong key={i} className="text-navy-900 font-semibold">
            {part.text}
          </strong>
        ) : part.match ? (
          <mark key={i} className="bg-crimson-200/70 text-navy-900 rounded px-0.5">
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </p>
  );
}

export default function Publications() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const listRef = useRef(null);
  const q = query.trim().toLowerCase();

  const counts = useMemo(() => {
    const next = { All: PUBLICATIONS.length, Chapters: BOOK_CHAPTERS.length };
    TOPICS.forEach((t) => {
      next[t] = PUBLICATIONS.filter((p) => publicationTopic(p) === t).length;
    });
    return next;
  }, []);

  const papers = useMemo(() => {
    let list = topic === "Chapters" ? BOOK_CHAPTERS : PUBLICATIONS;
    if (topic !== "All" && topic !== "Chapters") {
      list = list.filter((p) => publicationTopic(p) === topic);
    }
    if (q) list = list.filter((p) => p.toLowerCase().includes(q));
    return list;
  }, [topic, q]);

  const grouped = topic === "Chapters" ? [{ year: "Chapters", items: papers }] : groupByYear(papers);
  const maxTopic = Math.max(...TOPICS.map((t) => counts[t]));

  const pickTopic = (name) => {
    setTopic(name);
    smoothScrollTo(listRef.current, { offset: -96 });
  };

  return (
    <>
      <PageBanner
        eyebrow="Scholarship"
        title="Peer-reviewed publications"
        lede={`${IMPACT.papers} papers · h-index ${IMPACT.h}. Search the full record by topic, year, or keyword.`}
        visual="study"
        backdrop="research"
      />

      <section className="pb-10 pt-10 sm:pt-16">
        <div className="container-lg">
          {/* Research footprint: topic breakdown left, citation impact right */}
          <Reveal className="glass-card relative overflow-hidden grid lg:grid-cols-[1.45fr_1fr]">
            <div className="relative p-6 sm:p-10">
              <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
              <p className="eyebrow">Research footprint</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">Where the work lands</h2>
              <p className="mt-2 text-[15px] text-slate-600 leading-relaxed max-w-xl">
                {PUBLICATIONS.length} peer-reviewed papers and {BOOK_CHAPTERS.length} chapters &amp; features, grouped
                by clinical area. Pick an area to jump to its papers.
              </p>

              <ul className="mt-6 space-y-2.5">
                {TOPICS.map((t) => (
                  <li key={t}>
                    <button
                      type="button"
                      onClick={() => pickTopic(t)}
                      className="group grid w-full grid-cols-[9.5rem_1fr_2rem] items-center gap-3 text-left sm:grid-cols-[11rem_1fr_2rem]"
                    >
                      <span className="text-[13px] font-medium text-navy-900 group-hover:text-crimson-700">{t}</span>
                      <span className="h-2.5 overflow-hidden rounded-full bg-slate-200/70">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-crimson-500 to-crimson-700 transition-opacity group-hover:opacity-80"
                          style={{ width: `${(counts[t] / maxTopic) * 100}%` }}
                        />
                      </span>
                      <span className="text-right font-serif text-base tabular-nums text-crimson-700">{counts[t]}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => pickTopic("Chapters")}
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-900/[0.07] bg-paper-50 px-3.5 py-2.5 text-[13px] font-medium text-navy-900 hover:border-crimson-600/30"
              >
                <BookOpen size={15} className="text-crimson-600" />
                {BOOK_CHAPTERS.length} book chapters &amp; features
              </button>
            </div>

            <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-gradient-to-br from-crimson-600 to-[#7a1425] p-6 text-white sm:p-10">
              {/* Stethoscope photo: only its highlights show through the screen blend */}
              <img
                src={publicationsStethoscope}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-[0.35] mix-blend-screen grayscale"
                style={{
                  maskImage: "linear-gradient(to top left, black 20%, transparent 85%)",
                  WebkitMaskImage: "linear-gradient(to top left, black 20%, transparent 85%)",
                }}
              />
              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">Google Scholar · h-index</p>
                <p className="mt-3 font-serif text-6xl leading-none sm:text-7xl">{IMPACT.h}</p>
                <p className="mt-2 text-sm text-white/80">papers cited at least {IMPACT.h} times</p>
              </div>
              <div className="relative grid grid-cols-3 gap-4 border-t border-white/20 pt-5">
                {[
                  { value: IMPACT.citations.toLocaleString(), note: "citations" },
                  { value: IMPACT.papers, note: "papers" },
                  { value: IMPACT.i10, note: "i10-index" },
                ].map((s) => (
                  <div key={s.note}>
                    <p className="text-2xl font-semibold leading-none">{s.value}</p>
                    <p className="mt-1.5 text-xs text-white/70">{s.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section ref={listRef} className="scroll-mt-24 pb-14 sm:pb-20">
        <div className="container-lg">
          {/* Toolbar: search + topic pills */}
          <Reveal className="glass-card p-4 sm:p-5">
            <div className="relative">
              <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by keyword, journal, or year…"
                className="w-full rounded-full border border-slate-900/[0.08] bg-paper-50 pl-11 pr-5 py-3 text-base sm:text-sm text-navy-900 placeholder:text-slate-500 outline-none focus:border-crimson-500/60 focus:bg-white transition-colors"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {FILTERS.map((name) => {
                const active = topic === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setTopic(name)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors ${
                      active
                        ? "bg-gradient-to-br from-crimson-600 to-[#7a1425] text-white shadow-[0_8px_18px_-10px_rgba(122,20,37,0.8)]"
                        : "border border-slate-900/[0.08] bg-white text-slate-600 hover:border-crimson-600/30 hover:text-navy-900"
                    }`}
                  >
                    {name}
                    <span className={`text-[11px] ${active ? "text-white/70" : "text-slate-400"}`}>{counts[name]}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              {q
                ? `${papers.length} match${papers.length === 1 ? "" : "es"}`
                : topic === "All"
                  ? `${PUBLICATIONS.length} papers · ${BOOK_CHAPTERS.length} chapters`
                  : `${papers.length} in ${topic}`}
            </p>
          </Reveal>

          {papers.length === 0 && (
            <p className="mt-10 text-center text-sm text-slate-500">No results match this search.</p>
          )}

          {/* Year-grouped citations with a sticky year rail */}
          <div className="mt-10 space-y-10">
            {grouped.map((group) =>
              group.items.length === 0 ? null : (
                <div key={group.year} className="lg:grid lg:grid-cols-[9rem_1fr] lg:gap-8">
                  <div className="mb-3 lg:mb-0">
                    <div className="lg:sticky lg:top-28">
                      <p className="font-serif text-3xl leading-none text-crimson-700 lg:text-4xl">{group.year}</p>
                      <p className="mt-1.5 text-xs font-medium text-slate-500">
                        {group.items.length} {group.items.length === 1 ? "paper" : "papers"}
                      </p>
                      <span className="mt-3 hidden h-px w-12 bg-crimson-600/40 lg:block" />
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {group.items.map((item) => {
                      const area = topic === "Chapters" ? "Chapter" : publicationTopic(item);
                      return (
                        <li
                          key={item}
                          className="glass-card relative overflow-hidden p-4 pl-5 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(122,20,37,0.45)] sm:p-5 sm:pl-6"
                        >
                          <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600/70" />
                          <span className="mb-2 inline-flex rounded-full bg-crimson-600/10 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-crimson-700">
                            {area}
                          </span>
                          <CitationLine text={item} query={query.trim()} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
