"use client"
import React, { useState } from 'react'
import { Download, Code, Smartphone, Award, Coffee, Clock, Heart } from 'lucide-react';

function AboutPage() {
    const [isVisible, setIsVisible] = useState({});
  return (
    <div>
       <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div
            id="about-header"
            data-animate
            className='text-center mb-16 transition-all duration-1000'
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400">
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div
              id="about-image"
              data-animate
              className='relative transition-all duration-1000'
            >
              <div className="relative group">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 group-hover:border-yellow-400/50 transition-all duration-500">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-yellow-400/20 to-amber-500/20 flex items-center justify-center">
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-4xl font-bold text-black">PO</span>
                        </div>
                        <p className="text-sm">Your Professional Photo Here</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center animate-pulse">
                  <Code className="w-6 h-6 text-black" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-pulse animation-delay-1000">
                  <Smartphone className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div
              id="about-content"
              data-animate
              className='space-y-8 transition-all duration-1000'
            >
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Passionate Developer with a Vision
                </h3>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Hello! I'm Promise Obi, a dedicated full-stack developer with over{' '}
                    <span className="text-yellow-400 font-semibold">5 years of experience</span> crafting 
                    digital solutions that make a difference. My journey in tech began with curiosity and has 
                    evolved into a passion for creating seamless, user-centric applications.
                  </p>
                  <p>
                    I specialize in building scalable web applications using modern technologies like{' '}
                    <span className="text-yellow-400 font-semibold">React, Node.js, and React Native</span>. 
                    My approach combines technical expertise with creative problem-solving to deliver 
                    exceptional digital experiences.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or mentoring aspiring developers. I believe in the power of technology to 
                    transform lives and businesses.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { number: '50+', label: 'Projects Completed', icon: Award },
                  { number: '5+', label: 'Years Experience', icon: Clock },
                  { number: '100%', label: 'Client Satisfaction', icon: Heart }
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-yellow-400/30 transition-all duration-300 group"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-full hover:shadow-lg hover:shadow-yellow-400/25 transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  <Coffee className="w-5 h-5" />
                  Let's Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
