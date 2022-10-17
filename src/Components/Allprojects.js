import React from "react";
import { Consumer } from "../context";
import { v4 as uuid } from "uuid";
import Projectcard from "./Projectcard";

function Allprojects() {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        return (
          <div className="container text-center">
            <h1 className="text-center fonr-weight-light my-5 py-5">
              All my <span className="text-info">Projects</span>
            </h1>
            <div className="row my-5 py-5">
              {projects.slice(0, 6).map((project) => (
                <div key={uuid()} className="col-12 col-md-6">
                  <Projectcard project={project} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Allprojects;
