import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WorkshopsPage from './pages/WorkshopsPage';
import WorkshopDetailPage from './pages/WorkshopDetailPage';
import ProposePage from './pages/ProposePage';
import Statisticspage from './pages/Statisticspage';
import InternshipsPage from './pages/InternshipsPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import './App.css';
import NotFoundPage from './pages/NotFoundPage';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: 'var(--nav-h)' }}>
        <Routes>
          <Route path="/"              element={<HomePage />} />
          <Route path="/login"         element={<LoginPage />} />
          <Route path="/register"      element={<RegisterPage />} />
          <Route path="/workshops"     element={<WorkshopsPage />} />
          <Route path="/workshops/:id" element={<WorkshopDetailPage />} />
          <Route path="/propose"       element={<ProposePage />} />
          <Route path="/statistics"    element={<Statisticspage />} />
          <Route path="/internships"   element={<InternshipsPage />} />
          <Route path="/events"        element={<EventsPage />} />
          <Route path="/about"         element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
