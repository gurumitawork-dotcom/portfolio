import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PRIMARY_NAV, PAGES_NAV, CLINIC_PHONE_HREF } from "../../data/clinic.js";
import { OFFICE } from "../../data/profile.js";
import { maheshNav } from "../../assets/images/index.js";

function isLinkActive(pathname, to, end) {
  return end ? pathname === to : pathname === to || pathname.startsWith(to + "/");
}

function pagesOpen(pathname) {
  return PAGES_NAV.some((l) => isLinkActive(pathname, l.to, false));
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pages, setPages] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setPages(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (active) =>
    `relative shrink-0 whitespace-nowrap px-2.5 py-2 text-[13px] font-semibold tracking-[0.01em] transition-colors ${
      active ? "text-crimson-700" : "text-slate-600 hover:text-navy-900"
    }`;

  return (
    <div
      className={`border-b border-slate-200/80 bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-[0_14px_32px_-12px_rgba(15,23,42,0.32)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)}>
          <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-glass-sm sm:h-11 sm:w-11">
            <img src={maheshNav} alt="Mahesh Anantha Narayanan" className="h-full w-full object-cover object-[center_12%]" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[13px] font-semibold text-navy-900 sm:text-base">Mahesh Anantha Narayanan</span>
            <span className="text-[10px] font-semibold tracking-[0.12em] text-crimson-700 sm:text-[11px]">
              MD, FACC, FSCAI, FSVM
            </span>
          </span>
        </Link>

        <nav className="hidden items-center xl:flex">
          {PRIMARY_NAV.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => linkClass(isActive)}>
              {l.label}
            </NavLink>
          ))}
          <div className="relative" onMouseEnter={() => setPages(true)} onMouseLeave={() => setPages(false)}>
            <button type="button" className={`${linkClass(pagesOpen(pathname))} inline-flex items-center gap-1`} aria-expanded={pages}>
              Pages
              <ChevronDown size={14} className={`transition-transform ${pages ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {pages && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-0 top-full z-20 pt-2"
                >
                  <div className="min-w-[14rem] rounded-2xl border border-slate-100 bg-white py-2 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)]">
                    {PAGES_NAV.map((l) => (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm font-medium ${
                            isActive ? "bg-crimson-50 text-crimson-800" : "text-slate-600 hover:bg-paper-100 hover:text-navy-900"
                          }`
                        }
                      >
                        {l.label}
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <NavLink to="/contact" className={({ isActive }) => linkClass(isActive)}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a href={CLINIC_PHONE_HREF} className="text-sm font-semibold text-navy-900 hover:text-crimson-700">
            {OFFICE.phone}
          </a>
          <a href={CLINIC_PHONE_HREF} className="btn-primary !px-5 !py-2.5 !text-[13px]">
            <Phone size={14} /> Book Appointment
          </a>
        </div>

        <button
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-navy-900 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="mx-3 mt-2 max-h-[min(32rem,calc(100dvh-6.5rem))] overflow-y-auto rounded-2xl border border-slate-100 bg-white shadow-lg sm:mx-4 xl:hidden"
          >
            <nav className="flex flex-col p-3">
              {[...PRIMARY_NAV, { to: "/contact", label: "Contact" }].map((l) => {
                const active = isLinkActive(pathname, l.to, l.to === "/");
                return (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      active ? "bg-crimson-50 text-crimson-800" : "text-slate-700"
                    }`}
                  >
                    {l.label}
                  </NavLink>
                );
              })}
              <p className="px-4 pb-1 pt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-crimson-700">Pages</p>
              {PAGES_NAV.map((l) => {
                const active = isLinkActive(pathname, l.to, false);
                return (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      active ? "bg-crimson-50 text-crimson-800" : "text-slate-700"
                    }`}
                  >
                    {l.label}
                  </NavLink>
                );
              })}
              <a href={CLINIC_PHONE_HREF} className="btn-primary mt-2 justify-center">
                <Phone size={16} /> Book Appointment · {OFFICE.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
