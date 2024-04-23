import type { ReviewType } from "../types/types";
import Image from 'next/image'

export default function ReviewModal({ id, title, content, reviewTitle, rating, imgpath }: ReviewType) {
    return (
        <div className="flex flex-col justify-center items-center gap-4 text-white w-full min-w-fit">
            <div className="flex flex-row justify-between items-center w-full rounded-full bg-gray-900 p-4">
                <h2 className="font-bold text-xl">{title}</h2>
                <h3 className=" font-bold text-right "><span className="text-lg">{rating}</span> rating</h3>
            </div>
            <Image
                src={imgpath}
                alt="Image of game"
                width={400}
                height={400}
                className="rounded-md w-full"
            />
            <h2 className="font-bold text-2xl text-center pt-10">{reviewTitle}</h2>
            <p className="p-4">{content}</p>
        </div>
    )
}