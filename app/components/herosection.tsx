"use client";
import React from "react";
import { Mail, ChevronDown, ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-400/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-500/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-foreground/[0.03] border border-foreground/10 mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-yellow-400 mr-2 animate-ping"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-foreground/40">
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter animate-fade-in-up">
            <span className="block text-foreground">Digital</span>
            <span className="block text-gradient">Experiences.</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-100">
            I'm <span className="text-foreground font-bold">Promise Obi</span>,
            a Full-Stack & Mobile Developer dedicated to building
            high-performance applications with precision and purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-200">
            <a
              href="#projects"
              className="group px-10 py-5 bg-foreground text-background font-black rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center gap-3"
            >
              Explore Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group px-10 py-5 glass text-foreground font-bold rounded-full hover:bg-foreground/5 transition-all duration-300 flex items-center gap-3"
            >
              Get In Touch
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform text-yellow-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <ChevronDown className="w-8 h-8 text-foreground" />
      </div>
    </section>
  );
}

export default HeroSection;
