"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
// CONTEXT API

import type { ReviewType } from "../types/types";

type ReviewsContextType = {
  reviews: ReviewType[];
  addReviewLocal: (newReview: ReviewType) => void;
  setReviews: (reviews: ReviewType[]) => void;
  deleteReviewLocal: (reviewToDelete: ReviewType) => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
};

type Reviews = ReviewType[];

const ReviewsContext = createContext<ReviewsContextType>({
  reviews: [],
  addReviewLocal: () => {},
  setReviews: () => {},
  deleteReviewLocal: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  openModal: () => {},
  closeModal: () => {},
});

export const useReviews = () => useContext(ReviewsContext);

export const ReviewsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addReviewLocal = (newReview: ReviewType) => {
    console.log("Add Review ran inside reviews context");
    setReviews((currentReviews) => [newReview, ...currentReviews]);
  };

  const deleteReviewLocal = ({ id }: ReviewType) => {
    setReviews((currentReviews) =>
      currentReviews.filter((review) => review.id !== id)
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("Modal closed");
  };

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Modal opened");
  };

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        setReviews,
        addReviewLocal,
        deleteReviewLocal,
        isModalOpen,
        setIsModalOpen,
        closeModal,
        openModal,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};
