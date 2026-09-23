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
  if (immediate) {
    // Jump without animation and cancel any smooth scroll still in flight (it would
    // otherwise carry on and drag the new page back down). html has
    // scroll-behavior: smooth, so switch it off for the jump.
    const root = document.documentElement;
    const top = typeof target === "number" ? target + offset : target ? target.getBoundingClientRect().top + window.scrollY + offset : 0;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, top);
    requestAnimationFrame(() => {
      window.scrollTo(0, top);
      root.style.scrollBehavior = prev;
    });
    return;
  }
  const behavior = "smooth";
  if (typeof target === "number") {
    window.scrollTo({ top: target + offset, behavior });
  } else if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior });
  }
}

// Eased mouse-wheel scrolling. Touch is left to the phone's own momentum scrolling —
// simulating it (syncTouch) felt heavy and laggy under the finger. Programmatic
// scrolls (section links, back to top) still glide on every device.
// Skipped entirely for visitors who prefer reduced motion.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    // Phones/tablets scroll natively; Lenis would only add a scroll handler and a per-frame loop
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return undefined;

    lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
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
