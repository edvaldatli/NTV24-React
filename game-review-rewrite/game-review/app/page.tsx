"use client";
import Review from "./components/review";

const data = {
  title: "Counter-Strike 2",
  reviewTitle: "The pinnacle of first person shooters",
  content:
    "A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. A shooter, omg. ",
  rating: 4.5,
  imgPath:
    "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1698860631",
  id: "044",
};

export default function Home() {
  const { title, reviewTitle, content, rating, imgPath, id } = data;

  return (
    <>
      <Review
        title={title}
        reviewTitle={reviewTitle}
        content={content}
        rating={rating}
        imgPath={imgPath}
        key={id}
      />
    </>
  );
}
