import { Link } from "react-router-dom";
import Reveal from "../ui/Reveal.jsx";
import { maheshBanner, maheshPortrait } from "../../assets/images/index.js";

const PINK = "#fde8eb";

const VISUALS = {
  banner: { src: maheshBanner, alt: "Mahesh Anantha Narayanan", position: "object-[78%_center]" },
  doctor: { src: maheshPortrait, alt: "Mahesh Anantha Narayanan", position: "object-[center_18%]" },
};

const blend = `linear-gradient(90deg, ${PINK} 0%, rgba(253,232,235,0.92) 22%, rgba(253,232,235,0.45) 48%, rgba(253,232,235,0.08) 72%, transparent 88%)`;

export default function PageBanner({ eyebrow, title, lede, visual = "banner" }) {
  const media = VISUALS[visual] ?? VISUALS.banner;

  return (
    <div className="relative overflow-hidden pt-36 sm:pt-40" style={{ backgroundColor: PINK }}>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] overflow-hidden rounded-l-[2.25rem] lg:block">
        <img src={media.src} alt="" className={`absolute inset-0 h-full w-full object-cover ${media.position}`} />
        <div className="absolute inset-0" style={{ background: blend }} />
        <div className="absolute inset-x-0 top-0 h-16" style={{ background: `linear-gradient(180deg, ${PINK} 0%, transparent 100%)` }} />
        <div className="absolute inset-x-0 bottom-0 h-16" style={{ background: `linear-gradient(0deg, ${PINK} 0%, transparent 100%)` }} />
      </div>

      <div className="container-lg relative z-10 py-10 sm:py-12 lg:py-14">
        <div className="max-w-xl lg:max-w-[50%]">
          <Reveal immediate>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="mt-3 break-words text-[1.75rem] font-semibold leading-tight text-navy-900 sm:text-5xl">{title}</h1>
            {lede && <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">{lede}</p>}
            <nav className="mt-6 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
              <Link to="/" className="font-medium text-crimson-700 hover:text-crimson-800">
                Home
              </Link>
              <span className="text-crimson-700/40">›</span>
              <span className="text-slate-600">{eyebrow || title}</span>
            </nav>
          </Reveal>
        </div>

        <div className="relative mt-8 h-52 overflow-hidden rounded-[2rem] lg:hidden">
          <img src={media.src} alt={media.alt} className={`h-full w-full object-cover ${media.position}`} />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(180deg, ${PINK} 0%, rgba(253,232,235,0.4) 30%, transparent 60%)` }}
          />
        </div>
      </div>
    </div>
  );
}
