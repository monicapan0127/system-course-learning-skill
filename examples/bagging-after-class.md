# Example: Bagging After-class Retrieval

## Input Summary

Lecture topic: `Bagging`, `bootstrap`, `aggregation`, model variance, decision trees.

Teacher signals:
- Decision trees can be unstable.
- Bootstrap sampling creates multiple training sets.
- Aggregating predictions can reduce variance.
- Assignment may compare a single tree with an ensemble.

## Template Used

- `Post-class Retrieval Card`
- `AI Socratic Feedback`
- `After-class Lecture Card`

## Ideal Output

```text
## Post-class Retrieval Card

### Closed-book attempt
1. This lecture solves: 单个 decision tree 不稳定、variance 高的问题。
2. Core method / model / statistic: Bagging = bootstrap + aggregation。
3. Input: training dataset, base learner such as decision tree.
4. Process: 从原始数据中 bootstrap sample 多个训练集，训练多个模型，再平均或投票。
5. Output: ensemble prediction.
6. Evaluation / success check: compare test accuracy / RMSE / variance against a single tree.
7. I am still confused about: 为什么 sampling with replacement 可以帮助降低 variance。

### Explain / visualize / apply
- Explain in one plain Chinese sentence: Bagging 是用多个有差异的模型投票，让单个模型的随机波动被抵消。
- Draw or describe the structure: data -> bootstrap samples -> many trees -> vote/average -> final prediction.
- One formula / code / business use: 在 credit risk 分类中比较 single tree vs bagging 的 false positive / false negative tradeoff。

### Check after notes or AI feedback
- Correct: bootstrap + aggregation 的主线正确。
- Incomplete: 需要补充 base learners should be unstable enough for bagging to help.
- Misunderstood: 不是增加 bias 来换 variance，而是主要降低 variance。
- Next retrieval prompt: 不看笔记解释 bagging 和 boosting 的区别。
```

## Why This Is Good

- It starts from memory instead of a polished AI summary.
- It keeps the concept connected to input-process-output.
- It leaves one precise confusion for repair.
- It naturally connects to model evaluation and risk-oriented DS projects.
