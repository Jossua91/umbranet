import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import JobOffersPage from './pages/JobOffersPage/JobOffersPage';
import ProfilesPage from './pages/ProfilesPage/ProfilesPage';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
          <Route path="/offres-emploi" element={<JobOffersPage />} />
          {/* Le chemin de la route est correct, il fallait juste ajuster le lien dans le Navbar */}
=======
          <Route path="/missions" element={<JobOffersPage />} />
>>>>>>> ca75cf013b77f82cd352c4b9b7041321602dc4f2
          <Route path="/profils" element={<ProfilesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;