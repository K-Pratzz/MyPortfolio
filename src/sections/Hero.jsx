import { portfolioData } from '../data/portfolioData.js';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      paddingTop: "130px",           // Extra space to avoid navbar overlap
      background: "linear-gradient(135deg, #0f172a 0%, #1e2937 100%)",
      display: "flex",
      alignItems: "center"
    }}>
      
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 3rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
        width: "100%"
      }}>
        
        <div>
          {/* Single Line Name */}
          <h1 style={{ 
            fontSize: "4.1rem", 
            lineHeight: "1.1", 
            marginBottom: "1rem",
            color: "#ffffff",
            whiteSpace: "nowrap" , paddingTop:"50px"          // This forces it to stay in one line
          }}>
            Hi, I'm Kumari Pratibha
          </h1>
          
          <h2 style={{ 
            fontSize: "2rem", 
            color: "#a5b4fc", 
            marginBottom: "1.8rem" , textAlign :"left"
          }}>
            Aspiring NLP Engineer & Software Developer
          </h2>
          
          <p style={{ 
            fontSize: "1.35rem", 
            color: "#e0e0e0", 
            maxWidth: "650px",
            lineHeight: "1.7"
          }}>
            Passionate about building intelligent systems, solving real-world problems with AI, and continuously improving through hands-on development and deep technical learning.
          </p>

          <div style={{ marginTop: "3.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <a href="#projects" className="btn btn-primary" style={{padding: "18px 40px", fontSize: "1.2rem"}}>
              View Projects
            </a>
            <a href="#contact" className="btn" style={{ 
              padding: "18px 40px", 
              fontSize: "1.2rem",
              border: "2px solid #6366f1", 
              color: "#6366f1" 
            }}>
              Get In Touch
            </a>
          </div>
        </div>

        <div style={{ textAlign: "center", paddingTop:"50px" }}>
          <img 
            src={portfolioData.about.image} 
            alt="Kumari Pratibha"
            style={{
              width: "100%",
              maxWidth: "420px",
              borderRadius: "24px",
              border: "8px solid #6366f1",
              boxShadow: "0 30px 60px rgba(99, 102, 241, 0.4)"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;