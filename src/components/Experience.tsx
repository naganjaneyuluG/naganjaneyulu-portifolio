
import { useEffect, useState } from "react";

const Experience = () => {
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

    const elements = document.querySelectorAll('.experience-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      icon: "🚀",
      responsibilities: [
        "Led migration of legacy applications to AWS cloud infrastructure, reducing operational costs by 40%",
        "Implemented CI/CD pipelines using Jenkins and GitHub Actions for 15+ microservices",
        "Designed and deployed Kubernetes clusters on EKS with auto-scaling capabilities",
        "Established monitoring and alerting systems using CloudWatch and Prometheus"
      ]
    },
    {
      title: "DevOps Engineer",
      company: "CloudFirst Systems",
      period: "2020 - 2022",
      icon: "⚡",
      responsibilities: [
        "Automated infrastructure provisioning using Terraform and CloudFormation",
        "Optimized CI/CD processes reducing deployment time from 2 hours to 15 minutes",
        "Implemented security best practices and compliance standards (SOC2, HIPAA)",
        "Managed Docker containerization for 20+ applications"
      ]
    },
    {
      title: "Cloud Infrastructure Specialist",
      company: "StartupHub",
      period: "2019 - 2020",
      icon: "🔧",
      responsibilities: [
        "Built and maintained AWS infrastructure for high-traffic web applications",
        "Developed Python scripts for automated backup and disaster recovery",
        "Configured monitoring dashboards using Grafana and ELK stack",
        "Provided 24/7 on-call support for production systems"
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-blue-900/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              data-index={index}
              className={`experience-item glass-effect p-6 sm:p-8 rounded-xl card-hover transition-all duration-700 ${
                visibleItems.includes(index) ? 'animate-slide-in-left' : 'opacity-0 translate-x-8'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center mb-4 lg:mb-0">
                  <span className="text-3xl mr-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {exp.icon}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg sm:text-xl text-blue-400 font-semibold">
                      {exp.company}
                    </h4>
                  </div>
                </div>
                <span className="text-gray-400 font-medium bg-gray-700/50 px-4 py-2 rounded-full text-sm sm:text-base">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li 
                    key={respIndex} 
                    className="flex items-start text-gray-300 group hover:text-white transition-colors duration-300"
                    style={{ animationDelay: `${(index * 0.2) + (respIndex * 0.1)}s` }}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 mt-2 flex-shrink-0 group-hover:bg-blue-400 transition-colors" />
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
