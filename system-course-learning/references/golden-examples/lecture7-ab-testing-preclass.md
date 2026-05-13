# Golden Example: Lecture 7 AB Testing Pre-class Walkthrough

Use this as the calibration example when generating a pre-class walkthrough for
Lecture 7 A/B Testing, especially when the learner says the output is too
generic, too question-heavy, or too Chinese-heavy.

This example is calibrated from:

- a dialogue-style A/B Testing explanation, which is strong at plain English,
  concrete product examples, and short memory lines
- a complete A/B Testing note, which is strong at mental maps, interview-safe
  wording, and experiment decision logic

## Style Target

The output should feel like a patient tutor walking through the slides.

- Default to zero quiz questions.
- Convert important questions into immediate answers.
- Use concise Chinese as the understanding scaffold.
- Keep the reusable output spine in English.
- Explain only the current slide chunk, not the whole topic encyclopedia.
- Include `Simple English` for every core idea.
- Include `Interview English` when the concept is job-relevant.
- Mark visual confidence when the PDF contains diagrams.

Avoid:

- long lists of unanswered questions
- a table-of-contents paraphrase
- all-English explanations before the learner understands the idea
- Chinese-only paragraphs with one tiny English phrase at the end
- full distribution/statistics cheat sheets during the first pre-class chunk

## Ideal Output Sample

Current mode: `Pre-class mode`

Output destination: chat-only.

Content confidence:

- Pages 1-5: `Text-extracted`
- Page 6: `Visually inspected` if the diagram is rendered; otherwise mark it
  as `Uncertain / needs screenshot` before explaining the numbers.

Start here: this lecture is about using experiments to make product decisions.
The main thread is:

| Part | Meaning |
|---|---|
| A/B test basics | Compare a current version and a changed version |
| Sampling and randomization | Make the two groups fair and comparable |
| Metrics | Decide what success means before looking at results |
| Hypothesis testing | Check whether the observed difference is likely real |
| Decision | Launch only when the result is statistically credible and business-safe |

### Page 1: AB Testing

This page is the cover. It tells you the lecture topic is `A/B Testing`.

Plain-language explanation:

这页先抓一个核心：A/B Testing 不是问用户喜不喜欢，而是把真实用户随机分到两个版本里，看行为数据有没有变好。Current version 叫
`control`，changed version 叫 `treatment`。After enough data is collected, the
team compares the outcome metric.

Concrete example:

Version A is the current checkout page. Version B changes the button text or
promo amount. The company measures whether B improves `conversion rate`,
`revenue per user`, or another target metric.

Simple English:

An A/B test compares a control version and a treatment version to measure
whether a product change improves a target metric.

Minimum to remember:

`A/B Testing = controlled experiment + random assignment + metric comparison`.

### Page 2: Lecture Map

This page is not asking you to master everything immediately. It is showing the
logic of the lecture.

Plain-language explanation:

这页不是让你背目录，而是在告诉你本节课的路线：先懂 product experiment，再懂
random sampling，最后用 statistics 判断结果靠不靠谱。这里的统计不是孤立数学，它服务于一个实际判断：the observed
difference should be reliable enough to support a decision.

Simple English:

The goal of the lecture is to connect product experiments with statistical
decision-making.

Minimum to remember:

Do not read this lecture as pure statistics. Read it as `product change ->
experiment -> evidence -> launch decision`.

### Page 3: AB Testing Introduction

This page introduces the use case of A/B Testing. If the slide contains lines
like `basic introduction`, `practical scenarios`, and `common interview roles`,
answer them directly.

AB Test is:

一个 controlled experiment。Users are randomly assigned to different product
versions, so the team can compare outcomes fairly.

How it is used in real work:

真实工作里，team 会用它测试 button text, checkout flow, recommendation
algorithm, search ranking, email campaign, coupon amount, or page layout。它的作用是避免只靠直觉做产品决定。

Why Data Scientist and Product Analyst interviews test it:

因为 DS / PA 都要把 data 变成 decision。面试考它，是因为这些岗位需要 define
metrics, validate experiment design, interpret significance, monitor guardrail
metrics, and recommend a launch decision.

Simple English:

A/B testing is how product teams test whether a change actually improves user
behavior.

Interview English:

I use A/B testing to evaluate whether a product change creates a statistically
reliable and business-safe improvement.

Minimum to remember:

AB Testing is not just choosing the bigger number. It is a decision process.

### Page 4: Data Scientist Connection

This page is saying that A/B Testing is a common Data Scientist responsibility.

Plain-language explanation:

这里是在说：Data Scientist 不只是 train models。很多公司里，DS 还要判断一个 product
change 或 model change 上线后有没有真的改善 business metric。比如 recommendation
model 可能提高 clicks，但伤害 revenue or retention。A/B Testing helps check the
full effect.

Concrete example:

ML 更像是在问：the model predicts user behavior well。A/B Testing 更像是在问：the
new model actually improves real user outcomes after users interact with it.

Simple English:

Data Scientists use A/B testing to measure the real-world impact of product and
model changes.

Interview English:

I would not judge a model change only by offline accuracy; I would also validate
its online impact through an experiment with clear success and guardrail
metrics.

Minimum to remember:

Offline model improvement and online product improvement are not the same thing.

### Page 5: Product Analyst Connection

This page extends the same idea to Product Analyst work.

Plain-language explanation:

Product Analyst 的重点是把模糊的产品改动变成可判断的实验。Before the test, the analyst
clarifies the primary metric, secondary metrics, and guardrails。After the test,
the analyst explains whether the result supports a launch, rollback, or another
iteration.

Concrete example:

如果 coupon 增加 orders，但降低 profit per user，这个结果不一定好。A launch decision
needs both the target metric and the guardrail metrics.

Simple English:

Product Analysts use A/B testing to turn product changes into measurable
business decisions.

Interview English:

For an experiment, I would define the primary metric, monitor guardrails, check
statistical significance, and translate the result into a launch recommendation.

Minimum to remember:

PA work is not only reporting numbers. It is decision support.

### Page 6: Industrial Scenario Diagram

This page usually shows a product experiment diagram: visitors enter a website
or app, are randomly split into Option A and Option B, and each version produces
a metric such as conversion rate.

Plain-language explanation:

这张图是在画实验流程：visitors 进入网站或 app，然后被 randomly split 到 Option A 和
Option B。Random split 的意义是让两组一开始尽量公平。If Option A has 17% conversion
and Option B has 24% conversion, B looks better at first glance, but the lecture
wants you to be more careful than that.

真正要判断的是：24% 这个结果是不是 statistically reliable，而不只是 visually larger。The
team also needs enough sample size, stable experiment duration, and guardrail
metrics such as revenue, complaints, churn, or latency.

Concrete example:

如果 B 是更大的 discount，conversion may increase but profit may fall。A good
experiment decision checks both lift and business cost.

Simple English:

Random assignment makes the groups comparable, so the metric difference is more
likely to reflect the product change.

Interview English:

When interpreting an A/B test, I would compare the treatment and control groups,
check significance and confidence intervals, and verify that guardrail metrics
do not deteriorate.

Minimum to remember:

`Higher metric` is only the first signal. A launch decision needs
`significance + sample size + guardrails + business value`.

### Next Tiny Chunk

Continue with the next few pages by explaining sampling and randomization. The
bridge sentence should be:

Randomization matters because the experiment only works if the control and
treatment groups are comparable before the product change is applied.

## Why This Is A Good Pre-class Output

- It teaches instead of quizzing.
- It answers visible important questions immediately.
- It uses Chinese only to support understanding, then gives reusable English.
- It explains the lecture page by page without becoming a full AB Testing book.
- It keeps job language close to the concept, so interview output is not delayed
  until the end.
- It names visual confidence for diagram pages.
