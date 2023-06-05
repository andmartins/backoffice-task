import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logocoop.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="Logo" />
        </Link>
      </div>
      <div className="navbar-menu">
      </div>
    </nav>
  );
};

export default Navbar;
