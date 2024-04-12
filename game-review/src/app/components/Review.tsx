import Image from "next/image";
import { MouseEventHandler } from "react";
import deleteIcon from '../../../public/deleteIcon.svg'

type ReviewProps = {
  title: string;
  content: string;
  rating: string;
  imgpath: string;
  reviewTitle: string;
  handleDelete: MouseEventHandler<HTMLButtonElement>
};

const Review = ({
  title,
  content,
  rating,
  imgpath,
  reviewTitle,
  handleDelete
}: ReviewProps) => {
  return (
    <div className="bg-teal-900 rounded-lg text-white w-5/12 shadow-md text-pretty transition-opacity ease-in-out">
      <div className="w-full flex flex-row justify-start p-4">
        <button onClick={handleDelete}
          className="flex justify-center group items-center top-0 right-0 bg-red-600 rounded-full h-10 w-10 text-black transition-all hover:bg-red-400 hover:text-opacity-100 hover:w-20"
        >
          <Image src={deleteIcon} width={20} height={20} className="" alt="Delete"></Image>
          <p className="hidden group-hover:block truncate transition-all ease-in-out">Delete</p>
        </button>
        <h2 className="text-4xl font-bold p-12 truncate">{title}</h2>
        <div className="flex flex-row ml-auto text-sm font-bold text-zinc-300 bg-zinc-700 rounded-full h-10 px-2 items-center gap-1">
          {rating}/5
          <svg
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="fill-yellow-400"
          >
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
          </svg>
        </div>
      </div>
      <Image
        className="h-64 aspect-auto w-full object-cover"
        src={imgpath}
        alt="Image of game"
        width={400}
        height={400}
      />
      <div className="flex flex-col p-4 items-center h-full">
        <h2 className="font-bold text-2xl px-2 pt-6 text-center">
          {reviewTitle}
        </h2>
        <p className="p-2 break-words overflow-hidden font-light text-zinc-200 text-md">
          "{content}"
        </p>
        <button className="relative bottom-0 right-0 bg-gray-900 px-4 items-center ml-auto m-4 h-10 rounded-full shadow-md hover:bg-slate-400 transition">Read more {">"}</button>
      </div>
    </div>
  );
};

export default Review;
