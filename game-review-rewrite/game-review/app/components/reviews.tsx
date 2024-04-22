import { useReviews } from "../state/reviewsContext";
import Review from "./review";
import ModalOverlay from "./modalOverlay";

import { getAllReviews } from "../data/data";
import { MouseEventHandler, useEffect, useState } from "react";

import Image from 'next/image'

import type { ReviewType } from "../types/types";


export default function Reviews() {
    const { isReviewModalOpen, setisReviewModalOpen } = useReviews()
    const [modalContent, setModalContent] = useState<ReviewType>();

    const { reviews, setReviews } = useReviews();

    function ReviewModal({ id, title, reviewTitle, content, imgpath, rating }: ReviewType) {
        return (
            <div className="flex flex-col justify-center items-center gap-4 text-neutral-300 max-w-xl">
                <div className="flex flex-row justify-between items-center w-full rounded-full bg-slate-600 p-4">
                    <h2 className="font-bold text-xl">{title}</h2>
                    <h3 className=" font-bold text-right "><span className="text-lg">{rating}</span> rating</h3>
                </div>
                <div className="flex flex-row gap-2">
                    <Image
                        src={imgpath}
                        alt="Image of game"
                        width={400}
                        height={400}
                        className="rounded-md"
                    />
                </div>
                <h2 className="font-bold text-2xl text-neutral-300">{reviewTitle}</h2>
                <p className="p-4">{content}</p>
            </div>
        )
    }

    function handleModalClick(e: React.MouseEvent) {
        const findId = e.target.id;
        const clickedReview = reviews.filter(review => review.id === findId)
        setModalContent(clickedReview[0])
        setisReviewModalOpen(true)
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
            );
        }
    );

    return (
        <>
            <div className="flex flex-wrap gap-4 justify-center">{ReviewCards}</div>
            {
                isReviewModalOpen &&
                (<ModalOverlay>
                    <ReviewModal title={modalContent.title} reviewTitle={modalContent.reviewTitle} content={modalContent.content} imgpath={modalContent.imgpath} rating={modalContent.rating} id={modalContent.id} />
                </ModalOverlay>)
            }
        </>
    );
}

