import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronUp,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { CLINIC_PHONE_HREF } from "../../data/clinic.js";
import { smoothScrollTo } from "../utility/SmoothScroll.jsx";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Meet Our Team", to: "/about" },
  { label: "Patient Resources", to: "/training" },
  { label: "Contact", to: "/contact" },
];

const SERVICES_LINKS = [
  { label: "General Cardiology", to: "/services" },
  { label: "Interventional Cardiology", to: "/services" },
  { label: "Preventive Cardiology", to: "/services" },
  { label: "Diagnostic Testing", to: "/services" },
  { label: "Heart Failure Care", to: "/services" },
  { label: "Rehabilitation", to: "/services" },
];

const PATIENT_LINKS = [
  { label: "Appointments", to: "/contact" },
  { label: "Insurance & Billing", to: "/contact" },
  { label: "Patient Forms", to: "/contact" },
  { label: "Locations", to: "/contact" },
  { label: "FAQs", to: "/about" },
  { label: "Health Library", to: "/publications" },
];

export default function Footer() {
  const scrollToTop = () => {
    smoothScrollTo(0);
  };

  return (
    <footer className="relative overflow-hidden bg-[#0a111e] text-slate-300">
      {/* Background Ambience: Subtle Dark Crimson Wave & Glowing Cardiac ECG */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-14 select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft Crimson Curved Ribbon */}
        <svg
          className="w-full h-36 opacity-30"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 Q360,150 720,80 T1440,80 L1440,160 L0,160 Z"
            fill="#7f0f1d"
          />
        </svg>

        {/* Luminous Cardiac Sinus Rhythm Trace across the wave */}
        <div className="absolute inset-x-0 bottom-7 flex justify-center opacity-85">
          <svg
            className="w-full max-w-5xl h-20"
            viewBox="0 0 900 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="footerEcgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff3355" stopOpacity="0" />
                <stop offset="35%" stopColor="#ff3355" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#ff4d6d" stopOpacity="1" />
                <stop offset="65%" stopColor="#ff3355" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ff3355" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,60 L 320,60 L 340,60 L 355,75 L 370,16 L 385,94 L 398,38 L 410,72 L 420,60 L 455,60 L 470,48 L 485,60 L 520,60 L 900,60"
              fill="none"
              stroke="url(#footerEcgGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Main Footer Navigation Grid */}
      <div className="container-lg relative z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand Info & Socials (4 Cols) */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative grid h-12 w-12 shrink-0 place-items-center">
                <svg
                  className="h-11 w-11 text-crimson-600"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M24 41.5 C24 41.5 8 31 8 19.5 A8.5 8.5 0 0 1 24 14.5 A8.5 8.5 0 0 1 40 19.5 C40 31 24 41.5 24 41.5 Z"
                    stroke="#dc2626"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M 6 22 L 15 22 L 18 22 L 20.5 13 L 23.5 31 L 26.5 17 L 28.5 24 L 30.5 22 L 42 22"
                    stroke="#dc2626"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-white leading-tight">
                  White River
                </h3>
                <p className="text-xl font-bold tracking-tight text-white leading-tight">
                  Health <span className="text-crimson-500">Cardiology</span>
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p className="mt-3 text-[11px] font-bold tracking-[0.24em] text-slate-400 uppercase">
              Hearts Healthier Tomorrow
            </p>

            {/* Description */}
            <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-slate-400">
              Compassionate, comprehensive cardiac care close to home. At White
              River Health Cardiology, we&apos;re dedicated to helping you live a
              healthier, fuller life.
            </p>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 transition-all duration-200 hover:border-crimson-500 hover:bg-crimson-600 hover:text-white"
              >
                <Facebook size={17} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 transition-all duration-200 hover:border-crimson-500 hover:bg-crimson-600 hover:text-white"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 transition-all duration-200 hover:border-crimson-500 hover:bg-crimson-600 hover:text-white"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 transition-all duration-200 hover:border-crimson-500 hover:bg-crimson-600 hover:text-white"
              >
                <Youtube size={17} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <div className="mt-2.5 mb-5 h-[2px] w-7 rounded-full bg-crimson-600" />
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group flex items-center justify-between text-[13.5px] text-slate-300 transition-colors hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      size={14}
                      className="text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-crimson-400"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-bold text-white tracking-wide">
              Services
            </h4>
            <div className="mt-2.5 mb-5 h-[2px] w-7 rounded-full bg-crimson-600" />
            <ul className="space-y-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group flex items-center justify-between text-[13.5px] text-slate-300 transition-colors hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      size={14}
                      className="text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-crimson-400"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: For Patients (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-bold text-white tracking-wide">
              For Patients
            </h4>
            <div className="mt-2.5 mb-5 h-[2px] w-7 rounded-full bg-crimson-600" />
            <ul className="space-y-3">
              {PATIENT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group flex items-center justify-between text-[13.5px] text-slate-300 transition-colors hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      size={14}
                      className="text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-crimson-400"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Get in Touch (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[15px] font-bold text-white tracking-wide">
              Get in Touch
            </h4>
            <div className="mt-2.5 mb-5 h-[2px] w-7 rounded-full bg-crimson-600" />
            <ul className="space-y-4 text-[13px] text-slate-300">
              {/* Address */}
              <li className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-crimson-600 text-white shadow-sm">
                  <MapPin size={15} />
                </span>
                <span className="pt-0.5 leading-snug">
                  16 Hospital Circle, Batesville, AR 72501
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-crimson-600 text-white shadow-sm">
                  <Phone size={15} />
                </span>
                <a
                  href={CLINIC_PHONE_HREF}
                  className="font-semibold text-white transition-colors hover:text-crimson-300"
                >
                  870-262-1600
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-crimson-600 text-white shadow-sm">
                  <Mail size={15} />
                </span>
                <a
                  href="mailto:contact@whrcardiology.com"
                  className="transition-colors hover:text-crimson-300"
                >
                  contact@whrcardiology.com
                </a>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-crimson-600 text-white shadow-sm">
                  <Clock size={15} />
                </span>
                <span className="pt-0.5 leading-snug">
                  Mon - Fri: 8:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-Footer Bottom Bar */}
      <div className="relative z-10 border-t border-slate-800/80 bg-[#080e18]/80 py-6">
        <div className="container-lg flex flex-col items-center justify-between gap-4 text-[12.5px] text-slate-400 md:flex-row">
          {/* Copyright */}
          <div>
            &copy; {new Date().getFullYear()} White River Health Cardiology. All rights reserved.
          </div>

          {/* Legal / Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400">
            <Link to="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-600">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <span className="text-slate-600">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 text-slate-300 transition-colors hover:text-white"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-crimson-600 text-white shadow-md transition-all duration-200 group-hover:scale-105 group-hover:bg-crimson-500">
              <ChevronUp size={16} />
            </span>
            <span className="text-xs font-semibold">Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
