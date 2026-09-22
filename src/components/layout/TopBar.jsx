import { MapPin, Phone } from "lucide-react";
import { OFFICE } from "../../data/profile.js";
import { CLINIC_MAP_HREF, CLINIC_PHONE_HREF } from "../../data/clinic.js";

export default function TopBar() {
  return (
    <div className="border-b border-white/10 bg-navy-950 text-[11px] text-slate-300 sm:text-[12px]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 sm:px-8">
        <a href={CLINIC_MAP_HREF} target="_blank" rel="noopener noreferrer" title="Open in Google Maps" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
          <MapPin size={13} className="shrink-0 text-crimson-400" />
          {OFFICE.name} · {OFFICE.address.join(", ")}
        </a>
        <a href={CLINIC_PHONE_HREF} className="inline-flex items-center gap-1.5 font-medium text-white hover:text-crimson-300">
          <Phone size={13} />
          {OFFICE.phone}
        </a>
      </div>
    </div>
  );
}
