# Lecture Archetypes and Priority Heuristics

Use this reference after extracting text or page titles from a real lecture PDF. The goal is to prevent equal treatment of every slide.

## PDF Intake Rule

For a lecture PDF, first make a compact page map:

```text
Page -> title/key phrase -> likely function
```

Then classify the lecture type and select only priority pages for roadmarks.

If text extraction misses diagrams, formulas, or images, say that visual inspection may be needed for those pages.

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

## Priority Output Rule

For any real lecture, output:

```text
Lecture type:
What to skim:
What to roadmark deeply:
What to ignore for now:
Assignment/project/interview hooks:
```
