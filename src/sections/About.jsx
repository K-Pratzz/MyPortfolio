import { portfolioData } from '../data/portfolioData.js';

const About = () => {
  return (
    <section id="about">
      <div className="about-container max-width">
        <div>
          <img 
            src={portfolioData.about.image} 
            alt="Profile"
            style={{width: "100%", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.4)"}}
          />
        </div>
        
        <div className="about-text">
          <h2>About Me</h2>
          <p>I am a Computer Science student focused on becoming a strong software engineer. I am currently learning data structures, web development, and artificial intelligence through hands-on projects.</p>
          <p style={{marginTop: "1.2rem"}}>
            Instead of just consuming tutorials, I focus on understanding concepts deeply and applying them by building real projects.
          </p>
          
          <a href="#" className="btn btn-primary" style={{marginTop: "2rem", display: "inline-block"}}>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;