import connection from "./src/db/connection";
import express from 'express';
import bodyParser from 'body-parser'
import { Request,Response } from "express";
import User from "./src/models/users";
// import { signup } from "./src/controller/signupController";
import  signup  from "./src/router/signupRouter";
import login  from "./src/router/loginRouter";
import passwordReset from './src/router/passwordReset'





const app= express();
app.use(bodyParser.json());

try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
 
app.listen(3300,()=>{
    console.log("running");
})

app.use('/signup',signup);
app.use('/login',login);
app.use("/api/password-reset", passwordReset);








