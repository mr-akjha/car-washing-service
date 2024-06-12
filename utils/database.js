const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_car_wash", "root", "Abhi@123", {
  host: "localhost",
  dialect: "mysql",
});


module.exports = sequelize;