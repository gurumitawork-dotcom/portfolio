import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { smoothScrollTo } from "../utility/SmoothScroll.jsx";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Checked at most once per frame; the page height is cached (reading it on every
    // scroll event forced a layout recalculation mid-scroll).
    let pageHeight = document.documentElement.scrollHeight;
    let frame = 0;
    const check = () => {
      frame = 0;
      const y = window.scrollY;
      setVisible(y > 700 && window.innerHeight + y < pageHeight - 320);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    const measure = () => {
      pageHeight = document.documentElement.scrollHeight;
      onScroll();
    };
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      onClick={() => smoothScrollTo(0)}
      aria-label="Back to top"
      className={`fixed bottom-6 right-4 sm:right-6 z-40 grid h-12 w-12 place-items-center rounded-full glass-strong text-crimson-600 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
