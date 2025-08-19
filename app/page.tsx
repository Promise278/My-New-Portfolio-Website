import React from 'react';
import Nav from './components/nav';
import HeroSection from './components/herosection';
import Footer from './components/footer';
import ContactForm from './components/contactform';
import SkillSection from './components/skillsection';
import ProjectSection from './components/projectsection';
import AboutPage from './components/aboutme';



const Portfolio = () => {
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>
      <Nav />
      <HeroSection />
      <AboutPage />
      <SkillSection />
      <ProjectSection />
      <ContactForm />
      <Footer />
    

      {/* <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style> */}
    </div>
  );
};

export default Portfolio;