import React from 'react'
import { Mail } from 'lucide-react';

function Nav() {
  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Promise Obi
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-yellow-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            <div className='hidden md:flex'>
                <a
                href="#contact"
                className="px-5 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
