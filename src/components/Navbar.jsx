import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Universa
        </a>
      </div>
      <div className="navbar-right">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/about" className="nav-link">
          About
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
