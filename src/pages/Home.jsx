import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronRight, Stethoscope, GraduationCap, BookOpen, Users, FileText, Presentation, Award, Mail } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import StatCounter from "../components/StatCounter.jsx";
import IconBadge from "../components/IconBadge.jsx";
import { STATS, HOME_ABOUT_LEAD, HOME_ABOUT_SNAPSHOT } from "../data/profile.js";

const chipContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.5 } },
};
const chipItem = {
  hidden: { opacity: 0, y: 8, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const EXPLORE_GROUPS = [
  {
    heading: "Clinical",
    icon: Stethoscope,
    links: [
      { to: "/training", title: "Training & Practice", desc: "Fellowship training, board certification, and case volume.", icon: GraduationCap },
      { to: "/teaching", title: "Teaching & Research", desc: "CIMS, faculty roles, grand rounds, and mentorship.", icon: Users },
    ],
  },
  {
    heading: "Scholarship",
    icon: BookOpen,
    links: [
      { to: "/publications", title: "Publications", desc: "54 peer-reviewed papers, searchable by topic.", icon: FileText },
      { to: "/presentations", title: "Presentations", desc: "58 oral & poster presentations at national meetings.", icon: Presentation },
      { to: "/recognition", title: "Recognition", desc: "Awards, societies, and editorial board service.", icon: Award },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-12 sm:pt-40 sm:pb-20">
        <div className="container-lg grid lg:grid-cols-[1.1fr_0.9fr] gap-10 sm:gap-14 items-center">
          <Reveal immediate>
            <p className="eyebrow">Interventional &amp; Endovascular Cardiology</p>
            <h1 className="mt-4 text-[2rem] sm:text-6xl font-semibold leading-[1.08] break-words">
              Mahesh
              <br />
              Anantha Narayanan
              <span className="block mt-3 text-lg sm:text-2xl font-sans font-semibold text-gradient">
                MD, FACC, FSCAI, FSVM
              </span>
            </h1>
            <p className="mt-6 max-w-xl border-l-2 border-teal-500/40 pl-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <strong className="font-semibold text-navy-900">Physician Director of Cardiovascular Services</strong> and
              Director of the Complex Coronary &amp; Amputation Prevention Program at White River Health —
              treating the most difficult coronary and peripheral vascular disease while training the next
              generation of cardiologists.
            </p>
            <motion.div
              className="mt-7 flex flex-wrap gap-2.5"
              variants={chipContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={chipItem} className="chip">
                White River Health, Batesville, AR
              </motion.span>
              <motion.span variants={chipItem} className="chip">
                Assistant Professor, UAMS
              </motion.span>
              <motion.span variants={chipItem} className="chip inline-flex items-center gap-2">
                <span className="pulse-dot" />
                1,000+ cases/year since 2021
              </motion.span>
            </motion.div>
            <div className="mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Get in touch <ArrowRight size={16} />
              </Link>
              <Link to="/publications" className="btn-glass w-full sm:w-auto">
                View publications
              </Link>
              <a
                href="/cv/Mahesh_Anantha-Narayanan_Master_CV_2026.docx"
                download
                className="btn-text"
              >
                <Download size={14} /> Download CV
              </a>
            </div>
          </Reveal>

          <Reveal immediate delay={0.15} className="relative justify-self-center w-full max-w-[300px] sm:max-w-[360px]">
            <div className="relative w-full">
              <div className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-to-br from-teal-500/20 via-transparent to-gold-500/10 blur-2xl" />
              <div className="relative glass-strong rounded-[1.75rem] p-2.5 sm:p-3">
                <img
                  src="/images/mahesh.jpg"
                  alt="Portrait of Dr. Mahesh Anantha-Narayanan in white coat"
                  className="rounded-[1.4rem] w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 glass-strong rounded-2xl px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3">
                <span className="font-serif text-3xl text-teal-600">54</span>
                <span className="text-[11px] leading-tight text-slate-700">
                  Peer-reviewed
                  <br />
                  publications
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="relative">
        <div className="container-lg">
          <Reveal immediate delay={0.2} className="glass-card grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4 px-4 sm:px-10 py-8 sm:py-10">
            {STATS.map((s, i) => (
              <div key={i} className={`text-center ${i === STATS.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}>
                <div className="font-serif text-2xl sm:text-3xl text-teal-600">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-[11px] sm:text-xs text-slate-600 leading-snug">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ================= ABOUT TEASER (snapshot only — full essays live on /about) ================= */}
      <section className="section section-tint-a">
        <div className="container-lg">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold max-w-2xl">{HOME_ABOUT_LEAD}</h2>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {HOME_ABOUT_SNAPSHOT.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05} className="glass-card p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-700">{item.label}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <Link to="/about" className="btn-primary mt-8 w-full sm:w-auto">
              Read the full profile <ChevronRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= EXPLORE — grouped directory ================= */}
      <section className="section pb-6 section-tint-b">
        <div className="container-lg">
          <Reveal>
            <p className="eyebrow">Explore</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">The full record</h2>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr_0.92fr] lg:gap-0">
            {EXPLORE_GROUPS.map((group, gi) => (
              <Reveal
                key={group.heading}
                delay={gi * 0.06}
                className={`lg:px-8 ${gi === 0 ? "lg:pl-0" : "pt-8 border-t border-slate-900/10 lg:pt-0 lg:border-t-0 lg:border-l"}`}
              >
                <div className="flex items-center gap-3">
                  <IconBadge icon={group.icon} size={15} compact />
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-700">{group.heading}</p>
                </div>
                <ul className="mt-6 space-y-2">
                  {group.links.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="group flex gap-3.5 rounded-xl px-3 py-3 -mx-3 transition-colors hover:bg-white/70"
                        >
                          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-teal-600/10 text-teal-700 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                            <ItemIcon size={16} strokeWidth={2} />
                          </span>
                          <span className="min-w-0">
                            <span className="inline-flex items-center gap-1.5 font-serif text-[17px] font-semibold text-navy-900">
                              {item.title}
                              <ArrowRight
                                size={14}
                                className="text-teal-600 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                              />
                            </span>
                            <span className="mt-0.5 block text-sm text-slate-600 leading-relaxed">{item.desc}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            ))}

            <Reveal delay={0.12} className="pt-8 border-t border-slate-900/10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <div className="flex items-center gap-3">
                <IconBadge icon={Mail} size={15} compact />
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-700">Connect</p>
              </div>
              <Link
                to="/contact"
                className="group relative mt-6 block overflow-hidden rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-6 text-white shadow-glow-teal transition-transform hover:-translate-y-0.5"
              >
                <span className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/10" />
                <span className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-gold-400/20" />
                <span className="relative font-serif text-2xl font-semibold">Contact</span>
                <span className="relative mt-2 block text-sm leading-relaxed text-white/80">
                  Referrals, speaking invitations, and collaboration.
                </span>
                <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Get in touch
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
