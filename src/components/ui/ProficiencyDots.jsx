export default function ProficiencyDots({ level, max = 5 }) {
  return (
    <span className="inline-flex items-center gap-1" aria-hidden="true">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full transition-colors ${
            i < level ? "bg-crimson-600" : "bg-slate-200"
          }`}
        />
      ))}
    </span>
  );
}
