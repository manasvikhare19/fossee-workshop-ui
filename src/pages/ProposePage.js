import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import workshops from '../data/workshops';
import './AuthPages.css';

export default function ProposePage() {
  const [form, setForm] = useState({
    workshop_type: '', date: '', audience_count: '', department: '', remarks: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="auth-page">
      <div className="auth-card" style={{ textAlign: 'center', maxWidth: '480px' }}>
        <span style={{ fontSize: '3rem' }}>🎉</span>
        <h2 style={{ margin: '1rem 0 0.5rem' }}>Proposal Submitted!</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Our team will review your request and get back to you within 3–5 working days.
        </p>
        <Link to="/" className="btn-primary btn-lg">Back to Home</Link>
      </div>
    </div>
  );

  return (
    <div className="auth-page" style={{ padding: '3rem 1.5rem' }}>
      <div className="auth-card" style={{ maxWidth: '540px' }}>
        <div className="auth-card__header">
          <span className="auth-card__icon">📋</span>
          <h1 className="auth-card__title">Propose a Workshop</h1>
          <p className="auth-card__sub">Fill in the details to request a workshop at your college</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="workshop_type">Workshop Type</label>
            <select id="workshop_type" name="workshop_type"
              value={form.workshop_type} onChange={handleChange} required>
              <option value="">Select a workshop...</option>
              {workshops.map(w => (
                <option key={w.id} value={w.id}>{w.icon} {w.name} ({w.duration} days)</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input id="date" name="date" type="date"
                value={form.date} onChange={handleChange} required
                min={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="form-group">
              <label htmlFor="audience_count">Expected Attendees</label>
              <input id="audience_count" name="audience_count" type="number"
                placeholder="e.g. 50" min="10" value={form.audience_count}
                onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="department">Department / Branch</label>
            <input id="department" name="department" type="text"
              placeholder="e.g. Computer Science" value={form.department}
              onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="remarks">Additional Remarks</label>
            <textarea id="remarks" name="remarks" rows={4}
              placeholder="Any special requirements or notes..."
              value={form.remarks} onChange={handleChange}
              style={{ resize: 'vertical' }} />
          </div>

          <button type="submit" className="btn-primary btn-lg btn-full">
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  );
}