import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Footprints,
  GraduationCap,
  HeartPulse,
  Info,
  Layers,
  Phone,
  Route,
  ShieldCheck,
  Stethoscope,
  X,
} from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import { CLINIC_SERVICES, CLINIC_PHONE_HREF } from "../../data/clinic.js";

const SERVICE_ICONS = {
  coronary: HeartPulse,
  amputation: Footprints,
  peripheral: Route,
  teaching: GraduationCap,
};

export default function ServicesSection() {
  const [activeModalService, setActiveModalService] = useState(null);

  // Close modal on Escape key and lock body scroll while modal is active
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalService(null);
      }
    };

    if (activeModalService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalService]);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#fbf9f8] via-[#ffffff] to-[#f7f5f4] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle decorative background accent */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" aria-hidden="true">
        <svg className="h-full w-full" width="100%" height="100%">
          <defs>
            <pattern id="services-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9E2A2B" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid-pattern)" />
        </svg>
      </div>

      <div className="container-lg relative z-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f8c4cc] bg-[#fff5f6] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-crimson-700">
              <Activity size={13} className="text-crimson-600" />
              <span>Services & Subspecialties</span>
            </div>
            <h2 className="mt-3.5 text-3xl font-extrabold tracking-[-0.02em] text-[#14233c] sm:text-4xl lg:text-[2.65rem] leading-[1.12]">
              Comprehensive cardiac care
            </h2>
            <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
              Offerings drawn from the practice at White River Health.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="hidden shrink-0 flex-col items-start gap-2 sm:flex md:items-end">
            <div className="flex items-center gap-2 rounded-xl border border-[#eedede] bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
              <ShieldCheck size={16} className="text-crimson-600" />
              <span>White River Health & UAMS Practice</span>
            </div>
            <div className="flex items-center gap-2 text-[12px] font-medium text-slate-500">
              <Layers size={13} className="text-slate-400" />
              <span>1,000+ procedural cases annually</span>
            </div>
          </Reveal>
        </div>

        {/* 4 Unique Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLINIC_SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] || Activity;
            return (
              <Reveal
                key={service.id}
                delay={index * 0.08}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#eedede]/80 bg-white shadow-[0_2px_12px_rgba(20,35,60,0.04)] transition-colors duration-300 hover:border-crimson-300 hover:shadow-[0_18px_36px_rgba(158,42,43,0.1)]"
                >
                  {/* Photo container - Clickable to open modal */}
                  <div
                    onClick={() => setActiveModalService(service)}
                    className="relative aspect-[16/11] w-full cursor-pointer overflow-hidden bg-slate-100 sm:aspect-[4/3]"
                  >
                    <img
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Subtle darkening scrim for badge legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent transition-opacity group-hover:from-black/75" />

                    {/* Top-left category tag */}
                    <div className="absolute left-3 top-3">
                      <span className="inline-flex items-center rounded-full border border-white/70 bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-crimson-800 shadow-sm backdrop-blur-md">
                        {service.category}
                      </span>
                    </div>

                    {/* Top-right floating icon */}
                    <div className="absolute right-3 top-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-white/80 bg-white/90 text-crimson-700 shadow-sm backdrop-blur-md transition-colors duration-300 group-hover:bg-crimson-600 group-hover:text-white">
                        <Icon size={16} strokeWidth={2.2} />
                      </span>
                    </div>

                    {/* Bottom badge overlay & Animated Details Button */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-crimson-400" />
                        {service.badge}
                      </span>

                      {/* Animated Details Button */}
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalService(service);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md transition-all hover:border-white/70 hover:bg-black/75 focus:outline-none"
                      >
                        <Info size={12} className="text-crimson-300" />
                        <span>Details</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3
                      onClick={() => setActiveModalService(service)}
                      className="cursor-pointer text-[17px] font-bold leading-snug text-[#14233c] transition-colors group-hover:text-crimson-800 sm:text-[18px]"
                    >
                      {service.title}
                    </h3>

                    <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-slate-600">
                      {service.summary}
                    </p>

                    {/* Relevant tag pills */}
                    {service.tags && (
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
                        {service.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[#eee6e4] bg-[#fbf9f8] px-2 py-0.5 text-[11px] font-medium text-slate-600 transition-colors group-hover:border-crimson-100 group-hover:bg-crimson-50/30"
                          >
                            {tag}
                          </span>
                        ))}
                        {service.tags.length > 3 && (
                          <span className="rounded-md bg-slate-50 px-1.5 py-0.5 text-[10.5px] font-medium text-slate-500">
                            +{service.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Card Action - Interactive animated button */}
                    <div className="mt-5 border-t border-slate-100/90 pt-3.5">
                      <button
                        type="button"
                        onClick={() => setActiveModalService(service)}
                        className="flex w-full items-center justify-between text-[13px] font-bold text-crimson-700 transition-colors group-hover:text-crimson-800"
                      >
                        <span>Explore clinical scope</span>
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-crimson-50 text-crimson-700 transition-all group-hover:translate-x-1 group-hover:bg-crimson-600 group-hover:text-white">
                          <ArrowRight size={13} />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA Bar with Unique Cardiology Telemetry Background */}
        <Reveal className="mt-14 overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-[#0c182b] via-[#142642] to-[#1e1423] p-6 shadow-2xl sm:p-8 md:p-9 relative">
          {/* Ambient colored lighting glows */}
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-crimson-600/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/25 blur-3xl"
            aria-hidden="true"
          />

          {/* Clinical Telemetry Grid Overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
            <svg className="h-full w-full" width="100%" height="100%">
              <defs>
                <pattern id="cta-telemetry-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <circle cx="36" cy="36" r="1" fill="rgba(255,255,255,0.15)" />
                </pattern>
                <linearGradient id="ecgStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9E2A2B" stopOpacity="0" />
                  <stop offset="15%" stopColor="#9E2A2B" stopOpacity="0.4" />
                  <stop offset="45%" stopColor="#f43f5e" stopOpacity="0.85" />
                  <stop offset="55%" stopColor="#fb7185" stopOpacity="0.95" />
                  <stop offset="85%" stopColor="#9E2A2B" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#9E2A2B" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-telemetry-grid)" />
              {/* Luminous Cardiac ECG Sinus Rhythm Wave */}
              <path
                d="M 0,70 L 140,70 Q 155,70 162,60 Q 169,70 180,70 L 220,70 L 232,86 L 246,14 L 258,126 L 268,54 L 278,78 L 288,70 L 325,70 Q 345,46 365,70 L 520,70 L 532,86 L 546,14 L 558,126 L 568,54 L 578,78 L 588,70 L 625,70 Q 645,46 665,70 L 820,70 L 832,86 L 846,14 L 858,126 L 868,54 L 878,78 L 888,70 L 1200,70"
                fill="none"
                stroke="url(#ecgStrokeGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-75"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            {/* Left Content Area */}
            <div className="flex items-start gap-4">
              <div className="relative mt-1">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.25)] backdrop-blur-md">
                  <Stethoscope size={24} strokeWidth={2.2} />
                </span>
                {/* Active telemetry indicator dot */}
                <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-[#0c182b] bg-emerald-500" />
                </span>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10.5px] font-semibold tracking-wider text-rose-200 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson-400" />
                  WHITE RIVER HEALTH CARDIOLOGY CLINIC
                </div>
                <h3 className="mt-2 text-lg font-bold text-white sm:text-xl md:text-[1.35rem] leading-snug">
                  Seeking specialty cardiology consultation or provider referral?
                </h3>
                <p className="mt-1.5 max-w-xl text-[13.5px] leading-relaxed text-slate-300 sm:text-[14px]">
                  Direct consultation scheduling and regional physician referrals conducted at White River Health in Batesville, Arkansas.
                </p>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-[13.5px] font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white/20 focus:outline-none"
              >
                <span>View All Services</span>
                <ChevronRight size={15} />
              </Link>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={CLINIC_PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson-600 via-[#b32b35] to-rose-600 px-5 py-3 text-[13.5px] font-bold text-white shadow-[0_4px_24px_rgba(179,43,53,0.5)] transition-all duration-200 hover:from-crimson-500 hover:to-rose-500 hover:shadow-[0_6px_32px_rgba(179,43,53,0.7)] focus:outline-none"
              >
                <Phone size={15} />
                <span>Call Clinic</span>
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Interactive Animated Specialty Detail Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-service-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Animated Backdrop */}
            <motion.div
              key="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="fixed inset-0 bg-slate-950/65 backdrop-blur-md"
              onClick={() => setActiveModalService(null)}
            />

            {/* Animated Modal Card */}
            <motion.div
              key="modal-card"
              initial={{ opacity: 0, scale: 0.88, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{
                type: "spring",
                damping: 26,
                stiffness: 340,
                mass: 0.85,
              }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
            >
              {/* Header Image with subtle reveal animation */}
              <div className="relative aspect-[16/8] w-full shrink-0 overflow-hidden bg-slate-950">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  src={activeModalService.image}
                  alt={activeModalService.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                {/* Animated Close Button */}
                <motion.button
                  type="button"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveModalService(null)}
                  aria-label="Close modal"
                  className="absolute right-3.5 top-3.5 grid h-8 w-8 place-items-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/75"
                >
                  <X size={16} />
                </motion.button>

                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="inline-block rounded-md bg-crimson-600 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-white shadow-sm">
                    {activeModalService.category}
                  </span>
                  <h3
                    id="modal-service-title"
                    className="mt-1 text-xl font-bold text-white drop-shadow-sm sm:text-2xl"
                  >
                    {activeModalService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content - Scrollable if content is tall */}
              <div className="overflow-y-auto p-6 sm:p-7">
                <p className="text-[14.5px] leading-relaxed text-slate-700">
                  {activeModalService.summary}
                </p>

                {/* Tag Pills */}
                {activeModalService.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {activeModalService.tags.map((tag, idx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + idx * 0.03 }}
                        className="rounded-md border border-[#eedede] bg-[#fbf9f8] px-2.5 py-1 text-[11.5px] font-medium text-slate-700"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                )}

                {/* Procedures List with Staggered Animation */}
                {activeModalService.items && activeModalService.items.length > 0 && (
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Clinical Procedures & Capabilities
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {activeModalService.items.map((item, idx) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.12 + idx * 0.04, duration: 0.25 }}
                          className="flex items-start gap-2.5 text-[13.5px] text-slate-700"
                        >
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-crimson-600" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeModalService.note && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 }}
                    className="mt-5 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-[12.5px] text-amber-900"
                  >
                    <p className="font-semibold">Practice Note</p>
                    <p className="mt-0.5">{activeModalService.note}</p>
                  </motion.div>
                )}

                {/* Modal Actions */}
                <div className="mt-6 flex flex-col gap-2.5 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(null)}
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    Close
                  </button>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={CLINIC_PHONE_HREF}
                    className="btn-primary justify-center text-xs"
                  >
                    <Phone size={14} /> Schedule Consultation
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
