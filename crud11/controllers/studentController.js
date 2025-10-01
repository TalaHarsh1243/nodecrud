const { where } = require("sequelize");
const Student=require("../models/Student");

exports.index=(req,res)=>{
Student.findAll()
    .then((students)=>{
    console.log("Record retrived",students);
    res.send({message:"student retived successfully",data:students});
})

.catch((error)=>{
    console.error("error retived student",error);
    res.send({message:"error retived student",error:error});
});

};

exports.store=(req,res)=>{

    Student.create(req.body)

    .then((newStudent)=>{
    console.log("Record creating",newStudent);
    res.send({message:"student creating successfully",data:newStudent});
})

.catch((error)=>{
    console.error("error creating student",error);
    res.send({message:"error creating student",error:error});
});
};

exports.update=(req,res)=>{

    Student.update(req.body,{where:{id:req.params.id}})

        .then(()=>{
    console.log("Data updated");
    res.send({message:"student updated successfully",data:req.body});
})

.catch((error)=>{
    console.error("error updating student",error);
    res.send({message:"error updating student",error:error});
});


};

exports.delete=(req,res)=>{


    Student.destroy({where:{id:req.params.id}})
        .then(()=>{
            console.log("deleted");
            res.send({message:"student deleted successfully"});
        })
        .catch((error)=>{
            console.error("eroor deleting",error)

        });
};