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


// const createUser = async (): Promise<void> => {
//     try {
//       const connection = await connectToDatabase();
  
    
    
//       const newPost = new UserModel({
//         name: 'John Doe',
//         gender: 'male',
//         email: 'johndoe@example.com',
//         isBlocked: false,
//         isDeleted: false,
//         profileImage: null,
//         isVerified: false,
//       });
    
//       await newPost.save();
//       console.log('User created successfully');
    
//       await connection.close();
//       console.log('Connection closed');
//     } catch (error) {
//       console.error('Error creating user:', error);
//     }
//   };
  
//    export default createUser();


