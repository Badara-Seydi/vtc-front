import React, { useEffect } from 'react';
import '../styles/Reservation.css';
import '../styles/MobileMenu.css';

const Reservation = () => {
  useEffect(() => {
    const places = window.places;

    if (places) {
      const departureInput = document.getElementById('departure');
      const destinationInput = document.getElementById('destination');

      places({ container: departureInput });
      places({ container: destinationInput });
    }
  }, []);

  return (
    <div className="reservation-container">
      <h1 className="reservation-title">Réservez votre trajet</h1>
      <form className="reservation-form">
        <label htmlFor="departure">Adresse de départ</label>
        <input type="search" id="departure" name="departure" placeholder="Ex : 12 rue de Rivoli, Paris" />

        <label htmlFor="destination">Adresse d’arrivée</label>
        <input type="search" id="destination" name="destination" placeholder="Ex : Aéroport CDG" />

        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" />

        <label htmlFor="time">Heure</label>
        <input type="time" id="time" name="time" />

        <label htmlFor="passengers">Nombre de passagers</label>
        <input type="number" id="passengers" name="passengers" min="1" max="8" defaultValue="1" />

        <label htmlFor="children">Siège enfant</label>
        <input type="number" id="children" name="children" min="0" max="3" defaultValue="0" />


        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default Reservation;
