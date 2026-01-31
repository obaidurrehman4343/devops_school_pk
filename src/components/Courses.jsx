import React from 'react';
import '../styles/Courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "DevOps for Absolute Beginners",
      description: "Stop managing servers and start engineering systems. This course takes you from a local developer to a Cloud DevOps Engineer. You won't just learn tools—you'll learn how to think and build like a DevOps professional.",
      instructor: {
        name: "Aqib hafeez",
        image: "/src/assets/instructors/instructor1.jpg" // Update path
      },
      batchDate: "January 29, 2026",
      duration: "8 Weeks",
      schedule: "Tuesday and Thursday",
      time: "7:00 PM - 8:30 PM (PST)",
      price: "PKR 17,999"
    },
    {
      id: 2,
      title: "AI-Powered Web Development",
      description: "Master the art of Vibe Coding - building websites by describing what you want. This 8-week course teaches you how AI tools actually work, from LLM prompting to building full-stack applications with AI assistance.",
      instructor: {
        name: "Huzaifa Ahmed",
        image: "/src/assets/instructors/instructor2.jpg" // Update path
      },
      batchDate: "January 28, 2025",
      duration: "8 Weeks",
      schedule: "Monday & Wednesday",
      time: "7:00 PM - 8:30 PM (PST)",
      price: "PKR 17,999"
    },
    {
      id: 3,
      title: "Cloud Native Development",
      description: "Build scalable applications using modern cloud technologies. Learn Kubernetes, Docker, and serverless architectures to deploy production-ready applications.",
      instructor: {
        name: "Ali Hassan",
        image: "/src/assets/instructors/instructor3.jpg" // Update path
      },
      batchDate: "February 15, 2025",
      duration: "10 Weeks",
      schedule: "Monday & Wednesday",
      time: "6:00 PM - 7:30 PM (PST)",
      price: "PKR 19,999"
    },
    {
      id: 4,
      title: "Full Stack JavaScript",
      description: "Master the MERN stack from frontend to backend. Build real-world applications with React, Node.js, Express, and MongoDB with modern development practices.",
      instructor: {
        name: "Sara Khan",
        image: "/src/assets/instructors/instructor4.jpg" // Update path
      },
      batchDate: "February 10, 2025",
      duration: "12 Weeks",
      schedule: "Tuesday & Thursday",
      time: "8:00 PM - 9:30 PM (PST)",
      price: "PKR 21,999"
    }
  ];

  return (
    <section className="courses-section" id="courses">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Explore Our Popular Courses</div>
          <h2 className="section-title">
            Transform your <span className="accent-text">career</span> with expert-led courses
          </h2>
          <p className="section-description">
            Master in-demand skills in web development, digital marketing, game development, and more.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              {/* Course Header */}
              <div className="course-header">
                <h3 className="course-title">{course.title}</h3>
                <div className="instructor-info">
                  <div className="instructor-image">
                    <img 
                      src={course.instructor.image} // Use updated path
                      alt={course.instructor.name}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/40';
                      }}
                    />
                  </div>
                  <span className="instructor-name">{course.instructor.name}</span>
                </div>
              </div>

              {/* Course Description */}
              <p className="course-description">{course.description}</p>

              {/* Course Details */}
              <div className="course-details">
                <div className="batch-info">
                  <div className="detail-item">
                    <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="detail-label">Next Batch:</span>
                    <span className="detail-value">{course.batchDate}</span>
                  </div>
                  
                  <div className="detail-row">
                    <div className="detail-item">
                      <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="detail-value">{course.duration}</span>
                    </div>
                    
                    <div className="detail-item">
                      <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="detail-value">{course.schedule}</span>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="detail-value">{course.time}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="course-footer">
                  <div className="course-price">{course.price}</div>
                  <button className="view-details-btn">
                    View Details
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;