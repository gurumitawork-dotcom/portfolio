import { ChevronDown } from "lucide-react";

export default function Disclosure({ label, count, children }) {
  return (
    <details className="group min-w-0">
      <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-800 select-none">
        <span className="min-w-0">
          {label}
          {typeof count === "number" && <span className="text-slate-500 font-normal"> ({count})</span>}
        </span>
        <ChevronDown size={15} className="transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}
