import logo from '../../assets/Logo.jpg'
import React from 'react';

const HRnetLogo = () => {
  return (
    <div className='home_websiteIdentity'>
        <img src={logo} alt='HRnet Logo'/>
        <h1 className='home_mainTitle'>HRnet</h1>
    </div>
  );
}

export default HRnetLogo;
