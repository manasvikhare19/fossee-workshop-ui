import React, { useState } from 'react';
import './InternshipsPage.css';

const INTERNSHIPS = [
  {
    id: 1,
    title: 'FOSSEE Summer Fellowship 2026',
    type: 'Summer Fellowship',
    status: 'open',
    deadline: 'April 30, 2026',
    start: 'May 2026',
    duration: '2–3 months',
    mode: 'Online / On-campus',
    description: 'Work with the FOSSEE team at IIT Bombay on open source tools. Open to UG/PG students from any college in India.',
    tools: ['Python', 'Scilab', 'eSim', 'OpenFOAM', 'DWSIM'],
    link: 'https://fossee.in/fellowship/2026',
  },
  {
    id: 2,
    title: 'Semester Long Internship 2026',
    type: 'Semester Internship',
    status: 'open',
    deadline: 'March 15, 2026',
    start: 'March 2026',
    duration: '1.5–3 months',
    mode: 'Online',
    description: 'Complete a FOSSEE screening task and get selected to work on textbook companions, lab migrations, or niche software activities.',
    tools: ['Python', 'Scilab', 'R', 'OpenModelica', 'DWSIM'],
    link: 'https://fossee.in/semester-internship/2026',
  },
  {
    id: 3,
    title: 'Semester Long Internship — Autumn 2025',
    type: 'Semester Internship',
    status: 'closed',
    deadline: 'September 30, 2025',
    start: 'October 2025',
    duration: '1.5–3 months',
    mode: 'Online',
    description: 'Autumn edition of the semester-long internship. Work on FLOSS tools and publish your work on the FOSSEE platform.',
    tools: ['Python', 'Scilab', 'eSim', 'R'],
    link: 'https://fossee.in/semester-internship/autumn/2025',
  },
  {
    id: 4,
    title: 'National Geospatial Internship 2025',
    type: 'Niche Internship',
    status: 'closed',
    deadline: 'August 2025',
    start: 'August 2025',
    duration: '2 months',
    mode: 'Online',
    description: 'Focused internship on QGIS and geospatial data processing for mapping and spatial analysis.',
    tools: ['QGIS'],
    link: 'https://fossee.in/NGI2025',
  },
];

const BENEFITS = [
  { icon: '📜', title: 'E-Certificate',      desc: 'Receive an official certificate from IIT Bombay upon successful completion.' },
  { icon: '🌐', title: 'Published Work',     desc: 'Your work gets published on the FOSSEE platform — a great portfolio piece.' },
  { icon: '🎓', title: 'Any College',        desc: 'Open to UG/PG students from any college across India, any discipline.' },
  { icon: '💻', title: 'Fully Remote',       desc: 'Most internships are online — work from your college or home.' },
  { icon: '🤝', title: 'IIT Bombay Mentors', desc: 'Get guided by expert researchers and faculty from IIT Bombay.' },
  { icon: '🔓', title: 'Free & Open',        desc: 'No fees. All projects use Free/Libre Open Source Software.' },
];

export default function InternshipsPage() {
  const [filter, setFilter] = useState('all');

  const filtered = INTERNSHIPS.filter(i =>
    filter === 'all' ? true : i.status === filter
  );

  return (
    <div className="internships-page">
      <div className="container">

        {/* Header */}
        <div className="page-header">
          <p className="page-tag">IIT Bombay · FOSSEE</p>
          <h1 className="page-header__title">Internship Programs</h1>
          <p className="page-header__sub">
            Gain real-world experience working with open source tools under IIT Bombay mentors.
            Open to students from any college in India.
          </p>
        </div>

        {/* Benefits */}
        <div className="benefits-grid">
          {BENEFITS.map((b, i) => (
            <div className="benefit-card" key={i}>
              <span className="benefit-card__icon">{b.icon}</span>
              <div>
                <h3 className="benefit-card__title">{b.title}</h3>
                <p className="benefit-card__desc">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="schedule-block">
          <h2 className="section-block__title">Internship Schedule</h2>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Type</th>
                  <th>Registration Opens</th>
                  <th>Starts</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Semester Long Internship</td>
                  <td>January / February</td>
                  <td>March</td>
                  <td><span className="tag">Online</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Summer Fellowship</td>
                  <td>March</td>
                  <td>May</td>
                  <td><span className="tag">Online / On-campus</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Semester Long Internship — Autumn</td>
                  <td>August / September</td>
                  <td>October</td>
                  <td><span className="tag">Online</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Filter */}
        <div className="internships-header">
          <h2 className="section-block__title" style={{marginBottom:0}}>All Internships</h2>
          <div className="toolbar__filters">
            {['all','open','closed'].map(f => (
              <button key={f}
                className={`filter-btn ${filter === f ? 'filter-btn--active' : ''}`}
                onClick={() => setFilter(f)}>
                {f === 'all' ? 'All' : f === 'open' ? '🟢 Open' : '🔴 Closed'}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="internship-cards">
          {filtered.map(item => (
            <div className={`internship-card ${item.status === 'open' ? 'internship-card--open' : ''}`} key={item.id}>
              <div className="internship-card__top">
                <span className={`status-badge status-badge--${item.status}`}>
                  {item.status === 'open' ? '🟢 Open' : '🔴 Closed'}
                </span>
                <span className="internship-card__type">{item.type}</span>
              </div>
              <h3 className="internship-card__title">{item.title}</h3>
              <p className="internship-card__desc">{item.description}</p>

              <div className="internship-card__meta">
                <span>📅 Deadline: <strong>{item.deadline}</strong></span>
                <span>⏱ Duration: <strong>{item.duration}</strong></span>
                <span>💻 Mode: <strong>{item.mode}</strong></span>
              </div>

              <div className="internship-card__tools">
                {item.tools.map(t => <span className="tool-tag" key={t}>{t}</span>)}
              </div>
                <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`internship-card__btn ${
                item.status === 'closed' ? 'internship-card__btn--disabled' : ''
  }`}
>
  {item.status === 'open' ? 'Apply Now →' : 'View Details →'}
</a>
              
               
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}