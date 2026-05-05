import { portfolioData } from '../data/portfolioData.js';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold heading-font text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6 text-lg">
            <p>{portfolioData.about.description}</p>
            
            <a 
              href={portfolioData.about.resumeLink}
              className="btn btn-primary inline-block mt-6"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;