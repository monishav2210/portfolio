export const profile = {
  name: 'MONISHA V.',
  role: 'Generative AI Engineer',
  shortRole: 'AI + web systems builder',
  description: 'Generative AI Engineer and BCA graduate building AI-driven applications with Python, LLMs, RAG, NLP and modern web technologies.',
  email: 'monishav2210@gmail.com',
  phone: '9159333324',
  github: 'https://github.com/monishav2210',
  linkedin: 'https://www.linkedin.com/in/monishavenugopal',
  resume: '/resume/Monisha-V-Resume.pdf',
  linkedinPlaceholder: 'Add LinkedIn URL',
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const aboutHighlights = [
  { value: 'BCA', label: 'Graduate' },
  { value: 'AI', label: 'Application focus' },
  { value: 'Web', label: 'Development craft' },
]

export const skillGroups = [
  { title: 'Generative AI & NLP', eyebrow: '01', skills: ['LLMs', 'Prompt Engineering', 'RAG', 'Embeddings', 'Semantic Search', 'Vector Search', 'Model Evaluation', 'NLP'] },
  { title: 'Programming', eyebrow: '02', skills: ['Python'] },
  { title: 'AI Frameworks', eyebrow: '03', skills: ['LangChain', 'Langflow'] },
  { title: 'Data & Tools', eyebrow: '04', skills: ['MongoDB', 'SQL', 'REST APIs', 'API Integration', 'Git', 'GitHub', 'VS Code', 'Power BI', 'Postman'] },
]

export const experience = {
  role: 'Internship Trainee',
  company: 'Testleaf Software Solutions Pvt. Ltd.',
  period: 'May 2026 – Aug 2026',
  focus: ['Generative AI', 'RAG pipelines', 'LLM integration', 'Prompt engineering', 'Embeddings', 'AI application development'],
  details: ['Built and deployed 2 AI-driven Python applications integrating LLMs with external data sources.', 'Implemented RAG pipelines and refined prompts, improving response relevance by an estimated 20%.', 'Applied vector embeddings and semantic search across a document corpus of 500+ records with DeepEval benchmarking.', 'Worked with Git-based version control and code review practices to deliver production-ready features.'],
}

export const featuredProject = {
  name: 'COREVIA AI',
  kicker: 'Featured case study / 01',
  description: 'An AI-powered enterprise knowledge assistant using TypeScript, React.js, Node.js, RAG and Langflow to help users retrieve and understand organizational documents.',
  problem: 'Organizational knowledge is often buried across documents, making precise answers slow to find and difficult to trust.',
  solution: 'Corevia AI connects document intelligence with grounded language models so users can ask questions and receive source-based answers.',
  features: ['Document upload', 'Document processing', 'RAG pipeline', 'Semantic search', 'Vector search', 'AI-powered question answering', 'Chat history', 'Source-based responses'],
  technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Langflow', 'RAG', 'Embeddings', 'Vector Database', 'LLM'],
  architecture: ['User', 'React Frontend', 'Node.js / Express API', 'Document Processing', 'Chunking', 'Embeddings', 'Vector Database', 'Semantic Retrieval', 'LLM', 'AI Response'],
  links: { github: '', liveDemo: '', caseStudy: '' },
}

export const projects = [
  {
    title: 'AI Resume Screening Assistant',
    description: 'Developed and optimized a RAG-based AI resume screening solution using TypeScript and Node.js to semantically match 60+ resumes against job requirements, reducing manual screening time by 30%.',
    overview: 'A retrieval-augmented screening assistant built to help teams evaluate large volumes of candidate resumes against job requirements quickly and consistently.',
    problem: 'Reviewing large batches of resumes manually was time-consuming and made it difficult to compare candidates against specific role requirements at scale.',
    solution: 'Built a TypeScript and Node.js screening workflow using embeddings and semantic search to retrieve and rank the most relevant candidate profiles.',
    features: ['Semantic resume-to-job matching', 'RAG-based retrieval over candidate data', 'Matching against 60+ resume entries', 'Faster and more consistent candidate filtering'],
    technologies: ['TypeScript', 'Node.js', 'RAG', 'Embeddings', 'Vector Search', 'Semantic Search'],
    contribution: 'I designed the end-to-end retrieval workflow, implemented the matching logic, and optimized the system for efficient resume filtering.',
    results: 'Reduced manual screening time by 30%.',
    github: '',
    liveDemo: '',
  },
  {
    title: 'Intelligent PDF Question-Answering System',
    description: 'Engineered and deployed a TypeScript + React.js document Q&A application supporting PDF, DOCX, and TXT, using embeddings and semantic retrieval to deliver accurate responses across 50+ test queries.',
    overview: 'A document Q&A application that supports PDF, DOCX, and TXT files and helps users ask precise questions without reading large documents manually.',
    problem: 'Users needed accurate answers from long-form documents without spending significant time manually searching through segments and pages.',
    solution: 'Built a TypeScript + React.js application using embeddings, semantic retrieval, and contextual query flow to return relevant answers from document content.',
    features: ['Multi-format document support', 'Semantic retrieval for relevant context', 'Question answering across 50+ test queries', 'Context-aware responses from document data'],
    technologies: ['TypeScript', 'React.js', 'Embeddings', 'Semantic Search', 'Vector Search'],
    contribution: 'I built the interface, integrated the retrieval pipeline, and refined the system to improve answer relevance from PDF, DOCX, and TXT sources.',
    results: 'Delivered accurate responses across 50+ test queries.',
    github: '',
    liveDemo: '',
  },
  {
    title: 'Corevia AI – Intelligent Enterprise Knowledge Assistant',
    description: 'Designed and implemented an AI-powered enterprise knowledge assistant using TypeScript, React.js, Node.js, RAG, and Langflow, integrating document processing, embeddings, vector search, and LLM-based generation for reliable, context-aware responses.',
    overview: 'An enterprise knowledge assistant designed to help users retrieve trusted answers from organizational knowledge stored across documents.',
    problem: 'Organizational knowledge was often buried across documents, making precise answers slow to find and difficult to trust.',
    solution: 'Connected document intelligence with grounded language models so users could ask questions and receive source-based answers through a retrieval pipeline.',
    features: ['Document upload', 'Document processing', 'RAG pipeline', 'Semantic search', 'Vector search', 'AI-powered question answering', 'Chat history', 'Source-based responses'],
    technologies: ['TypeScript', 'React.js', 'Node.js', 'RAG', 'Langflow', 'Embeddings', 'Vector Search', 'LLM'],
    contribution: 'I designed and implemented the AI workflow using TypeScript, React.js, Node.js, RAG, and Langflow, integrating document processing, embeddings, vector search, and LLM-based generation.',
    results: 'Enabled reliable, context-aware responses grounded in organizational documents.',
    github: '',
    liveDemo: '',
  },
]

export const education = { degree: 'Bachelor of Computer Applications (BCA)', institution: 'Auxilium College (Autonomous), Vellore', year: '2025', result: 'CGPA: 7.51%' }
