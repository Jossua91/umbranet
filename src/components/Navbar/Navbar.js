import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Umbranet
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Accueil
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/offres-emploi" className="navbar-link">
              Offres d'emploi
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
