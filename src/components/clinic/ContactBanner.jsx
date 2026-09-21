import { Link } from "react-router-dom";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import { OFFICE } from "../../data/profile.js";
import { CLINIC_PHONE_HREF } from "../../data/clinic.js";

const DIRECTIONS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${OFFICE.name}, ${OFFICE.address.join(", ")}`
)}`;

const ECG_PATH = "M0 24h52l8-16 10 32 8-16h36c8 0 10-12 18-12s10 12 18 12h40l10-18 8 36 10-18h102";

export default function ContactBanner() {
  const details = [
    { icon: Phone, label: "Office phone", value: OFFICE.phone, href: CLINIC_PHONE_HREF },
    { icon: MapPin, label: "Address", value: OFFICE.address.join(", "), href: DIRECTIONS_HREF, external: true },
    { icon: Clock, label: "Office hours", value: "Mon – Fri · 8:00 AM – 5:00 PM" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#fde8eb] to-paper-50 pb-12 pt-40 sm:pb-16 sm:pt-[8.5rem]">
      {/* Heartbeat line running across the banner, fading at both ends */}
      <svg
        className="pointer-events-none absolute bottom-2 left-0 h-12 w-full text-crimson-500/20"
        viewBox="0 0 320 48"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
        }}
      >
        <path d={ECG_PATH} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="relative container-lg grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <Reveal immediate className="min-w-0">
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            White River Health Cardiology is your partner in care. Call the office or send a note to schedule an
            appointment.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={CLINIC_PHONE_HREF} className="btn-primary">
              <Phone size={16} /> Call the office
            </a>
            <a href={DIRECTIONS_HREF} target="_blank" rel="noreferrer" className="btn-outline">
              <Navigation size={16} /> Get directions
            </a>
          </div>

          <nav className="mt-6 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link to="/" className="font-medium text-crimson-700 hover:text-crimson-800">
              Home
            </Link>
            <span className="text-crimson-700/40">›</span>
            <span className="text-slate-600">Contact</span>
          </nav>
        </Reveal>

        {/* Contact card replaces the portrait */}
        <Reveal immediate delay={0.08} className="relative">
          <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-crimson-600/15 lg:-bottom-5 lg:-right-5" />
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-crimson-600 to-[#7a1425] p-6 text-white shadow-[0_30px_60px_-25px_rgba(122,20,37,0.55)] sm:p-8">
            <svg
              className="pointer-events-none absolute -right-8 bottom-4 h-12 w-56 text-white/15"
              viewBox="0 0 320 48"
              fill="none"
              aria-hidden="true"
            >
              <path d={ECG_PATH} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <p className="relative text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">{OFFICE.name}</p>
            <ul className="relative mt-5 space-y-4">
              {details.map(({ icon: Icon, label, value, href, external }) => {
                const body = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                      <Icon size={17} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60">{label}</span>
                      <span className="mt-0.5 block text-[15px] font-semibold leading-snug">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="flex items-center gap-3.5 rounded-xl transition-opacity hover:opacity-85"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3.5">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
