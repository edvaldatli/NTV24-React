import { useReviews } from "../state/reviewsContext";
import Review from "./review";
import ModalOverlay from "./modalOverlay";
import ReviewModal from './reviewModal'

import { getAllReviews } from "../data/data";
import { MouseEventHandler, useEffect, useState } from "react";

import Image from 'next/image'

import type { ReviewType } from "../types/types";


export default function Reviews() {
    const [modalContent, setModalContent] = useState<ReviewType>();
    const { isReviewModalOpen, setisReviewModalOpen } = useReviews()
    const { reviews, setReviews } = useReviews();


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

