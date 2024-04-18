"use client";
import { useEffect } from "react";
import { useReviews } from "../state/reviewsContext";

export default function Header() {
  const {
    isAddReviewModalOpen,
    setisAddReviewModalOpen,
    editMode,
    setEditMode,
  } = useReviews();

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    console.log("Modal state in Header:", isAddReviewModalOpen);
  }, [isAddReviewModalOpen]);

  return (
    <nav className="w-full h-24 flex flex-row justify-center items-center text-center">
      <div className="w-1/3">{/* DUMMY */}</div>
      <h1 className="text-3xl w-1/3">GAMER</h1>
      <div className="flex flex-row items-center gap-4 w-1/3">
        <button
          className="w-52 h-10 items-center bg-slate-200 text-black font-semibold text-lg rounded-full shadow-lg transition hover:scale-x-105 hover:bg-slate-600 hover:text-white duration-75"
          onClick={() => {
            setisAddReviewModalOpen(true);
          }}
        >
          Add review
        </button>
        {!editMode && (
          <button
            className="w-44 h-10 items-center bg-blue-500 text-white font-semibold text-sm rounded-full shadow-lg transition hover:bg-blue-400 hover:text-black duration-75"
            onClick={toggleEditMode}
          >
            Enter edit mode
          </button>
        )}
      </div>
    </nav>
  );
}
