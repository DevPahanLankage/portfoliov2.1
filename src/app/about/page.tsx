import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Bio Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <div className="prose dark:prose-invert">
              <p className="text-lg text-muted-foreground">
                Hi, I'm {siteConfig.name}, a passionate Full Stack Developer with expertise in building modern web applications. I specialize in creating responsive, user-friendly interfaces and robust backend systems.
              </p>
              <p className="text-lg text-muted-foreground">
                With years of experience in web development, I've worked on various projects ranging from small business websites to large-scale enterprise applications. I'm constantly learning and staying up-to-date with the latest technologies and best practices.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Skills & Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-card border"
                >
                  <h3 className="font-medium text-foreground">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 