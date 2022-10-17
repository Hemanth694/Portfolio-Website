import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top bg-white">
      <div className="container">
        <a href="\" className="navbar-brand text-dark font-weight-bold">
          Hemanth Potti
        </a>
        <Link to="/contact" className="ml-auto mx-3">
          <button className="btn btn-outline-info">Contact Me!</button>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarcollapse"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarcollapse"
        >
          <div className="navbar-nav">
            <Link
              to="/allblogs"
              className="nav-item nav-link text-dark h5 mx-1 my-auto"
            >
              Blogs
            </Link>
          </div>
          <div className="navbar-nav">
            <Link
              to="/allprojects"
              className="nav-item nav-link text-dark h5 mx-1 my-auto"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
