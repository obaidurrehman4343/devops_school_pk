import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const particleCount = 80;
    const connectionDistance = 150;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.5)";
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${
              (1 - distance / connectionDistance) * 0.3
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="hero-container">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>

      <div className="hero-content">
        <div className="hero-features">
          <div className="feature-badge">
            <span className="feature-icon">📚</span>
            <span>Live Online Classes</span>
          </div>
          <div className="feature-badge">
            <span className="feature-icon">🎓</span>
            <span>Expert Instructors</span>
          </div>
          <div className="feature-badge">
            <span className="feature-icon">💼</span>
            <span>Career-Focused</span>
          </div>
        </div>

        <h1 className="hero-title">
          Transform Your Career with <br />
          <span className="hero-title-highlight">
            Skills That Companies Actually Need
          </span>
        </h1>

        <p className="hero-description">
          Learn from engineers who've shipped products at scale. Live classes,
          real projects, and a community that helps you succeed.
        </p>

        <button className="hero-cta">
          Explore Courses <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
