import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/MobileMenu.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="overlay" />
        <div className="hero-content">
          
          <h1>Chauffeur Privé VTC à Paris</h1>
          <p>Voyagez avec élégance dans la Ville Lumière</p>
          <Link to="/reservation">
          <button className="cta-button">Réserver Maintenant</button>
          </Link>
        </div>
      </section>

      <section className="services">
        <h2>Nos Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src="https://th.bing.com/th/id/R.6e06266420431f8da0249cf627817c13?rik=WDmtS%2b8uAzhT8w&riu=http%3a%2f%2fs3.caradvice.com.au%2fwp-content%2fuploads%2f2015%2f04%2flexus-ish300h-2015-13.jpg&ehk=ELuc6Ae10J5VjMEIJ41UzzPgO3kwcWtIKr4QtvGa0yQ%3d&risl=&pid=ImgRaw&r=0" alt="Berline Luxe" />
            <h3>Berline haut de gamme</h3>
            <p>Confort absolu pour vos trajets professionnels ou privés.</p>
          </div>
          <div className="card">
            <img src="https://www.pariszigzag.fr/wp-content/uploads/2019/05/tour-eiffel-spectacle-paris-zigzag.png" alt="Paris Nuit" />
            <h3>Tout déplacement en Ile de France</h3>
            <p>Paris n'a pas d'heure. Nos trajets non plus. Service VTC 24h/24 -7j/7.</p>
          </div>
          <div className="card">
            <img src="https://th.bing.com/th/id/OIP.Kr46HoF9w785pm0HPBI3NwHaEK?rs=1&pid=ImgDetMain" alt="Transfert aéroport" />
            <h3>Transfert Aéroport</h3>
            <p>Transfert aéroport sans stress, avec élégance.Nous assurons vos trajets 24/7 vers Roissy, Orly et Beauvais</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Besoin d’un chauffeur maintenant ?</h2>
        <p>Réservez en ligne ou contactez-nous pour une demande sur mesure.</p>
        <Link to="/contact">
          <button className="cta-button">Contactez-nous</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
