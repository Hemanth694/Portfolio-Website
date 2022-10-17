import React from "react";
import Blogcard from "./Blogcard";
import { v4 as uuid } from "uuid";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        return (
          <div className="className container text-center py-5">
            <h1 className="font-weight-light">
              My<span className="text-info"> Blogs</span>
            </h1>
            <h4 className="lead">Take a Look at My Blogs</h4>
            <div key={uuid()} className="row my-5 pt-3">
              {blogs.slice(0, 3).map((blog) => (
                <div className="col-12 col-md-4">
                  <Blogcard blog={blog} />
                </div>
              ))}
            </div>
            <Link to="/allblogs" className="text-dark text-right">
              <h5>
                See My Blogs
                <i className="fas fa-arrow-right allign-middle"></i>
              </h5>
            </Link>
          </div>
        );
      }}
    </Consumer>
  );
}

export default Blog;
