# Site brief: Mahesh Anantha Narayanan, MD — clinic + CV portfolio

Use this document as the **source of truth** for the live site. Give it to Claude (or any model) when you want a **design change prompt** or a redesign. Facts below are from the Master CV 2026 and the React app. Do not invent patients, prices, extra doctors, shop, blog, or procedures that are not listed.

---

## How to use this with Claude

Paste the last section, **“Ready-to-paste redesign prompt”**, plus any extra design notes (palette, references, screenshots). Keep the **non-negotiables** and **page inventory** in context so the new look does not change CV facts or routes.

---

## Non-negotiables

- **Person:** Mahesh Anantha Narayanan (display name **without hyphen**). Credentials: **MD, FACC, FSCAI, FSVM**.
- **Practice:** White River Health Cardiology, Batesville, AR. Interventional & endovascular cardiology. Focus: complex coronary intervention and amputation prevention.
- **Copy:** CV-true only. Data lives in `src/data/*.js`. Do not invent teammates, fake booking backends, Mailchimp, shop, pricing tables, or ThemeForest stock photos.
- **Doctor photos:** Only his portraits. Live site uses WebP in `src/assets/images/doctor/` (`mahesh-nav`, `mahesh-portrait`, `mahesh-clinic`, `mahesh-heart`, `mahesh-meet`, `mahesh-hero`, `mahesh-banner`). Do not use stock people as staff.
- **Book Appointment:** `tel:+18702621600` (office). No fake scheduler.
- **Contact form:** Opens `mailto:` with the filled body, or the user calls the office. No backend.
- **Keep all routes.** Scholarship pages stay under Pages dropdown; do not delete Training / Teaching / Publications / Presentations / Recognition.
- **Author name in citations:** Keep **Anantha Narayanan** as in the CV (hyphenated in some CV filenames, unhyphenated in UI name).

---

## What this site is

A **Vite + React + Tailwind** physician site that looks like a **cardiology clinic template** (pink/red, pill CTAs, rounded cards, dark footer) while remaining a **full academic CV** (papers, talks, awards).

- **Repo / npm name:** `anantha-narayanan-portfolio`
- **Hosting:** Netlify (`netlify.toml`: `npm run build`, publish `dist`). SPA fallback: `public/_redirects` → `/* /index.html 200`
- **Entry:** `index.html` → `src/main.jsx` → `BrowserRouter` → `App.jsx` → `Layout` + routes

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Build | Vite 5, `@vitejs/plugin-react` |
| UI | React 18, React Router 6 |
| Style | Tailwind 3, `src/index.css` (`@tailwind` layers) |
| Motion | Framer Motion 11 |
| Icons | lucide-react |
| Head | `react-helmet-async` via `PageMeta` + `PAGE_META` in `clinic.js` |
| Fonts | Google Fonts: **Plus Jakarta Sans** (UI / headings), Inter as fallback. Tailwind `font-serif` still lists Source Serif 4 (used on numeric/year accents); headings use `font-sans`. |
| Scripts | `npm run dev` / `build` / `preview` |

**No backend, no CMS, no auth, no analytics package, no tests folder.**

---

## Folder structure (end to end)

```
Portfolio/
├── index.html                 # Title, meta description, fonts, #root
├── package.json
├── vite.config.js
├── tailwind.config.js         # paper / navy / crimson tokens
├── postcss.config.js
├── netlify.toml
├── SITE_BRIEF.md              # this file
├── Mahesh_Anantha-Narayanan_Master_CV_2026.docx   # source CV (also in public/cv/)
├── bin/                       # retired originals (not served)
├── public/
│   ├── _redirects
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   └── cv/
│       └── Mahesh_Anantha-Narayanan_Master_CV_2026.docx
└── src/
    ├── main.jsx               # HelmetProvider + BrowserRouter
    ├── App.jsx                # all routes
    ├── index.css              # buttons, glass-card, section, container-lg
    ├── assets/images/
    │   ├── index.js           # barrel: seven doctor WebPs
    │   └── doctor/            # mahesh-nav, portrait, clinic, heart, meet, hero, banner (.webp)
    ├── pages/                 # Home, About, Services, Training, Teaching,
    │                          # Publications, Presentations, Recognition, Contact, NotFound
    ├── components/
    │   ├── layout/            # Layout, TopBar, Navbar, Footer, BackToTop
    │   ├── clinic/            # PageBanner, ContactBanner, CtaBand, StatBand, CommitmentGrid
    │   ├── forms/             # AppointmentForm
    │   ├── ui/                # Reveal, IconBadge, ProficiencyDots, StatCounter
    │   └── utility/           # ScrollToTop, PageMeta
    ├── data/
    │   ├── clinic.js          # nav, services, hero copy, PAGE_META, phone href
    │   ├── profile.js         # roles, office, stats, focus areas
    │   ├── training.js        # timeline, degrees, boards, licenses
    │   ├── teaching.js        # CIMS, teaching posts, faculty meetings
    │   ├── citations.js       # 54 papers, 2 chapters, 58 talks, medals, grand rounds
    │   └── recognition.js     # awards, societies, editorial, volunteer, languages, hobbies
    └── utils/
        ├── text.js            # citation author highlighting
        ├── publications.js    # year + topic filters
        └── presentations.js   # meeting filters (CRT, CVI, ACC, …)
```

---

## Design system (current)

**Intent:** ClinicMaster-*style* (original Tailwind, not ThemeForest files).

- **Pink band:** `#fde8eb` (heroes, inner `PageBanner`).
- **Page wash:** `paper-50` `#fdfbfb`.
- **Accent:** Tailwind `crimson-*` (`#dc3245` / `#c11f38`). Do not reintroduce unused `teal-*` or `gold-*` tokens.
- **Navy:** footer / TopBar `#0b1119`, headings `#111925`.
- **Buttons:** `.btn-primary` solid crimson pill; `.btn-outline` crimson border pill; `.btn-text` underlined text.
- **Cards:** `.glass-card` white, `rounded-[1.75rem]`, soft shadow.
- **Layout chrome:** fixed **TopBar** (address + office phone only — no invented email/socials) + white **Navbar**; dark footer; `CtaBand` red strip + doctor photo wash (not on Home).
- **Inner banners (`PageBanner`):** pink full-bleed; title + breadcrumb left; photo on right with left rounded corners and pink gradient blend. `visual="hands"` (default) or `"doctor"` (About).
- **Contact header:** white, “Contact Us”, breadcrumb, isolated 3D heart + faint ECG SVG.

---

## Information architecture

```
Home (/)
About (/about)          Doctor profile
Services (/services)    Four CV-true offerings
Pages ▾
  Training (/training)
  Teaching (/teaching)
  Publications (/publications)
  Presentations (/presentations)
  Recognition (/recognition)
Contact (/contact)
```

**Header CTA:** Book Appointment → `tel:+18702621600`

**Footer columns:** identity blurb · Quick links (Home, About, Services, Contact) · Pages · Find us (address, phone, CV download)

---

## Doctor identity (use everywhere it is shown)

| Field | Value |
| --- | --- |
| Name | Mahesh Anantha Narayanan |
| Credentials | MD, FACC, FSCAI, FSVM |
| FACC | American College of Cardiology |
| FSCAI | Society of Cardiovascular Angiography & Interventions |
| FSVM | Society of Vascular Medicine |
| Specialty | Interventional and endovascular cardiology |
| Practice tagline | Complex coronary and amputation prevention |

### Current roles

1. Physician Director of Cardiovascular Services — White River Health, Batesville, AR  
2. Director, Complex Coronary & Amputation Prevention Program — White River Health  
3. Assistant Professor — University of Arkansas for Medical Sciences (UAMS)  
4. Faculty — White River Health Internal Medicine Residency Program  

### Office

- White River Health Cardiology  
- 16 Hospital Circle, Batesville, AR 72501  
- Office: **870-262-1600**  
- Mobile: **507-319-2446**  
- CV download: `/cv/Mahesh_Anantha-Narayanan_Master_CV_2026.docx`

### Snapshot metrics (Google Scholar / CV)

| Metric | Value |
| --- | --- |
| Cases / year since 2021 | 1,000+ coronary, peripheral & venous |
| Peer-reviewed papers | 54 |
| Citations | 1,010 |
| h-index | 17 |
| i10-index | 30 |
| Oral & poster presentations | 58 |
| CIMS group | 50+ members; $25,000 Creighton grant |

### Clinical focus (only these four service buckets)

1. **Complex coronary intervention** — CTO recanalization; left main and multivessel PCI; intravascular lithotripsy; orbital atherectomy; imaging-guided intervention (IVUS/OCT).  
2. **Amputation prevention** — founded/directs WRH Complex Coronary and Amputation Prevention Program; 81 healthcare providers at 2021 inauguration education.  
3. **Peripheral & venous intervention** — LEAD; carotid and subclavian; VTE care; Yale-New Haven fellowship.  
4. **Teaching & faculty** — WRH residency faculty, UAMS Assistant Professor, national teaching at CRT / CTO / CVI; CIMS founder.

---

## Training (CV)

**Current practice:** Aug 2021 – present, White River Health. Complex coronary diagnostic/intervention + peripheral arterial and venous. 1,000+ cases/year.

**Fellowships**

| Dates | Role | Place | Notes |
| --- | --- | --- | --- |
| Jul 2020 – Jun 2021 | Interventional Coronary Fellowship | University of Arizona, Phoenix | 600+ coronary interventions. Mentors: Dr. Ashish Pershad, Dr. Haidar Yassin |
| Jul 2019 – Jun 2020 | Vascular Medicine & Endovascular Interventional Fellowship | Yale-New Haven Hospital | Carotid, LE, subclavian. 450+ interventions. Mentor: Dr. Carlos Mena-Hurtado |
| Aug 2018 | International Fellow, Interventional Coronary Elective | Madras Medical Mission, Chennai | Mentor: Dr. Mullasari |
| Jul 2016 – Jun 2019 | Cardiovascular Diseases Fellow | University of Minnesota | 11 months cath lab + 1-month international elective. Mentor: Dr. Jane Chen |

**Residency:** IM resident then Chief Resident, Creighton University School of Medicine, Omaha (2013–2016). Mentor: Dr. Tammy Wichman. Also Chief resident for Research (CIMS).

**Earlier:** Research Trainee, Mayo Clinic (2012–2013), mentors Dr. Rakesh Suri, Dr. Hartzell Schaff. Madras Medical College student 2005–2011; electives Temple (Dr. Riyaz Bashir) and Drexel; Medical Officer Sankara Kidney Hospital 2012.

**Degrees:** MBBS Madras Medical College 2005–2010; internship MMC 2010–2011; clerkships Drexel 2011, Temple interventional cardiology 2011–2012.

**Boards:** ABIM 2016; National Board of Echocardiography 2018; AB Cardiovascular Medicine 2019; AB Interventional Cardiology 2019.

**Licensure:** Arkansas E-13985 current; Colorado current; ACLS; BLS.

---

## Teaching & scholarship extras

- **CIMS:** Co-founded with Dr. Vivekanandan at Creighton (2013–2016): IRB/authorship protocol, fortnightly sessions, research website grant, Chief resident for Research.  
- **Teaching posts:** Creighton 2013–2016 (didactics, morning report, intern supervision); University of Minnesota 2016–2019 (cases, journal club, M&M, meta-analysis methods for fellows).  
- **QI:** 2014–2015 Creighton, mentor Dr. Gale Etherton.  
- **Faculty meetings:** CRT 2022 moderator; CTO 2024 presenter; CVI 2018–2024 presenter/moderator.  
- **Grand rounds / community talks:** listed by year in `citations.js` `GRAND_ROUNDS` (2023 Arkansas Peripheral Symposium moderator through 2014–2015 weekly research meetings).  
- **Awards:** Best Cardiologist of Independence County 2024; CRT Top 25 Young Interventional Cardiologists 2021; TCT MD Featured Fellow 2020; AHA Jay Coffman Early Investigator Award finalist 2020.  
- **Committee:** SVM Audit, Finance and Fundraising.  
- **Editorial boards:** J Geriatr Cardiol; Frontiers in Cardiovascular Medicine; J Clin Med (topic advisor); past World J Cardiol, CRM.  
- **Peer review:** 19 journals including JAHA, Heart, JACC Interventions, etc.  
- **Medals:** 16 named gold/memorial medals from MMC (Johnstone Gold Medal Best Outgoing Student 2011, anatomy/surgery/medicine medals, etc.).  
- **Other:** University first anatomy; Hindu links for TNPCEE 300/300 and Best Medical Student; Path to Success program; languages EN/TA native, Hindi fair; hobbies biking, chess, field hockey.  
- **Volunteer:** AHA/ACC FIT social media moderator 2018; Play for Patrick screening 2017; blood bank camp; MMC cultural secretary; Path to Success; school alumni president.

**Publications:** 54 strings in `PUBLICATIONS` + 2 `BOOK_CHAPTERS`. Filter UI: All, Coronary, Peripheral & venous, Structural, Imaging, Other, Chapters. Search by keyword.

**Presentations:** 58 strings in `PRESENTATIONS`. Filter by meeting: CRT, CVI, ACC, SCAI, TCT, AHA, HRS, LINC, SVM, ATS, SGIM, CHEST, C3, SHM.

---

## Page-by-page (what is on each screen)

### Shared shell (`layout/Layout.jsx`)

Every page: `PageMeta` + `ScrollToTop` → fixed `TopBar` + `Navbar` → `<Outlet />` → `CtaBand` **except Home** → `Footer` → `BackToTop`.

### Home `/`

1. **Pink hero:** eyebrow “White River Health Cardiology”; H1 is his **name**; credentials line; stacked current roles + boards (`HERO_CREDENTIALS`); lede; CTAs Book Appointment (tel) and Our Services. Landscape portrait `mahesh-hero` (heart model).  
2. **StatBand:** count-up 1,000+ | 54 | 58 | h-index 17.  
3. **CommitmentGrid:** four CV service pillars.  
4. **Navy highlight:** amputation-prevention copy (`FEATURED_HIGHLIGHT`) + link to `/services`.  
5. **Services tiles:** four icon cards + View all services.  
6. **Meet the doctor:** `mahesh-meet` + roles list + Show More → `/about`.  
7. **Red appointment strip:** call office phone (Home has its own; no `CtaBand`).

### About `/about`

- `PageBanner` with `visual="doctor"` (`mahesh-portrait`).  
- Left profile card: photo, name, credentials, office, tel.  
- Right: current roles list, 1,000+ volume, fellowships list, degrees, boards.  
- Pink section: CIMS/teaching throughline; three focus cards; research metrics + link to publications.

### Services `/services`

- Hands-style banner uses landscape `mahesh-banner`. Photos: `mahesh-clinic` + `mahesh-heart`. Four detailed service cards (bullets from CV). No invented checkup packages.

### Training `/training`

- Banner title: “From fellowship to a 1,000-case-a-year practice”.  
- Current practice card + prior training list (fellowships, residency, early).  
- Three columns: degrees, board certification, licensure.

### Teaching `/teaching`

- Banner: “Building programs, not just publications”.  
- CIMS story + figures; QI line.  
- Teaching posts by institution.  
- Faculty meetings (CRT/CTO/CVI).  
- Grand rounds grouped by year.

### Publications `/publications`

- Hands banner; Google Scholar snapshot (h, i10 bars).  
- Search + topic tabs. Year-grouped citation list; author name bolded via `renderCitation`.

### Presentations `/presentations`

- Hands banner; pills for year span, count 58, meeting count.  
- Radio list of meetings; talks grouped by year.

### Recognition `/recognition`

- Hands banner. Awards grid; FACC/FSCAI/FSVM; memberships; SVM committee; editorial boards; peer-review journal list; other accomplishments (Hindu links); Johnstone / medal list.

### Contact `/contact`

- `ContactBanner` (not PageBanner): Contact Us, office lede, Home › Contact, `mahesh-heart`.  
- Left: appointment form (name, phone, email, city, reason, date, message) → mailto or Call.  
- Right: `mahesh-clinic`, map iframe, directions, office phone, mobile, CV download.  
- Lower: volunteer timeline; languages + hobbies.

### 404

Simple card, back to home.

---

## Key components (behavior)

| File | Role |
| --- | --- |
| `layout/TopBar.jsx` | Navy strip: office address + office phone only |
| `layout/Navbar.jsx` | Logo = circular `maheshNav`; name + credentials; primary nav; Pages hover dropdown; Book Appointment tel; mobile drawer |
| `layout/Layout.jsx` | Shell: meta, chrome, CtaBand except Home, footer |
| `clinic/PageBanner.jsx` | Pink header, breadcrumb, right-side image blend (`banner` / `doctor`) |
| `clinic/ContactBanner.jsx` | White contact header + `maheshHeart` |
| `clinic/CtaBand.jsx` | Red “Need an appointment?” + phone; `maheshHeart` wash on large screens |
| `clinic/StatBand.jsx` | Home counters |
| `clinic/CommitmentGrid.jsx` | Home four-pillar cards |
| `forms/AppointmentForm.jsx` | Client-only mailto |
| `ui/Reveal.jsx` | Scroll-in animation |
| `utility/PageMeta.jsx` | Per-route title/description |
| `data/clinic.js` | Maps profile → clinic labels / nav / `PAGE_META` |

---

## Assets map

| Import (`src/assets/images/index.js`) | Use |
| --- | --- |
| `maheshNav` | Navbar avatar |
| `maheshHero` | Home hero |
| `maheshMeet` | Home meet-the-doctor card |
| `maheshPortrait` | About banner + profile card |
| `maheshBanner` | Default inner `PageBanner` (landscape, doctor on the right) |
| `maheshClinic` | Services + Contact office card |
| `maheshHeart` | Services pair, Contact header, CtaBand |
| `/favicon.png` | Circular crop of his photo |

Images are **Vite-imported** WebP (hashed in `dist/`). Retired JPEGs/PNGs live in `bin/` and are not served.

---

## What a redesign may change vs must not

**May change:** colors, type, layout, motion, component chrome, how sections are arranged, new decorative graphics (not fake staff), navbar pattern, card shapes.

**Must not change:** routes; CV numbers and roles; office phone/address; four services; citation strings unless syncing a new CV; “Book Appointment” = office tel; form has no fake API; no shop/pricing/multi-doctor team.

**Data edit path:** change arrays in `src/data/`; pages should keep importing those modules.

---

## Ready-to-paste redesign prompt

Copy everything in this fenced block into Claude, then add your visual direction (references, screenshots, “make it more X”).

```text
You are redesigning an existing Vite + React 18 + Tailwind 3 + React Router 6 site for interventional cardiologist Mahesh Anantha Narayanan, MD, FACC, FSCAI, FSVM (display name without hyphen).

GOAL
Restyle the UI. Do not change medical/CV facts, routes, or invent content. Keep it a clinic-style site that also holds a full academic record.

STACK
- Entry: index.html → src/main.jsx (HelmetProvider + BrowserRouter) → src/App.jsx
- Layout: src/components/layout/Layout.jsx (PageMeta, TopBar, Navbar, Outlet, CtaBand except on Home, Footer, BackToTop)
- Components live under layout/, clinic/, forms/, ui/, utility/ — do not recreate unused leftovers (PageHero, SearchableList, AuroraBackground, etc.)
- Styles: src/index.css + tailwind.config.js. Colors: crimson-* (#dc3245 / #c11f38), paper-* warm off-whites, navy-* for dark text/footer/TopBar.
- Fonts: Plus Jakarta Sans (headings/UI)
- Motion: framer-motion; icons: lucide-react; per-route meta: react-helmet-async
- Images: import from src/assets/images/index.js (WebP doctor portraits)
- No backend. Hosted on Netlify (SPA redirects).

ROUTES (keep all)
/ Home
/about Doctor profile
/services Four CV-true services
/training Training & practice timeline
/teaching CIMS, teaching posts, faculty meetings, grand rounds
/publications 54 papers, searchable + topic filters
/presentations 58 talks, filter by meeting
/recognition Awards, societies, editorial, medals
/contact Form (mailto) + office/map + volunteer/languages
404 NotFound

NAV
Primary: Home, About, Services, Pages dropdown (Training, Teaching, Publications, Presentations, Recognition), Contact.
Header “Book Appointment” = tel:+18702621600 only.

DOCTOR / PRACTICE (do not invent)
- Physician Director of Cardiovascular Services, White River Health, Batesville, AR
- Director, Complex Coronary & Amputation Prevention Program, White River Health
- Assistant Professor, UAMS
- Faculty, White River Health IM residency
- Office: White River Health Cardiology, 16 Hospital Circle, Batesville, AR 72501
- Phone 870-262-1600, mobile 507-319-2446
- 1,000+ coronary/peripheral/venous cases/year since 2021
- 54 papers, 1,010 citations, h-index 17, i10 30, 58 presentations
- Services only: (1) complex coronary (CTO, left main/multivessel PCI, IVL, orbital atherectomy, IVUS/OCT) (2) amputation prevention program (3) peripheral & venous (4) teaching/faculty/CIMS
- Full training, boards, awards, citations: src/data/profile.js, training.js, teaching.js, citations.js, recognition.js, clinic.js

IMAGES
Doctor only (imported WebP): src/assets/images/doctor/ — mahesh-nav, mahesh-portrait, mahesh-clinic, mahesh-heart, mahesh-meet, mahesh-hero, mahesh-banner. Do not invent extra staff photos.
CV file: /cv/Mahesh_Anantha-Narayanan_Master_CV_2026.docx

CURRENT PAGE STRUCTURE (re-skin, don’t drop sections)
Home: pink hero (name + stacked credentials + mahesh-hero) + two CTAs; StatBand; CommitmentGrid; navy amputation-prevention highlight; four service tiles; meet-the-doctor (mahesh-meet); red call strip.
About: doctor banner visual; photo card; roles; fellowships; focus; research metrics.
Services: banner + two images + 4 detailed cards.
Training / Teaching / Publications / Presentations / Recognition: PageBanner (pink, breadcrumb, right visual) then existing data UI.
Contact: ContactBanner (white + mahesh-heart) then form + office/map then volunteer/languages.
TopBar on all pages. CtaBand on all non-home pages.

CONSTRAINTS
- Do not copy ThemeForest HTML/CSS/images.
- Do not add shop, pricing, fake multi-doctor team, fake booking API, Mailchimp, reCAPTCHA unless asked.
- Prefer editing existing components and Tailwind; keep data imports.
- Match mobile + desktop; verify all routes.

MY DESIGN DIRECTION
[PASTE: e.g. calmer navy, less pink, more editorial, denser, more whitespace, new type, etc.]
[ATTACH screenshots if any]

Deliver: implement the redesign in this repo, keeping facts and routes intact.
```

---

## Quick commands

```bash
npm install
npm run dev      # local
npm run build    # dist/ for Netlify
```

Edit content in `src/data/`. Edit look in `src/index.css`, `tailwind.config.js`, and page/component JSX.
