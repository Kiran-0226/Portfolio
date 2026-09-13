import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar__logo">
        KIRAN.DEV
      </a>

      <nav className="navbar__links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar