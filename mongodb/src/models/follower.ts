import { Date, Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import User from './user';
import connectToDatabase from '../db/connection';

interface IFollower {
  follower_id: mongoose.Types.ObjectId;
  followee_id: mongoose.Types.ObjectId;
  created_at: Date;
  updated_at: Date;
}

const  followerSchema = new Schema<IFollower>({
  followee_id: { type:mongoose.Schema.Types.ObjectId, ref: 'User',},
  follower_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,},
  created_at :{type :Date},
  updated_at: {type: Date}
  });

const  followers = model<IFollower>('followers', followerSchema);
export default followers;