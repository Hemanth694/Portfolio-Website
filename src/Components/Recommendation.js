import React from "react";
import Recommendationcard from "./Recommendationcard";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";

function Recommendation() {
  return (
    <Consumer>
      {(value) => {
        const { recommendations } = value;
        return (
          <div className="container-fluid my-5">
            <div className="row py-5 text-center d-flex flex-nowrap overflow-auto scrollbar">
              {recommendations.map((recommendation) => (
                <Recommendationcard
                  key={uuid()}
                  recommendation={recommendation}
                />
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Recommendation;
