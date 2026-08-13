import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import IconBadge from "../components/IconBadge.jsx";
import { GraduationCap, BadgeCheck, ShieldCheck, CircleCheck } from "lucide-react";
import { TRAINING_GROUPS, DEGREES, BOARD_CERTIFICATION, LICENSURE } from "../data/training.js";

const CURRENT = TRAINING_GROUPS[0].entries[0];
const PRIOR = TRAINING_GROUPS.slice(1).flatMap((g) => g.entries);

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
            <CircleCheck size={15} className="mt-0.5 shrink-0 text-teal-600/70" />
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
      <PageHero
        eyebrow="Training & Practice"
        title="From fellowship to a 1,000-case-a-year practice"
      />

      <section className="pb-10 section-tint-a">
        <div className="container-lg">
          <Reveal className="glass-card relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-teal-600" />

            <div className="px-5 sm:px-8 py-6 sm:py-7 sm:flex sm:items-start sm:justify-between sm:gap-10">
              <div className="min-w-0">
                <p className="eyebrow">Current practice</p>
                <h2 className="mt-2 text-xl sm:text-2xl font-semibold">{CURRENT.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{CURRENT.org}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-xl">{CURRENT.desc}</p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-teal-700">{CURRENT.date}</p>
              </div>
              <div className="mt-5 sm:mt-0 shrink-0 sm:text-right">
                <p className="font-serif text-4xl text-teal-700 leading-none">{CURRENT.volume}</p>
                <p className="mt-1.5 text-xs text-slate-500">{CURRENT.volumeNote}</p>
              </div>
            </div>

            <div className="px-5 sm:px-8 py-2.5 border-t border-slate-900/[0.07] bg-slate-900/[0.03]">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-800/80">Prior training</p>
            </div>

            <ul>
              {PRIOR.map((entry) => (
                <li
                  key={`${entry.date}-${entry.title}`}
                  className="grid sm:grid-cols-[10.5rem_1fr] gap-1 sm:gap-8 px-5 sm:px-8 py-3.5 border-t border-slate-900/[0.06]"
                >
                  <p className="text-[12px] text-slate-500 sm:pt-0.5 leading-snug">{entry.date}</p>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-navy-900 leading-snug">{entry.title}</p>
                    {entry.org && <p className="mt-0.5 text-[13px] text-slate-500">{entry.org}</p>}
                    {entry.desc && (
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{entry.desc}</p>
                    )}
                    {(entry.volume || entry.mentor) && (
                      <p className="mt-1 text-xs text-slate-500">
                        {entry.volume && (
                          <span className="text-teal-700 font-semibold">
                            {entry.volume} {entry.volumeNote}
                          </span>
                        )}
                        {entry.volume && entry.mentor && <span className="text-slate-300"> · </span>}
                        {entry.mentor && <span>Mentor: {entry.mentor}</span>}
                      </p>
                    )}
                    {entry.items && (
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{entry.items.join(" · ")}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
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
            <span className="absolute inset-y-0 left-0 w-[3px] bg-teal-600 hidden sm:block" />
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
