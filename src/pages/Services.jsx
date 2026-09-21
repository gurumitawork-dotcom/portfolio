import {
  CheckCircle2,
  Footprints,
  GraduationCap,
  HeartPulse,
  Phone,
  Route,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import PageBanner from "../components/clinic/PageBanner.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import IconBadge from "../components/ui/IconBadge.jsx";
import { CLINIC_SERVICES, CLINIC_PHONE_HREF } from "../data/clinic.js";

const SERVICE_ICONS = {
  coronary: HeartPulse,
  amputation: Footprints,
  peripheral: Route,
  teaching: GraduationCap,
};

export default function Services() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Cardiac care grounded in real experience"
        lede="Four core areas of clinical practice and academic leadership at White River Health and UAMS."
        visual="heart"
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="container-lg">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">The practice, in four parts</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Not a generic clinic checklist</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Every service below is a documented appointment, fellowship, or procedural volume from the CV —
              not a marketing category. Call the clinic directly for referrals or scheduling.
            </p>
          </Reveal>
        </div>

        <div className="container-lg mt-14 space-y-16 sm:mt-16 sm:space-y-24">
          {CLINIC_SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[s.id] || Stethoscope;
            const reversed = i % 2 === 1;

            return (
              <Reveal key={s.id} delay={i * 0.04}>
                <article id={s.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  {/* Photo */}
                  <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
                    <span
                      className={`pointer-events-none absolute -top-8 select-none font-serif text-8xl font-black leading-none text-[#f3e6e6] sm:text-9xl ${
                        reversed ? "-right-2 sm:right-2" : "-left-2 sm:left-2"
                      }`}
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#eedede] shadow-[0_20px_45px_-25px_rgba(20,35,60,0.35)]">
                      <img
                        src={s.image}
                        alt={s.imageAlt || s.title}
                        referrerPolicy="no-referrer"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`relative ${reversed ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3">
                      <IconBadge icon={Icon} compact />
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-crimson-200 bg-crimson-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-crimson-800">
                        <ShieldCheck size={12} />
                        {s.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-[#14233c] sm:text-[1.65rem]">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{s.summary}</p>

                    {s.items && s.items.length > 0 && (
                      <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-slate-700">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-crimson-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {s.note && (
                      <p className="mt-5 rounded-xl border border-[#eedede] bg-[#faf8f7] p-3.5 text-[12.5px] leading-relaxed text-slate-600">
                        {s.note}
                      </p>
                    )}

                    {s.tags && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11.5px] font-medium text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <a
                      href={CLINIC_PHONE_HREF}
                      className="btn-outline mt-6 w-full justify-center text-[13px] sm:w-auto"
                    >
                      <Phone size={14} /> Schedule consultation
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
