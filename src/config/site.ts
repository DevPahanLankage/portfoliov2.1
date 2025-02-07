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
  skills: [
    { name: "React", level: "Expert" },
    { name: "Next.js", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "JavaScript", level: "Expert" },
    { name: "HTML/CSS", level: "Expert" },
    { name: "Node.js", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "SQL", level: "Advanced" },
    { name: "AWS", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
  ],
} as const; 