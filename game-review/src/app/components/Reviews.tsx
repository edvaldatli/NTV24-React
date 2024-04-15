"use client";
import { useState, useEffect } from "react";

import { fetchReviews, deleteReview } from "../../../utils/data";
import Review from "./Review";
import LoadingIndicator from "../../../utils/LoadingIndicator";

type Review = {
  id: string;
  title: string;
  content: string;
  imgpath: string;
  rating: string;
  reviewTitle: string;
};

type ReviewsData = {
  items: Review[];
};

function Reviews() {
  const [reviews, setReviews] = useState<ReviewsData>({ items: [] });

  useEffect(() => {
    async function getData() {
      const data = await fetchReviews();
      setReviews(data);
    }

    getData();
  }, []);

  function handleDelete(id: string) {
    deleteReview(id)
      .then(() => {
        if (reviews) {
          const newArray = [...reviews.items].filter(
            (review) => review.id !== id
          );
          console.log("New array:", newArray);
          setReviews({ items: newArray });
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  }

  if (!reviews) {
    return <LoadingIndicator />;
  }

  return (
    <div className="flex flex-wrap gap-6 h-full justify-center flex-initial">
      {reviews.items.map(
        ({ id, title, content, imgpath, rating, reviewTitle }: Review) => (
          <Review
            key={id}
            content={content}
            title={title}
            reviewTitle={reviewTitle}
            imgpath={imgpath}
            rating={rating}
            handleDelete={() => handleDelete(id)}
          />
        )
      )}
    </div>
  );
}

export default Reviews;
