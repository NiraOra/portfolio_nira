import { type SearchableContent } from './searchTypes';

// content for now pls
export const portfolioContent: SearchableContent[] = [
  {
    id: 'thesis-research',
    section: 'about',
    title: 'Thesis Research - Few Labels Classification',
    text: 'Few Labels Classification Text cardiogenomic disease diagnosis NLP methodologies knowledge graphs neural networks Chain Thought learning artificial intelligence machine learning medical healthcare biomedical research thesis honours degree computer science',
    element: 'about-section',
    weight: 10,
    tags: ['thesis', 'nlp', 'machine learning', 'healthcare', 'ai', 'research', 'honours']
  },
  {
    id: 'education-honours',
    section: 'about',
    title: 'Computer Science Honours Degree',
    text: 'Bachelor Computer Science Honours UNSW Sydney artificial intelligence specialization thesis research academic degree university education',
    element: 'about-section', 
    weight: 8,
    tags: ['education', 'computer science', 'honours', 'university', 'degree', 'undergraduate']
  },
  {
    id: 'education-undergraduate',
    section: 'about',
    title: 'Computer Science Undergraduate',
    text: 'Bachelor Computer Science AI UNSW Sydney Python R Java JavaScript TypeScript Computer Vision Machine Learning Recommender Systems Natural Language Processing programming languages',
    element: 'about-section',
    weight: 7,
    tags: ['education', 'programming', 'computer vision', 'machine learning', 'nlp', 'ml', 'rust', 'C', 'basics', 'undergraduate']
  },
  {
    id: 'technical-skills',
    section: 'about',
    title: 'Technical Skills',
    text: 'Python TypeScript JavaScript R Java SQL Rust Machine Learning NLP TensorFlow React Azure AWS GitHub programming languages technologies tools',
    element: 'about-section',
    weight: 6,
    tags: ['skills', 'programming', 'python', 'javascript', 'machine learning', 'tensorflow']
  },

  {
    id: 'westpac-graduate',
    section: 'experience',
    title: 'Westpac Data & AI Graduate',
    text: 'Westpac Group Data AI Graduate Program rotations data science analytics AI-driven teams machine learning large-scale real-world financial systems banking finance',
    element: 'experience-section',
    weight: 9,
    tags: ['graduate program', 'data science', 'ai', 'finance', 'banking', 'westpac']
  },
  {
    id: 'research-assistant',
    section: 'experience',
    title: 'Research Assistant - UNSW',
    text: 'Research Assistant UNSW Sydney Professor Imran Razzak machine learning biological medical domains computer vision NLP health data biomedical datasets retinal fundus images genomic sequences ECG signals computational models disease prediction biomarker discovery healthcare',
    element: 'experience-section',
    weight: 9,
    tags: ['research', 'healthcare ai', 'nlp', 'computer vision', 'biomedical', 'medical']
  },
  {
    id: 'cba-intern',
    section: 'experience',
    title: 'Data Science Intern - Commonwealth Bank',
    text: 'Data Science Intern Commonwealth Bank Australia CBA Bankwest Broker chatbot features text-to-audio Graduate-Intern Hackathon guardrails chatbot outputs prompt testing accuracy invalid-prompt flagging banking finance',
    element: 'experience-section',
    weight: 8,
    tags: ['data science', 'chatbots', 'nlp', 'banking', 'internship', 'hackathon']
  },
  {
    id: 'math-tutor',
    section: 'experience',
    title: 'Mathematics Tutor',
    text: 'Mathematics Tutor Mathnasium teaching mathematical methods arithmetic learning plans student progress personalized feedback education',
    element: 'experience-section',
    weight: 5,
    tags: ['teaching', 'mathematics', 'education', 'tutoring']
  },

  {
    id: 'ai-forge-flashcards',
    section: 'projects',
    title: 'AI Forge Flashcards - Confluence App',
    text: 'AI Forge Flashcards UNSW Capstone Project Atlassian Confluence Forge app team five integrated AI pre-trained NLP models T5 SpanBERT flashcard generation HuggingFace Ngrok API',
    element: 'projects-section',
    weight: 8,
    tags: ['confluence', 'nlp', 't5', 'spanbert', 'huggingface', 'capstone', 'ai']
  },
  {
    id: 'career-horizons',
    section: 'projects', 
    title: 'Career Horizons - Hackathon Winner',
    text: 'Career Horizons BuildClub UNSW AI Society Hackathon winner website navigating internships career development Groq AI Cursor V0 ChatGPT Claude personalized recommendations skills experience',
    element: 'projects-section',
    weight: 9,
    tags: ['hackathon winner', 'groq ai', 'career tech', 'ai', 'winner']
  },
  {
    id: 'music-recommender',
    section: 'projects',
    title: 'Article-Based Music Recommender',
    text: 'Article-Based Music Recommender BuildClub AI Hackathon chatbot recommending songs relevant articles transformer models 100k songs dataset ML algorithms text-to-song matching',
    element: 'projects-section',
    weight: 7,
    tags: ['transformers', 'recommender systems', 'nlp', 'chatbot', 'music']
  },
  {
    id: 'neurodivergent-study',
    section: 'projects',
    title: 'Neurodivergent Study System',
    text: 'Neurodivergent Study System UNSW New Wave Founders startup AI-generated quizzes neurodivergent students ML techniques quiz generation accessible UI UX design education technology',
    element: 'projects-section',
    weight: 7,
    tags: ['startup', 'accessibility', 'edtech', 'ml', 'ai']
  },
  {
    id: 'llm-snp-ecg',
    section: 'publications',
    title: 'LLMs for SNP Variants and ECG Phenotypes',
    text: 'Large Language Models SNP Variants ECG Phenotypes Cardiovascular Risk Prediction IEEE BIBM 2025 accepted Longitudinal Analysis Machine Learning Biological Age Feature Engineering SHAP',
    element: 'publications-section',
    weight: 10,
    tags: ['llm', 'cardiovascular', 'machine learning', 'ieee', 'accepted', 'research']
  },
  {
    id: 'few-label-multimodal',
    section: 'publications',
    title: 'Few-Label Multimodal SNP and ECG Modeling',
    text: 'Few-Label Multimodal Modeling SNP Variants ECG Phenotypes Large Language Models Cardiovascular Risk Stratification ARR NAACL 2025 submitted Cardiovascular Diseases LLMs Single Nucleotide Polymorphism Time-Series Analysis',
    element: 'publications-section',
    weight: 9,
    tags: ['few-label', 'multimodal', 'llm', 'cardiovascular', 'time-series', 'research']
  },
  {
    id: 'genesis5k',
    section: 'publications',
    title: 'Genesis5K: Long-Video Understanding',
    text: 'Genesis5K Hierarchical Causal Diagnostics Long-Video Understanding ARR ACL 2026 submitted Long-form Video Understanding Multimodal Large Language Models Causal Reasoning Hierarchical Cognitive Taxonomy Diagnostic Evaluation Embodied AI',
    element: 'publications-section',
    weight: 8,
    tags: ['video understanding', 'multimodal', 'llm', 'causal reasoning', 'embodied ai']
  },
  {
    id: 'psychological-wellbeing',
    section: 'publications',
    title: 'Lifestyle and Psychological Well-being',
    text: 'Exploring Influence Lifestyle Social Health Demographic Factors Psychological Well-being Engagement Levels WWW 2026 submitted Loneliness Psychological Well-Being Social Health Lifestyle Factors Depression',
    element: 'publications-section',
    weight: 7,
    tags: ['psychological wellbeing', 'social health', 'lifestyle', 'depression', 'www']
  },
  {
    id: 'causal-mediation',
    section: 'publications',
    title: 'Decoding Causal Structure',
    text: 'Decoding Causal Structure End-to-End Mediation Nature Machine Intelligence preparation Causal Inference Mediation Analysis',
    element: 'publications-section',
    weight: 8,
    tags: ['causal inference', 'mediation analysis', 'nature', 'machine intelligence']
  }
];