import React from "react";
import { Link } from "react-router-dom";
import "./Servicee.css";

const Service = ({ service }) => {
  // const navigate = useNavigate();
  const { img, details, price, ratings, name } = service;
  // const handleExplore = event => {
  //   navigate("/services");
  // };
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="service-details mb-4">
        <img className="w-100" src={img} alt="" />
        <div className="service-area">
          <h1 className="text-center ">{name}</h1>
          <p>{details}</p>
          <h3>Price: {price}</h3>
          <p>Ratings: {ratings} Stars</p>
        </div>
        <button className="explore-btn">
          <Link className="explore-more" to="/purchase">
            Purchase Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Service;
