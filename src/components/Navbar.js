import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction de scroll fluide avec easing
  const smoothScrollToTop = (duration = 700) => {
    const start = window.scrollY;
    const startTime = performance.now();

    function scrollStep(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easing easeInOutCubic
      const easeInOutCubic = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, start * (1 - easeInOutCubic));

      if (elapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    smoothScrollToTop(700);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">VTC</div>

      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="bar top"></span>
        <span className="bar middle"></span>
        <span className="bar bottom"></span>
      </button>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" onClick={handleLinkClick}>Accueil</Link>
        </li>
        <li className={location.pathname === '/a-propos' ? 'active' : ''}>
          <Link to="/a-propos" onClick={handleLinkClick}>À propos</Link>
        </li>
        <li className={location.pathname === '/tarifs' ? 'active' : ''}>
          <Link to="/tarifs" onClick={handleLinkClick}>Tarifs</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </li>
        <li className={location.pathname === '/reservation' ? 'active' : ''}>
          <Link to="/reservation" onClick={handleLinkClick}>Réservation</Link>
        </li>
        <li className={location.pathname === '/pourquoi' ? 'active' : ''}>
          <Link to="/pourquoi" onClick={handleLinkClick}>Pourquoi nous choisir ?</Link>
        </li>
        <li className={location.pathname === '/avis' ? 'active' : ''}>
          <Link to="/avis" onClick={handleLinkClick}>Avis</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
