import "./../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
          <h1 className="brand-name">
            <span className="brand-tech">Devops School</span>
            <span className="brand-camp">PK</span>
          </h1>
          <p className="brand-tagline">Master Tech, Transform Career</p>
        </div>

        <nav className="navigation">
          <div className="nav-links">
            <a href="#courses-section" className="nav-link">Courses</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#blogs" className="nav-link">Blogs</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button className="cta-button">Get Started</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
