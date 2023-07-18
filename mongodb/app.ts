import connectToDatabase from '../mongodb/src/db/connection';
// import UserModel from '../mongodb/src/models/user';
import Users from '../mongodb/src/models/user';
import posts from './src/models/post';
import follower from './src/models/follower';
import action from './src/models/actions';
// import createUser from '../mongodb/src/models/user';
import express from 'express';
import session from './src/models/session';





//   try {
    
//     const c= createUser;
//   }
//   catch(err)
//   {
//     console.log("err");
//   }

// mport express from 'express';
// import { connection } from "./src/db/connection";
// import { User } from './src/models/user';

// import { GetData } from './src/controllers/getController';

const app = express();
app.use(express.json())



const port = 3000;
app.listen(port,async()=>{
    console.log('listening on 3000');
    await connectToDatabase()
    await Users;
    await posts;
    await follower;
    await action;
    await session
});


  
 

















