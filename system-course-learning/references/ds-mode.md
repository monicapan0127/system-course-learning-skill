# Data Science / ML / Statistics Mode

Use this reference when the material is about Data Science, machine learning, statistics, programming, experimentation, analytics, modelling, or AI-assisted data projects.

## Core Questions

For each important concept, answer only what is useful for learning, assignments, and project transfer:

```text
1. 它解决什么 prediction / analysis / decision problem?
2. Input 是什么?
3. Method / model / statistic 是什么?
4. Output 是什么?
5. Evaluation 怎么做?
6. Code implementation 大概怎么落地?
7. 常见误区 / bug / misinterpretation 是什么?
8. 它能连接到哪个 Applied AI / Data Science project?
```

## Default DS Output Style

- Explain concepts in plain Chinese first.
- Preserve English keywords such as `bootstrap`, `variance`, `model evaluation`, `RAG`, `feature importance`, `false positive`, and `A/B testing`.
- Prefer input-process-output framing for code and models.
- Prefer "minimum useful understanding" over exhaustive derivation.
- Add one practical interpretation when the concept supports business, market, risk, or product decisions.

## Assignment Handling

Before solving an assignment, map:

```text
Question -> lecture concept -> input -> output -> method -> evaluation -> likely mistake
```

If the user asks for a direct answer, still start with a concise concept map unless they explicitly say they are checking a final answer.

## AI-Assisted Coding Ownership

When Codex or another AI writes code, help the user reclaim ownership by explaining:

```text
1. Input data
2. Processing steps
3. Output / artifact
4. Failure modes
5. Minimal rewrite version
6. Lecture concept behind the code
7. How to validate the output
```

Use the interview-safe framing:

```text
I used AI coding tools to accelerate implementation, but I reviewed the logic, validated the outputs, interpreted the results, and owned the problem framing and evaluation.
```

## Project Priority Mapping

Connect DS/ML/Stats concepts to these project lanes when natural:

- `AI Data Analyst Agent`: EDA, visualization, summary, business questions, automated analysis workflow, human-in-the-loop validation.
- `RAG Macro Assistant`: document parsing, embeddings, retrieval, citations, macro brief generation, uncertainty and source checking.
- `Credit Risk Explainability App`: classification, risk score, thresholds, false positives/negatives, feature importance, SHAP, model evaluation.

Do not force a connection if the concept is too remote. Say "weak connection" when appropriate.
