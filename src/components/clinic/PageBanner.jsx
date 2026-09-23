import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal.jsx";
import {
  maheshBanner,
  maheshPortrait,
  maheshSitting,
  maheshDesk,
  maheshClinic,
  maheshMeet,
  cardioRiskGlow,
  serviceTeaching,
  teachingAnatomyHeart,
  maheshNav,
  publicationsCathLab,
  maheshHero,
  presentationsCardiacImaging,
  heartLightGlow,
} from "../../assets/images/index.js";

const VISUALS = {
  banner: { src: maheshBanner, alt: "Mahesh Anantha", position: "object-[78%_center]" },
  doctor: { src: maheshPortrait, alt: "Mahesh Anantha", position: "object-[center_18%]" },
  heart: { src: maheshSitting, alt: "Mahesh Anantha, White River Health Cardiology", position: "object-[center_30%]" },
  clinic: { src: maheshClinic, alt: "Mahesh Anantha in his clinic", position: "object-[center_25%]" },
  desk: { src: maheshDesk, alt: "Mahesh Anantha at his desk with academic credentials", position: "object-[center_20%]" },
  meet: { src: maheshMeet, alt: "Mahesh Anantha", position: "object-[center_20%]" },
  study: { src: maheshNav, alt: "Mahesh Anantha", position: "object-[center_15%]" },
  speaker: { src: maheshHero, alt: "Mahesh Anantha explaining with an anatomical heart model", position: "object-[20%_center]" },
};

const BACKDROPS = {
  heart: { src: cardioRiskGlow, opacity: 0.18 },
  teaching: { src: serviceTeaching, opacity: 0.18 },
  anatomy: { src: teachingAnatomyHeart, opacity: 0.18 },
  // Photo backdrop: a touch stronger than the soft glow images so it reads through the blend
  research: { src: publicationsCathLab, opacity: 0.28 },
  imaging: { src: presentationsCardiacImaging, opacity: 0.28 },
  glow: { src: heartLightGlow, opacity: 0.3 },
};

export default function PageBanner({ eyebrow, title, lede, visual = "banner", backdrop = "heart" }) {
  const media = VISUALS[visual] ?? VISUALS.banner;
  const backdropImg = BACKDROPS[backdrop] ?? BACKDROPS.heart;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#fde8eb] to-paper-50 pb-6 pt-36 sm:pb-8 sm:pt-[6.75rem]">
      {/* Heart glow spans the banner's full height and fades to transparent on every side, so it never gets clipped into a hard edge */}
      <img
        src={backdropImg.src}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none object-cover mix-blend-multiply lg:w-[34rem] lg:-translate-x-[45%] xl:w-[42rem]"
        style={{
          opacity: backdropImg.opacity,
          maskImage: "radial-gradient(ellipse closest-side at center, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse closest-side at center, black 30%, transparent 100%)",
        }}
      />
      <div className="relative z-[1] mx-auto grid max-w-[1280px] items-center gap-8 px-5 py-3 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10 lg:px-10 lg:py-3">

        <Reveal immediate className="relative z-[2] min-w-0">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 break-words text-[1.85rem] font-bold leading-[1.05] tracking-tight text-navy-900 sm:text-5xl">
            {title}
          </h1>
          {lede && <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">{lede}</p>}
          <nav className="mt-6 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link to="/" className="font-medium text-crimson-700 hover:text-crimson-800">
              Home
            </Link>
            <span className="text-crimson-700/40">›</span>
            <span className="text-slate-600">{eyebrow || title}</span>
          </nav>
        </Reveal>

        <Reveal
          immediate
          delay={0.06}
          className="relative mx-auto h-[16rem] w-full max-w-[16.5rem] sm:h-[18rem] sm:max-w-[18rem] lg:mx-0 lg:ml-auto lg:h-[16.5rem] lg:max-w-[15.5rem]"
        >
          <div className="pointer-events-none absolute -bottom-4 -right-4 z-0 h-full w-full rounded-[2rem] bg-gradient-to-br from-crimson-600 to-[#7a1425] lg:-bottom-5 lg:-right-5" />
          <div className="relative z-[1] h-full w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-25px_rgba(15,23,42,0.35)]">
            <img src={media.src} alt={media.alt} className={`h-full w-full object-cover ${media.position}`} />
          </div>
          <div className="absolute -bottom-4 -left-4 z-[2] rounded-xl bg-white px-3.5 py-2.5 shadow-[0_16px_32px_-14px_rgba(15,23,42,0.35)] sm:-left-5">
            <p className="text-[13px] font-bold leading-tight text-navy-900">White River Health</p>
            <p className="text-[10.5px] font-medium text-crimson-700">Cardiology</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
