import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail, X } from "lucide-react";
import BrandIcon from "./BrandIcon.jsx";
import { getLenis } from "../utility/SmoothScroll.jsx";

const SUBJECT = "Enquiry for White River Health Cardiology";

function options(to) {
  const t = encodeURIComponent(to);
  const su = encodeURIComponent(SUBJECT);
  return [
    { key: "gmail", label: "Gmail", note: "Opens a new message in Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${t}&su=${su}`, brand: "gmail", tint: "text-[#EA4335]" },
    { key: "outlook", label: "Outlook", note: "Opens a new message in Outlook", href: `https://outlook.live.com/mail/0/deeplink/compose?to=${t}&subject=${su}`, brand: "outlook", tint: "text-[#0078D4]" },
    { key: "default", label: "Default mail app", note: "Apple Mail, Outlook desktop, etc.", href: `mailto:${to}?subject=${su}`, icon: Mail, tint: "text-crimson-600" },
  ];
}

// Email address that asks which mail service to use before composing.
export default function EmailLink({ email, className = "", children }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const lenis = getLenis();
    lenis?.stop();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
      setCopied(false);
    };
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.prompt("Copy this email address:", email);
    }
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} aria-haspopup="dialog">
        {children ?? email}
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[80] flex items-end justify-center bg-navy-950/50 p-4 backdrop-blur-sm sm:items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Choose how to send an email"
                className="w-full max-w-sm rounded-[1.5rem] bg-white p-5 text-left shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 16, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[15px] font-bold text-navy-900">Send an email</p>
                    <p className="mt-0.5 truncate text-[13px] text-slate-500">{email}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper-100 text-slate-600 hover:text-navy-900"
                  >
                    <X size={16} />
                  </button>
                </div>

                <ul className="mt-4 space-y-2">
                  {options(email).map((o) => {
                    const Icon = o.icon;
                    return (
                      <li key={o.key}>
                        <a
                          href={o.href}
                          {...(o.key === "default" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 rounded-xl border border-slate-900/[0.07] px-3.5 py-3 transition-colors hover:border-crimson-600/30 hover:bg-paper-50"
                        >
                          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-paper-100 ${o.tint}`}>
                            {o.brand ? <BrandIcon name={o.brand} size={18} /> : <Icon size={18} />}
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-navy-900">{o.label}</span>
                            <span className="block text-[12px] text-slate-500">{o.note}</span>
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <button
                  type="button"
                  onClick={copy}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-[13px] font-semibold text-crimson-700 hover:bg-crimson-50"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? "Copied" : "Copy email address"}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
