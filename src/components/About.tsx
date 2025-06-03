
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a passionate AWS DevOps Engineer with over 5 years of experience in cloud infrastructure, 
              automation, and continuous integration/deployment. I specialize in building scalable, 
              reliable systems that enable teams to deliver software faster and more efficiently.
            </p>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              My expertise spans across AWS cloud services, Infrastructure as Code, containerization, 
              and monitoring solutions. I'm driven by the challenge of optimizing systems for performance, 
              security, and cost-effectiveness while maintaining high availability.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-effect p-4 rounded-lg card-hover group">
                <h4 className="font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">Experience</h4>
                <p className="text-2xl font-bold text-white">5+ Years</p>
              </div>
              <div className="glass-effect p-4 rounded-lg card-hover group">
                <h4 className="font-semibold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">Projects</h4>
                <p className="text-2xl font-bold text-white">50+</p>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-6 sm:p-8 rounded-2xl shadow-2xl border border-blue-400/20 card-hover backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-center">
                <span className="mr-3">🚀</span>
                What I Do
              </h3>
              <ul className="space-y-4 text-white">
                {[
                  "Cloud Infrastructure Design & Implementation",
                  "CI/CD Pipeline Development & Optimization", 
                  "Infrastructure as Code (Terraform, CloudFormation)",
                  "Container Orchestration (Kubernetes, EKS)",
                  "Monitoring & Performance Optimization"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start group transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${0.8 + (index * 0.1)}s` }}
                  >
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-4 mt-2 flex-shrink-0 group-hover:bg-blue-200 transition-colors" />
                    <span className="group-hover:text-blue-100 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
