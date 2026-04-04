import React from 'react';
import './Statisticspage.css';

const STATS = [
  { label: 'Workshops Conducted', value: '500+',    icon: '🎓' },
  { label: 'Students Trained',    value: '50,000+', icon: '👩‍💻' },
  { label: 'Colleges Reached',    value: '300+',    icon: '🏫' },
  { label: 'States Covered',      value: '28',      icon: '🗺️' },
  { label: 'Expert Instructors',  value: '40+',     icon: '👨‍🏫' },
  { label: 'Workshop Types',      value: '12',      icon: '📚' },
];

const RECENT = [
  { college: 'NIT Warangal',        workshop: 'Python',      date: 'Mar 2025', students: 62 },
  { college: 'VJTI Mumbai',         workshop: 'OpenFOAM',    date: 'Feb 2025', students: 28 },
  { college: 'COEP Pune',           workshop: 'Scilab',      date: 'Feb 2025', students: 45 },
  { college: 'IIT Kharagpur',       workshop: 'eSim',        date: 'Jan 2025', students: 38 },
  { college: 'Anna University',     workshop: 'Django',      date: 'Jan 2025', students: 55 },
  { college: 'BIT Mesra',           workshop: 'Arduino',     date: 'Dec 2024', students: 40 },
];

const BY_TOOL = [
  { name: 'Python',      count: 142, pct: 90 },
  { name: 'Scilab',      count: 98,  pct: 62 },
  { name: 'OpenFOAM',    count: 67,  pct: 43 },
  { name: 'Arduino',     count: 54,  pct: 34 },
  { name: 'eSim',        count: 48,  pct: 30 },
  { name: 'Django',      count: 41,  pct: 26 },
  { name: 'R',           count: 32,  pct: 20 },
  { name: 'DWSIM',       count: 18,  pct: 11 },
];

export default function Statisticspage() {
  return (
    <div className="stats-page">
      <div className="container">

        <div className="page-header">
          <h1 className="page-header__title">Workshop Statistics</h1>
          <p className="page-header__sub">Public data on FOSSEE workshop outreach across India</p>
        </div>

        {/* Summary Cards */}
        <div className="stat-cards">
          {STATS.map((s, i) => (
            <div className="stat-card" key={i}>
              <span className="stat-card__icon">{s.icon}</span>
              <span className="stat-card__value">{s.value}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Workshops by Tool */}
        <div className="section-block">
          <h2 className="section-block__title">Workshops by Tool</h2>
          <div className="bar-list">
            {BY_TOOL.map((t, i) => (
              <div className="bar-item" key={i}>
                <div className="bar-item__meta">
                  <span className="bar-item__name">{t.name}</span>
                  <span className="bar-item__count">{t.count} workshops</span>
                </div>
                <div className="bar-item__track">
                  <div className="bar-item__fill" style={{ width: `${t.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Workshops Table */}
        <div className="section-block">
          <h2 className="section-block__title">Recent Workshops</h2>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>College</th>
                  <th>Workshop</th>
                  <th>Date</th>
                  <th>Students</th>
                </tr>
              </thead>
              <tbody>
                {RECENT.map((r, i) => (
                  <tr key={i}>
                    <td>{r.college}</td>
                    <td><span className="tag">{r.workshop}</span></td>
                    <td>{r.date}</td>
                    <td><strong>{r.students}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}