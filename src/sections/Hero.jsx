import { portfolioData } from '../data/portfolioData.js';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span style={{color: "#6366f1"}}>Kumari Pratibha</span></h1>
          <h2>Aspiring NLP Engineer and Data Scientist</h2>
          <p>Building real skills through consistent learning, projects, and problem-solving.</p>
          
          <div style={{marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap"}}>
            <a href="#projects" className="btn btn-primary" style={{padding: "14px 32px", fontSize: "1.1rem"}}>
              View My Projects
            </a>
            <a href="#contact" className="btn btn-outline" style={{padding: "14px 32px", fontSize: "1.1rem"}}>
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img 
            src={portfolioData.about.image} 
            alt="Kumari Pratibha"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;