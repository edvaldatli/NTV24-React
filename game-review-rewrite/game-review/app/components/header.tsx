"use client";
import { useEffect } from "react";
import { useReviews } from "../state/reviewsContext";
import Link from "next/link"

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
  }, [isAddReviewModalOpen]);

  return (
    <nav className="w-full h-24 flex flex-row justify-center items-center text-center">
      <div className="flex flex-row justify-end items-center w-1/3">
        <Link href="/top5" className="w-52 h-10 text-center align-middle p-1 bg-slate-200 text-black font-semibold text-lg rounded-full shadow-lg transition hover:scale-x-105 hover:bg-slate-600 hover:text-white duration-75">Top 5 Titles</Link>
      </div>
      <div className="flex flex-row justify-center items-center w-1/3">
        <Link href="/" className="">
          <h1 className="text-4xl font-bold transition hover:bg-white hover:text-black w-44 h-10 rounded-full text-center">GAMER</h1>
        </Link>
      </div>

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
