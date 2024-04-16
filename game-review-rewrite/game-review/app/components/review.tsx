"use client";
import Image from "next/image";

type Review = {
  title: string;
  content: string;
  rating: number;
  imgPath: string;
  reviewTitle: string;
};

export default function Review({
  title,
  content,
  rating,
  imgPath,
  reviewTitle,
}: Review) {
  return (
    <div className="flex flex-col w-96 bg-zinc-900 rounded-lg">
      <div className="flex flex-row items-center gap-3 p-4 font-bold">
        <h1 className="text-3xl mr-auto">{title}</h1>
        <h3>
          {rating} <span className="text-xs">rating</span>
        </h3>
      </div>
      <Image
        src={imgPath}
        alt="Image of video game"
        objectFit="contain"
        width={616}
        height={353}
        className="object-cover h-40 w-auto"
      ></Image>
      <div className="p-4 h-32 overflow-hidden">
        <h2 className="text-lg font-bold">{reviewTitle}</h2>
        <p className="italic line-clamp-3">"{content}"</p>
      </div>
      <div className="flex flex-row">
        <button className="w-1/3 bg-red-500 rounded-bl-lg h-8 transition hover:bg-red-800 ">
          Delete
        </button>
        <button className="w-2/3 bg-blue-500 rounded-br-lg h-8 transition hover:bg-zinc-200 hover:text-black">
          Read more
        </button>
      </div>
    </div>
  );
}
