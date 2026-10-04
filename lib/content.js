// Central content store. Edit copy, links and placeholder image paths here.

export const site = {
  name: "Su-Arpha",
  fullName: "Su-Arpha Kanklap",
  initials: "SK.",
  role: "Automation & Web Systems Developer",
  location: "Sweden",
  email: "hello@suarpha.se",
  phone: "+46 736 222 899",
  social: {
    linkedin: "https://www.linkedin.com/in/su-arpha-k-529a32196/",
    github: "https://github.com/SuarPha",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroTech = ["Next.js", "React", "n8n", "Supabase", "REST APIs"];

export const capabilities = [
  {
    number: "01",
    title: "Workflow Automation",
    description:
      "I build workflows that reduce repetitive work, organize information and automate routine business processes.",
    tech: ["n8n", "Workflow Design", "Google Workspace"],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Responsive websites, dashboards and internal tools designed around practical business needs.",
    tech: ["Next.js", "React", "JavaScript"],
  },
  {
    number: "03",
    title: "Integrations",
    description:
      "Connect applications, forms and business tools so information can move between systems.",
    tech: ["REST APIs", "Webhooks", "Data Flows"],
  },
  {
    number: "04",
    title: "Backend & Data",
    description:
      "Application data, databases and authentication for connected web systems.",
    tech: ["Supabase", "PostgreSQL", "Authentication"],
  },
];

export const selectedWork = [
  {
    id: "automira-sales-engine",
    category: "Automation",
    title: "Automira Sales Engine",
    description:
      "I needed a way to manage lead outreach while working another job and without spending hours manually sending and tracking follow-ups. I built an automated workflow that processes leads, schedules outreach, tracks CRM status and manages follow-ups based on defined rules.",
    stack: ["n8n", "Google Sheets", "Gmail", "JavaScript"],
    workedOn: [
      "Workflow logic",
      "Scheduling",
      "Follow-ups",
      "CRM state management",
      "Deduplication",
      "Debugging",
    ],
    cta: "View case study",
    href: "#",
    image: "/images/automira-sales-engine.png",
    imageWidth: 1810,
    imageHeight: 869,
  },
  {
    id: "automira-client-dashboard",
    category: "Internal Tool",
    title: "Automira Client Dashboard",
    description:
      "A business dashboard designed to bring important operational information into one place. The interface provides an overview of bookings, confirmations, leads, KPIs and items that may require attention.",
    stack: ["React", "JavaScript", "Responsive UI"],
    workedOn: [
      "Dashboard architecture",
      "KPI presentation",
      "Lead funnel",
      "Responsive design",
      "Business-focused UI",
    ],
    cta: "View case study",
    href: "#",
    image: "/images/automira-dashboard-v2.png",
    imageWidth: 1771,
    imageHeight: 1808,
  },
  {
    id: "automira-website",
    category: "Web Development",
    title: "Automira Website",
    description:
      "A responsive business website built to communicate the service clearly and turn visitors into leads. The project combines frontend development with lead capture, analytics and technical SEO.",
    stack: ["HTML/CSS", "JavaScript", "GA4", "Technical SEO"],
    workedOn: [
      "Responsive development",
      "Lead capture",
      "Analytics events",
      "Technical SEO",
      "Performance",
    ],
    cta: "View project",
    href: "#",
    image: "/images/automira-website.jpg",
    imageWidth: 1668,
    imageHeight: 7869,
  },
];

export const previousWork = [
  {
    id: "frontend-project",
    name: "Frontend Project",
    description: "Placeholder description — replace with a short summary of this project.",
    tech: ["JavaScript", "CSS", "HTML"],
    image: "/images/previous-project-01.jpg",
    imageWidth: 1668,
    imageHeight: 4027,
    github: "#",
    demo: "#",
  },
  {
    id: "wordpress-project",
    name: "WordPress Project",
    description: "Placeholder description — replace with a short summary of this project.",
    tech: ["WordPress", "PHP", "CSS"],
    image: "/images/previous-project-02.jpg",
    imageWidth: 1668,
    imageHeight: 4434,
    github: "#",
    demo: "#",
  },
  {
    id: "react-ecommerce-project",
    name: "React E-commerce Project",
    description: "Placeholder description — replace with a short summary of this project.",
    tech: ["React", "JavaScript", "Node.js"],
    image: "/images/previous-project-03.jpg",
    imageWidth: 1668,
    imageHeight: 3334,
    github: "#",
    demo: "#",
  },
];

export const skillGroups = [
  {
    title: "Automation & Integration",
    skills: [
      "n8n",
      "REST APIs",
      "Webhooks",
      "Workflow Automation",
      "Google Workspace",
      "Email Automation",
    ],
  },
  {
    title: "Frontend Development",
    skills: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "Supabase", "PostgreSQL", "MongoDB", "Database Design", "Authentication"],
  },
  {
    title: "Web & Growth",
    skills: ["Technical SEO", "GA4", "Google Search Console", "Lead Generation", "WordPress"],
  },
  {
    title: "Development & Deployment",
    skills: ["Git", "GitHub", "Vercel", "AI-assisted Development"],
  },
];

export const experience = [
  {
    id: "automira",
    title: "Automation & Web Systems Development",
    org: "Automira · Independent Project",
    description:
      "Designing and building automation workflows, web systems, dashboards and lead-generation infrastructure from initial problem definition through development, testing and deployment.",
    tags: ["Automation", "Web Development", "Business Systems"],
  },
  {
    id: "web-dev",
    title: "Web Development",
    org: "Frontend & WordPress Projects / Internships",
    description:
      "Worked with frontend development and WordPress in practical development environments, alongside independent web projects.",
    tags: ["Frontend", "WordPress"],
  },
  {
    id: "education",
    title: "Education",
    org: "Web Developer — E-commerce · Medieinstitutet",
    description:
      "Studies covering frontend and backend web development including JavaScript, React, Node.js, PHP, WordPress and database fundamentals.",
    tags: ["Education"],
  },
];
