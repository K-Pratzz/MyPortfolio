import { portfolioData } from '../data/portfolioData.js';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-screen">
        <div className="hero-content space-y-6">
          <h1 className="heading-font text-6xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span style={{ color: '#6366f1' }}>{portfolioData.name}</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl text-gray-400">
            {portfolioData.title}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-lg">
            {portfolioData.shortIntro}
          </p>

          <div className="flex gap-4 pt-6">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img 
            src={portfolioData.about.image} 
            alt={portfolioData.name}
            className="w-80 h-80 rounded-2xl object-cover shadow-2xl border-4 border-indigo-500/30"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;