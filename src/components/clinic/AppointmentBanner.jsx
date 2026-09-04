import { motion } from "framer-motion";
import { Heart, MapPin, Phone, ShieldCheck, Users } from "lucide-react";
import { OFFICE } from "../../data/profile.js";
import { CLINIC_PHONE_HREF } from "../../data/clinic.js";
import { anatomicalHeart3D } from "../../assets/images/index.js";

export default function AppointmentBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#9e1627] via-[#ba1a2b] to-[#7f0f1d] py-12 sm:py-14 lg:py-16 text-white">
      {/* Background Visual Layer */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {/* Soft radial glow behind the heart */}
        <div className="absolute right-[8%] sm:right-[18%] top-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full bg-rose-500/20 blur-3xl" />

        {/* Lower Sweeping Wave Ribbons */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-30"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <path
            d="M0,90 C360,180 720,20 1100,120 C1260,165 1370,120 1440,90 L1440,180 L0,180 Z"
            fill="#ea3849"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full opacity-40"
          viewBox="0 0 1440 130"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C290,120 620,15 950,80 C1200,130 1350,55 1440,40 L1440,130 L0,130 Z"
            fill="#cc1f30"
          />
        </svg>

        {/* Translucent Medical Plus Cross - Bottom Left Corner */}
        <svg
          className="absolute -bottom-8 -left-8 h-40 w-40 text-white/[0.07]"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <rect x="36" y="8" width="28" height="84" rx="8" />
          <rect x="8" y="36" width="84" height="28" rx="8" />
        </svg>

        {/* Translucent Medical Plus Cross - Top Right Behind Motto */}
        <svg
          className="absolute -top-10 right-4 h-48 w-48 text-white/[0.06]"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <rect x="36" y="8" width="28" height="84" rx="8" />
          <rect x="8" y="36" width="84" height="28" rx="8" />
        </svg>

        {/* 3D Anatomical Heart Model in Center-Right Background */}
        <div className="absolute right-[6%] sm:right-[15%] lg:right-[20%] top-1/2 -translate-y-1/2 h-[125%] max-h-[440px] w-[340px] sm:w-[400px] opacity-85 mix-blend-screen">
          <img
            src={anatomicalHeart3D}
            alt=""
            referrerPolicy="no-referrer"
            className="h-full w-full object-contain filter contrast-125 brightness-110 drop-shadow-[0_0_35px_rgba(255,50,75,0.45)]"
          />
        </div>

        {/* Luminous Neon Cardiac ECG Rhythm Wave */}
        <svg
          className="absolute inset-0 h-full w-full opacity-95"
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="ecgGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="9" result="glow1" />
              <feGaussianBlur stdDeviation="3" result="glow2" />
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
            d="M 450,150 L 710,150 L 725,165 L 738,90 L 750,230 L 762,120 L 774,165 L 784,150 L 820,150 L 834,136 L 848,150 L 875,150 L 890,170 L 905,45 L 920,255 L 933,105 L 945,170 L 956,150 L 1260,150"
            fill="none"
            stroke="#ff2e56"
            strokeWidth="7.5"
            filter="url(#ecgGlowFilter)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Crisp Pure White Core Line */}
          <path
            d="M 450,150 L 710,150 L 725,165 L 738,90 L 750,230 L 762,120 L 774,165 L 784,150 L 820,150 L 834,136 L 848,150 L 875,150 L 890,170 L 905,45 L 920,255 L 933,105 L 945,170 L 956,150 L 1260,150"
            fill="none"
            stroke="url(#neonEcgGrad)"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Script Calligraphy Motto: "Stronger Hearts, Brighter Tomorrows" */}
        <div className="absolute right-8 top-5 hidden select-none md:block text-right">
          <div className="font-['Caveat'] text-2xl lg:text-[1.95rem] font-bold leading-[1.08] tracking-wide text-white/30 -rotate-[8deg]">
            <p>Stronger</p>
            <p>Hearts</p>
            <p className="text-white/35">Brighter</p>
            <p>Tomorrows</p>
          </div>
          <div className="mt-1 h-[1.5px] w-28 ml-auto bg-gradient-to-l from-white/30 to-transparent -rotate-[8deg]" />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="container-lg relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        {/* Left Info Column */}
        <div className="max-w-2xl">
          {/* Eyebrow with horizontal dash line */}
          <div className="flex items-center gap-3">
            <span className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-white/95">
              NEED AN APPOINTMENT?
            </span>
            <span className="h-[1.5px] w-14 rounded-full bg-gradient-to-r from-white/70 to-transparent" />
          </div>

          {/* Large Main Heading */}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] leading-[1.14]">
            Call White River Health Cardiology
          </h2>

          {/* Location with Pin Icon */}
          <div className="mt-3 flex items-center gap-2 text-[14.5px] font-medium text-white/95 sm:text-[15.5px]">
            <MapPin size={18} className="shrink-0 text-white fill-white/20" />
            <span>{OFFICE.address.join(", ")}</span>
          </div>

          {/* 3 Core Care Pillars / Features Matching Reference */}
          <div className="mt-7 flex flex-wrap items-center gap-5 sm:gap-7 pt-2">
            {/* Pillar 1: Expert Heart Care */}
            <div className="flex items-center gap-3">
              <Heart size={26} strokeWidth={1.8} className="shrink-0 text-white/95" />
              <div className="text-[13px] font-medium leading-tight text-white">
                <p className="font-semibold text-white">Expert</p>
                <p className="text-white/90">Heart Care</p>
              </div>
            </div>

            {/* Vertical Divider */}
            <span className="hidden h-8 w-[1px] bg-white/30 sm:block" />

            {/* Pillar 2: Compassionate Team */}
            <div className="flex items-center gap-3">
              <Users size={26} strokeWidth={1.8} className="shrink-0 text-white/95" />
              <div className="text-[13px] font-medium leading-tight text-white">
                <p className="font-semibold text-white">Compassionate</p>
                <p className="text-white/90">Team</p>
              </div>
            </div>

            {/* Vertical Divider */}
            <span className="hidden h-8 w-[1px] bg-white/30 sm:block" />

            {/* Pillar 3: A Healthier Tomorrow */}
            <div className="flex items-center gap-3">
              <ShieldCheck size={26} strokeWidth={1.8} className="shrink-0 text-white/95" />
              <div className="text-[13px] font-medium leading-tight text-white">
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
            className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 sm:px-9 sm:py-4 text-[#9e1627] shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition-all duration-200 hover:bg-slate-50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.38)] focus:outline-none focus:ring-4 focus:ring-white/40"
          >
            <Phone size={19} className="fill-[#9e1627] text-[#9e1627]" />
            <span className="text-base sm:text-[1.18rem] font-bold tracking-tight text-[#9e1627]">
              {OFFICE.phone}
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
