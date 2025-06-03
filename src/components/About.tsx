
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate AWS DevOps Engineer with over 5 years of experience in cloud infrastructure, 
              automation, and continuous integration/deployment. I specialize in building scalable, 
              reliable systems that enable teams to deliver software faster and more efficiently.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across AWS cloud services, Infrastructure as Code, containerization, 
              and monitoring solutions. I'm driven by the challenge of optimizing systems for performance, 
              security, and cost-effectiveness while maintaining high availability.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Experience</h4>
                <p className="text-2xl font-bold text-white">5+ Years</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Projects</h4>
                <p className="text-2xl font-bold text-white">50+</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-white">What I Do</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  Cloud Infrastructure Design & Implementation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  CI/CD Pipeline Development & Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  Infrastructure as Code (Terraform, CloudFormation)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  Container Orchestration (Kubernetes, EKS)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                  Monitoring & Performance Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
