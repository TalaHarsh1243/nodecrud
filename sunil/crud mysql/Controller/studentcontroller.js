const student = require("../models/studentmodel");
exports.index = (req, res) => {
  student.findAll()
    .then((students) => {
      console.log("All students retrieved successfully:", students);
      res.send({ message: "Students retrieved successfully", data: students });
    })
    .catch((error) => {
      console.error("Error retrieving students:", error);
      res.status(500).send({ message: "Error retrieving students", error });
    });
};
exports.show = (req, res) => {
    const id = req.params.id;
    student.findByPk(id)
        .then((student) => {
            if (student) {
                console.log("Student retrieved successfully:", student);
                res.send({ message: "Student retrieved successfully", data: student });
            } else {
                res.status(404).send({ message: "Student not found" });
            }
        })
        .catch((error) => {
            console.error("Error retrieving student:", error);
            res.status(500).send({ message: "Error retrieving student", error });
        });
};
exports.store = (req, res) => {
  student.create(req.body)
    .then((newStudent) => {
      console.log("Student created successfully:", newStudent);
      res.send({ message: "Student created successfully", data: newStudent });
    })
    .catch((error) => {
      console.error("Error creating student:", error);
      res.status(500).send({ message: "Error creating student", error });
    });
};
exports.update = (req, res) => {
  student.update(req.body, { where: { id: req.params.id } })
    .then(() => {
      console.log("Student updated successfully");
      res.send({ message: "Student updated successfully", data: req.body });
    })
    .catch((error) => {
      console.error("Error updating student:", error);
      res.status(500).send({ message: "Error updating student", error });
    });
};
exports.delete = (req, res) => {
  student.destroy({ where: { id: req.params.id } })
    .then(() => {
      console.log("Student deleted successfully");
      res.send({ message: "Student deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting student:", error);
      res.status(500).send({ message: "Error deleting student", error });
    });
};