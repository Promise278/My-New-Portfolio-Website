import React from "react";
import Nav from "./components/nav";
import HeroSection from "./components/herosection";
import Footer from "./components/footer";
import ContactForm from "./components/contactform";
import SkillSection from "./components/skillsection";
import ProjectSection from "./components/projectsection";
import AboutPage from "./components/aboutme";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-400/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[120px] animate-move-bg" />
        <div className="absolute top-[40%] left-[60%] w-[20%] h-[20%] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Nav />
        <HeroSection />
        <AboutPage />
        <SkillSection />
        <ProjectSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
