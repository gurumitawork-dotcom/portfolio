import { Clock, MapPin, Phone } from "lucide-react";
import BrandIcon from "../ui/BrandIcon.jsx";
import { OFFICE, SOCIAL_LINKS } from "../../data/profile.js";
import { CLINIC_MAP_HREF, CLINIC_PHONE_HREF, CLINIC_WHATSAPP_HREF } from "../../data/clinic.js";

// Brand colours, always on (matches the footer icons)
const SOCIAL_STYLES = {
  facebook: "bg-[#1877F2]",
  instagram: "bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]",
  linkedin: "bg-[#0A66C2]",
  youtube: "bg-[#FF0000]",
  whatsapp: "bg-[#25D366]",
};

// WhatsApp sits with the social icons and opens a chat with the office number
const CONTACT_ICONS = [{ name: "whatsapp", label: "WhatsApp", href: CLINIC_WHATSAPP_HREF }];

export default function TopBar() {
  return (
    <div className="relative bg-navy-950 text-[11px] text-slate-300 sm:text-[12px]">
      {/* Crimson edge + hairline under the bar */}
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-crimson-500 to-[#7a1425]" />
      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-crimson-600/60 via-white/10 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-2 px-4 py-2 pl-5 sm:px-8 sm:pl-9">
        {/* Address → Google Maps, plus office hours on wide screens */}
        <div className="flex min-w-0 items-center gap-4">
          <a
            href={CLINIC_MAP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in Google Maps"
            className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-white"
          >
            <MapPin size={13} className="shrink-0 text-crimson-400" />
            <span className="truncate">
              {/* clinic name drops off on phones so the full address still fits */}
              <span className="hidden sm:inline">{OFFICE.name} · </span>
              {OFFICE.address.join(", ")}
            </span>
          </a>

          <span className="hidden h-3.5 w-px bg-white/15 lg:block" />

          <span className="hidden items-center gap-1.5 whitespace-nowrap text-slate-400 lg:inline-flex">
            <Clock size={13} className="text-crimson-400" />
            Mon – Fri · 8:00 AM – 5:00 PM
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Social profiles: brand colour fills in on hover */}
          <div className="flex items-center gap-1">
            {[...SOCIAL_LINKS, ...CONTACT_ICONS].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name === "whatsapp" ? `Chat with the office on WhatsApp (opens in a new tab)` : `Dr. Mahesh Anantha on ${s.label} (opens in a new tab)`}
                title={s.label}
                className={`grid h-6 w-6 place-items-center rounded-full text-white ring-1 ring-white/10 transition-transform hover:-translate-y-px hover:brightness-110 sm:h-[26px] sm:w-[26px] ${SOCIAL_STYLES[s.name]}`}
              >
                <BrandIcon name={s.name} size={12} />
              </a>
            ))}
          </div>

          {/* Phone as a compact call button */}
          <a
            href={CLINIC_PHONE_HREF}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-crimson-600 to-[#7a1425] px-3 py-1 font-semibold text-white shadow-[0_6px_16px_-8px_rgba(193,31,56,0.9)] transition-transform hover:-translate-y-px sm:px-3.5 sm:py-1.5"
          >
            <Phone size={13} />
            {OFFICE.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
