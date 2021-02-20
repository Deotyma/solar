import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light navigation">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="navigationA">
              <i class="fas fa-sun"></i> Solar System
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link navigationA active"
                  aria-current="page"
                  to={"home"}
                >
                  <span className="navigationA">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navigationA" to={"planets"}>
                  <span className="navigationA">Planets</span>
                </Link>
              </li>
              {/*
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>{" "}
              */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
