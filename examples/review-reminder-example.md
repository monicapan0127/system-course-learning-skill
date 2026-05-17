# Example: Review Reminder

## Input Summary

Automation checks `course-progress.md` and finds three due concepts.

## Ideal Output

```text
今天该复习 3 个概念：

1. SQL window function
- Source: Lecture 11 SQL Advanced
- Task: 3 min closed-book explanation of PARTITION BY vs ORDER BY.
- Status: shaky

2. A/B test power
- Source: Lecture 7 AB Testing
- Task: Explain power using sample size and Type II error.
- Status: improving

3. Data leakage
- Source: Machine Learning lecture
- Task: Give one code example and one business risk.
- Status: shaky

复习完后回复：复习好了
```

## Why This Is Good

- It gives active retrieval tasks, not summaries.
- It keeps the load to 2-4 concepts.
- It uses the short completion trigger.
- It leaves scheduling updates to the review completion step.
