# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

This is a LaTeX-based CV project. It requires a LaTeX distribution with XeLaTeX engine (e.g., TeX Live or MiKTeX).

```bash
# Compile the CV (run twice for proper cross-references)
xelatex CV.tex && xelatex CV.tex

# Compile the cover letter
xelatex Selection_Criteria_Statement.tex

# Auto-compile on save during editing
latexmk -xelatex -pvc CV.tex
```

Output files: `CV.pdf`, `Selection_Criteria_Statement.pdf`

## Architecture

The project uses the **YAAC (Yet Another Awesome CV)** LaTeX template (`yaac-another-awesome-cv.cls`), which provides all styling commands, font management (Source Sans Pro via `fontspec`), Font Awesome icons, and custom environments for CV content.

**Document assembly pattern:** `CV.tex` is the master file that sets identity fields (`\name`, `\tagline`, `\email`, `\linkedin`, etc.) and assembles content via `\input{}` calls to modular section files.

**Active sections** (in display order):
- `section_headline.tex` — profile summary
- `section_competences.tex` — core scientific/statistical expertise
- `section_experience.tex` — work history (J&J, Novartis, Gustave Roussy)
- `section_volunteering.tex` — UN Volunteers engagement
- `section_patent.tex` — ML/genomics patent
- `section_education.tex` — PhD + engineering degrees
- `section_certifications.tex` — Coursera certifications
- `section_langues.tex` — languages and software tools
- `section_articles.tex` — selected publications

**Commented-out sections** (can be re-enabled): `section_oral_present.tex`, `section_conference_poster.tex`, `section_references.tex`

**Assets:** Company/institution logos (`.png`/`.jpg`) are referenced directly in section files. Local fonts are in `fonts/` (SourceSansPro family).

## Key Template Commands

The class file (`yaac-another-awesome-cv.cls`) defines these domain-specific commands used throughout section files:

- `\cvsection{Title}` — section header
- `\begin{cvexperience}...\end{cvexperience}` — work experience block
- `\begin{cvcertification}...\end{cvcertification}` — certification entry
- `\begin{cvpaper}...\end{cvpaper}` — publication entry
- `\begin{cvcolumns}...\cvcolumn{content}...\end{cvcolumns}` — multi-column layout

Color scheme can be changed in `CV.tex` via document class option (default: blue; options: green, red, indigo, orange, monochrome).




## Project Goal & Positioning

This CV is being adapted for **BioSpark** — Mohamed Amine's independent 
consulting micro-enterprise (France, activity start April 2026).

**Target audience:** Consulting/staffing companies placing biostatisticians 
on time-limited pharma missions (IQVIA, Synergie, Quantics, etc.).

**Positioning:** Senior biostatistician, 13+ years oncology/hematology 
(solid tumors, CML, multiple myeloma), full lifecycle expertise, 
growing ML/AI capabilities.

## Branch Strategy
- `main` → stable original version
- `cv/biospark` → freelance consulting version (active branch)

## Progress Tracker
- [x] section_headline.tex — rewritten
- [ ] section_experience.tex — in progress
- [ ] section_competences.tex — to review
- [ ] section_certifications.tex — to update

## Conventions
- Always work on `cv/biospark` branch
- Commit after each section
- Commit format: `cv/biospark: description`
