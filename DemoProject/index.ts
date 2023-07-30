import connection from "./src/db/connection";
import express from 'express';
import bodyParser from 'body-parser'
import passwordReset from './src/router/passwordReset'
import uploadPic from "./src/router/uploadPicRouter";
import { createClient } from 'redis';
// import  uploadProduct  from "./src/router/productupload";
import authRoutes from './src/router/authRoutes'
import userRoutes from './src/router/userRoutes';
import productRoutes from './src/router/productsRoutes'
// import { uploadProduct } from "./src/controller/productController/pruductUploadController";





const app= express();
app.use(bodyParser.json());

try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
 

  // import { createClient } from 'redis';

  // const client = createClient();
  
  // client.on('error', err => console.log('Redis Client Error', err));
  
  // client.connect();
  
  // client.set('key', 'value');
  // const value = await client.get('key');
  // await client.disconnect();
  
  

  
app.listen(3300,()=>{
    console.log("running");
})


app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',productRoutes)
// app.use('/deleteuser',deleteUser)
app.use('/uploadpic',uploadPic)
app.use("/api/password-reset", passwordReset);
// app.use('/uploadProducts',uploadProduct)








