import React from "react";

function Recommendationcard(props) {
  const { name, company, designation, message } = props.recommendation;
  return (
    <div className="col-12 col-md-4">
      <div className="card shadow h-100">
        <div className="card-body">
          <h4 className="card-text">{message}</h4>
          <p className="card-text secondary-text mb-0">{name}</p>
          <p className="card-text secodary-text">
            {designation} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recommendationcard;
