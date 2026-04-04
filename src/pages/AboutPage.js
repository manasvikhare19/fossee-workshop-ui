import React from 'react';
import './AboutPage.css';
import kalamImg from './image.png';

const TOOLS = [
  { icon: '🐍', name: 'Python',       link: 'https://python.fossee.in',  desc: 'General-purpose programming and data analysis.' },
  { icon: '📊', name: 'Scilab',       link: 'https://scilab.in',          desc: 'Numerical computation and simulation.' },
  { icon: '🔌', name: 'eSim',         link: 'https://esim.fossee.in',     desc: 'Circuit design and PCB simulation.' },
  { icon: '🌊', name: 'OpenFOAM',     link: 'https://cfd.fossee.in',      desc: 'Computational fluid dynamics.' },
  { icon: '⚙️', name: 'OpenModelica', link: 'https://om.fossee.in',       desc: 'Dynamic systems modelling and simulation.' },
  { icon: '🧪', name: 'DWSIM',        link: 'https://dwsim.fossee.in',    desc: 'Chemical process simulation.' },
  { icon: '🏗️', name: 'Osdag',        link: 'https://osdag.fossee.in',    desc: 'Steel structure design with 3D visualization.' },
  { icon: '🗺️', name: 'QGIS',         link: 'https://qgis.fossee.in',     desc: 'Geographic Information Systems.' },
  { icon: '⚡', name: 'Arduino',      link: 'https://arduino.fossee.in',  desc: 'Embedded systems and electronics.' },
  { icon: '🔬', name: 'R',            link: 'https://r.fossee.in',        desc: 'Statistical computing and graphics.' },
  { icon: '🎨', name: 'FreeCAD',      link: 'https://freecad.fossee.org.in', desc: 'Open-source 3D modelling.' },
  { icon: '🎭', name: 'FOCAL',        link: 'https://focal.fossee.in',    desc: 'Open-source creative art and animation.' },
];

const ACTIVITIES = [
  {
    icon: '📖',
    title: 'Textbook Companion',
    desc: 'Port solved examples from standard textbooks using FLOSS tools. Build a massive learning resource database.',
  },
  {
    icon: '🔬',
    title: 'Lab Migration',
    desc: 'Migrate college labs from proprietary to open source software — saving institutions significant licensing costs.',
  },
  {
    icon: '💡',
    title: 'Niche Software Activities',
    desc: 'Convert student projects to use FLOSS. Flowsheeting in DWSIM, circuit simulation in eSim, CFD case studies, and more.',
  },
  {
    icon: '💬',
    title: 'FOSSEE Forum',
    desc: 'Community forum monitored by domain experts for installation help and usage questions on all FLOSS tools.',
  },
  {
    icon: '🎓',
    title: 'Workshops & Conferences',
    desc: 'Hands-on workshops and conferences across India to introduce FLOSS to students and educators.',
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">

        {/* Mission */}
        <div className="about-hero">
        <p className="page-tag">About FOSSEE</p>
        <h1 className="about-hero__title">
        Free/Libre and Open Source<br />Software for Education
        </h1>

        <div className="kalam-quote">
        <img src={kalamImg} alt="Dr. A. P. J. Abdul Kalam" className="kalam-quote__img" />
        <div className="kalam-quote__content">
        <span className="kalam-quote__mark">"</span>
        <p className="kalam-quote__text">
        The most unfortunate thing is that India still seems to believe in proprietary solutions.
        Further spread of IT which is influencing the daily life of individuals would have a
        devastating effect on the lives of society due to any small shift in the business practice
        involving these proprietary solutions. It is precisely for these reasons open source software
        need to be built which would be cost effective for the entire society.
        </p>
        <p className="kalam-quote__author">— Dr. A. P. J. Abdul Kalam</p>
        </div>
        </div>
        </div>

        {/* What is FOSSEE */}
        <div className="about-section">
          <h2 className="about-section__title">What is FOSSEE?</h2>
          <div className="about-text">
            <p>
              FOSSEE (Free/Libre and Open Source Software for Education) promotes the use of FLOSS tools
              in academia and research. It is part of the <strong>National Mission on Education through
              Information and Communication Technology (ICT)</strong>, Ministry of Education, Government of India,
              hosted at <strong>IIT Bombay</strong>.
            </p>
            <p>
              The project aims to reduce dependency on proprietary software in Indian education by
              providing free, open-source alternatives that are equally powerful and completely free to use.
            </p>
          </div>
        </div>

        {/* Projects / Tools */}
        <div className="about-section">
          <h2 className="about-section__title">FOSSEE Projects</h2>
          <p className="about-section__sub">Open source tools promoted and supported by FOSSEE</p>
          <div className="tools-grid">
            {TOOLS.map((t, i) => (
              <a href={t.link} target="_blank" rel="noreferrer" className="tool-card" key={i}>
                <span className="tool-card__icon">{t.icon}</span>
                <span className="tool-card__name">{t.name}</span>
                <span className="tool-card__desc">{t.desc}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="about-section">
          <h2 className="about-section__title">Our Activities</h2>
          <p className="about-section__sub">How FOSSEE promotes open source in Indian education</p>
          <div className="activities-grid">
            {ACTIVITIES.map((a, i) => (
              <div className="activity-card" key={i}>
                <span className="activity-card__icon">{a.icon}</span>
                <div>
                  <h3 className="activity-card__title">{a.title}</h3>
                  <p className="activity-card__desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="about-contact">
          <h2 className="about-section__title">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-item__icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>FOSSEE, IIT Bombay, Mumbai, India</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item__icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>(+91) 22 25764111</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item__icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>info [at] fossee [dot] in</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-item__icon">💬</span>
              <div>
                <strong>Forum</strong>
                <a href="https://forums.fossee.in" target="_blank" rel="noreferrer">forums.fossee.in</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}