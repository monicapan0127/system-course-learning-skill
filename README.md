# System Course Learning Skill

Current version: **v1.5 Course Progress Loop**
This repository contains a personal Codex Skill for turning high-density Data Science, Machine Learning, Statistics, NLP, Deep Learning, programming, ETL, and Data Engineering coursework into sustainable learning assets and Applied AI career assets.

The core learning chain is:

```text
Course -> Concept -> Retrieval -> AI Feedback -> Assignment -> Reverse Card -> Spaced Review -> Project/Interview
Instruction -> Task Map -> Data Map -> Analysis Plan -> Deliverable -> Portfolio
Course -> Concept -> Review Schedule -> Reminder -> Retrieval -> Status Update
```

The skill is optimized for:

- pre-class lecture navigation instead of exhaustive slide summaries
- after-class retrieval, active recall, and AI diagnostic feedback
- Chinese-understanding to English-output explanation practice
- assignment concept mapping before solving
- assignment/project intake before coding
- after-assignment reverse cards and mistake diagnosis
- course-progress handoff, review reminders, and spaced retrieval scheduling
- Applied AI / AI-native Data Science / Data Engineering career bridges
- low-energy recovery when tired, rushed, or near a deadline
- real iteration through `real-use-log.md`

## What's New

### v1.5: Course Progress Loop

v1.5 adds a durable learning-progress layer so future AI sessions can continue from the learner's real state instead of restarting the lecture.

v1.5 added:

- `course-progress.md` as a local learner-state handoff file
- `Active Concepts` and `Review Schedule` tables for spaced retrieval
- lecture completion wrap-up rules for `学完了`
- review completion update rules for `复习好了`
- manual due-review checks such as `检查今天该复习什么`
- weekly review triage from `course-progress.md` instead of rereading all slides
- completed-lecture backfill for lectures that were already finished before the progress file existed
- low-pressure reminder behavior that limits due prompts instead of creating a giant catch-up list

### v1.4: Non-PDF Assignment Review and Visual Confirmation

The skill handles completed non-PDF coursework artifacts deliberately instead of treating every file as a blank assignment or PDF-like lecture.

v1.4 added:

- non-PDF intake for `.ipynb`, rendered `.html`, `.qmd/.Rmd`, scripts, spreadsheets, and datasets
- artifact-role detection for assignment prompts, partial solutions, completed solutions, rendered reports, project notebooks, and lecture notes
- completed-assignment review, concept-map, and correctness-check routing
- stronger notebook inspection across markdown, code, outputs, metrics, figures, errors, reproducibility risks, and portfolio polish
- rendered HTML intake for Quarto, RMarkdown, and Jupyter reports, including script/style cleanup and encoding-risk notes
- statistical correctness checks for test choice, hypotheses, one-sided vs two-sided logic, p-value interpretation, contextual conclusions, and association vs causation wording
- one-shot chart / visual confirmation for graph-heavy slides and PDF pages when the user needs visual details confirmed in one step

### v1.3: Robust PDF Text Extraction

PDF intake has a Node-based text extraction helper:

```text
system-course-learning/scripts/extract_pdf_text.mjs
```

This avoids treating a missing Python `fitz` / `PyMuPDF` package as a material problem. It also handles OneDrive, spaces, and non-ASCII paths more safely by taking the PDF path as a normal command argument. When text extraction is weak or garbled, the workflow flags the page for visual inspection instead of treating it as empty.

### v1.2: PDF Intake Safety Protocol

PDF lecture intake is risk-aware. The skill no longer treats extracted PDF text as complete truth.

It explicitly flags:

- image-heavy slides
- pages with very little extracted text
- garbled or broken extracted text
- formulas, diagrams, tables, screenshots, code images, and scanned handwriting
- pages that need visual inspection before explanation

The page map format is:

```text
Page -> extracted signal -> visual risk -> likely function -> action
```

Outputs distinguish:

```text
Text-extracted
Visually inspected
Uncertain / needs screenshot
```

### v1.1: Safer Real-use Workflow

The skill starts each task by saying what it can do, declaring the current mode, and defaulting to chat-only output unless the user explicitly asks to save or write files.

v1.1 added:

- start-of-session capability orientation
- mode declaration, such as `Pre-class mode`, `After-class mode`, or `Assignment Concept Map mode`
- file-writing confirmation for lecture cards, logs, and saved artifacts
- `bilingual-learning.md` for Chinese-understanding -> English-output practice
- dense multi-session lecture handling
- conversation-first after-class review

## Structure

```text
system-course-learning/
|-- SKILL.md
|-- agents/openai.yaml
|-- scripts/
|   |-- extract_pdf_text.mjs
|   `-- render_pdf_pages.mjs
`-- references/
    |-- assignment-project-intake.md
    |-- bilingual-learning.md
    |-- career-bridge.md
    |-- ds-mode.md
    |-- examples.md
    |-- golden-examples/
    |-- lecture-archetypes.md
    |-- quality-checklist.md
    `-- templates.md

examples/
|-- bagging-after-class.md
|-- course-progress-example.md
|-- logistic-regression-assignment-reverse.md
|-- review-reminder-example.md
`-- weekly-spaced-review.md

lecture6-after-class-card.md
portable-ai-usage.md
quality-checklist.md
real-use-log.md
research-foundations.md
```

The active Codex Skill instructions live under `system-course-learning/`. Supporting files help with quality checks, examples, research grounding, portable use in other AI tools, and real learning iteration.

`course-progress.md` is intentionally treated as local learner state. Create it from `examples/course-progress-example.md` or let the skill update it during real use; avoid storing private progress inside `system-course-learning/`.

`real-use-log.md` is a real iteration log. It records friction and improvements found during actual course use, so the skill can evolve from evidence instead of abstract preferences.

`lecture6-after-class-card.md` is a real after-class artifact from an ML lecture. It shows how the workflow turns a dense lecture into retrieval prompts, corrected understanding, English output, and career connections.

## Local Use

Install or sync the `system-course-learning` folder into:

```text
~/.codex/skills/system-course-learning
```

On Windows, the target is usually:

```text
C:\Users\<you>\.codex\skills\system-course-learning
```

After editing this repository, copy or sync the `system-course-learning/` folder into that skill location so Codex uses the latest version.

Then use prompts like:

```text
Use my System Course Learning workflow to make a pre-class navigation map for these slides.
```

```text
Use the skill to map this assignment to lecture concepts before solving.
```

```text
Use the skill to do project intake for this assignment folder before writing code.
```

```text
Use after-class mode. Make me retrieve first, then diagnose my answer.
```

For the v1.5 course-progress loop, use short prompts:

```text
学完了
```

Use this after a full lecture, dense walkthrough, or meaningful study session. It triggers a lecture/session wrap-up, updates `course-progress.md`, and schedules spaced retrieval.

```text
复习好了
```

Use this after finishing due review prompts. It updates review status and schedules the next retrieval.

```text
做 weekly review
```

Use this for weekly or stage-level triage. It should select and reschedule concepts from `course-progress.md`; it is not a command to reread everything.

```text
检查今天该复习什么
```

Use this for a manual due-review check when the automation has not run.

## How I Use This Weekly

1. Before class: create a `Pre-class Navigation Map`, not a full summary.
2. During class: capture only teacher emphasis, half-understood points, and assignment/project signals.
3. After class: use `Post-class Retrieval Card` before reading or asking for an AI summary.
4. Before assignment: create an `Assignment Concept Map` or `Project Reading Note`.
5. After assignment: create a `Reverse Card` and `Mistake / Confusion Diagnosis`.
6. After a long learning session: say `学完了` so Codex updates `course-progress.md` and writes the next retrieval dates.
7. After a review session: say `复习好了` so Codex updates concept status and reschedules.
8. Weekly: use `做 weekly review` to triage 5-10 due, shaky, or high-value concepts instead of rereading all slides.
9. Log workflow friction in `real-use-log.md`; do not use it as the course-progress file.

## Course Progress And Reminders

`course-progress.md` is the long-term handoff file for future AI sessions. It records current state, latest session, active concepts, Review Schedule, open loops, and AI handoff notes. It is not a complete lecture notebook.

The default spacing pattern is:

```text
same day: wrap-up + course-progress
1-2 days later: first retrieval
5-7 days later: second retrieval
2-3 weeks later: long-term review only for shaky / high-value concepts
```

Codex automation can be configured separately as `Course Review Reminder` to read `course-progress.md` on a schedule, usually Monday / Wednesday / Saturday evening if the learner does not keep the computer open in the morning, and post due review prompts in the thread. This is a Codex thread reminder, not guaranteed phone-level notification.

## Version Workflow

Use `main` and `origin/main` as the official released line. Do not edit directly on `main`; create a branch named like `codex/v1.6-short-description` for the next version.

`VERSION` is the version-number source of truth. `README.md` mirrors it with the `Current version` line and the `What's New` section.

Useful commands:

```powershell
tools/version-status.ps1
tools/version-status.ps1 -Fetch
tools/bump-version.ps1 -Version v1.6 -Title "Short Release Name"
tools/sync-main.ps1
tools/sync-main.ps1 -RebaseCurrent
```

Normal release loop:

1. Run `tools/sync-main.ps1` so local `main` matches GitHub `origin/main`.
2. Create or switch to `codex/vX.Y-short-description`.
3. Run `tools/bump-version.ps1 -Version vX.Y -Title "Release Name"`.
4. Commit on the version branch.
5. Push the branch and open a PR.
6. After the PR is merged, run `tools/sync-main.ps1` again.

## Quality Bar

A mature output should:

- retrieve before summarizing
- stay small enough to use today
- preserve learner ownership
- diagnose concept errors instead of merely giving model answers
- connect naturally to assignment, project, or interview use
- include one clear next tiny action
- reduce scope immediately when the learner is tired or rushed

Use `quality-checklist.md` when judging whether an output is genuinely useful.

## Research Foundations

The workflow is grounded in recent learning science and GenAI education research. The short version: retrieve before asking AI, use AI for Socratic feedback instead of answer outsourcing, turn each concept into explanation / visualization / application, and support self-regulated learning through weekly review.

See `research-foundations.md` for the full paper-to-workflow mapping and APA 7 references.

## Use Outside Codex

This is a Codex Skill, not a native plugin for every AI platform. In ChatGPT, Doubao, Claude, Gemini, or similar tools, use it as uploaded project knowledge, custom instructions, or a reusable prompt pack.

See `portable-ai-usage.md` for the minimum files to upload and starter prompts.

## When Tired / Deadline Mode

When energy is low, shrink the workflow immediately:

```text
Topic:
3 retrieval prompts:
Biggest confusion:
Next tiny action:
```

For assignment deadline mode, ask only for:

```text
Task type:
Required deliverable:
First solving step:
One risk:
```

The system should recover momentum, not create guilt.

## Iteration Log

Use `real-use-log.md`, GitHub issues, or commits to track friction found during real use:

- too heavy
- too generic
- not useful enough
- AI gives too much answer
- career bridge feels forced
- template does not match actual coursework
- PDF extraction misses visual content
