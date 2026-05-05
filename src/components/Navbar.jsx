import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="heading-font" style={{ fontSize: '1.8rem', fontWeight: '700' }}>
          Alex Rivera
        </h1>

        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <button onClick={() => scrollTo('about')} className="nav-link">About</button>
          <button onClick={() => scrollTo('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollTo('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollTo('contact')} className="nav-link">Contact</button>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md-hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ fontSize: '1.8rem', background: 'none', border: 'none' }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;