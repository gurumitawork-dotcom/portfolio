export default function SectionDivider() {
  return (
    <div className="container-lg" aria-hidden="true">
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-slate-900/[0.12] to-transparent">
        <span className="pulse-dot absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
