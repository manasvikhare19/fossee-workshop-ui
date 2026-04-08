import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
      <h1 style={{ fontSize: '5rem', color: 'var(--accent)' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>Page not found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" style={{
        background: 'var(--accent)',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        fontWeight: '600'
      }}>
        Go back home
      </Link>
    </div>
  );
}