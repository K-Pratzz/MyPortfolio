import { portfolioData } from '../data/portfolioData.js';

const Contact = () => {
  return (
    <section id="contact">
      <div style={{maxWidth: "800px", margin: "0 auto", textAlign: "center", padding: "0 2rem"}}>
        <h2>Let's Connect</h2>
        <p style={{fontSize: "1.4rem", margin: "2rem 0 3rem", color: "#cbd5e1"}}>
          I'm always open to discussing new opportunities, interesting projects, or just saying hello.
        </p>

        <a 
          href={`mailto:${portfolioData.contact.email}`} 
          className="btn btn-primary"
          style={{fontSize: "1.3rem", padding: "20px 48px"}}
        >
          Send Me a Message
        </a>
      </div>

      {/* Footer */}
      <footer style={{marginTop: "120px", padding: "50px 0", borderTop: "1px solid #334155", textAlign: "center"}}>
        <p style={{fontSize: "1.1rem"}}>
          © 2026 Kumari Pratibha • Built with passion
        </p>
      </footer>
    </section>
  );
};

export default Contact;