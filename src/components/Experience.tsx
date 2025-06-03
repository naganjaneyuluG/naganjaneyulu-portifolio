
const Experience = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
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
      responsibilities: [
        "Built and maintained AWS infrastructure for high-traffic web applications",
        "Developed Python scripts for automated backup and disaster recovery",
        "Configured monitoring dashboards using Grafana and ELK stack",
        "Provided 24/7 on-call support for production systems"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl hover:bg-gray-750 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <h4 className="text-xl text-blue-400">{exp.company}</h4>
                </div>
                <span className="text-gray-400 font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {responsibility}
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
