import { FormEvent, useEffect } from "react";
import { addReview } from "../data/data";
import { useReviews } from "../state/reviewsContext";

import type { ReviewType } from "../types/types";

export default function AddReviewModal() {
  const { reviews, addReviewLocal } = useReviews();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data: ReviewType = {
      id: "",
      title: event.target.title.value,
      reviewTitle: event.target.reviewTitle.value,
      content: event.target.content.value,
      imgpath: event.target.imgpath.value,
      rating: event.target.rating.value,
    };
    console.log("ADDREVIEWMODAL");
    try {
      const newReview = await addReview(data);
      addReviewLocal(newReview);
    } catch (error) { }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-white text-center">
        Add new review
      </h1>
      <form
        onSubmit={onSubmit}
        className="text-zinc-300 p-4 flex flex-col w-full gap-2"
      >
        <div>
          <label htmlFor="title">Name of video game</label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full border-b-2 border-black text-2xl text-black rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="reviewTitle">Title of Review</label>
          <input
            type="text"
            name="reviewTitle"
            id="reviewTitle"
            className="w-full border-b-2 border-black text-2xl text-black rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content">Review</label>
          <textarea
            name="content"
            id="content"
            rows={6}
            className="w-full border-b-2 border-black text-black rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="imgpath">Path of image (optional)</label>
          <input
            type="url"
            name="imgpath"
            id="imgpath"
            className="w-full border-b-2 border-black text-2xl text-black rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            min={0}
            max={5}
            step={0.1}
            name="rating"
            id="rating"
            className="w-full border-b-2 border-black text-2xl text-black rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="text-white p-4 bg-zinc-500 rounded-md text-lg font-bold mt-10"
        >
          Add Review
        </button>
      </form>
    </>
  );
}
