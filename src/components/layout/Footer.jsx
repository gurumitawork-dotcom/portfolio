import { Link } from "react-router-dom";
import { Phone, MapPin, Download } from "lucide-react";
import { OFFICE } from "../../data/profile.js";
import { CLINIC_PHONE_HREF, PRIMARY_NAV, PAGES_NAV } from "../../data/clinic.js";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container-lg grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:py-16">
        <div>
          <p className="text-lg font-semibold text-white">Mahesh Anantha Narayanan</p>
          <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-crimson-400">MD, FACC, FSCAI, FSVM</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Interventional and endovascular cardiology at White River Health — complex coronary intervention and
            amputation prevention.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {[...PRIMARY_NAV, { to: "/contact", label: "Contact" }].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Pages</p>
          <ul className="mt-4 space-y-2 text-sm">
            {PAGES_NAV.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">White River Health Cardiology</p>
          <p className="mt-4 flex items-start gap-2 text-sm">
            <MapPin size={16} className="mt-0.5 shrink-0 text-crimson-400" />
            <span>
              {OFFICE.address.join(", ")}
              <br />
              Batesville office — call to schedule
            </span>
          </p>
          <a href={CLINIC_PHONE_HREF} className="mt-3 inline-flex items-center gap-2 text-sm text-white hover:text-crimson-300">
            <Phone size={15} /> {OFFICE.phone}
          </a>
          <p className="mt-2 text-xs text-slate-500">Mobile {OFFICE.mobile}</p>
          <a
            href="/cv/Mahesh_Anantha-Narayanan_Master_CV_2026.docx"
            download
            className="mt-4 flex items-center gap-2 text-sm text-slate-400 hover:text-white"
          >
            <Download size={14} /> Download full CV
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-lg flex flex-col justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Mahesh Anantha Narayanan, MD, FACC, FSCAI, FSVM</span>
          <span>White River Health Cardiology · Batesville, AR</span>
        </div>
      </div>
    </footer>
  );
}
