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
        <span className="bookstore-CMS">Bookstore CMS</span>
        <NavLink
          to="/"
          style={navLinkStyles}
        >
          <span className="books">BOOKS</span>
        </NavLink>
        <NavLink
          to="categories"
          style={navLinkStyles}
        >
          <span className="categories">CATEGORIES</span>
        </NavLink>
      </div>
      <button type="submit" aria-label="User" className="oval"><FaUser /></button>
    </section>
  );
}

export default Header;
