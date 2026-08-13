export default function IconBadge({ icon: Icon, size = 22, compact = false }) {
  const box = compact ? "h-10 w-10 rounded-xl shrink-0" : "h-12 w-12 rounded-2xl";
  return (
    <span className={`relative inline-grid place-items-center bg-gradient-to-br from-teal-500 to-teal-700 shadow-glow-teal ${box}`}>
      <span className={`absolute inset-0 bg-white/15 ${compact ? "rounded-xl" : "rounded-2xl"}`} />
      <Icon className="relative text-white" size={size} strokeWidth={2} />
    </span>
  );
}
