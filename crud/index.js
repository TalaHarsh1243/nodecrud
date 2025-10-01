const express = require("express");
const Sequelize = require("sequelize");

const studentRoute = require("express");
const sequelize = require("sequelize");

const StudentRoute = require("./routes/studentRoute");
const app = express();
const PORT = 81;
app.use(express.json());

app.use("/student", studentRoute);

app.listen(PORT, () => {
    console.log("server is running :127.0.0.1" +PORT);
});
