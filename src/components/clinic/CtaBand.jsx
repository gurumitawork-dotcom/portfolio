import { Phone } from "lucide-react";
import { OFFICE } from "../../data/profile.js";
import { CLINIC_PHONE_HREF } from "../../data/clinic.js";
import { maheshHeart } from "../../assets/images/index.js";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-crimson-600">
      <svg
        className="pointer-events-none absolute left-0 top-0 h-8 w-full text-paper-50"
        viewBox="0 0 1440 32"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,0 L1440,0 L1440,8 C1080,32 360,0 0,20 Z" />
      </svg>
      <div className="container-lg relative z-10 flex flex-col items-start justify-between gap-5 py-12 sm:flex-row sm:items-center sm:py-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">Need an appointment?</p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Call the Batesville office</h2>
          <p className="mt-2 text-sm text-white/85">
            {OFFICE.name} · {OFFICE.address.join(", ")}
          </p>
        </div>
        <a href={CLINIC_PHONE_HREF} className="btn bg-white text-crimson-700 shadow-lg hover:-translate-y-0.5 hover:bg-paper-50">
          <Phone size={16} /> {OFFICE.phone}
        </a>
      </div>
      <img
        src={maheshHeart}
        alt=""
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[28%] object-cover opacity-30 lg:block"
      />
    </section>
  );
}
