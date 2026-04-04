import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import workshops from '../data/workshops';
import './WorkshopsPage.css';

export default function WorkshopsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = workshops.filter(w => {
    const matchSearch = w.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === 'all' ? true :
      filter === '1'   ? w.duration === 1 :
      filter === '2'   ? w.duration === 2 :
      filter === '3'   ? w.duration >= 3  : true;
    return matchSearch && matchFilter;
  });

  return (
    <div className="workshops-page">
      <div className="container">

        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-header__title">Workshop Types</h1>
          <p className="page-header__sub">
            Browse all available workshops offered by FOSSEE, IIT Bombay
          </p>
        </div>

        {/* Search + Filter Bar */}
        <div className="toolbar">
          <div className="toolbar__search">
            <span className="toolbar__search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search workshops..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search workshops"
            />
          </div>
          <div className="toolbar__filters">
            {['all','1','2','3'].map(f => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'filter-btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : f === '3' ? '3+ Days' : `${f} Day${f==='1'?'':'s'}`}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="results-count">
          Showing <strong>{filtered.length}</strong> workshop{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Cards Grid */}
        {filtered.length === 0 ? (
          <div className="empty-state">
            <span>😕</span>
            <p>No workshops match your search.</p>
            <button className="btn-ghost btn-lg" onClick={() => { setSearch(''); setFilter('all'); }}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="workshops-grid">
            {filtered.map(w => (
              <div className="w-card" key={w.id}>
                <div className="w-card__top">
                  <span className="w-card__icon">{w.icon}</span>
                  <span className="w-card__duration">{w.duration} day{w.duration > 1 ? 's' : ''}</span>
                </div>
                <h2 className="w-card__name">{w.name}</h2>
                <p className="w-card__desc">{w.description}</p>
                <Link to={`/workshops/${w.id}`} className="w-card__btn">
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}