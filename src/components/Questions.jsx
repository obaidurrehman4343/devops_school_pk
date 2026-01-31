import React, { useState } from 'react';
import '../styles/Questions.css';

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What prerequisites are needed for this DevOps course?",
      answer: "We designed this course for absolute beginners. While basic familiarity with command line and Linux is helpful, we cover all fundamentals from scratch. The only prerequisites are a willingness to learn and a computer with internet access. We'll guide you through every step, from setting up your development environment to deploying production-ready applications."
    },
    {
      id: 2,
      question: "How is this course different from free online tutorials?",
      answer: "Our course offers structured learning with live mentorship, real-world projects, and career guidance. Unlike fragmented tutorials, we provide a complete learning path with hands-on labs, industry best practices, and direct access to experienced DevOps engineers. You'll build a professional portfolio that demonstrates practical skills employers value."
    },
    {
      id: 3,
      question: "What career support do you provide?",
      answer: "We offer comprehensive career support including resume reviews, LinkedIn optimization, interview preparation, and mock technical interviews. Our hiring partners regularly recruit from our graduates. You'll also join an exclusive alumni network of DevOps professionals for ongoing support and networking opportunities."
    },
    {
      id: 4,
      question: "What tools and technologies will I master?",
      answer: "You'll gain hands-on experience with the complete DevOps stack: Docker for containerization, Kubernetes for orchestration, Terraform for infrastructure as code, AWS/Azure for cloud platforms, Jenkins/GitLab CI for CI/CD pipelines, monitoring with Prometheus/Grafana, and configuration management with Ansible. We focus on practical implementation, not just theory."
    },
    {
      id: 5,
      question: "What's the time commitment and learning format?",
      answer: "The course runs for 8 weeks with two 1.5-hour live sessions weekly. Expect to spend 10-15 hours per week including sessions, hands-on labs, and projects. All sessions are recorded for flexible viewing. The interactive format includes live coding, Q&A, and peer collaboration to ensure practical understanding."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="questions-section" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Frequently Asked Questions</div>
          <h2 className="section-title">
            Clear Answers to Your <span className="accent-text">Key Questions</span>
          </h2>
          <p className="section-description">
            Get detailed insights about our DevOps program, learning approach, and career outcomes.
          </p>
        </div>

        {/* Questions Grid */}
        <div className="questions-grid">
          {questions.map((item, index) => (
            <div 
              className={`question-card ${activeIndex === index ? 'active' : ''}`} 
              key={item.id}
            >
              <div 
                className="question-header"
                onClick={() => toggleQuestion(index)}
              >
                <div className="question-number">0{index + 1}</div>
                <div className="question-content">
                  <h3 className="question-title">{item.question}</h3>
                  <div className="toggle-icon">
                    <svg 
                      className={`icon ${activeIndex === index ? 'active' : ''}`} 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                    >
                      <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className={`answer-content ${activeIndex === index ? 'active' : ''}`}>
                <div className="answer-text">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;