import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" class="navbar-item">
          <h3 className="title is-3">TTT</h3>
        </Link>

        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setMenuIsOpen(x => !x)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${menuIsOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>

          <Link to="/about" className="navbar-item">About</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary">
                <strong>Sign up</strong>
              </button>
              <button className="button is-light">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
