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

6. **AI support should include withdrawal checks.**
   If the learner can only perform with the AI answer visible, the workflow has improved assisted performance but not durable learning.

7. **High-risk claims need evidence and uncertainty.**
   AI fluency can hide weak sourcing, hallucination, or assignment misinterpretation. Important claims should name what supports them and what remains uncertain.

## Research-to-Workflow Mapping

| Paper | Core insight | Project mechanism |
| --- | --- | --- |
| Yan et al. (2024) | GenAI can support human learning through personalization, feedback, and assessment, but it can also undermine agency if used as a crutch. | Guardrail: AI should preserve ownership. Templates ask for `My own version before reading notes`, `What I owned`, and `How I validated the result`. |
| Kestin et al. (2025) | Research-based AI tutoring can outperform in-class active learning in an authentic RCT setting when the tutor is deliberately designed. | `AI Socratic Feedback`: diagnose prior understanding, ask targeted questions, give minimal correction, and prompt retry. |
| Bastani et al. (2024) | In a field experiment, GPT-4 improved assisted practice performance, but standard GPT-style support hurt later unaided performance; learning safeguards mitigated this risk. | `No-AI transfer check` asks for one tiny unaided task after feedback so the system tests ownership, not just assisted fluency. |
| Darvishi et al. (2024) | Students may rely on AI assistance rather than learn self-regulation from it, especially when AI does the monitoring for them. | `My fix after feedback` requires the learner to turn AI feedback into their own correction. |
| Makransky et al. (2025) | GenAI should be used for generative sense-making, not just the "wow" effect of AI interaction. | After-class and project workflows require explanation, visualization, and application rather than passive AI summaries. |
| Guan et al. (2025) | Educational chatbots can scaffold self-regulated learning processes such as planning, monitoring, reflection, and adjustment. | `real-use-log.md`, `quality-checklist.md`, and weekly review prompts turn the system into a self-regulated learning loop. |
| Xia et al. (2024) | GenAI changes assessment by increasing the need for self-regulated learning, responsible learning, and integrity. | `After-assignment Reverse Card` focuses on concepts, mistakes, validation, ownership, and interview-safe explanation instead of only final answers. |
| Endres et al. (2024) | Constructive retrieval, especially self-generated elaboration during retrieval, supports comprehension and metacognitive monitoring. | `Post-class Retrieval Card` asks for closed-book recall, self-explanation, confusion, and next retrieval prompt before AI correction. |
| Butowska-Buczyńska et al. (2024) | Spaced retrieval is stronger when retrieval varies across practice sessions. | `Spaced Review Queue` asks each concept to be retrieved through different contexts: formula, code, business, project, and interview. |
| de Bruin et al. (2023) | Learners often avoid desirable difficulties because effort feels high and learning gains are delayed or hidden. | Low-energy review downgrades to `3 retrieval prompts + 1 retry date` so effort stays tolerable without abandoning retrieval. |
| Deng et al. (2025) | ChatGPT interventions can improve learning outcomes, but studies need stronger long-term and skill-demonstration assessments. | No-AI checks and assignment transfer tasks test whether understanding survives outside the AI-assisted moment. |
| Urban et al. (2025) | ChatGPT assistance can increase correct content integration, but metacognitive accuracy is still needed to avoid incorporating incorrect AI-generated information. | `Claim / Evidence / Uncertainty` marks unsupported or uncertain claims instead of letting fluent AI explanations stand alone. |
| Ye et al. (2025) | Mind mapping plus GenAI chatbot support improved programming learning and computational thinking compared with chatbot-only learning. | DS/ML/programming workflows ask the learner to map variables, flow, input-process-output, and concept structure before asking AI for help. |
| Fiorella (2023) | Generative learning depends on sense-making through explaining, visualizing, and enacting. | Core template rule: each concept should become something the learner can explain, draw/map, and apply. |

## APA 7 References

Butowska-Buczyńska, E., Kliś, P., Zawadzka, K., & Hanczakowski, M. (2024). The role of variable retrieval in effective learning. *Proceedings of the National Academy of Sciences, 121*(44), Article e2413511121. https://doi.org/10.1073/pnas.2413511121

Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakci, O., & Mariman, R. (2024). *Generative AI can harm learning*. The Wharton School Research Paper. https://doi.org/10.2139/ssrn.4895486

Darvishi, A., Khosravi, H., Sadiq, S., Gasevic, D., & Siemens, G. (2024). Impact of AI assistance on student agency. *Computers & Education, 210*, Article 104967. https://doi.org/10.1016/j.compedu.2023.104967

de Bruin, A. B. H., Biwer, F., Hui, L., Onan, E., David, L., & Wiradhany, W. (2023). Worth the effort: The Start and Stick to Desirable Difficulties (S2D2) framework. *Educational Psychology Review, 35*, Article 41. https://doi.org/10.1007/s10648-023-09766-w

Deng, R., Jiang, M., Yu, X., Lu, Y., & Liu, S. (2025). Does ChatGPT enhance student learning? A systematic review and meta-analysis of experimental studies. *Computers & Education, 227*, Article 105224. https://doi.org/10.1016/j.compedu.2024.105224

Endres, T., Carpenter, S. K., & Renkl, A. (2024). Constructive retrieval: Benefits for learning, motivation, and metacognitive monitoring. *Learning and Instruction, 94*, Article 101974. https://doi.org/10.1016/j.learninstruc.2024.101974

Fiorella, L. (2023). Making sense of generative learning. *Educational Psychology Review, 35*, Article 50. https://doi.org/10.1007/s10648-023-09769-7

Guan, R., Raković, M., Chen, G., & Gašević, D. (2025). How educational chatbots support self-regulated learning? A systematic review of the literature. *Education and Information Technologies, 30*, 4493-4518. https://doi.org/10.1007/s10639-024-12881-y

Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: An RCT introducing a novel research-based design in an authentic educational setting. *Scientific Reports, 15*, Article 17458. https://doi.org/10.1038/s41598-025-97652-6

Makransky, G., Shiwalia, B. M., Herlau, T., & Blurton, S. (2025). Beyond the "wow" factor: Using generative AI for increasing generative sense-making. *Educational Psychology Review, 37*, Article 60. https://doi.org/10.1007/s10648-025-10039-x

Urban, M., Brom, C., Lukavsky, J., Dechterenko, F., Hein, V., Svacha, F., Kmonickova, P., & Urban, K. (2025). "ChatGPT can make mistakes. Check important info." Epistemic beliefs and metacognitive accuracy in students' integration of ChatGPT content into academic writing. *British Journal of Educational Technology, 56*(5), 1897-1918. https://doi.org/10.1111/bjet.13591

Xia, Q., Weng, X., Ouyang, F., Lin, T. J., & Chiu, T. K. F. (2024). A scoping review on how generative artificial intelligence transforms assessment in higher education. *International Journal of Educational Technology in Higher Education, 21*, Article 40. https://doi.org/10.1186/s41239-024-00468-z

Yan, L., Greiff, S., Teuber, Z., & Gašević, D. (2024). Promises and challenges of generative artificial intelligence for human learning. *Nature Human Behaviour, 8*, 1839-1850. https://doi.org/10.1038/s41562-024-02004-5

Ye, X., Zhang, W., Zhou, Y., Li, X., & Zhou, Q. (2025). Improving students' programming performance: An integrated mind mapping and generative AI chatbot learning approach. *Humanities and Social Sciences Communications, 12*, Article 558. https://doi.org/10.1057/s41599-025-04846-4
