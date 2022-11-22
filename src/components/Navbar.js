import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaCog, FaMicrophone } from 'react-icons/fa';
import coins from '../images/25503.jpg';

const Navbar = () => (
  <div className="nav-container flex">
    <NavLink className="links" to="/">
      <FaArrowLeft />
    </NavLink>
    <div className="logo flex">
      <NavLink className="links" to="/">
        <h1>Crypto-Base</h1>
      </NavLink>
      <img className="bitcoins" src={coins} alt="coins" />
    </div>
    <div className="micro-cog flex">
      <FaMicrophone />
      <FaCog />
    </div>
  </div>

);
export default Navbar;
