import { Link } from "react-router-dom";
import AboutHero from "../components/clinic/AboutHero.jsx";
import AboutPractice from "../components/clinic/AboutPractice.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import CommitmentGrid from "../components/clinic/CommitmentGrid.jsx";
import IconBadge from "../components/ui/IconBadge.jsx";
import { BadgeCheck, ChevronRight, GraduationCap, HeartPulse, Route, ShieldAlert } from "lucide-react";
import {
  FOCUS_AREAS,
  RESEARCH_METRICS,
  RESEARCH_SOURCE,
  TEACHING_FACTS,
} from "../data/profile.js";
import { TRAINING_GROUPS, DEGREES, BOARD_CERTIFICATION } from "../data/training.js";
import { structuralHeartGlow } from "../assets/images/index.js";

const FELLOWSHIPS = TRAINING_GROUPS.find((g) => g.heading === "Fellowships")?.entries ?? [];
const FOCUS_ICONS = [HeartPulse, ShieldAlert, Route];

export default function About() {
  const venues = TEACHING_FACTS.rows.find((r) => r.label === "Venues");
  const throughline = TEACHING_FACTS.rows.find((r) => r.items);
  const cims = TEACHING_FACTS.rows.find((r) => r.label === "CIMS");

  return (
    <>
      <AboutHero />
      <AboutPractice />

      <section className="about-training">
        <div className="container-lg">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Training</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Fellowships &amp; degrees</h2>
            </div>
            <Link to="/training" className="btn-text shrink-0">
              Full training history <ChevronRight size={14} />
            </Link>
          </Reveal>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {FELLOWSHIPS.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06} className="glass-card-hover flex items-start gap-4 p-5 sm:p-6">
                <IconBadge icon={GraduationCap} compact />
                <div className="min-w-0">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-crimson-700">{f.date}</p>
                  <p className="mt-1 text-[15px] font-semibold leading-snug text-navy-900">{f.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{f.org}</p>
                  {f.volume && (
                    <p className="mt-2 inline-block rounded-md bg-crimson-50 px-2 py-0.5 text-[11px] font-semibold text-crimson-800">
                      {f.volume} {f.volumeNote}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18} className="glass-card relative mt-5 overflow-hidden p-5 sm:p-7">
            <span className="absolute inset-y-0 left-0 hidden w-[3px] bg-crimson-600 sm:block" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <GraduationCap size={14} className="text-crimson-600" />
                  Degrees
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {DEGREES.map((d) => d.title).join(" · ")} — {DEGREES[0].org}
                </p>
              </div>
              <div className="border-t border-slate-100 pt-5 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <BadgeCheck size={14} className="text-crimson-600" />
                  Board certification
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {BOARD_CERTIFICATION.map((b) => b.title).join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CommitmentGrid eyebrow="Clinical pillars" />

      <section className="relative overflow-hidden bg-[#fde8eb] pb-14 sm:pb-16">
        {/* Chapter banner: the structural-heart image gets real presence here instead of a faint watermark */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1c1230] via-[#3a0e14] to-[#591019] pb-20 pt-14 sm:pb-24 sm:pt-16">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:26px_26px]" />
          <img
            src={structuralHeartGlow}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-left opacity-[0.55] mix-blend-luminosity sm:w-[70%] lg:w-[55%]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #1c1230 0%, rgba(28,18,48,0.85) 38%, rgba(28,18,48,0.35) 62%, transparent 85%)",
            }}
          />

          <div className="container-lg relative z-10">
            <Reveal className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-crimson-400">
                Teaching, Research &amp; Focus
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Beyond the cath lab</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Faculty appointments, a self-founded research group, and the clinical ground the practice
                stands on — measured, not asserted.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="container-lg relative z-10 -mt-10 sm:-mt-12">
          {/* Teaching narrative + career-pathway timeline, with CIMS figures as a sidebar — floated up onto the banner */}
          <Reveal delay={0.05} className="glass-card relative grid gap-8 overflow-hidden p-6 shadow-[0_30px_60px_-25px_rgba(28,18,48,0.45)] sm:p-8 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
            <div>
              <h3 className="text-xl font-semibold">{TEACHING_FACTS.title}</h3>
              {venues && <p className="mt-2 text-sm leading-relaxed text-slate-600">{venues.text}</p>}
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{cims?.text}</p>

              {throughline && (
                <ol className="relative mt-7 space-y-5 border-l-2 border-crimson-200 pl-6">
                  {throughline.items.map((item, i) => (
                    <li key={item} className="relative">
                      <span className="absolute -left-[1.97rem] top-0.5 grid h-6 w-6 place-items-center rounded-full bg-crimson-600 text-[10px] font-bold text-white ring-4 ring-white">
                        {i + 1}
                      </span>
                      <span className="text-sm font-medium text-navy-900">{item}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>

            <div className="rounded-2xl border border-crimson-200/70 bg-[#fff5f6] p-5 sm:p-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-crimson-700">CIMS Research Group</p>
              <div className="mt-4 space-y-5">
                {cims?.figures?.map((fig) => (
                  <div key={fig.note}>
                    <p className="font-serif text-3xl font-bold text-crimson-700">{fig.value}</p>
                    <p className="mt-1 text-xs leading-snug text-slate-600">{fig.note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-t border-crimson-200/70 pt-4 text-xs leading-relaxed text-slate-500">
                Founded at Creighton University with Dr. Vivekanandan.
              </p>
            </div>
          </Reveal>

          {/* Clinical focus as icon cards */}
          <Reveal delay={0.1} className="mt-10">
            <p className="eyebrow">Clinical focus</p>
            <h2 className="mt-2 text-2xl font-semibold">Where the practice concentrates</h2>
          </Reveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {FOCUS_AREAS.map((f, i) => {
              const Icon = FOCUS_ICONS[i];
              return (
                <Reveal key={f.title} delay={0.12 + i * 0.05} className="glass-card-hover p-6">
                  <IconBadge icon={Icon} compact />
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {f.items ? f.items.join(" · ") : f.text}
                  </p>
                  {f.note && <p className="mt-2 text-xs text-slate-500">{f.note}</p>}
                </Reveal>
              );
            })}
          </div>

          {/* Research metrics as a dark console band, echoing the clinical-pillars panel above */}
          <Reveal delay={0.2} className="relative mt-10 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0b1626] via-[#12213a] to-[#1c1230]">
            <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:26px_26px]" />
            <div className="relative grid grid-cols-2 lg:grid-cols-4">
              {RESEARCH_METRICS.map((m) => (
                <div
                  key={m.label}
                  className="border-b border-white/10 px-5 py-7 sm:px-8 lg:border-b-0 lg:border-r last:lg:border-r-0"
                >
                  <p className="font-serif text-3xl font-bold text-white sm:text-4xl">{m.value}</p>
                  <p className="mt-1.5 text-xs text-slate-400">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="relative flex flex-col gap-3 border-t border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="text-xs text-slate-400">{RESEARCH_SOURCE}</p>
              <Link
                to="/publications"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-crimson-400 hover:text-white"
              >
                View publications <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
