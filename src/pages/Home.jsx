import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Cross,
  FileBadge,
  GraduationCap,
  Heart,
  HeartHandshake,
  MapPin,
  Shield,
  Users,
} from "lucide-react";
import Reveal from "../components/ui/Reveal.jsx";
import StatBand from "../components/clinic/StatBand.jsx";
import PracticeHighlight from "../components/clinic/PracticeHighlight.jsx";
import ServicesSection from "../components/clinic/ServicesSection.jsx";
import AppointmentBanner from "../components/clinic/AppointmentBanner.jsx";
import {
  CLINIC_PHONE_HREF,
  DOCTOR_SPOTLIGHT,
  HERO_COPY,
  HERO_CREDENTIALS,
} from "../data/clinic.js";
import { maheshDesk } from "../assets/images/index.js";

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
                  src={maheshDesk}
                  alt="Mahesh Anantha holding an anatomical heart model"
                />
              </div>
            </Reveal>
          </div>

          {/* Integrated values band aligned across the card/screen, below the doctor's hands & heart */}
          <div className="home-hero-values-band">
            <div className="home-hero-values-grid">
              {HERO_VALUES.map(({ icon: Icon, title, body }) => (
                <div className="home-hero-value-item" key={title}>
                  <span className="home-hero-value-icon">
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                  <div className="home-hero-value-text">
                    <h2>{title}</h2>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatBand />

      <PracticeHighlight />

      <ServicesSection />

      <AppointmentBanner />
    </>
  );
}
