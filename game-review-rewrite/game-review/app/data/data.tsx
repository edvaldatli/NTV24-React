import PocketBase from "pocketbase";

const DEFAULT_IMAGE =
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

type Review = {
  id: string;
  title: string;
  content: string;
  imgpath?: string;
  rating: number;
  reviewTitle: string;
};

type ListOfReviews = Review[];

const pb = new PocketBase("http://127.0.0.1:8090");

export const getAllReviews = async (): Promise<ListOfReviews> => {
  try {
    const records = await pb.collection("reviews").getFullList({
      sort: "-created",
    });

    const result: ListOfReviews = records.map((record) => ({
      id: record.id,
      title: record.title,
      content: record.content,
      imgPath: record.imgPath,
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
}: Review) => {
  try {
    const data = {
      title,
      content,
      imgpath,
      rating,
      reviewTitle,
    };

    const res = await pb.collection("reviews").create(data);

    if (!res.ok) {
      throw new Error("Error communicating with database");
    }

    return res;
  } catch (error) {
    console.error("Failed to add review", error);
    throw error;
  }
};
