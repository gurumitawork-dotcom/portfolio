import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  Footprints,
  Route,
  GraduationCap,
  ArrowRight,
  ShieldAlert,
  HeartPulse,
  CheckCircle2,
  Stethoscope,
  Building2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Phone,
  MapPin,
  Users,
  Award,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Reveal from "../ui/Reveal.jsx";

export const PILLARS_DATA = [
  {
    id: "coronary",
    index: "01",
    roman: "I",
    shortName: "Complex",
    tabLabel: "Complex Coronary",
    badge: "High-Risk PCI & CTO",
    icon: HeartPulse,
    title: "Complex coronary intervention",
    summary:
      "CTO recanalization, left main and multivessel PCI, lithotripsy, atherectomy, and imaging-guided intervention.",
    procedures: [
      "CTO Recanalization",
      "Left Main & Multivessel PCI",
      "Intravascular Lithotripsy",
      "Orbital Atherectomy",
      "IVUS / OCT Guided",
    ],
    footnote: "High-volume practice: >1,000 cases annually since 2021",
    tagline: "Advanced Catheter-Based Coronary Revascularization",
    ctaLink: "/services",
    ctaText: "Explore Coronary Procedures",
    deepDive: {
      headline: "Specialized Revascularization for Occluded & Calcified Arteries",
      description:
        "Dedicated to patients with complex anatomy, previous bypass graft failures, or severe multi-vessel blockages who require advanced techniques beyond standard balloon angioplasty. Utilizing intravascular lithotripsy sound waves to crack deep vascular calcium and high-resolution IVUS/OCT intravascular imaging to ensure precision stent expansion.",
      protocols: [
        {
          num: "01",
          title: "Chronic Total Occlusion (CTO) Recanalization",
          detail: "Antegrade and retrograde dissection re-entry strategies restoring blood flow to chronicity occluded vessels.",
          badge: "CTO Re-entry",
        },
        {
          num: "02",
          title: "Intravascular Lithotripsy & Atherectomy",
          detail: "Acoustic pressure waves crack deep eccentric calcium; orbital atherectomy modifies dense superficial calcification.",
          badge: "Calcium Modification",
        },
        {
          num: "03",
          title: "Imaging-Guided Left Main & Bifurcation PCI",
          detail: "High-resolution intravascular ultrasound (IVUS) and OCT to optimize stent sizing, expansion, and apposition.",
          badge: "IVUS / OCT Precision",
        },
      ],
      citation: "Physician Director of Cardiovascular Services",
      citationOrg: "White River Health Cardiology · Batesville, AR",
      subProgram: "High-Volume Interventional Catheterization Care",
      referralNote: "Serving primary, secondary, and tertiary coronary referrals across Independence County and North Arkansas.",
    },
  },
  {
    id: "amputation",
    index: "02",
    roman: "II",
    shortName: "Amputation",
    tabLabel: "Amputation Prevention",
    badge: "Director & Founder",
    icon: ShieldAlert,
    title: "Amputation prevention",
    summary:
      "Founded and directs White River Health's Complex Coronary and Amputation Prevention Program.",
    procedures: [
      "Critical Limb Ischemia (CLI)",
      "Limb Preservation Protocols",
      "Pedal & Tibial Reconstruction",
      "81+ Regional Provider Alliance",
    ],
    footnote: "Founded regional program in 2021 serving North Arkansas",
    tagline: "Multidisciplinary Limb Salvage & Wound Healing",
    ctaLink: "/services",
    ctaText: "Explore Limb Preservation",
    deepDive: {
      headline: "Comprehensive Limb Salvage for Critical Limb Ischemia (CLI)",
      description:
        "Established North Arkansas's dedicated referral pipeline uniting cardiology, wound care, podiatry, and vascular surgery. Focused on restoring microvascular perfusion to ischemic extremities, healing chronic non-healing ulcers, and preventing avoidable amputations in diabetic and peripheral artery disease patients.",
      protocols: [
        {
          num: "01",
          title: "Inaugural 2021 Program Launch: 81 Regional Providers",
          detail: "Unified multi-county primary care doctors, wound specialists, and podiatrists under a rapid limb salvage protocol.",
          badge: "Regional Alliance",
        },
        {
          num: "02",
          title: "Below-the-Knee (BTK) & Pedal Artery Recanalization",
          detail: "Micro-puncture and retrograde pedal access to restore pulsatile circulation through diseased tibial vessels.",
          badge: "Infrapopliteal Access",
        },
        {
          num: "03",
          title: "Direct Angiosome-Targeted Revascularization",
          detail: "Anatomic revascularization focused directly on the ulcer bed to accelerate refractory diabetic wound closure.",
          badge: "Angiosome Perfusion",
        },
      ],
      citation: "Physician Director, Complex Coronary & Amputation Prevention Program",
      citationOrg: "White River Health · Batesville, AR",
      subProgram: "Multidisciplinary Limb Salvage & Wound Healing",
      referralNote: "Included in White River Health clinical referrals and regional care coordination across North Arkansas.",
    },
  },
  {
    id: "peripheral",
    index: "03",
    roman: "III",
    shortName: "Peripheral",
    tabLabel: "Peripheral & Venous",
    badge: "Yale Fellowship",
    icon: Route,
    title: "Peripheral & venous intervention",
    summary:
      "Lower-extremity arterial disease, carotid and subclavian intervention, and venous thromboembolism care.",
    procedures: [
      "Lower-Extremity Arterial (PAD)",
      "Carotid & Subclavian Stenting",
      "Venous Thromboembolism (VTE)",
      "Deep Vein Thrombosis & PE",
    ],
    footnote: "Fellowship-trained in endovascular intervention at Yale-New Haven Hospital",
    tagline: "Endovascular, Supra-Aortic & Venous Therapeutics",
    ctaLink: "/training",
    ctaText: "View Fellowship Training",
    deepDive: {
      headline: "Full-Spectrum Endovascular & Venous Catheter Therapies",
      description:
        "Comprehensive vascular care addressing arterial occlusive disease from the neck vessels down to the toes, as well as complex venous disease. Employs modern catheter-directed thrombolysis, mechanical thrombectomy for pulmonary embolism, and minimally invasive carotid stenting with distal embolic protection.",
      protocols: [
        {
          num: "01",
          title: "Lower-Extremity Arterial Revascularization",
          detail: "Atherectomy, drug-coated balloons, and stenting for iliac, superficial femoral, and popliteal artery disease.",
          badge: "Arterial Salvage",
        },
        {
          num: "02",
          title: "Carotid & Subclavian Transcatheter Intervention",
          detail: "Carotid artery stenting with distal cerebral embolic protection filters for stroke prevention.",
          badge: "Neurovascular Protection",
        },
        {
          num: "03",
          title: "Catheter-Directed Venous Thromboembolism (VTE)",
          detail: "Rapid mechanical aspiration and low-dose thrombolysis for acute massive/submassive pulmonary embolism and DVT.",
          badge: "PE & DVT Thrombectomy",
        },
      ],
      citation: "Endovascular Fellowship, Yale-New Haven Hospital",
      citationOrg: "Yale University School of Medicine",
      subProgram: "Peripheral Arterial, Supra-Aortic & Deep Venous Systems",
      referralNote: "Specialized consultative vascular evaluation for intermittent claudication, carotid bruits, and acute venous thrombosis.",
    },
  },
  {
    id: "teaching",
    index: "04",
    roman: "IV",
    shortName: "Teaching",
    tabLabel: "Teaching & Faculty",
    badge: "Faculty & Research",
    icon: GraduationCap,
    title: "Teaching & faculty",
    summary:
      "Residency faculty at White River Health, Assistant Professor at UAMS, and national case-based teaching at CRT, CTO, and CVI.",
    procedures: [
      "Assistant Professor (UAMS)",
      "Residency Core Faculty",
      "CRT · CTO · CVI National Faculty",
      "CIMS Founder (50+ Scholars)",
    ],
    footnote: "54 peer-reviewed papers · 58 national presentations · h-index 17",
    tagline: "Academic Cardiology, Mentorship & National Symposia",
    ctaLink: "/teaching",
    ctaText: "Explore Academic & CIMS Work",
    deepDive: {
      headline: "Medical Education, National Live-Case Faculty & Research Leadership",
      description:
        "Actively training future internists and cardiologists as residency faculty at White River Health and Assistant Professor at the University of Arkansas for Medical Sciences (UAMS). Regularly invited faculty and case presenter at major national interventional congresses.",
      protocols: [
        {
          num: "01",
          title: "University & Residency Teaching Faculty",
          detail: "Assistant Professor at UAMS and core clinical educator in the White River Health Internal Medicine Residency.",
          badge: "UAMS & WRH Faculty",
        },
        {
          num: "02",
          title: "National Interventional Faculty: CRT, CTO & CVI",
          detail: "Moderator and case presenter on complex CTO techniques, coronary complications, and novel devices.",
          badge: "National Symposia",
        },
        {
          num: "03",
          title: "Founder, CIMS Resident & Student Research Group",
          detail: "Built 50+ member research mentorship initiative at Creighton supported by a $25,000 grant, producing 54 publications.",
          badge: "CIMS Founder",
        },
      ],
      citation: "Assistant Professor, University of Arkansas for Medical Sciences",
      citationOrg: "Internal Medicine Residency Faculty, White River Health",
      subProgram: "Academic Mentorship, Clinical Research & Case-Based Education",
      referralNote: "Integrating evidence-based academic research and the latest interventional clinical trials into daily patient care.",
    },
  },
];

export default function CommitmentGrid({ eyebrow = "Commitment to better heart health" }) {
  const [activeId, setActiveId] = useState("amputation");
  const activePillar = PILLARS_DATA.find((p) => p.id === activeId) || PILLARS_DATA[1];

  return (
    <section
      id="clinical-pillars"
      className="relative overflow-hidden bg-gradient-to-b from-[#fbf9f8] via-[#ffffff] to-[#f7f4f2] py-16 sm:py-24 border-y border-[#eedede]/60"
    >
      {/* Background medical grid and pulse trace watermark */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] select-none [background-image:radial-gradient(#9e2a2b_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Subtle top arterial glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-crimson-200/20 blur-3xl" />

      <div className="container-lg relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f8c4cc] bg-[#fff5f6] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-crimson-700 shadow-sm">
            <HeartPulse size={14} className="text-crimson-600 animate-pulse" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="mt-4 font-sans text-3xl font-extrabold tracking-[-0.03em] text-[#14233c] sm:text-4xl lg:text-[2.65rem] leading-[1.12]">
            Four pillars of the practice
          </h2>

          <p className="mt-3.5 text-base sm:text-lg font-medium text-crimson-800/90">
            Mapped from the CV — not a generic clinic checklist.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[14.5px]">
            Every pillar represents documented procedural volumes, institutional directorship,
            fellowship subspecialization, or academic faculty appointments in Batesville and UAMS.
          </p>
        </Reveal>

        {/* The 4 Architectural Pillar Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {PILLARS_DATA.map((pillar, i) => {
            const Icon = pillar.icon;
            const isActive = activeId === pillar.id;

            return (
              <Reveal
                key={pillar.id}
                delay={i * 0.07}
                className="h-full"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveId(pillar.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveId(pillar.id);
                    }
                  }}
                  className={`group relative flex h-full flex-col justify-between rounded-[22px] p-6 text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-white border-2 border-crimson-600 shadow-[0_20px_45px_-12px_rgba(158,42,43,0.22)] ring-4 ring-crimson-50 -translate-y-1.5"
                      : "bg-white/85 border border-[#eedede]/80 shadow-[0_10px_30px_-15px_rgba(20,35,60,0.08)] hover:bg-white hover:border-crimson-300 hover:shadow-[0_16px_36px_-12px_rgba(20,35,60,0.14)] hover:-translate-y-1"
                  }`}
                >
                  {/* Roman Numeral Architectural Watermark */}
                  <span
                    className={`absolute -top-3 -right-1 font-serif text-7xl font-black transition-opacity duration-300 select-none pointer-events-none ${
                      isActive ? "text-crimson-100/80" : "text-slate-100 group-hover:text-crimson-50"
                    }`}
                  >
                    {pillar.roman}
                  </span>

                  {/* Top ECG Accent Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-crimson-600 via-crimson-500 to-rose-400"
                        : "bg-transparent group-hover:bg-crimson-200"
                    }`}
                  />

                  {/* Top Row: Index, Badge & Icon */}
                  <div>
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`grid h-11 w-11 place-items-center rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-crimson-600 text-white shadow-md shadow-crimson-600/30"
                              : "bg-[#fff0f2] text-crimson-700 group-hover:bg-crimson-600 group-hover:text-white"
                          }`}
                        >
                          <Icon size={22} strokeWidth={2} />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                            Pillar {pillar.index}
                          </span>
                          <span
                            className={`text-[11px] font-bold tracking-tight ${
                              isActive ? "text-crimson-700" : "text-slate-600"
                            }`}
                          >
                            {pillar.badge}
                          </span>
                        </div>
                      </div>

                      {/* Active Indicator Pulse */}
                      {isActive && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-crimson-50 border border-crimson-200 px-2 py-0.5 text-[10px] font-bold text-crimson-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-crimson-600 animate-ping" />
                          <span>Active</span>
                        </span>
                      )}
                    </div>

                    {/* Pillar Title */}
                    <h3
                      className={`mt-5 text-[1.25rem] font-bold leading-snug tracking-tight transition-colors duration-200 ${
                        isActive ? "text-[#14233c]" : "text-[#14233c] group-hover:text-crimson-800"
                      }`}
                    >
                      {pillar.title}
                    </h3>

                    {/* Exact User Prompt Summary */}
                    <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600">
                      {pillar.summary}
                    </p>

                    {/* Clinical Procedure Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {pillar.procedures.map((proc) => (
                        <span
                          key={proc}
                          className={`rounded-md px-2 py-0.5 text-[11px] font-medium transition-colors ${
                            isActive
                              ? "bg-crimson-50/80 text-crimson-900 border border-crimson-100"
                              : "bg-slate-100/80 text-slate-600 border border-slate-200/60 group-hover:bg-[#fff2f4] group-hover:text-crimson-800"
                          }`}
                        >
                          {proc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Footnote & Interactive Callout */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-100/90">
                    <p className="flex items-start gap-1.5 text-[11px] font-medium leading-snug text-slate-500">
                      <CheckCircle2
                        size={13}
                        className={`shrink-0 mt-0.5 ${isActive ? "text-crimson-600" : "text-slate-400"}`}
                      />
                      <span>{pillar.footnote}</span>
                    </p>

                    <div className="mt-3 flex items-center justify-between text-[12px] font-semibold">
                      <span
                        className={`inline-flex items-center gap-1 transition-colors ${
                          isActive
                            ? "text-crimson-700"
                            : "text-slate-600 group-hover:text-crimson-700"
                        }`}
                      >
                        {isActive ? "Viewing Protocol Dossier" : "Inspect Protocol"}
                        <ChevronRight
                          size={14}
                          className={`transition-transform duration-200 ${
                            isActive ? "translate-x-1 text-crimson-700" : "group-hover:translate-x-0.5"
                          }`}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* REDESIGNED: Clinical Protocol Dossier Merged Directly With Background */}
        <Reveal delay={0.15} className="mt-14 pt-10 border-t border-[#eedede]/80">
          {/* Header Bar: Open & Merged Directly With Section Background */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-[#eedede]/70">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-crimson-600 text-white shadow-xs">
                  <Stethoscope size={15} strokeWidth={2.2} />
                </span>
                <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-slate-800">
                  Clinical Protocol Dossier
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-crimson-50 border border-crimson-200 px-2 py-0.5 text-[10px] font-bold text-crimson-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson-600 animate-ping" />
                  Interactive Deep-Dive
                </span>
              </div>
              <p className="mt-1 text-[12.5px] text-slate-500">
                Direct evidence, technical modalities, and institutional directorship for Pillar 0{activePillar.index}.
              </p>
            </div>

            {/* Seamless Station Switcher Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/50">
              {PILLARS_DATA.map((pillar) => {
                const isSelected = pillar.id === activePillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActiveId(pillar.id)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-[12px] font-semibold transition-all ${
                      isSelected
                        ? "bg-white text-[#14233c] shadow-xs font-bold ring-1 ring-black/5"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    <span className={`text-[11px] font-mono font-bold ${isSelected ? "text-crimson-600" : "text-slate-400"}`}>
                      {pillar.index}
                    </span>
                    <span>{pillar.shortName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dossier Body: Merged With Background */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.25fr_0.85fr] gap-8 xl:gap-12 items-start">
            {/* Left Side: Clinical Protocol Details & Modalities */}
            <div>
              {/* Active Pillar Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-crimson-200/90 bg-crimson-50 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-crimson-700">
                <span className="flex h-1.5 w-1.5 rounded-full bg-crimson-600" />
                <span>Pillar {activePillar.index} · {activePillar.badge}</span>
              </div>

              {/* Headline */}
              <h3 className="mt-3.5 font-sans text-2xl font-extrabold tracking-tight text-[#14233c] sm:text-3xl lg:text-[2.15rem] leading-snug">
                {activePillar.deepDive.headline}
              </h3>

              {/* Core Description */}
              <p className="mt-3 text-[14px] leading-relaxed text-slate-600 sm:text-[14.5px]">
                {activePillar.deepDive.description}
              </p>

              {/* Protocol Matrix Section */}
              <div className="mt-7">
                <div className="flex items-center justify-between pb-2 border-b border-[#eedede]/70">
                  <span className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-slate-700">
                    Key Technical Modalities & Protocols:
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    3 Standardized Clinical Stages
                  </span>
                </div>

                {/* Protocol modules merged smoothly with the background */}
                <div className="mt-3.5 space-y-2.5">
                  {activePillar.deepDive.protocols.map((proto) => (
                    <div
                      key={proto.num}
                      className="group flex items-start gap-3.5 rounded-xl border border-[#eedede]/70 bg-white/75 p-3.5 sm:p-4 transition-all duration-200 hover:border-crimson-200 hover:bg-white hover:shadow-xs"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#fff0f2] text-[11px] font-black text-crimson-700 border border-crimson-100 group-hover:bg-crimson-600 group-hover:text-white transition-colors">
                        {proto.num}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1.5">
                          <h4 className="text-[13.5px] font-bold leading-snug text-[#14233c] group-hover:text-crimson-800 transition-colors">
                            {proto.title}
                          </h4>
                          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                            {proto.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-[12.5px] leading-relaxed text-slate-600">
                          {proto.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Areas Chips */}
              <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-[#eedede]/70">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Focus Areas:
                </span>
                {activePillar.procedures.map((proc) => (
                  <span
                    key={proc}
                    className="rounded-lg bg-white/80 border border-slate-200/80 px-2.5 py-1 text-[11.5px] font-medium text-slate-700"
                  >
                    {proc}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: Institutional Grounding Panel */}
            <div className="rounded-2xl border border-[#eedede]/90 bg-white/80 backdrop-blur-xs p-6 sm:p-7 shadow-xs">
              {/* Header with Official Shield */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
                <span className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-crimson-700">
                  <ShieldCheck size={14} className="text-crimson-600" />
                  CV Institutional Grounding
                </span>
                <span className="rounded-full bg-white border border-[#eedede] px-2 py-0.5 text-[10px] font-semibold text-slate-600 shadow-xs">
                  Verified CV
                </span>
              </div>

              {/* Official Appointment Card */}
              <div className="mt-4 rounded-xl border border-[#eedede]/70 bg-white p-4.5 sm:p-5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Documented Appointment
                </span>
                <h4 className="mt-1 text-[15px] font-bold leading-snug text-[#14233c]">
                  {activePillar.deepDive.citation}
                </h4>
                <p className="mt-1 text-[12px] font-medium text-crimson-800">
                  {activePillar.deepDive.citationOrg}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-100">
                  <span className="block text-[10.5px] font-bold uppercase tracking-wider text-slate-500">
                    Program Focus
                  </span>
                  <p className="mt-0.5 text-[13px] font-semibold text-slate-800">
                    {activePillar.deepDive.subProgram}
                  </p>
                </div>
              </div>

              {/* Referral & Regional Coordination Note */}
              <div className="mt-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 p-3.5">
                <div className="flex items-start gap-2.5">
                  <Building2 size={15} className="text-crimson-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-[11.5px] font-bold text-slate-800">
                      Regional Coordination & Referrals
                    </span>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-slate-600">
                      {activePillar.deepDive.referralNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Clinic Information */}
              <div className="mt-3.5 space-y-1 text-[11.5px] text-slate-600">
                <p className="flex items-center gap-2">
                  <MapPin size={13} className="text-crimson-700 shrink-0" />
                  <span>White River Health Cardiology · 16 Hospital Circle, Batesville AR</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={13} className="text-crimson-700 shrink-0" />
                  <span>Referral Hotline: <strong className="text-slate-800">870-262-1600</strong></span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <Link
                  to={activePillar.ctaLink}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9E2A2B] px-4 py-2.5 text-[13px] font-semibold text-white shadow-xs transition-all hover:bg-[#852324] hover:-translate-y-0.5 flex-1"
                >
                  <span>{activePillar.ctaText}</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-crimson-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-crimson-800 transition-all hover:bg-crimson-50 hover:-translate-y-0.5"
                >
                  <span>Physician Referral</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Dossier Bottom Verification Baseline */}
          <div className="mt-10 pt-4 border-t border-[#eedede]/70 flex flex-wrap items-center justify-between gap-3 text-[11.5px] text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-crimson-600" />
              <span>
                Coronary, limb salvage, and endovascular pathways verified in clinical CV · White River Health & UAMS
              </span>
            </div>
            <span className="hidden sm:inline font-mono text-[10.5px] text-slate-400 uppercase tracking-wider">
              Protocol v2024 · Batesville, AR
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
