import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, img, comment } = review;
  return (
    <div className="col-md-6 col-12 col-lg-4">
      <div className="review-details mb-4">
        <img className="review-img" src={img} alt="" />
        <div className="review-area">
          <h1 className="text-center">{name}</h1>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
