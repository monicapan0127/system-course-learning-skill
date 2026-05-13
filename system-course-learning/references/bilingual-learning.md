# Bilingual Learning Bridge

Use this reference when the learner understands a concept in Chinese or mixed Chinese-English, but needs a clear English explanation for assignments, exams, interviews, README notes, or project discussion.

## Purpose

Treat Chinese as the understanding support layer and English as the output language. The goal is not Chinese notes with a little English at the end. The goal is a bilingual ladder: short Chinese explanation, English terms, reusable English sentence, and interview-safe English when relevant.

When the learner is pre-studying, do not wait until the end to introduce English. Pair each core concept with a short English sentence they can reuse later.

## Default Flow

1. Ask for or use the learner's own explanation first.
2. Diagnose the answer:
   - Correct idea
   - Concept error
   - Missing link
   - Misused English term
   - Over-vague explanation
3. Give a concise corrected Chinese version.
4. Give a simple academic English version.
5. Give an interview-safe English version when the concept is job-relevant.
6. Ask the learner to retell the answer in their own words.

## Feedback Shape

Keep feedback short and diagnostic. Prefer this structure:

```text
你已经抓住了:
-

需要修正:
-

中文正确版本:
-

Simple English:
-

Interview-safe English:
-

Retell prompt:
-
```

## English Levels

### Simple Academic English

Use for assignments, exams, and class discussion. It should be accurate, plain, and easy to reproduce:

```text
K-Means groups numerical data points into clusters based on distance to centroids.
```

### Interview-safe English

Use when connecting coursework to Applied AI, Data Science, or Data Engineering work. It should explain what the learner can do, not merely define the term:

```text
I can choose a representation and model based on the data type: clustering for unlabelled numerical data, NLP features or embeddings for text, and neural networks for complex image or sequence patterns.
```

## Retell Practice

After giving a corrected answer, ask for a short retell:

- One-sentence retell
- 30-second explanation
- Compare A vs B
- Apply to one new case
- Explain input, process, output, and evaluation

Do not move to a full summary until the learner can retell the repaired idea.

## Common Repair Patterns

- If the learner gives examples but misses the principle, name the principle.
- If the learner knows the Chinese idea but lacks English terms, preserve their idea and add the minimum English vocabulary.
- If the learner overuses vague words like "useful", "advanced", or "understands", replace them with input, process, output, and evaluation.
- If the learner confuses two methods, contrast them using:

```text
Method A input:
Method A output:
Method B input:
Method B output:
Main difference:
```

## Guardrails

- Do not shame imperfect English.
- Do not turn every answer into a long model answer.
- Do not polish away the learner's own reasoning.
- Do not skip the Chinese support step when the concept is shaky.
- Do not produce long Chinese-only explanations for concepts that the learner will need in assignments or interviews.
- Do not save English phrasing only for the final summary; add reusable English throughout.
- Do not make interview phrasing sound grander than the learner's actual work.
