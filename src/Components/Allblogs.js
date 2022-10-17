import React from "react";
import { Consumer } from "../context";
import { v4 as uuid } from "uuid";
import Blogcard from "./Blogcard";

function Allblogs() {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        return (
          <div className="container text-center">
            <h1 className="text-center fonr-weight-light my-5 py-5">
              All my <span className="text-info">Blogs</span>
            </h1>
            <div className="row my-5 py-5">
              {blogs.slice(0, 6).map((blog) => (
                <div key={uuid()} className="col-12 col-md-6">
                  <Blogcard blog={blog} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Allblogs;
