import PageBanner from "../components/clinic/PageBanner.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { CircleCheck, ClipboardCheck, FlaskConical, GraduationCap, MapPin, Mic, Presentation } from "lucide-react";
import {
  CIMS_STORY,
  TEACHING_POSTS,
  QUALITY_IMPROVEMENT,
  FACULTY_MEETINGS,
} from "../data/teaching.js";
import { GRAND_ROUNDS } from "../data/citations.js";
import { teachingAnatomyHeart } from "../assets/images/index.js";

const KINDS = {
  faculty: { label: "National faculty", icon: Mic },
  talk: { label: "Grand rounds & talks", icon: Presentation },
  post: { label: "Teaching post", icon: GraduationCap },
  research: { label: "Research", icon: FlaskConical },
  qi: { label: "Quality improvement", icon: ClipboardCheck },
};

const years = (s) => (s.match(/\d{4}/g) ?? []).map(Number);

// Merge every teaching activity into one list grouped by year, newest first.
const TIMELINE = (() => {
  const events = [
    ...FACULTY_MEETINGS.map((f) => ({
      year: Math.max(...years(f.venue)),
      kind: "faculty",
      title: `${f.role} · ${f.venue}`,
      detail: f.detail,
    })),
    ...GRAND_ROUNDS.flatMap((g) =>
      g.items.map((item) => ({
        year: years(g.year)[0],
        kind: "talk",
        title: item,
        range: g.year.includes("–") ? g.year : undefined,
      }))
    ),
    ...TEACHING_POSTS.map((p) => ({
      year: years(p.years)[0],
      kind: "post",
      title: p.place,
      range: p.years,
      bullets: p.duties,
    })),
    {
      year: years(QUALITY_IMPROVEMENT.date)[0],
      kind: "qi",
      title: QUALITY_IMPROVEMENT.body,
      detail: `Mentor: ${QUALITY_IMPROVEMENT.mentor}`,
      range: QUALITY_IMPROVEMENT.date,
    },
    {
      year: years(CIMS_STORY.period)[0],
      kind: "research",
      title: "Founded the CIMS resident & student research group",
      detail: `With ${CIMS_STORY.cofounder}, ${CIMS_STORY.place}`,
      range: CIMS_STORY.period,
    },
  ];

  const byYear = new Map();
  for (const ev of events) {
    if (!byYear.has(ev.year)) byYear.set(ev.year, []);
    byYear.get(ev.year).push(ev);
  }
  return [...byYear.entries()].sort((a, b) => b[0] - a[0]).map(([year, evs]) => ({ year, events: evs }));
})();

export default function Teaching() {
  return (
    <>
      <PageBanner
        eyebrow="Teaching & Research"
        title="Building programs, not just publications"
        visual="desk"
        backdrop="anatomy"
      />

      <section className="pb-10 pt-10 sm:pt-16">
        <div className="container-lg">
          {/* CIMS: full-width split panel — story left, impact block right */}
          <Reveal className="glass-card relative overflow-hidden grid lg:grid-cols-[1.45fr_1fr]">
            <div className="relative p-6 sm:p-10">
              <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">Research program</p>
                <span className="inline-flex items-center rounded-full bg-crimson-600/10 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-crimson-700">
                  {CIMS_STORY.period}
                </span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold leading-tight">{CIMS_STORY.title}</h2>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin size={14} className="text-crimson-600/70" /> {CIMS_STORY.place}
              </p>
              <p className="mt-4 text-[15px] text-slate-600 leading-relaxed max-w-xl">
                Co-founded with {CIMS_STORY.cofounder} to improve scholarly activity in the residency program.
              </p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {CIMS_STORY.contributions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 rounded-xl border border-slate-900/[0.07] bg-paper-50 px-3.5 py-3 text-[13px] leading-snug text-navy-900"
                  >
                    <CircleCheck size={15} className="mt-0.5 shrink-0 text-crimson-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-gradient-to-br from-crimson-600 to-[#7a1425] p-6 text-white sm:p-10">
              {/* Anatomy engraving as a textbook-style texture, fading out toward the figures */}
              <img
                src={teachingAnatomyHeart}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 top-1/2 w-[26rem] max-w-none -translate-y-1/2 select-none opacity-[0.22] mix-blend-screen grayscale"
                style={{
                  maskImage: "radial-gradient(ellipse closest-side at center, black 40%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse closest-side at center, black 40%, transparent 100%)",
                }}
              />
              <div className="relative space-y-7">
                {CIMS_STORY.figures.map((f) => (
                  <div key={f.value}>
                    <p className="font-serif text-5xl leading-none sm:text-6xl">{f.value}</p>
                    <p className="mt-2 text-sm text-white/80">{f.note}</p>
                  </div>
                ))}
              </div>
              <div className="relative border-t border-white/20 pt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Quality improvement · {QUALITY_IMPROVEMENT.date}
                </p>
                <p className="mt-1.5 text-sm text-white/90 leading-relaxed">
                  {QUALITY_IMPROVEMENT.body} ({QUALITY_IMPROVEMENT.mentor})
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Teaching timeline: every post, faculty role and talk merged by year, newest first */}
      <section className="pt-6 pb-14 sm:pb-20">
        <div className="container-lg">
          <Reveal className="mb-10 text-center">
            <p className="eyebrow">Teaching timeline</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">A decade at the lectern</h2>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {Object.entries(KINDS).map(([key, kind]) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/[0.08] bg-white px-3 py-1 text-[11px] font-semibold text-slate-600"
                >
                  <kind.icon size={12} className="text-crimson-600" /> {kind.label}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="relative">
            {/* Spine: left edge on mobile, centred on desktop */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-crimson-600/60 via-crimson-600/25 to-transparent lg:left-1/2 lg:-translate-x-1/2"
            />

            <ol className="space-y-12">
              {TIMELINE.map((group, gi) => {
                const right = gi % 2 === 1;
                return (
                  <li key={group.year} className="relative lg:grid lg:grid-cols-[1fr_4rem_1fr] lg:items-start">
                    {/* Year node on the spine */}
                    <div className="absolute left-0 top-0 lg:static lg:col-start-2 lg:row-start-1 lg:flex lg:justify-center">
                      <span className="relative z-[1] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-crimson-600 to-[#7a1425] shadow-[0_0_0_5px_#fdfbfb]">
                        <span className="h-2 w-2 rounded-full bg-white" />
                      </span>
                    </div>

                    {/* Oversized year on the empty side (desktop) */}
                    <Reveal
                      className={`hidden lg:row-start-1 lg:flex ${
                        right ? "lg:col-start-1 lg:justify-end lg:pr-4" : "lg:col-start-3 lg:pl-4"
                      }`}
                    >
                      <p className="font-serif text-6xl leading-none text-crimson-700/15 xl:text-7xl">{group.year}</p>
                    </Reveal>

                    {/* Entries */}
                    <div
                      className={`pl-12 lg:row-start-1 lg:pl-0 ${
                        right ? "lg:col-start-3 lg:pl-4" : "lg:col-start-1 lg:pr-4"
                      }`}
                    >
                      <p className="mb-3 font-serif text-2xl leading-8 text-crimson-700 lg:hidden">{group.year}</p>
                      <div className="space-y-3">
                        {group.events.map((ev, i) => {
                          const kind = KINDS[ev.kind];
                          return (
                            <Reveal
                              key={`${ev.kind}-${ev.title}`}
                              delay={0.04 * i}
                              className={`glass-card relative p-4 sm:p-5 ${right ? "" : "lg:text-right"}`}
                            >
                              <div
                                className={`flex flex-wrap items-center gap-2 ${right ? "" : "lg:flex-row-reverse"}`}
                              >
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson-600/10 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-crimson-700">
                                  <kind.icon size={11} /> {kind.label}
                                </span>
                                {ev.range && <span className="text-[11px] text-slate-500">{ev.range}</span>}
                              </div>
                              <p className="mt-2 text-[14.5px] font-semibold text-navy-900 leading-snug">{ev.title}</p>
                              {ev.detail && <p className="mt-1 text-[13px] text-slate-600 leading-relaxed">{ev.detail}</p>}
                              {ev.bullets && (
                                <ul className="mt-2 space-y-1">
                                  {ev.bullets.map((b) => (
                                    <li key={b} className="text-[13px] text-slate-600 leading-relaxed">
                                      {b}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </Reveal>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
