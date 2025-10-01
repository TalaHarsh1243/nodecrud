
const sequelize = require('sequelize');

const db=new sequelize("node","root","",{
    host: "localhost",
    dialect: "mysql"
})

db.authenticate()
.then(()=>{
    console.log('Connection has been established successfully.');
}).catch(err=>{
    console.error('error aave che ',err);
});
//model
const student =db.define('student',{
   id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:sequelize.STRING,
        allowNull:false,
    },
    age:{
        type:sequelize.STRING,
        allowNull:false,
    },
    city:{
        type:sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:sequelize.STRING,
        allowNull:false,
    }
});
// // sync model
// student.sync({alter:true}).then(()=>{
//     console.log('successfully');

// })
// .catch((err)=>{
//     console.error('error',err);
// });

//insert data
student.create({
    name: "harsh",
    age: 21,
    city: "kalavad",
    email: "harsh1@gmail.com"
})
.then(() => {
    console.log('Data inserted successfully!');
})
.catch((error) => {
    console.error('Unable to insert data : ', error);
});

//retrieve data
student.findAll()
.then((students) => {
    console.log(students);
})
.catch((error) => {
    console.error('Unable to retrieve data : ', error);
});

//retrieve single data
student.findOne({ where: { id: 5 } })
.then((student) => {
    console.log(student);
})
.catch((error) => {
    console.error('Unable to retrieve data : ', error);
});

//update data
student.update({ city: 'rajkot' }, { where: { id: 4 } })
.then(() => {
    console.log('Data updated successfully!');
})
.catch((error) => {
    console.error('Unable to update data : ', error);
});

//delete data
student.destroy({ where: { id: 4 } })
.then(() => {
    console.log('Data deleted successfully!');
})
.catch((error) => {
    console.error('Unable to delete data : ', error);
});

