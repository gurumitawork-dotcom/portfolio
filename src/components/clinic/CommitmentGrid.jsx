import { Activity, Footprints, Route, GraduationCap } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import { COMMITMENT_PILLARS } from "../../data/clinic.js";

const ICONS = [Activity, Footprints, Route, GraduationCap];

export default function CommitmentGrid({ eyebrow = "Commitment to better heart health" }) {
  return (
    <section className="section">
      <div className="container-lg">
        <Reveal className="text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Four pillars of the practice</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Mapped from the CV — not a generic clinic checklist.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENT_PILLARS.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.id} delay={i * 0.05} className="glass-card-hover p-6 sm:p-7">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-crimson-50 text-crimson-700">
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.summary}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
