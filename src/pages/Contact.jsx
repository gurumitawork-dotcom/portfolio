import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import CardGlow from "../components/CardGlow.jsx";
import IconBadge from "../components/IconBadge.jsx";
import ProficiencyDots from "../components/ProficiencyDots.jsx";
import { Phone, Smartphone, MapPin, Download } from "lucide-react";
import { OFFICE } from "../data/profile.js";
import { VOLUNTEER, LANGUAGES, HOBBY_LIST } from "../data/recognition.js";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Referrals, speaking & collaboration inquiries"
        lede="For patient referrals, conference invitations, editorial requests, or research collaboration, reach the office directly."
      />

      <section className="pb-8">
        <div className="container-lg grid sm:grid-cols-3 gap-4">
          <Reveal className="glass-card-hover group relative overflow-hidden p-5 flex items-center gap-4">
            <CardGlow tone="teal" className="-top-8 -right-8 h-24 w-24" />
            <IconBadge icon={MapPin} size={19} compact />
            <div className="relative min-w-0">
              <h3 className="text-sm font-semibold text-navy-900">Office</h3>
              <p className="mt-0.5 text-xs text-slate-600 leading-snug">
                {OFFICE.name}
                <br />
                {OFFICE.address.join(", ")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06} className="glass-card-hover group relative overflow-hidden p-5 flex items-center gap-4">
            <CardGlow tone="gold" className="-top-8 -right-8 h-24 w-24" />
            <IconBadge icon={Phone} size={19} compact />
            <div className="relative min-w-0">
              <h3 className="text-sm font-semibold text-navy-900">Office phone</h3>
              <a
                href={`tel:+1${OFFICE.phone.replace(/\D/g, "")}`}
                className="mt-0.5 block text-sm font-medium text-slate-700 hover:text-teal-600"
              >
                {OFFICE.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="glass-card-hover group relative overflow-hidden p-5 flex items-center gap-4">
            <CardGlow tone="teal" className="-top-8 -right-8 h-24 w-24" />
            <IconBadge icon={Smartphone} size={19} compact />
            <div className="relative min-w-0">
              <h3 className="text-sm font-semibold text-navy-900">Mobile</h3>
              <a
                href={`tel:+1${OFFICE.mobile.replace(/\D/g, "")}`}
                className="mt-0.5 block text-sm font-medium text-slate-700 hover:text-teal-600"
              >
                {OFFICE.mobile}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-1 sm:col-span-3">
            <a href="/cv/Mahesh_Anantha-Narayanan_Master_CV_2026.docx" download className="btn-primary w-full sm:w-auto">
              <Download size={16} /> Download full CV
            </a>
          </Reveal>
        </div>
      </section>

      <section className="pt-2 pb-16 section-tint-a">
        <div className="container-lg">
          <Reveal className="mb-10">
            <p className="eyebrow">Beyond the Clinic</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Volunteer service &amp; interests</h2>
          </Reveal>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
            <Reveal className="glass-card p-5 sm:p-8">
              <h3 className="text-base font-semibold text-navy-900 mb-5">Volunteer service</h3>
              <div className="relative pl-6 border-l border-slate-900/[0.1] space-y-5">
                {VOLUNTEER.map((v, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-teal-500 ring-4 ring-white" />
                    <span className="inline-block rounded-full bg-teal-600/10 px-2.5 py-0.5 text-xs font-bold text-teal-700">
                      {v.date}
                    </span>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{v.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="glass-card relative overflow-hidden p-5 sm:p-8">
              <CardGlow tone="gold" className="-top-16 -right-16 h-40 w-40" />
              <h3 className="text-base font-semibold text-navy-900 mb-5">Languages</h3>
              <ul className="space-y-4">
                {LANGUAGES.map((l, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-900 text-[10px] font-bold text-white">
                      {l.code}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-medium text-slate-800">{l.lang}</span>
                        <span className="text-[11px] text-slate-500 whitespace-nowrap">{l.level}</span>
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
                  <span
                    key={h}
                    className="rounded-full bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 text-sm text-navy-900"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
