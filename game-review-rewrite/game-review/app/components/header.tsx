"use client";
import { useEffect } from "react";
import { useReviews } from "../state/reviewsContext";

export default function Header() {
  const { isModalOpen, setIsModalOpen } = useReviews();

  return (
    <nav className="w-full h-24 flex flex-row justify-center items-center text-center">
      <div className="w-1/3">{/* DUMMY */}</div>
      <h1 className="text-3xl w-1/3">GAMER</h1>
      <button
        className="w-1/3 p-4 h-10"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        Add review
      </button>
    </nav>
  );
}
