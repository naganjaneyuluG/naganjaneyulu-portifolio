
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">AWS DevOps Engineer</h3>
            <p className="text-gray-400 mb-4">
              Building scalable cloud infrastructure and optimizing DevOps processes 
              to drive business success.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Specializations</h4>
            <ul className="space-y-2 text-gray-400">
              <li>AWS Cloud Architecture</li>
              <li>CI/CD Pipeline Design</li>
              <li>Infrastructure as Code</li>
              <li>Container Orchestration</li>
              <li>Monitoring & Observability</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AWS DevOps Engineer Portfolio. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
