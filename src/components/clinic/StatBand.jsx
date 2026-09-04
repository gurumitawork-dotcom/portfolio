import StatCounter from "../ui/StatCounter.jsx";
import { CLINIC_COUNTERS } from "../../data/clinic.js";

export default function StatBand({ dark = true }) {
  return (
    <section className={dark ? "relative overflow-hidden bg-navy-950" : "relative bg-paper-100"}>
      <div className="container-lg grid grid-cols-2 gap-8 py-12 sm:grid-cols-4 sm:py-14">
        {CLINIC_COUNTERS.map((s) => (
          <div key={s.label} className="text-center">
            <div
              className={`text-3xl font-semibold tabular-nums sm:text-4xl ${dark ? "text-white" : "text-crimson-700"}`}
            >
              <StatCounter value={s.value} suffix={s.suffix} />
            </div>
            <p className={`mt-2 text-xs leading-snug sm:text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
