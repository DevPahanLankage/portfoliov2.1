"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <Link 
              href="/"
              className="text-xl font-bold hover:text-primary transition-colors"
              tabIndex={0}
            >
              {siteConfig.name.split(" ")[0][0]}
              {siteConfig.name.split(" ")[1][0]}
            </Link>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              Full Stack Developer
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
              tabIndex={0}
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
              tabIndex={0}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              tabIndex={0}
              aria-label="Email Me"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 