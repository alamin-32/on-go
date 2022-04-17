import React from "react";
import { Link} from "react-router-dom";
import "./Servicee.css";

const Service = ({ service }) => {
  // const navigate = useNavigate();
  const { img, details, price, ratings, name } = service;
  // const handleExplore = event => {
  //   navigate("/services");
  // };
  return (
    <div>
      <div className="service-details">
        <img className="w-100" src={img} alt="" />
        <div className="service-area">
          <h1>{name}</h1>
          <p>{details}</p>
          <h3>Price: {price}</h3>
          <p>Ratings: {ratings} Stars</p>
        </div>
        <button className="explore-btn">
          <Link className="explore-more" to="/services">
            Explore More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Service;
