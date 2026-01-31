import React from 'react';
import '../styles/Challenges.css';

const Challenges = () => {
  return (
    <section className="challenges-section" id="challenges">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Common DevOps Roadblocks</div>
          <h2 className="section-title">
            Where Most <span className="accent-text">DevOps Learners</span> Get Stuck
          </h2>
          <p className="section-description">
            These aren't just challenges - they're opportunities for growth with the right guidance
          </p>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {/* Card 1 */}
          <div className="challenge-card">
            <div className="card-header">
              <div className="card-icon">
                <div className="icon-wrapper">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="card-number">01</div>
              </div>
            </div>
            <h3 className="card-title">The Learning Plateau</h3>
            <p className="card-text">
              You've completed tutorials but can't build real infrastructure. Theory doesn't translate to production scenarios with scaling, security, and incident management.
            </p>
            <div className="card-tags">
              <span className="tag">Theory vs Practice</span>
              <span className="tag">Skill Gap</span>
              <span className="tag">Real-world Context</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="challenge-card">
            <div className="card-header">
              <div className="card-icon">
                <div className="icon-wrapper">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 1v22M5 6h14M5 18h14M5 12h14" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <div className="card-number">02</div>
              </div>
            </div>
            <h3 className="card-title">Tool Overload</h3>
            <p className="card-text">
              Docker, K8s, Terraform, AWS, Jenkins... The DevOps stack is overwhelming. Choosing what to learn next and how these tools integrate is confusing.
            </p>
            <div className="card-tags">
              <span className="tag">Tool Fatigue</span>
              <span className="tag">Integration Chaos</span>
              <span className="tag">Priority Confusion</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="challenge-card">
            <div className="card-header">
              <div className="card-icon">
                <div className="icon-wrapper">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="card-number">03</div>
              </div>
            </div>
            <h3 className="card-title">Experience Barrier</h3>
            <p className="card-text">
              Job postings demand 3+ years experience. Without real projects or mentorship, breaking into DevOps feels impossible despite your theoretical knowledge.
            </p>
            <div className="card-tags">
              <span className="tag">Entry Barrier</span>
              <span className="tag">Experience Gap</span>
              <span className="tag">Career Transition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;