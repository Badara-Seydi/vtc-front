import React from 'react';
import '../styles/Avis.css';
import '../styles/MobileMenu.css';
import { Helmet } from 'react-helmet-async';

const avisData = [
    {
      nom: "Claire D.",
      ville: "Paris 17ᵉ",
      note: 5,
      commentaire: "Service au top ! Mon chauffeur était ponctuel, véhicule impeccable.",
    },
    {
      nom: "Karim L.",
      ville: "Boulogne-Billancourt",
      note: 5,
      commentaire: "Très pro, j’ai été pris en charge à l’heure avec beaucoup de courtoisie.",
    },
    {
      nom: "Nathalie M.",
      ville: "Montreuil",
      note: 4,
      commentaire: "Un peu de retard à cause du trafic, mais très bon service dans l’ensemble.",
    },
    {
      nom: "Jean R.",
      ville: "Paris 5ᵉ",
      note: 5,
      commentaire: "Excellente expérience, je recommande vivement.",
    },
    {
      nom: "Sophie T.",
      ville: "Versailles",
      note: 5,
      commentaire: "Trajet avec mes deux enfants jusqu'à l’aéroport : chauffeur très prévenant, sièges enfants installés, parfait !",
    },
    {
      nom: "Julien V.",
      ville: "La Défense",
      note: 5,
      commentaire: "Très bon service pour mes déplacements professionnels réguliers. Discrétion et ponctualité.",
    },
    {
      nom: "Emily S.",
      ville: "London, UK",
      note: 5,
      commentaire: "Great ride! The driver spoke English and was very professional. A perfect way to explore Paris safely.",
    },
    {
      nom: "Thomas L.",
      ville: "Lyon",
      note: 4,
      commentaire: "En visite à Paris, des amis m'ont recommandé vos service, j’ai beaucoup apprécié le confort et la disponibilité du chauffeur. Manque plus que le miracle pour les bouchons",
    }
  ];

const Avis = () => {
  return (
    <div className="avis-container">
      <Helmet>
        <title>Avis Clients - VTC Paris</title>
        <meta name="description" content="Découvrez les avis de nos clients sur nos services de transport privé VTC à Paris." />
      </Helmet>
      <h1 className="avis-title">Avis de nos clients</h1>
      <p className="avis-note-moyenne">⭐ 4.9 / 5 – basé sur 132 avis clients</p>
      <p className="avis-source">Avis issus de retours clients reçus par mail, téléphone ou formulaire.</p>
      <div className="avis-list">
        {avisData.map((avis, index) => (
          <div key={index} className="avis-card">
            <div className="avis-header">
              <div className="avatar">{avis.nom.charAt(0)}</div>
              <div>
                <h3>{avis.nom}</h3>
                <p className="ville">{avis.ville}</p>
              </div>
            </div>
            <div className="etoiles">
              {"⭐".repeat(avis.note)}
              {"☆".repeat(5 - avis.note)}
            </div>
            <p className="commentaire">"{avis.commentaire}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avis;
