import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPages.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  // Demo users to simulate login
  const DEMO_USERS = [
    { username: 'manasvi_khare', password: 'manasvi', name: 'Manasvi Khare' },
    { username: 'instructor1',  password: 'demo123', name: 'Priya Mehta'  },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = DEMO_USERS.find(
      u => u.username === form.username && u.password === form.password
    );
    if (user) {
      navigate('/');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-card__header">
          <span className="auth-card__icon">⬡</span>
          <h1 className="auth-card__title">Welcome back</h1>
          <p className="auth-card__sub">Log in to your FOSSEE account</p>
        </div>

        {/* Demo hint */}
        <div className="auth-hint">
          <strong>Demo credentials:</strong> manasvi_khare / manasvi
        </div>

        {error && (
          <div className="auth-error" role="alert">{error}</div>
        )}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="btn-primary btn-lg btn-full">
            Log in
          </button>
        </form>

        <div className="auth-card__footer">
          <Link to="/register">Forgot password?</Link>
          <span>·</span>
          <span>New here? <Link to="/register">Sign up</Link></span>
        </div>

      </div>
    </div>
  );
}