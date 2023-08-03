import { Date, Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import User from './user';


interface IAction {
  post_id: mongoose.Types.ObjectId;
  user_id: mongoose.Types.ObjectId;
  action :  "likes"|"comments";
  comments?:
      {
        text : String,
        reply : String,
        created_at: Date,
        updated_at: Date
      },
  created_at: Date;
  updated_at: Date;
}

const  actionSchema = new Schema<IAction>({
  post_id: { type:mongoose.Schema.Types.ObjectId, ref: 'post',},
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,},
  
    comments: {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      text: String,
      created_at: { type: Date, default: Date.now },
      replies: [
        {
          user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
          text: String,
          created_at: { type: Date, default: Date.now },
        },
      ],
    },
    // created_at: { type: Date, default: Date.now },
  
  created_at :{type :Date},
  updated_at: {type: Date}
  });

const  action = model<IAction>('actions', actionSchema);
export default action;