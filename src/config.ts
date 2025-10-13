export const siteConfig = {
  name: "Luca Di Liello",
  title: "Applied Scientist II @ Amazon AGI",
  description: "Portfolio website of Luca Di Liello",
  accentColor: "#1d4ed8",
  social: {
    email: "lucadiliello@yahoo.com",
    linkedin: "https://www.linkedin.com/in/luca-di-liello-4b624092/",
    github: "https://github.com/lucadiliello",
    semantic_scholar: "https://www.semanticscholar.org/author/Luca-Di-Liello/1576607908",
    huggingface: "https://huggingface.co/lucadiliello",
  },
  aboutMe: "I'm an Applied Scientist II at Amazon AGI, where I develop large-scale information retrieval systems for RAG and pre-train and fine-tune multimodal language models (VLMs) for multimedia analysis and processing at scale. My work spans text, images, and videos, leveraging LLMs to extract insights from diverse data sources. I hold a PhD in Information and Communication Technology and an MS in Computer Science from the University of Trento, Italy. My research centers on Large Language Models for Natural Language Processing and Information Retrieval, with broad interests in Computer Vision, multimodal learning, and constrained generative models.",
  skills: ["Python", "PyTorch", "TensorFlow", "JAX", "Keras", "Lightning", "vLLM", "HuggingFace", "AWS", "Docker", "Kubernetes"],
  experience: [
    {
      company: "Amazon AGI",
      location: "Sunnyvale, CA",
      title: "Applied Scientist II",
      dateRange: "April 2025 – Present",
      bullets: [
        "Design, pre-train, and fine-tune compact Vision-Language Models (VLMs) for large-scale, efficient multimodal information retrieval across diverse data sources.",
        "Develop and optimize Vision-Language architectures for multimodal data processing, quality improvement, and ingestion pipelines at scale.",
      ],
    },
    {
      company: "Amazon AGI",
      location: "Milan, Italy",
      title: "Applied Scientist II",
      dateRange: "October 2023 – March 2025",
      bullets: [
        "Built state-of-the-art computer vision and natural language processing models for large-scale information retrieval and multimodal re-ranking tasks.",
        "Led fine-tuning of Vision-Language Models for sensitive-content detection and classification, improving precision and recall on large production datasets.",
      ],
    },
    {
      company: "Amazon Alexa AI",
      location: "Manhattan Beach, CA",
      title: "Applied Scientist Intern II",
      dateRange: "February 2022 – July 2022",
      bullets: [
        "Extended research and development of large language models for Answer Sentence Selection, improving response accuracy and ranking quality through large-scale experimentation.",
      ],
    },
    {
      company: "Amazon Alexa AI",
      location: "Milan, Italy",
      title: "Applied Scientist Intern I",
      dateRange: "April 2021 – October 2021",
      bullets: [
        "Advanced state-of-the-art Answer Sentence Selection models, contributing to improved natural language understanding and retrieval performance within Alexa systems.",
      ],
    },
    {
      company: "SpazioDati SRL",
      location: "Trento, Italy",
      title: "Big Data Analyst Intern",
      dateRange: "March 2017 – June 2017",
      bullets: [
        "Analyzed millions of geolocated tweets across Italy to identify correlations between individuals, companies, and employment networks, using large-scale data mining and natural language analysis techniques.",
      ],
    },
  ],
  education: [
    {
      school: "University of Trento",
      degree: "Ph.D. Candidate in Information and Communication Technologies",
      dateRange: "November 2019 – Present",
      achievements: [
        "Research focused on Natural Language Processing (NLP) and Information Retrieval (IR), with applications to large-scale multimodal and text-based retrieval systems.",
        "Developed and evaluated novel deep learning architectures for language understanding and retrieval efficiency.",
        "Collaborated with international research groups on applied machine learning and multimodal AI projects.",
      ],
    },
    {
      school: "University of Trento",
      degree: "Master’s Degree in Data Science",
      dateRange: "August 2017 – October 2019",
      achievements: [
        "Specialized in Big Data, Machine Learning, and Statistical Modeling.",
        "Completed thesis research on large-scale data analysis and predictive modeling.",
        "Engaged in interdisciplinary coursework bridging computer science, mathematics, and data-driven decision-making.",
      ],
    },
    {
      school: "University of Trento",
      degree: "Bachelor’s Degree in Computer Science",
      dateRange: "August 2014 – July 2017",
      achievements: [
        "Built strong foundations in Algorithms, Databases, and Web Development.",
        "Developed several software projects in JavaScript, Python, and Java, emphasizing scalable backend systems.",
        "Graduated with distinction, consistently achieving top marks in core computer science courses.",
      ],
    },
  ],
  publications: [
    {
      link: "https://aclanthology.org/2023.acl-short.40/",
      name: "Context-Aware Transformer Pre-Training for Answer Sentence Selection",
      conference: "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics: ACL 2023",
      abstract: "This paper proposes three pre-training objectives designed to mimic the downstream fine-tuning task of contextual Answer Sentence Selection, and shows that their pre- training approaches (applied to RoBERTa and ELECTRA) can improve baseline contextual AS2 accuracy by up to 8% on some datasets.",
      notes: ["State-of-the-art results on TrecQA and WikiQA benchmarks."]
    },
    {
      link: "https://aclanthology.org/2022.emnlp-main.810/",
      name: "Pre-training Transformer Models with Sentence-Level Objectives for Answer Sentence Selection",
      conference: "Conference on Empirical Methods in Natural Language Processing: EMNLP 2022",
      abstract: "This paper proposes three novel sentence-level transformer pre-training objectives that incorporate paragraph-level semantics within and across documents, to improve the performance of transformers for Answer Sentence Selection, and mitigate the requirement of large labeled datasets.",
    },
    {
      link: "https://aclanthology.org/2022.naacl-main.181/",
      name: "Paragraph-based Transformer Pre-training for Multi-Sentence Inference",
      conference: "North American Chapter of the Association for Computational Linguistics: NAACL 2022",
      abstract: "This paper shows that popular pre-trained transformers perform poorly when used for fine-tuning on multi-candidate inference tasks, and proposes a new pre-training objective that models the paragraph-level semantics across multiple input sentences.",
    },
    {
      link: "https://arxiv.org/abs/2309.08272",
      name: "Structural Self-Supervised Objectives for Transformers",
      conference: "PhD Thesis: 2023",
      abstract: "Self-supervised pre-training tasks that align structurally with downstream applications, reducing the need for labeled data and achieving state-of-the-art results on various benchmark datasets are proposed.",
    },
    {
      link: "https://aclanthology.org/2022.findings-emnlp.405/",
      name: "Effective Pretraining Objectives for Transformer-based Autoencoders",
      conference: "Findings of the Association for Computational Linguistics: EMNLP 2022",
      abstract: "It is proved that eliminating the MASK token and considering the whole output during the loss computation are essential choices to improve performance and it is shown that ELECTRA benefits heavily from a state-of-the-art hyper-parameters search.",
    },
    {
      link: "https://joss.theoj.org/papers/10.21105/joss.04101",
      name: "TorchMetrics - Measuring Reproducibility in PyTorch",
      conference: "The Journal of Open Source Software: JOSS 2022",
      abstract: "A main problem with reproducing machine learning publications is the variance of metric implementations across papers. A lack of standardization leads to different behavior in mechanisms such as checkpointing, learning rate schedulers or early stopping, that will influence the reported results. For example, a complex metric such as Fréchet inception distance (FID) for synthetic image quality evaluation (Heusel et al., 2017) will differ based on the specific interpolation method used.",
      notes: ["TorchMetrics packages is downloaded about 300K times a day (source <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://pypistats.org/packages/torchmetrics\">PyPI</a>)"],
    },
    {
      link: "https://proceedings.neurips.cc/paper/2020/hash/a87c11b9100c608b7f8e98cfa316ff7b-Abstract.html",
      name: "Efficient Generation of Structured Objects with Constrained Adversarial Networks",
      conference: "The Thirty-Sixth Annual Conference on Neural Information Processing Systems: NeurIPS 2020",
      abstract: "Constrained Adversarial Networks are proposed, an extension of GANs in which the constraints are embedded into the model during training and which efficiently generate valid structures that are both high-quality and novel.",
    },
  ],
  books: [
    {
      link: "https://ebooks.iospress.nl/DOI/10.3233/FAIA230154",
      name: "Semantic Loss Functions for Neuro-Symbolic Structured Prediction",
      book: "Compendium of Neurosymbolic Artificial Intelligence",
      series: "Frontiers in Artificial Intelligence and Applications",
      abstract: "This chapter introduces the semantic loss, a training method that incorporates symbolic structural constraints into neural networks to ensure outputs respect underlying dependencies (like valid graph paths). We enhance it with entropy minimization to prefer simpler solutions and demonstrate its versatility by integrating it with both discriminative and generative models, enabling efficient generation of complex structured objects.",
    },
  ],
  projects: [
    {
      name: "Transformers-Framework",
      link: "https://github.com/lucadiliello/transformers-framework",
      description: "Transformers-Framework helps developers train and evaluate language models across diverse natural language processing tasks including masked language modeling, token detection, answer selection, machine reading, denoising, and summarization. We support various model architectures, from contextual models to ELECTRA-style generator-discriminator configurations, enabling flexible pipeline combinations. Built on PyTorch Lightning, the framework automatically handles multi-device and distributed training while maintaining dual checkpoint compatibility with both PyTorch Lightning (for training restoration) and Transformers (for model sharing)."
    },
    {
      name: "Semantic Loss - PyTorch",
      link: "https://github.com/lucadiliello/semantic-loss-pytorch",
      description: "Create Semantic Loss equivalent circuits in PyTorch using SDDs for knowledge compilation."
    },
    {
      name: "BLEURT - PyTorch",
      link: "https://github.com/lucadiliello/bleurt-pytorch",
      description: "Porting of BLEURT models to HuggingFace Transformers."
    }
  ]
};
