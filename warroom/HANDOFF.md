# HANDOFF — Warroom & Interview Prep Project
# For: next Claude session (Claude Code or other)
# Owner: Mohamed Amine Bayar, PhD — BioSpark
# Last updated: May 2026

---

## 1. WHAT THIS PROJECT IS

Interview preparation system for a senior biostatistician (13+ yrs, oncology/hematology).
Three employers: Gustave Roussy (GR) → Novartis → J&J/Janssen → now independent (BioSpark).

The system has two layers:
- **warroom.md** — master deep-dive reference (all study details, methods, compounds, publications)
- **Three Word documents** generated from warroom.md — lightweight interview-day references

---

## 2. FILE MAP

```
C:\Users\bayar\Documents\cv-biospark\
│
├── warroom\
│   ├── warroom.md                  ← MASTER SOURCE (777 lines, read this first)
│   ├── Interview_Memo.docx         ← Doc 1: quick-ref tables, one row per study
│   ├── Interview_FAQ.docx          ← Doc 2: prepared Q&A answers (bullet scripts)
│   ├── Interview_Methods.docx      ← Doc 3: deep-dive on 7 statistical methods
│   ├── make_memo.js                ← Node.js script → regenerates Interview_Memo.docx
│   ├── make_faq.js                 ← Node.js script → regenerates Interview_FAQ.docx
│   ├── make_methods.js             ← Node.js script → regenerates Interview_Methods.docx
│   └── HANDOFF.md                  ← This file
│
├── Main\                           ← LaTeX CV (main version)
│   ├── CV - Mohamed Amine Bayar.tex
│   ├── section_competences.tex
│   ├── section_experience.tex
│   └── ...
│
└── ATS\
    └── CV_ATS.tex                  ← ATS-optimised CV (moderncv banking style)
```

**Node.js docx generation:**
- Requires: `docx` npm package installed globally (`npm install -g docx`)
- Run: `node make_memo.js` / `node make_faq.js` / `node_methods.js`
- Module path: `require('C:/Users/bayar/AppData/Roaming/npm/node_modules/docx')`
- Output: overwrites the corresponding .docx file in place

**Git repo:** `cv-biospark` branch; remote on GitHub (bayaramine account)
- Working branch: `cv/biospark`
- Committed files: LaTeX source, warroom.md, .js scripts, .docx output files

---

## 3. WHAT WAS DONE (this session)

### warroom.md — Content built
All 6 J&J cards, 3 Novartis cards, 10 GR entries, Methods section, Compounds, Publications.
Key recent changes (user edited Interview_Memo.docx directly → consolidated back to scripts):
- CARTITUDE-2: 7 cohorts (was 4); cohorts A/B/D/E/F (MRD primary) + G (sustained MRD); CRO FSP from Cytel
- CARTITUDE-4: ODAC narrative added (KM crossing at 6m, RMST +4.7m net gain, 11-0 vote)
- MajesTEC-5: 13 cohorts noted
- TRIlogy-5: "What I Did" trimmed (removed SAP from list, OS harm monitoring explicit)

### Word documents created
| File | Content | Pages (approx) |
|------|---------|----------------|
| Interview_Memo.docx | Colour-coded study tables + methods flash + compounds | 3–4 |
| Interview_FAQ.docx | 18 Q&A blocks (bullets only) + 3 blank templates | 8–10 |
| Interview_Methods.docx | 7 methods × 4 sub-sections (math, params, regulatory, sharp details) | 7–9 |

### FAQ questions in Interview_FAQ.docx
**Profile & Background:** Walk me through your CV · Core expertise · Why leave J&J · Tell me about your PhD
**Technical:** BOIN · BOIN vs BLRM · Group sequential · ICH E9(R1) · MRD endpoint · FDA/EMA regulatory
**Study-specific:** CARTITUDE-4+ODAC · TRIlogy-5 Phase III design · Asciminib program · TNBC ML patent
**Behavioural:** Statistical challenge (CARTITUDE-4 ODAC) · Stakeholder management (TRIlogy-5 EOP2) · Simplifying complexity · Greatest strength
**Tricky/Personal:** Why leave J&J · Manager reference · Why no promotion · Hourly rate

---

## 4. PENDING TASKS — TO CONTINUE

### 4a. warroom.md TO FILL items (user will recall more details)

| Study | Field to fill | What we know |
|-------|--------------|--------------|
| MARIPOSA-2 | Analysis cut date confirmation | We used 10 July 2023 (from paper) |
| CARTITUDE-2 | Which specific cohorts user worked on (A-G) | Currently: "7 cohorts"; MRD primary for A/B/D/E/F; G = sustained MRD |
| CARTITUDE-2 | Regulatory context — did data contribute to label expansion? | Unknown — user to recall |
| CARTITUDE-4 | Which ODAC analyses user personally owned (RMST? cause-of-death? landmark OS?) | Forest plots + time-to-response + MRD landmark confirmed |
| MajesTEC-5 | 13 cohorts — what are they? | User edited memo directly to add this |
| TRIlogy-5 | Protocol sections user personally wrote | Statistical sections confirmed; which specific sections? |
| TRIlogy-5 | Statistical design assumptions: CR rate hypothesis, alpha allocation between CR and PFS | Unknown |
| TRIlogy-2 | BOIN parameters: target DLT rate φ, λ_e, λ_d, cohort size, standard BOIN vs BOIN-OD | Unknown — user to recall |

### 4b. Additional FAQ questions
User said "I will enumerate the questions" — they may add more. Use `make_faq.js` to rebuild.
To add a question: add a `...qa("question", ["bullet 1", "bullet 2", ...])` block in the relevant section.
To add a blank template: add `...qaTemplate("[QUESTION]")` in Section 6.

### 4c. warroom.md content gaps
- Methods section: partially filled (BOIN, BLRM, GSD, event re-estimation, estimand, competing risks). Package/software details thin.
- Publications section: minimal (just 7 key refs). Full list at: https://scholar.google.com/citations?user=u6Ns41gAAAAJ&hl=en
- GR trial cards: HPVRX (cervical, Ph I) and MELIPI RX not yet detailed.
- Sarcopenia prognostic models: 3 models mentioned in CV but no warroom entry yet.

### 4d. CV maintenance
If the user updates LaTeX CV (Main/ or ATS/ folder), cascade changes:
- Main → ATS: apply content changes only; skip layout-specific LaTeX (e.g., \pagebreak)
- ATS uses moderncv banking style — don't add multi-column layout elements from Main
- Git workflow: `cv/biospark` branch; commit Main + ATS separately or together; push to GitHub

---

## 5. HOW TO REGENERATE WORD DOCUMENTS

When user makes changes to content (via warroom.md updates or direct edit requests):

**Quick edit cycle:**
1. Edit the relevant `.js` script (make_memo.js / make_faq.js / make_methods.js)
2. Run: `node C:\Users\bayar\Documents\cv-biospark\warroom\make_memo.js`
3. Verify: open the .docx in Word, or run the zipfile check: `python -c "import zipfile,os; z=zipfile.ZipFile('...'); print(len(z.namelist()), 'files,', os.path.getsize('...')//1024, 'KB')"`

**Content structure in scripts:**
- `make_memo.js`: study rows are `studyRow([study, role, key_numbers, what_i_did], shade)` calls
- `make_faq.js`: Q&A blocks are `...qa("question", ["bullet1", "bullet2"])` calls; templates are `...qaTemplate("[Q]")`
- `make_methods.js`: method blocks are `...method(name, subtitle, colorKey, [{head, items}])` calls; bullets support `||bold text||` inline for emphasis

---

## 6. KEY FACTS TO KNOW (context for continuing)

### The three Word documents — purpose
- **Memo**: scan in 5 min before interview or have open during; pure tables, no prose
- **FAQ**: bullet-point scripts to hold in your head; not paragraphs to recite
- **Methods**: deep technical detail; for technical interviews where interviewers probe real vs imposter expertise

### Study role summary (critical for interview framing)
| Study | Framing |
|-------|---------|
| MARIPOSA-2 | "TFL contributor" — not lead stat; R QC of SAS outputs; AnnOncol 2024 |
| CARTITUDE-2 | "Lead stat" — SAP, TFLs, IDMC, CRO oversight (FSP from Cytel) |
| CARTITUDE-4 | "ODAC preparation contributor" — not lead; ODAC = 11-0 vote March 2024 |
| MajesTEC-5 | "Lead stat" — SAP, TFLs, induction milestone CSR |
| TRIlogy-5 | "Lead stat from concept through EOP2" — Phase III design, FDA+EMA direct |
| TRIlogy-2 | "Lead stat" — BOIN design, SAP, protocol stat section, monthly outputs |
| ASC4MORE | "Lead stat" — full delivery, 4-arm Phase II primary analysis |
| ASC4KIDS | "Lead stat design+regulatory" — BLRM, PIP+iPSP; left before primary analysis |
| PMX rotation | "6-month formal secondment to Novartis pharmacometrics" |

### Key numbers to know cold
- MARIPOSA-2: PFS HR 0.44 (ALC), 0.48 (AC); medians 8.3, 6.3 vs 4.2m
- CARTITUDE-4: PFS HR 0.26; OS HR 0.55 (P=0.0009); ODAC 11-0; RMST +4.7m
- ASC4MORE: MR4.5 @W48: Asc40+IMA 19%, IMA 0%; cumulative Asc 29% vs IMA 10%
- TRIlogy-5: N=700; dual primary CR+PFS; vs teclistamab (BCMA×CD3 approved)
- Ramantamig Phase 1: RP2D 100mg Q4W SC; ORR 100%, ≥CR 70% (ASCO 2025)

---

## 7. MEMORY FILES LOCATION

Project memory is tracked at:
`C:\Users\bayar\.claude\projects\C--Users-bayar-Documents-website-biospark-BioSpark-website\memory\`
- `MEMORY.md` — index
- `user_profile.md` — CV details
- `project_biospark.md` — BioSpark website project
- `project_warroom_jj_status.md` — J&J warroom TO FILL tracker (update this as gaps are filled)

---

*End of handoff. Pick up from Section 4 — Pending Tasks.*
