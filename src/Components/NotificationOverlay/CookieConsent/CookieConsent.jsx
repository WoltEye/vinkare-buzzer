import React, { useState } from 'react';
import './CookieConsent.css';

export default function CookieConsent({ textColor, bgColor, setShowNotification, setCookieConsent }) {
  const [ denyHover, setDenyHover ] = useState(false);
  const [ acceptHover, setAcceptHover ] = useState(false);

  const handleAccept = () => {
    setCookieConsent(true);
    localStorage.setItem('cookieConsent', true);
    setShowNotification(false);
  }

  return (
    <>
    <h2>Ilmoitus</h2>
    <p>
      Teema tallennetaan ainoastaan selaimen muistiin, painamalla tallenna teema annat sovellukselle luvan käyttää evästeitä.
      Asetukset ovat tallennettuna ainoastaan sillä tietokoneella ja selaimella jolla ne ovat tallennettu. Jos tyhjennät
      selaimen evästeet asetukset poistuvat samalla, jotkut selaimet saattavat poistaa asetukset automaattisesti muistista.
    </p>
    <div className='cookie-consent button-container'>
      <button 
      className='consent-button cookie-consent'
      onMouseOver={() => { setAcceptHover(true) }}
      onMouseOut={() => { setAcceptHover(false) }}
      onClick={handleAccept}
      style={acceptHover ? {color: textColor, background: bgColor, border: `2px solid ${bgColor}`} 
            : {color: bgColor, background: textColor, border: `2px solid ${bgColor}`} }>
            Hyväksy Evästeet
     </button>
     <button 
      className='deny-button cookie-consent'
      onMouseOver={() => { setDenyHover(true) }}
      onMouseOut={() => { setDenyHover(false) }}
      onClick={() => { setShowNotification(false) }}
      style={denyHover ? {color: textColor, background: bgColor, border: `2px solid ${bgColor}`} 
            : {color: bgColor, background: textColor, border: `2px solid ${bgColor}`} }>
            Älä Tallenna
     </button>
   </div>
   </>
  )
}