
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const Skills = () => {
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

    const elements = document.querySelectorAll('.skill-category');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "AWS Services",
      skills: ["EC2", "S3", "Lambda", "CloudFormation", "VPC", "IAM", "RDS", "EKS", "ECS", "CloudWatch"],
      icon: "☁️"
    },
    {
      title: "CI/CD Tools",
      skills: ["Jenkins", "GitHub Actions", "CodePipeline", "GitLab CI", "CircleCI", "CodeBuild"],
      icon: "🔄"
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "CloudFormation", "Ansible", "Pulumi", "CDK"],
      icon: "🏗️"
    },
    {
      title: "Containers & Orchestration",
      skills: ["Docker", "Kubernetes", "EKS", "ECS", "Helm", "Istio"],
      icon: "📦"
    },
    {
      title: "Monitoring & Logging",
      skills: ["CloudWatch", "Prometheus", "Grafana", "ELK Stack", "DataDog", "New Relic"],
      icon: "📊"
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Bash", "PowerShell", "Go", "JavaScript", "YAML"],
      icon: "💻"
    },
    {
      title: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Confluence"],
      icon: "🔗"
    },
    {
      title: "Operating Systems",
      skills: ["Linux", "Ubuntu", "CentOS", "Amazon Linux", "Windows Server"],
      icon: "🖥️"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              data-index={index}
              className={`skill-category glass-effect p-6 rounded-xl card-hover transition-all duration-700 ${
                visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="skill-badge bg-gradient-to-r from-blue-600/80 to-blue-700/80 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 text-white border-blue-400/30"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
