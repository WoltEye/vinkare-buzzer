import React from 'react';
import FailedToStart from './FailedToStart/FailedToStart';
import CookieConsent from './CookieConsent/CookieConsent';
import NoThemeFound from './NoThemeFound/NoThemeFound'; 
import './NotificationOverlay.css';

export default function NotificationOverlay({ bgColor, textColor, setShowNotification, type, setCookieConsent }) {
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
            setShowNotification={setShowNotification}/> :
           type === 'cookieConsent' ? 
           <CookieConsent
           bgColor={bgColor}
           textColor={textColor}
           setShowNotification={setShowNotification}
           setCookieConsent={setCookieConsent}/> :
           type === 'noThemeFound' ? 
           <NoThemeFound
           textColor={textColor}
           bgColor={bgColor}
           setShowNotification={setShowNotification}/> :
           <></> 
           }
        </div>
    </div>
    </div>
  )
}