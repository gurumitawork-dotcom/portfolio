import { Activity, Footprints, Route, GraduationCap } from "lucide-react";
import PageBanner from "../components/clinic/PageBanner.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { CLINIC_SERVICES } from "../data/clinic.js";
import { maheshClinic, maheshHeart } from "../assets/images/index.js";

const ICONS = [Activity, Footprints, Route, GraduationCap];

export default function Services() {
  return (
    <>
      <PageBanner
        eyebrow="Services"
        title="Cardiac care grounded in the CV"
        lede="Four areas of practice at White River Health. No invented checkup packages or procedure menus."
      />

      <section className="pb-16">
        <div className="container-lg">
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <Reveal className="overflow-hidden rounded-[1.75rem]">
              <img src={maheshClinic} alt="Mahesh Anantha Narayanan" className="aspect-[3/2] h-auto w-full object-cover object-[center_18%]" />
            </Reveal>
            <Reveal delay={0.06} className="overflow-hidden rounded-[1.75rem]">
              <img src={maheshHeart} alt="Mahesh Anantha Narayanan" className="aspect-[3/2] h-auto w-full object-cover object-center" />
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {CLINIC_SERVICES.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={s.id} delay={i * 0.05} className="glass-card p-6 sm:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-crimson-50 text-crimson-700">
                    <Icon size={22} />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold sm:text-2xl">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.summary}</p>
                  {s.items.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {s.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.note && <p className="mt-4 text-xs text-slate-500">{s.note}</p>}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
