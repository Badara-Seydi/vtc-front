import React from 'react';
import '../styles/Tarifs.css';
import '../styles/MobileMenu.css';
import { Helmet } from 'react-helmet-async';

const Tarifs = () => {
  return (
    <div className="tarifs-container">
      <Helmet>
        <title>Tarifs VTC Paris - Chauffeur Privé</title>
        <meta name="description" content="Découvrez nos tarifs pour vos trajets VTC à Paris et transferts vers les aéroports. Mise à disposition avec chauffeur privé disponible." />
      </Helmet>
      <h1 className="tarifs-title">Nos Tarifs</h1>

      <section className="tarif-section">
  <h2>Trajets locaux</h2>
  <div className="image-wrapper">
    <img src="https://th.bing.com/th/id/OIP.1XSv8DcyMLXx8lYwXd6-1QHaEo?rs=1&pid=ImgDetMain" alt="Trajets locaux" />
  </div>
  <ul>
    <li><strong>Paris intra-muros :</strong> 30€</li>
    <li><strong>Paris - Petite couronne :</strong> 35€ - 45€</li>
    <li><strong>Paris - Grande couronne :</strong> 50€ - 75€</li>
  </ul>
</section>

<section className="tarif-section">
  <h2>Transferts Aéroports</h2>
  <div className="image-wrapper">
    <img src="/famille.jpg" alt="Transferts Aéroports" />
  </div>
  <ul>
    <li><strong>Paris - Orly / Roissy CDG :</strong> 50€ - 70€</li>
    <li><strong>Paris - Beauvais :</strong> 80€ - 100€</li>
  </ul>
</section>

<section className="tarif-section">
  <h2>Mise à disposition (chauffeur privé)</h2>
  <div className="image-wrapper">
    <img src="https://assets-global.website-files.com/65be04b7a4270c124164d1a2/65be3fe1ae53a965ceeff44a_mise-a-disposition-transport-bretagne.webp" alt="Mise à disposition" />
  </div>
  <ul>
    <li><strong>4 heures :</strong> 175€</li>
    <li><strong>8 heures :</strong> 280€</li>
  </ul>
</section>
    </div>
  );
};

export default Tarifs;
