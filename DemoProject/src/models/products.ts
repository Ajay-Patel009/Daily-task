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

class Product extends Model {
  static set(arg0: { bid_price: any; bidder_id: any; }, arg1: { where: { product_name: any; }; }) {
      throw new Error('Method not implemented.');
  }
  static
      // },
      findById(userId: string) {
          throw new Error('Method not implemented.');
  }
  public id!: number
  public user_id!: number;
  public product_name!:string;
  public description!: string;
  public base_price!: number;
  public images!: Blob;
  public bid_price!: number;
  public bidder_id!: number;
  public title!: string;
  public category_id!: number;
  public address!: string;
}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
    
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
    
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
    
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
    
  },
  base_price: {
    type: DataTypes.INTEGER,
    allowNull: false
    
  },
  images: {
    type: DataTypes.BLOB,
 
    
  },
  bid_price: {
    type: DataTypes.INTEGER,
   
    
  },
  bidder_id: {
    type: DataTypes.INTEGER,
 
    
  },
  category_id: {
    type: DataTypes.INTEGER,
 },
 address: {
  type: DataTypes.STRING,
  

  
},
 
  // created_at: {
  //   type: DataTypes.DATE
    
  // },
  // updated_at: {
  //   type: DataTypes.DATE
   
  // },

}, {

  sequelize, 
  modelName: 'products' 
});
// sequelize.sync({ force: true });
// console.log("hii")
// console.log(Product === sequelize.models.products); // true



export default Product;
