import { Link } from "react-router-dom";
import PageBanner from "../components/clinic/PageBanner.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import CommitmentGrid from "../components/clinic/CommitmentGrid.jsx";
import { Phone, ChevronRight } from "lucide-react";
import {
  CURRENT_ROLES,
  OFFICE,
  FOCUS_AREAS,
  RESEARCH_METRICS,
  RESEARCH_SOURCE,
  PRACTICE_FACTS,
  TEACHING_FACTS,
} from "../data/profile.js";
import { TRAINING_GROUPS, DEGREES, BOARD_CERTIFICATION } from "../data/training.js";
import { DOCTOR_SPOTLIGHT } from "../data/clinic.js";
import { maheshPortrait } from "../assets/images/index.js";

const FELLOWSHIPS = TRAINING_GROUPS.find((g) => g.heading === "Fellowships")?.entries ?? [];

export default function About() {
  const throughline = TEACHING_FACTS.rows.find((r) => r.items);
  const cims = TEACHING_FACTS.rows.find((r) => r.label === "CIMS");

  return (
    <>
      <PageBanner eyebrow="About the doctor" title={DOCTOR_SPOTLIGHT.name} lede={DOCTOR_SPOTLIGHT.credentials} visual="doctor" />

      <section className="pb-8">
        <div className="container-lg grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="glass-card overflow-hidden">
            <img src={maheshPortrait} alt="Mahesh Anantha Narayanan" className="aspect-[3/4] w-full object-cover object-[center_12%]" />
            <div className="p-6">
              <p className="text-lg font-semibold">{DOCTOR_SPOTLIGHT.name}</p>
              <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-crimson-700">{DOCTOR_SPOTLIGHT.credentials}</p>
              <p className="mt-3 text-sm text-slate-600">{OFFICE.name}</p>
              <p className="text-sm text-slate-500">{OFFICE.address.join(", ")}</p>
              <a href={`tel:+1${OFFICE.phone.replace(/\D/g, "")}`} className="btn-primary mt-5 w-full justify-center">
                <Phone size={16} /> {OFFICE.phone}
              </a>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="glass-card p-6 sm:p-8">
              <p className="eyebrow">Practice</p>
              <h2 className="mt-2 text-2xl font-semibold">{PRACTICE_FACTS.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{DOCTOR_SPOTLIGHT.bio}</p>
              <ul className="mt-6 divide-y divide-slate-100">
                {CURRENT_ROLES.map((r) => (
                  <li key={r.title} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between">
                    <span className="font-medium text-navy-900">{r.title}</span>
                    <span className="text-sm text-slate-500">{r.org}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600">
                <span className="font-semibold text-crimson-700">1,000+</span> documented coronary, peripheral arterial,
                and venous cases a year since 2021.
              </p>
            </Reveal>

            <Reveal delay={0.05} className="glass-card p-6 sm:p-8">
              <p className="eyebrow">Training</p>
              <h2 className="mt-2 text-2xl font-semibold">Fellowships & degrees</h2>
              <ul className="mt-5 space-y-3">
                {FELLOWSHIPS.map((f) => (
                  <li key={f.title} className="text-sm">
                    <p className="font-medium text-navy-900">{f.title}</p>
                    <p className="text-slate-500">
                      {f.org}
                      {f.date ? ` · ${f.date}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-slate-600">
                {DEGREES.map((d) => d.title).join(" · ")} — {DEGREES[0].org}
              </p>
              <p className="mt-2 text-xs text-slate-500">Boards: {BOARD_CERTIFICATION.map((b) => b.title).join("; ")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <CommitmentGrid eyebrow="Clinical pillars" />

      <section className="bg-[#fde8eb] py-14 sm:py-16">
        <div className="container-lg space-y-8">
          <Reveal className="glass-card p-6 sm:p-8">
            <p className="eyebrow">Teaching & CIMS</p>
            <h2 className="mt-2 text-2xl font-semibold">{TEACHING_FACTS.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{cims?.text}</p>
            {throughline && (
              <ol className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm text-slate-700">
                {throughline.items.map((item, i) => (
                  <li key={item} className="inline-flex items-baseline gap-2">
                    {i > 0 && <span className="text-crimson-600">›</span>}
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </Reveal>

          <Reveal>
            <p className="eyebrow">Clinical focus</p>
            <h2 className="mt-2 text-2xl font-semibold">Where the practice concentrates</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {FOCUS_AREAS.map((f) => (
              <Reveal key={f.title} className="glass-card p-6">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.items ? f.items.join(" · ") : f.text}</p>
                {f.note && <p className="mt-2 text-xs text-slate-500">{f.note}</p>}
              </Reveal>
            ))}
          </div>

          <Reveal className="glass-card overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {RESEARCH_METRICS.map((m) => (
                <div key={m.label} className="border-b border-slate-100 px-5 py-6 sm:px-8 lg:border-b-0 lg:border-r last:lg:border-r-0">
                  <p className="text-3xl font-semibold text-crimson-700">{m.value}</p>
                  <p className="mt-1.5 text-xs text-slate-500">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="text-xs text-slate-500">{RESEARCH_SOURCE}</p>
              <Link to="/publications" className="btn-text">
                View publications <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
