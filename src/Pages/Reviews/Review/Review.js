import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, img, comment } = review;
  return (
    <div>
      <div className="review-details">
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
