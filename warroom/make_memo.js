const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  VerticalAlign, PageOrientation, LevelFormat
} = require('C:/Users/bayar/AppData/Roaming/npm/node_modules/docx');

// ── Colour palette ──────────────────────────────────────────────────────────
const NAVY   = "1F3864";   // section header bg
const LBLUE  = "BDD7EE";   // column header bg
const LLBLUE = "DEEAF1";   // alternating row
const WHITE  = "FFFFFF";
const NONE   = "FFFFFF";

// ── Helpers ──────────────────────────────────────────────────────────────────
const FONT = "Arial";

function border(color = "AAAAAA") {
  const b = { style: BorderStyle.SINGLE, size: 1, color };
  return { top: b, bottom: b, left: b, right: b };
}

function noBorder() {
  const b = { style: BorderStyle.NONE, size: 0, color: WHITE };
  return { top: b, bottom: b, left: b, right: b };
}

// cell padding (internal)
const PAD = { top: 60, bottom: 60, left: 100, right: 100 };

function cell(text, opts = {}) {
  const {
    bold = false, size = 16, fill = WHITE, colspan = 1,
    align = AlignmentType.LEFT, valign = VerticalAlign.CENTER,
    color = "000000", italic = false
  } = opts;

  // split on \n to allow multi-line cell content
  const lines = String(text).split('\n');
  const children = lines.map((line, i) =>
    new Paragraph({
      spacing: { before: 0, after: i < lines.length - 1 ? 40 : 0 },
      children: [new TextRun({ text: line, bold, size, font: FONT, color, italics: italic })]
    })
  );

  return new TableCell({
    columnSpan: colspan,
    verticalAlign: valign,
    borders: border("CCCCCC"),
    margins: PAD,
    shading: { fill, type: ShadingType.CLEAR },
    width: opts.width ? { size: opts.width, type: WidthType.DXA } : undefined,
    children
  });
}

function sectionHeader(text, totalWidth) {
  return new Table({
    width: { size: totalWidth, type: WidthType.DXA },
    columnWidths: [totalWidth],
    rows: [new TableRow({ children: [
      new TableCell({
        borders: noBorder(),
        shading: { fill: NAVY, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({
          children: [new TextRun({ text, bold: true, size: 20, font: FONT, color: WHITE })]
        })]
      })
    ]})]
  });
}

function spacer() {
  return new Paragraph({ spacing: { before: 100, after: 100 }, children: [] });
}

// ── Document geometry ────────────────────────────────────────────────────────
// A4: 11906 x 16838 DXA  |  margins: top/bottom 680 (≈1.2cm), left/right 680
const MARGIN = 680;
const PAGE_W = 11906;
const TW = PAGE_W - MARGIN * 2;  // 10546

// Column widths for study tables (4 cols)
const W_STUDY  = 1600;
const W_ROLE   = 1900;
const W_NUMS   = 3200;
const W_DID    = TW - W_STUDY - W_ROLE - W_NUMS;  // 3846

// Column widths for methods table (2 cols)
const W_METH   = 2200;
const W_MDEF   = TW - W_METH;  // 8346

// Column widths for compounds table (3 cols)
const W_COMP   = 1600;
const W_CTARG  = 2000;
const W_CSTAT  = TW - W_COMP - W_CTARG;  // 6946

function colHeader(labels, widths) {
  return new TableRow({
    tableHeader: true,
    children: labels.map((l, i) =>
      new TableCell({
        borders: border("888888"),
        shading: { fill: LBLUE, type: ShadingType.CLEAR },
        margins: PAD,
        width: { size: widths[i], type: WidthType.DXA },
        children: [new Paragraph({
          children: [new TextRun({ text: l, bold: true, size: 16, font: FONT, color: "000000" })]
        })]
      })
    )
  });
}

function studyRow(cols, shade = false) {
  const fill = shade ? LLBLUE : WHITE;
  const [study, role, nums, did] = cols;
  return new TableRow({ children: [
    cell(study, { size: 15, bold: true,  fill, width: W_STUDY }),
    cell(role,  { size: 15, italic: true, fill, width: W_ROLE }),
    cell(nums,  { size: 15, fill, width: W_NUMS }),
    cell(did,   { size: 15, fill, width: W_DID }),
  ]});
}

// ── Main document ────────────────────────────────────────────────────────────
const sections = [];

// ── TITLE BLOCK ──────────────────────────────────────────────────────────────
const titleBlock = new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: [TW],
  rows: [new TableRow({ children: [new TableCell({
    borders: noBorder(),
    shading: { fill: NAVY, type: ShadingType.CLEAR },
    margins: { top: 120, bottom: 120, left: 200, right: 200 },
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "INTERVIEW QUICK REFERENCE  ·  Mohamed Amine Bayar, PhD", bold: true, size: 28, font: FONT, color: WHITE })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 60 },
        children: [new TextRun({ text: "13 yrs · Oncology & Hematology · J&J | Novartis | Gustave Roussy · PhD Paris-Saclay · Patent WO2018002385A1 · 15+ pubs / 1200+ citations", size: 16, font: FONT, color: "BDD7EE" })]
      }),
    ]
  })]})]
});

// ── J&J SECTION ──────────────────────────────────────────────────────────────
const jjTable = new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: [W_STUDY, W_ROLE, W_NUMS, W_DID],
  rows: [
    colHeader(["Study", "My Role", "Key Numbers", "What I Did / Owned"], [W_STUDY, W_ROLE, W_NUMS, W_DID]),
    studyRow(["MARIPOSA-2\nNSCLC Ph III",
              "TFL contributor\n(not lead)",
              "PFS HR 0.44 (ALC vs chemo)\nMedian 8.3 vs 4.2 m\nORR 63% vs 36%",
              "KM plots, forest plots, safety tables in R (QC of SAS outputs). AnnOncol 2024."]),
    studyRow(["CARTITUDE-2\nMM Ph II",
              "Lead statistician\n(7 cohorts)",
              "MRD neg (10⁻⁵) primary (cohorts A/B/D/E/F)\nG: sustained MRD negativity\nSingle-arm; Clopper-Pearson CIs",
              "SAP amendments, TFL shells, IDMC reports. CRO statistical oversight on an FSP from Cytel."], true),
    studyRow(["CARTITUDE-4\nMM Ph III",
              "ODAC prep\ncontributor",
              "PFS HR 0.26 (cilta-cel vs SOC)\nUpdated OS HR 0.55 (P=0.0009)\nODAC March 2024: KM curves crossed early (14% vs 12% mortality at ~6m); long-term OS benefit clear; RMST +4.7m net gain; vote 11-0",
              "Subgroup PFS forest plots, time-to-response KMs, MRD landmark analyses. ODAC March 2024."]),
    studyRow(["MajesTEC-5\nNDMM Ph II",
              "Lead statistician\n(13 cohorts)",
              "100% MRD neg (35/35 evaluable)\nASH 2024; Tec+DRd/DVRd\n3-arm (weekly/monthly dosing)",
              "SAP, TFL shells, induction milestone CSR. Managed complex multi-stage analysis."], true),
    studyRow(["TRIlogy-5\nRRMM Ph III",
              "Lead stat\n(design → EOP2)",
              "N=700; dual primary CR+PFS\nRamantamig vs teclistamab\nNot yet recruiting",
              "Protocol stat sections, sample size, event re-estimation, OS harm monitoring. EOP2 briefing book. Direct FDA+EMA interactions."]),
    studyRow(["TRIlogy-2\nMM Ph Ib",
              "Lead statistician",
              "BOIN design; 5 regimens (A–E)\nN=140; NCT06768489\nRecruiting Dec 2024",
              "BOIN design + simulation, SAP, protocol stat section, monthly safety outputs for SET."], true),
  ]
});

// ── NOVARTIS SECTION ─────────────────────────────────────────────────────────
const novaTable = new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: [W_STUDY, W_ROLE, W_NUMS, W_DID],
  rows: [
    colHeader(["Study", "My Role", "Key Numbers / Design", "What I Did / Owned"], [W_STUDY, W_ROLE, W_NUMS, W_DID]),
    studyRow(["ASC4MORE\nCML-CP Ph II",
              "Lead statistician\n(primary analysis)",
              "4-arm 1:1:1:1; N=84\nMR4.5 @W48: Asc40+IMA 19% vs IMA 0%\nCumulative MR4.5 by W96: Asc 29% vs IMA 10%",
              "SAP, TFL shells, CSR. Full statistical delivery of 4-arm Phase II. Supported Scemblix FDA/EMA approval evidence base."]),
    studyRow(["ASC4KIDS\nCML Pediatric",
              "Lead stat\n(design + reg)",
              "Phase Ib/II; N≈44; 14 countries\nPK-bridging + BLRM safety monitoring\nPIP (EMA) + iPSP (FDA)",
              "BLRM prior calibration, simulation report, PIP+iPSP regulatory submissions. OncoBayes2 R package."], true),
    studyRow(["PMX Rotation\n(6 months)",
              "Embedded PMX\n(secondment)",
              "nlmixr R package\nPKPD + TGI modeling\nAsciminib program",
              "Population PK, PKPD modeling, tumor growth inhibition simulation. Insights fed into pediatric PK bridging rationale."]),
  ]
});

// ── GUSTAVE ROUSSY SECTION ────────────────────────────────────────────────────
const W_GR1 = 1700;
const W_GR2 = 1500;
const W_GR3 = TW - W_GR1 - W_GR2;  // 7346
const grTable = new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: [W_GR1, W_GR2, W_GR3],
  rows: [
    colHeader(["Study / Program", "Tumor / Type", "Role & Key Output"], [W_GR1, W_GR2, W_GR3]),
    new TableRow({ children: [
      cell("POP\nPh II RCT", { size: 15, bold: true, width: W_GR1 }),
      cell("Early breast\n(HR+/HER2-)", { size: 15, width: W_GR2 }),
      cell("Lead stat. 74 palbociclib vs 26 control. Primary: lnKi67<1 at D15 (58% vs 12%, p<0.001). AnnOncol 2018 — 2nd author.", { size: 15, fill: LLBLUE, width: W_GR3 }),
    ]}),
    new TableRow({ children: [
      cell("CHIPASTIN\nPh I", { size: 15, bold: true, width: W_GR1, fill: LLBLUE }),
      cell("Ovarian cancer", { size: 15, fill: LLBLUE, width: W_GR2 }),
      cell("Lead stat. Dual-agent Bayesian CRM (Wang-Ivanova). MTD estimation.", { size: 15, fill: LLBLUE, width: W_GR3 }),
    ]}),
    new TableRow({ children: [
      cell("IGRT-P\nPh III RCT", { size: 15, bold: true, width: W_GR1 }),
      cell("Prostate", { size: 15, width: W_GR2 }),
      cell("Primary stat. Full analysis lifecycle. Red Journal (IJROBP) — 2nd author.", { size: 15, fill: LLBLUE, width: W_GR3 }),
    ]}),
    new TableRow({ children: [
      cell("SAFIR02 + MAPPYACTS", { size: 15, bold: true, width: W_GR1, fill: LLBLUE }),
      cell("NSCLC / Pediatric\n(platform)", { size: 15, fill: LLBLUE, width: W_GR2 }),
      cell("Substantial contributor. Fully automated TFL pipelines for IDMC meetings. PhD Part 3: optimal analysis of platform trials.", { size: 15, fill: LLBLUE, width: W_GR3 }),
    ]}),
    new TableRow({ children: [
      cell("TNBC ML Patent", { size: 15, bold: true, width: W_GR1 }),
      cell("TNBC (translational)", { size: 15, width: W_GR2 }),
      cell("Full pipeline: gene expression → fRMA normalization → cross-platform merging → ML model → internal+external validation. Patent WO2018002385A1. AnnOncol.", { size: 15, fill: LLBLUE, width: W_GR3 }),
    ]}),
    new TableRow({ children: [
      cell("PhD (3 papers)\nParisS 2016–2019", { size: 15, bold: true, width: W_GR1, fill: LLBLUE }),
      cell("Methodology\n(rare disease trials)", { size: 15, fill: LLBLUE, width: W_GR2 }),
      cell("Stat Methods in Med Res 2019 (1st); Statistics in Medicine 2016 (1st); CMPB 2019 — CRM2DIM SAS macro (1st). Mayo Clinic visiting scientist.", { size: 15, fill: LLBLUE, width: W_GR3 }),
    ]}),
  ]
});

// ── METHODS FLASH REFERENCE ───────────────────────────────────────────────────
const W_M1 = 1700;
const W_M2 = TW - W_M1;
const methodsTable = new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: [W_M1, W_M2],
  rows: [
    colHeader(["Method", "What to know — cold in 30 seconds"], [W_M1, W_M2]),
    new TableRow({ children: [
      cell("BOIN", { bold: true, size: 15, width: W_M1 }),
      cell("Bayesian Optimal Interval. Pre-specified decision table (λ_e, λ_d based on target DLT φ). Dose up/stay/down. FDA-endorsed 2019. Model-assisted (simpler than BLRM, better than 3+3). BOIN R package.", { size: 15, fill: LLBLUE, width: W_M2 }),
    ]}),
    new TableRow({ children: [
      cell("BLRM / EWOC", { bold: true, size: 15, fill: LLBLUE, width: W_M1 }),
      cell("Bayesian logistic regression model. EWOC = Escalation With Overdose Control (keeps P(dose > MTD) ≤ 25%). Model-based → posterior updates with each cohort. OncoBayes2 R. Used in ASC4KIDS safety monitoring.", { size: 15, fill: LLBLUE, width: W_M2 }),
    ]}),
    new TableRow({ children: [
      cell("Group sequential / GSD", { bold: true, size: 15, width: W_M1 }),
      cell("Planned interim analyses with α-spending (O'Brien-Fleming, Lan-DeMets). Controls overall Type I error. Can stop early for efficacy, futility, or harm. rpact / gsDesign / EAST. Used in MARIPOSA-2 (OS) and TRIlogy-5 (PFS+OS).", { size: 15, fill: LLBLUE, width: W_M2 }),
    ]}),
    new TableRow({ children: [
      cell("Event re-estimation", { bold: true, size: 15, fill: LLBLUE, width: W_M1 }),
      cell("Adaptive adjustment of target event count based on blinded interim data. Preserves Type I error. Used in TRIlogy-5 Phase III design.", { size: 15, fill: LLBLUE, width: W_M2 }),
    ]}),
    new TableRow({ children: [
      cell("ICH E9(R1)\nEstimand", { bold: true, size: 15, width: W_M1 }),
      cell("Defines treatment effect to be estimated: Population + Endpoint + Intercurrent events (treatment policy / hypothetical / composite / while on treatment) + Summary measure. Align objective ↔ design ↔ analysis.", { size: 15, fill: LLBLUE, width: W_M2 }),
    ]}),
    new TableRow({ children: [
      cell("MRD negativity", { bold: true, size: 15, fill: LLBLUE, width: W_M1 }),
      cell("Minimal Residual Disease. NGS or NGF at 10⁻⁵ sensitivity. Requires adequate bone marrow aspirate. Evaluability denominator critical (ITT vs evaluable). Used as primary endpoint in CARTITUDE-2, MajesTEC-5.", { size: 15, fill: LLBLUE, width: W_M2 }),
    ]}),
    new TableRow({ children: [
      cell("EOP2 Meeting", { bold: true, size: 15, width: W_M1 }),
      cell("FDA Type B meeting before pivotal Phase III start. Sponsor presents design, estimand, SAP, sample size. FDA alignment de-risks BLA. Conducted for TRIlogy-5. EMA equivalent: Scientific Advice.", { size: 15, fill: LLBLUE, width: W_M2 }),
    ]}),
  ]
});

// ── COMPOUNDS QUICK REFERENCE ─────────────────────────────────────────────────
const W_C1 = 1800;
const W_C2 = 2600;
const W_C3 = TW - W_C1 - W_C2;
const compTable = new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: [W_C1, W_C2, W_C3],
  rows: [
    colHeader(["Compound", "Class / Target", "Indication & Status"], [W_C1, W_C2, W_C3]),
    new TableRow({ children: [
      cell("Ramantamig\n(JNJ-79635322)", { bold: true, size: 15, width: W_C1 }),
      cell("Trispecific Ab (first-in-class)\nBCMA × GPRC5D × CD3", { size: 15, fill: LLBLUE, width: W_C2 }),
      cell("R/R MM. In development. Phase 1 RP2D: 100mg Q4W SC. ORR 100%, ≥CR 70% in BCMA/GPRC5D-naive (ASCO 2025). Phase III TRIlogy-5 starting.", { size: 15, fill: LLBLUE, width: W_C3 }),
    ]}),
    new TableRow({ children: [
      cell("Teclistamab\n(Tecvayli)", { bold: true, size: 15, fill: LLBLUE, width: W_C1 }),
      cell("Bispecific Ab\nBCMA × CD3", { size: 15, fill: LLBLUE, width: W_C2 }),
      cell("R/R MM. FDA approved 2022. Active comparator in TRIlogy-5. Backbone in MajesTEC-5, TRIlogy-2.", { size: 15, fill: LLBLUE, width: W_C3 }),
    ]}),
    new TableRow({ children: [
      cell("Cilta-cel\n(CARVYKTI)", { bold: true, size: 15, width: W_C1 }),
      cell("CAR-T cell therapy\nBCMA-directed", { size: 15, fill: LLBLUE, width: W_C2 }),
      cell("R/R MM. FDA approved (LEGEND-2 / CARTITUDE-1). CARTITUDE-4: vs SOC in lena-refractory 1–3 prior lines (HR 0.26, PFS). ODAC 11-0 vote March 2024.", { size: 15, fill: LLBLUE, width: W_C3 }),
    ]}),
    new TableRow({ children: [
      cell("Amivantamab\n(RYBREVANT)", { bold: true, size: 15, fill: LLBLUE, width: W_C1 }),
      cell("Bispecific Ab\nEGFR × MET", { size: 15, fill: LLBLUE, width: W_C2 }),
      cell("NSCLC (EGFR exon 20 ins + post-osimertinib). FDA approved. MARIPOSA-2: +chemo vs chemo (PFS HR 0.48 AC, 0.44 ALC).", { size: 15, fill: LLBLUE, width: W_C3 }),
    ]}),
    new TableRow({ children: [
      cell("Asciminib\n(Scemblix)", { bold: true, size: 15, width: W_C1 }),
      cell("STAMP inhibitor (first-in-class)\nABL myristoyl pocket", { size: 15, fill: LLBLUE, width: W_C2 }),
      cell("CML-CP (Ph+). FDA approved Nov 2021, EMA Aug 2022. ASC4MORE (4-arm Ph II, imatinib non-DMR) + ASC4KIDS (pediatric PK bridging).", { size: 15, fill: LLBLUE, width: W_C3 }),
    ]}),
  ]
});

// ── ASSEMBLE ──────────────────────────────────────────────────────────────────
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
          children: [new TextRun({ text: "CONFIDENTIAL — Interview Prep — Mohamed Amine Bayar", size: 14, font: FONT, color: "888888" })]
        })
      ]})
    },
    children: [
      titleBlock, spacer(),
      sectionHeader("J&J / JANSSEN — ONCOLOGY & HEMATOLOGY  ·  Feb 2023 – Mar 2026  ·  Principal Statistician", TW),
      jjTable, spacer(),
      sectionHeader("NOVARTIS — CML PORTFOLIO (SCEMBLIX)  ·  Nov 2019 – Jan 2023  ·  Senior Principal Statistician", TW),
      novaTable, spacer(),
      sectionHeader("GUSTAVE ROUSSY CANCER CENTER  ·  Mar 2013 – Oct 2019  ·  Statistician", TW),
      grTable, spacer(),
      sectionHeader("STATISTICAL METHODS — FLASH REFERENCE", TW),
      methodsTable, spacer(),
      sectionHeader("COMPOUNDS QUICK REFERENCE", TW),
      compTable,
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('C:/Users/bayar/Documents/cv-biospark/warroom/Interview_Memo.docx', buf);
  console.log('Interview_Memo.docx written OK');
});
