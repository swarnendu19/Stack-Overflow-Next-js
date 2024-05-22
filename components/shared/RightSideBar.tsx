import Image from "next/image";
import Link from "next/link";
import React from "react";
import RernderTag from "./RernderTag";

const hotQuestion = [
  {
    id: "1",
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  {
    id: "2",
    title: "Is it only me or the font is bolder than necessary?",
  },
  {
    id: "3",
    title: "Redux Toolkit Not Updating State as Expected",
  },
  {
    id: "4",
    title: "Can I get the course for free?",
  },
  {
    id: "5",
    title: "Async/Await Function Not Handling Errors Properly",
  },
];

const tags = [
  {
    id: "1",
    numberOfTags: 30,
    topic: "NextJS",
  },
  {
    id: "2",
    numberOfTags: 30,
    topic: "ReactJS",
  },
  {
    id: "3",
    numberOfTags: 30,
    topic: "EtherJS",
  },
  {
    id: "4",
    numberOfTags: 30,
    topic: "NextJS",
  },
  {
    id: "5",
    numberOfTags: 30,
    topic: "NextJS",
  },
];

const RightSideBar = () => {
  return (
    <section
      className="sticky
     right-0
     top-0
     flex
     h-screen
     w-[350px]
     flex-col
     gap-6
     overflow-y-auto
     border-l
     p-6
     pt-36
     shadow
     max-xl:hidden
     bg-light-900 dark:bg-dark-200
     border-light-200 dark:border-dark-700
     shadow-light-300 dark:shadow-none
     scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600
   "
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestion.map((question) => (
            <Link
              href={`/questions/${question.id}`}
              key={question.id}
              className="flex cursor-pointer item-center justify-between
            gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invrt-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {tags.map((topics) => (
            <RernderTag
             key={topics.id}
             _id = {topics.id}
             name = {topics.topic}
             totalQuestions = {topics.numberOfTags}
             showCount
           />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
