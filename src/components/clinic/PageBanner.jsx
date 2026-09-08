import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal.jsx";
import { maheshBanner, maheshPortrait, maheshHeart, cardioRiskGlow } from "../../assets/images/index.js";

const VISUALS = {
  banner: { src: maheshBanner, alt: "Mahesh Anantha Narayanan", position: "object-[78%_center]" },
  doctor: { src: maheshPortrait, alt: "Mahesh Anantha Narayanan", position: "object-[center_18%]" },
  heart: { src: maheshHeart, alt: "Mahesh Anantha Narayanan holding an anatomical heart model", position: "object-[center_30%]" },
};

export default function PageBanner({ eyebrow, title, lede, visual = "banner" }) {
  const media = VISUALS[visual] ?? VISUALS.banner;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#fde8eb] to-paper-50 pb-6 pt-36 sm:pb-8 sm:pt-[6.75rem]">
      <div className="relative z-[1] mx-auto grid max-w-[1280px] items-center gap-8 px-5 py-3 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10 lg:px-10 lg:py-3">
        <img
          src={cardioRiskGlow}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[52%] top-1/2 z-0 hidden w-[30rem] h-[24rem] -translate-x-1/2 -translate-y-1/2 select-none object-cover opacity-[0.2] mix-blend-multiply lg:block xl:w-[38rem] xl:h-[29rem]"
          style={{
            maskImage: "radial-gradient(ellipse farthest-side at center, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse farthest-side at center, black 20%, transparent 100%)",
          }}
        />

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
