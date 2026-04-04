import React, { useState } from 'react';
import './EventsPage.css';

const EVENTS = [
  {
    id: 1,
    title: 'SciPy India 2019',
    type: 'Conference',
    status: 'past',
    date: 'November 29–30, 2019',
    location: 'IIT Bombay, Mumbai',
    description: 'International conference on Python for education and scientific computing, hosted at IIT Bombay.',
    link: 'https://scipy.in/2019',
    tools: ['Python', 'Scilab'],
  },
  {
    id: 2,
    title: 'SciPy India 2018',
    type: 'Conference',
    status: 'past',
    date: 'December 21–22, 2018',
    location: 'IIT Bombay, Mumbai',
    description: 'Annual conference bringing together Python and scientific computing enthusiasts from across India.',
    link: 'https://scipy.in/2018',
    tools: ['Python'],
  },
  {
    id: 3,
    title: 'National Conference on Chemical Process Simulation',
    type: 'Conference',
    status: 'past',
    date: 'November 26, 2018',
    location: 'IIT Bombay, Mumbai',
    description: 'National conference cum job fair focused on chemical process simulation using open source tools.',
    link: '#',
    tools: ['DWSIM', 'OpenModelica'],
  },
  {
    id: 4,
    title: 'Arduino Day 2026',
    type: 'Workshop',
    status: 'upcoming',
    date: 'April 2026',
    location: 'Online',
    description: 'Celebrating Arduino Day with hands-on sessions, demos, and community projects using FLOSS-Arduino.',
    link: 'https://arduinoday26.fossee.in/',
    tools: ['Arduino'],
  },
];

const TABS = ['upcoming', 'past', 'all'];

export default function EventsPage() {
  const [tab, setTab] = useState('all');

  const filtered = EVENTS.filter(e => tab === 'all' ? true : e.status === tab);

  return (
    <div className="events-page">
      <div className="container">

        <div className="page-header">
          <p className="page-tag">IIT Bombay · FOSSEE</p>
          <h1 className="page-header__title">Events</h1>
          <p className="page-header__sub">
            Conferences, seminars, and hands-on workshops to introduce FLOSS tools to new users.
          </p>
        </div>

        {/* Tabs */}
        <div className="events-tabs">
          {TABS.map(t => (
            <button
              key={t}
              className={`events-tab ${tab === t ? 'events-tab--active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)} Events
            </button>
          ))}
        </div>

        {/* No upcoming */}
        {tab === 'upcoming' && filtered.length === 0 && (
          <div className="events-empty">
            <span>📅</span>
            <p>No events currently scheduled.</p>
            <p className="events-empty__sub">Check back soon for upcoming workshops and conferences.</p>
          </div>
        )}

        {/* Events Grid */}
        <div className="events-grid">
          {filtered.map(event => (
            <div className={`event-card event-card--${event.status}`} key={event.id}>
              <div className="event-card__top">
                <span className={`event-badge event-badge--${event.status}`}>
                  {event.status === 'upcoming' ? '🔔 Upcoming' : '✅ Past'}
                </span>
                <span className="event-type">{event.type}</span>
              </div>
              <h3 className="event-card__title">{event.title}</h3>
              <p className="event-card__desc">{event.description}</p>
              <div className="event-card__meta">
                <span>📅 {event.date}</span>
                <span>📍 {event.location}</span>
              </div>
              <div className="event-card__tools">
                {event.tools.map(t => <span className="tool-tag" key={t}>{t}</span>)}
              </div>
              <a href={event.link} target="_blank" rel="noreferrer" className="event-card__btn">
                View Details →
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}