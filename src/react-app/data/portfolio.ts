export const profile = {
  name: "Joseph Wu",
  monogram: "JW",
  role: "Senior Software Engineer",
  label: "Senior Software Engineer · AI Engineering",
  headlineLead: "Hi, I'm",
  headlineName: "Joseph Wu.",
  subhead: "Building intelligent software for the real world.",
  location: "Florida, United States",
  languages: "English and Mandarin",
  email: "josephwu90@gmail.com",
  phone: "+18287153599",
  phoneDisplay: "+1 828 715 3599",
  portrait: "/images/joseph-portrait.jpg",
  resume: "/resume/joseph-wu-resume.pdf",
  resumeName: "Joseph_Wu_Senior_Software_Engineer.pdf",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/joseph-wu" },
  { label: "GitHub", href: "https://github.com/iJosephWu" },
  { label: "Twitter", href: "https://x.com/iJosephWu" },
  { label: "Telegram", href: "https://t.me/iJosephWu" },
  { label: "Stack Overflow", href: "https://stackoverflow.com/users/33238406/ijosephwu" },
] as const;

export const heroIntro =
  "I build backend platforms and AI-enabled applications with Python, from API design and data processing through cloud deployment and production operations. Recent work focuses on retrieval-augmented generation, LLM integrations, agent workflows, and evaluation.";

export const heroFacts = [
  { label: "Florida, United States", icon: "pin" },
  { label: "AI Engineering", icon: "cpu" },
  { label: "Python & Backend Systems", icon: "terminal" },
] as const;

export const aboutParagraphs = [
  "I have spent fourteen years building backend platforms, distributed services, and AI-enabled applications. Python runs through that work: API design, data processing, cloud deployment, and the production operations that keep a system reliable after it ships.",
  "Recent work is retrieval-augmented generation, LLM integrations, and agent workflows. I design FastAPI services for document ingestion and semantic retrieval, then put evaluation around prompts and search so answers stay grounded in source material.",
  "I also lead the engineering around that work. I review designs, plan releases with stakeholders, and mentor engineers on testing, deployment, and operational troubleshooting, while staying close enough to implement the difficult parts myself.",
] as const;

export const capabilities = [
  {
    title: "AI & LLM Engineering",
    icon: "spark",
    body: "I design retrieval and agent systems that answer from source material. The work covers document ingestion, chunking, semantic search, and FastAPI services that return grounded responses. Agent workflows include tool integrations, explicit validation, audit trails, and a human approval step before a consequential action. Prompts and retrieval are evaluated, so quality can be checked as the system changes.",
  },
  {
    title: "Backend Architecture",
    icon: "terminal",
    body: "I build Python services with FastAPI, Django, and Flask, including REST APIs for financial and operational workflows. Background jobs retry safely, stay idempotent, and fail in a way an on-call engineer can diagnose. Query paths, caching, external integrations, and data synchronization are part of the service design.",
  },
  {
    title: "Cloud Infrastructure",
    icon: "cloud",
    body: "I run services on AWS with Docker, Kubernetes, and Terraform. CI/CD, release checks, logging, and observability are how a change reaches production and how the team finds it when something breaks. The result is an environment engineers can keep operating.",
  },
  {
    title: "Engineering Leadership",
    icon: "users",
    body: "I stay close to service design, code review, delivery planning, and pairing with engineers on testing, evaluation, and production troubleshooting. I work with product, security, and infrastructure so a release is feasible and the architecture stays maintainable for the next person.",
  },
] as const;

export const stackRows = [
  [
    "Python",
    "Java",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "FastAPI",
    "Django",
    "Flask",
    "React",
    "Next.js",
    "PostgreSQL",
    "Prisma",
    "SQL",
  ],
  [
    "RAG",
    "LangChain",
    "LangGraph",
    "LLM APIs",
    "Embeddings",
    "pgvector",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
  ],
] as const;

export const skillGroups = [
  {
    title: "AI & Machine Learning",
    icon: "spark",
    span: "xl:col-span-2",
    body: "RAG, LangChain, LangGraph, embeddings, and pgvector, with evaluation of prompts and search quality.",
    tags: [
      "Python",
      "LLM APIs",
      "RAG",
      "LangChain",
      "LangGraph",
      "Embeddings",
      "pgvector",
      "Semantic retrieval",
      "Agent workflows",
      "Prompt evaluation",
    ],
  },
  {
    title: "Backend Engineering",
    icon: "terminal",
    span: "xl:col-span-2",
    body: "Python, Java, and Node.js services with FastAPI, Django, and Flask, including REST APIs and background work.",
    tags: [
      "Python",
      "Java",
      "Node.js",
      "FastAPI",
      "Django",
      "Flask",
      "REST APIs",
      "Distributed services",
      "Async processing",
    ],
  },
  {
    title: "Frontend Engineering",
    icon: "layout",
    span: "xl:col-span-2",
    body: "React, TypeScript, and Next.js interfaces, with HTML, CSS, and Tailwind for responsive product surfaces.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive UI",
      "Accessibility",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    span: "xl:col-span-3",
    body: "AWS, Docker, Kubernetes, and Terraform, with CI/CD and observability through to production.",
    tags: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Observability",
      "Production operations",
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: "database",
    span: "xl:col-span-3",
    body: "PostgreSQL, Prisma, Redis, and SQL for application data, caching, and the query paths behind the APIs.",
    tags: ["PostgreSQL", "Prisma", "Redis", "SQL", "Caching", "Query optimization"],
  },
] as const;

export const experience = [
  {
    company: "Arbitexia Limited",
    role: "Senior Full Stack Engineer",
    dates: "Jan 2025 to Present",
    location: "Florida, United States",
    summary:
      "Build AI-powered web features end to end with React, TypeScript, and Node.js, from the user interface to the APIs that connect it to language models.",
    tags: ["React", "TypeScript", "Node.js", "LLM integration", "Evaluation"],
    contributions: [
      "Built AI-powered web features end to end using React, TypeScript, and Node.js, from the user interface to the APIs that connected it to language models.",
      "Integrated LLMs into product workflows and evaluated outputs against real user scenarios to catch inconsistent or incorrect responses.",
      "Improved the reliability of AI features by tracking response times, API errors, and model usage, and adding fallbacks for failed requests.",
      "Helped shape technical decisions, reviewed code, and worked with product and design to bring features from prototype to production.",
    ],
  },
  {
    company: "Wealthsimple",
    role: "Senior Software Engineer",
    dates: "Apr 2019 to Dec 2024",
    location: "Delaware, United States",
    summary:
      "Built backend services and internal tools for financial data processing, integrations, and operations at Wealthsimple US.",
    tags: ["Backend services", "PostgreSQL", "React", "TypeScript", "Monitoring"],
    contributions: [
      "Built backend services and internal tools for financial data processing, integrations, and operations at Wealthsimple US.",
      "Designed asynchronous workflows with retries and idempotency so failed jobs could be retried safely, and added monitoring to help diagnose production issues.",
      "Tuned PostgreSQL queries and caching, expanded automated test coverage, and improved release checks.",
      "Built React and TypeScript tools that helped operations teams track workflow status and investigate failures.",
      "Partnered with product, security, and infrastructure teams on system design and production rollouts, and mentored engineers through code reviews and pair programming.",
    ],
  },
  {
    company: "Wave HQ",
    role: "Software Engineer",
    dates: "Jul 2015 to Mar 2019",
    location: "Toronto, Ontario, Canada",
    summary:
      "Built and maintained Python and Django services and REST APIs for small-business financial application workflows.",
    tags: ["Python", "Django", "REST APIs", "SQL"],
    contributions: [
      "Built and maintained Python and Django services and REST APIs for small-business financial application workflows.",
      "Implemented background jobs, external API integrations, and data synchronization with clear failure handling.",
      "Improved SQL access patterns, automated test coverage, and logging while collaborating with product and frontend teams.",
    ],
  },
  {
    company: "Wave HQ",
    role: "Junior Software Engineer",
    dates: "Jul 2012 to Jun 2015",
    location: "Toronto, Ontario, Canada",
    summary:
      "Delivered application features using Python, Django, JavaScript, and relational databases under senior engineering guidance.",
    tags: ["Python", "Django", "JavaScript"],
    contributions: [
      "Delivered application features using Python, Django, JavaScript, and relational databases under senior engineering guidance.",
      "Investigated defects, implemented validation and tests, and supported routine deployments and third-party integrations.",
    ],
  },
] as const;

export const projects = [
  {
    eyebrow: "Document intelligence",
    title: "AI knowledge assistant",
    summary:
      "A RAG architecture combining ingestion, chunking, vector search, retrieval APIs, and grounded answers.",
    flow: ["Docs", "Chunks", "Vectors", "Answer"],
    problem: "Answers need to come from retrieved source material, not unsupported generation.",
    approach:
      "Ingestion and chunking feed vector search. Retrieval APIs sit in front of that index so responses stay grounded in the retrieved sources.",
    outcome: "Responses stay tied to the documents that were retrieved.",
    tags: ["RAG", "Chunking", "Vector search", "Retrieval APIs"],
  },
  {
    eyebrow: "Agent systems",
    title: "Workflow automation",
    summary: "A tool-calling system with deterministic checks and approval steps.",
    flow: ["Request", "Check", "Approve", "Act"],
    problem: "Tool-calling workflows should not take consequential actions without a check.",
    approach:
      "Deterministic checks sit ahead of the action, with an approval step before anything consequential proceeds.",
    outcome: "Consequential actions require an explicit approval step.",
    tags: ["Tool calling", "Validation", "Approval steps"],
  },
] as const;

export const principles = [
  {
    number: "01",
    title: "Build for reliability",
    body: "Retries, idempotency, observability, tests, and clear failure handling are part of the design. A service should still be diagnosable after an incident.",
  },
  {
    number: "02",
    title: "Keep architecture practical",
    body: "I work with stakeholders on the release that can actually ship, and I keep the system boundary maintainable instead of stretching it to cover every future idea.",
  },
  {
    number: "03",
    title: "Make AI useful and measurable",
    body: "Retrieval and prompts need evaluation. I design for source-grounded answers, explicit validation, audit trails, and human approval when an action has consequences.",
  },
  {
    number: "04",
    title: "Optimize for maintainability",
    body: "Reviews, pairing, logging, and straightforward data access matter as much as the first version that works. The next engineer should be able to operate what we ship.",
  },
] as const;

export const education = {
  school: "University of Waterloo",
  degree: "Bachelor's degree, Computer Science",
  place: "Waterloo, Ontario",
  dates: "2008 to 2012",
  achievements: [
    {
      title: "Degree completed",
      body: "Finished a bachelor's degree in Computer Science, the academic base for a career in production software.",
    },
    {
      title: "Software foundations",
      body: "Built the grounding in software design, systems, and data used in the later backend and AI work.",
    },
    {
      title: "Career start",
      body: "Moved from Waterloo into professional engineering in Toronto right after graduation.",
    },
  ],
} as const;

export const contactIntro =
  "I work with teams on Python platforms, AI systems, and technical leadership. Email or call, and tell me what you are building.";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const footerColumns = [
  [
    { id: "home", label: "Home" },
    { id: "expertise", label: "Expertise" },
    { id: "projects", label: "Projects" },
    { id: "philosophy", label: "Philosophy" },
  ],
  [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
    { id: "education", label: "Education" },
  ],
] as const;
