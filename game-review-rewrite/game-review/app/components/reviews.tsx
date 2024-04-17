import { useReviews } from "../state/reviewsContext";
import Review from "./review";

import { getAllReviews } from "../data/data";
import { useEffect } from "react";

import type { ReviewType } from "../types/types";

export default function Reviews() {
  const { reviews, setReviews } = useReviews();

  const fetchReviews = async () => {
    const result = await getAllReviews();
    setReviews(result);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const ReviewCards = reviews.map(
    ({ title, reviewTitle, content, imgpath, rating, id }: ReviewType) => {
      return (
        <Review
          id={id}
          title={title}
          reviewTitle={reviewTitle}
          content={content}
          imgpath={imgpath}
          rating={rating}
          key={id}
        />
      );
    }
  );

  return (
    <div className="flex flex-wrap gap-4 justify-center">{ReviewCards}</div>
  );
}
