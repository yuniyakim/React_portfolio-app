import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.scss';
import logo from '../assets/icons/logo.svg';
import {useMediaQuery} from "react-responsive";

const NavigationBar = () => {
  const isDesktop = useMediaQuery({query: '(min-width: 1040px)'});
  const isMobile = useMediaQuery({query: '(max-width: 1040px)'});

  return (
    <div>
      {isDesktop && <NavigationBarDesktop />}
      {isMobile && <NavigationBarMobile />}
    </div>
  );
}

const NavigationBarDesktop = () => {
  return (
    <div className="navigation">
      <NavLink to="/" className="navigation__link logo">
        <img className="logo__icon" src={logo} alt="logo" />
        <div className="logo__text">Agency</div>
      </NavLink>
      <div className="main-navigation">
        <NavLink to="/about" className="navigation__link">About</NavLink>
        <NavLink to="/services" className="navigation__link">Services</NavLink>
        <NavLink to="/pricing" className="navigation__link">Pricing</NavLink>
        <NavLink to="/blog" className="navigation__link">Blog</NavLink>
      </div>
      <NavLink to="/contact" className="navigation__link navigation__button">
        <div>CONTACT</div>
      </NavLink>
    </div>
  );
}

const NavigationBarMobile = () => {
  return (
    <div className="navigation">
      <NavLink to="/" className="navigation__link logo">
        <img className="logo__icon" src={logo} alt="logo" />
        <div className="logo__text">Agency</div>
      </NavLink>
    </div>
  );
}

export default NavigationBar;