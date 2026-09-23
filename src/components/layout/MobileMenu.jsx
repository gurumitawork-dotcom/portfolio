import { useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { PRIMARY_NAV, PAGES_NAV, CLINIC_PHONE_HREF } from "../../data/clinic.js";
import { OFFICE } from "../../data/profile.js";
import { maheshDesk } from "../../assets/images/index.js";
import { getLenis } from "../utility/SmoothScroll.jsx";

const EASE_IN_OUT = [0.65, 0, 0.35, 1];

// Radius that reaches the farthest viewport corner from (x, y).
function coverRadius(x, y) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  return Math.ceil(Math.hypot(Math.max(x, w - x), Math.max(y, h - y)));
}

function isActive(pathname, to, end) {
  return end ? pathname === to : pathname === to || pathname.startsWith(to + "/");
}

// Full-screen mobile menu with a circular (clip-path) reveal that grows from the
// tap point and shrinks back to it on close. Portalled to <body> because the
// navbar's backdrop-filter would otherwise trap a fixed overlay inside it.
export default function MobileMenu({ open, origin, pathname, onClose }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return undefined;
    const lenis = getLenis();
    lenis?.stop();
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const { x, y } = origin;
  const closed = `circle(0px at ${x}px ${y}px)`;
  const full = typeof window !== "undefined" ? `circle(${coverRadius(x, y)}px at ${x}px ${y}px)` : closed;

  const linkClass = (active) =>
    `flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors ${
      active ? "bg-crimson-50 text-crimson-800" : "text-navy-900 active:bg-paper-100"
    }`;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-gradient-to-br from-crimson-600 via-[#9e1627] to-[#5c0d1a] lg:hidden"
          data-lenis-prevent
          initial={{ clipPath: closed }}
          animate={{ clipPath: full }}
          exit={{ clipPath: closed }}
          transition={{ duration: reduce ? 0 : 0.7, ease: EASE_IN_OUT }}
        >
          {/* Header row mirrors the navbar so the close button sits where the menu button was */}
          <div className="flex items-center justify-between gap-3 px-4 pb-3 pt-[calc(env(safe-area-inset-top)+0.75rem)] sm:px-8">
            <Link to="/" onClick={onClose} className="flex min-w-0 items-center gap-2.5">
              <span className="block h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/70">
                <img src={maheshDesk} alt="" className="h-full w-full object-cover object-[center_22%]" />
              </span>
              <span className="flex min-w-0 flex-col leading-tight text-white">
                <span className="truncate text-[14px] font-semibold">Mahesh Anantha</span>
                <span className="text-[10px] font-semibold tracking-[0.12em] text-white/70">MD, FACC, FSCAI, FSVM</span>
              </span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu card: fades and lifts in once the reveal is under way */}
          <motion.nav
            className="mx-4 mb-8 mt-3 rounded-[1.75rem] bg-white p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] sm:mx-8"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0, transition: { delay: reduce ? 0 : 0.28, duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, y: 14, transition: { duration: reduce ? 0 : 0.2 } }}
          >
            {[...PRIMARY_NAV, { to: "/contact", label: "Contact" }].map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={onClose} className={linkClass(isActive(pathname, l.to, l.to === "/"))}>
                {l.label}
              </NavLink>
            ))}
            <p className="px-4 pb-1 pt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-crimson-700">Pages</p>
            {PAGES_NAV.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={onClose} className={linkClass(isActive(pathname, l.to, false))}>
                {l.label}
              </NavLink>
            ))}
            <a href={CLINIC_PHONE_HREF} className="btn-primary mt-3 w-full justify-center">
              <Phone size={16} /> Book Appointment · {OFFICE.phone}
            </a>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
