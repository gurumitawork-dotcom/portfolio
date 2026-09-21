import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import PageBanner from "../components/clinic/PageBanner.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import BrandIcon from "../components/ui/BrandIcon.jsx";
import { CLINIC_SERVICES } from "../data/clinic.js";
import { SOCIAL_LINKS } from "../data/profile.js";

const GROUPS = [
  {
    title: "Main pages",
    links: [
      { to: "/", label: "Home", note: "Overview, credentials and case volume" },
      { to: "/about", label: "About the Doctor", note: "Background, clinical pillars and focus areas" },
      { to: "/contact", label: "Contact", note: "Appointments, phone, address and directions" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "All Services", note: "The four core areas of practice" },
      ...CLINIC_SERVICES.map((s) => ({ to: `/services#${s.id}`, label: s.title, note: s.badge })),
    ],
  },
  {
    title: "Career & scholarship",
    links: [
      { to: "/training", label: "Training & Practice", note: "Fellowships, residency and credentials" },
      { to: "/teaching", label: "Teaching & Research", note: "CIMS research group and teaching timeline" },
      { to: "/publications", label: "Publications", note: "Searchable list of peer-reviewed papers" },
      { to: "/presentations", label: "Presentations", note: "Talks grouped by meeting" },
      { to: "/recognition", label: "Recognition", note: "Awards, societies and editorial service" },
    ],
  },
  {
    title: "For patients",
    links: [
      { to: "/contact#appointment", label: "Request an Appointment", note: "Send a request by email" },
      { to: "/contact#location", label: "Location & Directions", note: "Map to White River Health Cardiology" },
    ],
  },
];

export default function Sitemap() {
  return (
    <>
      <PageBanner eyebrow="Sitemap" title="Every page on this site" lede="Jump straight to any page or section." />

      <section className="pb-16 pt-10 sm:pt-16">
        <div className="container-lg grid gap-6 md:grid-cols-2">
          {GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.04} className="glass-card relative overflow-hidden p-6 sm:p-8">
              <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
              <p className="eyebrow">{group.title}</p>
              <ul className="mt-4 divide-y divide-slate-900/[0.06]">
                {group.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="group flex items-center justify-between gap-4 py-3">
                      <span className="min-w-0">
                        <span className="block text-[15px] font-semibold text-navy-900 group-hover:text-crimson-700">
                          {l.label}
                        </span>
                        <span className="mt-0.5 block text-[13px] text-slate-500">{l.note}</span>
                      </span>
                      <ChevronRight size={16} className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-crimson-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal className="glass-card relative overflow-hidden p-6 sm:p-8 md:col-span-2">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-crimson-600" />
            <p className="eyebrow">Follow Dr. Anantha</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-slate-900/[0.07] bg-paper-50 px-4 py-3 hover:border-crimson-600/30"
                >
                  <BrandIcon name={s.name} size={18} className="shrink-0 text-navy-900 group-hover:text-crimson-700" />
                  <span className="flex-1 text-sm font-semibold text-navy-900">{s.label}</span>
                  <ArrowUpRight size={15} className="text-slate-400 group-hover:text-crimson-600" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
