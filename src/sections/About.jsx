import { portfolioData } from '../data/portfolioData.js';

const About = () => {
  return (
    <section id="about">
      <div className="max-width" style={{maxWidth: "1100px", margin: "0 auto", padding: "0 2rem"}}>
        <h2>About Me</h2>
        
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center"}}>
          <div>
            <p style={{fontSize: "1.25rem", lineHeight: "1.9", color: "#cbd5e1"}}>
              {portfolioData.about.description}
            </p>
            <p style={{fontSize: "1.25rem", lineHeight: "1.9", color: "#cbd5e1", marginTop: "1.5rem"}}>
              I focus on deep understanding of concepts and building real projects rather than just watching tutorials. 
              My goal is to become a skilled NLP Engineer and contribute to meaningful AI solutions.
            </p>
          </div>

          <div>
            <img 
              src={portfolioData.about.image} 
              alt="Kumari Pratibha"
              style={{width: "100%", borderRadius: "20px", boxShadow: "0 25px 50px rgba(0,0,0,0.5)"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;