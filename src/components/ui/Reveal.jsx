import { motion } from "framer-motion";

/**
 * Fade/slide-in wrapper.
 * - immediate=true: animates once on mount (use for above-the-fold content,
 *   so it never depends on IntersectionObserver timing).
 * - immediate=false (default): animates when scrolled into view.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className = "",
  as = "div",
  once = true,
  immediate = false,
  id,
}) {
  const MotionTag = motion[as] || motion.div;
  const motionProps = immediate
    ? {
        initial: { opacity: 0, y },
        animate: { opacity: 1, y: 0 },
      }
    : {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once, amount: 0, margin: "0px 0px 120px 0px" },
      };

  return (
    <MotionTag
      id={id}
      className={className}
      {...motionProps}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
