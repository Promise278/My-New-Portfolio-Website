import React from 'react'
import { Github, Linkedin, Download } from 'lucide-react';

function Footer() {
  return (
    <div>
        <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2">
                Promise Obi
              </h3>
              <p className="text-gray-400">Full-Stack Developer & Mobile App Developer</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Promise278"
                target="_blank"
                // rel="noopener noreferrer"
                className="p-3 rounded-full cursor-pointer bg-white/5 hover:bg-yellow-400/20 hover:text-yellow-400 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 cursor-pointer group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/promise-obi-9a6878328/"
                target="_blank"
                // rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-yellow-400/20 hover:text-yellow-400 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 cursor-pointer group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-yellow-400/25 transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
          
          <div className="text-center text-gray-400 mt-8 pt-8 border-t border-white/5">
            <p>&copy; 2025 Promise Obi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
