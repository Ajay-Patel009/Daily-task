import sequelize from "../db/connection";
import { Sequelize } from "sequelize";
import { Model, DataTypes } from 'sequelize';

class Catogory extends Model {
    public id!: number;
    public category_name!:string;
    public subcategory!:string;
    public image ! : Blob;   
  }
  
  Catogory.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Catogory_name: {
        type: DataTypes.STRING,
    
      },
    
}, {
  
    sequelize, 
    modelName: 'categories' 
  });
//   sequelize.sync({ force: true });
  console.log("hii")
  console.log(Catogory === sequelize.models.sessions); // true
  
  
  
  export default Catogory;
  