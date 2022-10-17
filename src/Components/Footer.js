import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center pb-3"
        style={{ backgroundColor: "black" }}
      >
        <div className="pt-5">
          <h2 className="text-light text-center">
            Interested in working with me??
          </h2>
          <Link to="/contact">
            <button className="btn btn-outline-light btn-lg my-5">
              Lets Talk!
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <h5 className="text-info">More Links To Find ME</h5>
            <Link to="/allblogs" className="text-light d-block">
              Blogs
            </Link>
            <Link to="/" className="text-light d-block">
              Home
            </Link>
            <a href="/" className="text-light d-block">
              Projects
            </a>
            <Link to="/contact" className="text-light d-block">
              Contact ME
            </Link>
            <Link to="/recommendationform" className="text-light">
              Write a recommendation <i className="fas fa-heart text-light"></i>
            </Link>
          </div>
          <div className="col-12 col-md-4 text-light text-justify pt-3">
            <h5>
              This is personal Portfolio website...I have a basic knowledge on
              Python,Mysql and Data structures and Algorithms.. "Explain to me
              again why I shouldn't cheat?" he asked. "All the others do and
              nobody ever gets punished for doing so. I should go about being
              happy losing to cheaters because I know that I don't? That's what
              you're telling me?"
            </h5>
          </div>
          <div className="col-12 col-md-4">
            <h5 className="text-light pb-3">Social</h5>
            <a href="http://facebook.com/">
              <i className="fab fa-facebook text-light h1 d-block"></i>
            </a>
            <a href="http://linkedin.com/">
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a href="http://instagram.com/">
              <i className="fab fa-instagram text-light h1 d-block"></i>
            </a>
          </div>
        </div>
        <div className="text-muted text-center pb-auto">
          <h5>Copyright © Hemanth Potti 2022</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
