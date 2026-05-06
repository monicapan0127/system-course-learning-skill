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

Output:

```text
## Notebook / Code Intake

- Current structure:
- Setup/data-loading cells:
- EDA cells:
- Modeling/evaluation cells:
- Markdown/explanation quality:
- Missing sections:
- Risky or unclear code:
- What should not be changed:
- Next edit plan:
```

Guardrail:

- Do not rewrite the notebook before understanding its current flow and deliverable.

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
