import React, { useEffect, useRef } from "react";
import type { PropsWithChildren } from "react";

import { useReviews } from "../state/reviewsContext";

const ModalOverlay: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { closeModal } = useReviews();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (modalRef.current) {
      modalRef.current.classList.add("opacity-100");
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div ref={modalRef} className="bg-white p-20 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default ModalOverlay;
