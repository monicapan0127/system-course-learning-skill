# Assignment and Project Intake

Use this reference when the user provides an assignment spec, project instruction, statement, README, notebook, dataset folder, or asks to start a homework/project.

Do not treat assignments as lecture slides. Assignments are task inputs, not knowledge maps.

## First Decision: Classify The Input

Classify the task before solving:

```text
1. Practice Homework
   Multiple choice, short calculation, derivation, hypothesis test, conceptual questions.

2. Mini Assignment
   Small task with data/method requirements but limited business context.

3. Portfolio Project
   Business scenario + dataset + analysis/modeling/recommendation deliverables.

4. Existing Notebook / Code Template
   A partially built notebook or codebase that needs reading, debugging, extension, or polishing.
```

If multiple types appear, choose the dominant type and mention the secondary type.

## Non-PDF Artifact Classification

For non-PDF coursework files, classify the file type and artifact role before choosing the workflow. This prevents completed work from being treated as a blank assignment.

File type:

```text
.ipynb: notebook / code template / completed analysis
.html: rendered Quarto, RMarkdown, Jupyter report, assignment output, or webpage
.qmd / .Rmd / .md: source report, notes, or assignment document
.py / .R: script or code template
.csv / .xlsx / .tsv: dataset only or supporting data
```

Artifact role:

```text
assignment prompt
partial solution
completed solution
rendered report
project notebook
dataset only
lecture handout / notes
```

On Windows, prefer PowerShell `-LiteralPath` for OneDrive paths, spaces, and Chinese / non-ASCII path segments. If a Python reader fails or garbles a path, retry with PowerShell-safe reading before asking the user to rename the file.

Routing:

```text
Blank prompt / instructions only -> Assignment Concept Map before solving
Partial solution -> Notebook / Code Intake or Mini Assignment Intake, then next edit plan
Completed solution / rendered report -> Completed Assignment Review or Correctness Check Map
Project notebook -> Project Reading Note + Notebook / Code Intake
Dataset only -> data overview and likely assignment/project questions
```

When the user says `review`, `复盘`, `concept map`, or `check correctness`, inspect the artifact first and then add one tiny No-AI transfer check at the end. Do not require closed-book retrieval before giving the review.

## Universal Intake Before Coding

Always produce a short intake before writing code or final answers:

```text
Task type:
Business / learning objective:
Required deliverable:
Important files / data:
Questions to answer:
Must-do vs optional:
Relevant lecture concepts:
First action:
Likely risks:
Portfolio potential:
```

## Practice Homework

Use for multiple-choice, calculation, hypothesis testing, derivation, and short-answer homework.

Output:

```text
## Practice Homework Map

| Question | Tested concept | Method/formula | Likely trap | How to approach |
| --- | --- | --- | --- | --- |
| Q1 | | | | |

## Solving Protocol
1. Explain the concept.
2. Ask/confirm the user's attempt if useful.
3. Solve step by step.
4. State the final answer.
5. Add one sentence on why the wrong options/traps are wrong.
```

Guardrail:

- Do not provide bare answers without concept mapping unless the user is explicitly checking final answers.

## Mini Assignment

Use when the instruction asks for analysis/code but is not a full portfolio project.

Output:

```text
## Mini Assignment Intake

- Objective:
- Input data:
- Expected output:
- Required method:
- Evaluation / success check:
- Deliverable format:
- Slides/concepts to revisit:
- First implementation step:
```

Then create a short execution plan:

```text
Load data -> inspect -> apply required method -> validate output -> explain result
```

## Portfolio Project

Use when the task has business context, datasets, analysis questions, modelling, recommendations, or GitHub/interview value.

Output a `Project Reading Note` first:

```text
## Project Reading Note

1. Business context:
2. Stakeholder:
3. Business objective / metric:
4. Dataset files:
5. Field meanings:
6. Required questions:
7. Final deliverable:
8. What this project is NOT doing:
9. Recommended analysis framework:
10. Portfolio potential:
```

Then produce an `Analysis Framework`:

```text
Business Objective
Data Overview
Data Quality Check
EDA
Segment / user profile analysis
Modeling, if useful
Evaluation
Business recommendations
Limitations
Next steps
Executive Summary
```

Only after this should implementation begin.

## Existing Notebook / Code Template

Use when the user provides `.ipynb`, existing scripts, or a partially completed project.

For `.ipynb`, inspect both source and outputs:

- markdown headings and task/story structure
- setup and package imports
- data-loading paths and required files
- cleaning / feature engineering / EDA / modeling / evaluation cells
- outputs: metrics, tables, figures, errors, warnings
- reproducibility risks: local file dependencies, pickles, interactive downloads, hard-coded API keys, missing package installs, hidden execution state
- explanation quality: whether markdown interprets the outputs
- portfolio polish: problem framing, result summary, limitations, next steps

Output:

```text
## Notebook / Code Intake

- Current structure:
- Setup/data-loading cells:
- EDA cells:
- Modeling/evaluation cells:
- Outputs / metrics / figures:
- Errors / warnings:
- Markdown/explanation quality:
- Reproducibility risks:
- Portfolio polish:
- Missing sections:
- Risky or unclear code:
- What should not be changed:
- Next edit plan:
```

Guardrail:

- Do not rewrite the notebook before understanding its current flow and deliverable.

## Rendered HTML Intake

Use when the user provides a rendered `.html` file from Quarto, RMarkdown, Jupyter, or a similar report workflow.

First strip or ignore script/style/navigation noise, then extract:

- title and major headings
- assignment questions or report sections
- code blocks and important outputs
- formulas, tables, figures, and captions
- conclusions and interpretation paragraphs
- signs of encoding corruption / mojibake
- whether the HTML is a prompt, partial solution, completed solution, lecture handout, or project report

Output:

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

Guardrail:

- If the rendered HTML appears to be a completed assignment, default to review, concept map, or correctness checking. Do not restart the assignment as if unsolved.

## Completed Assignment Review

Use when the artifact already contains answers, code outputs, conclusions, or submitted-style prose.

Output:

```text
## Completed Assignment Review

- What this assignment tested:
- What was done correctly:
- Concept gaps / likely misunderstandings:
- Result interpretation quality:
- Code / calculation risks:
- Next-time first step:

## Reverse Card
- Core concept:
- Input:
- Method:
- Output:
- Likely mistake:
- Simple English:

## No-AI Transfer Check
- Rewrite / explain / apply one tiny part without looking:
```

## Correctness Check Map

Use when the user asks to check answers, review correctness, or verify a completed statistical / coding assignment.

Output:

```text
## Correctness Check Map

| Task | Claimed method | Expected method | Hypotheses correct? | Calculation / output consistent? | Interpretation correct? | Status | Risk / correction |
| --- | --- | --- | --- | --- | --- | --- | --- |
| | | | | | | confirmed correct / likely correct but needs source/spec confirmation / incorrect or risky / cannot verify from rendered artifact alone | |
```

For statistical assignments, always check:

- data type
- test selection
- null and alternative hypotheses
- one-sided vs two-sided logic
- p-value comparison with alpha
- conclusion in context
- association vs causation wording

## Portfolio Packaging

When a project is finished or close to finished, create:

```text
README.md
requirements.txt
project_notes.md
resume_interview_notes.md
```

Minimum project story:

```text
Problem -> Data -> Method -> Result -> Recommendation -> Limitation -> Improvement
```

Resume/interview outputs:

```text
3 resume bullets
30-second English pitch
STAR story
Common interview Q&A
AI-assisted coding ownership statement
```

## Low-Energy Project Mode

When the user is overwhelmed, output only:

```text
Important files:
Business objective:
Target variable / key metric:
Final deliverable:
Next tiny action:
```
