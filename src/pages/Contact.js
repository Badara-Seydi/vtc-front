import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contactez-nous</h1>

      <section className="contact-form-section">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Votre nom" required />
          <input type="email" name="email" placeholder="Votre email" required />
          <textarea name="message" placeholder="Votre message" rows="5" required />
          <button type="submit">Envoyer</button>
        </form>
      </section>

      <section className="contact-details">
        <h2>Coordonnées</h2>
        <p>📧 Email : <a href="mailto:vtc-paris@gmail.com">vtc-paris@gmail.com</a></p>
        <p>📞 Téléphone : <a href="tel:+33677777777">06 77 77 77 77</a></p>
      </section>
    </div>
  );
};

export default Contact;
