import React from 'react';
import { Link } from 'react-router-dom';
import 'Navigation.css';

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <h1>Bookstore CMS</h1>
      <ul className="nav-list">
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
  )
}