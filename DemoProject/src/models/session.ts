import sequelize from "../db/connection";
import { Sequelize } from "sequelize";
import { Model, DataTypes } from 'sequelize';

class Session extends Model {
    public id!: number;
    public user_id!:number;
    // public created_at: Date;
    public status!:boolean;
   
  }
  
  Session.init({
    user_id: {
        type: DataTypes.INTEGER,
        // primaryKey: true,
        // autoIncrement: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        // primaryKey: true,
        // autoIncrement: true,
      },
    
}, {
  
    sequelize, 
    modelName: 'sessions' 
  });
//   sequelize.sync({ force: true });
  console.log("hii")
  console.log(Session === sequelize.models.sessions); // true
  
  
  
  export default Session;
  