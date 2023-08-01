import sequelize from "../db/connection";
import { Model, DataTypes } from 'sequelize';


class Category extends Model {
   
    public category_name!:string;
    public parent_id!:number;
    public category_id!: number;
    

   
  }
  
  Category.init({
    // category_id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      
      
    },
  },
    
 {
  
    sequelize, 
    modelName: 'categories' 
  });

  // Category.hasMany(Category, {
  //   as: 'subcategories',
  //   foreignKey: 'parent_id',
  // });
  
  // Category.belongsTo(Category, {
  //   as: 'parent',
  //   foreignKey: 'parent_id',
  // });

  // sequelize.sync({ alter: true });
  console.log("category table created")
  console.log(Category === sequelize.models.categories); // true
  
  
  
  export default Category;
  