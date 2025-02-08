"use client";

import React from "react";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { siteConfig } from "@/config/site";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { AnimatedGradientBlobs } from "@/components/ui/animated-gradient-blobs";
import { motion } from "framer-motion";
import { AnimatedWaves } from "@/components/ui/animated-waves";
import { AnimatedText } from "@/components/ui/aceternity/animated-text";
import { SkillBackground } from "@/components/ui/aceternity/skill-background";
import { Spotlight } from "@/components/ui/aceternity/spotlight-new";
import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TracingBeam } from "@/components/ui/aceternity/tracing-beam";

// Utility function for skill level percentage
function getSkillLevel(level: string): string {
  switch (level.toLowerCase()) {
    case "expert":
      return "90%";
    case "advanced":
      return "75%";
    case "intermediate":
      return "60%";
    default:
      return "45%";
  }
}

// Dynamically import icons
const ArrowRight = dynamic(() => import("lucide-react").then((mod) => mod.ArrowRight), {
  ssr: false,
});
const Github = dynamic(() => import("lucide-react").then((mod) => mod.Github), {
  ssr: false,
});
const Linkedin = dynamic(() => import("lucide-react").then((mod) => mod.Linkedin), {
  ssr: false,
});
const Mail = dynamic(() => import("lucide-react").then((mod) => mod.Mail), {
  ssr: false,
});
const Code = dynamic(() => import("lucide-react").then((mod) => mod.Code), {
  ssr: false,
});
const Layout = dynamic(() => import("lucide-react").then((mod) => mod.Layout), {
  ssr: false,
});
const Server = dynamic(() => import("lucide-react").then((mod) => mod.Server), {
  ssr: false,
});
const Workflow = dynamic(() => import("lucide-react").then((mod) => mod.GitBranch), {
  ssr: false,
});
// Development Approach Icons
const PenTool = dynamic(() => import("lucide-react").then((mod) => mod.PenTool), {
  ssr: false,
});
const CodeSquare = dynamic(() => import("lucide-react").then((mod) => mod.CodeSquare), {
  ssr: false,
});
const TestTube = dynamic(() => import("lucide-react").then((mod) => mod.TestTube), {
  ssr: false,
});
const GitPullRequest = dynamic(() => import("lucide-react").then((mod) => mod.GitPullRequest), {
  ssr: false,
});
const Rocket = dynamic(() => import("lucide-react").then((mod) => mod.Rocket), {
  ssr: false,
});
const FileText = dynamic(() => import("lucide-react").then((mod) => mod.FileText), {
  ssr: false,
});

export default function HomePage() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Handle mouse movement for button glow effect
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const buttons = document.querySelectorAll('.group.relative');
      buttons.forEach((button) => {
        if (button instanceof HTMLElement) {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          button.style.setProperty('--mouse-x', `${x}px`);
          button.style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="flex flex-col">
      {/* Home/Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Animated Gradient Blobs */}
        <AnimatedGradientBlobs />
        
        {/* Blue accent light effect */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full transform -translate-y-1/2" />
        
        <div className="container relative px-4 pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <AnimatedContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
                Hi, I'm{" "}
                <div className="text-blue-500">Pahan Lankage</div>
                <div className="text-zinc-500 mt-2">Full Stack Developer</div>
              </h1>
              <p className="text-lg text-zinc-400 mb-8 max-w-lg">
                Crafting exceptional digital experiences with modern web technologies. Let's turn your vision into reality.
              </p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="#projects"
                  className="shiny-cta"
                  style={{ 
                    "--shiny-cta-highlight": "#4169E1", 
                    "--shiny-cta-highlight-subtle": "#6495ED",
                    padding: "1rem 2.25rem"
                  } as React.CSSProperties}
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="shiny-cta"
                  style={{ 
                    "--shiny-cta-highlight": "#9370DB", 
                    "--shiny-cta-highlight-subtle": "#B19CD9",
                    padding: "1rem 2.25rem"
                  } as React.CSSProperties}
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedContainer>

            {/* Profile Image Section */}
            <AnimatedContainer
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative w-full max-w-xl mx-auto group"
            >
              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-blue-500/20 rounded-[2rem] blur-2xl" />
              <div className="absolute -inset-4 bg-purple-500/20 rounded-[2rem] blur-2xl rotate-45" />
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm">
                {/* Blue Accent Light */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/30 blur-[100px] rounded-full group-hover:bg-blue-500/40 transition-colors duration-500" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/30 blur-[100px] rounded-full group-hover:bg-purple-500/40 transition-colors duration-500" />
                
                {/* Main Image */}
                <div className="relative z-10 w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/picture1.jpg"
                    alt="Pahan Lankage"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Tech Stack Badges */}
                <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                  <span className="px-3 py-1 text-sm font-medium bg-black/50 text-white rounded-full backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:scale-105">React</span>
                  <span className="px-3 py-1 text-sm font-medium bg-black/50 text-white rounded-full backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:scale-105">Next.js</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div 
                className="absolute -top-4 -right-4 w-28 h-28 bg-blue-500/10 backdrop-blur-sm rounded-2xl border border-white/10 z-20 transition-all duration-500 rotate-12 group-hover:rotate-[25deg] group-hover:scale-110 group-hover:bg-blue-500/20 transform"
              />
              <div 
                className="absolute -bottom-4 -left-4 w-28 h-28 bg-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10 z-20 transition-all duration-500 -rotate-12 group-hover:-rotate-[25deg] group-hover:scale-110 group-hover:bg-purple-500/20 transform"
              />
            </AnimatedContainer>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm font-medium text-zinc-500 group-hover:text-white transition-colors">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-zinc-500 group-hover:border-white rounded-full p-1 transition-colors">
            <motion.div 
              className="w-1.5 h-1.5 bg-zinc-500 group-hover:bg-white rounded-full mx-auto"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen bg-white text-zinc-800">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[100px]" />
        </div>

        <div className="container relative px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <AnimatedText
              text="About Me"
              el="h2"
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-transparent"
            />
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              A passionate developer crafting digital experiences with code and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/80 to-purple-100/80 mix-blend-multiply" />
                <Image
                  src="/images/picture1.jpg"
                  alt="Working on code"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-xl -z-10 transform rotate-6" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-xl -z-10 transform -rotate-6" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-zinc-800">My Journey</h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  As a Full Stack Developer at Elevate360, I blend technical expertise with creative innovation to craft exceptional digital experiences. Specializing in HTML/CSS, C#, Python, and JavaScript, I lead the development of cutting-edge web solutions while leveraging modern AI technologies to optimize development workflows.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  My approach combines strategic problem-solving with collaborative teamwork, ensuring each project exceeds expectations. When I'm not coding, you'll find me at the gym, at a rave, or spending time with friends – maintaining the perfect balance between technical excellence and creative inspiration.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "50+", label: "Projects Delivered" },
                  { number: "20+", label: "Happy Clients" },
                  { number: "8+", label: "Core Technologies" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] transition-shadow"
                  >
                    <div className="text-2xl font-bold text-zinc-800">{stat.number}</div>
                    <div className="text-sm text-zinc-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Waves */}
        <AnimatedWaves />
      </section>

      {/* Skills Section */}
      <section className="relative py-20 overflow-hidden">
        <SkillBackground />
        <Spotlight 
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(255, 255, 255, 0.1) 0, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.08) 0, rgba(255, 255, 255, 0.04) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.06) 0, rgba(255, 255, 255, 0.04) 80%, transparent 100%)"
          translateY={-200}
          duration={4}
        />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <AnimatedText
              text="Skills & Expertise"
              el="h2"
              className="text-5xl md:text-7xl font-bold mb-4 text-white"
            />
            <p className="text-xl text-zinc-400 mb-8">
              Technologies and tools I specialize in
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {siteConfig.skillCategories.slice(0, 3).map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                {/* Category Card */}
                <CardSpotlight className="h-full">
                  <div className="relative z-10 flex flex-col items-center text-center mb-8">
                    <div className="p-3 rounded-xl bg-white/10 mb-4 backdrop-blur-sm">
                      {category.icon === "Layout" && <Layout className="w-6 h-6" />}
                      {category.icon === "Server" && <Server className="w-6 h-6" />}
                      {category.icon === "Code" && <Code className="w-6 h-6" />}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-sm text-zinc-400">{category.description}</p>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                        className="group/skill relative"
                      >
                        <div className="relative overflow-hidden rounded-lg bg-white/[0.08] p-4 hover:bg-white/[0.12] transition-colors duration-300">
                          <div className="relative z-10 flex items-center justify-between">
                            <p className="text-sm font-medium text-white">{skill.name}</p>
                            <div className="relative w-6 h-6">
                              <Image
                                src={`/logos/${skill.icon}.svg`}
                                alt={skill.name}
                                fill
                                className="object-contain opacity-75 group-hover/skill:opacity-100 transition-opacity"
                              />
                            </div>
                          </div>
                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>

          {/* Development Approach Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <div className="text-center mb-20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Development Approach</h3>
              <p className="text-xl text-zinc-400">My systematic approach to software development</p>
            </div>

            <div className="flex justify-center">
              <TracingBeam className="w-full max-w-4xl">
                <div className="relative flex flex-col items-center">
                  {/* Workflow Steps */}
                  <div className="space-y-28">
                    {[
                      {
                        title: "Planning & Design",
                        description: "Starting with Agile methodologies, breaking down requirements into manageable sprints",
                        icon: PenTool
                      },
                      {
                        title: "Development",
                        description: "Writing clean, maintainable code following best practices and design patterns",
                        icon: CodeSquare
                      },
                      {
                        title: "Testing",
                        description: "Implementing Test-Driven Development (TDD) to ensure code quality and reliability",
                        icon: TestTube
                      },
                      {
                        title: "Code Review",
                        description: "Conducting thorough peer reviews to maintain code quality and share knowledge",
                        icon: GitPullRequest
                      },
                      {
                        title: "Deployment",
                        description: "Using CI/CD pipelines for automated testing and seamless deployment",
                        icon: Rocket
                      },
                      {
                        title: "Documentation",
                        description: "Creating comprehensive documentation for better maintainability and onboarding",
                        icon: FileText
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index }}
                        className="relative flex items-center justify-center"
                      >
                        {/* Content */}
                        <div 
                          className={`absolute w-[300px] ${
                            index % 2 === 0 
                              ? "right-[calc(50%+40px)] text-right" 
                              : "left-[calc(50%+40px)] text-left"
                          }`}
                        >
                          <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                          <p className="text-zinc-400">{step.description}</p>
                        </div>

                        {/* Circle and Icon */}
                        <div className="flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                            <step.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TracingBeam>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container px-4">
          <AnimatedContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              A showcase of my recent work and contributions
            </p>
          </AnimatedContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.projects.map((project, index) => (
              <AnimatedContainer
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden border hover:border-primary/50 transition-colors"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      View Project
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4">
          <AnimatedContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground">
                Have a project in mind? Let's discuss how I can help bring your vision to life.
              </p>
            </div>

            <div className="flex justify-center space-x-6 my-8">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-card hover:bg-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-card hover:bg-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="p-4 rounded-full bg-card hover:bg-accent transition-colors"
                aria-label="Email Me"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <form className="space-y-6 bg-card p-8 rounded-xl border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </AnimatedContainer>
        </div>
      </section>
    </main>
  );
} 