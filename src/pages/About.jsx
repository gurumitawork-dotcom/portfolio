import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import EkgLine from "../components/EkgLine.jsx";
import {
  Activity,
  Footprints,
  Route,
  Phone,
  Stethoscope,
  BarChart3,
  Briefcase,
  Landmark,
  Mic,
  GitBranch,
  Users,
  ChevronRight,
} from "lucide-react";
import {
  ABOUT_LABELS,
  CURRENT_ROLES,
  OFFICE,
  FOCUS_AREAS,
  RESEARCH_METRICS,
  RESEARCH_SOURCE,
  PRACTICE_FACTS,
  TEACHING_FACTS,
} from "../data/profile.js";

const FOCUS_ICONS = [Activity, Footprints, Route];

const ROW_ICONS = {
  Scope: Stethoscope,
  Volume: BarChart3,
  Appointments: Briefcase,
  Office: Landmark,
  Venues: Mic,
  Throughline: GitBranch,
  CIMS: Users,
};

function FocusRow({ icon: Icon, title, children }) {
  return (
    <div className="grid sm:grid-cols-[minmax(12rem,16rem)_1fr] gap-2 sm:gap-8 px-5 sm:px-8 py-4 sm:py-5 border-t border-slate-900/[0.07] even:bg-slate-900/[0.02]">
      <p className="flex items-start gap-2.5">
        {Icon && <Icon size={16} className="mt-0.5 shrink-0 text-teal-700" strokeWidth={2.25} />}
        <span className="font-serif text-base font-semibold text-navy-900 leading-snug">{title}</span>
      </p>
      <div className="min-w-0 text-sm text-slate-700 leading-relaxed">{children}</div>
    </div>
  );
}

function FactRow({ label, icon: IconProp, children }) {
  const Icon = IconProp || ROW_ICONS[label];
  return (
    <div className="grid sm:grid-cols-[11rem_1fr] gap-2 sm:gap-8 px-5 sm:px-8 py-4 sm:py-5 border-t border-slate-900/[0.07] even:bg-slate-900/[0.02]">
      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-teal-700 sm:items-start sm:pt-0.5">
        {Icon && <Icon size={13} className="shrink-0 opacity-80" strokeWidth={2.25} />}
        {label}
      </p>
      <div className="min-w-0 text-sm text-slate-700 leading-relaxed">{children}</div>
    </div>
  );
}

function FactSheet({ eyebrow, title, children, delay = 0 }) {
  return (
    <Reveal delay={delay} className="glass-card relative overflow-hidden">
      <span className="absolute inset-y-0 left-0 w-[3px] bg-teal-600" />
      <div className="px-5 sm:px-8 py-5 sm:py-6">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold">{title}</h2>
      </div>
      {children}
    </Reveal>
  );
}

export default function About() {
  const throughline = TEACHING_FACTS.rows.find((r) => r.items);
  const venues = TEACHING_FACTS.rows.find((r) => r.label === "Venues");
  const cims = TEACHING_FACTS.rows.find((r) => r.label === "CIMS");

  return (
    <>
      <PageHero
        eyebrow="About"
        title="A high-volume interventional practice built on teaching and research"
      />

      <section className="pb-14 section-tint-a">
        <div className="container-lg space-y-6">
          <FactSheet eyebrow={PRACTICE_FACTS.eyebrow} title={PRACTICE_FACTS.title}>
            <FactRow label="Scope">{PRACTICE_FACTS.rows[0].text}</FactRow>
            <FactRow label="Volume">
              <span className="font-serif text-xl text-teal-700">1,000+</span>
              <span className="ml-2">documented coronary, peripheral arterial, and venous cases a year since 2021.</span>
            </FactRow>
            <FactRow label="Appointments">
              <ul>
                {CURRENT_ROLES.map((r, i) => (
                  <li
                    key={r.title}
                    className={`py-2.5 sm:grid sm:grid-cols-[1fr_auto] sm:gap-6 sm:items-baseline ${
                      i > 0 ? "border-t border-slate-900/[0.06]" : "pt-0"
                    }`}
                  >
                    <span className="font-medium text-navy-900">{r.title}</span>
                    <span className="mt-0.5 block sm:mt-0 text-xs sm:text-[13px] text-slate-500 sm:text-right">
                      {r.org}
                    </span>
                  </li>
                ))}
              </ul>
            </FactRow>
            <FactRow label="Office">
              <p className="font-medium text-navy-900">{OFFICE.name}</p>
              <p className="mt-0.5 text-slate-600">{OFFICE.address.join(", ")}</p>
              <a
                href={`tel:+1${OFFICE.phone.replace(/\D/g, "")}`}
                className="mt-2 inline-flex items-center gap-1.5 text-teal-700 font-medium"
              >
                <Phone size={13} />
                {OFFICE.phone}
              </a>
            </FactRow>
          </FactSheet>

          <FactSheet eyebrow={TEACHING_FACTS.eyebrow} title={TEACHING_FACTS.title} delay={0.06}>
            <FactRow label="Venues">{venues.text}</FactRow>
            <FactRow label="Throughline">
              <ol className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
                {throughline.items.map((item, i) => (
                  <li key={item} className="inline-flex items-baseline gap-1.5 text-slate-700">
                    {i > 0 && <span className="text-teal-600/70" aria-hidden="true">›</span>}
                    {item}
                  </li>
                ))}
              </ol>
            </FactRow>
            <FactRow label="CIMS">
              <p>{cims.text}</p>
              {cims.figures && (
                <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {cims.figures.map((f) => (
                    <span key={f.value} className="inline-flex items-baseline gap-2">
                      <span className="font-serif text-lg text-teal-700">{f.value}</span>
                      <span className="text-xs text-slate-500">{f.note}</span>
                    </span>
                  ))}
                </p>
              )}
            </FactRow>
          </FactSheet>
        </div>
      </section>

      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-12 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[#dff3f1]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_80%_-10%,rgba(20,184,166,0.28),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_8%_110%,rgba(198,154,58,0.18),transparent_50%)]" />
        <EkgLine className="pointer-events-none absolute top-6 inset-x-0 h-12 opacity-[0.16]" speed={26} />
        <div className="relative container-lg space-y-6">
          <FactSheet eyebrow={ABOUT_LABELS[2]} title="Publications with a measurable citation record">
            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-slate-900/[0.07]">
              {RESEARCH_METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className={`px-5 sm:px-8 py-5 sm:py-6 border-slate-900/[0.07] ${
                    i % 2 === 1 ? "border-l" : ""
                  } ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}
                >
                  <p className="font-serif text-3xl text-teal-700">{m.value}</p>
                  <p className="mt-1.5 text-xs text-slate-500 leading-snug">{m.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 sm:px-8 py-4 border-t border-slate-900/[0.07] bg-slate-900/[0.02]">
              <p className="text-xs text-slate-500">{RESEARCH_SOURCE}</p>
              <Link to="/publications" className="btn-text">
                View publications <ChevronRight size={14} />
              </Link>
            </div>
          </FactSheet>

          <FactSheet eyebrow="Clinical Focus" title="Where the practice concentrates" delay={0.05}>
            {FOCUS_AREAS.map((f, i) => (
              <FocusRow key={f.title} title={f.title} icon={FOCUS_ICONS[i]}>
                {f.items ? f.items.join(" · ") : f.text}
                {f.note && <p className="mt-1.5 text-xs text-slate-500">{f.note}</p>}
              </FocusRow>
            ))}
          </FactSheet>
        </div>
      </section>
    </>
  );
}
