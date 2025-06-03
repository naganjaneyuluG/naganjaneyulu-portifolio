
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 px-4">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl font-bold shadow-2xl">
            ADE
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
          AWS DevOps Engineer
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl">
          CI/CD Expert | Cloud Infrastructure Specialist | Automation Enthusiast
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Passionate about building scalable cloud infrastructure, optimizing CI/CD pipelines, 
          and implementing DevOps best practices to drive business success.
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com" 
            className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 cursor-pointer animate-bounce"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown size={32} className="text-gray-400 hover:text-white transition-colors" />
      </div>
    </section>
  );
};

export default Hero;
