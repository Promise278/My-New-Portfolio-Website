"use client"
import React, { useEffect } from 'react'
import { ExternalLink } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";


function ProjectSection() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const projects = [
      {
        title: "Emart",
        description: "A comprehensive e-commerce platform where users buy products.",
        tech: ["React", "Javascript", "Tailwindcss"],
        type: "Frontend",
        link: "https://github.com/Promise278/E-mart"
      },
      {
        title: "Movie Website",
        description: "A website for movies and featured movies for users to see and watch",
        tech: ["Nextjs", "Typescript", "Tailwind"],
        type: "Frontend",
        link: "https://github.com/Promise278/Movie-Next"
      },
      {
        title: "Jamb-App",
        description: "build a jamb app that helps user to study well for exams",
        tech: ["ReactNative", "Javascript", "NativeWind", "Expo-Cli"],
        type: "Mobile",
        link: "https://github.com/Promise278/Jamb-app"
      },
      {
        title: "TODO Server",
        description: "these is a todo that has endpoints for add-todo, seealltodo, register, login, delete, pastdate, seealluser.",
        tech: ["Node.js", "Express", "Bycrpt"],
        type: "Backend",
        link: "https://github.com/Promise278/Todo-Server"
      }
    ];
    
  return (
    <div>
       <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
            <div
              id="projects"
              data-aos="fade-up"
              className='text-center mb-16 transition-all duration-1000'
            >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400">
              A showcase of my recent work and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                data-aos="fade-up"
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105'
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-yellow-400/20 hover:text-yellow-400 transition-all duration-300 group-hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-sm hover:bg-yellow-400/20 hover:text-yellow-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectSection
