import React from 'react'

interface QuestionProps{
    id: number;
    title: string;
    tags: {
        id: string;
        name: string;
    }[];
    author: {
        id: string;
        name: string;
        picture: string ;
    };
    upvotes: number;
    views: number;
    answers: Array<object>;
    createdAt: Date;
}

const QuestionCard = ({
    id,
    title,
    tags,
    author,
    upvotes,  
    views,
    answers,
    createdAt
}: QuestionProps) => {
  return (
    <div className='card-wrapper round-[10px] p-9 sm:px-11 '>
        <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
          <div>
            <span className='subtle-regular text-dark400_light700 line-clamp-1
            flex sm:hidden'>
                {String(createdAt)}          
            </span>
          </div>
        </div>
        {title}
    </div>
  )
}

export default QuestionCard
