import React from 'react';
import NavigationBar from './NavigationBar';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <NavigationBar/>
      <div className="heading">
        <div className="heading__text">Portfolio</div>
        <div className="heading__subtext">Agency provides a full service range including technical skills, design,
          business understanding.
        </div>
      </div>
    </div>
  );
}

export default Header;