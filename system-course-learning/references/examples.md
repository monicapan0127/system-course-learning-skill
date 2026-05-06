# Examples

## Bagging Slide Roadmark

```text
## Slide Roadmark

- 一句话:
  Bagging 是一种 ensemble learning 方法，用 bootstrap 抽出多个 training sets，训练多个 base learners，最后 voting / averaging。

- 先看哪里:
  先看数据如何被抽成多个 bootstrap samples，再看多个模型如何合并 prediction。

- 3 keywords:
  bootstrap / with replacement / aggregation

- 最低掌握标准:
  能说出流程：sample -> train multiple models -> predict -> vote/average。

- 可以先放过:
  复杂公式推导可以先放过，先抓住 `H(x)` 是 final ensemble model，`h_t(x)` 是第 t 个 base learner。

- 最可能卡住:
  为什么 sampling with replacement 可以制造不同 training sets，以及为什么它主要降低 variance。

- Career Bridge:
  Bagging connects to model stability and ensemble prediction. It is useful for explaining how a risk or prediction system can reduce instability compared with a single decision tree.
```

## Bagging Lecture Card

```text
## Lecture Card

1. 今天这节课讲:
   Bagging and ensemble learning.

2. 它解决的问题:
   单个模型，尤其是 decision tree，容易 high variance / unstable。

3. 核心方法:
   Bootstrap multiple datasets, train multiple base learners, then aggregate predictions.

4. 老师最强调:
   Bootstrap with replacement + voting/averaging.

5. 我最不懂:
   Why variance decreases when models are averaged.

6. 作业可能会用在:
   Compare single tree vs bagging model performance and explain overfitting/stability.

## Career Bridge
- Applied AI / DS ability:
  Explain model stability and ensemble evaluation.
- Project connection:
  Credit Risk Explainability App, if comparing single classifier vs ensemble classifier.
- Interview sentence:
  I used ensemble learning concepts to understand how combining multiple unstable learners can produce a more reliable prediction workflow.
```

## Real Lecture Archetype Examples

```text
Python Basics Lecture 1:
- Lecture type: Tool / Coding Foundation
- Deep roadmarks: package ecosystem, pandas/NumPy purpose, interview coding examples
- Skip for now: every syntax detail
- Career bridge: AI-assisted coding ownership and take-home project readiness
```

```text
Lecture 3 Probability:
- Lecture type: Probability / Statistics Concept Lecture
- Deep roadmarks: conditional probability, disjoint vs independent, Bayes, distribution selection
- Skip for now: distribution appendix unless assignment needs it
- Career bridge: uncertainty reasoning for A/B testing, risk, and model evaluation
```

```text
Lecture 4 Machine Learning 1:
- Lecture type: ML Pipeline / Model Lecture
- Deep roadmarks: ML pipeline, feature engineering, model selection tradeoffs, logistic threshold/evaluation
- Skip for now: MLE derivation appendix unless required
- Career bridge: Credit Risk Explainability App and model decision support
```

```text
Lecture 7 A/B Testing:
- Lecture type: Experimentation / Product Analytics Lecture
- Deep roadmarks: A/B steps, sampling bias, hypothesis testing, power/sample size, before/during/after experiment analysis
- Skip for now: generic distribution review unless needed
- Career bridge: AI Data Analyst Agent and product experiment interview readiness
```

```text
Lecture 15 ETL part1:
- Lecture type: Data Engineering / ETL Lecture
- Subtype: ETL Fundamentals + Airflow Orchestration
- Deep roadmarks: ETL vs ELT, batch vs streaming, pipeline architecture, schema/partitioning, idempotency, Airflow DAGs, scheduling, retries, XCom, dynamic task mapping, monitoring, CI/CD
- Skip for now: memorizing every Airflow operator name unless it appears in an assignment or interview case
- Career bridge: Data Pipeline / ETL Portfolio, Airflow orchestration, AI/RAG data ingestion readiness
```

```text
Lecture 16 ETL part2:
- Lecture type: Data Engineering / ETL Lecture
- Subtype: Big Data Processing + Cloud Data Architecture
- Deep roadmarks: Spark DataFrame vs RDD, transformations vs actions, shuffles, Spark SQL optimization, data lake zones, Delta/Iceberg/Hudi, AWS/GCP data stack, governance, cloud-native pipeline example
- Skip for now: memorizing all cloud services without knowing what pipeline problem each service solves
- Career bridge: Analytics Engineering-lite, big data processing, AI-ready data infrastructure
```
