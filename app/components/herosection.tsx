import React from 'react'
import { Mail, ExternalLink, ChevronDown } from 'lucide-react';


function HeroSection() {
  return (
    <div>
        <section id="about" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="text-yellow-400 text-lg font-medium tracking-wider uppercase">
                Hello, I'm
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Promise Obi
            </h1>
            <div className="text-2xl md:text-4xl font-bold mb-8 text-gray-300">
              Full-Stack Developer
              <span className="text-yellow-400"> & </span>
              Mobile App Developer
            </div>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge technologies. 
              Specialized in building scalable web applications and intuitive mobile solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-yellow-400" />
        </div>
      </section>
    </div>
  )
}

export default HeroSection
