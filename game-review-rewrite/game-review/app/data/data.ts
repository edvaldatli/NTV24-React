import PocketBase from "pocketbase";
import type { ReviewType } from '../types/types'

import { useReviews } from "../state/reviewsContext";
import { Trykker } from "next/font/google";

const DEFAULT_IMAGE =
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

const pb = new PocketBase("http://127.0.0.1:8090");

export const getAllReviews = async (): Promise<ReviewType[]> => {
  console.log('called')
  try {
    const records = await pb.collection("reviews").getFullList({
      sort: "-created",
    });

    const result: ReviewType[] = records.map((record) => ({
      id: record.id,
      title: record.title,
      content: record.content,
      imgpath: record.imgpath,
      rating: record.rating,
      reviewTitle: record.reviewTitle,
    }));
    return result;
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    throw error;
  }
};

export const addReview = async ({
  title,
  content,
  imgpath = DEFAULT_IMAGE,
  rating,
  reviewTitle,
}: ReviewType) => {
  if(imgpath === ''){
    imgpath = DEFAULT_IMAGE;
  }
  try {
    const data = {
      title,
      content,
      imgpath,
      rating,
      reviewTitle,
    };

    const res: ReviewType = await pb.collection("reviews").create(data);

    return res;
  } catch (error) {
    console.error("Failed to add review", error);
    throw error;
  }
};

export const deleteReview = async (id: string) => {
  try {
    const res = await pb.collection('reviews').delete(id);

    return res
  } catch (e) {
    throw Error('Failed deleting review');
  }
}
