
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
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
      demoUrl: null
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
      demoUrl: "https://demo.example.com"
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
      demoUrl: "https://monitoring.example.com"
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
      demoUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-blue-400 font-semibold mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-blue-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-blue-400 font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-1">
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="hover:bg-blue-600 transition-colors">
                  <Github className="mr-2 h-4 w-4" />
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
                {project.demoUrl && (
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
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
