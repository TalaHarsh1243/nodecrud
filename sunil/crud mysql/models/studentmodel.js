
const { Sequelize } = require("sequelize");
const db = require("../db");
const Student = db.define("student", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});
db.sync()
  .then(() => {
    console.log("Student table created successfully");
  })
  .catch((err) => {
    console.error("Unable to create table:", err);
  });

module.exports = Student;