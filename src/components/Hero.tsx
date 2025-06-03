
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
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
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rounded-full animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className={`text-center relative z-10 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-bold shadow-2xl animate-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
            <span className="relative z-10">ADE</span>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-white to-blue-300 bg-clip-text text-transparent animate-pulse-slow">
          AWS DevOps Engineer
        </h1>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            CI/CD Expert | Cloud Infrastructure Specialist | Automation Enthusiast
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable cloud infrastructure, optimizing CI/CD pipelines, 
            and implementing DevOps best practices to drive business success.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <Button 
            variant="outline" 
            size="lg" 
            className="hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 transform hover:scale-105 glass-effect border-blue-400/50 text-white hover:text-white"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
        </div>
        
        <div className={`flex gap-6 justify-center transition-all duration-1000 delay-900 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <a 
            href="https://github.com" 
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 cursor-pointer animate-bounce-gentle z-10"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-white transition-colors duration-300" />
      </div>
    </section>
  );
};

export default Hero;
