import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Route,
  GraduationCap,
  ArrowRight,
  ShieldAlert,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import { pillarsBg } from "../../assets/images/index.js";

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
  const [activeId, setActiveId] = useState("coronary");
  const activePillar = PILLARS_DATA.find((p) => p.id === activeId) || PILLARS_DATA[0];

  return (
    <section id="clinical-pillars" className="relative overflow-hidden py-14 sm:py-16">
      {/* UNIQUE LAYOUT: full-bleed dark console — header merged directly into the same
          navy panel as the pillar switcher and content stage, instead of a separate
          light header block sitting above a hard-edged dark section. */}
      <Reveal delay={0.1} className="relative z-10">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0b1626] via-[#12213a] to-[#1c1230] py-10 sm:py-14">
            <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:26px_26px]" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-crimson-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
            <img
              src={pillarsBg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] select-none object-cover opacity-[0.16] mix-blend-luminosity lg:block"
              style={{
                maskImage: "linear-gradient(to left, black, transparent)",
                WebkitMaskImage: "linear-gradient(to left, black, transparent)",
              }}
            />

            <div className="container-lg relative z-10">
              {/* Header — merged into the same navy panel, no seam against the console below */}
              <div className="mb-9 flex flex-col gap-4 border-b border-white/10 pb-6 sm:mb-11 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:pb-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-crimson-400">
                    <HeartPulse size={13} className="text-crimson-400 animate-pulse" />
                    <span>{eyebrow}</span>
                  </div>
                  <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.4rem] leading-[1.1]">
                    Four pillars of the practice
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-relaxed text-slate-300 sm:text-right sm:text-[13.5px]">
                  Every pillar represents documented procedural volumes, institutional directorship,
                  fellowship subspecialization, or academic faculty appointments in Batesville and UAMS.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 lg:grid-cols-[300px_1fr] lg:gap-0">
                {/* Left: pillar switcher — horizontal scroller on mobile, full-height sidebar on desktop */}
                <div className="flex gap-2 overflow-x-auto pb-2 lg:h-full lg:flex-col lg:gap-2 lg:overflow-visible lg:border-r lg:border-white/10 lg:pb-0 lg:pr-6">
                  {PILLARS_DATA.map((pillar) => {
                    const Icon = pillar.icon;
                    const isSelected = activeId === pillar.id;
                    return (
                      <button
                        key={pillar.id}
                        type="button"
                        onClick={() => setActiveId(pillar.id)}
                        className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-300 lg:flex-1 lg:shrink lg:py-4 ${
                          isSelected ? "bg-white/10 ring-1 ring-inset ring-crimson-500/40" : "hover:bg-white/5"
                        }`}
                      >
                        <span
                          className={`font-serif text-xl font-black leading-none ${
                            isSelected ? "text-crimson-400" : "text-white/25"
                          }`}
                        >
                          {pillar.index}
                        </span>
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors ${
                            isSelected ? "bg-crimson-600 text-white" : "bg-white/5 text-white/50"
                          }`}
                        >
                          <Icon size={16} strokeWidth={2} />
                        </span>
                        <span className="min-w-0">
                          <span
                            className={`block whitespace-nowrap text-[13.5px] font-bold leading-snug lg:whitespace-normal ${
                              isSelected ? "text-white" : "text-white/70"
                            }`}
                          >
                            {pillar.title}
                          </span>
                          <span
                            className={`hidden text-[11px] font-medium uppercase tracking-wide lg:block ${
                              isSelected ? "text-crimson-400" : "text-white/35"
                            }`}
                          >
                            {pillar.badge}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Right: large content stage — fills the remaining width */}
                <div className="min-h-[480px] py-8 lg:min-h-[520px] lg:py-2 lg:pl-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePillar.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="inline-flex items-center gap-2 rounded-full border border-crimson-500/30 bg-crimson-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-crimson-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-crimson-400" />
                        Pillar {activePillar.index} · {activePillar.badge}
                      </div>

                      <h3 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-3xl lg:text-[2.1rem]">
                        {activePillar.deepDive.headline}
                      </h3>

                      <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-slate-300">
                        {activePillar.deepDive.description}
                      </p>

                      {/* Protocols laid out as a 3-column grid — uses the full stage width */}
                      <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                        {activePillar.deepDive.protocols.map((proto) => (
                          <div key={proto.num} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-crimson-500/15 text-[11px] font-black text-crimson-400">
                              {proto.num}
                            </span>
                            <h4 className="mt-3 text-[13.5px] font-bold leading-snug text-white">{proto.title}</h4>
                            <p className="mt-1.5 text-[12px] leading-relaxed text-slate-400">{proto.detail}</p>
                            <span className="mt-3 inline-block rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                              {proto.badge}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {activePillar.procedures.map((proc) => (
                          <span
                            key={proc}
                            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11.5px] font-medium text-slate-300"
                          >
                            {proc}
                          </span>
                        ))}
                      </div>

                      {/* Bottom bar: institutional citation + CTAs, spanning the full stage width */}
                      <div className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-start gap-2.5">
                          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-crimson-400" />
                          <div>
                            <p className="text-[13px] font-bold text-white">{activePillar.deepDive.citation}</p>
                            <p className="mt-0.5 text-[12px] text-slate-400">{activePillar.deepDive.citationOrg}</p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                          <Link
                            to={activePillar.ctaLink}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-500"
                          >
                            <span>{activePillar.ctaText}</span>
                            <ArrowRight size={14} />
                          </Link>
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                          >
                            <span>Physician Referral</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
    </section>
  );
}
