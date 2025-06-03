
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-900 via-blue-950/30 to-gray-900 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className={`text-center relative z-10 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-bold shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full group-hover:from-white/40 transition-all duration-300" />
            <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300" />
            <span className="relative z-10 text-white drop-shadow-lg">ADE</span>
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              AWS DevOps
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
              Engineer
            </span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            CI/CD Expert • Cloud Infrastructure Specialist • Automation Enthusiast
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable cloud infrastructure, optimizing CI/CD pipelines, 
            and implementing DevOps best practices to drive business success through automation and innovation.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25 px-8 py-4 text-lg"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-400/50 text-blue-400 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 transform hover:scale-105 glass-effect hover:text-white px-8 py-4 text-lg"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-400/50 text-gray-400 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 glass-effect hover:text-white px-8 py-4 text-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>
        
        <div className={`flex gap-8 justify-center transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <a 
            href="https://github.com" 
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform p-3 rounded-full hover:bg-white/10 glass-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://linkedin.com" 
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform p-3 rounded-full hover:bg-white/10 glass-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 cursor-pointer animate-bounce-gentle z-10 group"
        onClick={() => scrollToSection('about')}
      >
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
          <ChevronDown size={32} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
