import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
      <Link className="nav-item" to="/">Home</Link>
      <Link className="nav-item" to="/about">About</Link>
      <Link className="nav-item" to="/detail">Detail</Link>
    </nav>
  )
}

export default Navigation;