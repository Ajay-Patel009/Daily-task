import { Date, Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import User from './user';
import connectToDatabase from '../db/connection';

interface ISession {
  user_id: mongoose.Types.ObjectId;
  session_token: String;
  last_active_at_at: Date;
  created_at : Date;
  updated_at: Date;
  device_id : String;
  IP_address : String;
}

const  actionSchema = new Schema<ISession>({
  user_id: { type:mongoose.Schema.Types.ObjectId, ref: User,},
  session_token:{ type :String, default:null},
  created_at : {type: Date},
  updated_at: {type: Date},
  IP_address : {type: Date},
  device_id : {type:String},
  last_active_at_at : {type : String}
  });

const  session = model<ISession>('Sessions', actionSchema);
export default session;