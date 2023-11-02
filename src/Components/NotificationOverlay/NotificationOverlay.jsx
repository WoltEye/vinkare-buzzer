import React, { useState } from 'react';
import FailedToStart from './FailedToStart/FailedToStart';
import CookieConsent from './CookieConsent/CookieConsent';
import './NotificationOverlay.css';

export default function NotificationOverlay({ bgColor, textColor, setShowNotification, type, setCookieConsent }) {
  const [ hover, setHover ] = useState(false);
  return (
    <div className='notification-overlay'>
      <div 
      className='notification-box'
      style={{color: bgColor, background: textColor}}>
        <div className='notification-box-content-container'>
         {
           type === 'failedToStart' ? 
           <FailedToStart
            bgColor={bgColor}
            textColor={textColor}
            setShowNotification={setShowNotification}
            setHover={setHover}
            hover={hover}/> :
           type === 'cookieConsent' ? 
           <CookieConsent
           bgColor={bgColor}
           textColor={textColor}
           setShowNotification={setShowNotification}
           setCookieConsent={setCookieConsent}/> :
           <></> 
           }
        </div>
    </div>
    </div>
  )
}