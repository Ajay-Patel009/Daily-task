import sequelize from "../db/connection";
import { Sequelize } from "sequelize";
import { Model, DataTypes } from 'sequelize';

class Token extends Model {
    public id!: number;
    public token!:number;
    public created_at: Date;
   
  }
  
  Token.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    created_at: {
        type: DataTypes.DATE
        
      }
}, {
  
    sequelize, 
    modelName: 'tokens' 
  });
  // sequelize.sync({ force: true });
  console.log("hii")
  console.log(Token === sequelize.models.tokens); // true
  
  
  
  export default Token;
  