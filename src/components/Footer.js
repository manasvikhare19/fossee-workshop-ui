import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from './logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__brand">
          <img src={logo} alt="FOSSEE Logo" className="footer__logo" />
          <p className="footer__tagline">
            Free/Libre and Open Source Software for Education.<br />
            A project by IIT Bombay under the National Mission on Education through ICT, MoE, Govt. of India.
          </p>
          <div className="footer__contact">
            <span>📍 IIT Bombay, Mumbai, India</span>
            <span>📞 (+91) 22 25764111</span>
            <span>✉️ info [at] fossee [dot] in</span>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4>Workshops</h4>
            <Link to="/workshops">Browse All</Link>
            <Link to="/propose">Propose One</Link>
            <Link to="/status">My Bookings</Link>
          </div>
          <div className="footer__col">
            <h4>FOSSEE Projects</h4>
            <a href="https://python.fossee.in" target="_blank" rel="noreferrer">Python</a>
            <a href="https://scilab.in" target="_blank" rel="noreferrer">Scilab</a>
            <a href="https://esim.fossee.in" target="_blank" rel="noreferrer">eSim</a>
            <a href="https://cfd.fossee.in" target="_blank" rel="noreferrer">OpenFOAM</a>
          </div>
          <div className="footer__col">
            <h4>Platform</h4>
            <Link to="/workshops">Workshops</Link>
            <Link to="/internships">Internships</Link>
            <Link to="/events">Events</Link>
            <Link to="/statistics">Statistics</Link>
          </div>
          <div className="footer__col">
          <h4>FOSSEE</h4>
          <Link to="/about">About</Link>
          <a href="https://forums.fossee.in" target="_blank" rel="noreferrer">Forum</a>
          <a href="https://fossee.in/awards" target="_blank" rel="noreferrer">Awards</a>
          <a href="https://fossee.in/testimonials" target="_blank" rel="noreferrer">Testimonials</a>
          </div>
          <div className="footer__col">
            <h4>Account</h4>
             <Link to="/login">Log In</Link>
             <Link to="/register">Sign Up</Link>
             <Link to="/propose">Propose Workshop</Link>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} FOSSEE, IIT Bombay. Licensed under CC BY-SA 4.0</span>
          <div className="footer__badges">
            <span className="footer__badge">MoE, Govt. of India</span>
            <span className="footer__badge">IIT Bombay</span>
            <span className="footer__badge">NME-ICT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}