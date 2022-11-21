import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaCog, FaMicrophone } from 'react-icons/fa';

const Navbar = () => (
  <div className="nav-container flex">
    <NavLink className="links" to="/">
      <FaArrowLeft />
    </NavLink>
    <NavLink className="links" to="/">
      <h1>Crypto-Coin Base</h1>
    </NavLink>
    <FaMicrophone />
    <FaCog />
  </div>

);
export default Navbar;
