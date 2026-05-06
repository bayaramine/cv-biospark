const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, BorderStyle, WidthType, ShadingType,
  VerticalAlign, PageNumber, LevelFormat
} = require('C:/Users/bayar/AppData/Roaming/npm/node_modules/docx');

// ── Colours ───────────────────────────────────────────────────────────────────
const NAVY    = "1F3864";
const DBLUE   = "2E74B5";
const LBLUE   = "BDD7EE";
const LGREEN  = "E2EFDA";
const LYELLOW = "FFF2CC";
const WHITE   = "FFFFFF";
const FONT    = "Arial";

const MARGIN = 900;  // ~1.6 cm
const PAGE_W = 11906;
const TW = PAGE_W - MARGIN * 2;   // 10106

function nb(color = WHITE) {
  const b = { style: BorderStyle.NONE, size: 0, color };
  return { top: b, bottom: b, left: b, right: b };
}

function hairBorder() {
  const b = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
  return { top: b, bottom: b, left: b, right: b };
}

function spacer(pts = 80) {
  return new Paragraph({ spacing: { before: 0, after: pts }, children: [] });
}

// ── TITLE BLOCK ──────────────────────────────────────────────────────────────
function titleBlock() {
  return [
    new Table({
      width: { size: TW, type: WidthType.DXA },
      columnWidths: [TW],
      rows: [new TableRow({ children: [new TableCell({
        borders: nb(),
        shading: { fill: NAVY, type: ShadingType.CLEAR },
        margins: { top: 140, bottom: 140, left: 200, right: 200 },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: "INTERVIEW FAQ — PREPARED ANSWERS", bold: true, size: 30, font: FONT, color: WHITE })]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 60 },
            children: [new TextRun({ text: "Mohamed Amine Bayar, PhD  |  Biostatistics Consultant  |  Oncology & Hematology", size: 17, font: FONT, color: "BDD7EE" })]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 40 },
            children: [new TextRun({ text: "Bullet-point scripts — ideas to hold in your head, not paragraphs to recite", size: 15, font: FONT, color: "93C6E7", italics: true })]
          }),
        ]
      })]})]
    }),
    spacer(120),
  ];
}

// ── Section header ────────────────────────────────────────────────────────────
function sectionHead(text) {
  return [
    new Table({
      width: { size: TW, type: WidthType.DXA },
      columnWidths: [TW],
      rows: [new TableRow({ children: [new TableCell({
        borders: nb(),
        shading: { fill: DBLUE, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 140, right: 140 },
        children: [new Paragraph({
          children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 18, font: FONT, color: WHITE })]
        })]
      })]})]
    }),
    spacer(40),
  ];
}

// ── Single Q&A block ──────────────────────────────────────────────────────────
// question: string
// bullets: array of strings (each is one bullet)
// note: optional footnote string
function qa(question, bullets, note = null) {
  const rows = [];

  // Question row
  rows.push(new TableRow({ children: [
    new TableCell({
      borders: { top: { style: BorderStyle.SINGLE, size: 2, color: DBLUE }, bottom: nb().bottom, left: nb().left, right: nb().right },
      shading: { fill: LBLUE, type: ShadingType.CLEAR },
      margins: { top: 80, bottom: 80, left: 140, right: 140 },
      children: [new Paragraph({
        children: [new TextRun({ text: "Q: " + question, bold: true, size: 18, font: FONT, color: "000000" })]
      })]
    })
  ]}));

  // Bullets row
  const bulletParas = bullets.map(b => new Paragraph({
    spacing: { before: 30, after: 30 },
    indent: { left: 280, hanging: 200 },
    children: [
      new TextRun({ text: "•  ", size: 17, font: FONT, bold: true, color: DBLUE }),
      new TextRun({ text: b, size: 17, font: FONT }),
    ]
  }));

  if (note) {
    bulletParas.push(new Paragraph({
      spacing: { before: 60 },
      children: [new TextRun({ text: "Note: " + note, size: 15, font: FONT, color: "888888", italics: true })]
    }));
  }

  rows.push(new TableRow({ children: [
    new TableCell({
      borders: { top: nb().top, bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, left: nb().left, right: nb().right },
      shading: { fill: WHITE, type: ShadingType.CLEAR },
      margins: { top: 80, bottom: 100, left: 280, right: 140 },
      children: bulletParas
    })
  ]}));

  return [
    new Table({
      width: { size: TW, type: WidthType.DXA },
      columnWidths: [TW],
      rows
    }),
    spacer(80),
  ];
}

// ── TEMPLATE QUESTION (empty) ─────────────────────────────────────────────────
function qaTemplate(question) {
  return [
    new Table({
      width: { size: TW, type: WidthType.DXA },
      columnWidths: [TW],
      rows: [
        new TableRow({ children: [new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 2, color: "AAAAAA" }, bottom: nb().bottom, left: nb().left, right: nb().right },
          shading: { fill: LYELLOW, type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 140, right: 140 },
          children: [new Paragraph({
            children: [new TextRun({ text: "Q: " + question, bold: true, size: 18, font: FONT, color: "000000" })]
          })]
        })]}),
        new TableRow({ children: [new TableCell({
          borders: { top: nb().top, bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" }, left: nb().left, right: nb().right },
          shading: { fill: WHITE, type: ShadingType.CLEAR },
          margins: { top: 60, bottom: 80, left: 280, right: 140 },
          children: [
            new Paragraph({ spacing: { before: 20, after: 20 }, indent: { left: 280, hanging: 200 }, children: [new TextRun({ text: "•  [TO FILL]", size: 17, font: FONT, color: "AAAAAA", italics: true })] }),
            new Paragraph({ spacing: { before: 20, after: 20 }, indent: { left: 280, hanging: 200 }, children: [new TextRun({ text: "•  [TO FILL]", size: 17, font: FONT, color: "AAAAAA", italics: true })] }),
            new Paragraph({ spacing: { before: 20, after: 20 }, indent: { left: 280, hanging: 200 }, children: [new TextRun({ text: "•  [TO FILL]", size: 17, font: FONT, color: "AAAAAA", italics: true })] }),
          ]
        })]}),
      ]
    }),
    spacer(80),
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// BUILD CONTENT
// ─────────────────────────────────────────────────────────────────────────────
const children = [
  ...titleBlock(),

  // ── SECTION 1: PROFILE & BACKGROUND ────────────────────────────────────────
  ...sectionHead("Profile & Background"),

  ...qa("Walk me through your CV / background.", [
    "PhD Paris-Saclay (biostatistics), 13+ years clinical trials — all in oncology/hematology.",
    "Started at Gustave Roussy (6y9m): led 7 trials from Phase I to III, built ML prognostic models, co-invented patent, published 15+ papers.",
    "Novartis (3y3m): lead stat for asciminib (Scemblix) Phase II (ASC4MORE) and pediatric bridging study (ASC4KIDS). Also a 6-month pharmacometrics secondment.",
    "J&J (3y2m): Principal Statistician across teclistamab, cilta-cel, and ramantamig programs. 10+ high-stakes analysis milestones; designed and ran EOP2 for first Phase III of a first-in-class trispecific (ramantamig vs teclistamab).",
    "Now: independent consultant through BioSpark. Developing at the intersection of classical biostatistics and AI/ML."
  ]),

  ...qa("What is your core expertise?", [
    "Survival analysis, adaptive/group sequential designs, Bayesian dose-finding (BOIN, BLRM), estimand framework.",
    "Deep oncology + hematology disease knowledge: multiple myeloma, CML, NSCLC, solid tumors.",
    "Statistical programming: R (tidyverse, ggplot2, Shiny, OncoBayes2, rpact), SAS, Python.",
    "Regulatory experience: FDA + EMA direct interactions; EOP2; PIP/iPSP pediatric plans; BLA/NDA contributions.",
    "ML/AI applied to clinical and genomic data — patent on ML genomic signature in TNBC."
  ]),

  ...qa("Why are you leaving J&J / Why did you go independent?", [
    "J&J contract ended March 2026 — the ramantamig Phase III (TRIlogy-5) design was complete and submitted to FDA/EMA.",
    "I wanted to build something of my own: BioSpark — independent statistical consulting bridging rigorous biostatistics with emerging AI/ML methods.",
    "Also: after 13 years in big pharma, I want to work across multiple compounds and disease areas simultaneously.",
    "[Keep it positive — emphasise what you're building, not what you left]"
  ]),

  ...qa("Tell me about your PhD research.", [
    "Topic: long-term evaluation of Phase III trials in rare diseases with biomarker subtypes.",
    "Key question: given limited sample sizes in rare diseases, what trial design strategy maximises long-term survival benefit across a series of trials?",
    "Main finding: relaxing alpha to 10-20% can increase long-term benefit; group sequential adaptive designs with 3 arms outperform 2-arm designs.",
    "Also developed CRM2DIM — a dual-agent Bayesian CRM SAS macro (CMPB 2019) — applied directly to CHIPASTIN ovarian cancer Phase I.",
    "Mayo Clinic visiting scientist (Prof. Daniel Sargent): exposed me to global RCT methodology outside France."
  ]),

  // ── SECTION 2: TECHNICAL / METHODOLOGY ─────────────────────────────────────
  ...sectionHead("Technical & Methodology"),

  ...qa("How does BOIN work and when did you use it?", [
    "Bayesian Optimal Interval design for Phase I dose-escalation (MTD finding).",
    "Core idea: pre-specified decision table. If observed DLT rate falls in [0, lambda_e] → escalate; [lambda_d, 1] → de-escalate; in between → stay.",
    "lambda_e and lambda_d are calculated once from target DLT rate (phi) before the trial starts — no real-time model fitting needed.",
    "Advantages over 3+3: more flexible cohort sizes, better MTD accuracy. Simpler than BLRM: no Bayesian posterior updating required real-time.",
    "FDA-endorsed in 2019 guidance on model-assisted designs.",
    "Applied in TRIlogy-2: designed BOIN for ramantamig combination Phase 1b, 5 regimens, N=140."
  ]),

  ...qa("What is the difference between BOIN and BLRM?", [
    "BOIN: model-assisted. Decision table is fixed at design. Simple to implement and explain to clinical team.",
    "BLRM: model-based. Fits a Bayesian logistic regression dose-toxicity curve, updated with each cohort. More flexible, more complex.",
    "BLRM uses EWOC (Escalation With Overdose Control): ensures P(next dose > MTD) stays <= 25%.",
    "I used BLRM in ASC4KIDS for safety monitoring (not primary dose selection — that was PK-driven).",
    "For most practical Phase I oncology needs: BOIN is now preferred. BLRM adds value when dose-toxicity relationship is more complex or prior data is rich."
  ]),

  ...qa("Explain group sequential designs and how you've used them.", [
    "Planned interim analyses with pre-specified stopping rules — controls overall Type I error via alpha-spending function.",
    "Most common: O'Brien-Fleming (conservative at early looks), Lan-DeMets (flexible alpha-spending).",
    "Can stop early for: efficacy (positive result), futility (unlikely to succeed), or harm monitoring.",
    "In MARIPOSA-2: OS was monitored at an interim with O'Brien-Fleming boundary (alpha = 0.000197 for AC arm).",
    "In TRIlogy-5: designed both efficacy and OS harm monitoring boundaries for the Phase III. Used rpact and gsDesign packages.",
    "Key message: alpha-spending does NOT inflate the overall Type I error — it distributes it across looks."
  ]),

  ...qa("What is the ICH E9(R1) estimand framework?", [
    "A framework for precisely defining the treatment effect to be estimated, before design and analysis.",
    "Five attributes: population, variable (endpoint), intercurrent event handling, summary measure.",
    "Four strategies for intercurrent events: treatment policy (ignore IE, analyse as-treated); hypothetical (what if IE hadn't happened?); composite (IE = event); while-on-treatment (only while receiving treatment).",
    "Why it matters: avoids ambiguity — ensures objective, design, analysis all address the SAME question.",
    "Directly applied in regulatory submissions and SAPs at J&J and Novartis."
  ]),

  ...qa("Explain MRD negativity as a primary endpoint in myeloma.", [
    "MRD = minimal residual disease. Measures how deep the response is below the clinical CR threshold.",
    "Standard threshold: 10 to the power -5 (1 malignant cell per 100,000 normal cells) by NGS or NGF.",
    "Requires adequate bone marrow aspirate — if aspirate quality is insufficient, patient is evaluability-excluded.",
    "Key statistical issue: denominator. ITT MRD neg rate vs evaluable MRD neg rate — must pre-specify in SAP.",
    "Used as primary endpoint in CARTITUDE-2 (cohorts A/B/D) and MajesTEC-5.",
    "Regulatory context: FDA Oncology Center of Excellence accepts MRD as primary in certain settings, but OS/PFS remains the gold standard for registration."
  ]),

  ...qa("Describe your experience with regulatory interactions (FDA/EMA).", [
    "EOP2 (FDA Type B meeting) for TRIlogy-5: lead statistician. Prepared briefing book including Phase III design rationale, estimand, sample size, adaptive design document (event re-estimation). Aligned FDA on pivotal design before first patient.",
    "EMA Scientific Advice for TRIlogy-5: parallel interaction — similar content, different format (written questions).",
    "PIP (EMA) + iPSP (FDA) for ASC4KIDS: prepared statistical sections of both pediatric plan submissions. Joint EMA/FDA framework for pediatric oncology.",
    "Written responses to health authority queries (FDA/EMA) on analysis methods and endpoints — MARIPOSA-2, TRIlogy-5.",
    "Key learning: FDA cares about: estimand precision, Type I error control, adaptive design documentation. EMA adds emphasis on long-term follow-up and European patient populations."
  ]),

  // ── SECTION 3: STUDY-SPECIFIC ───────────────────────────────────────────────
  ...sectionHead("Study-Specific Questions"),

  ...qa("Tell me about CARTITUDE-4 and your role.", [
    "Phase III: cilta-cel (BCMA CAR-T) vs standard of care (PVd or DPd) in lenalidomide-refractory MM, 1-3 prior lines. N=419, 1:1.",
    "Primary endpoint: PFS (BICR). PFS HR 0.26 — one of the strongest PFS effects seen in myeloma.",
    "Updated OS (Lancet Oncol 2025): HR 0.55 (0.39-0.79), P=0.0009 — CAR-T showing survival benefit.",
    "ODAC (March 2024): I contributed to the statistical package for ODAC preparation. 11-0 vote in favour.",
    "ODAC complexity: early mortality signal (14% cilta-cel vs 12% SOC at 6 months). We prepared RMST analysis showing 4.7 months net gain offsetting early risk. Also: 2 CAR-T lymphoma cases (NEJMoa2309728).",
    "My specific work: subgroup PFS forest plots, time-to-response KM plots, MRD-negative vs positive landmark analyses."
  ]),

  ...qa("Tell me about TRIlogy-5 — the Phase III you designed.", [
    "Ramantamig (BCMA x GPRC5D x CD3 trispecific, first-in-class) vs teclistamab (BCMA bispecific, approved competitor). RRMM, >=3 prior lines.",
    "Why trispecific vs bispecific? Dual-target engagement (BCMA + GPRC5D) hypothesised to overcome resistance to BCMA-alone therapies.",
    "N=700; dual primary endpoints: CR rate and PFS (BICR). Independent testing with graphical multiplicity.",
    "Key design features: event re-estimation (adaptive), OS harm monitoring (early mortality precedent from cilta-cel).",
    "Regulatory: direct FDA EOP2 + EMA Scientific Advice. Prepared briefing book, responded to queries, achieved alignment on design.",
    "Not yet recruiting — start planned June 2026. I left J&J March 2026 — handed off execution-ready."
  ]),

  ...qa("Tell me about your work in the asciminib (Scemblix) program.", [
    "Scemblix: STAMP inhibitor targeting ABL myristoyl pocket — allosteric, complementary to ATP-competitive TKIs. First in class. FDA approved Nov 2021.",
    "ASC4MORE: 4-arm Phase II (asciminib 40/60mg + imatinib vs continued imatinib vs nilotinib). Primary: MR4.5 rate at W48. Result: 19-29% vs 0% (imatinib). I was lead stat — full delivery (SAP, TFLs, CSR).",
    "ASC4KIDS: pediatric CML-CP bridging. PK-driven dose selection + BLRM safety monitoring. PIP (EMA) + iPSP (FDA). I designed and submitted both regulatory documents.",
    "PMX rotation (6 months): PKPD and tumor growth inhibition modeling using nlmixr. Insights fed directly into ASC4KIDS adult-to-pediatric PK extrapolation.",
    "Key message: I own the full Scemblix clinical statistics story from adult Phase II through pediatric regulatory program."
  ]),

  ...qa("Describe your ML patent and the TNBC genomic work.", [
    "Goal: build a prognostic genomic signature in Triple Negative Breast Cancer (TNBC) — one of the hardest subtypes to treat with few biomarkers.",
    "Full pipeline: raw gene expression data → fRMA normalization (cross-platform) → merging multiple datasets → penalized regression (variable selection) → internal validation (cross-validation) → external validation (independent cohort).",
    "Outcome: patent WO2018002385A1 (co-inventor). Published in Annals of Oncology (Criscitiello et al. 2018).",
    "What makes it ML: penalized regression (Lasso-type) for variable selection in high-dimensional genomic space (10,000+ genes → signature genes). External validation on independent datasets.",
    "Key message: I own the full pipeline — from raw biology to a validated clinical tool. Not just analysis, but engineering a reproducible, validated prediction model."
  ]),

  // ── SECTION 4: BEHAVIORAL ───────────────────────────────────────────────────
  ...sectionHead("Behavioural / Leadership"),

  ...qa("Describe a time you faced a complex statistical challenge and how you solved it.", [
    "[Good answer: CARTITUDE-4 ODAC — early mortality signal]",
    "Situation: CARTITUDE-4 primary PFS showed HR 0.26 (strong), but early mortality was 14% vs 12% — raising safety concerns for ODAC.",
    "Challenge: conventional HR analysis showed early crossing of KM curves. FDA and clinical team concerned about net benefit.",
    "Solution: proposed RMST (restricted mean survival time) analysis — captures net survival benefit over entire follow-up including early crossing. Result: 4.7 months net gain even accounting for early risk.",
    "ODAC outcome: 11-0 vote in favour. CAR-T approved in this earlier line setting.",
    "Key: I translated a regulatory/safety concern into a specific statistical question and provided the right method to answer it."
  ]),

  ...qa("Tell me about a time you led a cross-functional team or managed stakeholders.", [
    "[Good answer: TRIlogy-5 Phase III design + EOP2]",
    "Led statistical strategy for a pivotal Phase III from concept through FDA/EMA alignment.",
    "Stakeholders: Clinical team (endpoint choice, feasibility), Regulatory affairs (FDA/EMA strategy), Data management (data collection plan), Biometrics leadership (governance), External consultants.",
    "Key decision: dual primary endpoints (CR and PFS) — had to defend this choice to FDA who initially preferred single primary. Prepared statistical rationale demonstrating multiplicity control and power.",
    "Result: FDA alignment at EOP2. Trial design locked and ready for first patient.",
    "What I learned: regulatory alignment requires translating statistical complexity into clinical logic — the statistician must bridge both worlds."
  ]),

  ...qa("Describe a situation where you had to simplify a complex statistical concept for non-statisticians.", [
    "[Good options: explaining BOIN to clinical team, or OS harm monitoring to oncologists]",
    "BOIN decision table: instead of showing equations, showed a simple 3-zone traffic light (green = escalate, yellow = stay, red = de-escalate) with the actual DLT numbers per cohort size. Clinical team immediately understood.",
    "OS harm monitoring in TRIlogy-5: explained as a surveillance rule — 'if mortality excess exceeds X% difference at any review, we flag and stop'. Put it in terms oncologists understand.",
    "Key: always anchor statistics to the clinical question. The statistician who can do this earns trust with clinical colleagues and has more influence on study design."
  ]),

  ...qa("What is your greatest strength as a biostatistician?", [
    "Breadth: I can move from Bayesian dose-escalation design in the morning to regulatory submission strategy in the afternoon to ML genomic modeling — and speak credibly in each space.",
    "Full lifecycle ownership: I have delivered from Phase I first-in-human through pivotal Phase III, regulatory submission, and ODAC preparation. I understand how early statistical decisions have downstream consequences.",
    "Communication: I have presented complex statistical designs directly to FDA and EMA, written regulatory briefing documents, and explained methods to oncologists without a statistical background.",
    "Independence: as lead statistician on multiple studies simultaneously, I have learned to manage ambiguity, set priorities, and deliver under pressure."
  ]),

  // ── SECTION 5: TRICKY / PERSONAL QUESTIONS ─────────────────────────────────
  ...sectionHead("Tricky & Personal Questions"),

  ...qa("Why did you leave J&J to start BioSpark?", [
    "J&J contract ended March 2026 — natural end point. The biggest deliverable (TRIlogy-5 Phase III design, EOP2) was complete and submitted.",
    "The timing was right: 13+ years across GR, Novartis, and J&J gave me enough depth to be credible independently.",
    "BioSpark gives me variety: I can work across multiple companies and disease areas simultaneously, rather than being embedded in one franchise.",
    "Entrepreneurial ambition: I want to build consulting at the intersection of classical biostatistics and AI/ML — harder to pursue inside a large pharma structure.",
    "[Frame: running towards something, not away from something. Never sound like J&J pushed you out.]"
  ]),

  ...qa("What would your manager say about you if I reached out to them? Would they recommend you?", [
    "Yes — without hesitation. I can give you their contact directly.",
    "They would say: takes full ownership of complex deliverables — you can hand him an EOP2 briefing book or a pivotal Phase III design and trust it will be done to regulatory standard, without chasing.",
    "Technically very strong, credible in direct FDA/EMA interactions, reliable under pressure with multiple analysis milestones running in parallel.",
    "One honest development area they might mention: I sometimes get heads-down in the technical work and could communicate upward more proactively on progress and blockers.",
    "[Say this one yourself — showing a real development area builds more credibility than saying 'I work too hard'.]"
  ]),

  ...qa("Why were you not promoted to Director / Senior Principal at J&J?", [
    "Be direct, don't be defensive: 'I was Principal Statistician for 3 years. Director promotion in pharma typically requires 3-4+ years at level and at least one full annual review cycle.'",
    "I joined February 2023 and left March 2026 — the promotion timeline hadn't fully completed. The contract ended before the next cycle.",
    "Remote, France-based: reduced day-to-day visibility compared to US/Belgium-based colleagues — that matters for internal advancement.",
    "Honest add: once I had decided to build BioSpark, I focused on delivering the work (TRIlogy-5, EOP2) rather than internal positioning.",
    "[Do not over-explain or apologise. State it cleanly and redirect to what you delivered. The interviewer respects honesty over excuses.]"
  ]),

  ...qa("What is your hourly / day rate?", [
    "Don't anchor low and don't give a number immediately — frame the engagement first.",
    "'My rate depends on the scope, duration, and type of engagement: short deliverable vs ongoing program statistician vs regulatory advisory.'",
    "Market reference for senior oncology biostatistics consultants (Principal/Director level) in Western Europe: roughly 150-250 EUR/hour or 1,200-2,000 EUR/day. Regulatory advisory (EOP2, ODAC prep, Phase III design) commands the upper end.",
    "'I would rather align on scope and value first — I am happy to discuss commercial terms once we understand what the engagement looks like.'",
    "If pushed for a number: give the upper part of the range. You can always negotiate down; you cannot negotiate up.",
    "[Note: fill in your actual target rate here once decided. Never accept the first number offered without a counter.]"
  ]),

  // ── SECTION 6: BLANK TEMPLATES ──────────────────────────────────────────────
  ...sectionHead("Additional Questions — To Fill"),

  ...qaTemplate("[QUESTION]"),
  ...qaTemplate("[QUESTION]"),
  ...qaTemplate("[QUESTION]"),
];

// ─────────────────────────────────────────────────────────────────────────────
const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: PAGE_W, height: 16838 },
        margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN }
      }
    },
    headers: {
      default: new Header({ children: [
        new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: "CONFIDENTIAL — FAQ Prepared Answers — Mohamed Amine Bayar, PhD", size: 14, font: FONT, color: "888888" })]
        })
      ]})
    },
    footers: {
      default: new Footer({ children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Page ", size: 14, font: FONT, color: "888888" }),
            new TextRun({ children: [PageNumber.CURRENT], size: 14, font: FONT, color: "888888" }),
          ]
        })
      ]})
    },
    children
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('C:/Users/bayar/Documents/cv-biospark/warroom/Interview_FAQ.docx', buf);
  console.log('Interview_FAQ.docx written OK');
});
