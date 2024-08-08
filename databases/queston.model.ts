import mongoose, { Schema, Document  } from "mongoose";
 
//Make Question Schema Interface for Typescript
export interface IQuestion extends Document{
     title: string;
     content: string;
     tags: Schema.Types.ObjectId[];
     views: number;
     upvotes: Schema.Types.ObjectId[];
     downvotes: Schema.Types.ObjectId[];
     author: Schema.Types.ObjectId;
     answers: Schema.Types.ObjectId[];
     createdAt: Date;
}

// Build the schema 
const QuestionSchema = new mongoose.Schema({
      title: {
        type: String,
        require: [true , "Please give a title"]
      },
      content: {
        type: String,
        require: [true]
      },
      tags: {
        type: Schema.Types.ObjectId,
        ref: 'Tag'
      },
      views: {
        type: Number,
        default: 0,
      },
      upvotes: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      downvotes: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      author:{
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      answers: {
        type: Schema.Types.ObjectId,
        ref:'Answer'
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
})

export const Question = mongoose.model<IQuestion>("Question", QuestionSchema)
