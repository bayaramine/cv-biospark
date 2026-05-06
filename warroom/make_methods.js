const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, BorderStyle, WidthType, ShadingType,
  VerticalAlign, PageNumber, LevelFormat, PageBreak
} = require('C:/Users/bayar/AppData/Roaming/npm/node_modules/docx');

// ── Palette ───────────────────────────────────────────────────────────────────
const FONT = "Arial";
const WHITE = "FFFFFF";
// Per-method accent colours
const COLORS = {
  boin:     { bg: "1F3864", light: "D6E4F0" },  // navy
  blrm:     { bg: "1F5C45", light: "D5EFE5" },  // dark green
  gsd:      { bg: "4A235A", light: "EDE2F5" },  // purple
  reest:    { bg: "7B3F00", light: "FAE5D3" },  // brown/amber
  estimand: { bg: "154360", light: "D4E6F1" },  // dark blue
  mrd:      { bg: "641E16", light: "FADBD8" },  // dark red
  eop2:     { bg: "2C3E50", light: "D5D8DC" },  // slate
};
const SUBHEAD_BG = "2E75B5"; // consistent sub-header across all methods

const MARGIN = 600;
const PAGE_W = 11906;
const TW = PAGE_W - MARGIN * 2; // 10706

// ── Borders ───────────────────────────────────────────────────────────────────
function nb() {
  const b = { style: BorderStyle.NONE, size: 0, color: WHITE };
  return { top: b, bottom: b, left: b, right: b };
}
function thin() {
  const b = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
  return { top: b, bottom: b, left: b, right: b };
}

function spacer(pts = 80) {
  return new Paragraph({ spacing: { before: 0, after: pts }, children: [] });
}

// ── Method title bar ──────────────────────────────────────────────────────────
function methodTitle(name, subtitle, bgColor) {
  return [
    new Table({
      width: { size: TW, type: WidthType.DXA },
      columnWidths: [TW],
      rows: [new TableRow({ children: [new TableCell({
        borders: nb(),
        shading: { fill: bgColor, type: ShadingType.CLEAR },
        margins: { top: 120, bottom: 120, left: 180, right: 180 },
        children: [
          new Paragraph({ children: [new TextRun({ text: name, bold: true, size: 26, font: FONT, color: WHITE })] }),
          new Paragraph({ spacing: { before: 30 }, children: [new TextRun({ text: subtitle, size: 16, font: FONT, color: "D0D8E0", italics: true })] }),
        ]
      })]})]
    }),
  ];
}

// ── Sub-section header ────────────────────────────────────────────────────────
function subHead(text, lightColor) {
  return new Table({
    width: { size: TW, type: WidthType.DXA },
    columnWidths: [TW],
    rows: [new TableRow({ children: [new TableCell({
      borders: nb(),
      shading: { fill: lightColor, type: ShadingType.CLEAR },
      margins: { top: 60, bottom: 60, left: 160, right: 160 },
      children: [new Paragraph({ children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 16, font: FONT, color: "000000" })] })]
    })]})]
  });
}

// ── Bullet list ───────────────────────────────────────────────────────────────
// items: array of strings OR { text, bold: true } objects or { text, sub: true } for sub-bullets
function bullets(items) {
  return items.map(item => {
    const isStr = typeof item === 'string';
    const text = isStr ? item : item.text;
    const isBold = !isStr && item.bold;
    const isSub = !isStr && item.sub;
    const indent = isSub ? 640 : 340;
    const hang = 220;
    const dot = isSub ? "  ◦  " : "  •  ";
    const sz = isSub ? 15 : 16;

    // Split on \n within a bullet to allow inline bold/normal mixed lines
    const parts = text.split('||');  // use || as bold separator inline
    const runs = [];
    parts.forEach((p, i) => {
      const strong = i % 2 === 1; // odd parts are bold
      runs.push(new TextRun({ text: p, size: sz, font: FONT, bold: strong || isBold, color: "000000" }));
    });

    return new Paragraph({
      spacing: { before: 30, after: 30 },
      indent: { left: indent, hanging: hang },
      children: [
        new TextRun({ text: dot, size: sz, font: FONT, bold: true, color: SUBHEAD_BG }),
        ...runs,
      ]
    });
  });
}

// ── Full method block ─────────────────────────────────────────────────────────
function method(name, subtitle, colorKey, sections) {
  // sections: array of { head, items }
  const c = COLORS[colorKey];
  const nodes = [
    ...methodTitle(name, subtitle, c.bg),
    spacer(0),
  ];
  for (const sec of sections) {
    nodes.push(subHead(sec.head, c.light));
    nodes.push(...bullets(sec.items));
    nodes.push(spacer(30));
  }
  nodes.push(spacer(100));
  return nodes;
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT
// ─────────────────────────────────────────────────────────────────────────────
const children = [

  // ── BOIN ──────────────────────────────────────────────────────────────────
  ...method("BOIN — Bayesian Optimal Interval Design", "Phase I dose-escalation · Model-assisted · FDA-endorsed 2019", "boin", [
    {
      head: "The Math & Core Mechanism",
      items: [
        "Boundaries derived by minimising expected loss under a Bayesian framework. Two critical values: ||λ_e|| (escalation) and ||λ_d|| (de-escalation) — both fixed before trial starts from φ, φ_1, φ_2.",
        "λ_e = log[(1−φ_1)/(1−φ)] / log[φ(1−φ_1)/φ_1(1−φ)] — lower; λ_d = log[(1−φ)/(1−φ_2)] / log[φ_2(1−φ)/φ(1−φ_2)] — upper. Computed once at design; never updated in-trial.",
        "Decision at each cohort: p̂ ≤ λ_e → escalate; p̂ ≥ λ_d → de-escalate; between → stay.",
        "||MTD selection (post-trial):|| isotonic regression (PAVA algorithm) on all DLT data across dose levels — select dose whose isotonically-smoothed DLT rate is closest to φ.",
      ]
    },
    {
      head: "Key Parameters — Know Cold",
      items: [
        "Default target DLT rate ||φ = 0.25||; defaults: φ_1 = 0.6φ = 0.15, φ_2 = 1.4φ = 0.35 (tuning parameters in BOIN R package).",
        "Dose elimination rule: ||Pr(true DLT rate > φ | data) > 0.95|| — dose and all higher eliminated. Prevents escalating into toxicity.",
        "Cohort size: default = 3; minimum ||6 patients per dose level|| before MTD selection is reliable.",
        "Trial typically 30–60 patients; typical DLT window = Cycle 1 (21–28 days) — window definition critically affects evaluability.",
      ]
    },
    {
      head: "Regulatory Angle",
      items: [
        "||FDA Project Optimus (2023 draft)|| encourages model-assisted designs over 3+3 for oncology dose optimisation; CDER reviewers expect explicit justification if 3+3 is used.",
        "FDA ||Complex Innovative Trial Designs (CID) Pilot|| program guidance (2020): BOIN listed as acceptable model-assisted design — sponsors can request Type B CID meeting for BOIN trials.",
        "||Operating characteristics (OC) tables required:|| % correct MTD selection, % patients treated at MTD, % overdosing across ≥1000 simulated trials under multiple true DLT scenarios.",
      ]
    },
    {
      head: "Sharp Details — What Separates Experts",
      items: [
        "||BOIN is model-assisted, not model-based:|| decision table pre-computed at design; no real-time posterior updates. This is why it's accepted without MCMC implementation — decisions are auditable look-up rules.",
        "Interviewer trap — \"||Is BOIN Bayesian?||\" → correct answer: boundaries derived from a Bayesian loss function minimisation, but real-time decisions are frequentist rule-based (no posterior update at each cohort).",
        "The ||PAVA (isotonic regression) MTD selection|| step is frequently skipped or misapplied. Picking the dose with most patients treated ≠ MTD selection — this is wrong when observed DLT rates are non-monotone.",
        "Know the variants: ||BOIN vs BOIN-ET|| (efficacy-toxicity co-primary) ||vs BOIN12|| (multiple toxicity grades) — stating the wrong variant in an interview is a major red flag.",
        "R: `BOIN` package (Ying Yuan, CRAN) — `get.boundary()` generates the table; `select.mtd()` runs isotonic regression. Web tool: ||trialdesign.org|| (FDA-referenced).",
      ]
    },
  ]),

  // ── BLRM / EWOC ────────────────────────────────────────────────────────────
  ...method("BLRM / EWOC — Bayesian Logistic Regression Model", "Phase I dose-finding · Model-based · Overdose control · Adult-to-pediatric bridging", "blrm", [
    {
      head: "The Math & Core Mechanism",
      items: [
        "Dose-toxicity curve: ||logit[Pr(DLT|d)] = log(α) + β·log(d/d*)||. α = DLT probability at reference dose d*. β > 0 enforces monotonicity. d* = reference dose (typically geometric mean of dose range).",
        "Prior on (log α, log β): ||bivariate normal||, typically centred at (log 0.1, log 1). Prior effective sample size (ESS) set to 1–2 pseudo-observations — weakly informative to avoid constraining early escalation.",
        "||EWOC constraint:|| Pr(Pr(DLT|d_next) > TGDLT | current data) ≤ 0.25 — escalation allowed only if posterior probability of overdose is ≤ 25%. Computed via MCMC at each decision.",
        "||Posterior updated|| with each cohort via MCMC (Stan/JAGS). MTD = posterior median dose satisfying Pr(DLT) = target (typically 0.33 for monotherapy in oncology).",
      ]
    },
    {
      head: "Key Parameters — Know Cold",
      items: [
        "TGDLT: ||0.33|| for single-agent cytotoxics; ||0.25 or 0.16|| for combinations with overlapping toxicities — the most design-sensitive parameter.",
        "EWOC feasibility bound: ||0.25|| (default) — probability of true DLT exceeding target at next dose must stay below 25%.",
        "Elimination threshold: Pr(DLT rate > TGDLT + 0.10 | data) > ||0.95|| → dose eliminated (Neuenschwander et al. 2008 parameterisation).",
        "Prior ESS: target 1–2 pseudo-obs. Too informative (ESS >5) = prior dominates early decisions. Too vague = posterior instability.",
      ]
    },
    {
      head: "Regulatory Angle",
      items: [
        "||Neuenschwander, Branson & Gsponer (2008, Statistics in Medicine)|| — foundational reference; FDA reviewers specifically ask for this citation when BLRM is in the design.",
        "||EMA OWP 2017 reflection paper|| on early-phase dose-finding: pre-specified priors required; prior sensitivity analyses mandatory; OC tables needed (same as BOIN).",
        "In ||PIP (EMA) and iPSP (FDA)|| pediatric oncology programs: BLRM used for safety monitoring when full efficacy extrapolation from adults is accepted — as in ASC4KIDS. Prior calibrated from adult data.",
      ]
    },
    {
      head: "Sharp Details — What Separates Experts",
      items: [
        "||Identifiability issue with small samples:|| with <6 DLT events, the β (slope) parameter is barely identified — posterior driven almost entirely by the prior. Prior sensitivity analysis is non-negotiable, not optional.",
        "||2D BLRM for combinations|| adds interaction: logit[Pr(DLT|d1,d2)] = log(α) + β1·log(d1/d1*) + β2·log(d2/d2*) + ||γ·log(d1/d1*)·log(d2/d2*)||. γ > 0 signals synergistic toxicity. Relevant for combination Phase I.",
        "Reference dose d* trap: setting d* to the starting dose when early dose levels are skipped causes numerical instability in the log transform. ||Best practice: geometric mean of the dose range||.",
        "R packages: ||OncoBayes2|| (Novartis open-source, Stan-based, most current industry standard); ||RBesT|| for prior elicitation and ESS calculation; `PROC MCMC` in SAS for custom implementations.",
        "Interviewer: \"||Why EWOC over CRM?||\" → EWOC has an explicit pre-specified overdose constraint interpretable to clinical teams and regulators. CRM optimises MTD accuracy but lacks the transparent guardrail.",
      ]
    },
  ]),

  // ── GSD ──────────────────────────────────────────────────────────────────────
  ...method("Group Sequential Designs (GSD) — Interim Analyses with α-Spending", "Phase II/III · Efficacy / futility / harm monitoring · Type I error control", "gsd", [
    {
      head: "The Math & Core Mechanism",
      items: [
        "Test statistic at look k: ||Z_k = B(t_k)/√(t_k)||; t_k = information fraction (events_k / planned events for TTE). Consecutive Z_k are correlated: Cov(Z_j, Z_k) = √(t_j / t_k) for j < k.",
        "||α-spending function f(t)||: O'Brien-Fleming: f(t) = 2[1 − Φ(z_α/2 / √t)] — very conservative early. Pocock: f(t) = α·log(1 + (e−1)·t) — flat (same critical value each look). Lan-DeMets: flexible OBF-type approximation.",
        "Boundary c_k derived so that incremental α spent at look k = f(t_k) − f(t_{k-1}), computed via numerical integration of the multivariate normal (Genz algorithm).",
        "||Futility:|| conditional power (CP) = Φ(−z_α + [D−d_k]·|θ̂| / [2√(D−d_k)]). CP < 20% under alternative = standard futility trigger. Binding futility = MUST stop; non-binding = may continue.",
      ]
    },
    {
      head: "Key Parameters — Know Cold",
      items: [
        "OBF 3-look boundaries (equal spacing, 2-sided α=0.05): ||~4.33 / 3.20 / 2.24||. Pocock 3-look: ||~2.36 / 2.36 / 2.36||. Memorise the OBF values — interviewers test these.",
        "MARIPOSA-2 OS interim (OBF): α spent = ||0.000197 for AC arm; 0.000138 for ALC arm|| — extremely conservative first look, as expected with early immature OS data.",
        "Futility CP threshold: ||< 20%|| under the alternative (standard convention); < 10% = near-certain futility; > 80% = trial on track, no event re-estimation needed.",
        "Information fraction = ||events-based, not calendar-time-based|| for TTE trials (FDA preference): each event = one unit of statistical information.",
      ]
    },
    {
      head: "Regulatory Angle",
      items: [
        "||FDA Adaptive Designs guidance (2019, final):|| all interim analyses pre-specified in SAP before any unblinding; post-hoc changes require documented Type I error re-analysis — this is a major finding category in FDA review.",
        "||ICH E9 (1998) + ICH E9(R1) (2019):|| all looks — including DMC-only safety reviews — must be declared. Undeclared DMC looks do not consume α but must be documented in the protocol.",
        "||EMA CHMP adaptive design guideline (2007, 2018 reflection):|| binding futility must be reflected in tighter efficacy boundaries; non-binding futility acceptable with unambiguous DMC stopping rules.",
      ]
    },
    {
      head: "Sharp Details — What Separates Experts",
      items: [
        "||OBF preserves alpha for the final analysis|| (early boundary ~4.33σ) — default choice for most Phase III oncology because it allows early stopping only for overwhelming efficacy evidence, not borderline results.",
        "Critical distinction: ||non-binding futility — trial CAN continue|| past the futility boundary (clinical/operational reasons) and Type I error is still controlled. ||Binding futility — MUST stop|| and efficacy boundaries are tighter.",
        "Common mistake: ||a DMC safety review using blinded pooled data does NOT consume α||. Only unblinded, treatment-specific efficacy looks require α-spending. Confusing these two inflates stated power.",
        "R: ||rpact|| (most complete, supports all spending functions, conditional power, adaptive re-estimation); ||gsDesign|| (industry-standard, Merck-developed). SAS: PROC SEQDESIGN / PROC SEQTEST (9.4+).",
        "Interviewer trap: \"||What happens if you take an unplanned interim?||\" → Type I error inflation. Remedy requires Müller-Schäfer conditional error approach or accepting the α hit. This is a major protocol deviation.",
      ]
    },
  ]),

  // ── Event re-estimation ────────────────────────────────────────────────────
  ...method("Event Re-estimation — Adaptive Adjustment of Target Events", "Adaptive design for TTE trials · Blinded vs unblinded · Type I error preservation", "reest", [
    {
      head: "The Math & Core Mechanism",
      items: [
        "||Schoenfeld (1981) formula — memorise:|| D = 4(z_α/2 + z_β)² / [log(HR)]². Assumes proportional hazards and 1:1 randomisation. Backbone of all event calculations in TTE oncology trials.",
        "||Blinded re-estimation:|| uses only the pooled observed event rate and/or accrual rate — no treatment-group unblinding. Type I error preserved by construction (Shih 1992). Corrects event rate / accrual assumptions only; cannot correct a wrong HR assumption.",
        "||Unblinded re-estimation:|| uses observed treatment-specific HR to update target events via conditional power. Requires DMC firewall (operational blind for sponsor). ||Cui-Hung-Wang (1999)|| method: no α penalty if adaptation is within pre-specified D_max.",
        "Conditional power for unblinded decision: CP = Φ(−z_α + (D_planned − d_interim) · |θ̂| / [2√(D_planned − d_interim)]). Promising zone (||Mehta & Pocock 2011||): increase events when 30% ≤ CP ≤ 80%.",
      ]
    },
    {
      head: "Key Parameters — Know Cold",
      items: [
        "D_max cap: typically ||1.5 × D_original||. Exceeding this cap without additional α penalty requires the Müller-Schäfer conditional error framework.",
        "Promising zone: ||30% ≤ CP ≤ 80%|| → increase events. CP < 30% → futility stop. CP > 80% → trial on track, no change needed.",
        "||Schoenfeld formula assumptions:|| PH + 1:1 randomisation + large sample. Fails under NPH (crossing KM curves) and unequal allocation — know when to switch to simulation.",
        "α penalty from unblinded look: ||Posch et al. (2003)|| showed inflation up to 0.005 with naive re-estimation. Cui-Hung-Wang method avoids this within pre-specified D_max.",
      ]
    },
    {
      head: "Regulatory Angle",
      items: [
        "||FDA Adaptive Designs 2019:|| unblinded re-estimation with independent DMC firewall is acceptable without Type I error penalty, provided adaptation rule fully pre-specified and operational blind maintained for sponsor.",
        "||EMA stance:|| blinded re-estimation preferred over unblinded; unblinded requires simulation-based Type I error confirmation. Stronger prior scrutiny than FDA.",
        "||Estimand impact:|| if re-estimation substantially changes trial duration, the censoring mechanism changes — must address in SAP. Event re-estimation ≠ sample size re-estimation (the latter is secondary in TTE trials).",
      ]
    },
    {
      head: "Sharp Details — What Separates Experts",
      items: [
        "||Blinded vs unblinded: blinded corrects event rate / accrual only.|| If the original HR assumption was wrong (e.g., assumed 0.75, actual ~0.85), blinded re-estimation cannot recover power. Only unblinded via DMC can correct this.",
        "Common mistake: ||re-estimating events using the mid-trial observed HR without DMC firewall|| = effectively unblinded re-estimation = Type I error inflation, regardless of stated intent.",
        "||Non-proportional hazards (NPH) breaks Schoenfeld:|| with MaxCombo / modestly-weighted log-rank, power depends on the weight function applied to the accruing event stream — simulation required. `gsDesign2` package handles NPH settings.",
        "R: ||rpact|| (adaptive event re-estimation, `getDesignSurvival()` with adaptive options); ||gsDesign2|| for NPH. SAS: no native PROC — custom macros required for unblinded re-estimation.",
        "Interviewer: \"||Can you increase events after seeing the HR?||\" → only if fully pre-specified, via DMC firewall, using conditional error method. If the sponsor saw unblinded data without a firewall, trial credibility is destroyed regardless of methodology.",
      ]
    },
  ]),

  // ── Estimand ───────────────────────────────────────────────────────────────
  ...method("ICH E9(R1) — Estimand Framework", "Defines what is estimated · Finalised Nov 2019 · FDA effective ~2021 · EMA required in MAAs from 2022", "estimand", [
    {
      head: "The Math & Core Mechanism",
      items: [
        "5 attributes: ||Treatment | Population | Variable (endpoint) | Intercurrent event strategy | Population-level summary measure||. All five must be specified before the estimand is complete.",
        "||5 intercurrent event (ICE) strategies:|| (1) Treatment policy: use all data regardless of ICE. (2) Hypothetical: what if ICE had not occurred? (3) Composite: ICE = bad outcome incorporated into endpoint. (4) While-on-treatment: data after ICE censored. (5) Principal stratum: restrict to subpopulation unaffected by ICE.",
        "Estimand → Estimator mapping: ||treatment policy → ITT analysis||; hypothetical → reference-based MI (J2R, CR, CIR); composite → responder analysis; while-on-treatment → censored at discontinuation.",
        "||Sensitivity analyses|| must vary the ICE strategy, not just the imputation model. E.g., if primary = treatment policy, a hypothetical sensitivity shows effect absent treatment switching.",
      ]
    },
    {
      head: "Key Parameters — Know Cold",
      items: [
        "||E9(R1) finalised Nov 2019.|| FDA effective in oncology trials ~2021. EMA required estimand section in all new MAAs from 2022 (CTD Module 2.5 and Section 5).",
        "Reference-based MI for hypothetical strategy: R ||rbmi|| package; SAS ||%refbasedmi|| (Roger & Kenward macro). Methods: J2R (jump to reference), CR (copy reference), CIR (copy increments from reference).",
        "TTE impact: ||treatment policy vs while-on-treatment|| can produce materially different HRs — the direction of difference depends on whether post-discontinuation data favours treatment or control. Know your trial.",
        "||Principal stratum ≠ per-protocol:|| PS is counterfactual (patients who would not experience ICE regardless of arm); PP excludes observed protocol deviators. Fundamentally different estimands with different bias profiles.",
      ]
    },
    {
      head: "Regulatory Angle",
      items: [
        "||FDA CDER oncology reviewers:|| \"What is your primary estimand and how does it map to your primary analysis?\" is now a standard SAP review question. A SAP without an estimand statement is considered incomplete.",
        "FDA 2023 draft PRO guidance for cancer trials: ICE strategy for treatment discontinuation must be explicitly specified as a separate estimand consideration — extends E9(R1) to PRO endpoints.",
        "||EMA EMA/CHMP/EWP/2459/02 Rev. 2 (2021 update):|| estimand required in the clinical overview. Missing estimand = deficiency letter during validation of the dossier.",
      ]
    },
    {
      head: "Sharp Details — What Separates Experts",
      items: [
        "||Treatment policy ≠ 'ignore missing data'.|| Data collection must CONTINUE after ICE (e.g., after treatment switch). Missing data is a separate problem from the ICE strategy. Conflating these two is a common interview error.",
        "\"||The estimand framework exposes what practitioners already implicitly assumed.||\" The ICH E9(R1) addendum is not a new statistical method — it is disciplined transparency. Interviewers probe whether you understand this.",
        "||Composite strategy in myeloma:|| MRD neg + PFS composite, or EFS where death/progression before MRD = treatment failure. Avoids counterfactual modeling entirely — the cleanest estimand for regulatory submissions.",
        "||Cox HR approximates the treatment policy estimand under PH.|| Under NPH (delayed effect, crossing curves), Cox HR approximates neither treatment policy nor any other clean estimand — this is why MaxCombo tests and RMST are increasingly used.",
        "Common trap: \"||FDA silence on a question = agreement.||\" Wrong. FDA silence at review = did not object at this stage, not affirmative agreement. Document this distinction in meeting minutes and the SAP.",
      ]
    },
  ]),

  // ── MRD ────────────────────────────────────────────────────────────────────
  ...method("MRD Negativity — Minimal Residual Disease Endpoint (Multiple Myeloma)", "Binary endpoint · 10⁻⁵ / 10⁻⁶ threshold · NGS / NGF assays · Evaluability denominator critical", "mrd", [
    {
      head: "The Math & Core Mechanism",
      items: [
        "||MRD threshold: 10⁻⁵|| (1 myeloma cell per 100,000 marrow cells) = regulatory minimum; ||10⁻⁶|| (1 per million) = preferred for deep response claims and BLA submissions.",
        "||NGS — clonoSEQ (Adaptive Biotechnologies):|| sequences patient-specific VDJ immunoglobulin rearrangement from diagnosis biopsy; tracks clonotype at follow-up BMA; maps variant allele frequency to absolute clone count per cells sequenced.",
        "||NGF — EuroFlow protocol:|| 8-colour flow cytometry; ≥5 million cells evaluated; aberrant plasma cells identified by immunophenotypic deviation: CD38+/CD138+/CD45−/CD19−/CD56+/−. Minimum 2 million cells for evaluability.",
        "||Sustained MRD negativity (IMWG 2016):|| two consecutive MRD-negative assessments ≥12 months apart — more stringent endpoint, increasingly used in confirmatory trials as it mitigates transient MRD negativity.",
      ]
    },
    {
      head: "Key Parameters — Know Cold",
      items: [
        "||clonoSEQ: FDA-cleared IVD since 2018|| at 10⁻⁶ for MM and ALL. Lab-developed tests (LDTs) are NOT regulatory-grade for a primary endpoint in a BLA/NDA without extensive analytical validation.",
        "||IMWG 2016 response criteria:|| NGS or NGF at 10⁻⁵ required for 'MRD-negative CR' designation. This is the cross-trial comparability standard.",
        "||Evaluability rate:|| typically 70–85% in practice. Main reasons for non-evaluability: inadequate marrow volume, hemodilution (< 20% plasma cells in differential → false negative risk).",
        "Statistical analysis: typically ||exact binomial (Clopper-Pearson) 95% CI||, or Wilson CI; CMH test or logistic regression for controlled settings. Rarely hypothesis-tested as primary in Phase II (descriptive).",
      ]
    },
    {
      head: "Regulatory Angle",
      items: [
        "||FDA 2020 draft guidance|| 'Hematologic Malignancies: Regulatory Considerations for Use of MRD': MRD accepted as primary endpoint for accelerated approval in MM. Full approval still requires PFS/OS data.",
        "||Analytical validation required in BLA:|| sensitivity, specificity, LOD, LOQ, reproducibility. clonoSEQ has a pre-existing FDA clearance letter — sponsors cross-reference it; other assays need full validation package.",
        "||EMA CHMP Scientific Advice:|| consistently requires surrogacy validation of MRD vs PFS/OS in the specific treatment line and patient population (trial-level correlation, Labopin et al. framework). More conservative than FDA.",
      ]
    },
    {
      head: "Sharp Details — What Separates Experts",
      items: [
        "||Hemodilution is the most under-discussed confounder:|| a poorly-aspirated BMA (< 20% plasma cells in differential) dilutes myeloma cells with peripheral blood, causing false MRD negativity. IMWG requires reporting hemodiluted samples as non-evaluable.",
        "||Immortal time bias:|| using MRD status assessed at 'best response' (variable time) without a fixed landmark is a fundamental statistical error. Correct approach: define a fixed landmark time point (e.g., Cycle 6 Day 1) prospectively in the SAP.",
        "||Estimand for MRD:|| patients who die or progress before BMA assessment are a major ICE. Composite strategy (death/progression before assessment = MRD positive) is the most defensible. Treatment policy requires explicit SAP language on handling early deaths.",
        "||MRD conversion (negative → positive)|| has prognostic signal but is NOT validated as a surrogate for retreatment decisions — do not conflate MRD kinetics with the binary threshold endpoint.",
        "Phase III confirmatory: ||surrogacy of MRD for PFS/OS not yet established across treatment lines.|| Primary MRD endpoint = accelerated approval tool only for now. This is the most actively contested regulatory question in myeloma biostatistics.",
      ]
    },
  ]),

  // ── EOP2 ───────────────────────────────────────────────────────────────────
  ...method("EOP2 — FDA End-of-Phase 2 Meeting", "Type B meeting · Phase III design alignment · Not legally binding but creates regulatory expectation", "eop2", [
    {
      head: "The Math & Core Mechanism (Process)",
      items: [
        "||Type B meeting (PDUFA VII, 2023–2027):|| FDA target = 30 calendar days for written-only response; or meeting within 70 calendar days of BP receipt. Timeline resets if background package (BP) is deficient.",
        "||Meeting request submitted as IND amendment.|| BP must be received ≥30 days before the meeting date. Recommended length < 50 pages (excluding appendices) — over-long BPs receive incomplete responses.",
        "||Specific, answerable questions only:|| each question should be structured as 'Does FDA agree that [specific design element] is acceptable?' Open-ended questions receive correspondingly vague answers.",
        "||SPA (21 CFR 312.82(e)):|| Special Protocol Assessment — a separate, binding FDA commitment on Phase III protocol design, endpoints, and analysis plan. Must be requested explicitly; separate submission from EOP2 minutes.",
      ]
    },
    {
      head: "Key Parameters — Know Cold",
      items: [
        "PDUFA VII timelines: ||30 days (written)|| or ||70 days (meeting)|| from BP receipt. Meeting date ≠ response date — FDA may respond in writing before the meeting.",
        "||FDA minutes issued within 30 days|| of the meeting — these are the regulatory record. Discrepancies between sponsor notes and FDA minutes → follow up with a meeting minute reconciliation letter within 30 days.",
        "||SPA vs EOP2:|| EOP2 minutes = non-binding ('FDA did not object'). SPA = binding FDA written agreement letter under 21 CFR 312.82(e). Confusing them is a material risk — sponsors have proceeded to Phase III believing they had binding agreement when they did not.",
        "||No EOP2 ≠ blocked:|| FDA does not mandate EOP2, but skipping it is a known risk factor for design disagreement at NDA/BLA review, which almost certainly triggers an Advisory Committee.",
      ]
    },
    {
      head: "Regulatory Angle",
      items: [
        "||21 CFR 312.47(b):|| codifies EOP2 as the opportunity to discuss Phase III design, endpoints, and safety concerns before pivotal study initiation.",
        "||FDA 'Formal Meetings' guidance (2009, updated 2017):|| defines meeting types (A/B/C), timelines, BP requirements, and meeting conduct. The operative document for EOP2 preparation.",
        "||FDA Project Optimus (2023):|| EOP2 equivalent for oncology is the 'Type B Dose-Optimisation Meeting' — sponsor must include RP2D justification package (not just Phase I summary) in the BP.",
      ]
    },
    {
      head: "Sharp Details — What Separates Experts",
      items: [
        "||Statistical questions that actually matter at EOP2:|| (1) primary endpoint agreement (OS vs PFS vs EFS), (2) alpha + number of planned interims, (3) stratification factors for randomisation AND primary analysis, (4) multiplicity strategy for co-primary or key secondary endpoints. Get explicit FDA agreement on all four.",
        "||'FDA silence ≠ agreement':|| FDA silence on a question in the written response = 'did not object at this stage.' Document this explicitly in the BP cover letter and revisit in the meeting.",
        "||BP must include near-final statistical content:|| estimand, sample size derivation with full assumptions (HR, event rate, dropout, median PFS), alpha-spending function. A vague protocol synopsis yields a vague FDA answer — then at NDA review, FDA says 'we never agreed to this.'",
        "||Unresolved EOP2 disagreement:|| if FDA objects to the Phase III design and the sponsor proceeds anyway, FDA raises it at NDA/BLA review. This is not a filing bar but is the primary trigger for an Advisory Committee — ODAC, ODAC, ODAC.",
        "Interviewer: \"||FDA said in EOP2 minutes 'the proposed endpoint appears acceptable' — is that an SPA?||\" → NO. 'Appears acceptable' = not objected to at this stage. SPA requires a formal separate process under 21 CFR 312.82, an explicit written agreement letter, and a 45-day FDA review clock.",
      ]
    },
  ]),
];

// ─────────────────────────────────────────────────────────────────────────────
// DOCUMENT
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
          children: [new TextRun({ text: "CONFIDENTIAL — Statistical Methods Deep-Dive — Mohamed Amine Bayar, PhD", size: 14, font: FONT, color: "888888" })]
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
  fs.writeFileSync('C:/Users/bayar/Documents/cv-biospark/warroom/Interview_Methods.docx', buf);
  console.log('Interview_Methods.docx written OK');
});
