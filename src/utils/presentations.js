export const MEETINGS = [
  "CRT",
  "CVI",
  "ACC",
  "SCAI",
  "TCT",
  "AHA",
  "HRS",
  "LINC",
  "SVM",
  "ATS",
  "SGIM",
  "CHEST",
  "C3",
  "SHM",
];

const NAMED = [
  { id: "CRT", re: /\bCRT\b/ },
  { id: "CVI", re: /\bCVI\b/ },
  { id: "SCAI", re: /\bSCAI\b/ },
  { id: "TCT", re: /\bTCT\b/ },
  { id: "LINC", re: /\bLINC\b/ },
  { id: "SVM", re: /\bSVM\b/ },
  { id: "HRS", re: /\bHRS\b|Heart Rhythm/ },
  { id: "AHA", re: /\bAHA\b|American Heart Association/ },
  { id: "ACC", re: /\bACC\b/ },
  { id: "ATS", re: /\bATS\b|American Thoracic Society|Am J Respir Crit Care Med/ },
  { id: "SGIM", re: /\bSGIM\b|Society of General Internal Medicine/ },
  { id: "CHEST", re: /\bCHEST\b/ },
  { id: "C3", re: /\bC3\b|Cardiovascular Catheter Therapeutics/ },
  { id: "SHM", re: /J Hosp Med|Society of Hospital Medicine/ },
];

const FALLBACK = [
  { id: "ACC", re: /J Am Coll Cardiol|JACC / },
  { id: "AHA", re: /Circulation\./ },
];

export function presentationMeetings(citation) {
  const named = NAMED.filter((r) => r.re.test(citation)).map((r) => r.id);
  if (named.length) return named;
  const fallback = FALLBACK.filter((r) => r.re.test(citation)).map((r) => r.id);
  return fallback;
}

export function presentationMeeting(citation) {
  return presentationMeetings(citation)[0] ?? "Other";
}

export function presentationYear(citation) {
  const all = citation.match(/\b(20\d{2})\b/g);
  return all ? all[all.length - 1] : "";
}

export function groupByMeeting(items) {
  const map = new Map();
  MEETINGS.forEach((m) => map.set(m, []));
  items.forEach((item) => {
    const meetings = presentationMeetings(item);
    const targets = meetings.length ? meetings : ["Other"];
    targets.forEach((meeting) => {
      if (!map.has(meeting)) map.set(meeting, []);
      map.get(meeting).push(item);
    });
  });
  return MEETINGS.map((meeting) => ({ meeting, items: map.get(meeting) || [] })).filter((g) => g.items.length > 0);
}
