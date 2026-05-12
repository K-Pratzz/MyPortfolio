import { portfolioData } from '../data/portfolioData.js';

const Skills = () => {
  return (
    <section id="skills" style={{background: "#111827"}}>
      <div className="max-width" style={{maxWidth: "1100px", margin: "0 auto", padding: "0 2rem"}}>
        <h2>Skills & Technologies</h2>
        
        <div className="skills-grid">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;