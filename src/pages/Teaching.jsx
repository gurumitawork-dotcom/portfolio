import PageBanner from "../components/clinic/PageBanner.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import {
  CIMS_STORY,
  TEACHING_POSTS,
  QUALITY_IMPROVEMENT,
  FACULTY_MEETINGS,
} from "../data/teaching.js";
import { GRAND_ROUNDS } from "../data/citations.js";

export default function Teaching() {
  return (
    <>
      <PageBanner eyebrow="Teaching & Research" title="Building programs, not just publications" />

      <section className="pb-12 section-tint-a">
        <div className="container-lg pt-4">
          <Reveal className="glass-card relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
            <div className="px-5 sm:px-8 py-6 sm:py-7 sm:flex sm:items-start sm:justify-between sm:gap-10">
              <div className="min-w-0 max-w-2xl">
                <p className="eyebrow">
                  {CIMS_STORY.period} · {CIMS_STORY.place}
                </p>
                <h2 className="mt-2 text-xl sm:text-2xl font-semibold">{CIMS_STORY.title}</h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Co-founded with {CIMS_STORY.cofounder} to improve scholarly activity in the residency program.
                </p>
                <ul className="mt-4 space-y-2">
                  {CIMS_STORY.contributions.map((item) => (
                    <li key={item} className="text-sm text-slate-600 leading-relaxed pl-3 border-l-2 border-crimson-600/30">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-500">
                  {QUALITY_IMPROVEMENT.date} — {QUALITY_IMPROVEMENT.body} ({QUALITY_IMPROVEMENT.mentor})
                </p>
              </div>
              <div className="mt-6 sm:mt-0 shrink-0 flex sm:flex-col gap-6 sm:gap-5 sm:text-right">
                {CIMS_STORY.figures.map((f) => (
                  <div key={f.value}>
                    <p className="font-serif text-3xl sm:text-4xl text-crimson-700 leading-none">{f.value}</p>
                    <p className="mt-1.5 text-xs text-slate-500 max-w-[11rem] sm:ml-auto">{f.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 pt-8">
        <div className="container-lg grid lg:grid-cols-2 gap-6">
          <Reveal className="glass-card relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
            <div className="px-5 sm:px-8 py-5 sm:py-6">
              <p className="eyebrow">Teaching</p>
              <h2 className="mt-2 text-xl sm:text-2xl font-semibold">Where the teaching happened</h2>
            </div>
            {TEACHING_POSTS.map((post) => (
              <div
                key={post.place}
                className="grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-6 px-5 sm:px-8 py-4 border-t border-slate-900/[0.07]"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-crimson-700 sm:pt-0.5">{post.years}</p>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-navy-900 leading-snug">{post.place}</p>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{post.duties.join(" · ")}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.06} className="glass-card relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
            <div className="px-5 sm:px-8 py-5 sm:py-6">
              <p className="eyebrow">National faculty</p>
              <h2 className="mt-2 text-xl sm:text-2xl font-semibold">Meetings and sessions</h2>
            </div>
            {FACULTY_MEETINGS.map((f) => (
              <div
                key={f.venue}
                className="grid sm:grid-cols-[8.5rem_1fr] gap-1 sm:gap-6 px-5 sm:px-8 py-3.5 border-t border-slate-900/[0.07]"
              >
                <p className="text-sm font-semibold text-crimson-700 sm:pt-0.5">{f.venue}</p>
                <div className="min-w-0">
                  <p className="text-sm text-navy-900">{f.role}</p>
                  {f.detail && <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{f.detail}</p>}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pt-8 pb-14 sm:pt-10 sm:pb-16 section-tint-b">
        <div className="container-lg">
          <Reveal className="glass-card relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
            <div className="px-5 sm:px-8 py-5 sm:py-6">
              <p className="eyebrow">Invited teaching</p>
              <h2 className="mt-2 text-xl sm:text-2xl font-semibold">Grand rounds &amp; presentations</h2>
            </div>
            {GRAND_ROUNDS.map((group) => (
              <div
                key={group.year}
                className="grid sm:grid-cols-[5.5rem_1fr] gap-1 sm:gap-8 px-5 sm:px-8 py-3.5 border-t border-slate-900/[0.07]"
              >
                <p className="font-serif text-base text-crimson-700 sm:pt-0.5">{group.year}</p>
                <ul className="min-w-0 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
