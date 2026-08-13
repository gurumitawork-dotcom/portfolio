import EkgLine from "./EkgLine.jsx";

// Subtle dark-on-light film grain for a matte, premium finish.
const GRAIN =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'>
    <filter id='n'>
      <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
      <feColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.035 0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#n)'/>
  </svg>`);

// A faint tiled "+" motif — a quiet clinical cue rather than a literal medical cross icon.
const CROSS_TILE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'>
    <path d='M18 11v14M11 18h14' stroke='#0f172a' stroke-width='1.4' stroke-linecap='round' opacity='0.5'/>
  </svg>`);

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-paper-50">
      {/* soft base wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_90%_at_50%_-15%,#ffffff_0%,#f4f8f9_45%,#eef3f5_78%)]" />

      {/* aurora field — light pastel teal + gold washes */}
      <div className="absolute -top-40 left-[6%] h-[680px] w-[680px] rounded-full bg-teal-400/[0.18] blur-[190px] animate-aurora" />
      <div className="absolute -top-28 right-[2%] h-[600px] w-[600px] rounded-full bg-teal-500/[0.14] blur-[190px] animate-aurora-slow" />
      <div className="absolute top-[36%] left-[34%] h-[560px] w-[560px] rounded-full bg-slate-300/[0.20] blur-[180px] animate-aurora-slower" />
      <div className="absolute bottom-[-210px] left-[8%] h-[560px] w-[560px] rounded-full bg-gold-400/[0.16] blur-[180px] animate-aurora-slower" />
      <div className="absolute bottom-[-140px] right-[6%] h-[480px] w-[480px] rounded-full bg-teal-400/[0.12] blur-[180px] animate-aurora" />
      <div className="absolute top-[68%] right-[28%] h-[420px] w-[420px] rounded-full bg-gold-300/[0.14] blur-[170px] animate-aurora-slow" />

      {/* heartbeat monitor strip — quiet cardiology cue, top of the viewport */}
      <EkgLine className="absolute top-[38%] inset-x-0 h-10 opacity-[0.10]" speed={22} />
      <EkgLine className="absolute bottom-[18%] inset-x-0 h-8 opacity-[0.08] scale-x-[-1]" speed={28} />

      {/* fine clinical cross texture, faded toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("${CROSS_TILE}")`,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 75% 60% at 50% 30%, black 0%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 50% 30%, black 0%, transparent 78%)",
        }}
      />

      {/* film grain for a matte, premium finish */}
      <div
        className="absolute inset-0 opacity-[0.5] mix-blend-multiply"
        style={{ backgroundImage: `url("${GRAIN}")` }}
      />

      {/* vignette to ground the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_40%,transparent_50%,#eef3f5_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper-50" />
    </div>
  );
}
