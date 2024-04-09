import Image from "next/image";

type ReviewProps = {
  title: string;
  content: string;
  rating: string;
  imgpath: string;
  reviewTitle: string;
};

const Review = ({
  title,
  content,
  rating,
  imgpath,
  reviewTitle,
}: ReviewProps) => {
  return (
    <div className="bg-teal-900 rounded-lg text-white w-1/3 shadow-md text-pretty">
      <div className="w-full flex flex-row justify-start p-4">
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
      <div className="flex flex-col p-4 items-center">
        <h2 className="font-bold text-2xl px-2 pt-6 text-center">
          {reviewTitle}
        </h2>
        <p className="p-2 break-words overflow-hidden font-light text-zinc-200 text-md">
          "{content}"
        </p>
      </div>
      <button className="flex flex-row justify-end bg-gray-900 px-4 items-center ml-auto m-4 h-10 rounded-full shadow-md hover:bg-slate-400 transition">Read more ></button>
    </div>
  );
};

export default Review;
