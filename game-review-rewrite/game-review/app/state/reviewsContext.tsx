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
  addReview: (newReview: ReviewType) => void;
  setReviews: (reviews: ReviewType[]) => void
  deleteReview: (reviewToDelete: ReviewType) => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
};

type Reviews = ReviewType[];

const ReviewsContext = createContext<ReviewsContextType>({
  reviews: [],
  addReview: () => { },
  setReviews: () => { },
  deleteReview: () => { },
  isModalOpen: false,
  setIsModalOpen: () => { },
  openModal: () => { },
  closeModal: () => { },
});

export const useReviews = () => useContext(ReviewsContext);

export const ReviewsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addReview = (newReview: ReviewType) => {
    setReviews((currentReviews) => [...currentReviews, newReview]);
  };

  const deleteReview = ({ id }: ReviewType) => {
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
        addReview,
        deleteReview,
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
