import { GraduationCap, HeartPulse, MapPin, Phone, ShieldCheck, Stethoscope, Users } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import { heartEcgGlow, heartHandsCare, heartLightGlow, maheshMeet } from "../../assets/images/index.js";
import { CLINIC_MAP_HREF, CLINIC_PHONE_HREF, DOCTOR_SPOTLIGHT } from "../../data/clinic.js";
import { CURRENT_ROLES, OFFICE, PRACTICE_FACTS } from "../../data/profile.js";
import { BOARD_CERTIFICATION } from "../../data/training.js";

const ROLE_ICONS = [Stethoscope, HeartPulse, GraduationCap, Users];

export default function AboutPractice() {
  return (
    <section className="about-practice">
      <div className="container-lg">
        <Reveal className="about-practice-panel">
          <div className="about-practice-side">
            <figure className="about-practice-photo">
              <img src={maheshMeet} alt="Mahesh Anantha in consultation" />
            </figure>

            <div className="about-practice-badges">
              <img src={heartLightGlow} alt="" aria-hidden="true" className="about-practice-badges-glow" />
              <p className="about-practice-badges-label">Board Certified</p>
              <ul>
                {BOARD_CERTIFICATION.map((cert) => (
                  <li key={cert.title}>
                    <ShieldCheck size={14} aria-hidden="true" />
                    <span>{cert.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-practice-copy">
            <img src={heartEcgGlow} alt="" aria-hidden="true" className="about-practice-glow" />

            <p className="eyebrow">{PRACTICE_FACTS.eyebrow}</p>
            <h2>White River Health</h2>
            <p className="about-practice-place">
              <MapPin size={15} aria-hidden="true" />
              Batesville, Arkansas · Interventional &amp; endovascular cardiology
            </p>
            <p className="about-practice-bio">{DOCTOR_SPOTLIGHT.bio}</p>

            <ul className="about-practice-roles">
              {CURRENT_ROLES.map((role, index) => {
                const Icon = ROLE_ICONS[index] || Stethoscope;
                return (
                  <li key={role.title} className="about-practice-role-item">
                    <span className="about-practice-role-icon">
                      <Icon size={15} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="about-practice-role-title">{role.title}</span>
                      <span className="about-practice-role-org">{role.org}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="about-practice-foot">
              <div className="about-practice-highlight">
                <span className="about-practice-highlight-photo">
                  <img src={heartHandsCare} alt="" aria-hidden="true" />
                </span>
                <p className="about-practice-highlight-text">
                  <strong>1,000+</strong> documented coronary, peripheral arterial, and venous cases a
                  year since 2021 — care shaped around each patient.
                </p>
              </div>

              <div className="about-practice-contact">
                <p>
                  {OFFICE.name}
                  <a href={CLINIC_MAP_HREF} target="_blank" rel="noopener noreferrer" title="Open in Google Maps" className="hover:!text-crimson-700">
                    {OFFICE.address[0]}, {OFFICE.address[1]}
                  </a>
                </p>
                <a className="btn-primary" href={CLINIC_PHONE_HREF}>
                  <Phone size={16} />
                  {OFFICE.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
