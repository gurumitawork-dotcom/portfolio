import { Link } from "react-router-dom";
import { Phone, MapPin, Download } from "lucide-react";
import CardGlow from "./CardGlow.jsx";
import EkgLine from "./EkgLine.jsx";

export default function Footer() {
  return (
    <footer className="relative mt-4">
      <div className="container-lg py-8 sm:py-10">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="glass-card relative overflow-hidden p-5 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
            <CardGlow tone="teal" className="-top-16 -left-10 h-44 w-44" />
            <CardGlow tone="gold" className="-bottom-16 -right-10 h-44 w-44" />
            <EkgLine className="absolute bottom-0 inset-x-0 h-8 opacity-[0.12]" speed={16} />

            <div className="relative">
              <p className="eyebrow mb-2 inline-flex items-center gap-2">
                <span className="pulse-dot" />
                White River Health Cardiology
              </p>
              <h3 className="text-xl sm:text-2xl">Ready to refer a patient or start a conversation?</h3>
            </div>
            <div className="relative flex flex-col sm:flex-row flex-wrap gap-3">
              <a href="tel:+18702621600" className="btn-glass w-full sm:w-auto">
                <Phone size={16} /> 870-262-1600
              </a>
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-slate-600">
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-teal-600" />
            <span>16 Hospital Circle, Batesville, AR 72501</span>
          </div>
          <a href="/cv/Mahesh_Anantha-Narayanan_Master_CV_2026.docx" download className="btn-text">
            <Download size={14} /> Download full CV
          </a>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-900/[0.06] flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} Mahesh Anantha Narayanan, MD, FACC, FSCAI, FSVM</span>
          <span>Interventional &amp; Endovascular Cardiology</span>
        </div>
      </div>
    </footer>
  );
}
