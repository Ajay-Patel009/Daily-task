import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import connectToDatabase from '../db/connection';

interface IUser {
  name: string | null;
  gender: 'male' | 'female' | 'others' | null;
  email: string | null;
  isBlocked: boolean;
  isDeleted: boolean;
  profileImage: string | null;
  isVerified: boolean;
  bio :String;
  password : String;
}

const userSchema = new Schema<IUser>({
  name: { type: String, default: null },
  gender: { type: String, default: null, enum: ['male', 'female', 'others', null] },
  bio : {type : String, default: null},
  email: { type: String, default: null },
  password : {type :String, default: null},
  isBlocked: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  profileImage: { type: String, default: null },
  isVerified: { type: Boolean, default: false },
});

 const User = model<IUser>('User', userSchema);
// const User = mongoose.model('User', userSchema);
export default User;


