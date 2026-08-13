const AUTHOR_RE = /Anantha[\s-]?Narayanan(?:\s?MD)?\s?M?/gi;

export function renderCitation(text, query) {
  // Split on author-name matches first, then on query matches, preserving order.
  const parts = [];
  let lastIndex = 0;
  const authorMatches = [...text.matchAll(AUTHOR_RE)];

  authorMatches.forEach((m) => {
    if (m.index > lastIndex) parts.push({ text: text.slice(lastIndex, m.index), author: false });
    parts.push({ text: m[0], author: true });
    lastIndex = m.index + m[0].length;
  });
  if (lastIndex < text.length) parts.push({ text: text.slice(lastIndex), author: false });

  if (!query) return parts;

  const expanded = [];
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const queryRe = new RegExp(`(${escaped})`, "ig");

  parts.forEach((part) => {
    const segments = part.text.split(queryRe);
    segments.forEach((seg) => {
      if (!seg) return;
      expanded.push({ text: seg, author: part.author, match: seg.toLowerCase() === query.toLowerCase() });
    });
  });

  return expanded;
}
