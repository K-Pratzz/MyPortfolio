import { portfolioData } from '../data/portfolioData.js';

const Skills = () => {
  return (
    <section id="skills">
      <div className="max-width">
        <h2 className="text-5xl font-bold heading-font text-center mb-16">
          Skills & Technologies
        </h2>
        
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