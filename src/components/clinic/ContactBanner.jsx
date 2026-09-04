import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal.jsx";
import { maheshHeart } from "../../assets/images/index.js";

export default function ContactBanner() {
  return (
    <div className="relative overflow-hidden bg-white pt-36 pb-10 sm:pt-40 sm:pb-12">
      <svg
        className="pointer-events-none absolute inset-x-[38%] top-[48%] hidden h-16 w-[36%] text-crimson-500/35 lg:block"
        viewBox="0 0 320 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 24h52l8-16 10 32 8-16h36c8 0 10-12 18-12s10 12 18 12h40l10-18 8 36 10-18h102"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative container-lg grid items-center gap-6 lg:grid-cols-[1fr_auto]">
        <Reveal immediate>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
            White River Health Cardiology is your partner in care. Call the office or send a note to schedule an
            appointment.
          </p>
          <nav className="mt-6 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link to="/" className="font-medium text-crimson-700 hover:text-crimson-800">
              Home
            </Link>
            <span className="text-slate-300">›</span>
            <span className="text-slate-500">Contact</span>
          </nav>
        </Reveal>

        <Reveal immediate delay={0.08} className="justify-self-center lg:justify-self-end">
          <img
            src={maheshHeart}
            alt="Mahesh Anantha Narayanan"
            className="h-40 w-40 rounded-[1.5rem] object-cover object-center shadow-[0_16px_40px_-18px_rgba(15,23,42,0.35)] sm:h-52 sm:w-52 lg:h-56 lg:w-64"
          />
        </Reveal>
      </div>
    </div>
  );
}
