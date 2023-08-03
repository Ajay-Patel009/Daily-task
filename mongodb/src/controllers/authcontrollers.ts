import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import registration from '../models/registration';
import User from '../models/user';






export const signup= async(req: Request, res: Response) => {
    const { user_name, email, password } = req.body;
  
    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to hash password' });
      }
  
      // Create a new user document using the User model
      const newUser = new registration({user_name, email, password: hashedPassword });
  
      // Save the user document to the database
      newUser
        .save()
        .then(() => {
          res.status(201).json({ message: 'User registered successfully' });
        })
        .catch((err) => {
          res.status(500).json({ error: 'Failed to register user' });
        });
    });
  };
  
  //Login API endpoint
  export const login = async(req: Request, res: Response) => {
    const { email, password } = req.body;
    registration.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ error: 'Authentication failed' });
        }
        bcrypt.compare(password, user.password, (err, result) => {
          if (err || !result) {
            return res.status(401).json({ error: 'Authentication failed' });
          }
          const token = jwt.sign({ userId: user._id }, '8765');
  
          res.status(200).json({ token });
        });
      })
      .catch((err) => {
        res.status(500).json({ error: 'Failed to authenticate user' });
      });
  };
  

  