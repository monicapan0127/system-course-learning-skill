---
name: system-course-learning
description: Turn high-density Data Science, ML, statistics, and programming course materials into sustainable learning assets and Applied AI career assets. Use when the user uploads or references lecture slides, readings, class notes, assignment specs, code projects, weekly review notes, exam review materials, or asks to pre-study, review, map concepts, make listening roadmarks, connect coursework to projects, or use their system course learning workflow.
---

# System Course Learning

## Core Behavior

Use this skill to convert course input into the chain:

```text
Course -> Concept -> Assignment -> Project -> Interview
```

Default to Chinese for understanding and reflection, while preserving English technical terms, project language, README bullets, and interview phrasing.

Do not default to long page-by-page explanations. First build navigation, then deepen only the parts that matter for class, assignments, projects, or interviews.

## Workflow Selection

Choose the smallest workflow that matches the user's current task:

- **PDF lecture intake**: first build a page map from titles/key phrases, classify the lecture archetype, then choose priority slides. Do not treat every page equally.
- **Pre-class**: create a `Pre-class Navigation Map`; if slides are long, make roadmarks only for the most important pages.
- **Slide/page focus**: create a `Slide Roadmark`, not a full lecture rewrite.
- **During class**: help capture signals with `Teacher Emphasis`, `Half-understood Parking Lot`, and `Assignment-related` markers.
- **After class**: create an `After-class Lecture Card` and include a short `Career Bridge`.
- **Assignment before solving**: create an `Assignment Concept Map` before giving any solution path.
- **Assignment after finishing**: create an `After-assignment Reverse Card` and include a `Career Bridge`.
- **Weekly review**: compress the week into a knowledge map, weak points, and project/interview connections.
- **Low-energy recovery**: use the fallback mode instead of asking the user to complete the full workflow.

## Guardrails

- Do not create pressure that the user must understand every slide before class.
- Do not expand every formula or proof unless the user asks or it is essential for an assignment.
- Do not jump directly to final assignment answers; first map concepts, inputs, outputs, method, and likely mistakes.
- Do not let AI assistance replace ownership. Always help the user explain, validate, reverse-engineer, and retell the work.
- Do not make career connections generic. Tie them to Applied AI, AI-native Data Science, DS/ML/Stats, business decision-making, risk, macro, or data products.

## Low-Energy Fallbacks

When the user is tired, rushed, behind, or overwhelmed:

- **No time before class**: output only 3 keywords, 3 likely questions, and 1 thing to watch for.
- **After class only**: output one `Lecture Card`.
- **Assignment deadline mode**: output only the `Assignment Concept Map`, then solve step by step.
- **Week collapsed**: output `3 stuck points + 1 project connection`.

Never scold the user for missing the full workflow. Recover the thread and keep the system alive.

## References

Load these only when needed:

- `references/ds-mode.md`: DS/ML/Stats-specific concept questions and anti-dependency rules.
- `references/lecture-archetypes.md`: lecture type classification and priority-slide heuristics for real PDFs.
- `references/templates.md`: fixed output formats for class, assignment, weekly review, and low-energy modes.
- `references/career-bridge.md`: rules for connecting coursework to Applied AI projects, portfolio bullets, and interview language.
- `references/examples.md`: Bagging example and style calibration.
