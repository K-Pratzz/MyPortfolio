import { portfolioData } from '../data/portfolioData.js';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold heading-font text-center mb-16">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {portfolioData.projects.map(project => (
            <div key={project.id} className="card overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-800 light-mode:bg-gray-200 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.liveLink} target="_blank" className="btn btn-primary text-sm">Live Demo</a>
                  <a href={project.githubLink} target="_blank" className="btn btn-outline text-sm">GitHub</a>
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