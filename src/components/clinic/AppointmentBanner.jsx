import { motion } from "framer-motion";
import { Heart, MapPin, Phone, ShieldCheck, Users } from "lucide-react";
import { OFFICE } from "../../data/profile.js";
import { CLINIC_MAP_HREF, CLINIC_PHONE_HREF } from "../../data/clinic.js";
import { anatomicalHeart3D } from "../../assets/images/index.js";

export default function AppointmentBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#9e1627] via-[#ba1a2b] to-[#7f0f1d] py-6 sm:py-7 lg:py-8 text-white">
      {/* Background Visual Layer */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {/* Soft radial glow behind the heart */}
        <div className="absolute right-[8%] sm:right-[18%] top-1/2 -translate-y-1/2 h-[220px] w-[220px] rounded-full bg-rose-500/20 blur-3xl" />

        {/* Lower Sweeping Wave Ribbons */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-30"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C360,90 720,10 1100,60 C1260,82 1370,60 1440,45 L1440,90 L0,90 Z"
            fill="#ea3849"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full opacity-40"
          viewBox="0 0 1440 65"
          preserveAspectRatio="none"
        >
          <path
            d="M0,25 C290,60 620,8 950,40 C1200,65 1350,28 1440,20 L1440,65 L0,65 Z"
            fill="#cc1f30"
          />
        </svg>

        {/* Translucent Medical Plus Cross - Bottom Left Corner */}
        <svg
          className="absolute -bottom-5 -left-5 h-24 w-24 text-white/[0.07]"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <rect x="36" y="8" width="28" height="84" rx="8" />
          <rect x="8" y="36" width="84" height="28" rx="8" />
        </svg>

        {/* Translucent Medical Plus Cross - Top Right Behind Motto */}
        <svg
          className="absolute -top-6 right-2 h-28 w-28 text-white/[0.06]"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <rect x="36" y="8" width="28" height="84" rx="8" />
          <rect x="8" y="36" width="84" height="28" rx="8" />
        </svg>

        {/* 3D Anatomical Heart Model in Center-Right Background */}
        <div className="absolute -right-6 bottom-0 h-[70%] max-h-[210px] w-[130px] opacity-40 mix-blend-screen sm:right-[15%] sm:top-1/2 sm:bottom-auto sm:h-[115%] sm:w-[190px] sm:-translate-y-1/2 sm:opacity-85 lg:right-[20%]">
          <img
            src={anatomicalHeart3D}
            alt=""
            referrerPolicy="no-referrer"
            className="h-full w-full object-contain filter contrast-125 brightness-110 drop-shadow-[0_0_35px_rgba(255,50,75,0.45)]"
          />
        </div>

        {/* Luminous Neon Cardiac ECG Rhythm Wave */}
        <svg
          className="absolute inset-0 hidden h-full w-full opacity-95 md:block"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="ecgGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="7" result="glow1" />
              <feGaussianBlur stdDeviation="2.5" result="glow2" />
              <feMerge>
                <feMergeNode in="glow1" />
                <feMergeNode in="glow2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="neonEcgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0" />
              <stop offset="30%" stopColor="#ff4d6d" stopOpacity="0.3" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="85%" stopColor="#ff4d6d" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ff4d6d" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Intense Neon Red/Pink Aura */}
          <path
            d="M 450,75 L 710,75 L 725,83 L 738,45 L 750,115 L 762,60 L 774,83 L 784,75 L 820,75 L 834,68 L 848,75 L 875,75 L 890,85 L 905,22 L 920,127 L 933,52 L 945,85 L 956,75 L 1260,75"
            fill="none"
            stroke="#ff2e56"
            strokeWidth="6"
            filter="url(#ecgGlowFilter)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Crisp Pure White Core Line */}
          <path
            d="M 450,75 L 710,75 L 725,83 L 738,45 L 750,115 L 762,60 L 774,83 L 784,75 L 820,75 L 834,68 L 848,75 L 875,75 L 890,85 L 905,22 L 920,127 L 933,52 L 945,85 L 956,75 L 1260,75"
            fill="none"
            stroke="url(#neonEcgGrad)"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Script Calligraphy Motto: "Stronger Hearts, Brighter Tomorrows" */}
        <div className="absolute right-6 top-3 hidden select-none md:block text-right">
          <div className="font-['Caveat'] text-lg lg:text-xl font-bold leading-[1.08] tracking-wide text-white/30 -rotate-[8deg]">
            <p>Stronger</p>
            <p>Hearts</p>
            <p className="text-white/35">Brighter</p>
            <p>Tomorrows</p>
          </div>
          <div className="mt-1 h-[1.5px] w-20 ml-auto bg-gradient-to-l from-white/30 to-transparent -rotate-[8deg]" />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="container-lg relative z-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        {/* Left Info Column */}
        <div className="max-w-2xl">
          {/* Eyebrow with horizontal dash line */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/95">
              NEED AN APPOINTMENT?
            </span>
            <span className="h-[1.5px] w-10 rounded-full bg-gradient-to-r from-white/70 to-transparent" />
          </div>

          {/* Large Main Heading */}
          <h2 className="mt-1.5 text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-[1.85rem] leading-[1.14]">
            Call White River Health Cardiology
          </h2>

          {/* Location with Pin Icon */}
          <a
            href={CLINIC_MAP_HREF} target="_blank" rel="noopener noreferrer" title="Open in Google Maps"
            className="mt-1.5 flex w-fit items-center gap-2 text-[12.5px] font-medium text-white/95 underline-offset-4 hover:underline sm:text-[13.5px]"
          >
            <MapPin size={14} className="shrink-0 text-white fill-white/20" />
            <span>{OFFICE.address.join(", ")}</span>
          </a>

          {/* 3 Core Care Pillars / Features Matching Reference */}
          <div className="mt-3 grid grid-cols-3 gap-2 pt-1 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            {/* Pillar 1: Expert Heart Care */}
            <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-2">
              <Heart size={18} strokeWidth={1.8} className="shrink-0 text-white/95" />
              <div className="text-[11px] font-medium leading-tight text-white">
                <p className="font-semibold text-white">Expert</p>
                <p className="text-white/90">Heart Care</p>
              </div>
            </div>

            {/* Vertical Divider */}
            <span className="hidden h-6 w-[1px] bg-white/30 sm:block" />

            {/* Pillar 2: Compassionate Team */}
            <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-2">
              <Users size={18} strokeWidth={1.8} className="shrink-0 text-white/95" />
              <div className="text-[11px] font-medium leading-tight text-white">
                <p className="font-semibold text-white">Compassionate</p>
                <p className="text-white/90">Team</p>
              </div>
            </div>

            {/* Vertical Divider */}
            <span className="hidden h-6 w-[1px] bg-white/30 sm:block" />

            {/* Pillar 3: A Healthier Tomorrow */}
            <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-2">
              <ShieldCheck size={18} strokeWidth={1.8} className="shrink-0 text-white/95" />
              <div className="text-[11px] font-medium leading-tight text-white">
                <p className="font-semibold text-white">A Healthier</p>
                <p className="text-white/90">Tomorrow</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Phone Button Column */}
        <div className="shrink-0 lg:pl-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href={CLINIC_PHONE_HREF}
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-[#9e1627] shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-all duration-200 hover:bg-slate-50 hover:shadow-[0_14px_30px_rgba(0,0,0,0.32)] focus:outline-none focus:ring-4 focus:ring-white/40"
          >
            <Phone size={16} className="fill-[#9e1627] text-[#9e1627]" />
            <span className="text-sm sm:text-[1.02rem] font-bold tracking-tight text-[#9e1627]">
              {OFFICE.phone}
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
