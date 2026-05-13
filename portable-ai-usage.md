# Portable AI Usage

This project is a Codex Skill first, but the learning workflow can also be used in ChatGPT, Doubao, Claude, Gemini, or other AI assistants as a copied instruction pack.

## Important Difference

In Codex, `system-course-learning/SKILL.md` can be discovered and loaded as a local skill.

In most other AI tools, this is not a real plugin unless that platform supports importing custom tools or files. Use it as:

- a custom instruction
- a project knowledge file
- an uploaded reference folder
- a reusable prompt pack

## Minimum Files To Upload

For a lightweight setup, upload or paste:

```text
system-course-learning/SKILL.md
system-course-learning/references/templates.md
system-course-learning/references/ds-mode.md
system-course-learning/references/lecture-archetypes.md
system-course-learning/references/bilingual-learning.md
system-course-learning/references/assignment-project-intake.md
system-course-learning/references/career-bridge.md
quality-checklist.md
research-foundations.md
```

For calibration examples, also upload:

```text
examples/bagging-after-class.md
examples/logistic-regression-assignment-reverse.md
examples/weekly-spaced-review.md
lecture6-after-class-card.md
```

Keep `real-use-log.md` local unless you intentionally want the assistant to learn from real usage friction.

## Universal Starter Prompt

```text
You are helping me use my System Course Learning workflow.

Use the uploaded System Course Learning instructions as the source of truth.
Default to Chinese for understanding and reflection, while preserving English technical terms.

Core rules:
1. Start by briefly telling me what you can help with, then declare the current workflow mode.
2. Default to chat-only output. Do not save, write, or generate files unless I explicitly ask.
3. Do not summarize first if I am reviewing. Ask me for a small closed-book retrieval attempt first.
4. For lectures, create navigation maps and retrieval cards, not long page-by-page explanations.
5. For PDFs, first check extraction quality and visual risk. Flag image-heavy, formula-heavy, code-screenshot, low-text, or garbled pages.
6. For assignments, map concepts before solving.
7. After assignments, create a Reverse Card with concepts, mistakes, next-time first step, and interview-safe explanation.
8. When I am tired or rushed, reduce scope to 3 retrieval prompts and 1 next tiny action.

My current material/task is:
<paste slides, notes, assignment, code description, or project folder summary>
```

## ChatGPT Setup

Use one of these:

- **Project**: create a project, upload the files above as project knowledge, then use the starter prompt.
- **Custom GPT**: put the core rules in Instructions and upload the files as Knowledge.
- **Normal chat**: paste `SKILL.md`, then paste only the relevant reference file for the current task.

Recommended first message:

```text
Use my System Course Learning workflow. Start with the smallest workflow that fits my material. If this is review, make me retrieve first.
```

## Doubao Setup

Doubao may not treat these files as a plugin. Use them as knowledge/context:

1. Upload `SKILL.md` and the relevant reference files if file upload is available.
2. If file upload is not available, paste the universal starter prompt and the relevant template section.
3. For each task, explicitly say which workflow you want, such as `Pre-class Navigation Map`, `Assignment Concept Map`, or `After-assignment Reverse Card`.

Recommended first message:

```text
请使用我的 System Course Learning 工作流。中文解释，保留英文技术词。先声明当前模式；如果这是复习，不要一开始直接总结，先让我做 closed-book retrieval。
```

## PDF Upload Notes

When uploading PDF slides to non-Codex tools, explicitly ask the assistant to separate extraction confidence from content understanding:

```text
Before explaining the PDF, make a risk-aware page map:
Page -> extracted signal -> visual risk -> likely function -> action.

Mark pages as:
- Text-extracted
- Visually inspected
- Uncertain / needs screenshot

Do not treat missing extracted text as an empty or unimportant slide.
```

## Best Practice

- Upload fewer files per session when the task is small.
- Use `templates.md` for output format.
- Use `lecture-archetypes.md` when working with real lecture PDFs.
- Use `bilingual-learning.md` when turning Chinese understanding into English answers.
- Use `quality-checklist.md` to judge whether the answer is good.
- Use `research-foundations.md` only when you need to explain why the workflow is designed this way.
- Keep `real-use-log.md` local unless you want the AI to help you review weekly friction.
