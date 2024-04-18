import { useReviews } from "../state/reviewsContext";
import Review from "./review";
import ModalOverlay from "./modalOverlay";

import { getAllReviews } from "../data/data";
import { MouseEventHandler, useEffect, useState } from "react";

import Image from "next/image";

import type { ReviewType } from "../types/types";

export default function Reviews() {
  const { isReviewModalOpen, setisReviewModalOpen } = useReviews();
  const [modalContent, setModalContent] = useState<ReviewType>();

  const { reviews, setReviews } = useReviews();

  function ReviewModal({
    id,
    title,
    reviewTitle,
    content,
    imgpath,
    rating,
  }: ReviewType) {
    console.log("Review modal");
    return (
      <div className="flex flex-col justify-center items-center gap-8 text-gray-200 max-w-xl">
        <div className="flex flex-row justify-around items-center w-full bg-neutral-900 rounded-full px-8 py-2">
          <h2 className="text-3xl font-bold w-full">{title}</h2>
          <h3 className=" font-bold text-right text-nowrap">
            <span className="text-2xl">{rating}</span>/5 rating
          </h3>
        </div>
        <Image
          src={imgpath}
          alt="Image of game"
          width={400}
          height={400}
          className="rounded-md w-full"
        ></Image>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-center">{reviewTitle}</h2>
          <p className="text-lg italic ">{content}</p>
        </div>
      </div>
    );
  }

  function handleModalClick(e: React.MouseEvent) {
    const findId = e.target.id;
    const clickedReview = reviews.filter((review) => review.id === findId);
    setModalContent(clickedReview[0]);
    setisReviewModalOpen(true);
  }

  const fetchReviews = async () => {
    const result = await getAllReviews();
    setReviews(result);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const ReviewCards = reviews.map(
    ({ title, reviewTitle, content, imgpath, rating, id }: ReviewType) => {
      return (
        <>
          <Review
            id={id}
            title={title}
            reviewTitle={reviewTitle}
            content={content}
            imgpath={imgpath}
            rating={rating}
            key={id}
            onClick={handleModalClick}
          />
        </>
      );
    }
  );

  return (
    <>
      {isReviewModalOpen && (
        <ModalOverlay>
          <ReviewModal
            title={modalContent.title}
            reviewTitle={modalContent.reviewTitle}
            content={modalContent.content}
            imgpath={modalContent.imgpath}
            rating={modalContent.rating}
            id={modalContent.id}
          />
        </ModalOverlay>
      )}
      <div className="flex flex-wrap gap-4 justify-center">{ReviewCards}</div>
    </>
  );
}
