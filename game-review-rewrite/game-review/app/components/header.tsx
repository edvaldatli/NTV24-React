"use client";
import { useEffect } from "react";
import { useReviews } from "../state/reviewsContext";

export default function Header() {
  const { isModalOpen, setIsModalOpen, openModal, closeModal } = useReviews();

  useEffect(() => {
    console.log("Modal state in Header:", isModalOpen);
  }, [isModalOpen]);

  return (
    <nav className="w-full h-24 flex flex-row justify-center items-center text-center">
      <div className="w-1/3">{/* DUMMY */}</div>
      <h1 className="text-3xl w-1/3">GAMER</h1>
      <button
        className="w-1/3 p-4 h-10"
        onClick={() => {
          openModal();
        }}
      >
        Add review
      </button>
    </nav>
  );
}
