import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../scss/Header.scss';

function Header() {
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'none' : 'none',
  });

  return (
    <section className="headerWrapper">
      <div className="headerContainer">
        <span className="Bookstore-CMS">Bookstore CMS</span>
        <NavLink
          to="/"
          style={navLinkStyles}
        >
          <span className="BOOKS">BOOKS</span>
        </NavLink>
        <NavLink
          to="/categories"
          style={navLinkStyles}
        >
          <span className="CATEGORIES">CATEGORIES</span>
        </NavLink>
      </div>
      <button type="submit" aria-label="User" className="Oval"><FaUser /></button>
    </section>
  );
}

export default Header;
