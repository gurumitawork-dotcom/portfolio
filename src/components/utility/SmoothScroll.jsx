import { useEffect } from "react";
import Lenis from "lenis";

let lenis = null;

// Scroll helper shared by ScrollToTop, back-to-top buttons and in-page jumps.
// Uses Lenis when it's running, otherwise falls back to native scrolling.
export function smoothScrollTo(target, { immediate = false, offset = 0 } = {}) {
  if (lenis) {
    lenis.scrollTo(target, { immediate, offset });
    return;
  }
  const behavior = immediate ? "auto" : "smooth";
  if (typeof target === "number") {
    window.scrollTo({ top: target + offset, behavior });
  } else if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior });
  }
}

// Eased mouse-wheel scrolling. Touch scrolling stays native, and it's skipped
// entirely for visitors who prefer reduced motion.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 });

    let frame = 0;
    const raf = (time) => {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
