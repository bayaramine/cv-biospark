# Warroom — Gustave Roussy (Mar 2013 – Oct 2019)

---

## STANDARD TEMPLATE

| Field | Value |
|---|---|
| **Trial name / acronym** | |
| **ClinicalTrials.gov** | NCT00000000 / Not registered |
| **Sponsor / Institution** | |
| **Study type** | Prospective / Retrospective / Translational |
| **Phase** | I / II / III / Observational |
| **Design** | e.g. Randomized 2-arm / Single-arm / Multi-arm / Platform |
| **Dose-escalation model** | N/A / 3+3 / BOIN / CRM / TITE-CRM / BLRM |
| **Blinding** | Open-label / Single-blind / Double-blind |
| **Randomization** | Yes (ratio) / No |
| **Tumor type / Indication** | e.g. TNBC, Prostate, Melanoma |
| **Patient population** | e.g. Metastatic, Early, R/R, Pediatric, NDMM, RRMM |
| **Line of treatment** | 1L / 2L / 3L+ / N/A |
| **Main drug tested** | |
| **Other drugs in the study** | |
| **Primary endpoint** | e.g. ORR, PFS, OS, MTD, DFS |
| **Key secondary endpoints** | |
| **Primary analysis method** | e.g. Kaplan-Meier, Log-rank, Cox, Exact binomial |
| **N subjects (planned / actual)** | |
| **N events (if TTE)** | |
| **N arms / cohorts** | |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | |
| **Primary endpoint result** | |
| **Key secondary results** | |
| **Main conclusion** | |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician |
| **Scope** | Primary statistician / Contributor |
| **Documents I authored** | |
| **Analysis milestones delivered** | |
| **Statistical methods I applied** | |
| **Publication** | Yes / No — Journal, Year, My position |
| **Key challenges** | |
| **What I'm proud of** | |
| **Interview Q&A** | Q: … / A: … |

---

## TRIALS INDEX

| Trial | Tumor type | Phase | Design | Status |
|---|---|---|---|---|
| POP | Breast (Early, HR+/HER2-) | II | Randomized 3:1 preoperative | ✅ Done |
| CHIPASTIN | Ovarian cancer | I | Dose-escalation (CRM) | ✅ Done |
| HPVRX | Cervical cancer | I | Dose-escalation (3+3) | ✅ Done |
| IGRT-P | Prostate | III | Randomized 2-arm | ✅ Done |
| SAFIR02-Lung | NSCLC | II | Randomized platform (2 substudies) | ✅ Done |
| MAPPYACTS | Pediatric (multi-tumor) | — | Precision medicine screening | ✅ Done |
| TNBC ML Patent | TNBC | — | Translational / ML | ✅ Done |
| BIOMECA / PIES | Pediatric ependymoma | — | Translational / Prognostic score | ✅ Done |
| SAT mCRPC | Prostate (mCRPC) | — | Translational / Body composition | ✅ Done |
| BC mCRC | Colorectal (metastatic, 1L) | — | Translational / Body composition | ✅ Done |
| Sarcopenia CRS-HIPEC | Colorectal (peritoneal carcinomatosis) | — | Translational / Prognostic | ✅ Done |
| SMM Loss NSCLC | Lung (advanced, Stage III-IV) | — | Translational / Body composition | ✅ Done |
| CCNE1 Palbociclib (PALOMA-3 + POP) | Breast (HR+/HER2-, metastatic) | III | Translational / Biomarker (JCO) | ✅ Done |
| mRCC 2L Prognostic Model | Renal cell carcinoma (metastatic, 2L) | — | Translational / Prognostic score | ✅ Done |
| BRCA NSCLC (SAFIR02-Lung sub-study) | NSCLC (advanced, EGFR/ALK WT) | — | Translational / Genomic epidemiology | ✅ Done |
| E2F4 Letrozole Resistance (POP validation) | Breast (ER+/HER2-, early) | — | Translational / Biomarker (CCR) | ✅ Done |
| PhD Paper 1 — Rare Disease Trial Series (Stat Med 2016) | Rare cancers (all types) | — | Methodology / Simulation | ✅ Done |
| PhD Paper 2 — Group Sequential Adaptive Series (SMMR 2019) | Oncology (general) | — | Methodology / Group sequential + multi-arm adaptive | ✅ Done |
| PhD Paper 3 — CRM2DIM SAS Macro (CMPB 2019) | Oncology (Phase I dual-agent) | — | Methodology / Software (Bayesian CRM) | ✅ Done |

---

## POP — PREOPERATIVE PALBOCICLIB — EARLY BREAST CANCER (PHASE II)

| Field | Value |
|---|---|
| **Trial name / acronym** | POP (Preoperative-Palbociclib) |
| **ClinicalTrials.gov** | NCT02008734 |
| **Sponsor / Institution** | Gustave Roussy (monocentric) — funded by Pfizer and Breast Cancer Research Foundation |
| **Study type** | Prospective |
| **Phase** | II |
| **Design** | Monocentric, randomized, open-label, window-of-opportunity preoperative study |
| **Dose-escalation model** | N/A |
| **Blinding** | Open-label |
| **Randomization** | Yes, 3:1 (palbociclib vs no treatment) |
| **Tumor type / Indication** | Early breast cancer (EBC) — 93% HR-positive, 8% HER2-positive |
| **Patient population** | Women with histologically proven untreated EBC, candidate for upfront surgery, irrespective of HR/HER2 status, adequate organ function |
| **Line of treatment** | Neoadjuvant / preoperative window-of-opportunity |
| **Main drug tested** | Palbociclib (CDK4/6 inhibitor) 125 mg/day orally for 14 days until day before surgery |
| **Other drugs in the study** | No treatment (control arm) |
| **Primary endpoint** | Antiproliferative response: lnKi67 < 1 at day 15 (natural log of % Ki67 IHC staining). Original co-primary (senescence/β-galactosidase) was abandoned due to technical infeasibility |
| **Key secondary endpoints** | Change from baseline in Ki67 (log-transformed); safety (CTCAE v4.0); exploratory: predictive biomarkers (IHC Ki67/RB/pRB/p16/pAKT/pER/pCDK2/CyclinD1, FISH CCND1, GE arrays, PIK3CA/AKT1 mutations) |
| **Primary analysis method** | Chi-squared test (pooled variance) for primary endpoint; ANCOVA for change from baseline in Ki67; ITT; Spearman rank correlation (pRb vs Ki67); FDR correction for GE analyses |
| **N subjects (planned / actual)** | 100 planned / 101 randomized → 100 analyzed (74 palbociclib, 26 control) |
| **N events (if TTE)** | N/A — binary and continuous endpoints |
| **N arms / cohorts** | 2 arms |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Chi-squared test for primary endpoint; ANCOVA (log-Ki67 change from baseline); Spearman rank correlation (Ki67 vs pRb changes); interaction tests for subgroup analyses; FDR correction in GE analysis |
| **Primary endpoint result** | Antiproliferative response (lnKi67 < 1): **58% palbociclib vs 12% control** (p<0.001). In HR+/HER2- subgroup: **70% vs 9%** (p<0.001). In TNBC/HER2+: 0% vs 33% — interaction p=0.002, suggesting palbociclib works specifically in HR+/HER2- |
| **Key secondary results** | Ki67 geometric mean change from baseline: palbociclib 0.31 vs control 1.18 (p<0.001). Palbociclib led to significantly greater phospho-Rb decrease vs control (p<0.001 in HR+/HER2-). Ki67 change correlated with pRb change (Spearman r=0.41, p<0.0001) — suggesting pRb modulation as mechanism. GE: 39 genes significantly changed under palbociclib (FDR<0.05), mostly proliferation genes (MKI67, TOP2A, BIRC5) and cell cycle (PLK1, FOXM1). CCNE2 expression less decreased in non-responders vs responders (p=0.006). No predictive biomarkers identified (CCND1 amplification, PIK3CA/AKT1 mutation not predictive). Safety: well tolerated, no serious AEs; 4 grade-3 events (2 neutropenia, 2 diarrhea) |
| **Main conclusion** | First randomized preoperative trial of palbociclib in EBC. 14 days of palbociclib causes extreme proliferation inhibition. Phospho-Rb decrease correlates with anti-proliferative effect — tumors without pRb modulation likely have primary CDK4/6 resistance |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Statistics and Epidemiology Unit, Gustave Roussy |
| **Scope** | |
| **Documents I authored** | |
| **Analysis milestones delivered** | |
| **Statistical methods I applied** | Chi-squared test; ANCOVA (log-Ki67); ITT analysis; Spearman correlation; interaction tests; FDR correction (GE analysis) |
| **Publication** | Yes — *Annals of Oncology*, 2018, Vol 29(8):1755–1762 — **2nd author, equal contribution** (†) |
| **Key challenges** | Co-primary endpoint (senescence via β-galactosidase) was technically infeasible in both FFPE and frozen samples — abandoned; biomarker discovery with limited sample size → low power for interaction tests |
| **What I'm proud of** | 2nd author with equal contribution on a landmark pharmacodynamic trial of palbociclib; first randomized preoperative CDK4/6 trial establishing pRb as a pharmacodynamic marker of response |
| **Interview Q&A** | Q: What was the statistical challenge in this trial? <br> A: Two main challenges: (1) the co-primary senescence endpoint had to be dropped mid-trial due to technical infeasibility — a reminder that biomarker endpoints need validation before locking a protocol; (2) the exploratory biomarker analyses were underpowered for interaction tests given the 3:1 allocation and 100 patients total — we applied FDR correction for GE analyses but flagged all interaction p-values as hypothesis-generating only. <br><br> Q: Why 3:1 allocation and not 1:1? <br> A: To maximize the number of treated patients for biomarker discovery and pharmacodynamic characterization — the control arm was only needed to demonstrate that Ki67 changes were drug-driven, not spontaneous |

---

## CHIPASTIN — HIPEC CISPLATIN + BEVACIZUMAB — OVARIAN CANCER

| Field | Value |
|---|---|
| **Trial name / acronym** | CHIPASTIN |
| **ClinicalTrials.gov** | NCT02217956 |
| **Sponsor / Institution** | Investigator-driven — 7 French comprehensive cancer centers (led by Gustave Roussy) |
| **Study type** | Prospective |
| **Phase** | I |
| **Design** | Multicenter, single-arm, dose-escalation (HIPEC cisplatin) + bevacizumab maintenance |
| **Dose-escalation model** | CRM — one-parameter logistic model, Bayesian framework, target DLT rate 20% (4 dose levels: 50, 60, 70, 80 mg/m²) |
| **Blinding** | Open-label |
| **Randomization** | No |
| **Tumor type / Indication** | Advanced stage ovarian cancer (ASOC) — epithelial, FIGO stage IIIC, initially unresectable peritoneal carcinomatosis |
| **Patient population** | Initially unresectable ASOC, aged 18–65, after 6 cycles neoadjuvant carboplatin-paclitaxel, eligible for complete cytoreductive surgery |
| **Line of treatment** | 1L (front-line, post-neoadjuvant) |
| **Main drug tested** | Cisplatin — intraperitoneal HIPEC (42°C, 60 min) |
| **Other drugs in the study** | Carboplatin (AUC5) + paclitaxel (neoadjuvant); bevacizumab 15 mg/kg q3w × 22 cycles (maintenance) — funded by Roche |
| **Primary endpoint** | DLT within 30 days after CCRS + HIPEC |
| **Key secondary endpoints** | Safety of bevacizumab maintenance; antitumor activity; DFS; OS; renal function (creatinine clearance over time) |
| **Primary analysis method** | CRM for dose-finding; Kaplan-Meier for DFS/OS; ANCOVA for renal function prognostic factors; descriptive statistics |
| **N subjects (planned / actual)** | 30 / 30 (39 screened) |
| **N events (if TTE)** | 23 progression/relapse events, 9 deaths; median DFS 16.7 months (95% CI 10.6–21.0); 2-year DFS 27%, 2-year OS 71% |
| **N arms / cohorts** | 1 arm, 4 dose-escalation cohorts — 4, 4, 5, 17 patients at 50, 60, 70, 80 mg/m² |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | CRM — one-parameter Bayesian logistic model, updated after each patient, target DLT rate 20%; ANCOVA for renal function prognostic analysis; Kaplan-Meier for DFS and OS |
| **Primary endpoint result** | 4 DLTs observed, all at 80 mg/m² (2 renal failures requiring dialysis, 1 peritonitis, 1 hemorrhage). Estimated DLT probability at 80 mg/m²: 19% (95% CI 7–38%) — closest to 20% target. However, prolonged renal impairment at week-8 in 3 additional patients led to recommending 70 mg/m² over 80 mg/m² |
| **Key secondary results** | Creatinine clearance decreased ≥30 mL/min in 15/30 patients. Baseline creatinine and pre-HIPEC diuresis were the only significant predictors of renal impairment (ANCOVA). 20/30 started bevacizumab maintenance; only 7 completed 22 cycles. Median DFS 16.7 months (95% CI 10.6–21.0); 2-year DFS 27%, 2-year OS 71% |
| **Main conclusion** | Recommended cisplatin dose for HIPEC: **70 mg/m²**. Bevacizumab maintenance appears feasible post-CCRS+HIPEC. Diuresis before HIPEC is critical to reduce renal toxicity risk |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Department of Biostatistics and Epidemiology, Gustave Roussy |
| **Scope** | |
| **Documents I authored** | |
| **Analysis milestones delivered** | |
| **Statistical methods I applied** | CRM design (Bayesian, one-parameter logistic); DLT monitoring; Kaplan-Meier (DFS, OS); ANCOVA (renal function prognostic analysis) |
| **Publication** | Yes — *Gynecologic Oncology*, 2016 — 4th author (A. Bayar) |
| **Key challenges** | |
| **What I'm proud of** | |
| **Interview Q&A** | Q: <br> A: |

---

## IGRT-P — DAILY VS WEEKLY IGRT — PROSTATE CANCER (PHASE III)

| Field | Value |
|---|---|
| **Trial name / acronym** | IGRT-P |
| **ClinicalTrials.gov** | NCT00433706 |
| **Sponsor / Institution** | French National Cancer Institute — 21 centers |
| **Study type** | Prospective |
| **Phase** | III |
| **Design** | Multicenter, open-label, randomized 2-arm (daily IGRT vs weekly IGRT) |
| **Dose-escalation model** | N/A |
| **Blinding** | Open-label |
| **Randomization** | Yes, 1:1 — minimization technique, stratified by center, D'Amico risk group, total dose (70 vs >70 Gy), planned ADT duration (≤6 vs >6 months) |
| **Tumor type / Indication** | Localized prostate adenocarcinoma (N0, no metastasis) |
| **Patient population** | N0 localized prostate cancer, ECOG eligible, no hip prostheses/pacemakers, no pelvic lymph nodes in target volume; D'Amico low/intermediate/high risk |
| **Line of treatment** | Curative (1L) |
| **Main drug tested** | Daily IGRT — prostate position verified before every fraction (CBCT, ultrasound, or fiducials) |
| **Other drugs in the study** | Weekly IGRT (verification days 1, 2, 3 then weekly); radiation 70–80 Gy (±IMRT); androgen deprivation therapy (±ADT, per risk group) |
| **Primary endpoint** | 5-year Recurrence-Free Survival (RFS) — time from randomization to biochemical PSA recurrence, clinical recurrence, or death from any cause |
| **Key secondary endpoints** | Overall survival (OS); acute and late toxicity (rectal and bladder, CTCAE v3.0); post-hoc: biochemical progression-free interval, clinical progression-free interval, other cancer-free interval |
| **Primary analysis method** | Cox model adjusted on stratification factors (RFS); Wald test for p-values; Kaplan-Meier for survival rates (Rothman formula for CIs); Fisher's exact test for acute toxicity; competing risk analysis (post-hoc) — SAS 9.3 |
| **N subjects (planned / actual)** | 470 (235/arm after protocol amendment) / 470 randomized (236 daily, 234 weekly) |
| **N events (if TTE)** | 81 RFS events (36 daily, 45 weekly); 33 deaths (22 daily, 11 weekly); median follow-up 4.1 years |
| **N arms / cohorts** | 2 arms |

**Key results:**
- RFS: no significant difference (HR=0.81, p=0.330); 5-yr RFS 77% (daily) vs 75% (weekly)
- OS: worse in daily group (HR=2.12 [1.03–4.37], p=0.042) — driven by other cancers and cardiovascular deaths
- Biochemical PFS: better in daily group (HR=0.45 [0.25–0.80], p=0.007)
- Late rectal toxicity (grade ≥1): lower in daily group (HR=0.71 [0.53–0.96], p=0.027)

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Department of Biostatistics, Gustave Roussy |
| **Scope** | |
| **Documents I authored** | |
| **Analysis milestones delivered** | Final analysis |
| **Statistical methods I applied** | Cox models (RFS, OS, late toxicity); Kaplan-Meier; Fisher's exact test; competing risk analysis; subgroup analysis; per-protocol sensitivity analysis |
| **Publication** | Yes — *International Journal of Radiation Oncology, Biology, Physics* (Red Journal), 2018, Vol 102(5):1420–1429 — **2nd author** |
| **Key challenges** | |
| **What I'm proud of** | 2nd author on the first-ever Phase III RCT comparing daily vs weekly IGRT in prostate cancer; large multicenter trial (470 patients, 21 centers); full statistical ownership of the final analysis |
| **Interview Q&A** | Q: The primary endpoint was not met — how do you talk about this trial? <br> A: The primary endpoint (RFS) was not statistically significant (HR=0.81, p=0.330), but the trial was not a failure — daily IGRT showed significant benefit on biochemical PFS (HR=0.45, p=0.007) and late rectal toxicity (HR=0.71, p=0.027). The paradox of worse OS in the daily arm is an important nuance: it was driven by more second cancers and cardiovascular deaths, not prostate cancer — with short follow-up (4.1 years) and small numbers, this finding must be interpreted with caution and was likely a chance imbalance. <br><br> Q: What statistical methods did you use? <br> A: Stratified Cox model for the primary endpoint (adjusted on randomization factors); unadjusted Cox for secondary endpoints; Kaplan-Meier with Rothman CIs; Fisher's exact test for acute toxicity; competing risk analysis and per-protocol sensitivity analysis as post-hoc. SAS 9.3 throughout. |

---

## HPVRX — CIDOFOVIR + CHEMORADIATION — CERVICAL CANCER

| Field | Value |
|---|---|
| **Trial name / acronym** | HPVRX |
| **ClinicalTrials.gov** | Not reported in publication |
| **Sponsor / Institution** | Gustave Roussy Cancer Center |
| **Study type** | Prospective |
| **Phase** | I |
| **Design** | Single-center, single-arm, dose-escalation |
| **Dose-escalation model** | 3+3 (4 dose levels: 1, 2.5, 5, 6.5 mg/kg) |
| **Blinding** | Open-label |
| **Randomization** | No |
| **Tumor type / Indication** | Locally advanced cervical cancer (FIGO IB2–IVA), squamous cell carcinoma or adenocarcinoma, HPV+ |
| **Patient population** | Previously untreated, ECOG PS 0–1, aged 18–70, no para-aortic metastasis |
| **Line of treatment** | 1L |
| **Main drug tested** | Cidofovir (antiviral agent) |
| **Other drugs in the study** | Carboplatin (AUC 2.5 weekly), radiotherapy, brachytherapy, probenecid (nephroprotection) |
| **Primary endpoint** | Safety / MTD of cidofovir concurrent with chemoradiation |
| **Key secondary endpoints** | Antitumor activity (RECIST 1.0); biological impact (HPV oncoprotein expression, genomic analysis); PFS; OS |
| **Primary analysis method** | DLT per CTCAE v3.0; Kaplan-Meier for PFS and OS |
| **N subjects (planned / actual)** | — / 15 (trial stopped early due to low accrual) |
| **N events (if TTE)** | 4 progressive disease events (27%); median follow-up OS 46 months, PFS 27 months |
| **N arms / cohorts** | 1 arm, 4 dose-escalation cohorts |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | 3+3 design — sequential cohorts of 3 patients per dose level; DLT defined per CTCAE v3.0; Kaplan-Meier for PFS and OS; RECIST 1.0 for tumor response |
| **Primary endpoint result** | No DLT observed at any dose level (1, 2.5, 5, 6.5 mg/kg). MTD not formally established — trial stopped early due to low accrual (15/planned patients enrolled) |
| **Key secondary results** | 4/15 patients (27%) had progressive disease. Median follow-up: OS 46 months, PFS 27 months. Biological endpoints (HPV oncoprotein, genomic) reported descriptively |
| **Main conclusion** | Cidofovir concurrent with chemoradiation was feasible at explored doses; no MTD reached. Limited conclusions due to early stop |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician |
| **Scope** | |
| **Documents I authored** | |
| **Analysis milestones delivered** | |
| **Statistical methods I applied** | Kaplan-Meier (PFS, OS); DLT assessment (CTCAE v3.0); RECIST tumor response |
| **Publication** | Yes — *Oncotarget*, 2016 — 3rd author |
| **Key challenges** | |
| **What I'm proud of** | |
| **Interview Q&A** | Q: <br> A: |

---

## SAFIR02-LUNG / IFCT 1301 — PRECISION MEDICINE PLATFORM — NSCLC (PHASE II)

| Field | Value |
|---|---|
| **Trial name / acronym** | SAFIR02-Lung / IFCT 1301 |
| **ClinicalTrials.gov** | NCT02117167 |
| **Sponsor / Institution** | UNICANCER / Gustave Roussy (PI: Fabrice Barlesi, Benjamin Besse) |
| **Study type** | Prospective interventional |
| **Phase** | II |
| **Design** | Open-label, randomized, 2-substudy platform — Substudy-1: NGS-guided targeted therapy vs SOC (2:1); Substudy-2: durvalumab vs SOC (2:1). Molecular tumor board allocates patients to substudy based on actionable alteration status. 33 French centers |
| **Dose-escalation model** | N/A |
| **Blinding** | Open-label |
| **Randomization** | Yes — 2:1 (experimental vs SOC), minimization; stratified by histology, chemo response, smoking status; substudy-1 also by molecular alteration category (A–D) |
| **Tumor type / Indication** | Metastatic NSCLC — EGFR wild-type and ALK wild-type |
| **Patient population** | Advanced EGFR/ALK wt NSCLC without disease progression after 4 cycles first-line platinum-based chemotherapy |
| **Line of treatment** | Switch maintenance after 1L chemotherapy |
| **Main drug tested** | Substudy-1: 8 targeted therapies (selumetinib, vistusertib, capivasertib, AZD4547, AZD8931, vandetanib, olaparib, savolitinib) matched to actionable alteration; Substudy-2: durvalumab (anti-PD-L1, 10 mg/kg q2w) |
| **Other drugs in the study** | SOC maintenance: pemetrexed, gemcitabine, or erlotinib |
| **Primary endpoint** | Progression-free survival (PFS) — time from randomization to radiological/clinical progression or death (RECIST v1.1) |
| **Key secondary endpoints** | Overall survival (OS); Overall response rate (ORR); preplanned subgroup analyses including PD-L1 TPS ≥1% vs <1% (substudy-2) |
| **Primary analysis method** | Cox regression adjusted for stratification factors (HR, 95% CI); Kaplan-Meier curves; log-rank test; chi-square/Fisher for ORR; forest plots with interaction tests for subgroups; ITT population; all analyses in SAS |
| **N subjects (planned / actual)** | Planned: 230 (SS1), 180 (SS2) / Randomized: 175 (SS1), 183 (SS2); 999 screened, 863 successfully profiled |
| **N events (if TTE)** | SS1: 168/175 (96%) PFS events; SS2: 162/183 (89%) PFS events |
| **N arms / cohorts** | 2 substudies × 2 arms each; SS1 prematurely closed due to slow accrual |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Cox regression stratified on minimization factors; Kaplan-Meier + log-rank for PFS/OS; chi-square for ORR; interaction tests for PD-L1 subgroup; rCGH R package (v1.16.0) for CNV from array CGH; NGS with ~70-gene panel (Ion Torrent PGM / Illumina MiSeq/MiniSeq) |
| **Primary endpoint result (SS1 — TT)** | Median PFS 2.7 months (TT) vs 2.7 months (SOC) — HR 0.97 (95% CI 0.70–1.36), P=0.87. No benefit of NGS-guided targeted therapy |
| **Primary endpoint result (SS2 — durvalumab)** | Median PFS 3.0 months (durvalumab) vs 3.0 months (SOC) — HR 0.86 (95% CI 0.62–1.20), P=0.38. No significant overall PFS benefit |
| **Key secondary results** | SS1 OS: 14.3 vs 14.1 months, HR 1.03 (P=0.87). SS1 ORR: 5.3% vs 10.5% (P=0.22). SS2 OS: 17.0 vs 14.9 months, HR 0.93 (P=0.73). **Key signal:** PD-L1 ≥1% subgroup (n=29 durvalumab): PFS HR 0.29 (95% CI 0.11–0.75) vs PD-L1 <1% HR 0.71 (Pinteraction=0.036); OS HR 0.32 (Pinteraction=0.039) |
| **Main conclusion** | NGS-guided maintenance therapy is feasible in a multicenter setting but did not improve outcomes in unselected EGFR/ALK wt NSCLC. Signal of durvalumab benefit restricted to PD-L1 ≥1% patients; precision medicine approach requires biomarker-enriched selection |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician |
| **Scope** | Substantial contributor — lung cohort specifically (SAFIR02-Lung). Left Gustave Roussy before publication; not in the author list |
| **Documents I authored** | |
| **Analysis milestones delivered** | Automated TFL pipelines for IDMC meetings (lung cohort) |
| **Statistical methods I applied** | Automated TFL pipeline development (R); survival analysis (KM, log-rank); Cox regression; CNV analysis (rCGH); platform trial methodology |
| **Publication** | No — left GR before publication. Published: *Clinical Cancer Research* 2023;28:4018–26 (Barlesi et al.) — contributed to lung cohort, not listed as author |
| **Key challenges** | |
| **What I'm proud of** | Delivery of automated TFL pipelines for IDMC monitoring on a multi-center precision medicine platform trial |
| **Interview Q&A** | Q: You worked on SAFIR02 but are not listed as an author — can you explain? <br> A: I worked on the lung cohort of SAFIR02 while at Gustave Roussy, specifically building the automated TFL pipelines used at IDMC meetings. I left Gustave Roussy before the final analysis and publication, so I am not in the author list. This is a common situation in academic oncology — contribution is real but publication credit goes to those present at the final analysis. |

---


## MAPPYACTS — PEDIATRIC PRECISION MEDICINE — MULTI-TUMOR

| Field | Value |
|---|---|
| **Trial name / acronym** | MAPPYACTS (MOleculAr Profiling for Pediatric and Young Adult Cancer Treatment Stratification) |
| **ClinicalTrials.gov** | NCT02613962 |
| **Sponsor / Institution** | Multi-institutional European — Gustave Roussy (France), Institut Curie, + Italy, Ireland, Spain |
| **Study type** | Prospective interventional (molecular screening study, non-randomized) |
| **Phase** | Phase I/II feeder — molecular profiling study feeding into AcSé-ESMART platform trial (NCT02813135) |
| **Design** | International, prospective, single-arm molecular profiling study. Fresh tumor biopsy → WES + RNA sequencing (± cfDNA for extracerebral tumors) → molecular tumor board → clinical molecular tumor board (CMTB) treatment recommendation → enrollment in matched clinical trial |
| **Dose-escalation model** | N/A |
| **Blinding** | Open-label |
| **Randomization** | No |
| **Tumor type / Indication** | Pediatric and young adult — all relapsed/refractory solid and hematologic malignancies (multiple tumor types) |
| **Patient population** | Children and adolescents with recurrent or refractory malignancies; February 2016 – July 2020 |
| **Line of treatment** | Relapsed/refractory (any line) |
| **Main drug tested** | No single drug — matched targeted therapy per molecular profile, administered through AcSé-ESMART or other trials |
| **Other drugs in the study** | N/A — screening/profiling study; treatment through separate trials |
| **Primary endpoint** | Feasibility of comprehensive genomic profiling at recurrence AND proportion of patients with at least one actionable alteration identified by WES + RNAseq |
| **Key secondary endpoints** | Rate of matched treatment administration; ORR and disease control rate to matched therapy; cfDNA concordance with tumor tissue; turnaround time of molecular profiling |
| **Primary analysis method** | Descriptive statistics; proportions with 95% CIs; ORR analysis by matched treatment category; no formal hypothesis testing (feasibility design) |
| **N subjects (planned / actual)** | 787 included; 774 underwent tissue collection; 632 successfully sequenced (82%) |
| **N events (if TTE)** | N/A |
| **N arms / cohorts** | Single arm — multiple tumor type cohorts |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Descriptive statistics throughout; proportions with 95% CIs; ORR tabulation by alteration tier (ready-for-routine-use vs. other); cfDNA concordance analysis (% of tissue alterations detected in blood) |
| **Primary endpoint result** | 632/774 (82%) successfully sequenced; 436/632 (69%) had ≥1 actionable alteration identified; 10% of alterations classified "ready for routine use" |
| **Key secondary results** | 107/356 patients with ≥12 months follow-up (30%) received ≥1 matched targeted therapy (56% within early clinical trials). Overall ORR to matched treatment: 17%; disease control rate: 41%. "Ready-for-routine-use" monotherapy ORR: 38%. cfDNA: 76% of tissue-detected actionable alterations also found in cfDNA (extracerebral tumors) |
| **Main conclusion** | Comprehensive molecular profiling at relapse is feasible on a multicenter international scale in pediatric oncology. 69% of patients harbor actionable alterations; matched treatment in highly selected patients (ready-for-routine-use tier) yields 38% ORR — demonstrating clinical utility of precision medicine in this hard-to-treat population |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician |
| **Scope** | Substantial contributor — automated TFL pipeline delivery for IDMC meetings |
| **Documents I authored** | |
| **Analysis milestones delivered** | Automated TFL pipelines for IDMC meetings |
| **Statistical methods I applied** | Automated TFL pipeline development (R); descriptive statistics; proportion analysis |
| **Publication** | No — contributed to study but not listed as author. Published: *Cancer Discovery* 2022 (Berlanga et al.) |
| **Key challenges** | |
| **What I'm proud of** | Contributing to one of the largest international pediatric precision medicine programs; automated pipeline delivery enabling real-time IDMC oversight |
| **Interview Q&A** | Q: What was your contribution to MAPPYACTS? <br> A: I was the statistician responsible for building and delivering automated TFL pipelines used at IDMC meetings, similar to my role on SAFIR02-Lung. These pipelines enabled the monitoring committee to review safety and feasibility data in real time across a multi-country study enrolling multiple tumor types — a genuinely complex data environment. The key statistical challenge was handling heterogeneous tumor-type cohorts with very different sample sizes in a single automated reporting framework. |

---

## TNBC GENOMIC SIGNATURE — 4-GENE ML MODEL — TRANSLATIONAL / PATENT

| Field | Value |
|---|---|
| **Trial name / acronym** | TNBC 4-gene signature (no trial acronym — translational research study) |
| **ClinicalTrials.gov** | N/A — retrospective analysis of publicly available datasets |
| **Sponsor / Institution** | Gustave Roussy / Institut Gustave Roussy — in collaboration with MDACC, TOP trial, I-SPY-1, GEICAM, USO-02103 cohorts |
| **Study type** | Retrospective translational — ML signature development + external validation |
| **Phase** | N/A |
| **Design** | LASSO-based gene signature development on training cohort (n=99) with independent external validation (n=115 RD; n=185 entire). Cross-platform gene expression from 5 publicly available GEO datasets (Affymetrix U133A/Plus2). 10-fold cross-validation in training; landmarked survival analysis in validation |
| **Dose-escalation model** | N/A |
| **Blinding** | N/A |
| **Randomization** | N/A |
| **Tumor type / Indication** | Triple-Negative Breast Cancer (TNBC) — ER−/HER2− |
| **Patient population** | Patients with TNBC treated with anthracycline-containing NACT; primary focus on residual disease (RD) patients post-NACT. Training: n=99 (TOP study + MDACC series); Validation: n=115 RD / n=185 entire (I-SPY-1, LBJ/INEN/GEICAM, MAQCII/MDACC, TOP, USO-02103) |
| **Line of treatment** | Neoadjuvant |
| **Main drug tested** | N/A — molecular signature developed from pretreatment gene expression arrays |
| **Other drugs in the study** | N/A |
| **Primary endpoint** | Distant relapse-free survival (DRFS) in residual disease patients |
| **Key secondary endpoints** | Overall survival (OS); prediction of post-NACT TIL levels; pCR prediction; added prognostic value over clinicopathological model (C-index improvement, likelihood ratio test) |
| **Primary analysis method** | Cox proportional hazards model (stratified by series, adjusted for age/cT/cN/grade); Uno's C-index at 3 and 5 years (1000 bootstrap repetitions); likelihood ratio test for added value; landmark analysis at 6 months for RD patients |
| **N subjects (planned / actual)** | Training: 99; Validation (RD): 115; Validation (entire): 185 |
| **N events (if TTE)** | Training: 94 evaluable for DRFS; Validation: 90 (RD), 160 (entire) |
| **N arms / cohorts** | No arms — training + 2 validation sets |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Box-Cox transformation of TILs → general linear model of TILs ~ gene expression + covariates → **LASSO penalization** (tuning via 10-fold CV) → 4-gene signature: **HLF, CXCL13, SULT1E1, GBP1**. Signature = linear combination of gene expressions weighted by LASSO coefficients, scaled to [0,1]. TILs prediction accuracy: corrected RMSE = 2.21 (95% CI: 2.15–2.28) via 1000 × 10-fold CV. Survival: Cox + Uno's C-index + likelihood ratio test for added prognostic value |
| **Primary endpoint result** | **Training (RD, n=94):** DRFS HR = 0.28 (95% CI 0.13–0.63, P=0.002) per unit increase in signature; C-index improved from 0.617 (clinical) → 0.673 (clinical + signature), LRT P=0.004. **Validation (RD, n=90):** HR = 0.17 (95% CI 0.06–0.43, P<0.001); C-index 0.712 → 0.749, LRT P=0.002. **Validation (entire, n=160):** HR = 0.29 (95% CI 0.13–0.67, P=0.004); C-index 0.686 → 0.700, LRT P=0.008 |
| **Key secondary results** | OS (training RD): HR = 0.35 (95% CI 0.16–0.75, P=0.007); C-index 0.631 → 0.668. pCR: no significant association (OR 0.96, P=0.947) — signature is prognostic in RD, not predictive of pCR. High-signature patients (above training median) have significantly better DRFS/OS in both training and validation |
| **Main conclusion** | A 4-gene pretreatment signature (HLF, CXCL13, SULT1E1, GBP1) predicts high post-NACT TIL levels and is independently prognostic for DRFS and OS in TNBC patients with residual disease, adding discriminatory information beyond clinicopathological factors. Validated across 5 independent cohorts. Patent filed |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Statistics and Epidemiology Unit, Gustave Roussy |
| **Scope** | Full pipeline ownership: gene expression extraction → fRMA normalization → cross-platform merging → LASSO signature development → internal cross-validation → external validation on independent cohorts |
| **Documents I authored** | |
| **Analysis milestones delivered** | End-to-end ML pipeline; internal CV; external validation across 5 cohorts; patent filing contribution |
| **Statistical methods I applied** | fRMA normalization; cross-platform data merging (Affymetrix U133A/Plus2, GEO datasets); Box-Cox transformation; LASSO penalized regression (10-fold CV); Cox proportional hazards; Uno's C-index (bootstrap); likelihood ratio test; landmark analysis; Kaplan-Meier |
| **Publication** | Yes — *Annals of Oncology* 2018;29(1):162–169 — **2nd author** (C. Criscitiello, **M.A. Bayar**, G. Curigliano et al.) |
| **Key challenges** | Cross-platform normalization across 5 heterogeneous GEO datasets; predicting a continuous biological endpoint (TILs) rather than a binary outcome; validating on fully independent external cohorts with limited sample size |
| **What I'm proud of** | Co-inventor on patent WO2018002385A1 — rare for a statistician to hold a patent; full end-to-end pipeline ownership from raw data to validated clinical signature; 2nd author on a landmark TNBC translational paper |
| **Interview Q&A** | Q: Walk me through the statistical approach for building the signature. <br> A: We started from pretreatment Affymetrix gene expression arrays across multiple GEO cohorts. After fRMA normalization and cross-platform merging, we applied LASSO penalized regression with Box-Cox-transformed post-NACT TIL levels as the outcome, controlling for patient series and clinical covariates. LASSO with 10-fold cross-validation selected 4 genes: HLF, CXCL13, SULT1E1, GBP1. We then validated the signature's prognostic value for DRFS and OS in two independent external sets using stratified Cox models and Uno's C-index — showing consistent improvement over a clinical-only model in both. <br><br> Q: You are a co-inventor on a patent — what does that mean practically? <br> A: The 4-gene signature was filed as a patent (WO2018002385A1) covering its use as a prognostic tool in TNBC. As a co-inventor I am named on the patent alongside the clinical and biological collaborators. It means the statistical modeling work I did was considered a core intellectual contribution to the invention, not just an analytical service. |

---

## BIOMECA / PIES — PEDIATRIC EPENDYMOMA PROGNOSTIC SCORE — TRANSLATIONAL

| Field | Value |
|---|---|
| **Trial name / acronym** | BIOMECA (BIOlogical Markers for Ependymomas in Children and Adolescents) — SIOP Ependymoma Biology Working Group |
| **ClinicalTrials.gov** | N/A — retrospective pooled analysis of 5 national trial cohorts; linked to prospective SIOP-EP-II (NCT02265770) |
| **Sponsor / Institution** | Multi-national European — France (Gustave Roussy / Necker), UK (CCLG), Italy (AIEOP), Germany (GPOH/HIT 2000), Heidelberg group |
| **Study type** | Retrospective multicentric translational — biomarker prognostication study on archived TMA samples |
| **Phase** | N/A |
| **Design** | Pooled analysis of 5 independent national cohorts. TNC IHC + 1q25 FISH/MLPA on TMA blocks. Cox model stratified by cohort, AIC/iAUC model selection, interaction testing, bootstrap stability, PIES prognostic score derivation, internal-external cross-validation (Royston method). REMARK reporting guidelines |
| **Dose-escalation model** | N/A |
| **Blinding** | TNC IHC scored independently by 3 observers; UK cohort blinded inter-observer reproducibility (kappa=0.91) |
| **Randomization** | N/A |
| **Tumor type / Indication** | Pediatric intracranial ependymoma (all locations: posterior fossa + supratentorial) |
| **Patient population** | 595 patients <18 years, histologically confirmed newly diagnosed intracranial ependymoma, from 5 national trial cohorts (FR n=93, UK n=105, IT n=62, Germany GPOH n=139, Heidelberg n=196). Complete cases for analysis: n=470 (131 deaths). Median follow-up 5.0 years |
| **Line of treatment** | N/A — biomarker study on diagnostic samples |
| **Main drug tested** | N/A — prognostic biomarkers: Tenascin-C (TNC) IHC + chromosome 1q25 copy number (FISH/MLPA) |
| **Other drugs in the study** | N/A |
| **Primary endpoint** | Overall survival (OS) — time from diagnosis to death from any cause |
| **Key secondary endpoints** | Subgroup analyses (posterior fossa vs supratentorial); calibration of PIES score; interaction between RT and risk group; RELA-fusion status in supratentorial subgroup |
| **Primary analysis method** | Multivariable Cox regression stratified by cohort and RT (time-dependent); AIC + iAUC (integrated AUC, 3-year interval) for model comparison; Cochran-Mantel-Haenszel for biomarker associations; Schoenfeld residuals for PH testing; bootstrap (1000 reps) for model stability; internal-external cross-validation (Royston); SAS 9.3 + R (survival, survAUC, rms) |
| **N subjects (planned / actual)** | 595 identified / 470 complete cases analyzed |
| **N events (if TTE)** | 131 deaths (28%) at cut-off January 1, 2009 |
| **N arms / cohorts** | 5 national cohorts (no arms — observational) |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Core Cox model (age, location, grade, extent of resection, RT) + TNC + 1q25 + TNC×location interaction, stratified by cohort and RT. Model selection via AIC (lower=better) and iAUC (higher=better). PH violation by RT handled by stratification. Bootstrap stability confirmed. PIES score = weighted sum of Cox coefficients. Risk groups defined at 27th/73rd percentiles (non-data-driven). Internal-external CV: leave-one-cohort-out |
| **Primary endpoint result** | **1q25 gain:** HR = 2.97 (95% CI 1.99–4.43, p<0.0001) — independent prognostic value beyond clinical variables. **TNC (location-dependent):** Posterior fossa HR = 2.19 (1.29–3.76, p=0.004); Supratentorial HR = 0.64 (0.28–1.48, p=0.295); interaction p=0.015. Model iAUC improved from 0.63 (clinical only) → 0.70 (with 1q25 + TNC×location) |
| **Key secondary results** | **PIES risk groups (n=470):** 5-year OS: Good 85.1% (n=126), Intermediate 72.3% (n=219), Poor 44.0% (n=125). HR intermediate vs good = 2.39 (1.44–3.97); HR poor vs good = 5.36 (3.21–8.96). **RT interaction:** Upfront RT associated with OS only in poor risk group (HR=0.377, p=0.028); not significant in good or intermediate groups. **Calibration:** acceptable agreement between predicted and observed 5-year mortality. **Internal-external CV:** iAUC 0.62–0.73 across held-out cohorts — robust discrimination confirmed |
| **Main conclusion** | PIES (TNC + 1q25 + clinical variables) provides robust 3-tier risk stratification for pediatric intracranial ependymoma using widely available IHC and FISH/MLPA assays. TNC is prognostic specifically in posterior fossa; 1q25 gain is universally prognostic. Omitting upfront RT is only detrimental in the poor risk group — potential for treatment de-escalation in good/intermediate risk |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Statistics and Epidemiology Unit, Gustave Roussy |
| **Scope** | Core statistical contributor: formal analysis, methodology, validation, and writing (co-author on all writing sections) |
| **Documents I authored** | Statistical analysis plan; prognostic score derivation and validation |
| **Analysis milestones delivered** | Full multivariable Cox modeling; AIC/iAUC model selection; PH assumption testing and RT stratification; interaction analyses; PIES score derivation; bootstrap stability; internal-external cross-validation; calibration assessment |
| **Statistical methods I applied** | Stratified Cox regression; AIC/iAUC model comparison; Schoenfeld residuals (PH testing); Cochran-Mantel-Haenszel test; bootstrap resampling (stability); PIES prognostic score derivation; internal-external cross-validation (Royston method); calibration curves; SAS 9.3 + R (survival, survAUC, rms) |
| **Publication** | Yes — *PLoS ONE* 2017;12(6):e0178351 — **3rd author** (Andreiuolo, Le Teuff, **Bayar**, Kilday et al.) — listed in Formal analysis, Methodology, Validation, Writing |
| **Key challenges** | PH assumption violated by RT (association with OS is time-dependent: benefit of upfront RT is only significant in first 3 years) — required stratification on RT as time-dependent variable; handling heterogeneity across 5 national cohorts with different treatment protocols; limited sample size for subgroup interaction analyses |
| **What I'm proud of** | First integrated prognostic score for all pediatric intracranial ependymomas validated across 5 international cohorts; rigorous internal-external cross-validation demonstrating robust generalizability; 3rd author on a large-scale multicentric translational study with potential to guide stratification in future international trials |
| **Interview Q&A** | Q: How did you handle the violation of the proportional hazards assumption in this study? <br> A: The global PH test was significant (p=0.0055), driven by the RT covariate (p=0.0139) — the benefit of upfront RT was only significant in the first 3 years after diagnosis. We handled this by stratifying on RT as a time-dependent variable, which defines a separate baseline hazard for each RT stratum without forcing a constant HR over time. After stratification the global PH test was no longer significant (p=0.338) and the model became more stable. This also had the practical advantage of clarifying the RT-risk group interaction: RT omission was only detrimental in the poor risk group. <br><br> Q: How was the PIES score validated? <br> A: We used Royston's internal-external cross-validation — leave one cohort out, refit the model on the remaining 4, derive cut-points from those 4 cohorts, then classify patients from the held-out cohort. After cycling through all 5 cohorts, we obtain a full set of predictions on patients never used in model fitting. iAUC on held-out cohorts ranged 0.62–0.73, consistent with the training estimate of 0.70, confirming the score generalizes well across different national cohorts and treatment protocols. |

---

## SAT mCRPC — BODY COMPOSITION & PROGNOSIS — PROSTATE CANCER — TRANSLATIONAL

| Field | Value |
|---|---|
| **Trial name / acronym** | No trial acronym — retrospective body composition analysis on AFFIRM (NCT00974311) + COU-AA-301 (NCT00638690) patients |
| **ClinicalTrials.gov** | AFFIRM: NCT00974311; COU-AA-301: NCT00638690 |
| **Sponsor / Institution** | Gustave Roussy Cancer Campus — Departments of Ambulatory Care + Biostatistics and Epidemiology + Cancer Medicine |
| **Study type** | Retrospective analysis of prospectively collected data from two Phase III RCTs |
| **Phase** | N/A — post-hoc body composition analysis |
| **Design** | All mCRPC patients treated at Gustave Roussy enrolled in AFFIRM (enzalutamide vs placebo, 2:1) or COU-AA-301 (abiraterone+prednisone vs placebo+prednisone, 2:1) with available CT imaging. Body composition assessed by CT at L3 landmark using Slice-O-Matic V4.3 (blinded to outcomes). Prognostic Cox model + longitudinal linear mixed model for treatment effects on BC parameters |
| **Dose-escalation model** | N/A |
| **Blinding** | CT image analysis blinded to patient characteristics, treatment, and outcome |
| **Randomization** | N/A (source trials were randomized; this is a post-hoc observational analysis) |
| **Tumor type / Indication** | Metastatic castration-resistant prostate cancer (mCRPC) — post-docetaxel chemotherapy setting |
| **Patient population** | 127 mCRPC patients from AFFIRM + COU-AA-301 at Gustave Roussy; 120 with complete body composition data. Median age 69 years; 70% sarcopaenic; median follow-up 45 months |
| **Line of treatment** | Post-chemotherapy (2L+) — abiraterone or enzalutamide |
| **Main drug tested** | Abiraterone acetate + prednisone (COU-AA-301) and enzalutamide (AFFIRM) — AR axis inhibitors |
| **Other drugs in the study** | Placebo arms from both trials |
| **Primary endpoint** | Overall survival (OS) — time from treatment initiation to death |
| **Key secondary endpoints** | Progression-free survival (PFS); longitudinal changes in SMM, VAT, SAT indexes from baseline to 3 and 6 months |
| **Primary analysis method** | Kaplan-Meier + log-rank for OS/PFS; univariate and multivariate Cox PH model; linear mixed models (LMM) with autoregressive covariance structure (selected by BIC) for longitudinal BC changes; Bonferroni-adjusted p-values; REMARK reporting; SAS 9.3 |
| **N subjects (planned / actual)** | 127 enrolled in source trials at GR / 120 with complete BC data analyzed |
| **N events (if TTE)** | 101 deaths (80%); 123 disease progression events (97%) |
| **N arms / cohorts** | No formal arms — pooled analysis; treatment (AFFIRM/COU-AA-301) included as covariate |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Univariate Cox → multivariate Cox with 9 predefined OS predictors (age, NRS pain, ECOG PS, LDH, visceral metastases, PSA, Hgb, albumin, AP) + BMI + SMM/VAT/SAT indexes. Cut-offs for VAT and SAT based on median (no gold standard). Log-transformation for skewed PSA and AP. LMM for longitudinal changes: autoregressive covariance, BIC model selection, Bonferroni correction |
| **Primary endpoint result** | **SAT index:** Univariate — median OS 15 vs 18 months (<median vs ≥median), HR=0.6 (95% CI 0.4–0.9, P=0.008). **Multivariate (3 independent predictors):** Visceral metastases HR=2.8 (1.4–5.5, P<0.01); NRS pain >3 HR=2.0 (1.1–3.5, P=0.02); SAT index ≥51.7 HR=0.51 (0.3–1.0, P=0.04). SMM, VAT, sarcopaenia, BMI: not significant |
| **Key secondary results** | **PFS:** Only visceral metastases independently associated (P=0.016). **Longitudinal BC changes (n=46 with T0/T3/T6 data):** SMM index loss baseline→3 months: −2.49 ± 0.44 cm²/m² (P<0.001) ≈ 3.4 kg muscle; sustained at 6 months (−2.77 ± 0.61 cm²/m², P<0.001) ≈ 3.5 kg. VAT increase baseline→3 months: +7.91 ± 2.69 cm²/m² ≈ 12.2 kg fat (P=0.01). No significant differential treatment effects on SMM, SAT, or VAT between abiraterone/enzalutamide and placebo |
| **Main conclusion** | High SAT volume is independently associated with longer OS in mCRPC patients treated with next-generation AR axis inhibitors, beyond established clinical prognostic factors. SAT may be a metabolic hallmark of less aggressive disease. Significant and progressive muscle loss (~3.5 kg over 6 months) observed regardless of treatment |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Department of Biostatistics and Epidemiology, Gustave Roussy |
| **Scope** | Lead statistician — statistical analysis design and execution |
| **Documents I authored** | Statistical analysis; REMARK-compliant reporting |
| **Analysis milestones delivered** | Univariate and multivariate Cox models; LMM for longitudinal BC changes; BIC-based covariance structure selection |
| **Statistical methods I applied** | Kaplan-Meier; log-rank; univariate + multivariate Cox PH; linear mixed models (autoregressive covariance, BIC selection); Bonferroni correction; log-transformation; reverse KM for follow-up; SAS 9.3 |
| **Publication** | Yes — *European Journal of Cancer* 2015 (epub) — **2nd author** (Antoun, **Bayar**, Ileana, Laplanche, Fizazi et al.) — doi:10.1016/j.ejca.2015.07.042 |
| **Key challenges** | No gold-standard cut-offs for SAT/VAT — used median-based thresholds, which limits generalizability; small sample size (n=120) for multivariate model with 9 predefined + 4 BC predictors; pooling two trials with different treatment arms required careful handling of treatment as confounder |
| **What I'm proud of** | 2nd author on a clinically impactful translational study demonstrating CT-derived body composition as an independent prognostic factor in mCRPC — with a real therapeutic message (SAT as potential patient stratification tool) |
| **Interview Q&A** | Q: Why did you use linear mixed models for the longitudinal body composition analysis? <br> A: Because we had repeated measures (baseline, 3 months, 6 months) on the same patients, standard regression would violate the independence assumption. LMM handles the within-patient correlation structure directly. We tested three covariance structures — unstructured, compound symmetry, and autoregressive — and selected the autoregressive structure based on BIC, which assumes correlations decay with time lag. This was appropriate given that measurements closer in time should be more correlated than those further apart. We then reported pairwise comparisons (baseline vs T3, baseline vs T6, treatment vs placebo) with Bonferroni correction. |

---

## BC mCRC — BODY COMPOSITION DURING CHEMOTHERAPY — COLORECTAL CANCER — TRANSLATIONAL

| Field | Value |
|---|---|
| **Trial name / acronym** | BC mCRC — nested body composition sub-study of the ACCORD trial (145 patients total; 76 with available baseline CT included) |
| **ClinicalTrials.gov** | ACCORD trial (NCT not confirmed — TO FILL if found) |
| **Sponsor / Institution** | Gustave Roussy Cancer Campus |
| **Study type** | Prospective observational — longitudinal body composition assessment during first-line chemotherapy |
| **Phase** | N/A (observational sub-study) |
| **Design** | Longitudinal CT-based body composition (SMM, VAT, SAT) at L3 landmark, baseline + follow-up over 4-month treatment period; LMM for change over time |
| **Dose-escalation model** | N/A |
| **Blinding** | CT image analysis blinded to outcomes (consistent with prior Antoun/Bayar methodology) |
| **Randomization** | N/A |
| **Tumor type / Indication** | Metastatic colorectal cancer (mCRC) — 82% colon cancer, 62% ≥2 metastatic sites |
| **Patient population** | 76 mCRC patients with available baseline CT (from ACCORD cohort of 145); mean age 60.6±10.0 years; 50% women; all receiving first-line chemotherapy |
| **Line of treatment** | First-line chemotherapy |
| **Main drug tested** | First-line chemotherapy regimens for mCRC (within ACCORD trial — TO CONFIRM specific regimens) |
| **Other drugs in the study** | N/A |
| **Primary endpoint** | Change in skeletal muscle mass (SMM index, cm²/m²) during 4-month first-line chemotherapy follow-up |
| **Key secondary endpoints** | Changes in weight; association of baseline SMM depletion with OS, PFS, and chemotherapy toxicity; effect of diarrhea toxicity on BC changes |
| **Primary analysis method** | Linear mixed models (LMM) for longitudinal BC changes; same CT methodology as Antoun 2015 mCRPC paper |
| **N subjects (planned / actual)** | 76 (with baseline CT, out of 145 in ACCORD) |
| **N events (if TTE)** | <!-- TO FILL — OS/PFS events not recovered --> |
| **N arms / cohorts** | Single cohort — observational sub-study |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Linear mixed models for longitudinal BC changes over 4-month follow-up; CT L3 landmark; SliceOMatic 4.3; same pipeline as Antoun/Bayar mCRPC 2015 paper |
| **Baseline BC status** | 53% of patients had SMM depletion at baseline; 49% had ≥5% weight loss; 26% had >10% weight loss at time of enrolment |
| **Primary endpoint result** | **No significant decrease in SMM or weight during 4-month first-line chemotherapy for mCRC** — primary finding is null (negative study) |
| **SMM depletion vs outcomes** | No significant association between baseline SMM depletion and OS, PFS, or chemotherapy toxicity |
| **Diarrhea sub-analysis** | Diarrhea (any grade or grade 3–4, occurring in 74% of patients) did NOT influence weight or SMM changes |
| **Notable positive finding** | In patients with ≥10% baseline weight loss, SMM **significantly increased** after 4 months following disease stabilization under chemotherapy (P=0.008) — suggesting tumour control drives muscle recovery |
| **Specific slope estimates** | <!-- TO FILL — exact LMM slopes not recovered due to password-protected PDF --> |
| **Main conclusion** | First-line chemotherapy for mCRC does not cause measurable SMM or weight loss — contrasts with mCRPC and hormonal therapy settings; baseline SMM depletion (present in 53%) did not predict survival or toxicity in this homogeneous cohort; tumour response/stabilisation may be the key driver of muscle recovery |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Department of Biostatistics and Epidemiology, Gustave Roussy |
| **Scope** | Lead statistician — 2nd author (same role as in the Antoun 2015 mCRPC paper) |
| **Documents I authored** | Statistical analysis |
| **Analysis milestones delivered** | LMM for longitudinal body composition changes |
| **Statistical methods I applied** | Linear mixed models (LMM) for longitudinal BC changes; repeated-measures design; CT image analysis at L3 with SliceOMatic 4.3; Kaplan-Meier for OS/PFS; Cox models for survival analysis; same statistical pipeline as Antoun/Bayar 2015 mCRPC paper |
| **Publication** | Yes — *BMC Cancer* 2019;19(1) — **2nd author** (Antoun, **Bayar**, Dyevre, Lanoy, Smolenschi, Ducreux) — doi:10.1186/s12885-019-6086-2 |
| **Key challenges** | <!-- TO FILL --> |
| **What I'm proud of** | Part of a systematic body composition research program at GR across multiple cancer types; 2nd author on a negative study with clear clinical message — null results in body composition are important for clinical practice |
| **Interview Q&A** | Q: This study had a negative result — is that publishable and useful? <br> A: Absolutely. A well-powered negative result is as informative as a positive one. The clinical assumption before this study was that chemotherapy causes muscle wasting, as seen in other cancer types. We showed that mCRC patients on first-line chemo do not lose significant muscle mass — which means patients and oncologists don't need to worry about sarcopenia as a chemotherapy side-effect in this specific setting. Publishing negative results prevents medical practice from being based on unfounded assumptions. <br><br> Q: You said it was a negative study, but there was a positive finding in a subgroup? <br> A: Yes — in patients who had already lost ≥10% of body weight before chemotherapy, we actually saw a significant increase in SMM after 4 months of follow-up and disease stabilisation (P=0.008). This suggests that when chemotherapy achieves tumour control, the tumour-driven catabolism is reversed and patients can recover muscle mass. It reinforces the hypothesis that tumour evolution — not the chemotherapy drugs themselves — is the primary driver of muscle wasting in mCRC. The chemotherapy, by stabilising disease, actually allows muscle recovery in the most nutritionally depleted patients. |

---

## SARCOPENIA CRS-HIPEC — BODY COMPOSITION & CHEMOTHERAPY TOXICITY (TRANSLATIONAL)

| Field | Value |
|---|---|
| **Trial name / acronym** | Sarcopenia CRS-HIPEC (no formal acronym) |
| **ClinicalTrials.gov** | Not registered (retrospective cohort) |
| **Sponsor / Institution** | Gustave Roussy — Departments of Surgical Oncology and Nutritional Support |
| **Study type** | Retrospective — monocentric cohort |
| **Phase** | — (observational / translational) |
| **Design** | Retrospective cohort, N=97 CRS-HIPEC patients (Jan 2008 – Dec 2010) |
| **Dose-escalation model** | N/A |
| **Blinding** | N/A |
| **Randomization** | No |
| **Tumor type / Indication** | Colorectal cancer with peritoneal carcinomatosis |
| **Patient population** | Patients undergoing cytoreductive surgery (CRS) + HIPEC at Gustave Roussy |
| **Line of treatment** | N/A (surgical + hyperthermic chemotherapy procedure) |
| **Main drug tested** | HIPEC: oxaliplatin 300 mg/m² + irinotecan 200 mg/m² + IV 5-FU 400 mg/m² + leucovorin 20 mg/m² |
| **Other drugs in the study** | — |
| **Primary endpoint** | (1) Grade ≥3 HIPEC chemotherapy toxicity; (2) Grade ≥3 CRS surgical complications |
| **Key secondary endpoints** | Neutropenia, specific toxicity types; OS, RFS (reported descriptively) |
| **Primary analysis method** | Two separate multivariable logistic regression models (one per outcome); C-statistic for model performance; χ²/Fisher's exact/Mann-Whitney for univariable comparisons |
| **N subjects (planned / actual)** | 97 (actual) — 39 sarcopenic (40%), 58 non-sarcopenic (60%) |
| **N events (if TTE)** | Chemotherapy toxicity grade ≥3: 38/97 (39%); CRS complications grade ≥3: 33/97 (34%) |
| **N arms / cohorts** | Single cohort — stratified by sarcopenia status |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Two multivariable logistic regression models (forward stepwise); C-statistic for discrimination; REMARK guideline adherence; SAS 9.3 |
| **Sarcopenia definition** | CT-derived SMM index at L3 landmark (Slice-O-Matic 4.3); gender/BMI-specific cut-offs per Martin et al. |
| **Primary endpoint result — Chemotherapy toxicity** | Sarcopenia independently associated with grade ≥3 HIPEC toxicity: **OR=3.97 (95% CI 1.52–10.39), P=0.005**; C-statistic=0.708 |
| **Primary endpoint result — CRS complications** | Sarcopenia NOT independently associated with grade ≥3 surgical complications; only operative time was significant (OR=1.73, P=0.002) |
| **Chemotherapy toxicity by sarcopenia** | 57% sarcopenic vs 26% non-sarcopenic (P=0.004); neutropenia: 36% vs 17% (P=0.04) |
| **Key secondary results** | SAT, VAT, SMD not independently predictive in either model after adjustment; PCI (peritoneal cancer index) not significant in chemotherapy model |
| **Main conclusion** | Sarcopenia is an independent predictor of HIPEC chemotherapy toxicity but not of surgical complications — allows differentiation of risk profiles before CRS-HIPEC |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Department of Biostatistics and Epidemiology + INSERM U1018, Gustave Roussy |
| **Scope** | Lead statistician — 2nd author |
| **Documents I authored** | Statistical analysis section; multivariable logistic regression models |
| **Analysis milestones delivered** | Full statistical analysis — univariable screening, multivariable models, C-statistic, REMARK-compliant reporting |
| **Statistical methods I applied** | Multivariable logistic regression (two models); χ²/Fisher's exact test; Mann-Whitney U test; Kolmogorov-Smirnov test; C-statistic/AUC; SAS 9.3 |
| **Publication** | Yes — *Annals of Surgical Oncology* 2016;23(12):3891–3898 — **2nd author** (Chemama, **Bayar**, Lanoy, Ammari, Stoclin, Goéré, Elias, Raynard, Antoun) — doi:10.1245/s10434-016-5360-7 |
| **Key challenges** | <!-- TO FILL --> |
| **What I'm proud of** | Two-model approach elegantly separates chemo toxicity risk from surgical complication risk — clinically actionable distinction for patient selection and HIPEC dose planning |
| **Interview Q&A** | Q: Why did you build two separate models instead of one composite outcome? <br> A: The two outcomes — HIPEC chemotherapy toxicity and CRS surgical complications — have fundamentally different physiological mechanisms and likely different predictors. Combining them would have obscured these differences. The separation proved useful: sarcopenia predicted chemo toxicity (via reduced drug clearance and reserve) but not surgical complications, where operative time dominated. This gives clinicians targeted information for decision-making. <br><br> Q: How did you handle variable selection in logistic regression with N=97? <br> A: We used forward stepwise selection, which is appropriate for an exploratory study with moderate sample size. We were aware of overfitting risk and reported C-statistics for internal discrimination — these were 0.71 for the chemo toxicity model, suggesting reasonable fit without extreme optimism. A larger prospective cohort would be needed for formal validation. <br><br> Q: Sarcopenia was defined by CT — how was measurement done? <br> A: CT scans taken within 1 month before surgery were analyzed at the L3 landmark using Slice-O-Matic 4.3 software. We measured cross-sectional area of skeletal muscle, SAT, VAT, and SMD. SMM index (cm²/m²) was computed and compared to gender/BMI-specific cut-offs from Martin et al. — a validated, widely used reference standard for sarcopenia in oncology. |

---

## SMM LOSS NSCLC — BODY COMPOSITION CHANGES IN ADVANCED NSCLC (TRANSLATIONAL)

| Field | Value |
|---|---|
| **Trial name / acronym** | SMM Loss NSCLC (no formal acronym) — pilot study |
| **ClinicalTrials.gov** | Not registered (retrospective cohort) |
| **Sponsor / Institution** | Gustave Roussy, Université Paris-Saclay — Departments of Supportive Care, Biostatistics, and Medical Oncology |
| **Study type** | Retrospective — monocentric pilot study |
| **Phase** | — (observational / translational) |
| **Design** | Retrospective cohort of N=64 advanced NSCLC patients; serial CT-based body composition; longitudinal follow-up ≥6 months |
| **Dose-escalation model** | N/A |
| **Blinding** | N/A (single blinded CT analyst) |
| **Randomization** | No |
| **Tumor type / Indication** | Non-Small Cell Lung Cancer (NSCLC), Stage III–IV |
| **Patient population** | Adults (>18y), Stage III–IV NSCLC referred to Gustave Roussy; all on chemotherapy (66% 1L, 17% 2L, 17% >2L) |
| **Line of treatment** | Mixed (1L through ≥3L) |
| **Main drug tested** | N/A — effect of chemotherapy on body composition (not intervention study) |
| **Other drugs in the study** | — |
| **Primary endpoint** | Change in SMM (skeletal muscle mass index) over time; factors modulating SMM loss |
| **Key secondary endpoints** | Changes in TAT, VAT, SAT, SMD, weight, BMI, SMM/(SMM+TAT) ratio; effect of gender/age/BMI/initial values on BC changes |
| **Primary analysis method** | Linear mixed models (LMM) with random intercept and random slope; spatial power covariance structure; descending variable selection (P<0.20 cutoff); Kaplan-Meier for OS |
| **N subjects (planned / actual)** | 64 (actual) — 45 male (70%), 19 female (30%); mean age 61±9 years |
| **N events (if TTE)** | Median OS 69 weeks (95%CI [51;82]) |
| **N arms / cohorts** | Single cohort — retrospective observational |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | LMM with random intercept + random slope; spatial power covariance (accommodates irregular measurement intervals); descending confounder selection |
| **CT measurement** | L3 landmark; SliceOMatic v4.3 (TomoVision); SMM, VAT, SAT cross-sectional areas; SMD (mean Hounsfield units); all indexed on height²; whole-body SMM estimated by regression equation; one blinded technician |
| **SMM change** | **−7 mm²/m²/week (95%CI [4–11]), P=0.0003** → ~420 g of SMM lost over 3 months of treatment |
| **Weight change** | −59 g/week (95%CI [8–111]), P<0.03 → ~750 g over 3 months |
| **BMI change** | −19 g/m²/week (95%CI [2–36]), P=0.03 |
| **TAT change** | −19 mm²/m²/week (95%CI [0–39]), P=0.05 (borderline) |
| **VAT change** | −10 mm²/m²/week, P=0.15 (NS) |
| **SAT change** | −9 mm²/m²/week, P=0.11 (NS) |
| **SMD change** | −2 mean HU/week, P=0.47 (NS — no change in muscle density) |
| **SMM/(SMM+TAT) ratio** | Stable at 37% throughout follow-up (P=0.22) |
| **SMM at baseline by gender** | Men: 51 cm²/m² vs women: 44 cm²/m² (16% higher), P=0.0001 |
| **Factors modulating SMM loss rate** | Higher initial BMI → greater SMM loss (P<0.0001); higher initial SMM → greater SMM loss (P=0.0002) |
| **Factors NOT associated with SMM loss** | Gender (P=0.41), age (P=0.28), initial TAT (P=0.47), prior weight loss (P=0.81) |
| **Weight loss rate modulator** | Higher initial weight → faster weight loss (P=0.012); gender not significant (P=0.6) |
| **Main conclusion** | SMM wasting is **greater when initial SMM and BMI are high** — a counter-intuitive regulatory phenomenon suggesting muscle preservation when a critical low level is reached; no gender/age effect on SMM loss rate; TAT and SMD stable |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Service de Biostatistique et d'Epidémiologie + INSERM U1018 / CESP, Gustave Roussy |
| **Scope** | Lead statistician — 2nd author |
| **Documents I authored** | Statistical analysis section; LMM design and implementation |
| **Analysis milestones delivered** | Longitudinal LMM for all BC parameters; confounder selection; interaction testing; Kaplan-Meier OS |
| **Statistical methods I applied** | Linear mixed models (random intercept + random slope); spatial power covariance structure; descending variable selection; Kaplan-Meier method |
| **Publication** | Yes — *Supportive Care in Cancer* 2017 — **2nd author** (Atlan, **Bayar**, Lanoy, Besse, Planchard, Ramon, Raynard, Antoun) — doi:10.1007/s00520-017-3755-z |
| **Key challenges** | <!-- TO FILL --> |
| **What I'm proud of** | Growth curve modeling approach (random slope LMM) rather than simplistic before/after comparison — captures the full longitudinal trajectory and allows estimation of individual-level rates of change |
| **Interview Q&A** | Q: Why use a spatial power covariance structure rather than AR(1) or unstructured? <br> A: Because the interval between CT scans was not fixed — it varied within patients and between patients depending on clinical scheduling. Spatial power covariance generalizes AR(1) by allowing the correlation between two measurements to decay as a continuous function of the actual time elapsed, not just the number of steps apart. This is the appropriate structure when time gaps are irregular. AR(1) would be wrong here as it assumes equal spacing. <br><br> Q: The main finding seems counterintuitive — why do patients with higher initial BMI and SMM lose MORE muscle? <br> A: This is actually consistent with what's observed in healthy subjects and in intensive care settings: the body loses proportionally more lean mass from a higher starting point. In healthy individuals, high body-fat content protects against lean body mass loss. In cancer, inflammation bypasses these regulatory mechanisms — but a different regulatory phenomenon appears: muscle seems to be actively preserved when a critical low level is approached. Clinically, this means obese or muscular NSCLC patients are paradoxically at higher risk of rapid muscle wasting. <br><br> Q: Why is this only a pilot study? <br> A: N=64 is small and heterogeneous — patients were at different disease stages, receiving different treatment lines, with irregular CT scheduling. We could not adequately model tumor evolution as a confounder and could not test non-linear slopes due to the limited number of serial measurements per patient. These exploratory findings need prospective validation in larger, more homogeneous cohorts with standardized imaging intervals. |

---

## CCNE1 / PALBOCICLIB — PALOMA-3 BIOMARKER STUDY + POP VALIDATION (JCO 2019)

| Field | Value |
|---|---|
| **Trial name / acronym** | PALOMA-3 biomarker sub-study (primary) + POP trial (validation) |
| **ClinicalTrials.gov** | PALOMA-3: NCT01942135 / POP: NCT02008734 |
| **Sponsor / Institution** | Pfizer (PALOMA-3); Gustave Roussy (POP validation contribution) |
| **Study type** | Translational / Biomarker — pre-planned and exploratory biomarker analysis of a Phase III RCT + independent validation in a preoperative window study |
| **Phase** | III (PALOMA-3); II (POP) |
| **Design** | PALOMA-3: Phase III RCT palbociclib+fulvestrant vs placebo+fulvestrant (N=521 randomized; 302 with evaluable tumor tissue). POP validation: 61 HR+ early BC patients treated with 2 weeks preoperative palbociclib |
| **Dose-escalation model** | N/A |
| **Blinding** | PALOMA-3: double-blind RCT |
| **Randomization** | PALOMA-3: Yes (2:1 palbociclib:placebo) |
| **Tumor type / Indication** | HR+/HER2− metastatic breast cancer (PALOMA-3); HR+ early breast cancer (POP) |
| **Patient population** | Endocrine-pretreated metastatic HR+/HER2− BC (PALOMA-3); treatment-naïve early BC (POP) |
| **Line of treatment** | 2L+ metastatic (PALOMA-3); neoadjuvant window (POP) |
| **Main drug tested** | Palbociclib (CDK4/6 inhibitor) + fulvestrant |
| **Other drugs in the study** | Fulvestrant (PALOMA-3); palbociclib monotherapy (POP) |
| **Primary endpoint** | Association of CCNE1 (cyclin E1) mRNA expression with palbociclib efficacy (PFS treatment interaction) |
| **Key secondary endpoints** | Panel-wide search across 2,534 cancer-related genes for treatment interactions; CDK4, CDK6, cyclin D1, RB1 expression interactions; POP validation: CCNE1 vs Ki67 antiproliferative response |
| **Primary analysis method** | Cox PH regression with treatment × gene expression interaction term; gene expression as continuous and dichotomized (by median); FDR correction for panel-wide search |
| **N subjects (planned / actual)** | PALOMA-3: 302 with tumor tissue (194 palbociclib, 108 placebo); POP: 61 |
| **N arms / cohorts** | 2 arms (PALOMA-3); single arm (POP) |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Cox regression; treatment × CCNE1 interaction; panel-wide search (2,534 genes); FDR (Benjamini-Hochberg) correction; dichotomized by median CCNE1 expression |
| **CCNE1 interaction — primary result** | High CCNE1 mRNA → **relative palbociclib resistance**: median PFS palbociclib arm: 7.6m (high CCNE1) vs 14.1m (low CCNE1); placebo arm: 4.0m vs 4.8m; **interaction P=0.00238 (unadjusted); FDR-adjusted P=0.0238** |
| **Panel-wide search** | CCNE1 was the top-ranked gene in the panel-wide 2,534-gene search after FDR correction |
| **CDK4/CDK6/CCND1/RB1** | No significant treatment interaction with any of these canonical CDK4/6 pathway genes |
| **Metastatic vs archival tissue** | CCNE1 more predictive in metastatic biopsy tissue than in archival primary tissue |
| **POP validation** | High CCNE1 mRNA associated with poor Ki67 antiproliferative response to palbociclib: **P=0.005** |
| **Main conclusion** | High cyclin E1 (CCNE1) expression is a biomarker of relative resistance to palbociclib in HR+ metastatic BC; validated in the independent preoperative POP cohort; CCNE1 may reflect CDK2-driven cell cycle progression that bypasses CDK4/6 inhibition |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Service de Biostatistique et d'Epidémiologie, Gustave Roussy |
| **Scope** | Co-author — contributed POP trial statistical analysis and data for the validation component; 10th author out of 16 |
| **Documents I authored** | Statistical analysis of POP trial biomarker data (CCNE1 vs Ki67 response) |
| **Analysis milestones delivered** | POP validation analysis — CCNE1 expression vs antiproliferative response (Ki67) |
| **Statistical methods I applied** | Biomarker-response correlation analysis in the POP trial cohort; likely Wilcoxon/correlation and logistic/linear models for Ki67 endpoint |
| **Publication** | Yes — *Journal of Clinical Oncology* 2019;37(14):1169–1178 — **10th author** (Turner, Liu, Zhu, Loi, Colleoni, Loibl, DeMichele, Harbeck, André, **Bayar**, Michiels, Zhang, Giorgetti, Arnedos, Huang Bartlett, Cristofanilli) — doi:10.1200/JCO.18.00925 |
| **Key challenges** | <!-- TO FILL --> |
| **What I'm proud of** | Co-author on a JCO paper (one of oncology's top journals) from a Phase III global RCT; the POP trial — which I was the lead statistician for at GR — provided the independent validation that confirmed the CCNE1 finding; this is a high-impact translational result with direct implications for future CDK4/6 inhibitor trial design |
| **Interview Q&A** | Q: What was your specific contribution to this paper given you are 10th author? <br> A: My contribution was to the POP trial validation component. As the lead statistician for the POP trial at Gustave Roussy, I conducted the analysis linking CCNE1 mRNA expression to Ki67 antiproliferative response after 2 weeks of palbociclib. This N=61 independent cohort was critical to validate the CCNE1 interaction found in PALOMA-3, giving the finding biological plausibility beyond just PFS in a metastatic setting. The collaboration between the PALOMA-3 team (Pfizer/Turner) and GR was based on the POP trial data and my statistical analysis of it. <br><br> Q: What is the clinical significance of the CCNE1 finding? <br> A: CDK4/6 inhibitors like palbociclib work by blocking CDK4/6-mediated cell cycle progression. High cyclin E1 expression activates CDK2, which provides an alternative route to S-phase entry that bypasses CDK4/6 inhibition. Patients with high CCNE1 still benefit from palbociclib (median PFS 7.6m vs 4.0m on placebo) but substantially less than those with low CCNE1 (14.1m vs 4.8m). This predictive interaction survived FDR correction across a 2,534-gene panel — it's not a chance finding. The implication is that CCNE1 testing at biopsy could help identify patients unlikely to gain much from CDK4/6 inhibitors, who might benefit more from other strategies. <br><br> Q: Why is FDR correction important here rather than a Bonferroni? <br> A: When testing 2,534 genes simultaneously, Bonferroni would require P<0.00002 — extremely conservative and likely to miss true signals. FDR (Benjamini-Hochberg) controls the expected proportion of false discoveries among all discoveries, which is more appropriate for exploratory genomic screens where some false positives are acceptable as long as the overall error rate is controlled. CCNE1 survived FDR at q=0.0238, meaning roughly 2.4% of findings at this threshold would be false positives across the panel. |

---

## mRCC 2L PROGNOSTIC MODEL — DEVELOPMENT AND EXTERNAL VALIDATION (TRANSLATIONAL)

| Field | Value |
|---|---|
| **Trial name / acronym** | GRCC prognostic model mRCC 2L (no formal trial acronym) |
| **ClinicalTrials.gov** | Discovery: N/A (GRCC clinical trials cohort); Validation: AXIS (NCT00678392) + INTORSECT (NCT00474786) |
| **Sponsor / Institution** | Gustave Roussy Cancer Campus (discovery); Pfizer database (validation — AXIS + INTORSECT Phase III trials) |
| **Study type** | Translational — prognostic model development (discovery cohort) + external validation (Phase III RCT data) |
| **Phase** | — (model development/validation study) |
| **Design** | Multivariable Cox model developed in GRCC cohort (N=221); externally validated in pooled Phase III RCT dataset (N=855); model compared to MSKCC and IMDC existing models |
| **Dose-escalation model** | N/A |
| **Blinding** | N/A |
| **Randomization** | N/A (observational discovery; validation uses RCT data from AXIS + INTORSECT) |
| **Tumor type / Indication** | Metastatic renal cell carcinoma (mRCC) — second-line treatment |
| **Patient population** | mRCC patients receiving 2nd-line treatment; GRCC: patients in clinical trials; Validation: from AXIS (axitinib vs sorafenib) and INTORSECT (temsirolimus vs sorafenib) Phase III trials |
| **Line of treatment** | 2nd line (post 1L targeted therapy) |
| **Main drug tested** | N/A (prognostic model — not an efficacy study) |
| **Other drugs in the study** | AXIS: axitinib vs sorafenib; INTORSECT: temsirolimus vs sorafenib (validation datasets only) |
| **Primary endpoint** | Overall survival (OS) — prognostic model for OS risk stratification in 2L mRCC |
| **Key secondary endpoints** | Model discrimination (c-index, R²); calibration; comparison to MSKCC and IMDC prognostic models |
| **Primary analysis method** | Multivariable Cox proportional hazards model with backward selection; Royston R² for explained variation; Harrell c-index; calibration plots; 4-tier risk score |
| **N subjects (planned / actual)** | Discovery: N=221 (GRCC); External validation: N=855 (AXIS + INTORSECT pooled) |
| **N events (if TTE)** | OS events — exact N not recovered |
| **N arms / cohorts** | Discovery cohort + external validation cohort (2 Phase III trials) |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Multivariable Cox model; backward variable selection; model performance: R² (Royston), c-index, calibration; benchmark comparison vs MSKCC and IMDC |
| **New prognostic factors identified** | Two new independent factors beyond IMDC criteria: (1) **Time from 1st to 2nd line treatment**: HR=1.68 (95%CI 1.23–2.31); (2) **Tumor burden**: HR=1.43 (95%CI 1.03–1.99) |
| **4-tier risk classification (GRCC model) — validation cohort** | **Favorable** (n=20): median OS = Not Reached (95%CI 24.9–NE) <br> **Intermediate** (n=367): median OS = 21.8 months (95%CI 18.6–28.2) <br> **Low poor** (n=347): median OS = 12.7 months (95%CI 11.0–15.8) <br> **High poor** (n=121): median OS = 5.5 months (95%CI 4.7–6.4) |
| **Model performance vs comparators** | GRCC model achieved higher R² and higher c-index than MSKCC and IMDC models in the external validation cohort |
| **Main conclusion** | A new 4-tier prognostic model for 2L mRCC OS was developed and externally validated; "time from 1st to 2nd line" and "tumor burden" are novel independent prognostic factors beyond IMDC; the GRCC model outperforms existing MSKCC and IMDC models |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Service de Biostatistique et d'Epidémiologie, Gustave Roussy |
| **Scope** | Lead statistician — 2nd author out of 5 |
| **Documents I authored** | Statistical analysis — model development, variable selection, validation metrics |
| **Analysis milestones delivered** | Cox model development (discovery cohort); external validation (R², c-index, calibration); benchmark comparison vs MSKCC/IMDC |
| **Statistical methods I applied** | Multivariable Cox PH model; backward selection; Royston R²; Harrell c-index; calibration; external validation; risk score derivation; Kaplan-Meier by risk group |
| **Publication** | Yes — *Angiogenesis* 2019 — **2nd author** (Derosa, **Bayar**, Albiges, Le Teuff, Escudier) — doi:10.1007/s10456-019-09664-2 |
| **Key challenges** | <!-- TO FILL --> |
| **What I'm proud of** | External validation in 855 patients from two independent Phase III RCTs — a gold-standard validation approach; model outperformed IMDC (the current clinical standard) in discrimination; identified two clinically intuitive new factors (time to 2L = proxy for 1L treatment benefit; tumor burden = direct disease severity measure) |
| **Interview Q&A** | Q: How do you validate a prognostic model externally and what metrics do you use? <br> A: External validation means applying a model developed in one dataset to an entirely independent dataset — in our case, the GRCC discovery cohort model was tested on 855 patients from the AXIS and INTORSECT Phase III trials. The key metrics are: (1) **discrimination** — how well the model separates patients by outcome, measured by Harrell's c-index (0.5=random, 1.0=perfect) and Royston's R² (proportion of OS variation explained); (2) **calibration** — whether predicted survival probabilities agree with observed proportions across risk groups. We also compared against MSKCC and IMDC, the two established clinical prognostic scores for mRCC. Our model had higher R² and c-index than both. <br><br> Q: Why did you use backward selection rather than forward or LASSO? <br> A: Backward selection starts with all candidate variables in the model and removes the least significant one at each step, which has the advantage of preserving confounding adjustments throughout the process. With a discovery cohort of N=221 and a focused set of clinically pre-specified candidate variables, backward selection was appropriate. LASSO would have been an alternative but requires cross-validation for the penalty parameter and is more data-hungry. The key discipline in either approach is validation — which we did rigorously on an external cohort 4× larger than the discovery set. <br><br> Q: What is the clinical meaning of "time from 1st to 2nd line" as a prognostic factor? <br> A: It's a proxy for how much a patient benefited from first-line therapy. A short time to 2L means the 1L treatment failed quickly — these patients have aggressive disease biology, fewer remaining treatment options, and worse prognosis. A longer time reflects durable 1L disease control, better underlying tumour biology, and more reserve for subsequent lines. Including this factor explicitly captures something that standard performance status and IMDC criteria do not fully encode. |

---

## BRCA NSCLC — SAFIR02-LUNG BRCA SUB-STUDY (TRANSLATIONAL)

| Field | Value |
|---|---|
| **Trial name / acronym** | SAFIR02-Lung / IFCT1301 — BRCA1/2 sub-study |
| **ClinicalTrials.gov** | NCT02117167 (SAFIR02-Lung) |
| **Sponsor / Institution** | UNICANCER / Gustave Roussy (coordinating centre) — multicentric French trial |
| **Study type** | Translational / genomic epidemiology — prospective sub-study within SAFIR02-Lung |
| **Phase** | — (molecular profiling sub-study of Phase II randomized trial) |
| **Design** | Prospective molecular profiling of 600 EGFR/ALK-negative advanced NSCLC patients enrolled in SAFIR02-Lung (April 2014 – March 2017); BRCA1/2 variants identified from tumor NGS + germline blood analysis; HRD score from SNP array CNV data; response assessed by RECIST 1.1 |
| **Dose-escalation model** | N/A |
| **Blinding** | N/A |
| **Randomization** | N/A (this sub-study is descriptive; parent trial is randomized) |
| **Tumor type / Indication** | Advanced NSCLC — EGFR/ALK wild-type; newly diagnosed |
| **Patient population** | 379/600 with evaluable molecular profile discussed in tumor molecular board (63%); 177 (30%) had tissue failure due to low cellularity |
| **Line of treatment** | 1L — biopsy before or during first 2 cycles of platinum-based chemotherapy |
| **Main drug tested** | N/A (platinum-based chemotherapy — response assessed as comparator for BRCA predictive value) |
| **Other drugs in the study** | N/A |
| **Primary endpoint** | Prevalence of BRCA1/2 pathogenic mutations in advanced NSCLC; ORR to platinum chemotherapy in BRCA-positive patients; clinicopathologic characteristics |
| **Key secondary endpoints** | Biallelic inactivation (LOH); HRD score; OS in BRCA-positive patients; OS by pathogenic vs VUS; OS by TP53 co-mutation |
| **Primary analysis method** | Descriptive; Kaplan-Meier for OS; log-rank test for OS comparisons; reverse Kaplan-Meier for median follow-up; K-means unsupervised clustering (Python scikit-learn) for HRD score categorization |
| **N subjects (planned / actual)** | 600 enrolled; 379 with molecular profile; 20 with BRCA variant (5.3%) |
| **N events (if TTE)** | 14/20 BRCA-positive patients died; median follow-up 30.4 months (95%CI 13.7–33.2) |
| **N arms / cohorts** | Single cohort (BRCA-positive subset of SAFIR02-Lung) |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Descriptive statistics; Kaplan-Meier OS curves; log-rank comparisons; reverse KM for follow-up; HRD score via K-means (3 clusters) |
| **NGS platform** | Ion Torrent PGM or NextSeq (Illumina); Ion AmpliSeq 65-gene cancer panel; median coverage >700 reads; 5% allelic frequency sensitivity |
| **BRCA1/2 prevalence** | Total variants (pathogenic + VUS): 20/379 = **5.3%** |
| **Pathogenic BRCA mutations** | **8/379 = 2.1%**: 6 somatic (1.6%) + 2 germline BRCA2 (0.5%); BRCA2 predominant (75%); all men, 88% smokers, median age 61.8y |
| **BRCA VUS** | 12/379 = 3.2%; 50% women; mixed histology |
| **ORR to platinum — pathogenic BRCA** | **13% overall** (1 PR / 8 patients); 5 SD, 1 PD, 1 patient not reported — low platinum sensitivity |
| **ORR to platinum — VUS** | **8.3%** (1 PR / 12 patients) |
| **Biallelic inactivation** | 9/16 evaluable (56%); high HRD score in 6/9 evaluable; discordance between biallelic status and HRD in some cases |
| **OS — all BRCA-positive (N=20)** | Median OS **12.8 months** (95%CI 5.6–22.9) — consistent with unselected advanced NSCLC |
| **OS — pathogenic vs VUS** | 11.1m vs 17.9m; log-rank **P=0.07** (trend, not significant) |
| **OS — TP53 co-mutation** | 17.9m (TP53 mut) vs 9.5m (no TP53 mut); **P=0.3** (NS) |
| **Main conclusion** | Pathogenic BRCA1/2 mutations occur in 2.1% of advanced NSCLC — predominantly somatic, in men/smokers. Low platinum sensitivity (ORR 13%) and molecular discordance (biallelic/HRD) suggest BRCA mutation in NSCLC is often an incidental event unrelated to tumorigenesis — not a reliable agnostic biomarker for treatment decisions |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Service de Biostatistique et d'Epidémiologie, Gustave Roussy + CESP, INSERM, University Paris-Saclay |
| **Scope** | Trial statistician for SAFIR02-Lung — contributor to this sub-study; 13th author out of 17 (shared biostatistics affiliation with Stefan Michels) |
| **Documents I authored** | Contributed to OS analysis and statistical reporting for this sub-study |
| **Analysis milestones delivered** | Kaplan-Meier OS analyses; reverse KM follow-up; log-rank comparisons |
| **Statistical methods I applied** | Kaplan-Meier; reverse Kaplan-Meier; log-rank test; descriptive statistics |
| **Publication** | Yes — *JTO Clinical and Research Reports* 2020;1(3):100068 — **13th author** (Remon, Besse, Leary, Bièche, Job, Lacroix, Auguste, Mauduit, Audigier-Valette, Raimbourg, Madroszyk, Michels, **Bayar**, Jimenez, Soria, Rouleau, Barlesi) — doi:10.1016/j.jtocrr.2020.100068 |
| **Key challenges** | <!-- TO FILL --> |
| **What I'm proud of** | Contributing to a clinically important negative finding: prospective evidence that BRCA mutation in NSCLC does not confer platinum sensitivity — directly relevant for precision medicine decisions and PARP inhibitor basket trial design |
| **Interview Q&A** | Q: This paper is a sub-study of SAFIR02-Lung — how does it relate to the main trial? <br> A: SAFIR02-Lung enrolled 600 NSCLC patients for molecular profiling-guided treatment. The main trial assessed whether NGS-guided maintenance therapy improves PFS. This sub-study used the same molecular profiling data to specifically characterize BRCA1/2 mutations — their prevalence, biological features (biallelic inactivation, HRD score), and clinical relevance (platinum response, OS). The sub-study is independent of the randomization and reports on the screening phase cohort only. My role as SAFIR02-Lung trial statistician meant I contributed the survival analyses (KM, log-rank) for the BRCA-positive subgroup. <br><br> Q: The ORR to platinum was only 13% in pathogenic BRCA patients — is that surprising? <br> A: Yes, it's strikingly low. In BRCA-associated cancers (ovarian, breast, pancreatic), BRCA mutations confer HRD and platinum hypersensitivity — ORRs of 30–45% are expected with platinum. In our NSCLC cohort with pathogenic BRCA mutations, only 1 of 8 patients achieved a partial response. This, combined with the molecular discordance (biallelic inactivation in only 1/4 evaluable somatic BRCA cases), suggests that in NSCLC, BRCA mutations are often passenger events driven by tobacco-induced mutagenesis rather than causal events in tumorigenesis. BRCA mutation should not be assumed to be actionable in NSCLC the same way it is in BRCA-associated cancers. <br><br> Q: What is the HRD score and how was it calculated? <br> A: The Homologous Recombination Deficiency score is a genomic instability metric derived from copy number variation (CNV) data. We calculated it as the number of altered chromosomal segments of a specific size (>15 Mbp and smaller than a chromosome arm) from SNP array data. K-means unsupervised clustering was applied to categorize samples into 3 HRD score groups. The score was validated in an ovarian cancer cohort and a published endometrial cancer cohort. The key clinical insight is that even patients with high HRD scores and pathogenic BRCA mutations in our cohort did not show platinum sensitivity — suggesting the HRD signal in NSCLC is driven by tobacco mutagenesis, not BRCA-mediated repair deficiency. |

---

## E2F4 LETROZOLE RESISTANCE — POP VALIDATION (TRANSLATIONAL / CCR 2018)

| Field | Value |
|---|---|
| **Trial name / acronym** | Guerrero-Zotano et al. study — Valencia neoadjuvant letrozole cohort (discovery) + POP trial (NCT02008734, validation) |
| **ClinicalTrials.gov** | POP trial: NCT02008734; ACOSOG Z1031B: NCT01953588 (external validation); METABRIC (external validation) |
| **Sponsor / Institution** | Vanderbilt University Medical Center (lead; Arteaga lab) + Instituto Valenciano de Oncología (patient cohort) + Gustave Roussy (POP trial contribution) |
| **Study type** | Translational — retrospective cohort (neoadjuvant letrozole discovery cohort) + prospective validation in POP trial + external validation in ACOSOG Z1031B and METABRIC |
| **Phase** | — (translational biomarker study; uses Phase II POP trial data for validation) |
| **Design** | Discovery: 68 ER+/HER2- postmenopausal women treated with neoadjuvant letrozole median 7.2 months; targeted DNA sequencing (303 genes) + RNA-seq on surgical FFPE specimens; endocrine resistance defined as PEPI ≥4 and/or recurrence. Validation: ANCOVA on POP trial gene expression data (N=60 tumors) |
| **Dose-escalation model** | N/A |
| **Blinding** | POP trial: randomized placebo-controlled |
| **Randomization** | POP trial: Yes (palbociclib vs placebo) |
| **Tumor type / Indication** | ER+/HER2- operable early breast cancer |
| **Patient population** | Postmenopausal women with operable ER+/HER2- BC; Valencia cohort: median age 77y; 59% stage II, 41% stage III |
| **Line of treatment** | Neoadjuvant (preoperative) |
| **Main drug tested** | Letrozole (aromatase inhibitor); palbociclib (CDK4/6 inhibitor) in POP trial validation |
| **Other drugs in the study** | N/A |
| **Primary endpoint** | Identify transcriptional biomarkers of resistance to prolonged neoadjuvant letrozole; develop and validate E2F4 activation signature |
| **Key secondary endpoints** | PEPI score vs recurrence; E2F4 signature vs RFS; E2F4 signature vs palbociclib response; external validation in ACOSOG Z1031B and METABRIC |
| **Primary analysis method** | DESeq2 (RNA-seq DEG); Enrichr (transcription factor binding enrichment); ANCOVA for POP trial gene expression; Kaplan-Meier + log-rank; Cox regression; FDR (Benjamini-Hochberg); Fisher exact test; t-test; R v3.3.0 |
| **N subjects (planned / actual)** | Discovery: N=68 (58 with RNA-seq); POP validation: N=60; ACOSOG Z1031B: N=110; METABRIC: N=1,408 |
| **N events (if TTE)** | Valencia: 13/68 recurrences (19%) at median follow-up 58 months |
| **N arms / cohorts** | Discovery cohort + POP trial (2 arms: palbociclib vs placebo) + 2 external validation datasets |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | DESeq2 for DEG; FDR (BH); Enrichr for TF overlap; ANCOVA (POP trial: treatment effect on gene expression change, adjusted for baseline); Kaplan-Meier; Cox; Fisher exact |
| **PEPI score vs outcomes** | 5-year RFS: **100% (PEPI 0), 85% (PEPI 1-3), 61% (PEPI ≥4)**; log-rank **P=0.001** |
| **Endocrine resistance rate** | 35% of tumors (24/68): PEPI ≥4 and/or recurrence |
| **E2F4 transcription factor overlap** | 47 most upregulated genes in resistant tumors → **20/710 E2F4 targets** overlap; adjusted **P=2.56×10⁻¹⁵** (Enrichr) |
| **Palbociclib effect on E2F4 genes (POP trial)** | Palbociclib significantly decreased 24/47 resistance-associated genes (FDR<0.01); **18/20 E2F4 target genes** suppressed; placebo did not |
| **ANCOVA model (POP)** | Treatment effect on change from baseline to surgery in gene expression; covariates: baseline expression + treatment arm |
| **E2F4 signature vs RFS (Valencia)** | 5-year RFS: **100% (low), 79% (medium), 45% (high)** E2F4 tertile; log-rank **P=0.0015** |
| **METABRIC validation** | E2F4 high vs low tertile: **HR=2.96 (95%CI 2.17–3.67)** for relapse; **HR=1.59 (95%CI 1.32–1.94)** for death (N=1,408 adjuvant-treated ER+ BC) |
| **ACOSOG Z1031B validation** | CCCA rate (Ki67 ≤2.7% at 2 weeks): 18% (high E2F4) vs 50% (low E2F4); **P<0.001** |
| **POP high-E2F4 subgroup (N=30)** | Palbociclib suppressed P-RB by ~90% but Ki67 by only 67% — partial antiproliferative effect without concurrent endocrine therapy |
| **Key mutations (discovery cohort)** | PIK3CA 40%, CDH1 21%, KMT2C 16%, TP53 14%; PI3K pathway mutations: 70% (PEPI ≥4) vs 10% (PEPI 0), P=0.003 |
| **Main conclusion** | ER-independent E2F4 transcriptional program drives resistance to prolonged neoadjuvant letrozole; CDK4/6 inhibition (palbociclib) suppresses this program in primary tumors; adjuvant CDK4/6 inhibitors may benefit ER+ patients failing preoperative estrogen deprivation |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | Statistician — Service de Biostatistique et d'Epidémiologie, Gustave Roussy + CESP, INSERM, University Paris-Saclay |
| **Scope** | Contributor (POP trial statistical analysis) — 16th author out of 22; listed for data acquisition, analysis/interpretation, writing/revision, and administrative/technical support |
| **Documents I authored** | ANCOVA analysis of POP trial gene expression data (treatment effect on E2F4 gene expression change from baseline to surgery) |
| **Analysis milestones delivered** | POP trial gene expression ANCOVA; contributed to statistical reporting for POP validation component |
| **Statistical methods I applied** | ANCOVA model (change from baseline to surgery; covariates: baseline expression + treatment arm); gene expression analysis in POP trial |
| **Publication** | Yes — *Clinical Cancer Research* 2018;24(11):2517–2529 — **16th author** (Guerrero-Zotano, Stricker, Formisano, Hutchinson, Stover, Lee, Schwarz, Giltnane, Estrada, Jansen, Servetto, Gavila, Perez-Fidalgo, Lluch, Llombart-Cussac, **Bayar**, Michiels, Andre, Arnedos, Guillem, Ruiz-Simon, Arteaga) — doi:10.1158/1078-0432.CCR-17-2904 |
| **Key challenges** | <!-- TO FILL --> |
| **What I'm proud of** | The POP trial's gene expression data served as the key biological validation that CDK4/6 inhibition suppresses the E2F4 resistance program in vivo — in actual patients' tumors, not just cell lines. My statistical analysis (ANCOVA for treatment effect on E2F4 gene expression) underpinned one of the central figures of this high-impact CCR paper |
| **Interview Q&A** | Q: What was your specific contribution to this paper? <br> A: As lead statistician for the POP trial at Gustave Roussy, I performed the ANCOVA analysis of gene expression array data from POP trial patients. The model assessed the effect of palbociclib vs placebo on the change from baseline biopsy to surgical specimen for each of the 47 resistance-associated genes identified in the Valencia letrozole cohort. The ANCOVA adjusted for baseline gene expression and treatment arm. This analysis showed that palbociclib — but not placebo — significantly suppressed 24/47 resistance genes, including 18/20 E2F4 targets. This was the clinical validation that the E2F4 program is CDK4/6 inhibitor-sensitive in vivo. <br><br> Q: Why use ANCOVA rather than a simple t-test for the gene expression comparison? <br> A: ANCOVA is superior for pre-post comparisons in a randomized setting because it adjusts for baseline gene expression levels. Patients can have very different baseline expression, and if the randomization happened to imbalance some genes at baseline, a naive post-surgery comparison would be confounded. By including baseline expression as a covariate, ANCOVA increases precision (reduces residual variance) and ensures the treatment effect estimate reflects the true causal impact of palbociclib. It also correctly handles the correlation between the pre- and post-treatment measurements. <br><br> Q: What is the PEPI score and why is it important? <br> A: PEPI (Preoperative Endocrine Prognostic Index) is a composite score based on posttreatment ER status, Ki67, tumor size (ypT), and nodal status (ypN) assessed on the surgical specimen after neoadjuvant endocrine therapy. A PEPI of 0 means all features are favorable; PEPI ≥4 identifies high-risk patients. Its key value is that it integrates both the intrinsic tumor biology AND the response to endocrine treatment — unlike pretreatment biomarkers which only capture baseline features. In this study, PEPI ≥4 was associated with a 5-year RFS of only 61% vs 100% for PEPI 0, making it a powerful endpoint for identifying patients who might benefit from adjuvant CDK4/6 inhibitors. |

---

## PhD PAPER 1 — RARE DISEASE TRIAL SERIES SIMULATION (STATISTICS IN MEDICINE 2016)

| Field | Value |
|---|---|
| **Trial name / acronym** | N/A — Simulation study |
| **ClinicalTrials.gov** | Not applicable |
| **Sponsor / Institution** | Gustave Roussy / Université Paris-Saclay / CESP INSERM + Mayo Clinic (D. Sargent) |
| **Study type** | Methodology — Monte Carlo simulation |
| **Phase** | N/A |
| **Design** | Simulation of K successive Phase III two-arm superiority RCTs over a 15-year research horizon; 5000 replications per parameter set |
| **Dose-escalation model** | N/A |
| **Blinding** | N/A |
| **Randomization** | N/A |
| **Research question** | What α-level and trial sample size maximize expected total survival benefit over a 15-year horizon, while keeping P[selecting a worse treatment] below a threshold? |
| **Context** | Rare oncology diseases where large traditional trials (α=2.5%, 80% power) are not feasible due to small patient populations |
| **Patient population** | N/A — simulation; disease scenarios parameterized by baseline median OS (6m, 1y, 2y) and 2-yr OS probability (75%) |
| **Simulation parameters** | 4 disease severities × 3 accrual rates (50/100/200/yr) × 4 treatment effect distributions (D1–D4) × 7 α-levels (2.5%–50%) × up to 9 values of K → 1568 parameter sets |
| **Treatment effect model** | HR ~ log-normal; parameters derived from Djulbegovic meta-analysis of 698 NCI-sponsored RCTs (1955–2006); calibrated to SEER empirical data |
| **Primary performance metric** | Expected total survival benefit: E[1 − 1/HRo] where HRo compares year-15 selected treatment vs initial control |
| **Risk constraint** | P[benefit < 0] ≤ 1% (stringent) or 2.5% (lenient) — probability of ending up with a worse treatment at year 15 |
| **Secondary metric** | Expected proportion of lives saved (PLS) over the series |
| **Software** | R 3.0.2, `survival` package |
| **Funding** | EU FP7 ENCCA (grant 261474); NCI CA15083 |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Monte Carlo simulation; exponential survival; log-normal HR distribution; one-sided log-rank test at each trial; dynamic control arm updating; 5000 reps per parameter set |
| **Novel contribution vs prior work** | Replaced the "relative HR" cumulation model of Le Deley et al. (2012) with an **independent log-normal hazard rate** for each experimental treatment — more realistic (treatment effects not compounded trial-to-trial) and more flexible for extending to complex designs |
| **Key finding 1 — α-level** | Relaxing α from 2.5% to 10–20% increases expected total survival benefit; gains plateau above α=20% (further relaxation adds little) |
| **Key finding 2 — trial number K** | Expected total survival benefit increases with K up to an optimal point, then decreases — running more smaller trials is beneficial, but not infinitely so |
| **Key finding 3 — disease severity** | Optimal designs (relaxed α, more trials) **outperform traditional designs for severe diseases** (median OS ≤1 year) and accrual ≥100/yr; **no major benefit for better-prognosis diseases** (2-yr OS=75%) |
| **Key finding 4 — accrual** | Very rare diseases (accrual 50/yr): increasing K not helpful; relaxing α may help modestly. Higher accrual: more trials more beneficial |
| **Example result (median OS=1yr, accrual=100/yr, D1, threshold 1%)** | Optimal: K=8, n=88, α=20% → E[benefit]=**48.6%** vs traditional K=2, n=650, α=2.5% → **26.3%** (+85% relative improvement) |
| **Example result (median OS=0.5yr, accrual=100/yr, D1, threshold 1%)** | Optimal: K=10, n=100, α=20% → E[benefit]=**54.0%** vs traditional → **27.2%** (×2 benefit) |
| **Robustness** | Results stable across: reduced variance parameter σ (sensitivity), 10/25yr horizons, alternative PLS metric |
| **SEER validation** | D1 (historical), D2 (optimistic), D3 (pessimistic) consistent with SEER cancer survival trends; D4 (very pessimistic) considered overly conservative |
| **Regulatory relevance** | Provides formal statistical justification for relaxed α-levels used by International Rare Cancers Initiative (IRCI) trials |
| **Main conclusion** | For severe rare cancers with accrual ≥100/yr, a series of small trials with α=10–20% yields ~2× the long-term survival benefit of the traditional approach, while keeping the risk of a detrimental outcome acceptably low (≤1%) |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | PhD Student — Service de Biostatistique et d'Epidémiologie, Gustave Roussy + CESP INSERM, Université Paris-Saclay |
| **Scope** | **First author** — full ownership of simulation design, implementation, analysis, and writing |
| **Supervisors** | Marie-Cécile Le Deley (corresponding author, GR); Gwénaël Le Teuff (GR); Stefan Michiels (GR); Daniel J. Sargent (Mayo Clinic) |
| **Documents I authored** | Full paper; simulation R code (available upon request per paper); supplementary sections S2–S10 |
| **Analysis milestones delivered** | Full simulation framework (1568 parameter sets × 5000 reps); SEER validation; sensitivity analyses; optimal design tables; submission Nov 2014 → accepted Feb 2016 |
| **Statistical methods I applied** | Monte Carlo simulation; exponential survival modeling; log-normal HR distribution parameterization from Djulbegovic meta-analysis; one-sided log-rank test; dynamic control arm selection algorithm; constrained optimization (maximize E[benefit] s.t. P[detrimental]≤threshold); SEER empirical data analysis |
| **Publication** | Yes — *Statistics in Medicine* 2016; DOI: 10.1002/sim.6942; PMID: 27027783 — **1st of 5 authors** (**Bayar**, Le Teuff, Michiels, Sargent, Le Deley) |
| **Key challenges** | <!-- TO FILL --> |
| **What I'm proud of** | First-author publication in a top biostatistics journal (Statistics in Medicine IF ~2.5) as the first chapter of my PhD; developed a novel simulation framework that extended prior work (Le Deley 2012, Sposto & Stram 1999) with a more realistic treatment effect model; formal justification for a controversial-but-practiced approach (relaxed α in rare cancer trials) endorsed by IRCI; presented at international meetings |
| **Interview Q&A** | Q: What was the core methodological innovation of your first PhD paper? <br> A: The key innovation was replacing the "relative HR" treatment effect model with an **independent log-normal hazard rate** for each experimental treatment. In prior work (Le Deley 2012), a new treatment's efficacy was defined relative to the current control — so survival benefits accumulated trial-to-trial in an overly optimistic compounding fashion. My model instead draws each treatment's hazard rate independently from a log-normal distribution calibrated to 698 NCI-sponsored RCTs, making the framework more realistic and flexible. This allowed me to show more nuanced results: the optimal strategy depends strongly on disease severity and accrual, rather than uniformly recommending relaxed α-levels. <br><br> Q: Why is the "probability of a detrimental effect" a better constraint than Type I error for this setting? <br> A: Traditional Type I error (α) measures the probability of a false positive **under the null hypothesis of no treatment difference**. But in practice, some treatments are actually harmful. In a series of trials with relaxed α, the real risk is selecting a genuinely worse treatment as your standard of care after 15 years. P[benefit < 0] directly measures this real-world harm: the probability that the year-15 treatment has a higher hazard rate than the baseline control. It is a more patient-relevant risk metric than α, and it is robust to the multiplicity of decisions made over K successive trials — something Type I error cannot capture in this sequential setting. <br><br> Q: What is the practical implication for trial designers working in rare cancers today? <br> A: For severe rare cancers (median OS ≤1 year) where accrual is at least 100 patients/year, you should consider running a series of 6–10 smaller trials with a one-sided α of 10–20%, rather than two large traditional trials. This yields approximately double the long-term survival benefit over a 15-year horizon, while keeping the probability of ultimately adopting a harmful treatment below 1%. Crucially, these recommendations are disease-specific: for cancers with better prognosis or accrual below 50/year, the traditional approach performs comparably. |

---

## PhD PAPER 2 — GROUP SEQUENTIAL ADAPTIVE DESIGNS IN SERIES OF TRIALS (SMMR 2019)

| Field | Value |
|---|---|
| **Trial name / acronym** | N/A — Simulation study |
| **ClinicalTrials.gov** | Not applicable |
| **Sponsor / Institution** | Gustave Roussy / Université Paris-Saclay / CESP INSERM + Medical University of Vienna (F. Koenig) |
| **Study type** | Methodology — Monte Carlo simulation |
| **Phase** | N/A |
| **Design** | Extension of Paper 1 (Bayar, Stat Med 2016): adds (1) group sequential interim analyses (futility and/or efficacy) and (2) multi-arm adaptive three-arm designs with treatment selection at interim to the series-of-trials framework |
| **Research question** | Does adding interim analyses and/or three-arm selection designs to the series-of-trials framework further improve long-term survival benefit and risk control in rare diseases? |
| **Designs evaluated** | (1) fixed.sample: series of 2-arm RCTs, no interim; (2) series of 2-arm RCTs + futility/efficacy interim (Wieand, OBF β, OBF α, OBF β+α); (3) treat.selection: series of 2-stage 3-arm RCTs with treatment selection at interim; (4) Ad.Futility.OBF: treat.selection + futility interim |
| **Stopping rules** | Wieand (stop if interim p≥0.5); OBF β-spending (non-binding futility); OBF α-spending (efficacy); both OBF β+α |
| **Simulation parameters** | 4 disease severities × 3 accrual rates (50/100/200/yr) × 4 treatment effect distributions (D1–D4) × 6 (power, target HR) combinations = 288 simulation parameter sets |
| **Design parameters** | 7 α-levels (0.025–0.5) × 5 stopping rules = 35; total: 35 × 288 = 10,080 parameter sets × 10,000 reps each |
| **Main scenario** | Baseline median OS=1yr; accrual=50/yr; distribution D1 (historical); power=0.9 for target HR=0.6 |
| **Software** | R 3.2.3; code on GitHub: https://github.com/MohamedAmineBAYAR/Group-sequential-adaptive-designs-in-series-of-time-to-event-randomized-trials-in-rare-diseases |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Monte Carlo simulation; exponential survival; Kim-Tsiatis sample size; one-sided log-rank; inverse normal combination function (Lehmacher-Wassmer); Simes test for intersection hypotheses; closed testing procedure (FWER control); left-truncation for stage-2 p-values; 10,000 reps per parameter set |
| **Novel contribution vs Paper 1** | First simulation study to embed group sequential interim analyses AND multi-arm adaptive designs into a series-of-trials long-horizon framework; formal FWER control for three-arm adaptive series using closed testing + inverse normal combination |
| **Key finding 1 — α sweet spot** | Relaxing α to **0.1** → materially larger survival gain with acceptable risk; beyond α=0.1 → small marginal gain but risk increases sharply (P[detrimental] reaches unacceptable levels, particularly under pessimistic D4) |
| **Key finding 2 — futility interim** | At α≤0.1, adding an OBF β-spending futility interim improves BOTH survival benefit AND risk simultaneously vs fixed.sample (rare win-win); benefit of futility rule diminishes for α>0.1 |
| **Key finding 3 — efficacy interim** | Adding an OBF α-spending efficacy interim: almost **no additional survival gain** at any α-level |
| **Key finding 4 — three-arm series** | Three-arm (treat.selection) series **systematically outperform** two-arm series: larger survival gain + better risk control across all stopping rules and α-levels; approx. half the number of trials but same number of experimental treatments tested |
| **Key numbers (main scenario, D1, α=0.1)** | fixed.sample: E[benefit]=36.4%, P[detrimental]=0.91%; Ia.Futility.OBF: 39.2%, 0.84%; treat.selection: 39.2%, 0.58%; Ad.Futility.OBF: **43.2%, 0.38%** → three-arm + futility = best combination |
| **Under pessimistic D4, α=0.1** | fixed.sample: E[benefit]=18.7%, P[detrimental]=2.93%; Ad.Futility.OBF: 25.2%, 1.69% — three-arm + futility still dominates |
| **FPR at α=0.1** | ~2.5–2.7% (two-arm); ~1.9–2.0% (three-arm) — three-arm designs also lower false positive rate |
| **Sensitivity analyses** | Results robust across disease severities, accrual rates, (power, target HR) combinations; more severe diseases → better absolute performance; conclusions stable even with a time break between trials (leapfrogging sensitivity) |
| **Main conclusion** | The optimal design for rare disease trial series combines three-arm treatment selection with OBF β-spending futility interim at α≈0.1: achieves ~43% expected survival benefit with <0.4% detrimental risk (historical D1). Interim efficacy rules are not worth adding. |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | PhD Student — Service de Biostatistique et d'Epidémiologie, Gustave Roussy + CESP INSERM, Université Paris-Saclay |
| **Scope** | **First author** — full ownership of extended simulation framework design, R implementation, all analyses, and writing |
| **Co-authors** | Le Teuff G (GR); Koenig F (Medical Univ. Vienna — methodological collaborator on adaptive designs); Le Deley MC (now Centre Oscar Lambret); Michiels S (GR, **corresponding author**) |
| **Documents I authored** | Full paper; full simulation R code on GitHub; supplementary materials S.1–S.5 |
| **Analysis milestones delivered** | Extended simulation framework (10,080 parameter sets × 10,000 reps); all design comparisons; sensitivity analyses; GitHub code release |
| **Statistical methods I applied** | Monte Carlo simulation; exponential survival; Kim-Tsiatis sample size; one-sided log-rank test; OBF β- and α-spending boundaries; inverse normal combination function (Lehmacher-Wassmer); Simes test for intersection hypotheses; closed testing procedure; left-truncation for stage-2 independence; FWER control for multi-arm adaptive series |
| **Publication** | Yes — *Statistical Methods in Medical Research* 2019; DOI: 10.1177/0962280219862313; PMID: 31354106 — **1st of 5 authors** (**Bayar**, Le Teuff, Koenig, Le Deley, Michiels) |
| **Key challenges** | <!-- TO FILL --> |
| **What I'm proud of** | First-author publication extending the PhD framework into adaptive designs — required mastering closed testing procedures, combination tests, and left-truncation for stage-wise independence, all new methodological territory. Code published openly on GitHub. Paper dedicated to Daniel Sargent (Mayo Clinic co-supervisor, deceased). |
| **Interview Q&A** | Q: How did you ensure FWER control in the three-arm adaptive treatment selection design? <br> A: The three-arm design has two sources of type I error inflation: (1) combining information across trial stages, and (2) multiple hypothesis testing with adaptive treatment selection at interim. I addressed these separately. For stage combination, I used the **inverse normal combination function** (Lehmacher-Wassmer) with pre-specified equal weights — this is valid because stage-wise p-values are made independent using right-censoring at end of stage 1 and left-truncation at start of stage 2. For multiple testing, I used the **Simes test** for intersection hypotheses within the **closed testing procedure** (Marcus-Eric-Gabriel). This controls the FWER in the strong sense. The final critical boundaries of the combination test are equivalent to the boundaries of a group sequential design at the corresponding information fraction. <br><br> Q: What is the Wieand futility rule and why use it? <br> A: Wieand et al. (1994) proposed stopping for futility if the one-sided interim p-value ≥ 0.5 — equivalently, if the observed HR ≥ 1 at interim (experimental is doing no better or worse than control). It is non-binding, simple, offers ~50% probability of stopping early for truly ineffective treatments with only a small power loss, and is intuitive to DMC members. In our series framework, early futility stopping redirects the research horizon to testing the next experimental treatment sooner, which under optimistic treatment effect assumptions increases the expected survival benefit. <br><br> Q: Why does adding an efficacy interim analysis give almost no gain in this framework? <br> A: An efficacy interim stopping rule shortens individual trials when strong effects are seen early, freeing capacity for the next trial sooner. However, in the series framework the control arm of the next trial is inherited from the current one — so stopping a trial very early yields a less precisely estimated control hazard rate, making sample sizing for the next trial less accurate. The net effect is near-zero additional survival benefit across α-levels, because what you gain in speed you lose in precision of the inherited control estimate. In contrast, futility stopping eliminates whole ineffective treatments from the research horizon early, which has a clearer net benefit. <br><br> Q: What is the practical recommendation from Paper 2 for someone designing a rare cancer program today? <br> A: Design each trial in the series as a three-arm study (2 experimental arms vs 1 control), using a one-sided α of 0.1 with an OBF β-spending futility rule at the halfway point. Treatment selection at interim (pick the better experimental arm to continue to stage 2) controls FWER via closed testing. This combination delivers ~43% expected 15-year survival benefit with <0.4% risk of ending up worse than baseline — roughly 1.5× better than the two-arm fixed-sample design from Paper 1. Keep α ≤ 0.1 — beyond that risk escalates steeply without meaningful additional benefit. |

---

## PhD PAPER 3 — CRM2DIM: DUAL-AGENT BAYESIAN CRM SAS MACRO (CMPB 2019)

| Field | Value |
|---|---|
| **Paper title** | CRM2DIM: A SAS macro for implementing the dual-agent Bayesian continual reassessment method |
| **ClinicalTrials.gov** | Not applicable — software paper |
| **Sponsor / Institution** | Gustave Roussy / INSERM U1018 / CESP / Université Paris-Saclay + University of North Carolina at Chapel Hill |
| **Study type** | Methodology — Software development (SAS macro) |
| **Phase** | Phase I methodology |
| **Background** | CRM (O'Quigley et al.) is the gold standard model-based dose-escalation design for single-agent Phase I oncology trials. With targeted therapy combinations, Phase I trials increasingly test two agents simultaneously to find one or more maximum tolerated dose combinations (MTDC). Multiple designs exist but very few software implementations, especially in SAS. |
| **Method implemented** | Wang-Ivanova two-dimensional (2D) Bayesian CRM for dual-agent Phase I dose-finding (Wang K, Ivanova A. Biometrics 2005;61:217–222) |
| **Software platform** | SAS — using the SAS MCMC procedure (SAS/STAT 9.2+) |
| **Macro name** | CRM2DIM |
| **Key features** | (1) Online trial execution: dose assignment for next cohort; (2) Simulation mode; (3) Start-up rule (initial dose cohort before CRM takes over); (4) Historical data incorporation; (5) Choice of dose-toxicity model: power model OR logistic regression, each with or without drug interaction term |
| **Output** | Recommended next dose combination; MTD/MTDC estimate; DLT probability surface; simulation metrics (% correct MTDC selection, % over-/under-dosing) |
| **Keywords** | Phase I; dose-finding; drug combinations; CRM; Bayesian MCMC; SAS |

### Key Results

| Field | Value |
|---|---|
| **Statistical model / approach** | Bayesian 2D CRM: posterior DLT probability p(d1,d2) modeled as a parametric function of dose levels; MCMC posterior sampling via SAS PROC MCMC; dose assignment at each step = dose combination with posterior DLT probability closest to target toxicity rate (θ, typically 0.25–0.33) |
| **Dose-toxicity models available** | Power model: p(d1,d2) = α^(exp(β1·x1 + β2·x2)); Logistic model with/without interaction term (β3·x1·x2) |
| **Start-up rule** | Initial dose cohorts assigned per standard 3+3 or pre-specified path before Bayesian model activation — handles early sparse-data instability |
| **Historical data** | Prior data from previous studies can be incorporated as pseudo-observations, informing the initial posterior |
| **Simulation capability** | Full trial simulation to assess operating characteristics: % correct MTDC selection, % dose combinations recommended, expected trial duration, DLT rates by combination |
| **Novel contribution** | First SAS MCMC-based implementation of Wang-Ivanova 2D CRM; more flexible than existing R packages (dfcrm, crmPack) for SAS-based clinical environments; interaction term option adds clinical realism for synergistic/antagonistic drug combinations |
| **Validation** | Results compared to dfcrm R package — concordant; simulation results and hypothetical trial example presented in paper |
| **Main conclusion** | CRM2DIM provides a complete, easy-to-use SAS tool for designing and running dual-agent Phase I oncology trials; fills a gap in available software for combination dose-finding in SAS-based clinical settings |

### My Role

| Field | Value |
|---|---|
| **My title at the time** | PhD Student / Statistician — Service de Biostatistique et d'Epidémiologie, Gustave Roussy + CESP INSERM, Université Paris-Saclay |
| **Scope** | **First author** — macro development, simulation, writing |
| **Co-authors** | Ivanova A (UNC Chapel Hill — co-developer of original Wang-Ivanova 2D CRM, methodological advisor); Le Teuff G (GR, **corresponding author**, PhD supervisor) |
| **Documents I authored** | Full paper; SAS macro CRM2DIM (available from authors upon request per paper) |
| **Analysis milestones delivered** | Full SAS macro coding (SAS MCMC procedure); simulation study; hypothetical trial example; comparison with dfcrm R package |
| **Statistical methods I applied** | Bayesian CRM; MCMC posterior sampling (SAS PROC MCMC); 2D dose-toxicity modeling (power + logistic models); start-up rule implementation; historical data integration; simulation of Phase I trials |
| **Connection to clinical work** | CRM expertise directly applied to CHIPASTIN trial (GR — dual-agent CRM dose-escalation in ovarian cancer); later evolved into BLRM expertise at Novartis (asciminib pediatric bridging — BLRM is the Bayesian extension of CRM with EWOC) and BOIN at J&J (ramantamig Phase Ib) |
| **Publication** | Yes — *Computer Methods and Programs in Biomedicine* 2019;176:211–223; DOI: 10.1016/j.cmpb.2019.04.025; PMID: 31200907 — **1st of 3 authors** (**Bayar**, Ivanova, Le Teuff) |
| **Key challenges** | <!-- TO FILL --> |
| **What I'm proud of** | A tangible, immediately usable research output — a working SAS macro used in real Phase I trials; collaboration with Anastasia Ivanova (UNC), co-creator of the underlying Wang-Ivanova design; bridges PhD statistical theory directly to clinical practice; completes the PhD trilogy: long-horizon Phase III series (Papers 1&2) + Phase I dose-finding tool (Paper 3) |
| **Interview Q&A** | Q: What is the Wang-Ivanova 2D CRM and why does it need a separate software implementation? <br> A: The Wang-Ivanova 2D CRM (Biometrics 2005) extends O'Quigley's original CRM to a two-drug combination setting. Instead of a 1D dose ladder, you have a 2D dose grid. At each step, the posterior DLT probability surface is estimated across all dose combinations via Bayesian MCMC, and the next cohort is assigned to the combination whose posterior DLT probability is closest to the target toxicity rate (e.g. 33%). The challenge for software is that SAS is the dominant platform in pharma/clinical environments, but no SAS implementation existed. R packages (dfcrm, crmPack) require R infrastructure which many clinical trial sites do not have. CRM2DIM fills that gap using SAS PROC MCMC, which became available in SAS/STAT 9.2. <br><br> Q: What does the interaction term in the logistic model add clinically? <br> A: The interaction term β3·x1·x2 allows the model to capture synergy (β3 > 0: combined toxicity exceeds additive) or antagonism (β3 < 0: combined toxicity below additive) between the two drugs. For many targeted therapy combinations in oncology, the toxicity profile is not simply additive — e.g. a VEGF inhibitor combined with a cytotoxic can have synergistic toxicity at high dose combinations. Including the interaction term makes the dose-toxicity surface more flexible and clinically realistic, at the cost of an additional parameter that requires sufficient data to estimate reliably. The macro gives the user the choice of including or excluding it. <br><br> Q: How does your CRM expertise connect to your later work at Novartis and J&J? <br> A: The PhD CRM work gave me deep Bayesian dose-escalation foundations. At Novartis, I applied the BLRM (Bayesian Logistic Regression Model) — which is essentially CRM with the added EWOC (Escalation With Overdose Control) constraint — for the asciminib pediatric bridging study using the OncoBayes2 R package. At J&J, I designed the ramantamig Phase Ib using the BOIN design, a model-assisted method that is conceptually simpler than CRM/BLRM but FDA-endorsed. All three — CRM, BLRM, BOIN — share the same core Bayesian framework: sequential dose assignment based on posterior DLT probability estimates. |
