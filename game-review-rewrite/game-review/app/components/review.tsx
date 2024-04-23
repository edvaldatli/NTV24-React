"use client";
import Image from "next/image";
import { Suspense } from "react";
import type { ReviewType } from "../types/types";

import { useReviews } from "../state/reviewsContext";
import { MouseEventHandler, useState } from "react";
import { deleteReview } from "../data/data";
import ModalOverlay from "./modalOverlay";
import { motion, AnimatePresence } from 'framer-motion'

type ReviewProps = ReviewType & {
    onClick: MouseEventHandler<HTMLButtonElement> & MouseEventHandler<HTMLDivElement>;
};

export default function Review({
    id,
    title,
    content,
    rating,
    imgpath,
    reviewTitle,
    onClick,
}: ReviewProps) {
    const { deleteReviewLocal, editMode } = useReviews();

    async function handleDelete(event: React.MouseEvent) {
        const data: ReviewType = {
            id,
            title,
            content,
            rating,
            imgpath,
            reviewTitle,
        };
        try {
            const res = await deleteReview(id);
            deleteReviewLocal(data);
        } catch (error) {
            console.error("Failed deleting review");
        }
    }

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 100, y: 0 }}
            >
                <div className="flex flex-col w-96 bg-zinc-900 rounded-lg duration-100 transition-transform max-h-96" onClick={onClick} id={id}>
                    <div className="flex flex-row items-center gap-3 p-4 font-bold">
                        <h1 className="text-lg font-extrabold mr-auto truncate">{title}</h1>
                        <h3 className="text-nowrap">
                            {rating} <span className="text-xs">rating</span>
                        </h3>
                    </div>
                    <Suspense fallback={<h1>loading</h1>}>
                        <Image
                            src={imgpath}
                            alt="Image of video game"
                            width={616}
                            height={353}
                            className="object-cover h-40 w-auto"
                        ></Image>
                    </Suspense>

                    <div className="p-4 h-32 overflow-hidden">
                        <h2 className="text-lg font-bold truncate">{reviewTitle}</h2>
                        <p className="italic line-clamp-3">"{content}"</p>
                    </div>
                    <div className="flex flex-row">
                        <AnimatePresence>
                            {editMode && (
                                <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 100, x: 0 }}>
                                    <button
                                        id="delete"
                                        className={`bg-red-500 rounded-bl-lg h-8 transition-colors hover:bg-red-800 px-4`}
                                        onClick={(event) => handleDelete(event)}
                                    >
                                        Delete
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <button
                            className={`w-full bg-blue-500 ${editMode ? "rounded-br-lg" : "rounded-b-lg"
                                } h-8 transition-colors hover:bg-zinc-200 hover:text-black`}
                            onClick={onClick}
                            id={id}
                        >
                            Read more
                        </button>

                    </div>
                </div>
            </motion.div>
        </>
    );
}
