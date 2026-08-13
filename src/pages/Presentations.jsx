import { useMemo, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { PRESENTATIONS } from "../data/citations.js";
import { renderCitation } from "../utils/text.js";
import { MEETINGS, presentationMeetings, presentationYear } from "../utils/presentations.js";

function CitationLine({ text }) {
  const parts = renderCitation(text);
  return (
    <p className="min-w-0 text-[13.5px] sm:text-sm leading-relaxed text-slate-700 break-words">
      {parts.map((part, i) =>
        part.author ? (
          <strong key={i} className="text-navy-900 font-semibold">
            {part.text}
          </strong>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </p>
  );
}

function talksByYear(items) {
  const map = new Map();
  items.forEach((item) => {
    const year = presentationYear(item) || "—";
    if (!map.has(year)) map.set(year, []);
    map.get(year).push(item);
  });
  return [...map.entries()].sort((a, b) => String(b[0]).localeCompare(String(a[0])));
}

export default function Presentations() {
  const meetings = useMemo(
    () =>
      MEETINGS.map((id) => ({
        id,
        count: PRESENTATIONS.filter((p) => presentationMeetings(p).includes(id)).length,
      })).filter((m) => m.count > 0),
    []
  );

  const [active, setActive] = useState(meetings[0]?.id ?? "CRT");

  const talks = useMemo(
    () => PRESENTATIONS.filter((p) => presentationMeetings(p).includes(active)),
    [active]
  );
  const years = useMemo(() => talksByYear(talks), [talks]);

  const span = useMemo(() => {
    const ys = PRESENTATIONS.map(presentationYear).filter(Boolean).sort();
    return { first: ys[0], last: ys[ys.length - 1] };
  }, []);

  return (
    <>
      <section className="relative pt-28 pb-8 sm:pt-40 sm:pb-10">
        <div className="container-lg">
          <Reveal immediate>
            <p className="eyebrow">Scholarship</p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">Presentations</h1>
            <p className="mt-4 max-w-lg text-slate-600 text-base sm:text-lg leading-relaxed">
              Choose a meeting to open its program.
            </p>
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <p className="rounded-full flex items-baseline justify-between gap-3 px-4 py-2.5 sm:px-5 bg-teal-50 border border-teal-200/80">
                <span className="text-xs text-slate-500">Years</span>
                <span className="font-serif text-lg text-navy-900 tabular-nums">
                  {span.first}–{span.last}
                </span>
              </p>
              <p className="rounded-full flex items-baseline justify-between gap-3 px-4 py-2.5 sm:px-5 bg-teal-50 border border-teal-200/80">
                <span className="text-xs text-slate-500">Oral &amp; poster</span>
                <span className="font-serif text-lg text-teal-800 tabular-nums">{PRESENTATIONS.length}</span>
              </p>
              <p className="rounded-full flex items-baseline justify-between gap-3 px-4 py-2.5 sm:px-5 bg-teal-50 border border-teal-200/80">
                <span className="text-xs text-slate-500">Meetings</span>
                <span className="font-serif text-lg text-teal-800 tabular-nums">{meetings.length}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-lg">
          <div className="glass-card relative overflow-hidden grid lg:grid-cols-[12.5rem_minmax(0,1fr)]">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-teal-600 z-10" />
            <div
              role="radiogroup"
              aria-label="Meeting"
              className="grid grid-cols-2 lg:grid-cols-1 gap-px bg-slate-900/[0.08] lg:border-r lg:border-slate-900/[0.08]"
            >
              {meetings.map((m) => {
                const on = active === m.id;
                return (
                  <label
                    key={m.id}
                    className={`flex items-baseline justify-between gap-3 px-4 py-3 cursor-pointer ${
                      on ? "bg-teal-800 text-white" : "bg-white text-navy-900 lg:hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="presentation-meeting"
                      value={m.id}
                      checked={on}
                      onChange={() => setActive(m.id)}
                      className="sr-only"
                    />
                    <span className="font-serif text-lg font-semibold tracking-tight">{m.id}</span>
                    <span className={`text-[11px] tabular-nums ${on ? "text-white/70" : "text-slate-500"}`}>
                      {m.count}
                    </span>
                  </label>
                );
              })}
            </div>

            <div key={active} className="min-w-0 bg-white/80 px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex items-end justify-between gap-4 border-b border-slate-900/10 pb-3">
                <h2 className="text-2xl font-semibold tracking-tight">{active}</h2>
                <p className="text-sm text-slate-500 tabular-nums">
                  {talks.length} {talks.length === 1 ? "presentation" : "presentations"}
                </p>
              </div>

              <div>
                {years.map(([year, items]) => (
                  <div
                    key={year}
                    className="grid sm:grid-cols-[4.25rem_minmax(0,1fr)] gap-2 sm:gap-5 py-5 border-b border-slate-900/[0.07] last:border-0"
                  >
                    <p className="font-serif text-xl text-teal-800 tabular-nums">{year}</p>
                    <ul className="space-y-4">
                      {items.map((item) => (
                        <li key={item}>
                          <CitationLine text={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
