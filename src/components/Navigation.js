import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
    <div className="nav-wrapper">
      <nav className="nav">
        <Link className="nav-item" to="/">Today's Movie</Link>
        <Link className="nav-item" to="/about">Introduce</Link>
      </nav>
    </div>
    </>
  )
}

export default Navigation;