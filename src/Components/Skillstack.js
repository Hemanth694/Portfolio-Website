import React from "react";
import Skill from "./Skill";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";

function Skillstack() {
  return (
    <Consumer>
      {(value) => {
        const { skills } = value;
        const finalskillrow = [];
        for (let i = 0; i < skills.length / 2; i++) {
          let skillrow = [];
          skillrow = skills.slice(i * 4, (i + 1) * 4);
          finalskillrow.push(
            <div key={uuid()} className="d-flex justify-content-around py-5">
              {skillrow.map((skill) => (
                <Skill key={uuid()} skill={skill} />
              ))}
            </div>
          );
        }

        return (
          <div className="bg-light w-100 mt-5">
            <div className="container text-center py-5">
              <h1>
                <span className="text-info">Technology</span> Stack
              </h1>
              <h5 className="lead pb-5">
                I Design,Develop,Deliver with these weapons!
              </h5>
              {finalskillrow}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Skillstack;
