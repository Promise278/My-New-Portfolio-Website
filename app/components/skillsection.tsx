"use client"
import React, { useEffect } from 'react'
import { Code, Database, Smartphone } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";


function SkillSection() {
    const skills = {
        frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
        backend: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Docker', 'Kubernetes'],
        mobile: ['React Native', 'Expo CLI']
    };
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
  return (
    <div>
        <section className="py-20 relative">
        <div id='skills' className="max-w-7xl mx-auto px-6">
            <div
              id="skills"
              data-aos="fade-up"
              className='text-center mb-16 transition-all duration-1000'
            >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400">
              Technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Frontend Development', icon: Code, skills: skills.frontend, color: 'from-blue-400 to-cyan-400' },
              { title: 'Backend Development', icon: Database, skills: skills.backend, color: 'from-green-400 to-emerald-400' },
              { title: 'Mobile Development', icon: Smartphone, skills: skills.mobile, color: 'from-purple-400 to-pink-400' }
            ].map((category, index) => (
              <div
                key={category.title}
                data-aos="fade-up"
                className='group p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105'
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-6 group-hover:shadow-lg group-hover:shadow-yellow-400/20 transition-all duration-300`}>
                  <category.icon className="w-full h-full text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/5 rounded-full text-gray-300 hover:bg-yellow-400/20 hover:text-yellow-400 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillSection
