import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import workshops from '../data/workshops';
import './WorkshopDetailPage.css';

export default function WorkshopDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const workshop = workshops.find(w => w.id === parseInt(id));

  if (!workshop) return (
    <div className="detail-notfound container">
      <h2>Workshop not found</h2>
      <Link to="/workshops" className="btn-primary btn-lg">Back to Workshops</Link>
    </div>
  );

  return (
    <div className="detail-page">
      <div className="container">

        <button className="detail-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="detail-card">
          <div className="detail-card__header">
            <span className="detail-icon">{workshop.icon}</span>
            <div>
              <h1 className="detail-title">{workshop.name} Workshop</h1>
              <span className="detail-badge">
                ⏱ {workshop.duration} day{workshop.duration > 1 ? 's' : ''}
              </span>
            </div>
          </div>

          <div className="detail-section">
            <h2 className="detail-section__title">About this Workshop</h2>
            <p className="detail-section__text">{workshop.description}</p>
          </div>

          <div className="detail-section">
            <h2 className="detail-section__title">Terms & Conditions</h2>
            <p className="detail-section__text">{workshop.terms}</p>
          </div>

          <div className="detail-section">
            <h2 className="detail-section__title">What to Expect</h2>
            <ul className="detail-list">
              <li>Hands-on sessions led by IIT Bombay instructors</li>
              <li>Free participation certificates for all attendees</li>
              <li>Study material provided in digital format</li>
              <li>Q&A sessions and doubt resolution</li>
            </ul>
          </div>

          <div className="detail-actions">
            <Link to="/propose" className="btn-primary btn-lg">
              Propose this Workshop
            </Link>
            <Link to="/workshops" className="btn-ghost btn-lg">
              Browse Other Workshops
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}