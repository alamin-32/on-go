import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <div className="reviews-area">
      <h1 className="reviews-text fw-bolder">Client reviews</h1>
      <div className="reviews-container">
        <div className="reviews-details-container row">
          {reviews.map(review => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
