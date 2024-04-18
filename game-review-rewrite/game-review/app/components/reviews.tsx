import { useReviews } from "../state/reviewsContext";
import Review from "./review";
import ModalOverlay from "./modalOverlay";

import { getAllReviews } from "../data/data";
import { MouseEventHandler, useEffect, useState } from "react";

import Image from 'next/image'

import type { ReviewType } from "../types/types";


export default function Reviews() {
    const { isModalOpen, setIsModalOpen } = useReviews()
    const [modalContent, setModalContent] = useState<ReviewType>();

    const { reviews, setReviews } = useReviews();

    function ReviewModal({ id, title, reviewTitle, content, imgpath, rating }: ReviewType) {
        return (
            <div className="flex flex-col justify-center items-center gap-2 text-black max-w-xl">
                <div className="flex flex-row justify-between w-full">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <h3 className=" font-bold text-right"><span className="text-2xl">{rating}</span> rating</h3>
                </div>
                <div className="flex flex-row gap-2">
                    <Image
                        src={imgpath}
                        alt="Image of game"
                        width={400}
                        height={400}
                        className="rounded-md"
                    ></Image>

                </div>

                <p className="p-4">{content}</p>
            </div>


        )
    }

    function handleModalClick(e: React.MouseEvent, data) {
        const findId = e.target.id;
        const clickedReview = reviews.filter(review => review.id === findId)
        setModalContent(clickedReview[0])
        setIsModalOpen(true)
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
                    {
                        isModalOpen &&
                        (<ModalOverlay>
                            <ReviewModal title={modalContent.title} reviewTitle={modalContent.reviewTitle} content={modalContent.content} imgpath={modalContent.imgpath} rating={modalContent.rating} id={modalContent.id} />
                        </ModalOverlay>)
                    }
                </>
            );
        }
    );

    return (
        <div className="flex flex-wrap gap-4 justify-center">{ReviewCards}</div>
    );
}

