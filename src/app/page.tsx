"use client";

import React from "react";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { siteConfig } from "@/config/site";
import dynamic from "next/dynamic";
import Image from "next/image";

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Blue accent light effect - adjusted to match screenshot */}
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-5 h-8 border-2 border-white/10 rounded-full p-1">
            <div className="w-1 h-2 bg-white/20 rounded-full animate-bounce mx-auto" />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container px-4">
          <AnimatedContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need for productive team work
            </h2>
          </AnimatedContainer>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Team Planner",
              "Project Management",
              "Virtual Office",
              "Chat",
              "Documents",
              "Inbox"
            ].map((feature, index) => (
              <AnimatedContainer
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-4 bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <h3 className="text-sm font-medium text-neutral-200">{feature}</h3>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <AnimatedContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Everything you need for your next project</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive development solutions for modern web applications
            </p>
          </AnimatedContainer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Code className="w-10 h-10" />,
                title: "Frontend Development",
                description: "Creating responsive and interactive user interfaces with React and Next.js",
              },
              {
                icon: <Server className="w-10 h-10" />,
                title: "Backend Development",
                description: "Building robust and scalable server-side solutions",
              },
              {
                icon: <Layout className="w-10 h-10" />,
                title: "UI/UX Design",
                description: "Designing intuitive and beautiful user experiences",
              },
            ].map((feature, index) => (
              <AnimatedContainer
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 bg-card rounded-xl border hover:border-primary/50 transition-colors"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedContainer
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Unmatched expertise in modern web technologies</h2>
              <p className="text-xl text-muted-foreground">
                With years of experience in full-stack development, I bring a comprehensive skill set to every project.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {siteConfig.skills.slice(0, 6).map((skill, index) => (
                  <AnimatedContainer
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-card border"
                  >
                    <h4 className="font-medium">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.level}</p>
                  </AnimatedContainer>
                ))}
              </div>
            </AnimatedContainer>
            <AnimatedContainer
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="/coding.jpg"
                alt="Coding workspace"
                fill
                className="object-cover"
              />
            </AnimatedContainer>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/50">
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