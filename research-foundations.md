# Research Foundations

This project is not meant to make AI replace learning. It uses AI as a retrieval coach, generative sense-making coach, metacognitive feedback partner, and project-transfer assistant.

## Core Design Principles

1. **AI is a learning partner, not an answer machine.**  
   GenAI is useful when it scales feedback, personalization, assessment, and reflection, but it can also create cognitive outsourcing. This project therefore keeps the learner's own attempt visible before AI feedback.

2. **Retrieval comes before AI explanation.**  
   The learner first recalls, explains, or sketches from memory. AI then diagnoses gaps, asks Socratic questions, and helps repair understanding.

3. **Every concept should become explainable, visible, and usable.**  
   A concept is not mature until the learner can explain it, map its structure, and use it in an assignment, code task, project, or interview answer.

4. **Learning cards should support self-regulated learning.**  
   Each useful card should contain a goal, a current attempt, feedback, a stuck point, a next tiny action, and a later review prompt.

5. **Review should vary the retrieval context.**  
   Repeating the same notes is weaker than retrieving the same concept across formula, code, business, project, and interview situations.

## Research-to-Workflow Mapping

| Paper | Core insight | Project mechanism |
| --- | --- | --- |
| Yan et al. (2024) | GenAI can support human learning through personalization, feedback, and assessment, but it can also undermine agency if used as a crutch. | Guardrail: AI should preserve ownership. Templates ask for `My own version before reading notes`, `What I owned`, and `How I validated the result`. |
| Kestin et al. (2025) | Research-based AI tutoring can outperform in-class active learning in an authentic RCT setting when the tutor is deliberately designed. | `AI Socratic Feedback`: diagnose prior understanding, ask targeted questions, give minimal correction, and prompt retry. |
| Makransky et al. (2025) | GenAI should be used for generative sense-making, not just the "wow" effect of AI interaction. | After-class and project workflows require explanation, visualization, and application rather than passive AI summaries. |
| Guan et al. (2025) | Educational chatbots can scaffold self-regulated learning processes such as planning, monitoring, reflection, and adjustment. | `real-use-log.md`, `quality-checklist.md`, and weekly review prompts turn the system into a self-regulated learning loop. |
| Xia et al. (2024) | GenAI changes assessment by increasing the need for self-regulated learning, responsible learning, and integrity. | `After-assignment Reverse Card` focuses on concepts, mistakes, validation, ownership, and interview-safe explanation instead of only final answers. |
| Endres et al. (2024) | Constructive retrieval, especially self-generated elaboration during retrieval, supports comprehension and metacognitive monitoring. | `Post-class Retrieval Card` asks for closed-book recall, self-explanation, confusion, and next retrieval prompt before AI correction. |
| Butowska-Buczyńska et al. (2024) | Spaced retrieval is stronger when retrieval varies across practice sessions. | `Spaced Review Queue` asks each concept to be retrieved through different contexts: formula, code, business, project, and interview. |
| Ye et al. (2025) | Mind mapping plus GenAI chatbot support improved programming learning and computational thinking compared with chatbot-only learning. | DS/ML/programming workflows ask the learner to map variables, flow, input-process-output, and concept structure before asking AI for help. |
| Fiorella (2023) | Generative learning depends on sense-making through explaining, visualizing, and enacting. | Core template rule: each concept should become something the learner can explain, draw/map, and apply. |

## APA 7 References

Butowska-Buczyńska, E., Kliś, P., Zawadzka, K., & Hanczakowski, M. (2024). The role of variable retrieval in effective learning. *Proceedings of the National Academy of Sciences, 121*(44), Article e2413511121. https://doi.org/10.1073/pnas.2413511121

Endres, T., Carpenter, S. K., & Renkl, A. (2024). Constructive retrieval: Benefits for learning, motivation, and metacognitive monitoring. *Learning and Instruction, 94*, Article 101974. https://doi.org/10.1016/j.learninstruc.2024.101974

Fiorella, L. (2023). Making sense of generative learning. *Educational Psychology Review, 35*, Article 50. https://doi.org/10.1007/s10648-023-09769-7

Guan, R., Raković, M., Chen, G., & Gašević, D. (2025). How educational chatbots support self-regulated learning? A systematic review of the literature. *Education and Information Technologies, 30*, 4493-4518. https://doi.org/10.1007/s10639-024-12881-y

Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: An RCT introducing a novel research-based design in an authentic educational setting. *Scientific Reports, 15*, Article 17458. https://doi.org/10.1038/s41598-025-97652-6

Makransky, G., Shiwalia, B. M., Herlau, T., & Blurton, S. (2025). Beyond the "wow" factor: Using generative AI for increasing generative sense-making. *Educational Psychology Review, 37*, Article 60. https://doi.org/10.1007/s10648-025-10039-x

Xia, Q., Weng, X., Ouyang, F., Lin, T. J., & Chiu, T. K. F. (2024). A scoping review on how generative artificial intelligence transforms assessment in higher education. *International Journal of Educational Technology in Higher Education, 21*, Article 40. https://doi.org/10.1186/s41239-024-00468-z

Yan, L., Greiff, S., Teuber, Z., & Gašević, D. (2024). Promises and challenges of generative artificial intelligence for human learning. *Nature Human Behaviour, 8*, 1839-1850. https://doi.org/10.1038/s41562-024-02004-5

Ye, X., Zhang, W., Zhou, Y., Li, X., & Zhou, Q. (2025). Improving students' programming performance: An integrated mind mapping and generative AI chatbot learning approach. *Humanities and Social Sciences Communications, 12*, Article 558. https://doi.org/10.1057/s41599-025-04846-4
