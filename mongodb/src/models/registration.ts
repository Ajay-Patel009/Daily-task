import { Date, Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import User from './user';
import connectToDatabase from '../db/connection';

interface IRegistration {
  user_name: string;
  email : string;
  password : string;
}

const  registrationSchema = new Schema<IRegistration>({
  user_name:{ type :String, default:null},
  email: {type : String, default: null},
  password: {type : String, default:null}
});

const  registration = model<IRegistration>('registration', registrationSchema);
export default registration;