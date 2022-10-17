import React from "react";

function Notfound() {
  return (
    <div className="container py-5 my-5">
      <div className="display-4 mt-5 pt-5">
        Oops!<span className="text-danger">404 not found</span>
      </div>
      <div className="lead">Sorry could'nt find what you're looking for..</div>
    </div>
  );
}

export default Notfound;
