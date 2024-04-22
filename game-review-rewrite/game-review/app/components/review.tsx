"use client";
import Image from "next/image";
import { Suspense } from "react";
import type { ReviewType } from "../types/types";

import { useReviews } from "../state/reviewsContext";
import { MouseEventHandler, useState } from "react";
import { deleteReview } from "../data/data";
import ModalOverlay from "./modalOverlay";

type ReviewProps = ReviewType & {
    onClick: MouseEventHandler<HTMLButtonElement>;
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
            throw Error("Failed deleting review");
        }
    }

    return (
        <>
            <div className="flex flex-col w-96 bg-zinc-900 rounded-lg duration-100 transition-transform max-h-96">
                <div className="flex flex-row items-center gap-3 p-4 font-bold">
                    <h1 className="text-3xl mr-auto truncate">{title}</h1>
                    <h3 className="text-nowrap">
                        {rating} <span className="text-xs">rating</span>
                    </h3>
                </div>
                <Suspense fallback={<h1>loading</h1>}>
                    <Image
                        src={imgpath}
                        alt="Image of video game"
                        objectFit="contain"
                        width={616}
                        height={353}
                        className="object-cover h-40 w-auto"
                    ></Image>
                </Suspense>

                <div className="p-4 h-32 overflow-hidden">
                    <h2 className="text-lg font-bold truncate">{reviewTitle}</h2>
                    <p className="italic line-clamp-3">"{content}"</p>
                </div>
                <div className="flex flex-row mt-auto">
                    {editMode && (
                        <button
                            className={`w-1/3 bg-red-500 rounded-bl-lg h-8 transition hover:bg-red-800`}
                            onClick={(event) => handleDelete(event)}
                        >
                            Delete
                        </button>
                    )}
                    <button
                        className={`w-full bg-blue-500 ${editMode ? "rounded-br-lg" : "rounded-b-lg"
                            } h-8 transition hover:bg-zinc-200 hover:text-black`}
                        onClick={onClick}
                        id={id}
                    >
                        Read more
                    </button>
                </div>
            </div>
        </>
    );
}
