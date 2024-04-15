"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
} from "react";
// CONTEXT API

type Review = {
  title: string;
  content: string;
  imgpath: string;
  rating: number;
  reviewTitle: string;
  id: string;
};

type ReviewsContextType = {
  reviews: Review[];
  addReview: (newReview: Review) => void;
  deleteReview: (reviewToDelete: Review) => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type Reviews = Review[];

const ReviewsContext = createContext<ReviewsContextType>({
  reviews: [],
  addReview: () => {},
  deleteReview: () => {},
  isModalOpen: true,
  setIsModalOpen: () => {},
});

export const useReviews = () => useContext(ReviewsContext);

export const ReviewsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [reviews, setReviews] = useState<Reviews>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addReview = (newReview: Review) => {
    setReviews((currentReviews) => [...currentReviews, newReview]);
  };

  const deleteReview = ({ id }: Review) => {
    setReviews((currentReviews) =>
      currentReviews.filter((review) => review.id !== id)
    );
  };

  return (
    <ReviewsContext.Provider
      value={{ reviews, addReview, deleteReview, isModalOpen, setIsModalOpen }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};
