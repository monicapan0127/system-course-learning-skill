# Example: Course Progress Handoff

## Input Summary

User says:

```text
学完了
```

after finishing a long SQL lecture walkthrough.

## Ideal Output Shape

```text
## Lecture / Session Completion

### Material
- Source: Lecture 11 SQL Advanced
- Session type: full lecture walkthrough
- Scope completed: joins, CTEs, window functions, ranking examples

### Summary
- This lecture explains how SQL moves from basic filtering to reusable query structure and row-level comparisons.
- The most important shift is from "select rows" to "compute values across related rows."

### Learner-owned understanding
1. CTEs make a multi-step query easier to read.
2. Window functions calculate across a partition without collapsing rows.
3. Ranking functions need a clear ORDER BY.

### Still shaky
1. Window frame defaults.
2. Difference between PARTITION BY and GROUP BY.

### Course Progress Update
- Add/update active concepts: CTE, window function, PARTITION BY vs GROUP BY, ranking.
- Next tiny action: explain one window function query without notes.
- Review Schedule rows: first retrieval in 1-2 days, second retrieval in 5-7 days.
```

## Why This Is Good

- It summarizes enough to orient future AI.
- It records owned and shaky knowledge separately.
- It schedules retrieval instead of telling the learner to reread the lecture.
- It does not create a weekly review just because one session ended.
