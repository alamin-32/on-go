import React from "react";
import error from "../../images/error.jpg";
import './NotFound.css'

const NotFound = () => {
  return (
    <div>
      <img className="not-found" src={error} alt="" />
    </div>
  );
};

export default NotFound;
