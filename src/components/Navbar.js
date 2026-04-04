import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner container">

        {/* Logo */}
        <Link to="/" className="navbar__brand">
        <img src={logo} alt="FOSSEE" className="navbar__logo" />
        </Link>

        {/* Hamburger button (visible on mobile) */}
        <button
          className={`navbar__toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>

        {/* Links */}
        <div className={`navbar__menu ${open ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__links">
              <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
              <li><NavLink to="/workshops" onClick={() => setOpen(false)}>Workshops</NavLink></li>
              <li><NavLink to="/internships" onClick={() => setOpen(false)}>Internships</NavLink></li>
              <li><NavLink to="/events" onClick={() => setOpen(false)}>Events</NavLink></li>
              <li><NavLink to="/statistics" onClick={() => setOpen(false)}>Statistics</NavLink></li>
          </ul>
          <div className="navbar__auth">
            <Link to="/login" className="btn-ghost" onClick={() => setOpen(false)}>Log in</Link>
            <Link to="/register" className="btn-primary" onClick={() => setOpen(false)}>Sign up</Link>
            
          </div>
        </div>

      </div>
    </nav>
  );
}