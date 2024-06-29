import Filter from "@/components/shared/Filter";
import LocalSearchBar from "@/components/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomePageFilters } from "@/constants/filter";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions= [
  {
    id: 1,
    title: "How to fix a bug in React?",
    tags: [
      { id: "1", name: "React" },
      { id: "2", name: "JavaScript" }
    ],
    author: {
      id: "a1",
      name: "John Doe",
      picture: "https://example.com/john.jpg"
    },
    upvotes: 15,
    views: 150,
    answers: [
      { id: "ans1", content: "You can use the React Developer Tools extension." },
      { id: "ans2", content: "Try to isolate the bug by checking the component's state and props." }
    ],
    createdAt: new Date('2023-04-01T10:00:00Z')
  },
  {
    id: 2,
    title: "What is the best way to learn TypeScript?",
    tags: [
      { id: "3", name: "TypeScript" },
      { id: "4", name: "Programming" }
    ],
    author: {
      id: "a2",
      name: "Jane Smith",
      picture: "https://example.com/jane.jpg"
    },
    upvotes: 20,
    views: 200,
    answers: [
      { id: "ans3", content: "Start with the official TypeScript documentation." },
      { id: "ans4", content: "Try building a small project using TypeScript." }
    ],
    createdAt: new Date('2023-05-01T12:00:00Z')
  },
  {
    id: 3,
    title: "How to optimize a website for SEO?",
    tags: [
      { id: "5", name: "SEO" },
      { id: "6", name: "Web Development" }
    ],
    author: {
      id: "a3",
      name: "Alice Johnson",
      picture: "https://example.com/alice.jpg"
    },
    upvotes: 30,
    views: 300,
    answers: [
      { id: "ans5", content: "Use relevant keywords in your content." },
      { id: "ans6", content: "Optimize your website's loading speed." }
    ],
    createdAt: new Date('2023-06-01T14:00:00Z')
  }
];

 
export default function Home() {
  return (
    <>
      {/* //Make h1 and Wrap with div "All Questions" */}

      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1> 

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
           <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link> 
      </div> 
       
       <div className="mt-11 flex justify-between gap-5
       max-sm:flex-col sm:items-center">
        <LocalSearchBar
         route = "/"
         iconPosition = "left"
         imgSrc = "/assets/icons/search.svg"
         placeholder  = "Search for Question"
         otherClasses = "flex-1"
        />  
       </div>    
        <Filter
         filters = {HomePageFilters}
         otherClasses = "min-h-[56px] sm:min-w-[170px]"
         containerClasses = "hidden max-md:flex"
        />
        <HomeFilters/>
        <div className="mt-10 flex w-full flex-col gap-6">
         
         {
          questions.length>0 ?
          questions.map((question)=>(
          <QuestionCard
           key={question.id}
           id = {question.id}
           tags={question.tags}
           title  = {question.title}
           author = {question.author}
           upvotes = {question.upvotes}
           views = {question.views}
           createdAt = {question.createdAt}
           answers = {question.answers}
          />
          )) : 
         <NoResult
          title = "There's no question to show"
          description = "Be the first to break the silence! Ask Question and Kickstart the discussion. Our Query could be the next big thing others learn from. Get Involved"
          link = "/ask-question"
          linkTitle = "Ask a Question"
         />}
        </div>
    </>
  )
}