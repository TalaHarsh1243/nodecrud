const express=require("express");
const router=express.Router();
const studentController=require("../controllers/studentController");

router.get("/index",studentController.index);
router.post("/store",studentController.store);
router.put("/update/:id",studentController.update);
router.delete("/delete/:id",studentController.delete);

module.exports  = router;


