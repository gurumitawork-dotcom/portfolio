/**
 * Maps existing CV modules into clinic-template labels.
 * No invented procedures, prices, or teammates.
 *
 * Portraits: src/assets/images/doctor/*.webp (nav, portrait, clinic, heart, meet, hero, banner).
 */
import { FOCUS_AREAS, CURRENT_ROLES, OFFICE, STATS } from "./profile.js";
import {
  serviceCoronary,
  serviceAmputation,
  servicePeripheral,
  serviceTeaching,
} from "../assets/images/index.js";

export const CLINIC_PHONE_HREF = `tel:+1${OFFICE.phone.replace(/\D/g, "")}`;

export const CLINIC_SERVICES = [
  {
    id: "coronary",
    title: "Complex coronary intervention",
    category: "Interventional Cardiology",
    badge: "High-Volume PCI",
    image: serviceCoronary,
    imageAlt: "Digital fluoroscopy and 3D imaging in cardiac catheterization laboratory",
    summary:
      "CTO recanalization, left main and multivessel PCI, lithotripsy, atherectomy, and imaging-guided intervention.",
    items: FOCUS_AREAS[0].items,
    tags: ["CTO Recanalization", "Lithotripsy", "Left Main PCI", "Atherectomy", "IVUS / OCT"],
    note: "High-volume complex coronary revascularization performed at White River Health.",
  },
  {
    id: "amputation",
    title: "Amputation prevention",
    category: "Limb Salvage Program",
    badge: "Program Directorship",
    image: serviceAmputation,
    imageAlt: "Advanced vascular perfusion diagnostics and limb salvage interventional suite",
    summary:
      "Founded and directs White River Health's Complex Coronary and Amputation Prevention Program.",
    items: [
      "Multidisciplinary limb preservation protocol",
      "Advanced pedal artery revascularization",
      "Chronic critical limb ischemia (CLTI) management",
      "Regional healthcare provider educational outreach",
    ],
    tags: ["Limb Salvage", "Pedal Revascularization", "Critical Limb Ischemia", "Wound Care"],
    note: FOCUS_AREAS[1].note,
  },
  {
    id: "peripheral",
    title: "Peripheral & venous intervention",
    category: "Endovascular Care",
    badge: "Yale Fellowship Trained",
    image: servicePeripheral,
    imageAlt: "Peripheral endovascular suite with fluoroscopy and arterial imaging",
    summary:
      "Lower-extremity arterial disease, carotid and subclavian intervention, and venous thromboembolism care.",
    items: FOCUS_AREAS[2].items,
    tags: ["Peripheral Arterial Disease", "Carotid Stenting", "Subclavian Care", "Venous Thromboembolism"],
    note: FOCUS_AREAS[2].note,
  },
  {
    id: "teaching",
    title: "Teaching & faculty",
    category: "Academic Faculty",
    badge: "UAMS & Residency",
    image: serviceTeaching,
    imageAlt: "Clinical case review and cardiology residency faculty teaching",
    summary:
      "Residency faculty at White River Health, Assistant Professor at UAMS, and national case-based teaching at CRT, CTO, and CVI.",
    items: CURRENT_ROLES.filter((r) => /professor|faculty/i.test(r.title)).map(
      (r) => `${r.title}, ${r.org}`
    ),
    tags: ["UAMS Assistant Professor", "Residency Faculty", "CRT / CTO / CVI", "CIMS Research Group"],
    note: "Founder of the CIMS research group at Creighton.",
  },
];

export const CLINIC_COUNTERS = [
  { value: STATS[0].value, suffix: STATS[0].suffix, label: "Cases / year since 2021" },
  { value: STATS[1].value, suffix: STATS[1].suffix, label: "Peer-reviewed papers" },
  { value: STATS[2].value, suffix: STATS[2].suffix, label: "Oral & poster presentations" },
  { value: STATS[3].value, suffix: STATS[3].suffix, label: "h-index (Google Scholar)" },
];

export const HERO_COPY = {
  eyebrow: "White River Health Cardiology",
  title: "Complex coronary and amputation prevention",
  lede:
    "High-volume interventional and endovascular care in Batesville — coronary, peripheral arterial, and venous disease — with teaching at UAMS.",
};

export const DOCTOR_SPOTLIGHT = {
  name: "Mahesh Anantha",
  credentials: "MD, FACC, FSCAI, FSVM",
  org: "White River Health · University of Arkansas for Medical Sciences",
  bio: "Physician Director of Cardiovascular Services and Director of the Complex Coronary & Amputation Prevention Program. Assistant Professor at UAMS and faculty in the White River Health Internal Medicine Residency.",
};

export const PRIMARY_NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
];

export const PAGES_NAV = [
  { to: "/training", label: "Training" },
  { to: "/teaching", label: "Teaching" },
  { to: "/publications", label: "Publications" },
  { to: "/presentations", label: "Presentations" },
  { to: "/recognition", label: "Recognition" },
];

export const HERO_CREDENTIALS = [
  `${CURRENT_ROLES[0].title} — ${CURRENT_ROLES[0].org}`,
  CURRENT_ROLES[1].title,
  `${CURRENT_ROLES[2].title} — ${CURRENT_ROLES[2].org}`,
  `${CURRENT_ROLES[3].title} — Internal Medicine Residency Program`,
  "Board certified: Internal Medicine, Cardiovascular Medicine, Interventional Cardiology, Echocardiography",
];

export const FEATURED_HIGHLIGHT = {
  eyebrow: "Practice highlight",
  title: FOCUS_AREAS[1].title,
  body: `${FOCUS_AREAS[1].text} ${FOCUS_AREAS[1].note}`,
  cta: { to: "/services", label: "See clinical services" },
};

export const COMMITMENT_PILLARS = CLINIC_SERVICES.map((s) => ({
  id: s.id,
  title: s.title,
  summary: s.summary,
}));

export const PAGE_META = {
  "/": {
    title: "Mahesh Anantha, MD, FACC, FSCAI, FSVM | Interventional Cardiologist, Batesville AR",
    description:
      "Physician Director of Cardiovascular Services at White River Health. Complex coronary intervention and amputation prevention in Batesville, Arkansas. Assistant Professor, UAMS.",
  },
  "/about": {
    title: "About Dr. Mahesh Anantha | White River Health Cardiology",
    description:
      "Meet Mahesh Anantha, MD, FACC, FSCAI, FSVM — interventional and endovascular cardiologist at White River Health and Assistant Professor at UAMS.",
  },
  "/services": {
    title: "Cardiac Services | Complex Coronary & Amputation Prevention | Batesville AR",
    description:
      "CV-true services: complex coronary intervention, amputation prevention, peripheral and venous care, and teaching faculty at White River Health.",
  },
  "/training": {
    title: "Training & Practice | Mahesh Anantha, MD",
    description:
      "Fellowship training at Yale, Arizona, Minnesota, and current 1,000-case-a-year interventional practice at White River Health, Batesville, AR.",
  },
  "/teaching": {
    title: "Teaching & Research | CIMS, CRT, CVI | Mahesh Anantha, MD",
    description:
      "Founder of CIMS at Creighton, residency faculty at White River Health, and national case-based teaching at CRT, CTO, and CVI.",
  },
  "/publications": {
    title: "Publications | 54 Peer-Reviewed Papers, h-index 17 | Mahesh Anantha, MD",
    description:
      "Search 54 peer-reviewed publications and book chapters by Mahesh Anantha, MD. Google Scholar snapshot: 1,010 citations, h-index 17.",
  },
  "/presentations": {
    title: "Presentations | CRT, CVI, ACC, SCAI | Mahesh Anantha, MD",
    description:
      "58 oral and poster presentations at CRT, CVI, ACC, SCAI, TCT, AHA, and other national meetings.",
  },
  "/recognition": {
    title: "Awards & Recognition | FACC, FSCAI, FSVM | Mahesh Anantha, MD",
    description:
      "Awards, society fellowships, editorial boards, and medals for Mahesh Anantha, interventional cardiologist in Batesville, AR.",
  },
  "/contact": {
    title: "Contact | White River Health Cardiology | Batesville, AR 72501",
    description:
      "Request an appointment or call White River Health Cardiology at 870-262-1600. 16 Hospital Circle, Batesville, Arkansas.",
  },
};
