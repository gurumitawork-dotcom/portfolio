import { useEffect } from "react";
import Lenis from "lenis";

let lenis = null;

// Lets overlays (e.g. the mobile menu) pause/resume smooth scrolling.
export function getLenis() {
  return lenis;
}

// Scroll helper shared by ScrollToTop, back-to-top buttons and in-page jumps.
// Uses Lenis when it's running, otherwise falls back to native scrolling.
export function smoothScrollTo(target, { immediate = false, offset = 0 } = {}) {
  if (lenis) {
    // Re-measure page height (it changes on navigation) and force the scroll even if
    // Lenis's cached position is stale, e.g. right after a native jump.
    lenis.resize();
    lenis.scrollTo(target, { immediate, offset, force: true });
    if (immediate && typeof target === "number") window.scrollTo(0, target + offset);
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

// Eased scrolling for mouse wheel and touch (syncTouch gives phones the same glide
// as desktop). Skipped entirely for visitors who prefer reduced motion.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: true,
      syncTouchLerp: 0.085,
      touchMultiplier: 1.1,
    });

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
