import { useReviews } from "../state/reviewsContext";
import Review from "./review";
import ModalOverlay from "./modalOverlay";
import ReviewModal from './reviewModal'

import { getAllReviews } from "../data/data";
import { MouseEventHandler, useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'

import Image from 'next/image'

import type { ReviewType } from "../types/types";

const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 }
};


export default function Reviews() {
    const [modalContent, setModalContent] = useState<ReviewType>({
        id: '0',
        title: 'not initialized',
        content: 'not initialized',
        reviewTitle: 'notInitialized',
        rating: 0,
        imgpath: ''
    });
    const { isReviewModalOpen, setisReviewModalOpen } = useReviews()
    const { reviews, setReviews } = useReviews();


    function handleModalClick(e: React.MouseEvent) {
        if (e.target.id === 'delete') {
            return
        }
        const findId = e.currentTarget.id;
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

            <AnimatePresence>
                {isReviewModalOpen &&
                    (
                        <motion.div variants={variants} initial="hidden" animate="visible" exit="exit" key="modal">
                            <ModalOverlay>
                                <ReviewModal title={modalContent.title} reviewTitle={modalContent.reviewTitle} content={modalContent.content} imgpath={modalContent.imgpath} rating={modalContent.rating} id={modalContent.id} />
                            </ModalOverlay>
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </>
    );
}

