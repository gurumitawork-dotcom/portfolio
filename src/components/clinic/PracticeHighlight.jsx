import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Activity,
  Phone,
  CheckCircle2,
  Building2,
  HeartHandshake,
  Footprints,
} from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import { maheshClinic } from "../../assets/images/index.js";
import { CLINIC_PHONE_HREF, FEATURED_HIGHLIGHT } from "../../data/clinic.js";
import { OFFICE } from "../../data/profile.js";

const PROGRAM_PILLARS = [
  {
    icon: Users,
    title: "81 Regional Healthcare Providers",
    desc: "Community education and multidisciplinary alliance established at the 2021 inaugural symposium.",
    badge: "Inaugural Alliance",
  },
  {
    icon: Activity,
    title: "Critical Limb Ischemia (CLI) Salvage",
    desc: "Below-the-knee (BTK) and pedal artery endovascular recanalization restoring microvascular perfusion.",
    badge: "Pedal Access",
  },
  {
    icon: HeartHandshake,
    title: "Multidisciplinary Wound Care Protocol",
    desc: "Coordinating cardiology, podiatry, and wound centers to prevent avoidable limb amputations.",
    badge: "Limb Preservation",
  },
];

export default function PracticeHighlight() {
  return (
    <section className="relative bg-[#f8f6f4] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 xl:px-12">
      <div className="relative mx-auto max-w-[1360px]">
        {/* Floating Architectural Pavilion */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-[#1e2c40] bg-[#0c1322] shadow-[0_28px_70px_-20px_rgba(10,18,34,0.5)]">
          {/* Ambient Lighting & Medical Blueprint Glow */}
          <div className="pointer-events-none absolute -top-32 left-[5%] h-80 w-[500px] rounded-full bg-crimson-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-[5%] h-80 w-[500px] rounded-full bg-navy-700/40 blur-3xl" />

          {/* Blueprint Grid Watermark */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

          {/* Top Console Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-3.5 sm:px-10 sm:py-4 bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 rounded-full bg-crimson-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-crimson-400 sm:text-[11.5px]">
                {FEATURED_HIGHLIGHT.eyebrow}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[11.5px] font-medium text-slate-400">
              <ShieldCheck size={14} className="text-crimson-400" />
              <span>White River Health Complex Coronary & Amputation Prevention Program</span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] gap-8 xl:gap-12 p-6 sm:p-10 lg:p-12 items-center">
            
            {/* Left Column: Narrative, Mission & Program Metrics */}
            <Reveal className="flex flex-col justify-between">
              <div>
                {/* Program Title */}
                <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.85rem] leading-[1.12]">
                  {FEATURED_HIGHLIGHT.title}
                </h2>

                <p className="mt-2 text-[14.5px] font-semibold text-crimson-400">
                  Director, Complex Coronary and Amputation Prevention Program
                </p>

                {/* Core User-Preserved Body */}
                <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-300">
                  {FEATURED_HIGHLIGHT.body}
                </p>

                {/* Program Architecture: 3 Key Modules */}
                <div className="mt-8 space-y-3">
                  {PROGRAM_PILLARS.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.title}
                        className="group flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:border-crimson-500/40 hover:bg-white/[0.05]"
                      >
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-crimson-500/15 border border-crimson-500/30 text-crimson-400 group-hover:scale-105 transition-transform">
                          <Icon size={16} strokeWidth={2} />
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-[13.5px] font-bold text-white group-hover:text-crimson-300 transition-colors">
                              {pillar.title}
                            </h3>
                            <span className="rounded-md bg-white/[0.08] border border-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                              {pillar.badge}
                            </span>
                          </div>
                          <p className="mt-1 text-[12.5px] leading-relaxed text-slate-400">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Button Row */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <Link
                  to={FEATURED_HIGHLIGHT.cta.to}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-crimson-600 px-7 py-3 text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(220,38,38,0.35)] transition-all hover:bg-crimson-500 hover:-translate-y-0.5"
                >
                  <span>{FEATURED_HIGHLIGHT.cta.label}</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={CLINIC_PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-[14px] font-semibold text-slate-200 transition-all hover:bg-white/[0.08] hover:border-white/40"
                >
                  <Phone size={15} className="text-crimson-400" />
                  <span>Refer a Patient: {OFFICE.phone}</span>
                </a>
              </div>
            </Reveal>

            {/* Right Column: Visual Clinical Console with Doctor Portrait */}
            <Reveal delay={0.12} className="relative">
              <div className="relative mx-auto max-w-[460px] overflow-hidden rounded-[24px] sm:rounded-[28px] border-2 border-white/10 bg-[#111c2e] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Doctor Portrait Image */}
                <div className="relative aspect-[4/4.2] overflow-hidden">
                  <img
                    src={maheshClinic}
                    alt="Dr. Mahesh Anantha Narayanan in clinic"
                    className="h-full w-full object-cover object-[center_16%] filter brightness-[0.96] contrast-[1.02] transition-transform duration-500 hover:scale-[1.03]"
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/40 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-white">
                      <Footprints size={13} className="text-crimson-400" />
                      Limb Salvage Initiative
                    </span>
                    <span className="rounded-full bg-crimson-600/90 backdrop-blur-md px-2.5 py-0.5 text-[10.5px] font-bold text-white shadow-sm">
                      Since 2021
                    </span>
                  </div>

                  {/* Floating Doctor Credential Card */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/75 p-4 backdrop-blur-xl shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[14px] font-bold text-white">
                          Dr. Mahesh Anantha Narayanan
                        </p>
                        <p className="text-[11.5px] font-medium text-crimson-300">
                          Program Founder & Physician Director
                        </p>
                      </div>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-crimson-600/80 text-white">
                        <Building2 size={16} />
                      </span>
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                      <span>White River Health · Batesville AR</span>
                      <span className="font-semibold text-crimson-400">81+ Providers Reached</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Clinical Metric Strip */}
                <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 bg-[#0c1322] p-4 text-center">
                  <div>
                    <span className="block text-2xl font-black text-white tabular-nums">
                      1,000+
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      Annual Cases since 2021
                    </span>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-crimson-400 tabular-nums">
                      81
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">
                      Regional Providers Unified
                    </span>
                  </div>
                </div>

              </div>
            </Reveal>

          </div>

          {/* Bottom Precision Ribbon */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-black/35 px-6 py-3 sm:px-10 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-crimson-400" />
              <span>
                Dedicated to preventing lower-extremity amputations across Batesville and rural Arkansas communities
              </span>
            </div>
            <span className="hidden md:inline font-mono text-[10px] text-slate-500 uppercase">
              WHITE RIVER HEALTH CARDIOLOGY · BATESVILLE, AR
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
