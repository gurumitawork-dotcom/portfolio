import { Link } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  Building2,
  CalendarDays,
  Cross,
  FileBadge,
  Footprints,
  GraduationCap,
  Heart,
  HeartHandshake,
  MapPin,
  Route,
  Shield,
  Users,
} from "lucide-react";
import Reveal from "../components/ui/Reveal.jsx";
import StatBand from "../components/clinic/StatBand.jsx";
import CommitmentGrid from "../components/clinic/CommitmentGrid.jsx";
import PracticeHighlight from "../components/clinic/PracticeHighlight.jsx";
import {
  CLINIC_PHONE_HREF,
  DOCTOR_SPOTLIGHT,
  HERO_COPY,
  HERO_CREDENTIALS,
  CLINIC_SERVICES,
} from "../data/clinic.js";
import { OFFICE, CURRENT_ROLES } from "../data/profile.js";
import { maheshHero, maheshMeet } from "../assets/images/index.js";

const SERVICE_ICONS = [Activity, Footprints, Route, GraduationCap];
const HERO_ROLE_ICONS = [Building2, Shield, GraduationCap, Users, FileBadge];

const HERO_VALUES = [
  { icon: Heart, title: "Patient First", body: "Compassionate, personalized heart care." },
  { icon: Cross, title: "Advanced Care", body: "State-of-the-art treatments for better outcomes." },
  { icon: GraduationCap, title: "Academic Leader", body: "Teaching tomorrow's physicians." },
  { icon: MapPin, title: "Serving Batesville", body: "Proud to serve our community." },
];

function formatCredential(line) {
  if (line.startsWith("Board certified:")) {
    const certs = line.replace("Board certified:", "").trim();
    return (
      <div className="home-hero-role-text">
        <span className="home-hero-role-title">Board certified:</span>
        <span className="home-hero-role-sub">{certs}</span>
      </div>
    );
  }
  const dashIndex = line.indexOf(" — ");
  if (dashIndex !== -1) {
    const title = line.slice(0, dashIndex + 3);
    const org = line.slice(dashIndex + 3);
    return (
      <div className="home-hero-role-text">
        <span className="home-hero-role-title">{title}</span>
        <span className="home-hero-role-sub">{org}</span>
      </div>
    );
  }
  return (
    <div className="home-hero-role-text">
      <span className="home-hero-role-title">{line}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-card">
          <div className="home-hero-stage">
            <Reveal immediate className="home-hero-copy">
              <p className="home-hero-badge">
                <Heart size={13} className="text-crimson-600" /> Heart care. Compassionate care.
              </p>
              <h1>
                Mahesh Anantha
                <br />
                Narayanan
              </h1>
              <p className="home-hero-credentials">{DOCTOR_SPOTLIGHT.credentials}</p>
              <ul className="home-hero-roles">
                {HERO_CREDENTIALS.map((line, index) => {
                  const Icon = HERO_ROLE_ICONS[index] || HERO_ROLE_ICONS[0];
                  return (
                    <li key={line}>
                      <span className="home-hero-role-icon">
                        <Icon size={15} strokeWidth={2} />
                      </span>
                      {formatCredential(line)}
                    </li>
                  );
                })}
              </ul>
              <p className="home-hero-lede">{HERO_COPY.lede}</p>
              <div className="home-hero-actions">
                <a href={CLINIC_PHONE_HREF} className="btn-primary">
                  <CalendarDays size={16} /> Book Appointment <ArrowRight size={15} />
                </a>
                <Link to="/services" className="btn-outline">
                  <HeartHandshake size={16} /> Our Services <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>

            <Reveal immediate delay={0.08} className="home-hero-visual">
              <svg
                className="home-hero-vector-layer"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <clipPath id="heroDoctorMask" clipPathUnits="objectBoundingBox">
                    <path d="M 0.10 0 C 0.04 0.22, 0.01 0.42, 0.02 0.55 C 0.03 0.68, 0.07 0.84, 0.13 1.0 L 1.0 1.0 L 1.0 0 Z" />
                  </clipPath>
                </defs>
                {/* Crimson sweeping organic arc framing the doctor */}
                <path
                  d="M 0.04 0 C -0.02 0.22, -0.06 0.42, -0.05 0.55 C -0.04 0.68, 0.00 0.84, 0.07 1.0 L 0.14 1.0 C 0.08 0.84, 0.04 0.68, 0.03 0.55 C 0.02 0.42, 0.05 0.22, 0.11 0 Z"
                  fill="#9E2A2B"
                />
                {/* Bottom-right corner crimson accent */}
                <path
                  d="M 0.88 1.0 C 0.93 0.92, 0.96 0.88, 1.0 0.86 L 1.0 1.0 Z"
                  fill="#9E2A2B"
                />
              </svg>

              <div className="home-hero-image">
                <img
                  src={maheshHero}
                  alt="Mahesh Anantha Narayanan holding an anatomical heart model"
                />
              </div>

              <div className="home-hero-values">
                {HERO_VALUES.map(({ icon: Icon, title, body }) => (
                  <div className="home-hero-value" key={title}>
                    <div className="home-hero-value-icon">
                      <Icon size={16} strokeWidth={2} />
                    </div>
                    <h2>{title}</h2>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatBand />

      <CommitmentGrid />

      <PracticeHighlight />

      <section className="section section-tint-a">
        <div className="container-lg">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Comprehensive cardiac care</h2>
            <p className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
              Offerings drawn from the practice at White River Health.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CLINIC_SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <Reveal key={s.id} delay={i * 0.05} className="glass-card-hover p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-crimson-50 text-crimson-700">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.summary}</p>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-8 text-center">
            <Link to="/services" className="btn-outline">
              View all services <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-lg">
          <Reveal className="glass-card overflow-hidden lg:grid lg:grid-cols-[0.85fr_1.15fr]">
            <img
              src={maheshMeet}
              alt="Mahesh Anantha Narayanan"
              className="h-auto w-full object-cover object-[center_12%] lg:h-full lg:min-h-[20rem]"
            />
            <div className="p-6 sm:p-10">
              <p className="eyebrow">Meet the doctor</p>
              <h2 className="mt-3 text-3xl font-semibold">{DOCTOR_SPOTLIGHT.name}</h2>
              <p className="mt-1 text-sm font-semibold tracking-[0.12em] text-crimson-700">{DOCTOR_SPOTLIGHT.credentials}</p>
              <p className="mt-2 text-sm text-slate-500">{DOCTOR_SPOTLIGHT.org}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-600">
                {CURRENT_ROLES.map((r) => (
                  <li key={r.title}>
                    {r.title} — {r.org}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary mt-7">
                Show More <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-crimson-600">
        <div className="container-lg flex flex-col items-start justify-between gap-5 py-12 sm:flex-row sm:items-center sm:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">Need an appointment?</p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Call {OFFICE.name}</h2>
            <p className="mt-2 text-sm text-white/85">{OFFICE.address.join(", ")}</p>
          </div>
          <a href={CLINIC_PHONE_HREF} className="btn bg-white text-crimson-700 shadow-lg hover:bg-paper-50">
            {OFFICE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
