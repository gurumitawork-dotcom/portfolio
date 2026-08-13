const TONES = {
  teal: "bg-teal-400/25",
  gold: "bg-gold-400/25",
};

/** A soft blurred color blob tucked in a card corner — a quiet echo of the
 *  page's aurora background so cards don't read as flat white boxes.
 *  Parent must be `relative overflow-hidden`. Position/size is passed via
 *  `className` (defaults to the top-right corner) so callers can place it. */
export default function CardGlow({ tone = "teal", className = "-top-10 -right-10 h-32 w-32" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${TONES[tone]} ${className}`}
    />
  );
}
