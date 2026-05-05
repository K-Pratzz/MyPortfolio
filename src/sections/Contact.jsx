import { portfolioData } from '../data/portfolioData.js';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#111] light-mode:bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold heading-font mb-8">Let's Work Together</h2>
        <p className="text-xl mb-10 text-gray-400">Have a project in mind? Feel free to reach out.</p>

        <a 
          href={`mailto:${portfolioData.contact.email}`}
          className="btn btn-primary text-xl px-12 py-6 inline-block"
        >
          Say Hello 👋
        </a>

        <div className="flex justify-center gap-8 mt-16">
          <a href={portfolioData.contact.github} target="_blank" className="text-3xl hover:text-indigo-400">GitHub</a>
          <a href={portfolioData.contact.linkedin} target="_blank" className="text-3xl hover:text-indigo-400">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;