import connectToDatabase from '../mongodb/src/db/connection';
import Users from '../mongodb/src/models/user';
import posts from './src/models/post';
import followers from './src/models/follower';
import action from './src/models/actions';
import express from 'express';
import session from './src/models/session';
import registration from './src/models/registration';
import authroutes from '../mongodb/src/routes/authroutes'
import follower from '../mongodb/src/routes/followerRoutes';
import postRoutes from '../mongodb/src/routes/postRoutes';
import * as YAML from 'yamljs';
import { redisConnect } from './src/db/redis';
import fetch from 'node-fetch';
import swaggerUi from 'swagger-ui-express';
// import * as YAML from 'yamljs'
import * as path from 'path'

// import curl from 'curl'
// import swaggerJsDocs from 'swagger-jsdoc';
const app = express();

const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml')); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));





app.use(express.json())




const port = 3500;
app.listen(port, async () => {
  console.log('listening on 3500');
  await connectToDatabase()
  await registration;
  await Users;
  await posts;
  await followers;
  await action;
  await session;

});

app.use('/auth', authroutes);   //Signup login
app.use('/followers', follower); // get number of followers
app.use('/post', postRoutes) // create and update post


// try {
//   redisConnect();
//   console.log("redis connected");
// }
// catch (err) { console.log(err); }


app.get('/api/data', (req, res) => {
  Users.find()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to retrieve data' });
    });
});

app.get('/getresponse', (req, resp) => {
  resp.send("hello")
})

