import React from "react";
import Projectcard from "./Projectcard";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
function Project() {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        return (
          <div className="className container text-center py-5 w-100">
            <h1 className="font-weight-light">
              My <span className="text-info">Projects</span>
            </h1>
            <h4 className="lead">I build Projects...Just like this website!</h4>
            <div key={uuid()} className="row my-5 pt-3">
              {projects.slice(0, 3).map((project) => (
                <div className="col-12 col-md-4">
                  <Projectcard project={project} />
                </div>
              ))}
            </div>
            <Link to="/allprojects" className="text-dark text-right">
              <h5>
                See My Projects
                <i className="fas fa-arrow-right allign-middle"></i>
              </h5>
            </Link>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Project;
