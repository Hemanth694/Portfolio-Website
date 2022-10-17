import React from "react";
import { Consumer } from "../context";
import ReactMarkdown from "react-markdown";

function Projectpage(props) {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        const id = props.match.params.id;
        const { imageUrl, title, body } = project;
        const project = projects.filter((project) => project.id == id(0));
        return (
          <div className="container py-5 my-5 text-center">
            <div className="justify-content-center">
              <img src={imageUrl} alt={title}></img>
            </div>
            <div className="text-center">
              <h1 className="font-weight-light my-5">{title}</h1>
            </div>
            <ReactMarkdown source={body} />
          </div>
        );
      }}
    </Consumer>
  );
}

export default Projectpage;
