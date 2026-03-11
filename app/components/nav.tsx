"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 glass-nav" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform cursor-pointer">
            <Link href="#home">
              <span className="text-foreground">PROMISE</span>
              <span className="text-yellow-400">.</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-14">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-black uppercase tracking-widest text-foreground/50 hover:text-yellow-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4 border-r border-foreground/10 pr-6 mr-2">
              <ThemeToggle />
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
            <a
              href="#contact"
              className="px-6 py-2.5 bg-yellow-400 text-black text-sm font-bold rounded-full hover:bg-foreground hover:text-background transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-4xl font-bold text-foreground hover:text-yellow-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center space-x-8 pt-8 border-t border-foreground/10">
            <ThemeToggle />
            <a
              href="#"
              className="text-foreground/60 hover:text-yellow-400 transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-yellow-400 transition-colors"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
