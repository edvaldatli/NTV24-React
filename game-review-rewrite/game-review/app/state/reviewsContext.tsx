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
  isAddReviewModalOpen: boolean;
  setisAddReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isReviewModalOpen: boolean;
  setisReviewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};

type Reviews = ReviewType[];

const ReviewsContext = createContext<ReviewsContextType>({
  reviews: [],
  addReviewLocal: () => { },
  setReviews: () => { },
  deleteReviewLocal: () => { },
  isAddReviewModalOpen: false,
  setisAddReviewModalOpen: () => { },
  isReviewModalOpen: false,
  setisReviewModalOpen: () => { },
  openModal: () => { },
  closeModal: () => { },
  editMode: false,
  setEditMode: () => { },
});

export const useReviews = () => useContext(ReviewsContext);

export const ReviewsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [isAddReviewModalOpen, setisAddReviewModalOpen] =
    useState<boolean>(false);
  const [isReviewModalOpen, setisReviewModalOpen] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);

  const addReviewLocal = (newReview: ReviewType) => {
    setReviews((currentReviews) => [newReview, ...currentReviews]);
  };

  const deleteReviewLocal = ({ id }: ReviewType) => {
    setReviews((currentReviews) =>
      currentReviews.filter((review) => review.id !== id)
    );
  };

  const closeModal = () => {
    setisAddReviewModalOpen(false);
    setisReviewModalOpen(false);
  };

  const openModal = () => {
    setisAddReviewModalOpen(true);
    setisReviewModalOpen(true);
  };

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        setReviews,
        addReviewLocal,
        deleteReviewLocal,
        isAddReviewModalOpen,
        setisAddReviewModalOpen,
        isReviewModalOpen,
        setisReviewModalOpen,
        closeModal,
        openModal,
        editMode,
        setEditMode,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};
