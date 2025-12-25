"use client";
import React, { useEffect, useState } from "react";
import ReviewCard from "../Component/cards/ReviewCard";
import ReviewCardLoading from "./ReviewCardLoading";

const ReviewsPage = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((datas) => {
        setReview(datas.reviews);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <ReviewCardLoading></ReviewCardLoading>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center ">
        Total <span className="text-yellow-500">{review.length} </span>
        Foods Found
      </h1>
      <div className=" gap-5 my-5 grid lg:grid-cols-3 grid-cols-1">
        {review.map((data) => (
          <ReviewCard data={data} key={data.id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
