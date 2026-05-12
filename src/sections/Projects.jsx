import { portfolioData } from '../data/portfolioData.js';

const Projects = () => {
  return (
    <section id="projects">
      <div className="max-width" style={{maxWidth: "1300px", margin: "0 auto", padding: "0 2rem"}}>
        <h2>Featured Projects</h2>

        <div className="project-grid">
          {portfolioData.projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div style={{margin: "20px 0", display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center"}}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={{
                      background: "#334155",
                      padding: "6px 18px",
                      borderRadius: "30px",
                      fontSize: "0.95rem"
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{display: "flex", gap: "1rem", justifyContent: "center"}}>
                  <a href={project.liveLink} target="_blank" className="btn btn-primary">Live Demo</a>
                  <a href={project.githubLink} target="_blank" className="btn" style={{border: "2px solid #6366f1", color: "#6366f1"}}>GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;