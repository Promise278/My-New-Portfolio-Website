"use client";
import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

function ProjectSection() {
  const projects = [
    {
      title: "SafeSpace",
      description:
        "A safe community platform for youth affected by gender-based violence. Share stories anonymously, receive support from trained counselors, and connect with others who understand.",
      tech: ["Next.js", "Tailwind CSS", "Nodejs", "PostgreSQL"],
      type: "Mental Health / Social",
      link: "https://safespace-technology.vercel.app/",
      github: "https://github.com/Promise278/Safespace_technology",
      image: "/Screenshot From 2026-03-10 16-25-14.png",
    },
    {
      title: "CareBridge",
      description:
        "Healthcare delivered digitally. Connect with qualified healthcare professionals from the comfort of your home. Secure video consultations, instant prescriptions, and comprehensive medical records.",
      tech: ["Next", "Firebase", "Stream.io", "Socket.io"],
      type: "Web3 / Health / Telemedicine",
      link: "https://carebridge-inky.vercel.app/",
      github: "https://github.com/Promise278/carebridge",
      image: "/Screenshot From 2026-03-10 16-25-39.png",
    },
    {
      title: "Huefi",
      description:
        "Predict the color. Win the stack A fast-paced color prediction game on Starknet. Pick your color, place your bet, and watch the countdown. Will fortune favor your choice?",
      tech: ["Next.js", "Starknet", "Tailwind CSS", "Cairo"],
      type: "Web3 / Game",
      link: "https://hue-fi-fqo8.vercel.app/",
      github: "https://github.com/Promise278/HueFi",
      image: "/Screenshot From 2026-03-10 16-25-49.png",
    },
    {
      title: "TerraTrust",
      description:
        "Tamper-Resistant Land Registry for Nigeria. Prevent title forgery, duplicate sales, and opaque land transfer processes — powered by NFT-backed records, community governance, and state co-signing.",
      tech: ["Nextjs", "Nodejs", "Typescript", "PostgreSQL"],
      type: "Land / Real Estate",
      link: "https://terra-trust-silk.vercel.app/",
      github: "https://github.com/Promise278",
      image: "/Screenshot From 2026-03-10 17-35-33.png",
    },
    {
      title: "Healix",
      description:
        "Healthcare at Your Fingertips. Connect with experienced doctors and healthcare professionals instantly. Get consultations, prescriptions, and personalized care from the comfort of your home.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Nodejs"],
      type: "Enterprise / Healthcare",
      link: "https://healix-gnfg.vercel.app/",
      github: "https://github.com/Promise278/HEALIX",
      image: "/Screenshot From 2026-03-10 16-26-23.png",
    },
    {
      title: "BibleApp",
      description:
        "An intelligent scripture engagement platform. Features an AI-powered study assistant that helps users understand complex passages, provides historical context, and personalizes the reading experience.",
      tech: ["ReactNative", "Expo", "Groq"],
      type: "AI / Education / Faith",
      link: "#",
      github: "https://github.com/Promise278/HolyBible",
      image: "/WhatsApp Image 2026-03-11 at 4.09.54 PM.jpeg",
    },
    // {
    //   title: "PrepGenX",
    //   description:
    //     "Your smart study companion. Master any subject with AI-guided lessons and interactive chat. Designed specifically to help students excel in exams through personalized, AI-driven study paths.",
    //   tech: ["ReactNative", "Expo", "Groq", "Nodejs"],
    //   type: "AI / EdTech",
    //   link: "#",
    //   github: "https://github.com/Promise278",
    //   image: null,
    // },
  ];

  const projectsCount = projects.length;

  return (
    <section id="projects" className="py-48 relative bg-foreground/[0.01]">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-black tracking-[0.2em] text-yellow-400 uppercase mb-4">
              Selected Work
            </h2>
            <h3 className="text-5xl md:text-6xl font-black text-foreground">
              Featured <span className="text-gradient">Projects.</span>
            </h3>
          </div>
          <a
            href="https://github.com/Promise278"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-foreground/60 hover:text-yellow-400 transition-colors font-bold"
          >
            View GitHub Archive
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, i) => {
            // Logic to center-align the last row if it's incomplete (7 or 8 projects)
            const isLastOfSeven = projectsCount === 7 && i === 6;
            const isLastRowOfEight = projectsCount === 8 && i >= 6;

            return (
              <div
                key={i}
                className={`group relative flex flex-col glass rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-2 ${
                  isLastOfSeven
                    ? "lg:col-start-2 lg:scale-100"
                    : isLastRowOfEight
                      ? "lg:translate-x-[50%] lg:scale-100"
                      : i >= 3
                        ? "lg:scale-95"
                        : ""
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-foreground/5">
                      <span className="text-foreground/20 font-black text-4xl uppercase tracking-widest text-center px-4">
                        {project.title}
                      </span>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-10 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-black uppercase tracking-widest border border-yellow-400/20">
                      {project.type}
                    </span>
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/40 hover:text-foreground transition-colors"
                        >
                          <Github className="w-6 h-6" />
                        </a>
                      )}
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/40 hover:text-yellow-400 transition-colors"
                        >
                          <ArrowUpRight className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-2xl font-black text-foreground mb-4 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-foreground/50 text-base leading-relaxed mb-10 flex-grow font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="text-[10px] font-black tracking-widest text-foreground/40 bg-foreground/5 px-2.5 py-1 rounded-md border border-foreground/5 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
