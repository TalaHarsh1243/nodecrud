const Sequelize=require("sequelize");
const db=new Sequelize("mca","root","",{
    host:"localhost",
    dialect:"mysql",
});

db.authenticate()
.then(()=>{
    console.log("connection has been established successfully");
})

.catch((err)=>{
    console.error("unable to connect",err);
});

 module.exports=db;