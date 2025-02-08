export const siteConfig = {
  name: "Pahan Lankage",
  title: "Pahan Lankage | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies",
  url: "https://www.pahanlankage.com",
  ogImage: "https://www.pahanlankage.com/og.jpg",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  projects: [
    {
      title: "Project 1",
      description: "Description of project 1",
      image: "/project1.jpg",
      technologies: ["React", "Next.js", "TailwindCSS"],
      link: "https://project1.com",
      github: "https://github.com/username/project1",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      image: "/project2.jpg",
      technologies: ["TypeScript", "Node.js", "MongoDB"],
      link: "https://project2.com",
      github: "https://github.com/username/project2",
    },
  ],
  skillCategories: [
    {
      title: "Frontend Development",
      description: "Building beautiful, responsive user interfaces",
      icon: "Layout",
      skills: [
        { name: "React", icon: "react-original-wordmark" },
        { name: "Next.js", icon: "nextjs-original-wordmark" },
        { name: "TypeScript", icon: "typescript-original" },
        { name: "TailwindCSS", icon: "tailwindcss-original" },
        { name: "HTML5", icon: "html5-original-wordmark" },
        { name: "CSS3", icon: "css3-original-wordmark" },
      ]
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications",
      icon: "Server",
      skills: [
        { name: "Node.js", icon: "nodejs-original" },
        { name: "Python", icon: "python-original-wordmark" },
        { name: "C#", icon: "csharp-original" },
        { name: "Firebase", icon: "firebase-original" },
        { name: "Firestore", icon: "firebase-original" },
        { name: "REST APIs", icon: "nodejs-original" },
      ]
    },
    {
      title: "Tools & DevOps",
      description: "Streamlining development and productivity",
      icon: "Code",
      skills: [
        { name: "Git", icon: "git-plain-wordmark" },
        { name: "GitHub", icon: "github-original-wordmark" },
        { name: "VS Code", icon: "vercel-original-wordmark" },
        { name: "ChatGPT", icon: "openai" },
        { name: "Cursor", icon: "github-original-wordmark" },
        { name: "GitHub Copilot", icon: "github-original-wordmark" },
      ]
    },
    {
      title: "Development Approach",
      description: "Methodologies and practices I follow",
      icon: "Workflow",
      skills: [
        { name: "Agile", icon: "git-original-wordmark" },
        { name: "Clean Code", icon: "javascript-original" },
        { name: "TDD", icon: "javascript-original" },
        { name: "CI/CD", icon: "github-original-wordmark" },
        { name: "Code Review", icon: "github-original-wordmark" },
        { name: "Documentation", icon: "javascript-original" },
      ]
    }
  ]
} as const; 