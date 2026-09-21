import PageBanner from "../components/clinic/PageBanner.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import IconBadge from "../components/ui/IconBadge.jsx";
import { GraduationCap, BadgeCheck, ShieldCheck, CircleCheck, MapPin } from "lucide-react";
import { TRAINING_GROUPS, DEGREES, BOARD_CERTIFICATION, LICENSURE } from "../data/training.js";
import { trainingCoronaryHeart } from "../assets/images/index.js";

const CURRENT = TRAINING_GROUPS[0].entries[0];
const PRIOR_GROUPS = TRAINING_GROUPS.slice(1);
const PRIOR = PRIOR_GROUPS.flatMap((g) => g.entries);

function CredentialColumn({ icon, title, rows }) {
  return (
    <div className="sm:px-8 first:sm:pl-0 last:sm:pr-0">
      <div className="flex items-center gap-3 mb-5">
        <IconBadge icon={icon} size={16} compact />
        <h3 className="text-sm font-semibold text-navy-900 tracking-wide">{title}</h3>
      </div>
      <ul className="space-y-3.5">
        {rows.map((r, i) => (
          <li key={i} className="flex gap-2 text-sm">
            <CircleCheck size={15} className="mt-0.5 shrink-0 text-crimson-600/70" />
            <span>
              <p className="text-slate-800 font-medium leading-snug">{r.title}</p>
              {r.date && <p className="text-xs text-slate-500 mt-0.5">{r.date}</p>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Training() {
  return (
    <>
      <PageBanner
        eyebrow="Training & Practice"
        title="From fellowship to a 1,000-case-a-year practice"
        visual="clinic"
        backdrop="teaching"
      />

      <section className="pb-10 pt-10 sm:pt-16">
        <div className="container-lg">
          {/* Current practice: full-width split panel — details left, volume block right */}
          <Reveal className="glass-card relative overflow-hidden grid lg:grid-cols-[1.45fr_1fr]">
            <div className="relative p-6 sm:p-10">
              <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">Current practice</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson-600/10 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-crimson-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson-600 animate-pulse" />
                  {CURRENT.date}
                </span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">{CURRENT.title}</h2>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin size={14} className="text-crimson-600/70" /> {CURRENT.org}
              </p>
              <p className="mt-4 text-[15px] text-slate-600 leading-relaxed max-w-xl">{CURRENT.desc}</p>
              {CURRENT.focus && (
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {CURRENT.focus.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 rounded-xl border border-slate-900/[0.07] bg-paper-50 px-3.5 py-2.5 text-[13px] font-medium text-navy-900"
                    >
                      <CircleCheck size={15} className="shrink-0 text-crimson-600" /> {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-gradient-to-br from-crimson-600 to-[#7a1425] p-6 text-white sm:p-10">
              {/* Anatomy engraving as a textbook-style texture, fading out toward the figures */}
              <img
                src={trainingCoronaryHeart}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 top-1/2 w-[26rem] max-w-none -translate-y-1/2 select-none opacity-[0.22] mix-blend-screen grayscale"
                style={{
                  maskImage: "radial-gradient(ellipse closest-side at center, black 40%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse closest-side at center, black 40%, transparent 100%)",
                }}
              />
              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">Annual volume</p>
                <p className="mt-3 font-serif text-6xl leading-none sm:text-7xl">{CURRENT.volume}</p>
                <p className="mt-2 text-sm text-white/80">{CURRENT.volumeNote}</p>
              </div>
              <div className="relative grid grid-cols-2 gap-4 border-t border-white/20 pt-5">
                <div>
                  <p className="text-2xl font-semibold leading-none">{new Date().getFullYear() - 2021}+</p>
                  <p className="mt-1.5 text-xs text-white/70">years in practice</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold leading-none">{PRIOR.length}</p>
                  <p className="mt-1.5 text-xs text-white/70">training positions</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Prior training: grouped two-column card grid */}
          <div className="mt-12 space-y-10">
            {PRIOR_GROUPS.map((group, gi) => (
              <div key={group.heading}>
                <Reveal className="mb-4 flex items-center gap-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-crimson-800/80">{group.heading}</p>
                  <span className="h-px flex-1 bg-slate-900/[0.08]" />
                </Reveal>
                <div className="grid gap-4 sm:grid-cols-2">
                  {group.entries.map((entry, i) => (
                    <Reveal
                      key={`${entry.date}-${entry.title}`}
                      delay={0.04 * (i + gi)}
                      className="glass-card relative flex flex-col p-5 sm:p-6"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">{entry.date}</p>
                      <p className="mt-2 text-[15px] font-semibold text-navy-900 leading-snug">{entry.title}</p>
                      {entry.org && <p className="mt-1 text-[13px] text-slate-500">{entry.org}</p>}
                      {entry.desc && <p className="mt-2.5 text-[13px] text-slate-600 leading-relaxed">{entry.desc}</p>}
                      {entry.items && (
                        <ul className="mt-2.5 space-y-1">
                          {entry.items.map((item) => (
                            <li key={item} className="flex gap-2 text-[13px] text-slate-600 leading-relaxed">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson-600/60" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {(entry.volume || entry.mentor) && (
                        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-4">
                          {entry.mentor && <p className="text-xs text-slate-500">Mentor: {entry.mentor}</p>}
                          {entry.volume && (
                            <p className="ml-auto text-right">
                              <span className="font-serif text-2xl leading-none text-crimson-700">{entry.volume}</span>
                              <span className="block text-[11px] text-slate-500">{entry.volumeNote}</span>
                            </p>
                          )}
                        </div>
                      )}
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-8 pb-14 sm:pt-10 sm:pb-16">
        <div className="container-lg">
          <Reveal className="mb-6">
            <p className="eyebrow">Credentials</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold">Degrees, board certification &amp; licensure</h2>
          </Reveal>

          <Reveal
            delay={0.06}
            className="glass-card relative overflow-hidden p-5 sm:p-10 grid sm:grid-cols-3 gap-y-8 sm:divide-x sm:divide-slate-900/[0.08] divide-y sm:divide-y-0 divide-slate-900/[0.08]"
          >
            <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600 hidden sm:block" />
            <CredentialColumn
              icon={GraduationCap}
              title="Degrees"
              rows={DEGREES.map((d) => ({ title: `${d.title} — ${d.org}`, date: d.date }))}
            />
            <CredentialColumn icon={BadgeCheck} title="Board certification" rows={BOARD_CERTIFICATION} />
            <CredentialColumn icon={ShieldCheck} title="Licensure & certification" rows={LICENSURE} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
