export const profile = {
	name: "Joseph Wu",
	monogram: "JW",
	role: "Senior Software Engineer",
	label: "Senior Software Engineer · AI Engineering",
	headlineLead: "Hi, I'm",
	headlineName: "Joseph Wu.",
	subhead: "Building intelligent software for the real world.",
	location: "Toronto, Ontario, Canada",
	languages: "English and Mandarin",
	email: "josephwu90@hotmail.com",
	phone: "+18287153599",
	phoneDisplay: "+1 828 715 3599",
	portrait: "/images/joseph-portrait.jpg",
	resume: "/resume/joseph-wu-resume.pdf",
	resumeName: "Joseph_Wu_Senior_Software_Engineer.pdf",
} as const;

export const heroIntro =
	"I build backend platforms and AI-enabled applications with Python, from API design and data processing through cloud deployment and production operations. Recent work focuses on retrieval-augmented generation, LLM integrations, agent workflows, and evaluation.";

export const heroFacts = [
	{ label: "Toronto, Ontario, Canada", icon: "pin" },
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
		company: "Arbitexia",
		role: "Engineering Manager, AI Platforms",
		dates: "Jan 2025 to Present",
		location: "Remote from Toronto, Canada",
		summary:
			"Provide hands-on technical leadership for Python-based AI applications, including service design, implementation, reviews, and delivery planning.",
		tags: ["Python", "FastAPI", "RAG", "LLM workflows", "Evaluation"],
		contributions: [
			"Provide hands-on technical leadership for Python-based AI applications, including service design, implementation, reviews, and delivery planning.",
			"Design FastAPI services and RAG workflows for document ingestion, semantic retrieval, and source-grounded responses.",
			"Prototype LLM agent workflows with tool integrations, explicit validation, audit trails, and human approval for consequential actions.",
			"Guide engineers on testing, prompt and retrieval evaluation, deployment practices, and operational troubleshooting.",
			"Collaborate with stakeholders to define feasible releases and balance product needs with maintainable system architecture.",
		],
	},
	{
		company: "Wealthsimple",
		role: "Senior Software Engineer",
		dates: "Apr 2019 to Dec 2024",
		location: "Toronto, Ontario, Canada",
		summary:
			"Developed backend services and APIs for financial data workflows, integrations, and internal operational tools.",
		tags: ["Backend APIs", "PostgreSQL", "React", "TypeScript", "Observability"],
		contributions: [
			"Developed backend services and APIs for financial data workflows, integrations, and internal operational tools.",
			"Designed asynchronous processing patterns with retries, idempotency, and observability to improve service resilience.",
			"Optimized PostgreSQL queries and caching paths, and strengthened automated tests, release checks, and incident diagnostics.",
			"Partnered with product, security, and infrastructure teams on system design and production rollouts, and mentored engineers through reviews and pairing.",
			"Built internal React and TypeScript interfaces that surfaced workflow status and supported operational investigations.",
		],
	},
	{
		company: "Wave Financial",
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
		company: "Wave Financial",
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
	degree: "Bachelor of Computer Science",
	place: "Waterloo, Ontario",
	dates: "2008 to 2012",
	achievements: [
		{
			title: "Degree completed",
			body: "Finished a Bachelor of Computer Science, the academic base for a career in production software.",
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
