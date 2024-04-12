'use client'
import { MouseEventHandler, useEffect, useState } from 'react';
import { addReview } from '../../../utils/data'


type Review = {
    title: string | null,
    content: string | null,
    imgpath: string | null,
    rating: number | null,
    reviewTitle: string | null
}

type ModalProp = {
    onClickOutside: MouseEventHandler<HTMLDivElement>
}

export type ModalIds = "showHideModal" | "hideShowModal"

export default function AddReviewModal({ onClickOutside }: ModalProp) {
    const [newReview, setNewReview] = useState<Review>({
        title: '',
        content: '',
        imgpath: '',
        rating: null,
        reviewTitle: ''
    });

    async function handleSumbit({ title, content, imgpath, rating, reviewTitle }: Review) {
        console.log('added')
        const res = await addReview(
            title,
            content,
            imgpath,
            rating,
            reviewTitle
        );

    }

    return (
        <div>
            <div className="fixed inset-0 bg-gray-700 bg-opacity-50 h-full w-full flex items-center justify-center" id="showHideModal" onClick={onClickOutside}>
                <div className="p-8 border w-1/2 shadow-lg rounded-md bg-zinc-500">
                    <h3 className="text-center text-3xl w-full">Add review</h3>
                    <div className='flex flex-col bg-slate-300 p-4 rounded-lg'>
                        <label htmlFor="gameTitle" className='text-lg'>Video game title:</label>
                        <input className='text-lg' type="text" name="gameTitle" id="gameTitle" onChange={(e) => setNewReview({ ...newReview, title: e.target.value })} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="reviewTitle" className='text-lg'>Review title:</label>
                        <input type="text" name="reviewTitle" id="reviewTitle" onChange={(e) => setNewReview({ ...newReview, reviewTitle: e.target.value })} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="content" className='text-lg'>Content:</label>
                        <input type="text" name="content" id="content" onChange={(e) => setNewReview({ ...newReview, content: e.target.value })} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="imgPath" className='text-lg'>Image path:</label>
                        <input type="text" name="imgPath" id="imgPath" onChange={(e) => setNewReview({ ...newReview, imgpath: e.target.value })} />
                    </div>
                    <button onClick={() => handleSumbit(newReview)}>Add review</button>
                </div>
            </div>
        </div>
    );
}