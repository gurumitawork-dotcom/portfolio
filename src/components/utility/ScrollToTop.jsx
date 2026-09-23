import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollTo } from "./SmoothScroll.jsx";

// Height of the fixed top bar + navbar, so anchored sections aren't hidden under it.
function headerOffset() {
  const header = document.getElementById("site-header");
  return -((header?.offsetHeight ?? 96) + 16);
}

// Layout position of an element. Uses offsetTop rather than getBoundingClientRect so
// the slide-in transform on not-yet-revealed sections doesn't skew the target.
function pageTop(el) {
  let top = 0;
  for (let node = el; node; node = node.offsetParent) top += node.offsetTop;
  return top;
}

// Scroll handling for every navigation:
// - "#id" links scroll to that section, including repeat clicks on the same page
//   (location.key changes on every click, even when the URL doesn't)
// - a new page without a hash starts at the top
// - clicking a link to the page you're already on smoothly returns to the top
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const samePage = prevPath.current === pathname;
    prevPath.current = pathname;

    if (!hash) {
      smoothScrollTo(0, { immediate: !samePage });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer = 0;
    const targetFor = (el) => Math.max(0, pageTop(el) + headerOffset());
    const go = () => {
      const el = document.getElementById(id);
      if (el) {
        const first = targetFor(el);
        smoothScrollTo(first);
        // Images above the section can finish loading after we measured and push it
        // down; once settled, nudge to the corrected spot — unless the visitor has
        // already scrolled somewhere else themselves.
        timer = window.setTimeout(() => {
          const now = targetFor(el);
          if (Math.abs(now - first) > 8 && Math.abs(window.scrollY - first) < 60) smoothScrollTo(now);
        }, 1200);
      } else if (tries++ < 20) {
        timer = window.setTimeout(go, 50); // new page may still be rendering
      }
    };
    if (!samePage) smoothScrollTo(0, { immediate: true });
    // Let the new page lay out (and Lenis pick up its height) before measuring
    timer = window.setTimeout(go, samePage ? 0 : 120);
    return () => window.clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}
