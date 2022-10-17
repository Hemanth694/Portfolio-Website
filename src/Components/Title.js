import React from "react";
import Hemanth from "../Pics/dude.png";

function Title(props) {
  const { name, text } = props;
  return (
    <div className="container mt-5">
      <div className="row text-center align-items-center py-5">
        <div className="col-12 col-md-6">
          <img
            className="image-fluid rounded-circle w-75"
            src={Hemanth}
            alt="Hemanth"
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="text-weight-light" style={{ fontSize: "50px" }}>
            Hi..I am <span className="text-info">{name}</span>
            <h4 className="font-weight-light">{text}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
