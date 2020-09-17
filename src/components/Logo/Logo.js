import React from 'react';
import spaceLogo from '../../assets/images/space-logo.png';
import './Logo.css';

const Logo = () => (
  <div className="Logo">
    <img src={spaceLogo} alt="MyBurger" />
    <p className='LogoText'>Space-TV</p>
  </div>
);

export default Logo;