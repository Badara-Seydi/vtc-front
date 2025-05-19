import React from 'react';
import '../styles/About.css';
import '../styles/MobileMenu.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="overlay" />
        <div className="about-content">
          <h1>À Propos de Nous</h1>
          <p>Professionnels de la route depuis plus de 10 ans. Votre trajet dans le confort et en toute tranquillité est notre priorité.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-text">
          <h2>Notre Engagement</h2>
          <p>
            Forts de plus d'une décennie d’expérience dans le transport de personnes, nous mettons notre savoir-faire au service de vos déplacements à Paris et en Île-de-France.
            <br /><br />
            Ponctualité, confort et discrétion sont les piliers de notre service. Que ce soit pour une mise à disposition, un transfert aéroport, un déplacement professionnel ou une visite privée de Paris, nous vous garantissons une expérience haut de gamme.
          </p>
        </div>
        <div className="about-image">
          <img src="https://grupoacontrans.com.br/wp-content/uploads/2022/07/img-1.jpg" alt="Chauffeur VTC" />
        </div>
      </section>

      <section className="about-gallery">
        <h2>Notre Univers</h2>
        <div className="gallery-grid">
          <img src="https://thumbs.dreamstime.com/b/tour-eiffel-au-lever-de-soleil-paris-france-72534907.jpg" alt="Paris Nuit" />
          <img src="https://th.bing.com/th/id/OIP.0KZVEwQjWxcYiBHbNcSKvQHaEm?rs=1&pid=ImgDetMain" alt="Voiture Premium" />
          <img src="https://limo.global/wp-content/uploads/2023/07/Comment-devenir-chauffeur-VTC-1024x683.jpg" alt="Chauffeur Pro" />
        </div>
      </section>
    </div>
  );
}

export default About;
