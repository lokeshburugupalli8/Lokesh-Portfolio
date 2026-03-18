export const profile = {
  name: "Lokesh Burugupalli",
  eyebrow: "Computer Science Engineering Portfolio",
  role: "B.Tech CSE Student | Python, AI/ML, Web, and Cloud Fundamentals",
  education: "Sasi Institute of Technology & Engineering | 2022 - 2026 | CGPA 8.19",
  availability: "Open to internships and entry-level software roles",
  resumeHref: "/Lokesh-Burugupalli-Resume.pdf",
  intro:
    "Computer Science Engineering student with hands-on experience in Python, MySQL, data handling, analytics, automation, and cloud fundamentals. I enjoy building practical tools, learning fast, and contributing to technology-driven solutions.",
  focus:
    "Building practical web and AI-driven projects with Python, structured problem solving, and a strong foundation in modern software concepts.",
  email: "lokeshburugupalli8@gmail.com",
  phone: "+91 6301603876",
};

export const highlights = [
  {
    value: "5",
    label: "Industry-aligned internships across ML, Python, cloud, and DevOps",
  },
  {
    value: "3",
    label: "Hands-on projects across blockchain, AI, web development, and cloud practice",
  },
  {
    value: "4",
    label: "Professional certifications including OCI Generative AI and AI Foundations",
  },
];

export const strengths = [
  "Python, Java, and C programming",
  "HTML, CSS, and JavaScript",
  "MySQL, DBMS, and data handling",
  "Git, VS Code, and Excel",
  "Data Structures, OOPS, SDLC, and cloud basics",
];

export const projects = [
  {
    title: "Academic Certificate Verification Web System",
    category: "Blockchain-Based Web Application",
    description:
      "Developed a decentralized system to issue and verify academic certificates securely by generating cryptographic hashes and storing them on blockchain for tamper resistance and data integrity.",
    stack: ["Blockchain", "Web Development", "Verification Automation"],
  },
  {
    title: "Cloud and DevOps Internship Practice",
    category: "Infrastructure and Workflow Learning",
    description:
      "Worked through cloud networking, virtualization, Linux automation, version control, and CI/CD concepts during structured internship programs and guided technical practice.",
    stack: ["Cloud Basics", "DevOps", "Linux", "CI/CD"],
  },
  {
    title: "Resume Analyzer Using AI",
    category: "AI-Powered Web Project",
    description:
      "Built a resume analysis project focused on extracting resume content and generating structured feedback to help improve clarity, quality, and job-role alignment.",
    stack: ["Python", "AI", "Text Processing", "Web Interface"],
  },
  {
    title: "Personal Portfolio Website",
    category: "Responsive Frontend Project",
    description:
      "Designed and deployed a responsive portfolio website to present projects, skills, and technical background with a clean structure and accessible layout.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    label: "GitHub",
    value: "github.com/LokeshBurugupalli",
    href: "https://github.com/LokeshBurugupalli",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lokesh-burugupalli",
    href: "https://www.linkedin.com/in/lokesh-burugupalli/",
  },
];
