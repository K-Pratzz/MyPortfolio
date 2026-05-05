import { portfolioData } from '../data/portfolioData.js';

const Projects = () => {
  return (
    <section id="projects" className="max-width">
      <h2 className="text-5xl font-bold heading-font text-center mb-16">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {portfolioData.projects.map(project => (
          <div key={project.id} className="project-card">
            <img 
              src={project.image} 
              alt={project.title}
            />
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <a href={project.liveLink} target="_blank" className="btn btn-primary">Live Demo</a>
                <a href={project.githubLink} target="_blank" className="btn btn-outline">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;