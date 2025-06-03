
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.project-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Multi-Tier AWS Infrastructure",
      description: "Designed and implemented a highly available, scalable infrastructure for an e-commerce platform using AWS services including EKS, RDS, ElastiCache, and CloudFront.",
      techStack: ["AWS", "Terraform", "Kubernetes", "Docker", "Jenkins"],
      achievements: [
        "99.9% uptime achieved",
        "40% cost reduction",
        "Auto-scaling implemented"
      ],
      githubUrl: "https://github.com",
      demoUrl: null,
      icon: "🏗️"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built comprehensive CI/CD pipelines for microservices architecture with automated testing, security scanning, and deployment to multiple environments.",
      techStack: ["Jenkins", "GitHub Actions", "Docker", "SonarQube", "Terraform"],
      achievements: [
        "80% faster deployments",
        "Zero failed deployments",
        "Automated rollback capability"
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.example.com",
      icon: "🔄"
    },
    {
      title: "Monitoring & Observability Stack",
      description: "Implemented comprehensive monitoring solution using Prometheus, Grafana, and ELK stack for real-time application and infrastructure monitoring.",
      techStack: ["Prometheus", "Grafana", "ELK Stack", "Kubernetes", "CloudWatch"],
      achievements: [
        "99% issue detection",
        "50% faster incident response",
        "Custom alerting rules"
      ],
      githubUrl: "https://github.com",
      demoUrl: "https://monitoring.example.com",
      icon: "📊"
    },
    {
      title: "Infrastructure as Code Templates",
      description: "Created reusable Terraform modules and CloudFormation templates for standardized AWS infrastructure deployment across multiple projects.",
      techStack: ["Terraform", "CloudFormation", "AWS", "Python", "Git"],
      achievements: [
        "90% deployment time reduction",
        "Standardized infrastructure",
        "Cost optimization built-in"
      ],
      githubUrl: "https://github.com",
      demoUrl: null,
      icon: "📋"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-index={index}
              className={`project-item glass-effect p-6 sm:p-8 rounded-xl card-hover group transition-all duration-700 ${
                visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {project.icon}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-blue-400 font-semibold mb-3 flex items-center">
                  <span className="mr-2">🛠️</span>
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="skill-badge bg-gradient-to-r from-blue-600/80 to-blue-700/80 hover:from-blue-500 hover:to-blue-600 text-white border-blue-400/30"
                      style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.05)}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-blue-400 font-semibold mb-3 flex items-center">
                  <span className="mr-2">🎯</span>
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <li 
                      key={achIndex} 
                      className="flex items-center text-gray-300 group-hover:text-white transition-colors"
                      style={{ animationDelay: `${(index * 0.2) + (achIndex * 0.1)}s` }}
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group/btn hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 transform hover:scale-105 glass-effect border-blue-400/50 text-white hover:text-white"
                >
                  <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
                {project.demoUrl && (
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
