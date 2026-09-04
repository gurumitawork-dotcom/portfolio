import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Footprints,
  GraduationCap,
  HeartPulse,
  Info,
  Phone,
  Route,
  ShieldCheck,
  X,
} from "lucide-react";
import PageBanner from "../components/clinic/PageBanner.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { CLINIC_SERVICES, CLINIC_PHONE_HREF } from "../data/clinic.js";
import { maheshClinic, maheshHeart } from "../assets/images/index.js";

const SERVICE_ICONS = {
  coronary: HeartPulse,
  amputation: Footprints,
  peripheral: Route,
  teaching: GraduationCap,
};

export default function Services() {
  const [activeModalService, setActiveModalService] = useState(null);

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
    <>
      <PageBanner
        eyebrow="Services"
        title="Cardiac care grounded in the CV"
        lede="Four core areas of clinical practice and academic leadership at White River Health and UAMS."
      />

      <section className="pb-20">
        <div className="container-lg">
          {/* Practice Spotlight Photos */}
          <div className="mb-12 grid gap-5 sm:grid-cols-2">
            <Reveal className="overflow-hidden rounded-2xl border border-[#eedede] shadow-sm">
              <img
                src={maheshClinic}
                alt="Dr. Mahesh in clinic hallway at White River Health"
                referrerPolicy="no-referrer"
                className="aspect-[16/10] h-auto w-full object-cover object-[center_18%]"
              />
            </Reveal>
            <Reveal delay={0.06} className="overflow-hidden rounded-2xl border border-[#eedede] shadow-sm">
              <img
                src={maheshHeart}
                alt="Dr. Mahesh demonstrating anatomical cardiac structure"
                referrerPolicy="no-referrer"
                className="aspect-[16/10] h-auto w-full object-cover object-center"
              />
            </Reveal>
          </div>

          {/* Enriched Services Grid with Relevant Photos */}
          <div className="grid gap-8 md:grid-cols-2">
            {CLINIC_SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.id] || Activity;
              return (
                <Reveal
                  key={s.id}
                  delay={i * 0.08}
                  className="h-full"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#eedede] bg-white shadow-sm transition-colors duration-300 hover:border-crimson-300 hover:shadow-xl"
                  >
                    {/* Service Photo Header */}
                    <div
                      onClick={() => setActiveModalService(s)}
                      className="relative aspect-[16/9] w-full cursor-pointer overflow-hidden bg-slate-100"
                    >
                      <img
                        src={s.image}
                        alt={s.imageAlt || s.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                      {/* Top tags */}
                      <div className="absolute left-4 top-4">
                        <span className="inline-flex items-center rounded-full border border-white/70 bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-crimson-800 shadow-sm backdrop-blur-md">
                          {s.category}
                        </span>
                      </div>

                      <div className="absolute right-4 top-4">
                        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/80 bg-white/90 text-crimson-700 shadow-sm backdrop-blur-md transition-colors group-hover:bg-crimson-600 group-hover:text-white">
                          <Icon size={18} strokeWidth={2.2} />
                        </span>
                      </div>

                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-black/40 px-2.5 py-0.5 text-[11px] font-medium backdrop-blur-sm">
                          <ShieldCheck size={12} className="text-crimson-400" />
                          {s.badge}
                        </span>

                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.94 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveModalService(s);
                          }}
                          className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/50 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-md hover:border-white/60 hover:bg-black/70"
                        >
                          <Info size={11} className="text-crimson-300" />
                          <span>Details</span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <h2
                        onClick={() => setActiveModalService(s)}
                        className="cursor-pointer text-xl font-bold text-[#14233c] transition-colors group-hover:text-crimson-800 sm:text-2xl"
                      >
                        {s.title}
                      </h2>

                      <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
                        {s.summary}
                      </p>

                      {/* Procedures / Highlights list */}
                      {s.items && s.items.length > 0 && (
                        <div className="mt-6 border-t border-slate-100 pt-5">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Clinical Scope & Procedures
                          </h3>
                          <ul className="mt-3 space-y-2.5">
                            {s.items.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-slate-700">
                                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-crimson-600" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Practice Note */}
                      {s.note && (
                        <div className="mt-5 rounded-xl border border-[#eedede] bg-[#faf8f7] p-3 text-[12px] leading-snug text-slate-600">
                          {s.note}
                        </div>
                      )}

                      {/* Card Action */}
                      <div className="mt-6 border-t border-slate-100 pt-5">
                        <a
                          href={CLINIC_PHONE_HREF}
                          className="btn-outline w-full justify-center text-[13px]"
                        >
                          <Phone size={14} /> Schedule Consultation for {s.title.split(" ")[0]}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Animated Specialty Detail Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="services-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Animated Backdrop */}
            <motion.div
              key="services-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="fixed inset-0 bg-slate-950/65 backdrop-blur-md"
              onClick={() => setActiveModalService(null)}
            />

            {/* Animated Modal Card */}
            <motion.div
              key="services-modal-card"
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
                    id="services-modal-title"
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
    </>
  );
}
