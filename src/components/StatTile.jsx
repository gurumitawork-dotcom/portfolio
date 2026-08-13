export default function StatTile({ value, label }) {
  return (
    <div className="glass-card px-6 py-5">
      <div className="font-serif text-2xl text-teal-600">{value}</div>
      <p className="mt-1.5 text-xs text-slate-600 leading-snug">{label}</p>
    </div>
  );
}
