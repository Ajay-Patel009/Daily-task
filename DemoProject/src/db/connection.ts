import {Sequelize} from 'sequelize'


const sequelize = new Sequelize('projectDB', 'postgres', 'postgres@1', {
    host: 'localhost',
    dialect:'postgres'
  });

export default sequelize;