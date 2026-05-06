# Example: Logistic Regression Assignment Reverse Card

## Input Summary

Finished assignment: build and evaluate a logistic regression model for a binary outcome.

Common requirements:
- Split train/test data.
- Encode categorical variables.
- Fit `LogisticRegression`.
- Report confusion matrix, accuracy, precision, recall, and interpretation.

## Template Used

- `After-assignment Reverse Card`
- `Mistake / Confusion Diagnosis`
- `Career Bridge`

## Ideal Output

```text
## Reverse Card

### 0. Closed-book reverse attempt
- What I think this assignment tested: 用 logistic regression 做 binary classification，并解释概率、阈值和 evaluation metrics。
- How I would solve a similar task next time: 先确认 target，再检查 class balance，然后建立 baseline，最后解释 threshold tradeoff。
- Where I still feel shaky: precision 和 recall 在业务决策里的取舍。

### Concepts actually used
1. Concept: Logistic regression
   Used in: predicting a binary target
   Input: cleaned features X and binary label y
   Method: estimate probability through a logistic link
   Output: predicted probability and class label
   Likely mistake: 把 coefficient 直接解释成 probability change

2. Concept: Confusion matrix
   Used in: evaluating classification errors
   Input: y_true and y_pred
   Method: count TP, FP, TN, FN
   Output: error pattern
   Likely mistake: 只看 accuracy，忽略 false positive / false negative cost

3. Concept: Threshold decision
   Used in: converting probabilities to labels
   Input: predicted probability
   Method: choose threshold based on decision cost
   Output: final class prediction
   Likely mistake: 默认 0.5，但没有解释业务原因

### Stuck point
- I got stuck at: 不知道为什么 recall 提高会影响 precision。
- I solved it by: 画 confusion matrix，并改变 threshold 看 FP/FN 如何移动。
- Next time first step: 先写清楚哪个错误更贵。

### Interview-safe explanation
- 30-second explanation: I built a logistic regression classifier, evaluated it with a confusion matrix and precision/recall, and interpreted the threshold tradeoff in terms of decision risk.
- What I owned: I checked the target, preprocessing, metrics, and interpretation rather than only running model code.
- How I validated the result: I compared baseline performance and inspected FP/FN patterns.

## Career Bridge
- Portfolio bullet: Built and evaluated a binary classification workflow with threshold-based decision analysis and interpretable metrics.
- README sentence: The project emphasizes not only model accuracy but also the business cost of different classification errors.
- Data Engineering hook: Reliable feature preprocessing and consistent target definitions are prerequisites for trustworthy classification.
- Interview sentence: I can explain how model probabilities become decisions and how evaluation metrics map to real-world tradeoffs.
```

## Why This Is Good

- It reverse-engineers the assignment into reusable concepts.
- It captures the learner's stuck point and next first step.
- It turns a class exercise into interview-safe ownership language.
