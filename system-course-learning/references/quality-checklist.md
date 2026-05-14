# Quality Checklist

Use this checklist to judge whether a System Course Learning output is actually useful for long-term learning.

## Core Quality Bar

- Retrieval first: the output asks for or uses the learner's own closed-book attempt before summarizing.
- Small enough to use: the output focuses on the few concepts that matter for class, assignment, project, or interview.
- Concept mapped: important tasks are connected to input, method, output, evaluation, and likely mistake.
- AI feedback is diagnostic: it identifies concept errors, logic gaps, missing assumptions, or misinterpretations.
- Ownership preserved: AI does not replace the learner's explanation, validation, retelling, or tiny No-AI transfer task.
- Feedback closes the loop: after AI diagnostic feedback, the learner is prompted for `My fix after feedback`.
- High-risk claims are grounded: papers, formulas, statistical conclusions, assignment requirements, and model-performance claims include `Claim / Evidence / Uncertainty` when needed.
- Next tiny action exists: the user knows exactly what to do next.
- Career bridge is natural: Applied AI / DS / DE links are included only when they fit.

## Lecture Output Check

- It avoids a long page-by-page rewrite.
- For pre-class, it teaches in plain language before checking recall.
- For pre-class, it does more than paraphrase slide headings or the table of contents.
- For pre-class, it respects the chunk budget: 1-3 pages, 1 dense visual/formula/concept, or at most 3 core concepts.
- For pre-class, after 1-2 tiny chunks it adds one light `60-second self-explain` unless the user is distressed or asked for pure walkthrough.
- For pre-class, it uses the bilingual ratio: short Chinese scaffold, English terms inside the explanation, immediate `Simple English`, and `Interview English` only when useful.
- For pre-class, it uses declarative explanation, not repeated rhetorical questions.
- For pre-class, it asks zero questions unless the user explicitly requested active recall or quiz mode.
- For pre-class, any important question mentioned by the slide or assistant is answered immediately.
- For "continue" / "继续", it keeps the previous mode, page range, chunk size, and style instead of restarting the map.
- When the user is distressed, it validates briefly and continues teaching the next tiny concept without asking anything.
- For PDF pre-class, it gives a useful starting explanation even when extraction is incomplete or visual inspection is still needed.
- For image-heavy PDF pages, it renders and visually inspects priority pages when local tooling is available.
- It labels pages as `Text-extracted`, `Visually inspected`, or `Uncertain / needs screenshot`.
- It is not Chinese-heavy: core concepts include English terms and a reusable `Simple English` sentence.
- Job-relevant concepts include a short `Interview English` sentence without becoming all-English teaching.
- It includes concrete examples and a `Minimum to remember` line for difficult concepts.
- For after-class, it includes a `Post-class Retrieval Card` or retrieval-first `Lecture Card`.
- For after-class, AI feedback is followed by `My fix after feedback` and one `No-AI transfer check`.
- It has one visual, formula, code, business, or project transfer prompt.
- It names one confusion to repair next.
- For dense multi-session lectures, each session ends with `owned`, `not owned`, and `next retrieval`.

## Assignment Output Check

- Before solving, it creates an `Assignment Concept Map` or `Project Reading Note`.
- It does not jump to final answers unless the user is explicitly checking them.
- Before showing solution path, it gives one No-AI first step.
- It identifies likely mistakes before implementation.
- For non-PDF files, it classifies both file type and artifact role before choosing the workflow.
- For `.ipynb`, it inspects outputs, metrics, errors, figures, reproducibility risks, and explanation quality, not only code source.
- For rendered `.html`, it strips script/style/navigation noise, extracts headings/questions/code/outputs/conclusions, and notes encoding corruption without blocking review.
- If the artifact appears completed, it defaults to review, concept map, or correctness checking rather than treating it as an unsolved assignment.
- For `review`, `concept map`, or `check correctness`, it inspects the artifact first and ends with one tiny ownership check instead of requiring closed-book retrieval first.
- For correctness checks, it labels status as `confirmed correct`, `likely correct but needs source/spec confirmation`, `incorrect or risky`, or `cannot verify from rendered artifact alone`.
- For statistical assignments, it checks data type, test selection, hypotheses, one-sided vs two-sided logic, p-value comparison, conclusion in context, and association vs causation wording.
- After finishing, it creates a `Reverse Card`.
- After AI feedback, it includes `My fix after feedback` and a tiny No-AI transfer task.
- It includes an interview-safe explanation of what the user owned and validated.

## Weekly Review Check

- It does not tell the user to reread all slides.
- It selects 5-10 concepts for retrieval.
- Each key concept has at least two retrieval contexts.
- If the learner is low-energy, it downgrades to `3 retrieval prompts + 1 retry date`.
- It chooses one concept to restudy and one concept to connect to project/interview.

## Low-Energy Check

- It reduces scope immediately.
- It outputs only `3 retrieval prompts + 1 retry date + 1 next tiny action` when the user is tired or rushed.
- It avoids scolding, catch-up guilt, and giant repair plans.

## Failure Signals

- The output is mostly a summary.
- It treats a completed `.html` report or `.ipynb` notebook as a blank assignment to solve.
- It reads only notebook source cells and ignores outputs, errors, metrics, figures, or reproducibility risks.
- It lets path encoding or mojibake stop the review instead of trying an OS-safe read fallback and marking uncertainty.
- It checks a statistical answer without verifying test choice, hypotheses, p-value direction, and conclusion wording.
- The pre-class output is mostly a table of contents or "this section will cover..." with no concept explanation.
- The pre-class output restarts the navigation map when the user only said "continue".
- The pre-class output tries to cover too many pages or too many concepts in one response.
- The pre-class output continues for multiple chunks without any small self-explain or ownership checkpoint when the learner is stable.
- The pre-class output contains many question marks or question lists that make the learner feel tested instead of guided.
- The pre-class output asks a check question after the user has said they are overwhelmed, stuck, upset, or not being helped.
- The pre-class output says a question is important but leaves it unanswered.
- The PDF pre-class turn spends the whole response on tool/extraction issues and gives no usable learning entry point.
- It explains image-heavy slides from extracted text alone when visual rendering was available.
- It says visual inspection is needed but never attempts rendering or asks for a specific screenshot.
- It gives long Chinese-only explanations for concepts the learner needs to output in English.
- It saves English phrasing only for the end, making the learner understand in Chinese but unable to say it in English.
- The user cannot explain the concept after reading it.
- It creates more tasks than the user can do today.
- It forces a career bridge that does not fit.
- It hides uncertainty or makes the assignment feel solved before the user owns it.
- It gives smooth claims about papers, formulas, statistics, assignment requirements, or model performance without evidence or uncertainty.
- It gives AI feedback but never asks the learner to produce `My fix after feedback`.
- It completes an after-class or assignment flow without a No-AI transfer check.
