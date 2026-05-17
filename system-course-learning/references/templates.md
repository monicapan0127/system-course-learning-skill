# Output Templates

Use these templates as compact defaults. Fill only the fields that are relevant to the user's material.

Default style:
- Concise Chinese for understanding, reflection, and recovery.
- English for the output spine: technical keywords, reusable concept sentences, project language, README bullets, and interview phrasing.
- Avoid Chinese-heavy notes. For each core concept, include a short `Simple English` line; for job-relevant concepts, include `Interview English`.
- Use `clarity table first` when prose would hide the structure: categories, axes, error types, formula parts, model comparisons, tradeoffs, decision cases, process stages, graph areas, or debugging paths.
- Keep clarity tables compact: usually 3-5 rows and 2-4 columns, followed by a short explanation and a reusable `Simple English` sentence.
- Pre-class bilingual ratio: 1-3 short Chinese sentences per concept, English terms inside the explanation, then one reusable `Simple English` sentence immediately after.
- Pre-class chunk budget: default to 1-3 pages, or 1 dense diagram/formula/concept; never exceed 3 core concepts in one response unless the user asks for complete notes.
- For pre-class, prefer plain-language guided explanation over retrieval-first prompts or heading paraphrases.
- For pre-class, prefer declarative explanation over question-heavy prose. Default to zero questions unless the user explicitly asks for active recall, quiz mode, or checking.
- For pre-class, if the slide or outline contains important questions, answer them immediately instead of showing them as prompts.
- For "continue" / "继续", continue the previous mode, page range, chunk size, and bilingual style. Do not restart the lecture map unless the user explicitly asks for a new map or reset.
- For after-class review, assignment reverse cards, and weekly review, prefer retrieval-first outputs over long summaries.

## Pre-class Navigation Map

```text
## 课前导航 / Pre-class Navigation

### 0. 课件类型 / Lecture type
- Archetype:
- Why:

### 1. 这节课的大图
- Topic:
- Big question:
- 3-5 modules:

### 2. 关键词 / Keywords
1.
2.
3.
4.
5.

### 3. 最值得预习的页 / Priority slides
- Page/section:
- Why it matters:

### 4. 先放过 / Skip for now
- Page/section:
- Why:

### 5. 上课重点听 / Listen for
1.
2.
3.

### 6. 可能连接到
- Assignment:
- Project:
- Data Engineering hook:
- Interview:
```

## Pre-class PDF Startup

Use this when a PDF is still being extracted, has garbled text, has a Chinese/Unicode path issue, or contains many image-heavy pages. Do not wait for perfect extraction before teaching.

```text
## Pre-class Startup

What I can see so far:
- Pages:
- Rough sections:
- Text-extracted:
- Visually uncertain:

Start here:
- Page 1:
- Page 2:
- Page 3:

Minimum to remember:
-

Next:
I will continue with the next small visible chunk while keeping uncertain pages marked.
```

## Visual Inspection Note

Use this after rendering priority PDF pages to PNG and opening the images.

```text
Visual inspection status:
- Page X: Visually inspected. What the slide shows:
- Page Y: Text-extracted only. Visual risk:
- Page Z: Uncertain / needs screenshot. Why:

Teaching decision:
- I will explain pages X-Y now.
- I will not guess page Z until a screenshot or render is available.
```

## Slide Roadmark

```text
## Slide Roadmark

- 一句话:
- 先看哪里:
- 3 keywords:
- 最低掌握标准:
- 可以先放过:
- 最可能卡住:
- Career Bridge:
```

## Pre-class Plain-language Walkthrough

Use this when the user asks you to take them through a lecture, says they have not started, feels stuck, or says a navigation map is too shallow. Explain 1-3 pages per response depending on density, or 1 dense diagram/formula/concept. Keep the prose declarative; avoid repeated "what/why/how" questions. Do not include check questions unless the user asks to be tested.

```text
## Page X: [slide title / topic]

This page is really saying:
-

Clarity table, if useful:
| Case / concept | Plain meaning | Symbol / decision | Common mistake |
| --- | --- | --- | --- |
| | | | |

If the slide lists questions, answer them:
-

中文托底:
-

Concrete example:
-

Simple English:
-

Interview English, if useful:
-

Why it matters:
-

Minimum to remember:
- Chinese:
- English:

60-second self-explain, if the learner is stable:
- You do not need a complete explanation. Finish one: "This concept is mainly about ___"; "It is useful because ___"; "A simple example is ___."

Next:
I will continue with pages X-Y.
```

## Clarity Table Patterns

Use one of these whenever it makes the concept easier to see.

```text
2x2 decision matrix

| Real world | Decision / prediction A | Decision / prediction B |
| --- | --- | --- |
| Case A is true | correct / error | correct / error |
| Case B is true | correct / error | correct / error |
```

```text
Comparison table

| Concept | Plain meaning | Symbol / formula | When to use / likely mistake |
| --- | --- | --- | --- |
| | | | |
```

```text
Formula map

| Symbol | Plain meaning | In this lecture | Common mistake |
| --- | --- | --- | --- |
| | | | |
```

```text
Process map

| Step | Input | Method | Output / risk |
| --- | --- | --- | --- |
| | | | |
```

## Continue Rule

Use this when the user says "continue", "继续", "接着", or sends a short continuation message.

```text
Continue from:
- Previous mode:
- Previous page/chunk:
- Next page/chunk:

Teaching rule:
- Keep the same bilingual style.
- Do not recreate the navigation map.
- Do not ask check questions unless the previous mode was explicit quiz/retrieval.
- Explain the next 1-3 pages or the next dense concept.

Next:
I will continue with the following tiny chunk after this.
```

## Comfort-first Pre-class Walkthrough

Use this when the user sounds overwhelmed, stuck, upset, or says the previous output was not helpful. No questions in this mode.

```text
先稳住:
- 这部分确实抽象，我们先只吃一小口。

## Page X: [topic]

This page is really saying:
-

In plain Chinese:
-

Tiny example:
-

Simple English:
-

Minimum to remember:
- Chinese:
- English:

Next:
I will continue with the next small piece.
```

## During-class Signal Capture

```text
Teacher emphasis:
Half-understood parking lot:
A Assignment-related:
P Project / portfolio connection:
```

For economics-flavored DS classes, add:

```text
G Graph / variable movement:
Policy / real-world implication:
```

## Post-class Retrieval Card

Use this before summarizing lecture content. If the user has not written an attempt, ask for a tiny closed-book attempt first.

```text
## Post-class Retrieval Card

### Closed-book attempt
1. This lecture solves:
2. Core method / model / statistic:
3. Input:
4. Process:
5. Output:
6. Evaluation / success check:
7. I am still confused about:

### Explain / visualize / apply
- Explain in one plain Chinese sentence:
- Draw or describe the structure:
- One formula / code / business use:

### Check after notes or AI feedback
- Correct:
- Incomplete:
- Misunderstood:
- Next retrieval prompt:
```

## AI Socratic Feedback

Use this after the learner's attempt. Keep it short and diagnostic; do not turn it into a long lecture.

```text
## AI Socratic Feedback

### What you already have
-

### Questions to repair understanding
1.
2.
3.

### Minimal correction
-

### Try again
- Explain it again without looking:
- Apply it to one new case:
```

## Mistake / Confusion Diagnosis

```text
## Mistake / Confusion Diagnosis

| Item | Type | Evidence | Repair action |
| --- | --- | --- | --- |
| | Concept error / Logic gap / Formula misuse / Code bug / Interpretation issue / Missing assumption | | |

### Next-time first step
-
```

## After-class Lecture Card

```text
## Lecture Card

### 0. Closed-book retrieval first
- My own version before reading notes:
- I can explain:
- I cannot explain yet:

### 1. Corrected lecture understanding
1. 今天这节课讲:
2. 它解决的问题:
3. 核心方法 / model / statistic:
4. 老师最强调:
5. 我最不懂:
6. 作业可能会用在:

### 2. AI feedback
- Concept error:
- Missing link:
- Better explanation:
- One retrieval question to retry:

## Career Bridge
- Applied AI / DS / DE ability:
- Project connection:
- DE connection:
- Interview sentence:
```

## Assignment Concept Map

```text
## Assignment Concept Map

| Question | Lecture concept | Input | Output | Method | Evaluation | Likely mistake |
| --- | --- | --- | --- | --- | --- | --- |
| Q1 | | | | | | |

## Before Solving
1. First step:
2. Slides to revisit:
3. What the teacher likely wants to see:
```

## Project Reading Note

```text
## Project Reading Note

### 1. Task type
- Practice Homework / Mini Assignment / Portfolio Project / Existing Notebook:
- Why:

### 2. Business or learning objective
-

### 3. Important files / data
| File | Role | Important? |
| --- | --- | --- |
| | | |

### 4. Required outputs
- Must do:
- Optional:
- Final deliverable:

### 5. Concept / method map
| Requirement | Concept/method | Input | Output | Risk |
| --- | --- | --- | --- | --- |
| | | | | |

### 6. First action
-

### 7. Portfolio potential
- Project lane:
- README/resume hook:
```

## Analysis Framework

```text
## Analysis Framework

1. Business Objective:
2. Dataset Description:
3. Data Overview:
4. Data Quality Check:
5. EDA:
6. Segment / user profile analysis:
7. Modeling, if useful:
8. Evaluation:
9. Recommendations:
10. Limitations:
11. Executive Summary:
```

## Notebook / Code Intake

```text
## Notebook / Code Intake

- Current structure:
- Data loading:
- EDA:
- Modeling / evaluation:
- Outputs / metrics / figures:
- Errors / warnings:
- Markdown explanation:
- Reproducibility risks:
- Portfolio polish:
- Missing sections:
- Risky code:
- Do not change:
- Next edit plan:
```

## Rendered HTML Intake

Use this for rendered Quarto, RMarkdown, Jupyter, or assignment report HTML files.

```text
## Rendered HTML Intake

- Artifact type:
- Artifact role:
- Structure:
- Questions / sections:
- Code and outputs:
- Conclusions:
- Encoding / extraction issues:
- Review route:
- Next tiny action:
```

## Completed Assignment Review

Use this when the artifact already contains answers, code outputs, conclusions, or submitted-style prose.

```text
## Completed Assignment Review

### What this assignment tested
-

### What was done correctly
-

### Concept gaps / likely misunderstandings
-

### Result interpretation quality
-

### Code / calculation risks
-

### Reverse-card summary
- Core concept:
- Input:
- Method:
- Output:
- Likely mistake:
- Simple English:

### No-AI Transfer Check
- Rewrite / explain / apply one tiny part without looking:
```

## Correctness Check Map

Use this when checking completed answers or a rendered/submitted solution.

```text
## Correctness Check Map

| Task | Claimed method | Expected method | Hypotheses correct? | Calculation / output consistent? | Interpretation correct? | Status | Risk / correction |
| --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | confirmed correct / likely correct but needs source/spec confirmation / incorrect or risky / cannot verify from rendered artifact alone | |

### Statistical checks
- Data type:
- Test selection:
- One-sided vs two-sided:
- P-value logic:
- Conclusion in context:
- Association vs causation wording:

### No-AI Transfer Check
-
```

## After-assignment Reverse Card

```text
## Reverse Card

### 0. Closed-book reverse attempt
- What I think this assignment tested:
- How I would solve a similar task next time:
- Where I still feel shaky:

### Concepts actually used
1. Concept:
   Used in:
   Input:
   Method:
   Output:
   Likely mistake:

2. Concept:
   Used in:
   Input:
   Method:
   Output:
   Likely mistake:

3. Concept:
   Used in:
   Input:
   Method:
   Output:
   Likely mistake:

### Stuck point
- I got stuck at:
- I solved it by:
- Next time first step:

### Interview-safe explanation
- 30-second explanation:
- What I owned:
- How I validated the result:

## Career Bridge
- Portfolio bullet:
- README sentence:
- Data Engineering hook:
- Interview sentence:
```

## Weekly Review

```text
## Weekly Knowledge Map

### Topics
1.
2.
3.

### 5 core keywords
1.
2.
3.
4.
5.

### Weak points
1.
2.
3.

### Assignment / code connections
1.
2.
3.

### Project transfer
- AI Data Analyst Agent:
- RAG Macro Assistant:
- Credit Risk Explainability App:
- Data Engineering / ETL Pipeline:

### Next week repair
- One hole to patch:
```

## Spaced Review Queue

Use this during weekly review triage. Do not reread all slides by default; retrieve first, then revisit only the weak source. Pull candidates from `course-progress.md` whenever available.

```text
## Spaced Review Queue

| Concept | Source | Last attempt | Retrieval context 1 | Retrieval context 2 | Retrieval context 3 | Next date | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| | lecture / assignment / project | | formula / code / business / project / interview | formula / code / business / project / interview | formula / code / business / project / interview | | new / shaky / improving / solid |

### This week
- 5-10 concepts to retrieve:
- 1 concept to restudy:
- 1 concept to connect to project/interview:
```

## Course Progress

Use this for `System Course Learning Workflow/course-progress.md`. It is a long-term AI handoff and review schedule, not a full lecture notebook.

```text
# Course Progress

## Current State
- Last updated:
- Current course focus:
- Current mode:
- Current source:
- Energy / deadline context:

## Latest Session
- Date:
- Material:
- Session type:
- Summary:
- Learner-owned understanding:
- Still shaky:
- Next tiny action:

## Covered Materials
| Date | Material | Status | Output / notes |
| --- | --- | --- | --- |
| | | not started / previewed / learned / reviewed / assignment-linked | |

## Active Concepts
| Concept | Source | Understanding | Retrieval status | Priority | Next action |
| --- | --- | --- | --- | --- | --- |
| | | shaky / improving / solid | new / due / reviewed | low / normal / high | |

## Review Schedule
| Concept | Source | Stage | Due date | Status | Last reviewed | Retrieval prompt |
| --- | --- | --- | --- | --- | --- | --- |
| | | first retrieval / second retrieval / long-term review | | shaky / improving / solid | | |

## Open Loops
- Confusions:
- Assignment links:
- Concepts to restudy:
- Files future AI should read first:

## AI Handoff Notes
- What not to repeat:
- What the learner already owns:
- What future AI should ask before explaining:
```

## Lecture Completion Summary

Use this when the learner says `学完了`, `学完啦`, `终于学完`, `收尾`, `lecture complete`, or similar. The summary can be substantial, but it should support future retrieval instead of rewriting every slide.

```text
## Lecture / Session Completion

### Material
- Source:
- Session type:
- Scope completed:

### Summary
- Main problem this lecture/session solved:
- Core methods / concepts:
- Important examples or cases:

### Learner-owned understanding
1.
2.
3.

### Still shaky
1.
2.
3.

### Reusable English
1.
2.
3.

### Course Progress Update
- Add / update 3-8 active concepts:
- Next tiny action:
- Review Schedule rows to add:
```

## Review Schedule

Use this in `course-progress.md` for daily spaced review scheduling.

```text
| Concept | Source | Stage | Due date | Status | Last reviewed | Retrieval prompt |
| --- | --- | --- | --- | --- | --- | --- |
| | lecture / assignment / project | first retrieval / second retrieval / long-term review / restudy | YYYY-MM-DD | new / shaky / improving / solid | YYYY-MM-DD or blank | one closed-book task |

Scheduling defaults:
- same day: wrap-up + course-progress
- 1-2 days later: first retrieval
- 5-7 days later: second retrieval
- 2-3 weeks later: long-term review only for shaky / high-value concepts
- solid twice: move out of active queue or long-term only
- shaky twice: targeted restudy before another retrieval
```

## Completed Lecture Backfill

Use this when a lecture is already completed but `course-progress.md` has no Active Concepts or Review Schedule rows. Keep the lecture completed; create diagnostic retrieval seeds instead of forcing a full relearn.

```text
## Completed Lecture Backfill

### Source
- Lecture:
- Completed date:
- Evidence source: lecture file / prior conversation / user table

### Backfilled concepts
| Concept | Source | Understanding | Retrieval status | Priority | Next action |
| --- | --- | --- | --- | --- | --- |
| | completed lecture | unknown | diagnostic due | normal / high | one closed-book diagnostic task |

### Diagnostic Review Schedule
| Concept | Source | Stage | Due date | Status | Last reviewed | Retrieval prompt |
| --- | --- | --- | --- | --- | --- | --- |
| | completed lecture | diagnostic retrieval | YYYY-MM-DD | new | | one closed-book prompt |

### Rule
- Do not mark the completed lecture incomplete.
- Do not claim learner-specific shaky points until after the diagnostic retrieval.
- After the learner says `复习好了`, update each concept to shaky / improving / solid.
```

## Review Reminder Output

Use this for manual checks or Codex automation. Keep it short; do not summarize lectures.

```text
今天该复习 [N] 个概念：

1. [Concept]
- Source:
- Task:
- Status:

2. [Concept]
- Source:
- Task:
- Status:

If there are too many due items:
- Only show the highest-priority 2-4 concepts.
- Say the rest will remain scheduled / be rescheduled.

复习完后回复：复习好了
```

## Review Completion Update

Use this when the learner says `复习好了`, `复习结束`, `复习完成`, or `复习完了`.

```text
## Review Completion Update

Reviewed:
| Concept | Previous stage | New status | Last reviewed | Next stage | Next due date |
| --- | --- | --- | --- | --- | --- |
| | | shaky / improving / solid | YYYY-MM-DD | second retrieval / long-term review / restudy / done | YYYY-MM-DD |

If quality is unclear:
- Ask one lightweight status question, or mark as `improving` and schedule the next retrieval.

Next:
- One tiny follow-up:
```

## Weekly Review Triage

Use this only for `weekly review`, `周复盘`, `本周复习`, or a scheduled weekly triage. Weekly review selects and reschedules; it does not mean rereading everything learned that week.

```text
## Weekly Review Triage

### Inputs from course-progress
- Due concepts:
- Overdue concepts:
- Shaky concepts:
- High-value concepts:

### This week's retrieval set
| Concept | Why selected | Retrieval context | Next date | Status |
| --- | --- | --- | --- | --- |
| | due / overdue / shaky / high-value | formula / code / business / project / interview | | |

### One restudy hole
-

### One project / assignment / interview connection
-

### Queue changes
- Move out of active queue:
- Keep active:
- Reschedule:
```

## Low-Energy Fallbacks

```text
## 5-minute recovery

- Topic:
- 3 retrieval prompts:
- Biggest confusion:
- Assignment/project connection:
- Next tiny action:
```

```text
## Collapsed week recovery

1. 卡点:
2. 卡点:
3. 卡点:

1 project connection:
Next repair action:
```

```text
## Project overwhelmed mode

- Important files:
- Business objective:
- Target variable / key metric:
- Final deliverable:
- Next tiny action:
```
