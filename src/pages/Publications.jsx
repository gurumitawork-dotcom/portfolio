import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Reveal from "../components/ui/Reveal.jsx";
import PageBanner from "../components/clinic/PageBanner.jsx";
import { PUBLICATIONS, BOOK_CHAPTERS } from "../data/citations.js";
import { renderCitation } from "../utils/text.js";
import { TOPICS, publicationTopic, groupByYear } from "../utils/publications.js";

const FILTERS = ["All", ...TOPICS, "Chapters"];

const IMPACT = {
  papers: 54,
  citations: 1010,
  h: 17,
  i10: 30,
};

function ImpactSnapshot() {
  const bars = [
    { label: "h-index — papers cited at least 17 times", value: IMPACT.h, tone: "bg-crimson-700" },
    { label: "i10-index — papers cited at least 10 times", value: IMPACT.i10, tone: "bg-crimson-500" },
  ];

  return (
    <div className="glass-strong relative overflow-hidden rounded-[1.5rem]">
      <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
      <div className="px-5 sm:px-6 py-5 sm:py-6">
        <p className="eyebrow">Google Scholar</p>
        <p className="mt-2 font-serif text-4xl text-crimson-700 leading-none">{IMPACT.h}</p>
        <p className="mt-1.5 text-sm font-medium text-navy-900">h-index</p>
        <p className="mt-3 text-xs text-slate-500 leading-relaxed">
          {IMPACT.citations.toLocaleString()} citations · {IMPACT.papers} papers
        </p>
        <div className="mt-5 space-y-3.5">
          {bars.map((bar) => (
            <div key={bar.label}>
              <div className="flex items-baseline justify-between gap-3 mb-1.5">
                <span className="text-xs text-slate-600">{bar.label}</span>
                <span className="font-serif text-base text-crimson-700 tabular-nums">{bar.value}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200/80 overflow-hidden">
                <div
                  className={`h-full rounded-full ${bar.tone}`}
                  style={{ width: `${(bar.value / IMPACT.papers) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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

  const grouped = topic === "Chapters" ? [{ year: "Chapters & features", items: papers }] : groupByYear(papers);

  return (
    <>
      <PageBanner
        eyebrow="Scholarship"
        title="Peer-reviewed publications"
        lede={`${IMPACT.papers} papers · h-index ${IMPACT.h}. Search the full record by topic, year, or keyword.`}
      />

      <section className="pb-4">
        <div className="container-lg">
          <Reveal>
            <ImpactSnapshot />
          </Reveal>
        </div>
      </section>

      <section className="pb-14">
        <div className="container-lg">
          <Reveal>
            <div className="relative">
              <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by keyword, journal, or year…"
                className="w-full glass rounded-full pl-11 pr-5 py-3 text-base sm:text-sm text-navy-900 placeholder:text-slate-500 outline-none focus:border-crimson-500/60 focus:bg-white transition-colors"
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-b border-slate-900/[0.08]">
              {FILTERS.map((name) => {
                const active = topic === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setTopic(name)}
                    className={`pb-2.5 text-[13px] font-medium transition-colors border-b-2 -mb-px ${
                      active
                        ? "border-crimson-700 text-navy-900"
                        : "border-transparent text-slate-500 hover:text-navy-900"
                    }`}
                  >
                    {name}
                    <span className="ml-1.5 text-[11px] text-slate-400">{counts[name]}</span>
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

          <Reveal delay={0.05} className="mt-6 glass-card relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
            {papers.length === 0 && (
              <p className="px-5 sm:px-8 py-10 text-center text-sm text-slate-500">No results match this search.</p>
            )}
            {grouped.map((group, i) =>
              group.items.length === 0 ? null : (
                <div key={group.year}>
                  <p
                    className={`px-5 sm:px-8 py-2.5 font-serif text-lg text-crimson-700 bg-slate-900/[0.03] ${
                      i > 0 ? "border-t border-slate-900/[0.07]" : ""
                    }`}
                  >
                    {group.year}
                    <span className="ml-2 text-xs font-sans font-medium text-slate-400">
                      {group.items.length}
                    </span>
                  </p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item} className="px-5 sm:px-8 py-3.5 border-t border-slate-900/[0.05]">
                        <CitationLine text={item} query={query.trim()} />
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
