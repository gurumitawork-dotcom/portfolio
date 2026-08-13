import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/training", label: "Training & Practice" },
  { to: "/teaching", label: "Teaching & Research" },
  { to: "/publications", label: "Publications" },
  { to: "/presentations", label: "Presentations" },
  { to: "/recognition", label: "Recognition" },
];

function isLinkActive(pathname, to, end) {
  return end ? pathname === to : pathname === to || pathname.startsWith(to + "/");
}

function NavItem({ to, label, pathname, onClick, layoutId }) {
  const end = to === "/";
  const active = isLinkActive(pathname, to, end);

  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className="relative shrink-0 whitespace-nowrap px-2.5 py-2 text-[13px] font-medium tracking-[0.01em]"
    >
      {active && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-x-1.5 bottom-1 h-[2px] rounded-full bg-teal-600"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      )}
      <span
        className={`relative z-10 transition-colors ${
          active ? "text-navy-950" : "text-slate-600 hover:text-navy-900"
        }`}
      >
        {label}
      </span>
    </NavLink>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const close = (e) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`relative border-b border-slate-200/80 bg-white/95 shadow-[0_10px_28px_-14px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "shadow-[0_14px_32px_-12px_rgba(15,23,42,0.32)]" : ""
        }`}
      >
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-teal-600/0 via-teal-600/80 to-teal-600/0" />
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex items-center justify-between gap-3 py-3">
            <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3 group" onClick={() => setOpen(false)}>
              <span className="relative block h-9 w-9 sm:h-10 sm:w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-glass-sm">
                <img
                  src="/images/mahesh.jpg"
                  alt="Mahesh Anantha Narayanan"
                  className="h-full w-full object-cover object-[center_18%]"
                />
              </span>
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="font-serif text-[13px] text-navy-900 sm:text-base">
                  Mahesh Anantha Narayanan
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-teal-700">
                  MD, FACC, FSCAI, FSVM
                </span>
              </span>
            </Link>

            <div className="hidden items-center xl:flex">
              <Link to="/contact" className="btn-primary shrink-0 !px-5 !py-2 !text-[13px]">
                Contact
              </Link>
            </div>

            <button
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full glass text-navy-900 xl:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="hidden items-center justify-between border-t border-slate-200/50 py-0.5 xl:flex">
            {LINKS.map((l) => (
              <NavItem key={l.to} {...l} pathname={pathname} layoutId="nav-underline-desktop" />
            ))}
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="xl:hidden mx-3 sm:mx-4 mt-2 glass-strong rounded-2xl overflow-hidden max-h-[min(32rem,calc(100dvh-5.5rem))] overflow-y-auto"
          >
            <nav className="flex flex-col p-3">
              {LINKS.map((l) => {
                const active = isLinkActive(pathname, l.to, l.to === "/");
                return (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setOpen(false)}
                    className="relative px-4 py-3 rounded-xl text-sm font-medium"
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill-mobile"
                        className="absolute inset-0 rounded-xl bg-teal-400"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className={`relative z-10 ${active ? "text-navy-950" : "text-slate-700"}`}>{l.label}</span>
                  </NavLink>
                );
              })}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center mt-2">
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
