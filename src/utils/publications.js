export const TOPICS = [
  "Coronary",
  "Peripheral & venous",
  "Structural",
  "Imaging",
  "Other",
];

export function publicationYear(citation) {
  const dotted = citation.match(/\.\s*(20\d{2})\b/);
  if (dotted) return dotted[1];
  const all = citation.match(/\b(20\d{2})\b/g);
  return all ? all[0] : "Other years";
}

export function publicationTopic(citation) {
  const t = citation.toLowerCase();
  if (
    /peripheral|limb ischemia|femoro|popliteal|carotid|vertebral|brachiocephalic|venous|deep venous|dvt|endovascular|pioneer catheter|critical limb|acute limb|amputation/.test(
      t
    )
  ) {
    return "Peripheral & venous";
  }
  if (
    /tavr|transcatheter aortic|aortic valve|aortic stenosis|mitral|endocarditis|foramen ovale|pfo|left atrial appendage|watchman|aortic aneurysm|aortic dissection|debranching/.test(
      t
    )
  ) {
    return "Structural";
  }
  if (/intravascular ultrasound|optical coherence|ivus|oct/.test(t) && /imaging/.test(t)) {
    return "Imaging";
  }
  if (
    /coronary|pci|stemi|acs|nste|cto|troponin|percutaneous coronary|chronic total occlusion|culprit|revascularization/.test(
      t
    )
  ) {
    return "Coronary";
  }
  return "Other";
}

export function groupByYear(items) {
  const map = new Map();
  items.forEach((item) => {
    const year = publicationYear(item);
    if (!map.has(year)) map.set(year, []);
    map.get(year).push(item);
  });
  const years = [...map.keys()].sort((a, b) => {
    if (a === "Other years") return 1;
    if (b === "Other years") return -1;
    return Number(b) - Number(a);
  });
  return years.map((year) => ({ year, items: map.get(year) }));
}
