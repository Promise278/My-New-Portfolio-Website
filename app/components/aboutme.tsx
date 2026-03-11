"use client";
import React from "react";
import {
  Download,
  Code,
  Smartphone,
  Award,
  Clock,
  Coffee,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

function AboutPage() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Animated Glow Backdrops */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative glass rounded-3xl p-3 overflow-hidden">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/promise.jpeg"
                    alt="Promise Obi - Full Stack Developer"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-foreground font-bold text-sm">
                        Open for Collaboration
                      </p>
                      <p className="text-foreground/40 text-xs">
                        Let's build something great
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Icons */}
              <div className="absolute -top-6 -right-6 w-16 h-16 glass rounded-2xl flex items-center justify-center animate-float shadow-2xl">
                <Code className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="absolute top-1/2 -left-8 w-14 h-14 glass rounded-xl flex items-center justify-center animate-float [animation-delay:1.5s] shadow-2xl">
                <Smartphone className="w-7 h-7 text-accent" />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="space-y-10 order-1 lg:order-2">
            <div>
              <h2 className="text-sm font-black tracking-[0.2em] text-yellow-400 uppercase mb-4">
                The Developer
              </h2>
              <h3 className="text-5xl md:text-6xl font-black text-foreground leading-tight mb-8">
                Turning vision into{" "}
                <span className="text-gradient">digital reality.</span>
              </h3>

              <div className="space-y-6 text-lg text-foreground/60 leading-relaxed">
                <p>
                  I'm{" "}
                  <span className="text-foreground font-semibold">
                    Promise Obi
                  </span>
                  , a Nigerian-based software engineer specializing in building
                  robust, user-centric applications. With a foundation in modern
                  full-stack architecture, I bridge the gap between complex
                  backend logic and intuitive frontend experiences.
                </p>
                <p>
                  My philosophy is simple:{" "}
                  <span className="italic">
                    code should be as elegant as the problems it solves.
                  </span>
                  Whether it's scaling a web platform or crafting a seamless
                  mobile experience with React Native, I focus on performance,
                  accessibility, and clean, maintainable code.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Successful Projects", value: "15+", icon: Award },
                { label: "Year of Experience", value: "1+", icon: Clock },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass p-6 rounded-2xl hover:border-yellow-400/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center mb-4 group-hover:bg-yellow-400/10 transition-colors">
                    <stat.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-black text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/50 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA's */}
            <div className="flex flex-wrap gap-6">
              <a
                href="/cv.pdf"
                download
                className="px-8 py-4 bg-yellow-400 text-black font-black rounded-full hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass text-foreground font-bold rounded-full hover:bg-foreground/5 transition-all duration-300 flex items-center gap-2"
              >
                <Coffee size={20} className="text-yellow-400" />
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
