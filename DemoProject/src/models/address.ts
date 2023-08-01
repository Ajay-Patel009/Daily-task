import sequelize from "../db/connection";
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

class Address extends Model {
//   static set(arg0: { bid_price: any; bidder_id: any; }, arg1: { where: { product_name: any; }; }) {
//       throw new Error('Method not implemented.');
//   }
//   static
//       // },
//       findById(userId: string) {
//           throw new Error('Method not implemented.');
//   }
//   public id!: number
  public user_id!: number;
  public house_no!:string;
  public area!: string;
  public landmark!: string;
  public city!: string;
  public district!: string;
  public state!: string;
  public country!:string
  public zipCode!: number;
  public status!: boolean;
 
}

Address.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },

  user_id: {
    type: DataTypes.INTEGER,
    
    
  },
  house_no: {
    type: DataTypes.STRING,
    
    
  },
  area: {
    type: DataTypes.STRING,
    
    
  },
  landmark: {
    type: DataTypes.STRING,
    
    
  },
  city: {
    type: DataTypes.STRING,
    // allowNull: false
    
  },
  district: {
    type: DataTypes.STRING,
 
    
  },
  state: {
    type: DataTypes.STRING,
   
    
  },
  country: {
    type: DataTypes.STRING,
   
    
  },
  zipCode: {
    type: DataTypes.INTEGER,
   
    
  },
  status: {
    type: DataTypes.BOOLEAN,
   
    
  },

 

}, {

  sequelize, 
  modelName: 'addresses' 
});
// sequelize.sync({ force: true });
console.log("address table created")
// console.log(Product === sequelize.models.products); // true



export default Address;
