# System Course Learning Skill

This repository contains a personal Codex Skill for turning Data Science / ML / Statistics coursework into sustainable learning assets and Applied AI career assets.

The v1 direction is:

```text
Course -> Concept -> Assignment -> Project -> Interview
Course -> Concept -> Retrieval -> AI Feedback -> Assignment -> Reverse Card -> Spaced Review -> Project/Interview
```

The skill is optimized for:

- DS / ML / Statistics learning
- lecture navigation instead of exhaustive pre-study
- assignment concept mapping before solving
- assignment/project intake before coding
- after-class and after-assignment recovery
- retrieval-first review, AI Socratic feedback, and spaced review queues
- Applied AI / AI-native Data Science portfolio connections
- Data Engineering / ETL career bridges
- long-term personal iteration through real course use

## Structure

```text
system-course-learning/
|-- SKILL.md
|-- agents/openai.yaml
`-- references/
    |-- ds-mode.md
    |-- assignment-project-intake.md
    |-- templates.md
    |-- career-bridge.md
    `-- examples.md

examples/
|-- bagging-after-class.md
|-- logistic-regression-assignment-reverse.md
`-- weekly-spaced-review.md

quality-checklist.md
real-use-log.md
research-foundations.md
portable-ai-usage.md
```

The active Codex Skill instructions live under `system-course-learning/`. Supporting files in the repository help with quality checks, examples, research grounding, and portable use in other AI tools.

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
Make an after-class Lecture Card and Career Bridge for today's ML lecture.
```

## How I Use This Weekly

1. Before class: create a `Pre-class Navigation Map`, not a full summary.
2. During class: capture only teacher emphasis, half-understood points, and assignment/project signals.
3. After class: use `Post-class Retrieval Card` before reading or asking for an AI summary.
4. Before assignment: create an `Assignment Concept Map` or `Project Reading Note`.
5. After assignment: create a `Reverse Card` and `Mistake / Confusion Diagnosis`.
6. Weekly: build a `Spaced Review Queue` from 5-10 concepts instead of rereading all slides.
7. Log friction in `real-use-log.md` and update the skill only when a pattern repeats.

## Maturity Checklist

A mature version of this project should:

- be easy to start when tired or busy
- produce retrieval-first learning cards
- turn assignments into reusable knowledge
- preserve ownership when AI helps with code or explanation
- connect naturally to Applied AI / DS / DE portfolio assets
- have examples that calibrate output quality
- have a weekly feedback loop through `real-use-log.md`

Use `quality-checklist.md` when judging whether an output is genuinely useful.

## Research Foundations

The learning workflow is grounded in recent learning science and GenAI education research. The short version: retrieve before asking AI, use AI for Socratic feedback instead of answer outsourcing, turn each concept into explanation / visualization / application, and support self-regulated learning through weekly review.

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
