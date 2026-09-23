import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal.jsx";
import { maheshPortrait, heartMini, heartHandsGlow } from "../../assets/images/index.js";
import { DOCTOR_SPOTLIGHT } from "../../data/clinic.js";
import { STATS } from "../../data/profile.js";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-inner">
        <img
          src={heartHandsGlow}
          alt=""
          aria-hidden="true"
          className="about-hero-fill"
        />

        <Reveal immediate className="about-hero-copy">
          <p className="about-hero-kicker">
            About the doctor
            <span />
          </p>
          <h1>
            Mahesh
            <span>Anantha</span>
          </h1>
          <p className="about-hero-creds">{DOCTOR_SPOTLIGHT.credentials}</p>
          <p className="about-hero-org">{DOCTOR_SPOTLIGHT.org}</p>
          <nav className="about-hero-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>About the doctor</span>
          </nav>
        </Reveal>

        <Reveal immediate delay={0.06} className="about-hero-portrait">
          <div className="about-hero-backdrop" aria-hidden="true" />
          <div className="about-hero-frame">
            <img src={maheshPortrait} alt="Mahesh Anantha" />
          </div>

          <div className="about-hero-stat-chip">
            <p>
              {STATS[0].value}
              {STATS[0].suffix}
            </p>
            <span>Cases / year since 2021</span>
          </div>

          <div className="about-hero-quote-chip">
            <img src={heartMini} alt="" aria-hidden="true" />
            <span className="about-hero-marks" aria-hidden="true">
              “
            </span>
            <p>Compassionate care today for stronger hearts tomorrow.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
