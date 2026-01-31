import React, { useState } from 'react';
import '../styles/Instructors.css';

// Try these different import methods to see which one works
// Option 1: If your images are in public folder
// const instructor1 = '/images/instructor1.jpg';
// const instructor2 = '/images/instructor2.jpg';
// const instructor3 = '/images/instructor3.jpg';
// const instructor4 = '/images/instructor4.jpg';

// Option 2: If using import from assets folder (make sure files exist)
// Try to import them dynamically or use require
const instructor1 = '/src/assets/instructors/instructor1.jpg';
const instructor2 = '/src/assets/instructors/instructor2.jpg';
const instructor3 = '/src/assets/instructors/instructor3.jpg';
const instructor4 = '/src/assets/instructors/instructor4.jpg';

// Or use placeholder images if files don't exist
const placeholderImage = 'https://via.placeholder.com/150';

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Aqib hafeez",
      title: "Senior DevOps Architect",
      experience: "12+ years",
      bio: "Led cloud migration projects for Fortune 500 companies. Specialized in Kubernetes, Terraform, and scalable CI/CD pipelines.",
      expertise: ["Kubernetes", "AWS/Azure", "Terraform", "CI/CD"],
      image: instructor1
    },
    {
      id: 2,
      name: "Huzaifa Ahmed",
      title: "Cloud Infrastructure Lead",
      experience: "8+ years",
      bio: "Built production-grade infrastructure handling 10M+ daily requests. Expert in Docker, monitoring, and cloud security.",
      expertise: ["Docker", "Monitoring", "Cloud Security", "GitLab CI"],
      image: instructor2
    },
    {
      id: 3,
      name: "Ali Hassan",
      title: "DevOps Platform Engineer",
      experience: "6+ years",
      bio: "Designed DevOps platforms for tech startups. Specializes in GitOps, infrastructure automation, and DevOps culture.",
      expertise: ["GitOps", "Ansible", "Jenkins", "Python"],
      image: instructor3
    },
    {
      id: 4,
      name: "Sara Khan",
      title: "Site Reliability Engineer",
      experience: "10+ years",
      bio: "Optimized system reliability for high-traffic applications. Expert in incident management and resilient infrastructure.",
      expertise: ["SRE", "Incident Response", "Performance", "Automation"],
      image: instructor4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextInstructor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
  };

  const prevInstructor = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + instructors.length) % instructors.length);
  };

  // Function to handle image errors
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const parent = e.target.parentElement;
    const fallback = parent.querySelector('.avatar-fallback');
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <section className="instructors-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">👨‍🏫 Expert Instructors</span>
          <h2 className="section-title">
            Learn from <span className="highlight">Industry Veterans</span>
          </h2>
          <p className="section-subtitle">
            Master DevOps from engineers who've built and scaled systems at top tech companies.
          </p>
        </div>

        {/* Compact Instructor Card */}
        <div className="compact-instructor-card">
          <div className="card-content">
            {/* Left Column - Image & Basic Info */}
            <div className="instructor-left">
              <div className="instructor-avatar">
                <img 
                  src={instructors[currentIndex].image} 
                  alt={instructors[currentIndex].name}
                  className="avatar-image"
                  onError={handleImageError}
                />
                <div className="avatar-fallback" style={{ display: 'none' }}>
                  <div className="fallback-initials">
                    {instructors[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                {/* Experience Badge */}
                <div className="experience-tag">
                  <span className="experience-years">{instructors[currentIndex].experience}</span>
                  <span className="experience-label">Experience</span>
                </div>
              </div>

              {/* Basic Info */}
              <div className="basic-info">
                <h3 className="instructor-name">{instructors[currentIndex].name}</h3>
                <p className="instructor-title">{instructors[currentIndex].title}</p>
              </div>
            </div>

            {/* Right Column - Bio & Expertise */}
            <div className="instructor-right">
              <div className="bio-section">
                <h4 className="section-label">About</h4>
                <p className="instructor-bio">{instructors[currentIndex].bio}</p>
              </div>

              <div className="expertise-section">
                <h4 className="section-label">Expertise</h4>
                <div className="expertise-tags">
                  {instructors[currentIndex].expertise.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      <span className="skill-icon">⚡</span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="navigation-controls">
                <button 
                  className="nav-button prev"
                  onClick={prevInstructor}
                  aria-label="Previous instructor"
                >
                  <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <div className="nav-indicator">
                  <span className="current-index">0{currentIndex + 1}</span>
                  <span className="nav-divider">/</span>
                  <span className="total-instructors">0{instructors.length}</span>
                </div>
                
                <button 
                  className="nav-button next"
                  onClick={nextInstructor}
                  aria-label="Next instructor"
                >
                  <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="progress-dots">
            {instructors.map((_, idx) => (
              <button
                key={idx}
                className={`progress-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to instructor ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;