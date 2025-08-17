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
        title: "Tradenest Marketplace",
        description: "A comprehensive e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
        tech: ["Next.js", "Node.js", "MongoDB", "Stripe API"],
        type: "Full-Stack",
        link: "#"
      },
      {
        title: "Task Management App",
        description: "Mobile-first task management application with offline synchronization, push notifications, and collaborative features.",
        tech: ["React Native", "Expo", "Firebase", "Redux"],
        type: "Mobile",
        link: "#"
      },
      {
        title: "Portfolio Dashboard",
        description: "Modern responsive dashboard with data visualization, real-time updates, and dark/light theme support.",
        tech: ["React", "TypeScript", "Chart.js", "Tailwind"],
        type: "Frontend",
        link: "#"
      },
      {
        title: "API Gateway Service",
        description: "Scalable microservices architecture with authentication, rate limiting, and comprehensive logging system.",
        tech: ["Node.js", "Express", "Docker", "Kubernetes"],
        type: "Backend",
        link: "#"
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
