
import { Badge } from "@/components/ui/badge";

const Achievements = () => {
  const certifications = [
    "AWS Certified DevOps Engineer - Professional",
    "AWS Certified Solutions Architect - Associate",
    "AWS Certified SysOps Administrator - Associate",
    "Certified Kubernetes Administrator (CKA)",
    "HashiCorp Certified: Terraform Associate",
    "AWS Certified Cloud Practitioner"
  ];

  const achievements = [
    {
      title: "Cost Optimization Champion",
      description: "Reduced cloud infrastructure costs by 45% through right-sizing and reserved instances"
    },
    {
      title: "Zero Downtime Deployments",
      description: "Implemented blue-green deployment strategy achieving 99.9% uptime"
    },
    {
      title: "Security Excellence",
      description: "Led security audit resulting in SOC2 Type II compliance certification"
    },
    {
      title: "Performance Optimization",
      description: "Improved application response time by 60% through infrastructure optimization"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Achievements & Certifications</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <Badge variant="outline" className="border-blue-500 text-blue-400 mb-2">
                    Certified
                  </Badge>
                  <p className="text-white font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Key Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
