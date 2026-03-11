"use client";
import React from "react";
import { Github, Linkedin, X } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-foreground/5 relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black tracking-tighter">
            <span className="text-foreground">PROMISE</span>
            <span className="text-yellow-400">.</span>
          </div>

          <div className="flex items-center space-x-8">
            <a
              href="https://github.com/Promise278"
              className="text-foreground/60 hover:text-yellow-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/promise-obi-9a6878328/"
              className="text-foreground/60 hover:text-yellow-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/promisenativeX"
              className="text-foreground/60 hover:text-yellow-400 transition-colors"
              aria-label="Twitter"
            >
              <X size={20} />
            </a>
          </div>

          <div className="text-foreground/30 text-sm font-medium flex items-center gap-2">
            © {currentYear} Promise Obi.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
