import { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { renderCitation } from "../utils/text.js";
import Reveal from "./Reveal.jsx";

export default function SearchableList({ items, placeholder, collapsedCount = 8 }) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => item.toLowerCase().includes(q));
  }, [items, query]);

  const visible = query || expanded ? filtered : filtered.slice(0, collapsedCount);
  const canExpand = !query && items.length > collapsedCount;

  return (
    <div>
      <Reveal className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full glass rounded-full pl-11 pr-5 py-3 text-base sm:text-sm text-navy-900 placeholder:text-slate-500 outline-none focus:border-teal-500/60 focus:bg-white transition-colors"
          />
        </div>
        <span className="text-xs text-slate-500 whitespace-nowrap sm:pl-2">
          {query ? `${filtered.length} match${filtered.length === 1 ? "" : "es"}` : `${items.length} total`}
        </span>
      </Reveal>

      <Reveal delay={0.05} className="glass-card divide-y divide-slate-900/[0.06] overflow-hidden">
        {visible.length === 0 && (
          <p className="px-6 py-10 text-center text-sm text-slate-500">No results match your search.</p>
        )}
        {visible.map((item, idx) => {
          const originalIndex = items.indexOf(item);
          const parts = renderCitation(item, query.trim());
          return (
            <div key={originalIndex} className="flex gap-3 sm:gap-4 px-4 sm:px-7 py-4 sm:py-5">
              <span className="shrink-0 w-6 sm:w-7 font-serif text-teal-600/80 text-sm pt-0.5">{originalIndex + 1}</span>
              <p className="min-w-0 text-[13.5px] sm:text-sm leading-relaxed text-slate-700 break-words">
                {parts.map((part, i) =>
                  part.author ? (
                    <strong key={i} className="text-navy-900 font-semibold">
                      {part.text}
                    </strong>
                  ) : part.match ? (
                    <mark key={i} className="bg-gold-300/60 text-navy-900 rounded px-0.5">
                      {part.text}
                    </mark>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                )}
              </p>
            </div>
          );
        })}
      </Reveal>

      {canExpand && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="btn-glass mx-auto mt-6 flex"
        >
          {expanded ? "Show fewer" : `Show all ${items.length}`}
          <ChevronDown size={16} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
}
