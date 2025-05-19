import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pourquoi.css';
function Pourquoi() {
    return (
      <div className="pourquoi">
        <section className="intro-section">
          <div className="overlay" />
          <div className="hero-content">
            <h1>Pourquoi Nous Choisir ?</h1>
            <p>Un service VTC professionnel, humain et fiable — pensé pour ceux qui veulent voyager l’esprit tranquille.</p>
          </div>
        </section>
  
        <section className="avantages-section">
          <div className="avantage-card">
            <h3>🚗 Confort et Calme à Bord</h3>
            <p>
              Notre gamme de véhicule hybrides et électriques vous offre des trajets silencieux, agréables, avec une finition soignée. Idéales pour vos déplacements pro ou privés.
            </p>
          </div>
          <div className="avantage-card">
            <h3>⏱️ Fiabilité & Ponctualité</h3>
            <p>
              Vous êtes attendu, jamais l’inverse. Suivi en temps réel de vos vols et trains pour des trajets parfaitement synchronisés.
            </p>
          </div>
          <div className="avantage-card">
            <h3>📍 Tarif Connu à l’Avance</h3>
            <p>
              Pas de compteur, pas de majoration : vous connaissez le prix dès la réservation. Aucun frais caché, même en cas de bouchons.
            </p>
          </div>
          <div className="avantage-card">
            <h3>👔 Service Humain</h3>
            <p>
              Pas de plateforme anonyme ni d’app impersonnelle. Vous parlez à un professionnel, disponible et à l’écoute.
            </p>
          </div>
          <div className="avantage-card">
            <h3>🧼 Véhicule entretenu & propre</h3>
            <p>
              La voiture est nettoyée chaque jour, et désinfectée régulièrement. L’hygiène fait partie intégrante du service.
            </p>
          </div>
          <div className="avantage-card">
            <h3>📲 Réservation Simple</h3>
            <p>
              Réservation directe en ligne ou par message. Réponse rapide garantie. Confirmation claire, pas de robot.
            </p>
          </div>
        </section>
      </div>
    );
  }
  
  export default Pourquoi;
  