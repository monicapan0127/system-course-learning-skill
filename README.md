# System Course Learning Skill

Current version: **v1.2 System Course Learning Skill**

This repository contains a personal Codex Skill for turning high-density Data Science, Machine Learning, Statistics, NLP, Deep Learning, programming, ETL, and Data Engineering coursework into sustainable learning assets and Applied AI career assets.

The core learning chain is:

```text
Course -> Concept -> Retrieval -> AI Feedback -> Assignment -> Reverse Card -> Spaced Review -> Project/Interview
Instruction -> Task Map -> Data Map -> Analysis Plan -> Deliverable -> Portfolio
```

The skill is optimized for:

- pre-class lecture navigation instead of exhaustive slide summaries
- after-class retrieval, active recall, and AI diagnostic feedback
- Chinese-understanding to English-output explanation practice
- assignment concept mapping before solving
- assignment/project intake before coding
- after-assignment reverse cards and mistake diagnosis
- weekly spaced review queues instead of rereading everything
- Applied AI / AI-native Data Science / Data Engineering career bridges
- low-energy recovery when tired, rushed, or near a deadline
- real iteration through `real-use-log.md`

## What's New

### v1.2: PDF Intake Safety Protocol

PDF lecture intake is now risk-aware. The skill no longer treats extracted PDF text as complete truth.

It now explicitly flags:

- image-heavy slides
- pages with very little extracted text
- garbled or broken extracted text
- formulas, diagrams, tables, screenshots, code images, and scanned handwriting
- pages that need visual inspection before explanation

The page map format is now:

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

The skill now starts each task by saying what it can do, declaring the current mode, and defaulting to chat-only output unless the user explicitly asks to save or write files.

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
`-- references/
    |-- assignment-project-intake.md
    |-- bilingual-learning.md
    |-- career-bridge.md
    |-- ds-mode.md
    |-- examples.md
    |-- lecture-archetypes.md
    `-- templates.md

examples/
|-- bagging-after-class.md
|-- logistic-regression-assignment-reverse.md
`-- weekly-spaced-review.md

lecture6-after-class-card.md
portable-ai-usage.md
quality-checklist.md
real-use-log.md
research-foundations.md
```

The active Codex Skill instructions live under `system-course-learning/`. Supporting files help with quality checks, examples, research grounding, portable use in other AI tools, and real learning iteration.

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

## Modes

The skill chooses the smallest workflow that fits the task:

- **Pre-class mode**: create a `Pre-class Navigation Map` and identify what to watch for.
- **After-class mode**: start with closed-book retrieval, then provide diagnostic feedback and targeted repair.
- **Bilingual bridge mode**: turn Chinese or mixed-language understanding into simple academic English and interview-safe English.
- **Assignment Concept Map mode**: map each question to lecture concepts, inputs, outputs, methods, evaluation, and likely mistakes before solving.
- **Project Intake mode**: identify files, data, objective, outputs, risks, and first action before coding.
- **Weekly Review mode**: select 5-10 concepts for spaced retrieval instead of rereading all slides.
- **Low-energy recovery mode**: reduce the task to 3 retrieval prompts and 1 next tiny action.

## How I Use This Weekly

1. Before class: create a `Pre-class Navigation Map`, not a full summary.
2. During class: capture only teacher emphasis, half-understood points, and assignment/project signals.
3. After class: use `Post-class Retrieval Card` before reading or asking for an AI summary.
4. Before assignment: create an `Assignment Concept Map` or `Project Reading Note`.
5. After assignment: create a `Reverse Card` and `Mistake / Confusion Diagnosis`.
6. Weekly: build a `Spaced Review Queue` from 5-10 concepts instead of rereading all slides.
7. Log friction in `real-use-log.md` and update the skill only when a pattern repeats.

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
