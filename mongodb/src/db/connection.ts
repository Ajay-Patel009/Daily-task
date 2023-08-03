
import mongoose, { Connection } from 'mongoose';


const connectToDatabase = async (): Promise<Connection> => {
  try {
    const connection = await mongoose.connect('mongodb://192.168.2.190:27017/mongo_database', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    });
    console.log('Connected to MongoDB');
    return connection.connection;
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
};

export default connectToDatabase;






// import express from 'express';
// import mongoose from 'mongoose';


// const mongo = mongoose.connect('mongodb://localhost/mongodb', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Failed to connect to MongoDB', error);
//   });

//   export default mongo;