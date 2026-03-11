"use client";
import React from "react";
import { Smartphone, Layout, Server, Cpu, Blocks } from "lucide-react";

function SkillSection() {
  const categories = [
    {
      title: "Frontend Architecture",
      icon: Layout,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
      ],
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      title: "Backend Ecosystem",
      icon: Server,
      skills: [
        "Node.js",
        "Express",
        "MySQL",
        "PostgreSQL",
        "RESTful APIs",
        "JWT",
      ],
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      title: "Web3 & Blockchain",
      icon: Blocks,
      skills: [
        "Solidity",
        "Ethereum",
        "Solana",
        "Ethers.js",
        "Web3.js",
        "Smart Contracts",
      ],
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Expo", "NativeWind", "Mobile UI/UX"],
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
    {
      title: "Tools & DevOps",
      icon: Cpu,
      skills: ["Git", "Docker", "Vercel", "Postman", "Render", "Github"],
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
  ];

  return (
    <section id="skills" className="py-32 relative bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-black tracking-[0.2em] text-yellow-400 uppercase mb-4">
            Expertise
          </h2>
          <h3 className="text-5xl font-black text-foreground">
            Technical <span className="text-gradient">Stacks.</span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {categories.map((category, i) => (
            <div
              key={i}
              className="glass p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 group w-full md:w-[calc(33.333%-1.5rem)] min-w-[300px]"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${category.bg} flex items-center justify-center mb-8 border border-foreground/5 group-hover:scale-110 transition-transform`}
              >
                <category.icon className={`w-7 h-7 ${category.color}`} />
              </div>

              <h4 className="text-xl font-bold text-foreground mb-6">
                {category.title}
              </h4>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {category.skills.map((skill, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/40"></div>
                    <span className="text-foreground/40 text-sm font-medium hover:text-foreground transition-colors cursor-default whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
