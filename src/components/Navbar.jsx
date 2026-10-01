import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span>&lt;</span>
          KIRAN
          <span>/&gt;</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navbar-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/certificates"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Certificates
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? "nav-link nav-resume active"
                : "nav-link nav-resume"
            }
          >
            Resume
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>

        </nav>

        {/* Availability */}
        <div className="navbar-status">
          <span className="status-dot"></span>
          <span>Available</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >
        <nav className="mobile-nav-links">

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <span>01</span>
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <span>02</span>
            About
          </NavLink>

          <NavLink
            to="/skills"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <span>03</span>
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <span>04</span>
            Projects
          </NavLink>

          <NavLink
            to="/certificates"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <span>05</span>
            Certificates
          </NavLink>

          <NavLink
            to="/resume"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <span>06</span>
            Resume
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
          >
            <span>07</span>
            Contact
          </NavLink>

        </nav>

        <div className="mobile-status">
          <span className="status-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

      </div>
    </header>
  );
}

export default Navbar;