# Output Templates

Use these templates as compact defaults. Fill only the fields that are relevant to the user's material.

Default style:
- Concise Chinese for understanding, reflection, and recovery.
- English for the output spine: technical keywords, reusable concept sentences, project language, README bullets, and interview phrasing.
- Avoid Chinese-heavy notes. For each core concept, include a short `Simple English` line; for job-relevant concepts, include `Interview English`.
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

60-second self-explain:
- Without notes, say the concept in one sentence. Mixed Chinese-English is okay.

Next:
I will continue with pages X-Y.
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

### My fix after feedback
- In my own words, the correction is:

### No-AI transfer check
- Do this without looking at the AI answer:
```

## Claim / Evidence / Uncertainty

Use this only for high-risk claims: papers, formulas, statistical conclusions, assignment requirements, model-performance claims, or any point where a smooth explanation could hide uncertainty.

```text
## Claim / Evidence / Uncertainty

Claim:
-

Evidence:
-

Uncertainty:
-
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

### 3. My fix after feedback
- In my own words, the correction is:

### 4. No-AI transfer check
- Do this without looking at the AI answer:

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
4. No-AI first step before reading a solution:
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
- Markdown explanation:
- Missing sections:
- Risky code:
- Do not change:
- Next edit plan:
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

### My fix after feedback
- In my own words, the correction is:

### No-AI transfer check
- Do this without looking at the AI answer:

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

Use this during weekly review. Do not reread all slides by default; retrieve first, then revisit only the weak source.

```text
## Spaced Review Queue

| Concept | Source | Last attempt | Retrieval context 1 | Retrieval context 2 | Retrieval context 3 | Next date | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| | lecture / assignment / project | | formula / code / business / project / interview | formula / code / business / project / interview | formula / code / business / project / interview | | new / shaky / improving / solid |

### This week
- 5-10 concepts to retrieve:
- 1 concept to restudy:
- 1 concept to connect to project/interview:

### Low-energy downgrade
- 3 retrieval prompts:
- Retry date:
```

## Low-Energy Fallbacks

```text
## 5-minute recovery

- Topic:
- 3 retrieval prompts:
- Retry date:
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
