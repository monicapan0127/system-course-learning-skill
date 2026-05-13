# Lecture Archetypes and Priority Heuristics

Use this reference after extracting text or page titles from a real lecture PDF. The goal is to prevent equal treatment of every slide.

## PDF Intake Rule

For a lecture PDF, first make a compact page map:

```text
Page -> extracted signal -> visual risk -> likely function -> action
```

Then classify the lecture type and select only priority pages for roadmarks.

If text extraction misses diagrams, formulas, tables, screenshots, code images, or scanned handwriting, do not infer that the page is empty or unimportant. Mark those pages as `needs visual inspection`.

Use these labels:

- `Text-extracted`: enough readable text exists to summarize or roadmark.
- `Visually inspected`: page image was inspected before explanation.
- `Uncertain / needs screenshot`: extracted text is too weak and visual inspection is unavailable.

For `Uncertain / needs screenshot`, ask only for screenshots of priority pages, not the whole PDF.

## Extraction Risk Signals

Flag a page when any of these appear:

- extracted text is nearly empty
- extracted text is garbled or has broken encoding
- slide contains mostly diagrams, plots, screenshots, formulas, tables, or code images
- page title is missing but neighboring slides suggest it may be substantive
- model output would require reading visual layout, arrows, axes, equations, or code indentation

Risk-aware output should include:

```text
Priority pages:
- Page:
  Signal:
  Risk:
  Next action: explain from text / inspect image / ask for screenshot
```

## Archetype 1: Tool / Coding Foundation

Examples: Python basics, advanced Python, SQL basics.

Typical pages:

- language basics
- data structures
- packages/libraries
- notebook/code demos
- interview coding examples

Priority slides:

- package ecosystem and what each tool is for
- data structures that affect coding tasks
- examples with input -> process -> output
- interview or take-home style questions

Career bridge:

- AI-assisted coding ownership
- data pipeline implementation
- project readiness, not theory depth

Avoid:

- over-explaining every syntax slide
- turning intro tools into fake deep theory

## Archetype 2: Probability / Statistics Concept Lecture

Examples: probability theory, conditional probability, Bayes, random variables, distributions.

Typical pages:

- definitions
- formulas
- common fallacies
- worked examples
- interview probability questions
- distribution comparison

Priority slides:

- definition pages with common confusion
- worked examples where setup changes the answer
- pages comparing similar concepts, such as disjoint vs independent
- distribution selection frameworks
- interview questions

Career bridge:

- model reasoning
- uncertainty thinking
- risk and decision interpretation
- A/B testing and classification foundations

Avoid:

- expanding every distribution appendix unless needed
- hiding the "what changes the answer?" intuition behind formulas

## Archetype 3: ML Pipeline / Model Lecture

Examples: ML introduction, feature engineering, linear/logistic regression, regularization.

Typical pages:

- ML pipeline
- data preparation
- feature engineering
- model families
- model selection tradeoffs
- loss, threshold, evaluation
- interview model questions

Priority slides:

- pipeline overview
- feature preparation and selection
- model family map
- model selection tradeoffs
- logistic threshold/evaluation
- loss and optimization only to the depth needed for use
- regularization pages if overfitting appears

Career bridge:

- applied model selection
- explainable prediction workflow
- credit risk and AI data product demos

Avoid:

- over-focusing on derivations when the user's route is Applied AI
- ignoring evaluation and interpretation

## Archetype 4: Experimentation / Product Analytics Lecture

Examples: A/B testing, product analytics, conversion experiments.

Typical pages:

- experiment use cases
- sampling and bias
- hypothesis testing
- sample size and duration
- Type I / Type II errors
- metric design
- before/during/after experiment framework
- product interview cases

Priority slides:

- A/B test steps
- sampling and bias
- hypothesis test 4-step framework
- Type I / Type II errors
- power analysis and sample size
- experiment duration
- before/during/after experiment analysis
- interview case pages

Career bridge:

- AI Data Analyst Agent
- product decision support
- experimentation workflow automation
- Applied AI analyst interview readiness

Avoid:

- treating A/B testing as only formulas
- missing the product decision and metric-design layer

## Archetype 5: Data Engineering / ETL Lecture

Examples: ETL, ELT, Airflow orchestration, Spark, data lake, cloud data architecture, analytics engineering.

Typical pages:

- ETL vs ELT
- batch vs streaming
- pipeline layers: source, staging, transformation, sink
- schema, partitioning, and storage formats
- data quality, idempotency, retries, monitoring
- Airflow DAGs, operators, sensors, XCom, dynamic task mapping
- Spark, PySpark, DataFrame, RDD, transformations/actions
- shuffles, Spark SQL optimization, partition pruning
- data lake zones, Delta Lake, Iceberg, Hudi
- AWS/GCP data services, governance, security
- cloud-native pipeline examples

Priority slides:

- architecture and tradeoff pages
- ETL/ELT and batch/streaming decision pages
- reliability pages: idempotency, retries, monitoring, backfills
- orchestration pages: Airflow DAG anatomy, scheduling, XCom, dynamic task mapping
- Spark performance pages: shuffles, broadcast joins, partitioning, predicate pushdown
- data lake and table format pages
- cloud-native pipeline example pages

Career bridge:

- Data Pipeline / ETL Portfolio
- Analytics Engineering-lite
- AI/RAG Data Infrastructure
- reliable data foundations for downstream analytics, ML, and Applied AI products

Avoid:

- memorizing every cloud service name without understanding what pipeline problem it solves
- treating ETL as isolated infrastructure with no downstream analytics or AI product connection

Subtypes:

- **ETL Fundamentals + Airflow Orchestration**: prioritize ETL/ELT, batch vs streaming, pipeline architecture, schema/partitioning, idempotency, Airflow DAGs, retries, XCom, monitoring, CI/CD.
- **Big Data Processing + Cloud Data Architecture**: prioritize Spark transformations/actions, shuffles, Spark SQL optimization, data lake zones, Delta/Iceberg/Hudi, AWS/GCP services, governance, cloud-native pipeline design.

## Priority Output Rule

For any real lecture, output:

```text
Lecture type:
What to skim:
What to roadmark deeply:
What to ignore for now:
Assignment/project/interview hooks:
```
