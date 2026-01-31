import React from 'react';
import '../styles/Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      icon: "🚀",
      title: "Real-World Projects",
      description: "Build production-grade infrastructure from scratch. Deploy microservices, set up CI/CD pipelines, and manage cloud resources like professionals do.",
      features: ["Live AWS/Azure environments", "Production-grade code", "Best practices & patterns"]
    },
    {
      icon: "🎓",
      title: "Expert Mentorship",
      description: "Get guided by senior DevOps engineers who've scaled systems at top companies. Weekly code reviews and career guidance included.",
      features: ["1-on-1 mentoring sessions", "Code review & feedback", "Career path planning"]
    },
    {
      icon: "🛠️",
      title: "Complete DevOps Stack",
      description: "Master the entire ecosystem: Docker, Kubernetes, Terraform, Jenkins, GitLab CI, Ansible, Prometheus, and more—in real scenarios.",
      features: ["Hands-on labs", "Industry tools", "Troubleshooting skills"]
    }
  ];

  return (
    <section className="solutions-section" id="solutions">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Our Approach</div>
          <h2 className="section-title">
            Your Path to <span className="accent-text">DevOps Mastery</span>
          </h2>
          <p className="section-description">
            Stop watching tutorials. Start building real infrastructure that companies actually use.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon-wrapper">
                <span className="solution-icon">{solution.icon}</span>
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="solution-feature">
                    <span className="check-icon">✓</span>
                    {feature}
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

export default Solutions;