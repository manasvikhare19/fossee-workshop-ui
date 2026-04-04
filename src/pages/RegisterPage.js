import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPages.css';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '',
    phone: '', college: '', username: '',
    password: '', confirm_password: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const e = {};
    if (!form.first_name.trim()) e.first_name = 'Required';
    if (!form.last_name.trim())  e.last_name  = 'Required';
    if (!form.email.includes('@')) e.email    = 'Enter a valid email';
    if (form.phone.length < 10)  e.phone      = 'Enter a valid phone number';
    if (!form.college.trim())    e.college    = 'Required';
    if (form.username.length < 4) e.username  = 'Minimum 4 characters';
    if (form.password.length < 6) e.password  = 'Minimum 6 characters';
    if (form.password !== form.confirm_password) e.confirm_password = 'Passwords do not match';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSuccess(true);
    setTimeout(() => navigate('/login'), 2000);
  };

  if (success) return (
    <div className="auth-page">
      <div className="auth-card" style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '3rem' }}>✅</span>
        <h2 style={{ margin: '1rem 0 0.5rem' }}>Account Created!</h2>
        <p style={{ color: 'var(--text-muted)' }}>Redirecting you to login...</p>
      </div>
    </div>
  );

  return (
    <div className="auth-page" style={{ padding: '3rem 1.5rem' }}>
      <div className="auth-card" style={{ maxWidth: '560px' }}>
        <div className="auth-card__header">
          <span className="auth-card__icon">⬡</span>
          <h1 className="auth-card__title">Create Account</h1>
          <p className="auth-card__sub">Register as a workshop coordinator</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input id="first_name" name="first_name" type="text"
                placeholder="Manasvi" value={form.first_name} onChange={handleChange} />
              {errors.first_name && <span className="field-error">{errors.first_name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input id="last_name" name="last_name" type="text"
                placeholder="Khare" value={form.last_name} onChange={handleChange} />
              {errors.last_name && <span className="field-error">{errors.last_name}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email"
              placeholder="manasvi.23bce10232@vitbhopal.ac.in" value={form.email} onChange={handleChange} />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel"
                placeholder="8349141735" value={form.phone} onChange={handleChange} />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="college">College</label>
              <input id="college" name="college" type="text"
                placeholder="VIT Bhopal" value={form.college} onChange={handleChange} />
              {errors.college && <span className="field-error">{errors.college}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text"
              placeholder="manasvi_khare" value={form.username} onChange={handleChange} />
            {errors.username && <span className="field-error">{errors.username}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password"
                placeholder="Min 6 characters" value={form.password} onChange={handleChange} />
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input id="confirm_password" name="confirm_password" type="password"
                placeholder="Repeat password" value={form.confirm_password} onChange={handleChange} />
              {errors.confirm_password && <span className="field-error">{errors.confirm_password}</span>}
            </div>
          </div>

          <button type="submit" className="btn-primary btn-lg btn-full">
            Create Account
          </button>
        </form>

        <div className="auth-card__footer">
          <span>Already have an account? <Link to="/login">Log in</Link></span>
        </div>
      </div>
    </div>
  );
}