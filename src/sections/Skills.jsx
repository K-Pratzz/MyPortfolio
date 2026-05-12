import { portfolioData } from '../data/portfolioData.js';

const Skills = () => {
  return (
    <section id="skills" style={{ background: "#111827", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <h2 style={{ 
          fontSize: "3.2rem", 
          textAlign: "center", 
          marginBottom: "4rem",
          fontFamily: "'Playfair Display', sans-serif" 
        }}>
          Skills & Technologies
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "2.5rem" 
        }}>
          
          {/* All Categories */}
          {Object.entries(portfolioData.skills).map(([category, items]) => (
            <div 
              key={category} 
              className="skill-category-box"
              style={{
                background: "#1e2937",
                padding: "2rem",
                borderRadius: "20px",
                border: "1px solid #334155",
                transition: "all 0.4s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(99, 102, 241, 0.35)";
                e.currentTarget.style.borderColor = "#6366f1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#334155";
              }}
            >
              <h3 style={{
                color: "#6366f1",
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                borderBottom: "2px solid #6366f1",
                paddingBottom: "12px"
              }}>
                {category}
              </h3>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {items.map((skill, index) => (
                  <span key={index} style={{
                    background: "#334155",
                    padding: "10px 22px",
                    borderRadius: "50px",
                    fontSize: "1.05rem",
                    fontWeight: "500",
                    transition: "all 0.3s"
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Soft Skills & Mindset */}
          <div 
            className="skill-category-box"
            style={{
              background: "#1e2937",
              padding: "2rem",
              borderRadius: "20px",
              border: "1px solid #334155",
              transition: "all 0.4s ease",
              cursor: "default"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 25px 50px rgba(99, 102, 241, 0.35)";
              e.currentTarget.style.borderColor = "#6366f1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#334155";
            }}
          >
            <h3 style={{
              color: "#6366f1",
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              borderBottom: "2px solid #6366f1",
              paddingBottom: "12px"
            }}>
              Soft Skills 
            </h3>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {[
                "Deep Technical Learning", "Self-Learning",
                "Analytical Thinking", 
                "Problem Solving", "Adaptability"
              ].map((skill, index) => (
                <span key={index} style={{
                  background: "#334155",
                  padding: "10px 22px",
                  borderRadius: "50px",
                  fontSize: "1.05rem",
                  fontWeight: "500"
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;