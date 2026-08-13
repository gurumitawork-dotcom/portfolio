const BEAT =
  "M0,32 L58,32 L72,32 L82,10 L92,54 L100,20 L108,32 L170,32 L228,32 L242,32 L252,10 L262,54 L270,20 L278,32 L340,32 L398,32 L412,32 L422,10 L432,54 L440,20 L448,32 L510,32 L568,32 L600,32";

function Strip() {
  return (
    <svg viewBox="0 0 600 60" preserveAspectRatio="none" className="h-full w-[600px] shrink-0" fill="none">
      <path d={BEAT} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A slow, continuously-scrolling EKG strip — a quiet nod to the cardiology practice. */
export default function EkgLine({ className = "", speed = 18 }) {
  return (
    <div className={`ekg-line overflow-hidden ${className}`}>
      <div className="flex h-full w-max animate-ekg-scroll" style={{ animationDuration: `${speed}s` }}>
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
