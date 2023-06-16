import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import { FaUser } from 'react-icons/fa';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav-bar d-flex">
      <a className="nav-brand" href="#/">Bookstore CMS</a>
      <ul className="nav-list d-flex">
        <li><Link className={isActive('/') ? 'activeLink' : ''} to="/">Books</Link></li>
        <li><Link className={isActive('/categories') ? 'activeLink' : ''} to="/categories">Categories</Link></li>
      </ul>
      <button type="button" className="icon-button">
        <span className="material-icons primary-color"><FaUser className="profile" /></span>
      </button>
    </nav>
  );
}
