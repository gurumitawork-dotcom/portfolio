import ContactBanner from "../components/clinic/ContactBanner.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import ProficiencyDots from "../components/ui/ProficiencyDots.jsx";
import AppointmentForm from "../components/forms/AppointmentForm.jsx";
import { Mail, MapPin, Download, Navigation, ShieldCheck, CircleCheck } from "lucide-react";
import EmailLink from "../components/ui/EmailLink.jsx";
import { OFFICE } from "../data/profile.js";
import { VOLUNTEER, LANGUAGES, HOBBY_LIST } from "../data/recognition.js";
import { LICENSURE } from "../data/training.js";
import { whiteRiverMedicalCenter } from "../assets/images/index.js";
import { CLINIC_MAP_HREF } from "../data/clinic.js";

const MAP_QUERY = encodeURIComponent(`${OFFICE.name}, ${OFFICE.address.join(", ")}`);

export default function Contact() {
  return (
    <>
      <ContactBanner />

      <section className="pb-8">
        <div className="container-lg grid items-start gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            <Reveal id="appointment">
              <AppointmentForm />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.16} className="glass-card flex items-center gap-4 p-5 sm:col-span-2">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-crimson-50 text-crimson-700">
                  <Mail size={18} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-navy-900">Email</h3>
                  <EmailLink
                    email={OFFICE.email}
                    className="mt-0.5 block text-left text-sm font-medium text-slate-700 hover:text-crimson-600"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.18} className="sm:col-span-2">
                <a
                  href="/cv/Mahesh_Anantha-Narayanan_Master_CV_2026.pdf"
                  download
                  className="btn-outline w-full justify-center"
                >
                  <Download size={16} /> Download full CV
                </a>
              </Reveal>
            </div>
          </div>

          <div className="space-y-4">
            <Reveal id="location" delay={0.06} className="glass-card overflow-hidden">
              <img
                src={whiteRiverMedicalCenter}
                alt="White River Medical Center, Batesville, Arkansas"
                className="aspect-[3/2] h-auto w-full object-cover object-[85%_center]"
              />
              <div className="flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-crimson-50 text-crimson-700">
                  <MapPin size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-navy-900">Office</h3>
                  <a href={CLINIC_MAP_HREF} target="_blank" rel="noopener noreferrer" title="Open in Google Maps" className="mt-0.5 block text-sm text-slate-600 hover:text-crimson-700">
                    {OFFICE.name}
                    <br />
                    {OFFICE.address.join(", ")}
                  </a>
                </div>
              </div>
              <iframe
                title="Map to White River Health Cardiology"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                className="h-40 w-full border-0 sm:h-48 lg:h-[19rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-t border-slate-100 py-3 text-sm font-semibold text-crimson-700 hover:bg-paper-50"
              >
                <Navigation size={15} /> Get Directions
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-16 pt-6">
        <div className="container-lg">
          <Reveal className="mb-8">
            <p className="eyebrow">Beyond the clinic</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Volunteer service &amp; interests</h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="glass-card p-5 sm:p-8">
              <h3 className="mb-5 text-base font-semibold text-navy-900">Volunteer service</h3>
              <div className="relative space-y-5 border-l border-slate-200 pl-6">
                {VOLUNTEER.map((v, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-crimson-500 ring-4 ring-white" />
                    <span className="inline-block rounded-full bg-crimson-50 px-2.5 py-0.5 text-xs font-bold text-crimson-700">
                      {v.date}
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{v.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="glass-card p-5 sm:p-8">
              <h3 className="mb-5 text-base font-semibold text-navy-900">Languages</h3>
              <ul className="space-y-4">
                {LANGUAGES.map((l, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-900 text-[10px] font-bold text-white">
                      {l.code}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-medium text-slate-800">{l.lang}</span>
                        <span className="whitespace-nowrap text-[11px] text-slate-500">{l.level}</span>
                      </div>
                      <div className="mt-1.5">
                        <ProficiencyDots level={l.score} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-base font-semibold text-navy-900">Hobbies &amp; interests</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {HOBBY_LIST.map((h) => (
                  <span key={h} className="rounded-full border border-crimson-200/80 bg-crimson-50 px-3.5 py-1.5 text-sm text-navy-900">
                    {h}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 flex items-center gap-2 text-base font-semibold text-navy-900">
                <ShieldCheck size={16} className="text-crimson-600" /> Licensure &amp; certification
              </h3>
              <ul className="mt-3 space-y-2.5">
                {LICENSURE.map((l) => (
                  <li key={l.title} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2 text-slate-700">
                      <CircleCheck size={14} className="shrink-0 text-crimson-600/70" />
                      {l.title}
                    </span>
                    {l.date && <span className="whitespace-nowrap text-xs text-slate-500">{l.date}</span>}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
