import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <p className="hero__tag">IIT Bombay · FOSSEE</p>
          <h1 className="hero__title">
            Learn. Build.<br />
            <span>Grow with Workshops.</span>
          </h1>
          <p className="hero__subtitle">
            Book hands-on workshops in Python, Scilab, OpenFOAM and more —
            designed for students and educators across India.
          </p>
          <div className="hero__btns">
            <Link to="/workshops" className="btn-primary btn-lg">Browse Workshops</Link>
            <Link to="/register" className="btn-ghost btn-lg">Create Account</Link>
          </div>
        </div>

        {/* Decorative background grid */}
        <div className="hero__grid" aria-hidden="true" />
      </section>

      {/* Stats Strip */}
      <section className="stats">
        <div className="container stats__inner">
          <div className="stat">
            <span className="stat__num">500+</span>
            <span className="stat__label">Workshops Conducted</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__num">50,000+</span>
            <span className="stat__label">Students Trained</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__num">300+</span>
            <span className="stat__label">Colleges Reached</span>
          </div>
          <div className="stat__divider" />
          <div className="stat">
            <span className="stat__num">Free</span>
            <span className="stat__label">Always Free</span>
          </div>
        </div>
      </section>

      {/* Workshop Types Preview */}
      <section className="workshops-preview">
        <div className="container">
          <h2 className="section__title">Popular Workshop Types</h2>
          <p className="section__sub">Choose from a range of technical topics led by IIT Bombay experts</p>
          <div className="cards">
            {WORKSHOPS.map(w => (
              <div className="card" key={w.id}>
                <div className="card__icon">{w.icon}</div>
                <h3 className="card__title">{w.name}</h3>
                <p className="card__desc">{w.desc}</p>
                <div className="card__footer">
                  <span className="card__duration">⏱ {w.duration}</span>
                  <Link to="/workshops" className="card__link">View Details →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how">
        <div className="container">
          <h2 className="section__title">How It Works</h2>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step" key={i}>
                <div className="step__num">{i + 1}</div>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2 className="cta__title">Ready to host a workshop?</h2>
            <p className="cta__sub">Register as a coordinator and propose a workshop at your college.</p>
          </div>
          <Link to="/register" className="btn-primary btn-lg">Get Started</Link>
        </div>
      </section>

    </div>
  );
}

const WORKSHOPS = [
  { id: 1, icon: '🐍', name: 'Python',    desc: 'Scripting, data analysis and automation using Python.',       duration: '2 days' },
  { id: 2, icon: '📊', name: 'Scilab',    desc: 'Numerical computing and simulation with Scilab.',             duration: '2 days' },
  { id: 3, icon: '🌊', name: 'OpenFOAM', desc: 'Computational fluid dynamics simulations.',                    duration: '3 days' },
  { id: 4, icon: '⚡', name: 'Arduino',   desc: 'Embedded systems and electronics prototyping.',               duration: '1 day'  },
  { id: 5, icon: '🔬', name: 'R',         desc: 'Statistical computing and data visualization.',               duration: '2 days' },
  { id: 6, icon: '🛠️', name: 'Django',    desc: 'Build full-stack web applications with Django framework.',   duration: '3 days' },
];

const STEPS = [
  { title: 'Register',         desc: 'Create a free coordinator account with your college email.' },
  { title: 'Propose',          desc: 'Submit a workshop request specifying topic, date and venue.'  },
  { title: 'Get Confirmed',    desc: 'FOSSEE reviews and assigns an expert instructor.'             },
  { title: 'Host & Learn',     desc: 'Conduct the workshop and get certified participation records.' },
];