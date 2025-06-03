
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "AWS Services",
      skills: ["EC2", "S3", "Lambda", "CloudFormation", "VPC", "IAM", "RDS", "EKS", "ECS", "CloudWatch"]
    },
    {
      title: "CI/CD Tools",
      skills: ["Jenkins", "GitHub Actions", "CodePipeline", "GitLab CI", "CircleCI", "CodeBuild"]
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "CloudFormation", "Ansible", "Pulumi", "CDK"]
    },
    {
      title: "Containers & Orchestration",
      skills: ["Docker", "Kubernetes", "EKS", "ECS", "Helm", "Istio"]
    },
    {
      title: "Monitoring & Logging",
      skills: ["CloudWatch", "Prometheus", "Grafana", "ELK Stack", "DataDog", "New Relic"]
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Bash", "PowerShell", "Go", "JavaScript", "YAML"]
    },
    {
      title: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Confluence"]
    },
    {
      title: "Operating Systems",
      skills: ["Linux", "Ubuntu", "CentOS", "Amazon Linux", "Windows Server"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
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
