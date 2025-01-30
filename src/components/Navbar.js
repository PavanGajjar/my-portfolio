import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

export default function Navbar() {
  return (
    <nav className="navbar-nav">
      {/* Logo section of the navbar */}
      <div className="navbar-logo">
        <div className="navbar-logo-square">PG</div>
        <span className="navbar-logo-text">Portfolio</span>
      </div>
      <div>
        {/* Navigation links */}
        <Link to="/home">About Me</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </nav>
  );
}
