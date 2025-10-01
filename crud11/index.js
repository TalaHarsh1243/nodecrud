const express = require("express");
const sequelize = require("sequelize"); 
const studentRoute = require("./routes/studentRoute");

const app = express();
const PORT = 81;

app.use(express.json());
app.use("/student", studentRoute);

app.listen(PORT, () => {
    console.log("Server is running at http://127.0.0.1:" + PORT);
});
