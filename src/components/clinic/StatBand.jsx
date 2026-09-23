import { Link } from "react-router-dom";
import {
  HeartPulse,
  FileText,
  Award,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
  Activity,
} from "lucide-react";
import StatCounter from "../ui/StatCounter.jsx";
import Reveal from "../ui/Reveal.jsx";

const STAT_METRICS = [
  {
    id: "cases",
    value: 1000,
    suffix: "+",
    label: "Cases / year since 2021",
    sublabel: "Coronary, peripheral arterial & venous interventions",
    category: "Cath Lab Volume",
    badge: "Documented High-Volume",
    icon: HeartPulse,
    iconColor: "text-crimson-400 bg-crimson-500/10 border-crimson-500/30",
    glowColor: "from-crimson-600/20 to-transparent",
    accentNumber: true,
    link: "/services",
    linkText: "View Clinical Scope",
  },
  {
    id: "papers",
    value: 54,
    suffix: "",
    label: "Peer-reviewed papers",
    sublabel: "Published in major cardiology journals & text chapters",
    category: "Medical Literature",
    badge: "Original Research",
    icon: FileText,
    iconColor: "text-rose-300 bg-rose-400/10 border-rose-400/20",
    glowColor: "from-rose-500/15 to-transparent",
    accentNumber: false,
    link: "/publications",
    linkText: "Explore 54 Papers",
  },
  {
    id: "presentations",
    value: 58,
    suffix: "",
    label: "Oral & poster presentations",
    sublabel: "CRT, CTO Summit, CVI, ACC & AHA national meetings",
    category: "Academic Faculty",
    badge: "National Symposia",
    icon: Award,
    iconColor: "text-amber-300 bg-amber-400/10 border-amber-400/20",
    glowColor: "from-amber-500/15 to-transparent",
    accentNumber: false,
    link: "/presentations",
    linkText: "View 58 Sessions",
  },
  {
    id: "hindex",
    value: 17,
    suffix: "",
    label: "h-index (Google Scholar)",
    sublabel: "1,010+ verified global citations across interventional literature",
    category: "Citation Impact",
    badge: "1,010+ Citations",
    icon: TrendingUp,
    iconColor: "text-sky-300 bg-sky-400/10 border-sky-400/20",
    glowColor: "from-sky-500/15 to-transparent",
    accentNumber: false,
    link: "/publications",
    linkText: "View Citation Index",
  },
];

export default function StatBand() {
  return (
    <section className="relative bg-[#f8f6f4] px-4 py-6 sm:px-6 sm:py-10 lg:px-8 xl:px-12">
      <div className="relative mx-auto max-w-[1360px]">
        {/* Floating Architectural Dark Console */}
        <Reveal immediate className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-[#1e2a3b] bg-[#0c131f] shadow-[0_24px_60px_-15px_rgba(10,18,30,0.4)]">
          {/* Ambient Lighting & Medical Blueprint Background */}
          <div className="pointer-events-none absolute -top-24 left-[10%] h-64 w-[450px] rounded-full bg-crimson-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-[10%] h-64 w-[450px] rounded-full bg-navy-700/30 blur-3xl" />
          
          {/* ECG paper: fine 10px squares with a bolder 50px block, like a rhythm strip */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(255,77,109,0.22) 0 1px, transparent 1px 10px)," +
                "repeating-linear-gradient(to bottom, rgba(255,77,109,0.22) 0 1px, transparent 1px 10px)," +
                "repeating-linear-gradient(to right, rgba(255,77,109,0.40) 0 1px, transparent 1px 50px)," +
                "repeating-linear-gradient(to bottom, rgba(255,77,109,0.40) 0 1px, transparent 1px 50px)",
              maskImage: "radial-gradient(120% 80% at 50% 40%, black 30%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(120% 80% at 50% 40%, black 30%, transparent 100%)",
            }}
          />

          {/* Heartbeat trace running across the console */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-1/2 h-24 w-full -translate-y-1/2 text-crimson-500/[0.13]"
            aria-hidden="true"
            preserveAspectRatio="none"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          >
            <defs>
              <pattern id="statEcg" width="420" height="112" patternUnits="userSpaceOnUse">
                <path
                  d="M0 56 H150 l12 0 8 -14 10 40 9 -58 10 74 9 -42 8 14 h14 l10 -8 9 8 H420"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#statEcg)" />
          </svg>

          {/* Top Console Header Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-3.5 sm:px-8 sm:py-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 rounded-full bg-crimson-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-300 sm:text-[12px]">
                Verified Clinical Case Volume & Academic Index
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[11.5px] font-medium text-slate-400">
              <ShieldCheck size={14} className="text-crimson-400" />
              <span>Sourced from White River Health surgical records & Google Scholar</span>
            </div>
          </div>

          {/* 4 Connected Architectural Metric Pods */}
          <div className="relative z-10 grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {STAT_METRICS.map((metric, idx) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.id}
                  className="group relative flex flex-col justify-between p-6 transition-colors duration-300 hover:bg-white/[0.03] sm:p-7 lg:p-8"
                >
                  {/* Subtle Top Hover Gradient */}
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${metric.glowColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  {/* Header of Pod: Index & Category Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Metric 0{idx + 1}
                      </span>
                      <span className="rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-0.5 text-[10.5px] font-medium tracking-tight text-slate-300">
                        {metric.badge}
                      </span>
                    </div>

                    {/* Icon & Primary Stat Number */}
                    <div className="mt-5 flex items-baseline gap-3">
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${metric.iconColor}`}
                      >
                        <Icon size={18} strokeWidth={2.25} />
                      </span>

                      <div className="min-w-0">
                        <div
                          className={`font-sans text-4xl font-extrabold tracking-tight tabular-nums sm:text-[2.75rem] lg:text-[3rem] leading-none ${
                            metric.accentNumber
                              ? "text-white"
                              : "text-white"
                          }`}
                        >
                          <StatCounter value={metric.value} suffix={metric.suffix} />
                        </div>
                      </div>
                    </div>

                    {/* Label & Meaning */}
                    <p className="mt-3.5 text-[14px] font-bold leading-snug tracking-tight text-slate-100 sm:text-[14.5px]">
                      {metric.label}
                    </p>

                    {/* Context Explanation */}
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-400">
                      {metric.sublabel}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-6 pt-3 border-t border-white/[0.07]">
                    <Link
                      to={metric.link}
                      className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-slate-300 transition-colors duration-200 group-hover:text-crimson-400"
                    >
                      <span>{metric.linkText}</span>
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Precision Rhythm Line */}
          <div className="relative z-10 flex items-center justify-between border-t border-white/10 bg-black/25 px-6 py-2.5 sm:px-8 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <Activity size={13} className="text-crimson-400" />
              <span>Independent interventional outcomes documented in Batesville, Arkansas</span>
            </div>
            <span className="hidden md:inline text-slate-500 font-mono text-[10px]">
              UPDATED CV · BATESVILLE, AR
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
