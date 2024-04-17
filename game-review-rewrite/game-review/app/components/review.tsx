"use client";
import Image from "next/image";
import type { ReviewType } from "../types/types";

import { useReviews } from "../state/reviewsContext";
import { useState } from "react";
import { deleteReview } from "../data/data";
import ModalOverlay from "./modalOverlay";

export default function Review({
  id,
  title,
  content,
  rating,
  imgpath,
  reviewTitle,
}: ReviewType) {
  const { deleteReviewLocal, isModalOpen, setIsModalOpen } = useReviews();

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
      <div className="flex flex-col w-96 bg-zinc-900 rounded-lg duration-100 transition-transform">
        <div className="flex flex-row items-center gap-3 p-4 font-bold">
          <h1 className="text-3xl mr-auto">{title}</h1>
          <h3>
            {rating} <span className="text-xs">rating</span>
          </h3>
        </div>
        <Image
          src={imgpath}
          alt="Image of video game"
          objectFit="contain"
          width={616}
          height={353}
          className="object-cover h-40 w-auto"
        ></Image>
        <div className="p-4 h-32 overflow-hidden">
          <h2 className="text-lg font-bold truncate">{reviewTitle}</h2>
          <p className="italic line-clamp-3">"{content}"</p>
        </div>
        <div className="flex flex-row">
          <button
            className="w-1/3 bg-red-500 rounded-bl-lg h-8 transition hover:bg-red-800"
            onClick={(event) => handleDelete(event)}
          >
            Delete
          </button>
          <button className="w-2/3 bg-blue-500 rounded-br-lg h-8 transition hover:bg-zinc-200 hover:text-black">
            Read more
          </button>
        </div>
      </div>
    </>
  );
}
