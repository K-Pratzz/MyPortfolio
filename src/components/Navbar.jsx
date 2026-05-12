const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Kumari Pratibha</div>

        <div className="nav-links">
          <button onClick={() => scrollTo('about')} className="nav-link">About</button>
          <button onClick={() => scrollTo('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollTo('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollTo('contact')} className="nav-link">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;