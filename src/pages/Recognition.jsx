import PageBanner from "../components/clinic/PageBanner.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { Trophy, Medal, Star, Award } from "lucide-react";
import {
  AWARDS,
  FELLOWSHIPS,
  MEMBERSHIPS,
  COMMITTEE,
  EDITORIAL_BOARD,
  PEER_REVIEW_JOURNALS,
  OTHER_ACCOMPLISHMENTS,
} from "../data/recognition.js";
import { MEDALS } from "../data/citations.js";

const AWARD_ICONS = [Trophy, Medal, Star, Award];

export default function Recognition() {
  return (
    <>
      <PageBanner
        eyebrow="Recognition"
        title="Awards, societies & editorial service"
        visual="doctor"
        backdrop="glow"
      />

      <section className="pb-12 pt-10 sm:pt-16">
        <div className="container-lg">
          <Reveal className="glass-card relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
            <div className="p-5 sm:p-8 sm:pl-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Awards</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {AWARDS.map((a, i) => {
                const Icon = AWARD_ICONS[i];
                return (
                  <div key={a.title} className="px-5 sm:px-7 py-5 sm:py-6">
                    <Icon size={22} className="text-crimson-700" strokeWidth={1.75} />
                    <p className="mt-4 font-serif text-2xl text-crimson-800 tabular-nums">{a.year}</p>
                    <p className="mt-2 text-sm text-navy-900 leading-snug">{a.title}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Societies & Committee ---- */}
      <section className="py-16 section-tint-a">
        <div className="container-lg">
          <Reveal className="glass-card relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
            <div className="p-5 sm:p-8 sm:pl-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Professional &amp; scientific society memberships
              </h2>

              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-crimson-700">Fellowship</p>
              <ul className="mt-3 divide-y divide-slate-900/[0.07]">
                {FELLOWSHIPS.map((f) => (
                  <li
                    key={f.mark}
                    className="grid sm:grid-cols-[6.5rem_1fr] gap-1 sm:gap-8 py-3.5 first:pt-1"
                  >
                    <p className="font-serif text-2xl text-crimson-800 tracking-tight">{f.mark}</p>
                    <p className="text-sm text-navy-900 sm:pt-1.5">{f.society}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.14em] text-crimson-700">Membership</p>
              <ul className="mt-3 grid sm:grid-cols-2 gap-x-10">
                {MEMBERSHIPS.map((name) => (
                  <li
                    key={name}
                    className="text-sm text-slate-700 py-2.5 border-b border-slate-900/[0.07]"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <p className="border-t border-slate-900/[0.07] px-5 sm:px-8 sm:pl-10 py-4 text-sm text-slate-600">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-crimson-700 mr-3">
                Committee
              </span>
              {COMMITTEE}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-12 pt-6 section-tint-a">
        <div className="container-lg">
          <Reveal className="glass-card relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
            <div className="p-5 sm:p-8 sm:pl-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Editorial board member</h2>
              <ul className="mt-5 divide-y divide-slate-900/[0.07]">
                {EDITORIAL_BOARD.map((e) => (
                  <li key={e.journal} className="flex items-center justify-between gap-4 py-3.5">
                    <span className="text-sm text-navy-900 min-w-0">{e.journal}</span>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        e.role === "Active"
                          ? "bg-crimson-800 text-white"
                          : e.role === "Past"
                            ? "bg-slate-100 text-slate-500"
                            : "bg-crimson-50 text-crimson-800 border border-crimson-200/80"
                      }`}
                    >
                      {e.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-slate-900/[0.07] p-5 sm:p-8 sm:pl-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Invited peer reviewer</h2>
              <p className="mt-2 text-sm text-slate-500">{PEER_REVIEW_JOURNALS.length} journals</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {PEER_REVIEW_JOURNALS.map((j) => (
                  <span
                    key={j}
                    className="rounded-full bg-crimson-50 border border-crimson-200/80 px-3.5 py-1.5 text-xs text-navy-900"
                  >
                    {j}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pt-4 pb-16">
        <div className="container-lg">
          <Reveal className="glass-card relative overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
            <div className="p-5 sm:p-8 sm:pl-10">
              <p className="eyebrow">Medical School</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">Madras Medical College</h2>

              <div className="mt-6 flex items-start gap-4">
                <Medal size={22} className="mt-1 shrink-0 text-crimson-700" strokeWidth={1.75} />
                <div>
                  <p className="font-serif text-xl sm:text-2xl text-navy-900">Johnstone Gold Medal</p>
                  <p className="mt-1 text-sm text-slate-600">Best Outgoing Student · 2011</p>
                </div>
              </div>
            </div>

            <div className="px-5 sm:px-8 sm:pl-10 pb-8">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Subject gold medals</h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-10">
                {MEDALS.slice(1).map((m) => {
                  const [name, subject] = m.split(" — ");
                  return (
                    <li
                      key={m}
                      className="grid grid-cols-[1fr_auto] gap-3 py-2.5 border-b border-slate-900/[0.07] text-sm"
                    >
                      <span className="text-navy-900 min-w-0">{name}</span>
                      <span className="text-crimson-800 text-right">{subject}</span>
                    </li>
                  );
                })}
              </ul>

              <h3 className="mt-10 text-xl sm:text-2xl font-bold tracking-tight">Other academic accomplishments</h3>
              <ul className="mt-4">
                {OTHER_ACCOMPLISHMENTS.map((a) => (
                  <li key={a.text} className="text-sm text-slate-700 py-2.5 border-b border-slate-900/[0.07] last:border-0">
                    {a.text}
                    {a.href ? (
                      <>
                        {" "}
                        <a
                          href={a.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-crimson-700 font-medium underline-offset-2 hover:underline"
                        >
                          {a.source}
                        </a>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
