import React from "react";
import { Link } from "react-router-dom";

function Blogcard(props) {
  const { id, title, excerpt, imageUrl } = props.blog;
  return (
    <div className="card shadow">
      <img className="card-img-top" src={imageUrl} alt="blog-1" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{excerpt}</p>
        <Link to={`/blog`} className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default Blogcard;
