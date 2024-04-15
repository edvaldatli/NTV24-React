import Image from 'next/image'



type Review = {
    title: string,
    content: string,
    rating: number,
    imgPath: string,
}

export default function Review({ title, content, rating, imgPath }: Review) {
    return (
        <div className="flex flex-col w-96 bg-black rounded-lg">
            <div className='flex flex-row items-center gap-3 p-4 font-bold'>
                <h1 className='text-3xl mr-auto'>{title}</h1>
                <h3>{rating} <span className='text-xs'>rating</span></h3>
            </div>
            <Image src={imgPath} alt="Image of video game" objectFit='contain' width={616} height={353} className='object-cover h-40 w-auto'></Image>
            <div className='p-4'>
                <h2 className='text-lg text-ce'>Pinnacle of first person shooters</h2>
                <p className='italic'>{content}</p>
            </div>
            <button className='w-full bg-zinc-500 rounded-b-lg h-8 transition hover:bg-zinc-200 hover:text-black'>Read more</button>
        </div>
    )
}