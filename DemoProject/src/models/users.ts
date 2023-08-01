import sequelize from "../db/connection";
import { Sequelize } from "sequelize";
import { Model, DataTypes } from 'sequelize';
// import { SERIALIZABLE } from "sequelize/types/table-hints";

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {

  public id!: number
  public user_name!: string;
  public email!:string;
  public password!: string;
  public mobile_no!: number;
  public profilePic!:Blob;
    
   
    // public password!: string;
  // public password!: string;
  // public password!: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  user_name: {
    type: DataTypes.STRING,
    allowNull: false
    
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
    
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  
  },
  mobile_no: {
    type: DataTypes.INTEGER,
    allowNull: false
    
  },
  profilePic: {
    type: DataTypes.BLOB,
  },
  // gender: {
  //   type: DataTypes.ENUM('male','female')
   
  // },
  // DOB: {
  //   type: DataTypes.DATE
    
  // },
  // created_at: {
  //   type: DataTypes.DATE
    
  // },
  // updated_at: {
  //   type: DataTypes.DATE
   
  // },

}, {

  sequelize, 
  modelName: 'users' 
});
// sequelize.sync({ alter: true });
console.log("user Table created")
// console.log(User === sequelize.models.users); // true



export default User;
