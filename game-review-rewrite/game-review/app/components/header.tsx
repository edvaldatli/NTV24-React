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
      <div className="w-1/3">
        <button
          className="w-52 h-10 items-center bg-slate-200 text-black font-semibold text-lg rounded-full shadow-lg transition hover:scale-x-105 hover:bg-slate-600 hover:text-white duration-75"
          onClick={() => {
            openModal();
          }}
        >
          Add review
        </button>
      </div>
    </nav>
  );
}
