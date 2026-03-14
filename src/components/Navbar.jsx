import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-top">
        <h2 className="logo">BizNetwork</h2>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
      
        </div>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#chapters">Chapters</a></li>
        <li><a href="#contact">Contact</a></li>

        <div className="nav-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </ul>

    </nav>
  );
}

export default Navbar;
