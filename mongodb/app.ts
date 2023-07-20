import connectToDatabase from '../mongodb/src/db/connection';
// import UserModel from '../mongodb/src/models/user';
import Users from '../mongodb/src/models/user';
import posts from './src/models/post';
import followers from './src/models/follower';
import action from './src/models/actions';
// import createUser from '../mongodb/src/models/user';
import express from 'express';
import session from './src/models/session';
import registration from './src/models/registration';
import authroutes from '../mongodb/src/routes/authroutes'
import authenticateJWT from './src/middleware/jwtmiddleware'
import auth from './src/middleware/jwtmiddleware';
import mongoose from 'mongoose';
// import { Request,response }from 'express';

const app = express();
app.use(express.json())



const port = 3500;
app.listen(port,async()=>{
    console.log('listening on 3500');
    await connectToDatabase()
    await registration;
    await Users;
    await posts;
    await followers;
    await action;
    await session;

});

app.use('/auth',authroutes);

app.post('/api/data',auth, (req,res) => {
  console.log("check")
    const { name, gender, email, isBlocked,isDeleted, profileImage, isVerified, bio, password } = req.body;
    console.log(name);
    const user = new Users({  name, gender, email, isBlocked,isDeleted, profileImage, isVerified, bio, password });
    user
      .save()
      .then(() => {
        res.status(201).json({ message: 'Data saved successfully' });
        console.log(user)
      })
      .catch((err) => {
        res.status(500).json({ error: 'Failed to save data' });
      });
  });



  app.get('/api/data', (req,res) => {
    Users.find()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: 'Failed to retrieve data' });
      });
  });


  // app.get('/api/data', (req,res) => {
  //   // Retrieve all documents from the database
  //   follower.find()
  //     .then((user) => {
  //       res.status(200).json(user);
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: 'Failed to retrieve data' });
  //     });
  // });

  app.post("/follower", async (req,res) => {
    try {
      const data = req.body.followee_id;
      console.log(data)
      if (!mongoose.isValidObjectId(data)) {
        return res.status(400).json({ error: "Invalid Object ID" });
      }
      const student = await followers.findOne({data});
  
  console.log(student);
  
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
      return res.json({follower_id :student.follower_id });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  

  
  


  
 

















