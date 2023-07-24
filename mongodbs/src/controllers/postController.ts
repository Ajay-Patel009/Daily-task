

import  { Request, Response } from 'express';
import mongoose from 'mongoose';
import Users from '../models/user';
import posts from '../models/post';
import auth from '../middleware/jwtmiddleware';









export const post = async(  req:Request,res:Response) => {
    console.log("check")
      const {  content, auther, description, tags}=req.body;
    //   console.log(name);
      const user = new posts({  content, auther, description, tags });
      user
        .save()
        .then(() => {
          res.status(201).json({ message: 'Post saved successfully' });
          console.log(user)
        })
        .catch((err) => {
          res.status(500).json({ error: 'Failed to save post' });
        });
    };



    export async function editPost(req: Request, res: Response) {
        try {
          const postId = req.body._id; // Access the post_id from the query parameters
          console.log(postId);
          const { description, content } = req.body;
      
          const post = await posts.findById(postId);
          if (!post) {
            return res.status(404).json({ message: 'Post not found' });
          }
      
          post.description = description;
          post.content = content;
          await post.save();
      
          res.status(200).json({ message: 'Post updated successfully' });
        } catch (error) {
          console.error('Error editing post :', error);
          res.status(500).json({ error: 'Failed to edit post' });
        }
      }
  