# Data Science Project Portfolio Workflow

这份文档用于把一个数据分析 / 机器学习项目，从“看不懂文件夹”一步步推进到“可以放进 GitHub、简历和面试里讲”的完整作品。

核心原则：先读懂业务和任务，再写代码；先知道分析要服务谁，再决定图表、模型和建议。

---

## Step 0: 整理项目文件

先搞清楚项目文件夹里有什么。

要做：

- 查看有哪些文件
- 区分说明文档、数据文件、代码文件、临时文件
- 判断哪个是主任务文件，哪个是原始数据
- 判断哪些文件重要，哪些可以忽略

推荐 Prompt：

```text
请帮我检查这个项目文件夹：<文件夹路径>。
告诉我每个文件大概是做什么的，哪些重要，哪些可以忽略。请用中文解释。
```

---

## Step 1: 项目阅读笔记

这是最重要的第一步。先别急着写代码。

要做：

- 阅读 instruction / statement / README / PDF / docx
- 提炼业务背景
- 明确项目目标
- 翻译关键术语
- 列出需要回答的问题
- 判断最终交付物是什么

推荐 Prompt：

```text
请带我做这个项目的“项目阅读笔记”：<文件夹路径>。
请先读项目说明文件，不要急着写代码。
告诉我：
1. 这个项目的业务背景是什么
2. 核心任务是什么
3. 最终要交付什么
4. 每个数据字段是什么意思
5. 这个项目不是在做什么
6. 推荐的分析框架是什么
```

如果术语看不懂：

```text
我看不懂这些术语：<术语列表>。
请用费曼学习法解释，结合这个项目的语境讲。
```

---

## Step 2: 制定项目框架

把任务变成一个清晰的分析路线图。

常见框架：

- Business objective
- Data overview
- Data quality check
- Exploratory data analysis
- User profile / customer profile
- Modeling
- Recommendations
- Limitations
- Next steps

推荐 Prompt：

```text
请基于项目阅读笔记，帮我制定完整分析框架。
我想最后做成 Jupyter notebook。
请给我 notebook 的 section 结构，每个 section 要回答什么问题，以及需要写哪些代码/图表/结论。
```

---

## Step 3: 创建项目主文件

一般推荐创建 Jupyter Notebook 作为主交付文件。

要做：

- 创建 `.ipynb`
- 写英文标题、背景、目标、字段说明
- 加载数据
- 做基础检查

推荐 Prompt：

```text
请在这个路径下创建 Jupyter notebook：<目标路径.ipynb>。
Notebook 内容请用英文写。
请先创建这些部分：
1. Project Context
2. Business Objective
3. Dataset Description
4. Import Libraries and Load Data
5. Data Overview
6. Data Quality Check
请包含 code 和 markdown explanation。
```

---

## Step 4: 数据概览与质量检查

正式开始分析前，先判断数据是否可靠。

要做：

- Rows / columns
- Data types
- Missing values
- Duplicates
- Target distribution
- Outliers
- Class imbalance
- Data caveats

推荐 Prompt：

```text
请帮我做 Data Overview 和 Data Quality Check。
数据路径是：<csv/xlsx路径>。
请输出：
1. 数据规模
2. 字段类型
3. 缺失值
4. 重复值是否应该删除
5. 目标变量分布
6. 异常值
7. data caveats
并把内容写进 notebook，英文输出。
```

---

## Step 5: EDA 探索性分析

EDA 的核心问题是：什么因素和目标变量有关？

要做：

- Overall metric
- Metric by segment
- Charts
- First insights
- Group comparison

通用 Prompt：

```text
请继续做 EDA。
目标变量是：<target column>。
请按这些维度分析：<字段列表>。
每个维度请包含：
1. summary table
2. visualization
3. English insight
请写进 notebook。
```

示例 Prompt：

```text
请继续做 EDA。
目标变量是 converted。
请分析 conversion rate by country, source, new_user, age group, total_pages_visited。
每个部分请包含 summary table、chart 和英文 insight。
```

---

## Step 6: 组合维度分析

单变量看完后，要看交叉人群。

要做：

- Country x source
- User type x country
- High-volume high-rate segments
- Heatmap / grouped bar chart
- Marketing target 判断

推荐 Prompt：

```text
请做 segment interaction analysis。
请分析这些组合：<组合列表>。
请找出高转化/低转化人群，并说明哪些适合作为 marketing target。
请用英文写进 notebook。
```

---

## Step 7: 用户画像

把数字变成业务能听懂的人话。

要做：

- High-conversion profile
- Low-conversion profile
- Business interpretation
- Target audience

推荐 Prompt：

```text
请基于前面的 EDA，帮我总结 high-conversion user profile 和 low-conversion user profile。
请用英文写，要求适合放进 notebook 和面试讲述。
```

---

## Step 8: 建模

建模前先明确：模型是服务业务的，不是为了炫技。

要做：

- Train/test split
- Encoding
- Baseline / model
- Evaluation metrics
- Feature importance
- Target imbalance 处理

推荐 Prompt：

```text
请帮我加入 predictive modeling 部分。
目标变量是：<target>。
特征是：<features>。
模型使用：<model，比如 Random Forest>。
请包含：
1. 为什么用这个模型
2. train/test split
3. preprocessing
4. model training
5. evaluation metrics
6. confusion matrix
7. feature importance
8. business interpretation
请写进 notebook，英文输出。
```

---

## Step 9: 模型解释和业务建议

这是项目价值最大的一步。

要做：

- 说明模型结果
- 不只看 accuracy
- 把 feature importance 翻译成业务语言
- Product recommendations
- Marketing recommendations
- Next steps

推荐 Prompt：

```text
请基于 EDA 和模型结果，写 Product Recommendations 和 Marketing Recommendations。
要求：
1. 不要只复述数字
2. 每条建议要解释 why
3. 区分 short-term 和 long-term
4. 包含 limitations and next steps
5. 英文写进 notebook
```

---

## Step 10: Executive Summary

写给面试官、读者、业务方快速看的总结。

要做：

- 3-5 个 key findings
- 3-4 个 recommendations
- 一句话说明 project value

推荐 Prompt：

```text
请给这个 notebook 添加 Executive Summary。
要求：
1. 英文
2. 简洁专业
3. 包含 business objective, key findings, model result, recommendations
4. 放在 notebook 最前面
```

---

## Step 11: 项目包装

把项目变成可以展示的 portfolio project。

要做：

- `README.md`
- `requirements.txt`
- `project_notes.md`
- `resume_interview_notes.md`

推荐 Prompt：

```text
请帮我把这个项目包装成 portfolio project。
请创建：
1. README.md
2. requirements.txt
3. project_notes.md
4. resume_interview_notes.md
要求英文输出，适合 GitHub 和面试准备。
项目路径是：<项目路径>
```

---

## Step 12: 简历和面试故事

最后把项目变成你能讲出来的内容。

推荐 Prompt：

```text
请帮我把这个项目转化成简历 bullet 和面试讲述。
请输出：
1. 3 个不同风格的 resume bullet
2. 30 秒英文项目 pitch
3. STAR interview story
4. 常见面试问题和回答
```

---

## 最推荐的一套 Prompt 顺序

以后可以按这个顺序推进项目：

```text
1. 请检查这个项目文件夹，告诉我每个文件是什么，哪些重要，哪些可以忽略：<路径>
```

```text
2. 请带我做项目阅读笔记。先读说明文件，不要写代码。请总结业务背景、核心任务、字段含义、交付物、分析框架：<路径>
```

```text
3. 请基于阅读笔记，设计一个 Jupyter notebook 项目结构。内容用英文，讲解用中文。
```

```text
4. 请在这个路径创建 notebook，并写入 Project Context, Business Objective, Dataset Description, Data Overview, Data Quality Check：<路径>
```

```text
5. 请继续完成 EDA，包括 summary table、visualization、English insight。
```

```text
6. 请继续完成 segment analysis 和 user profile，总结 high/low conversion users。
```

```text
7. 请加入 predictive modeling，用合适模型训练、评估、解释，并说明业务意义。
```

```text
8. 请写 Product Recommendations, Marketing Recommendations, Limitations, Next Steps。
```

```text
9. 请添加 Executive Summary，并整体 polish notebook 的英文表达。
```

```text
10. 请创建 README.md、requirements.txt、project_notes.md、resume_interview_notes.md，打包成 portfolio project。
```

---

## 任何项目先问的 5 个核心问题

```text
1. 这个项目的业务背景是什么？
2. 公司真正想改善的指标是什么？
3. 数据里的每一列如何对应业务问题？
4. 分析结果要服务谁？Product、Marketing、Operations、Finance 还是用户？
5. 最终交付是 insight、model、dashboard、recommendation，还是 decision?
```

这 5 个问题是从“我不知道从哪里入手”变成“我知道怎么拆项目”的关键。

