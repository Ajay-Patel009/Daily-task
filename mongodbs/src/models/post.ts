import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import User from './user';
import connectToDatabase from '../db/connection';

interface IPost {
  content: URL;
  auther: mongoose.Types.ObjectId;
  description: string | null;
  tags: object;
}

const  postSchema = new Schema<IPost>({
  content: { type: String, default: null },
  auther: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,},
  description :{type :String, default: null},
  tags: {type: Array, default: []}
  });

const  post = model<IPost>('posts', postSchema);
export default post;





